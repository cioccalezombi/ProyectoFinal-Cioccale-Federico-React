Black Library Shop

Black Library Shop es una aplicación de e-commerce desarrollada como proyecto final del curso de React. El sitio simula una tienda temática basada en el universo de Warhammer y permite a los usuarios explorar libros por categorías, ver detalles de cada producto y realizar compras simuladas.

Tecnologías utilizadas

- **React.js** (Vite)
- **React Router DOM** – Navegación SPA
- **Context API** – Manejo global del carrito de compras
- **Firebase Firestore** – Base de datos de productos y órdenes
- **Bootstrap** – Estilos responsive
- **CSS personalizado** – Temática inspirada en Warhammer

Funcionalidades

- Listado de productos por categoría (`/categoria/:categoriaId`)
- Detalle de cada libro (`/item/:itemId`)
- Agregar y quitar productos del carrito
- Formulario de checkout con validación y generación de orden
- Página del carrito con resumen de compra
- Página de órdenes registradas (lectura de Firestore)
- Descuento automático de stock tras la compra

Estructura de carpetas

```
src/
├── assets/               # Imágenes de libros
├── components/
│   ├── Header/           # Menú principal
│   ├── ItemList/         # Grilla de productos
│   ├── ItemDetail/       # Vista detallada
│   ├── Cart/             # Carrito de compras
│   ├── Orders/           # Visualización de órdenes
│   └── BookCard.jsx      # Agrega las miniaturas de los libros
│   └── CartWidget.jsx    # Funcionalidad del ícono del changuito
│   └── Footer            # Footer
│   └── Navbar            # Barra de navegación
├── context/              # CartContext con lógica del carrito
├── firebase/             # Configuración y conexión a Firestore
├── App.jsx               # Enrutado principal
└── main.jsx              # Punto de entrada
```

Firebase

- Los productos se almacenan en la colección `libros`
- Las órdenes se generan en la colección `ordenes`
- Al confirmar la compra, se descuenta automáticamente el stock del producto en Firestore

Observaciones

- Todos los botones tienen un diseño uniforme con estilo oscuro (`btn-dark`)
- Se agregaron campos visuales de tarjeta y DNI en el checkout por realismo, aunque no se guardan
- El sitio es responsive y adaptado a dispositivos móviles
- El footer permanece fijo sin superponer contenido

Autor

Federico – Proyecto final del curso de React JS.
