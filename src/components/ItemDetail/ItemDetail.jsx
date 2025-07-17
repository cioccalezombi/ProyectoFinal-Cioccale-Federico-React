import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  const handleAdd = (quantity) => {
    addToCart(item, quantity);
    console.log(`✔️ Agregado ${quantity} x ${item.title}`);
  };

  if (!item || Object.keys(item).length === 0) {
    return <p>Cargando producto...</p>;
  }

  return (
    <article>
      <h2>{item.title}</h2>
      <img src={item.image} alt={item.title} />
      <p>{item.description}</p>

      <ItemCount stock={item.stock} onAdd={handleAdd} />

      <p>Precio: ${item.price}</p>
      <p>Stock disponible: {item.stock}</p>
    </article>
  );
};

export default ItemDetail;
