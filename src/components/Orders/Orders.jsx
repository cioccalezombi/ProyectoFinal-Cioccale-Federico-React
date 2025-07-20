import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersRef = collection(db, "ordenes");
        const snapshot = await getDocs(ordersRef);
        const ordersData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setOrders(ordersData);
      } catch (error) {
        console.error("❌ Error al cargar órdenes:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h2>📦 Órdenes registradas</h2>
      {orders.length === 0 ? (
        <p>No hay órdenes registradas.</p>
      ) : (
        orders.map(order => (
          <div key={order.id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
            <h4>🧾 Orden ID: {order.id}</h4>
            <p><strong>Cliente:</strong> {order.cliente.nombre} - {order.cliente.email}</p>
            <p><strong>Total:</strong> ${order.total}</p>
            <ul>
              {order.items.map((item, idx) => (
                <li key={idx}>
                  {item.title} x{item.quantity} - ${item.price * item.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
