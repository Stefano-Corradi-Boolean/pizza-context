import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const PizzaDetailPage = () => {

  const { id } = useParams();
  const { pizza, getPizzaById, removePizzaById } = useGlobalContext()
  const navigate = useNavigate()

  const goToList = () => {
    navigate('/elenco-pizze')
  }
  const handleDeletePizza = () => {
    removePizzaById(id, goToList)
  }

  useEffect(() => {
    getPizzaById(id)
  }, [])



  return (
    <>
      <div className="container my-5">
        <div className="card">
          <div className="card-body">
            <h1>{pizza?.name}</h1>
            <img className="my-3 img-fluid" src={pizza?.image} alt={pizza?.name} />
            <p>
              Ingredienti: <strong>{pizza?.ingredients.join(', ')}</strong>
            </p>
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-warning"
                onClick={() => navigate(-1)}
              >Torna</button>
              <button
                className="btn btn-danger"
                onClick={handleDeletePizza}
              >Elimina</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PizzaDetailPage
