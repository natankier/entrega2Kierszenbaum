import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

const ItemDetail = ({product, addProduct, hidenItemCount}) => {
  return (
<div className="card mb-3" style={{ maxWidth: '540px' }}>
  <div className="row ">
    <div className="col-md-8">
      <img src={product.image} className="img-fluid rounded-start" alt={product.name} />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p className="card-text">Price: ${product.price}</p>
        <p className="card-text">Description: {product.description}</p>

        {
          hidenItemCount ===  true ? (
            <Link to="/Cart"> Terminar mi compra</Link>
          ) : (
            <ItemCount stock={product.stock} addProduct={addProduct} />
          )
        }

      </div>
    </div>
  </div>
</div>



  )
}

export default ItemDetail