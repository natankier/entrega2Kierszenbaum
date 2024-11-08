import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider, CartContext } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import CheckOut from "./components/CheckOut/CheckOut.jsx"
import Footer from './components/Footer/Footer';
import './App.css'


function App() {


  return (
  <div className="Container">
  <BrowserRouter>
  <CartProvider>
    <NavBar />
    <Routes> 
      <Route path="/" element={ <ItemListContainer saludo={"Bienvenidos"}/> }/>
      <Route path="/category/:idCategory" element={ <ItemListContainer saludo={"Bienvenidos"}/> }/>
      <Route path="/detail/:idProduct" element={ <ItemDetailContainer       />}/> 
      <Route path="cart" element={ <Cart    />}/> 
      <Route  path="/CheckOut"   element=   {<CheckOut/>}        />
    </Routes>
    </CartProvider>

    </BrowserRouter>
    <Footer />
  </div>
  )
}

export default App
