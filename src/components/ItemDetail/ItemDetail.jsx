import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

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
    <article>
      <h2>{item.title}</h2>
      <img src={item.image} alt={item.title} />
      <p>{item.description}</p>

      {
        added
          ? <Link to="/cart"><button>Ir al carrito 🛒</button></Link>
          : <ItemCount stock={item.stock} onAdd={handleAdd} />
      }

      <p>Precio: ${item.price}</p>
      <p>Stock disponible: {item.stock}</p>
    </article>
  );
};

export default ItemDetail;
