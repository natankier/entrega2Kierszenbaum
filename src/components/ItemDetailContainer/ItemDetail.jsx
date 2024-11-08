import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./ItemDetail.scss";

const ItemDetail = ({ product, addProduct, hidenItemCount }) => {
  return (
    <div className="item-detail-container">
      <div className="card mb-12">
        <div className="row">
          <div className="col-md-6">
            <img
              src={product.image}
              className="img-fluid rounded-start"
              alt={product.name}
            />
          </div>
          <div className="col-md-5">
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p className="card-text">Price: ${product.price}</p>
              <p className="card-text">Description: {product.description}</p>

              {hidenItemCount ? (
                <Link to="/Cart" className="finish-purchase-btn">
                  Terminar mi compra
                </Link>
              ) : (
                <ItemCount stock={product.stock} addProduct={addProduct} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
