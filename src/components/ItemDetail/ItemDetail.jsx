import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { getImageById } from "../../utils/getImageById";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  const [added, setAdded] = useState(false);
  const { addToCart } = useContext(CartContext);

  const handleAdd = (quantity) => {
    const itemToAdd = {
      ...item,
      quantity
    };
    addToCart(itemToAdd);
    setAdded(true);
  };

  if (!item || Object.keys(item).length === 0) {
    return <p>⏳ Cargando producto...</p>;
  }

  return (
    <div className="detail-container">
      <h2 className="detail-title book-title ">{item.title}</h2>
      <div className="detail-card">
        <img src={getImageById(item.id)} alt={item.title} className="detail-img " />
        <div className="detail-info">
          <p className="detail-description">{item.description}</p>
          <p className="detail-price">💰 Precio: ${item.price}</p>
          <p className="detail-stock">📦 Stock disponible: {item.stock}</p>

          {added ? (
            <Link to="/cart"><button className="btn btn-success mt-2">Ir al carrito 🛒</button></Link>
          ) : (
            <ItemCount stock={item.stock} onAdd={handleAdd} />
          )}
        </div>
      </div>
    </div>
  );Ñ
};

export default ItemDetail;
