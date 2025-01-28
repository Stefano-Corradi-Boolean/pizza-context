import { createContext, useState, useContext } from "react";
import { useAlertContext } from "./AlertContext";
import axios from "axios";


const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  const { setAlertData } = useAlertContext();
  const [pizzas, setPizzas] = useState(null)
  const [pizza, setPizza] = useState(null);

  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

  const fetchData = () => {

    axios.get(`${baseApiUrl}/pizzas`)
      .then(res => {
        console.log(res.data);
        setPizzas(res.data)
      })
      .catch(err => {
        console.log('Errore nel caricamento delle pizze: ', err);
        setAlertData({ type: 'error', message: err.message })
      })

  }

  const getPizzaById = (id) => {
    axios.get(`${baseApiUrl}/pizzas/${id}`)
      .then(res => {
        setPizza(res.data)
      })
      .catch(err => {
        console.log('Errore nel caricamento della pizza', err);

      })
  }

  const removePizzaById = (id, goToList) => {
    axios.delete(`${baseApiUrl}/pizzas/${id}`)
      .then(res => {
        goToList()
      })
      .catch(error => {
        console.error("Errore ", error)
      })
  }

  const addPizza = (formData, goToList) => {
    const ingredientsArray = formData.ingredients
      .split(',')
      .map(item => item.trim());

    // imposto l'oggetto da inviare all'API
    const newPizza = { ...formData, ingredients: ingredientsArray }

    // chiamata in POST all'API inviando il nuovo elemento
    axios.post(`${baseApiUrl}/pizzas`, newPizza)
      .then(res => {
        goToList()
      })
  }

  const value = {
    pizzas,
    fetchData,
    pizza,
    getPizzaById,
    removePizzaById,
    addPizza
  }

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext }