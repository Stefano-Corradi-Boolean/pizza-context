import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const PizzaListPage = () => {

  const { pizzas, fetchData } = useGlobalContext();

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <>
      <div className="container my-5">
        <div className="card">
          <div className="card-body">
            <h1>ELENCO PIZZE</h1>
            <ul className="list-group my-5">
              {pizzas === null ?
                (<h2>Loading...</h2>)
                :
                (
                  pizzas.map(pizza => (
                    <li key={pizza.id} className="list-group-item d-flex justify-content-between">
                      <span>{pizza.name}</span>
                      <Link className="btn btn-success" to={`/dettaglio-pizza/${pizza.id}`}>Vedi dettaglio</Link>
                    </li>
                  ))
                )
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default PizzaListPage
