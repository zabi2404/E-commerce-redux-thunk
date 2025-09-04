import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductList from "./component/ProductList"
import Cart from "./component/Cart"
import Navbar from "./component/Navbar"

function App() {

  return (
   <>
   <BrowserRouter>
<Navbar/>
    <Routes>
      <Route path="/" element={<ProductList/>}/>
      <Route path="/cart" element={<Cart/>}/>
      </Routes>

   </BrowserRouter>
   </>
  )
}

export default App
