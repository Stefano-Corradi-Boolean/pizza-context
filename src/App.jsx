import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactsPage from './pages/ContactsPage'
import DefaultLayout from "./layouts/DefaultLayout"
import PizzaListPage from "./pages/PizzaListPage"
import PizzaDetailPage from "./pages/PizzaDetailPage"
import PizzaCreate from "./pages/PizzaCreate"
import Error404Page from "./pages/Error404Page"
import { GlobalProvider } from "./context/GlobalContext"


const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/chi-siamo" Component={AboutPage} />
            <Route path="/contatti" Component={ContactsPage} />
            <Route path="/elenco-pizze" Component={PizzaListPage} />
            <Route path="/nuova-pizza" Component={PizzaCreate} />
            <Route path="/dettaglio-pizza/:id" Component={PizzaDetailPage} />
            <Route path="*" Component={Error404Page} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>

  )
}

export default App
