import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  const cantidad = totalQuantity();

  return (
    <Link to="/cart" className="position-relative text-decoration-none">
      <span className="cart-icon">🛒</span>
      {cantidad > 0 && (
        <span className="cart-count">{cantidad}</span>
      )}
    </Link>
  );
};

export default CartWidget;
