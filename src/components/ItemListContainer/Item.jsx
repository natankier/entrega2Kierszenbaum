import {Link} from "react-router-dom"

const Item = ({product}) => {
  return (
    <div to={`/detail/${product.id}`} className="card col-md-4  " >
      <img src="url_de_la_foto_del_producto" className="card-img-top" alt=  {`Imagen de ${product.name}`} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Precio: ${product.price}</p>
        <Link to={`/detail/${product.id}`} className="btn btn-primary">Ver detalles</Link>
      </div>
    </div>

  )
}

export default Item