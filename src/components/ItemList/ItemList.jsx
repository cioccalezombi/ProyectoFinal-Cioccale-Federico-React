import { getImageById } from "../../utils/getImageById";
import { Link } from "react-router-dom";
import "./ItemList.css"; // si usás estilos personalizados

const ItemList = ({ productos }) => {
  return (
    <div className="row">
      {productos.map((item) => (
        <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card h-100">
            <img
              src={getImageById(item.id)}
              alt={item.title}
              className="card-img-top"
            />
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.price} créditos imperiales</p>
              <Link to={`/item/${item.id}`} className="btn btn-dark mt-auto">
                Ver más
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
