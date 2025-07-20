import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const docRef = doc(db, "libros", itemId); // ✅ cambio acá

    getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()) {
        setItem({ id: docSnap.id, ...docSnap.data() });
      }
    });
  }, [itemId]);

  if (!item) return <p>Cargando detalle...</p>;

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
