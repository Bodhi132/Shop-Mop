import Products from "./pages/Products"
import HomePage from "./pages/HomePage"
import { Routes, Route } from "react-router-dom"
import ProductDetails from "./pages/ProductDetails"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import Footer from "./components/footer"
import AboutPage from "./pages/AboutPage"
import SignupPage from "./pages/SignupPage"
import LoginPage from "./pages/LoginPage"
import Cart from "./pages/Cart"
import Cancel from "./pages/Cancel"
import Success from "./pages/Success"
import axios from "axios"
import { UserContextProvider } from "./UserContext"
import CartProvider from "./CartContext"

axios.defaults.baseURL = 'http://127.0.0.1:4000';
// axios.defaults.withCredentials = true;

function App() {

  // const [pagename, setPagename] = useState('')
  // const location = useLocation()
  // setPagename(location.pathname)

  return (
    <UserContextProvider>
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/products" element={<Products />} />
            <Route path="/products/:name" element={<ProductDetails />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cancel" element={<Cancel />} />
            <Route path="/success" element={<Success />} />
          </Route>
        </Routes>
        <Footer />
      </CartProvider>
    </UserContextProvider>
  )
}

export default App
