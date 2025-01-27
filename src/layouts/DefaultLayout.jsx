import MainNav from "../components/MAinNav"
import { Outlet } from "react-router-dom"

const DefaultLayout = () => {
  return (
    <>
      <header>
        <MainNav />
      </header>

      <main>
        {/* in Outlet si innesta il componente relativo alla rotta  */}
        <Outlet />
      </main>

      <footer className="container my-5 text-center">
        <p>by UdU</p>
      </footer>
    </>
  )
}

export default DefaultLayout
