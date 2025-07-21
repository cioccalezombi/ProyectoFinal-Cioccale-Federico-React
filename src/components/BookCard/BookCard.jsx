// src/components/BookCard.jsx
import React from "react";

// Importa todas las imágenes de la carpeta libros
const imagenesLibros = import.meta.glob("../assets/libros/*.png", { eager: true });

// Función para obtener la imagen por ID
const obtenerImagenLibro = (id) => {
  const ruta = `../assets/libros/${id}.png`;
  return imagenesLibros[ruta]?.default || "";
};

const BookCard = ({ libro }) => {
  const { id, titulo, precio } = libro;
  const imagen = obtenerImagenLibro(id);

  return (
    <div className="card p-2 text-center" style={{ width: "12rem" }}>
      {imagen ? (
        <img src={imagen} alt={titulo} className="img-fluid mb-2" />
      ) : (
        <div className="bg-secondary text-white p-4">Imagen no disponible</div>
      )}
      <h6 className="fw-bold mb-1">{titulo}</h6>
      <p className="mb-1">Precio: ${precio}</p>
      <a href={`/libro/${id}`} className="btn btn-dark btn-sm mt-2">
        Ver detalle
      </a>
    </div>
  );
};

export default BookCard;
