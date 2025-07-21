export const getImageById = (id) => {
  try {
    return new URL(`../assets/libros/${id}.png`, import.meta.url).href;
  } catch (error) {
    return ""; // o una imagen por defecto
  }
};
