import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail.jsx'
import { useParams } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.jsx';
import { doc, getDoc } from 'firebase/firestore';
import db from "../../db/db.js"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [hidenItemCount, setHidenItemCount] = useState(false)
    const {  addProductInCart } = useContext(CartContext)
    const { idProduct } = useParams ()

    const addProduct = (count) =>{
      const productCart = {...product, quantity :count}
      addProductInCart(productCart)
      setHidenItemCount(true)
    }

    const getProduct =()=>{
      const  docRef = doc( db, "products", idProduct)
      getDoc(docRef)
      .then((dataDb)=> {
        const productDb ={ id: dataDb.id, ...dataDb.data()}
        setProduct(productDb)
      })

    }

    useEffect ( ()=> {
      getProduct()
   }, [idProduct])



  return (
<div className='container'>
    <ItemDetail  product={product} addProduct={addProduct} hidenItemCount={hidenItemCount}/>
</div>
  )
}

export default ItemDetailContainer