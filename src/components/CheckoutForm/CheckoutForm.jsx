import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";

import {
  collection,
  addDoc,
  Timestamp,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

const CheckoutForm = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [values, setValues] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orden = {
      cliente: values,
      items: cart.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      })),
      total: totalPrice(),
      fecha: Timestamp.fromDate(new Date()),
    };

    try {
      const ordenesRef = collection(db, "ordenes");
      const docRef = await addDoc(ordenesRef, orden);
      setOrderId(docRef.id);

      // Descontar stock
      for (const item of cart) {
        const productoRef = doc(db, "libros", item.id);
        const productoSnap = await getDoc(productoRef);

        if (productoSnap.exists()) {
          const productoData = productoSnap.data();
          const nuevoStock = productoData.stock - item.quantity;

          await updateDoc(productoRef, { stock: nuevoStock });
        }
      }

      clearCart();
    } catch (error) {
      console.error("❌ Error al generar la orden o actualizar stock:", error);
    }
  };

  if (orderId) {
    return (
      <div>
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
        <Link to="/">
          <button style={{ marginTop: "1rem" }}>Volver al inicio</button>
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Finalizar compra</h2>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={values.nombre}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="telefono"
        placeholder="Teléfono"
        value={values.telefono}
        onChange={handleChange}
        required
      />
      <button type="submit">Comprar</button>
    </form>
  );
};

export default CheckoutForm;
