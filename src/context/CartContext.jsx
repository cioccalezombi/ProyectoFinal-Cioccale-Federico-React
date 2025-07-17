import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    setCart((prevCart) => {
      const itemInCart = prevCart.find((prod) => prod.id === item.id);

      if (itemInCart) {
        return prevCart.map((prod) =>
          prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
        );
      } else {
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  useEffect(() => {
    console.log("🛒 Carrito actualizado:", cart);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
