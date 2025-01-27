import { NavLink } from "react-router-dom"

const MainNav = () => {
  return (
    <nav className="container p-3">
      <ul className="nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/chi-siamo" className="nav-link" >Chi Siamo</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/elenco-pizze" className="nav-link" >Le nostre pizze</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/nuova-pizza" className="nav-link" >Nuova pizza</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contatti" className="nav-link" >Contatti</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav
