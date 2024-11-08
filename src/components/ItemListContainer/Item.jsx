import {Link} from "react-router-dom"

const Item = ({product}) => {
  return (
    <div to={`/detail/${product.id}`} className="card col-md-3  " >
      <img src={product.image}className="card-img-top card" alt=  {`Imagen de ${product.name}`} id="ImgCard" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Precio: ${product.price}</p>
        <Link to={`/detail/${product.id}`} className="btn btn-primary">Ver detalles</Link>
      </div>
    </div>

  )
}

export default Item