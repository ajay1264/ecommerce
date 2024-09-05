import Navbar from "./components/Navbar/Navbar"
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Shop from "./pages/Shop"
import ShopCategory from "./pages/ShopCategory"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import LoginSignup from "./pages/LoginSignup"
import Footer from "./components/Footer/Footer"
import men_banner from "./components/assets/images/mens-banner.jpg"
import women_banner from "./components/assets/images/womens-banner.webp"
import kid_banner from "./components/assets/images/kids-banner.jpg"
function App() {


  return (
    <>
  <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
      <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
      <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kids"/>}/>
      <Route path='/product' element={<Product/>}>
      <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </div>
    </>
  )
}

export default App
