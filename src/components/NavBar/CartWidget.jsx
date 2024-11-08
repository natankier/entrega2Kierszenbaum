import  { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import "./navbar.scss";


const CartWidget = () => {
  const { totalQuantity} = useContext(CartContext)


  const total = totalQuantity ()
  return (
    <Link to="/cart" className="cartwidget">
        <IoMdCart size={30} className={ total > 0 ? "Icon-cartWidget" : " empty-cartWidget" }/>
        <p>{ total >=1 && total }</p>
    </Link>
  )
}

export default CartWidget