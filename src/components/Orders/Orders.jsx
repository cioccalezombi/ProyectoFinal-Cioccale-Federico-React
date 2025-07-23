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
        console.error("Error al cargar órdenes:", error);
      }
    };

    fetchOrders();
  }, []);

return (
  <div className="container mt-5">
    <h2 className="cart-heading">Órdenes registradas</h2>
    {orders.length === 0 ? (
      <p className="text-center">No hay órdenes registradas.</p>
    ) : (
      <div
        className={
          orders.length === 1
            ? "d-flex justify-content-center"
            : "row row-cols-1 row-cols-md-2 g-4"
        }
      >
        {orders.map((order) => (
          <div key={order.id} className="col" style={{ maxWidth: "600px" }}>
            <div className="card h-100 border-dark">
              <div className="card-body">
                <h5 className="card-title">🧾 Orden #{order.id}</h5>
                <p className="card-text">
                  <strong>Cliente:</strong> {order.cliente.nombre} <br />
                  <strong>Email:</strong> {order.cliente.email}
                </p>
                <p className="card-text">
                  <strong>Total:</strong> ${order.total}
                </p>
                <h6>Productos:</h6>
                <ul className="list-group list-group-flush">
                  {order.items.map((item, idx) => (
                    <li key={idx} className="list-group-item">
                      {item.title} x{item.quantity} — ${item.price * item.quantity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);
};

export default Orders;
