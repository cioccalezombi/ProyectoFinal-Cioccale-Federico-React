import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  if (cart.length === 0) {
    return <p className="text-center mt-5">🛒 El carrito está vacío</p>;
  }

  return (
    <div className="cart-container">
<h2 className="cart-heading">Carrito de compras</h2>

      {cart.map((item) => (
        <div key={item.id} className="cart-item-card">
          <h4>{item.title}</h4>
          <p>Precio unitario: <strong>${item.price}</strong></p>
          <p>Cantidad: {item.quantity}</p>
          <p>Subtotal: <strong>${item.quantity * item.price}</strong></p>
        </div>
      ))}

      <hr />

      <div className="cart-summary">
        <p><strong>Total de productos:</strong> {totalItems}</p>
        <p><strong>Total a pagar:</strong> ${totalPrice}</p>
      </div>

      <div className="cart-buttons">
  <button onClick={clearCart} className="btn btn-danger btn-wide">
    VACIAR CARRITO
  </button>

  <Link to="/checkout">
    <button className="btn btn-dark btn-wide">
      FINALIZAR COMPRA
    </button>
  </Link>
</div>

    </div>
  );
};

export default Cart;
