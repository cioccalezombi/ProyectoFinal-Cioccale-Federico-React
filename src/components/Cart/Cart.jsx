import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom"; // 👈 Asegurate de tener este import

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  if (cart.length === 0) {
    return <p>🛒 El carrito está vacío</p>;
  }

  return (
    <div>
      <h2>Carrito de compras</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <h4>{item.title}</h4>
            <p>Precio unitario: ${item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Subtotal: ${item.quantity * item.price}</p>
          </li>
        ))}
      </ul>
      <hr />
      <p><strong>Total de productos:</strong> {totalItems}</p>
      <p><strong>Total a pagar:</strong> ${totalPrice}</p>

      <button onClick={clearCart}>🗑 Vaciar carrito</button>

      <br /><br />

      <Link to="/checkout">
        <button>🧾 Finalizar compra</button>
      </Link>
    </div>
  );
};

export default Cart;
