import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.scss";

const CartContainer = () => {
  const { cart, totalPrice, deleteProductInCart, deleteCart } = useContext(CartContext);

  // Si el carrito está vacío
  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>No hay productos en tu carrito</h2>
        <Link to="/">Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      {cart.map((product) => (
        <div className="cart-item" key={product.id}>
          <img src={product.image} alt={product.name} />
          <div>
            <p>{product.name}</p>
            <p>Precio cada uno: ${product.price}</p>
            <p>Cantidad: {product.quantity}</p>
          </div>
          <button onClick={() => deleteProductInCart(product.id)}>Borrar producto</button>
        </div>
      ))}

      <div className="total-section">
        <p>Precio total: ${totalPrice()}</p>
        <button className="vaciar-carrito" onClick={deleteCart}>Vaciar Carrito</button>
        <Link to="/CheckOut" className="continuar-compra">Continuar con mi compra</Link>
      </div>
    </div>
  );
};

export default CartContainer;
