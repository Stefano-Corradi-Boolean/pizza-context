import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const PizzaCreate = () => {

  const { addPizza } = useGlobalContext();

  const initialFormData = {
    name: '',
    image: '',
    ingredients: ''
  }

  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const goToList = () => {
    navigate('/elenco-pizze')
  }

  const handleAddPizza = (e) => {
    e.preventDefault();
    addPizza(formData, goToList);
    setFormData(initialFormData)
  }

  return (
    <>
      <div className="container my-5">
        <div className="card">
          <div className="card-body">
            <h1 className="my-3">NUOVA PIZZA</h1>
            <div className="container my-5">
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <h2>Aggungi una nuova pizza</h2>
                  </div>
                  <form action="" onSubmit={handleAddPizza}>
                    <div className="mb-3">
                      <label htmlFor="name">Nome pizza</label>
                      <input
                        id='name'
                        type="text"
                        name='name'
                        className='form-control'
                        placeholder='Nome pizza'
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="image">URL immagine</label>
                      <input
                        id='image'
                        type="text"
                        name='image'
                        className='form-control'
                        placeholder='URL immagine'
                        value={formData.image}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="ingredients">Ingredienti (separati da virgola)</label>
                      <input
                        id='ingredients'
                        type="text"
                        name='ingredients'
                        className='form-control'
                        placeholder='Es. pomodoro, mozzarella'
                        value={formData.ingredients}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <button
                        className="btn btn-primary"
                        type='submit'
                      >
                        Aggiungi pizza
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PizzaCreate
