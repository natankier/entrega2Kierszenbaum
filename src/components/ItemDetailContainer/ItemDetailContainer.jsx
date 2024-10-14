import React from 'react'
import { useState, useEffect } from 'react'
import { getProduct } from '../../data/data.js'
import ItemDetail from './ItemDetail.jsx'
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { idProduct } = useParams ()
        useEffect ( ()=> {
           getProduct(idProduct) 
           .then((data)=> setProduct(data))
        }, [idProduct])

console.log(product)

  return (
<div>
    <ItemDetail  product={product}/>
</div>
  )
}

export default ItemDetailContainer