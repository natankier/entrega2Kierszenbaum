import { useState } from "react";
import FormCheckOut from "./FormCheckOut";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import { Timestamp, addDoc, collection, setDoc, doc } from "firebase/firestore";
import db from "../../db/db.js";
import { Link } from "react-router-dom";
import { toast } from "react-toastify"
import "./CheckOut.scss";

const CheckOut = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: "",
    repeatEmail: ""
  });

  const [orderId, setOrderId] = useState(null);

  const { cart, totalPrice, deleteCart } = useContext(CartContext);

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const order = {
      buyer: { ...dataForm },
      products: [...cart],
      date: Timestamp.fromDate(new Date()),
      total: totalPrice(),
    };

    if( dataForm.email === dataForm.repeatEmail){
      uploadOrder(order);
    }else{
      toast.error("Los emails deben coincidir")
    }
  };

  const uploadOrder = (newOrder) => {
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, newOrder)
      .then((response) => {
        setOrderId(response.id);
      })
      .finally(() => {
        updateStock();
      });
  };

  const updateStock = () => {
    cart.map(({ quantity, id, ...productCart }) => {
      const productRef = doc(db, "products", id);
      setDoc(productRef, { ...productCart, stock: productCart.stock - quantity });
    });

    deleteCart();
  };

  return (
    <div className="checkout-container">
      {orderId ? (
        <div className="success-message">
          <h2>Orden realizada con éxito</h2>
          <p>Conserve su número de seguimiento: {orderId}</p>
          <Link to="/" className="link">
            Volver al inicio
          </Link>
        </div>
      ) : (
        <FormCheckOut
          dataForm={dataForm}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
        />
      )}
    </div>
  );
};

export default CheckOut;
