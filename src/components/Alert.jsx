import { useAlertContext } from "../context/AlertContext";

const Alert = () => {
  const { alertData, setAlertData } = useAlertContext();
  const { type, message } = alertData;

  const closeAlert = () => {
    setAlertData({ type: '', message: null })
  }

  // se non c'è il messaggio di errore il componente restituisce null quindi non appare
  if (!message) return null;

  return (
    <div className="alert-container">
      <div className={`alert ${type || 'error'}`}>
        <p>{message}</p>
        <i onClick={closeAlert} className="fa-solid fa-xmark"></i>
      </div>
    </div>
  )
}

export default Alert
