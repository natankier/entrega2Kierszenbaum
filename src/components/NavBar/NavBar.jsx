import CartWidget from "./CartWidget"
import logo from "../../assets/logo.png"
import "./navbar.scss"
const NavBar = () => {
return (
    <nav className="navbar">
        <div className= "marca">
            <img src= {logo} alt="" width={200}/>
        </div>

        <ul className="categorias">
            <li>asado</li>
            <li>ojo de bife</li>
            <li>paleta</li>
            <li>entrecot</li>
        </ul>
    <CartWidget />
    

    </nav>
)
}

export default NavBar