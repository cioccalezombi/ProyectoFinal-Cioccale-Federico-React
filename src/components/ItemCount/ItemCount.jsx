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
    <div style={{ margin: "20px 0", padding: "10px", border: "1px solid #ccc" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button onClick={decrement} style={{ padding: "5px 10px" }}>-</button>
        <span style={{ fontSize: "18px", minWidth: "30px", textAlign: "center" }}>{quantity}</span>
        <button onClick={increment} style={{ padding: "5px 10px" }}>+</button>
      </div>
      <button class="btn btn-dark mt-auto w-50"
        onClick={handleAddToCart}
        
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
