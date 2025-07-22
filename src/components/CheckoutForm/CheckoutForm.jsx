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
      <div className="container text-center mt-5">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
        <Link to="/" className="btn btn-dark mt-3">
          Volver al inicio
        </Link>
      </div>
    );
  }

return (
  <div className="container mt-5">
    <h2 className="mb-4 text-center cart-heading">Finalizar compra</h2>

    <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center gap-3">

      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        className="form-control w-100"
        style={{ maxWidth: '500px' }}
        value={values.nombre}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        className="form-control w-100"
        style={{ maxWidth: '500px' }}
        value={values.email}
        onChange={handleChange}
        required
      />

      <input
        type="tel"
        name="telefono"
        placeholder="Teléfono"
        className="form-control w-100"
        style={{ maxWidth: '500px' }}
        value={values.telefono}
        onChange={handleChange}
        required
      />

      {/* Campos decorativos agregados */}
      <input
        type="text"
        placeholder="Número de tarjeta"
        className="form-control w-100"
        style={{ maxWidth: '500px' }}
      />

      <input
        type="text"
        placeholder="Código de seguridad"
        className="form-control w-100"
        style={{ maxWidth: '500px' }}
      />

      <input
        type="text"
        placeholder="DNI"
        className="form-control w-100"
        style={{ maxWidth: '500px' }}
      />

      <button type="submit" className="btn btn-dark w-100" style={{ maxWidth: '500px' }}>
        Comprar
      </button>

    </form>
  </div>
);};

export default CheckoutForm;
