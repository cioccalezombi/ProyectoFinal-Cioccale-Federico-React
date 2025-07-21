import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const docRef = doc(db, "libros", itemId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() });
        } else {
          setError("Libro no encontrado.");
        }
      } catch (err) {
        setError("Error al cargar el libro.");
        console.error(err);
      }
    };

    fetchItem();
  }, [itemId]);

  if (error) return <p className="text-danger">{error}</p>;
  if (!item) return <p>Cargando detalle...</p>;

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
