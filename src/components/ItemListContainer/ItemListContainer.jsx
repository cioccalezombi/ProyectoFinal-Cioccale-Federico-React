import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import ItemList from "../ItemList/ItemList";

const nombresCategorias = {
  herejiaDeHorus: "Herejía de Horus",
  warhammer40K: "Warhammer 40K",
  ageOfSigmar: "Age of Sigmar",
  personajesIconicos: "Personajes Icónicos",
};


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const librosRef = collection(db, "libros");

    const q = categoriaId
      ? query(librosRef, where("category", "==", categoriaId))
      : librosRef;

    getDocs(q)
      .then((resp) => {
        const items = resp.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProductos(items);
      })
      .catch((error) => {
        console.error("Error al obtener libros:", error);
      });
  }, [categoriaId]);

  return (
    <div className="container py-4">
<h2 className="titulo-categoria category-title ">
  {categoriaId ? `${nombresCategorias[categoriaId] || categoriaId}` : "Todos los libros"}
</h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;

