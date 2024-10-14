import React from 'react'

const ItemDetail = ({product}) => {
  return (
    <div className="itemdetailcontainer">
    <h2>{product.name}</h2>
    <p>price:{product.price}</p>
    <p>descripcion: {product.description}</p>
</div>
  )
}

export default ItemDetail