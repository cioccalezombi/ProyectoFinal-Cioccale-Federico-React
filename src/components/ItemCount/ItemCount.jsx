import { useState, useEffect } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  useEffect(() => {
    console.log("🧩 ItemCount montado con stock:", stock);
  }, []);

  const increment = () => {
    if (quantity < stock) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    console.log("🛒 Agregado al carrito:", quantity);
    onAdd(quantity);
  };

  return (
    <div
      style={{
        margin: "20px 0",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          marginBottom: "16px",
        }}
      >
        <button onClick={decrement} style={{ padding: "5px 12px" }}>
          -
        </button>
        <span
          style={{
            fontSize: "18px",
            minWidth: "30px",
            textAlign: "center",
          }}
        >
          {quantity}
        </span>
        <button onClick={increment} style={{ padding: "5px 12px" }}>
          +
        </button>
      </div>
      <button
        className="btn btn-dark w-100"
        style={{ marginTop: "10px" }}
        onClick={handleAddToCart}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
