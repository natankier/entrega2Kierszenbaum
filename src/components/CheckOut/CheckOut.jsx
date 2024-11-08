import { useState } from "react"
import FormCheckOut from "./FormCheckOut"
import { useContext } from "react"
import {CartContext} from "../../context/CartContext.jsx"
import { Timestamp, addDoc, collection, setDoc , doc} from "firebase/firestore"
import db from "../../db/db.js"
import { Link } from "react-router-dom"

const CheckOut = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email:""


    })

    const [orderId, setOrderId] = useState(null)

    const { cart, totalPrice, deleteProductInCart } = useContext(CartContext)

    const handleChangeInput =(event)=>{
        setDataForm({ ...dataForm, [event.target.name] :event.target.value })
    }

    const handleSubmitForm =(event)=>{
        event.preventDefault()

        const order = {
            buyer: { ...dataForm},
            products: [ ...cart],
            date: Timestamp.fromDate( new Date ( )),
            total: totalPrice(),

        }
        uploadOrder(order)
    }

    const uploadOrder = (newOrder) =>{
        const ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, newOrder)
            .then((response)=>{
                setOrderId(response.id)
            })


            .finally(()=>{
            updateStock()
            })
    }
const updateStock = () => {
    cart.map(({ id, quantity, stock, ...productCart }) => {
        const productRef = doc(db, "products", id);
        setDoc(productRef, { ...productCart, stock: stock - quantity });
    });

    deleteProductInCart();
};

  return (
    <div>
        {
            orderId ?(
                <div>
                    <h2>Orden realizada con exito</h2>
                    <p>Conserve su numero de seguimiento: {orderId}</p>
                    <Link to="/">Volver al inicio</Link>
                </div>
            ) : (
        <FormCheckOut dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm}/>
       )
    }
    </div>

  )
}

export default CheckOut