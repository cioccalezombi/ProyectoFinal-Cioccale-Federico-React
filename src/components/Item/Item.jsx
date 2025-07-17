import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <article>
      <h3>{item.title}</h3>
      <img src={item.image} alt={item.title} style={{ width: "200px" }} />
      <p>Precio: ${item.price}</p>
      <Link to={`/item/${item.id}`}>Ver detalle</Link>
    </article>
  );
};

export default Item;
