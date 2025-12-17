import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Service from "./pages/Service"
import Portfolio from "./pages/Portfolio"
import Packages from "./pages/Packages"
import Contact from "./pages/Contact"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Service />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
