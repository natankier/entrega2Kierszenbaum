import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"



const CartContainer = () => {
    const { cart, totalPrice, deleteProductInCart } = useContext(CartContext)



    if(cart.length === 0 ){

        return(
            <div>
                <h2>No hay productos</h2>
              <Link to="/"> volver </Link>  
            </div>
        )
    }


  return (
    <div>
        {
            cart.map( (product) => (
            <div key={product.id}>
                <img src={product.image} width={100} alt="" />
                <p>{product.name}</p>
                <p>Precio cada uno: {product.price}</p>
                <p>cantidad: {product.quantity}</p>
                <button onClick={ ()=> deleteProductInCart(product.id)}>borrar producto</button>
                <Link to="/CheckOut">Continuar con mi compra</Link>
                
            </div>

            ))
        }

        <div>
            <p>Precio total: {totalPrice()}</p>
        </div>
    </div>
  )
}

export default CartContainer