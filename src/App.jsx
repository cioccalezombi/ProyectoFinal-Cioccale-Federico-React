import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";
import Orders from "./components/Orders/Orders";

import { useEffect } from "react";
import { db } from "./firebase/config";
import { collection, doc, setDoc } from "firebase/firestore";

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/ordenes" element={<Orders />} />
      </Routes>
    </>
  );
}

export default App;
