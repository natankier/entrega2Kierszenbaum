import CartWidget from "./CartWidget"
import logo from "../../assets/logoCarne.png"
import "./navbar.scss"
const NavBar = () => {
return (
    <nav className="navbar">
        <div className= "marca">
            <img src= {logo} alt="" width={100}/>
        </div>

        <ul className="categorias">
            <li>Cortes</li>
            <li>Compras</li>
            <li>Promociones</li>
        </ul>
    <CartWidget />
    

    </nav>
)
}

export default NavBar