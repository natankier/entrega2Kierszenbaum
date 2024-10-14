import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {


  return (
  <div className="Container">
  <BrowserRouter>
    <NavBar />
 

    <Routes> 
      <Route path="/" element={ <ItemListContainer saludo={"Bienvenidos"}/> }/>
      <Route path="/category/:idCategory" element={ <ItemListContainer saludo={"Bienvenidos"}/> }/>
      <Route path="/detail/:idProduct" element={ <ItemDetailContainer       />}/> 
    </Routes>
  

    </BrowserRouter>

  </div>
  )
}

export default App
