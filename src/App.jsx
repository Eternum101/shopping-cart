import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Store } from "./pages/Store"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import PartDetails from "./components/PartDetails"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {
  return (
  <ShoppingCartProvider>
    <div className="app-container">
    <Navbar />
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/:id" element={<PartDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
    <Footer />
    </div>
  </ShoppingCartProvider>
  )
}

export default App
