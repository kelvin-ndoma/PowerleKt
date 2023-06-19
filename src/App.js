import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import data from "./components/backup/Data";
import AboutUs from "./components/About/AboutUs";
import Routed from "./components/Routes/Routes";
import Footer from "./components/Footer/Footer";

function App() {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };
const handleCartClearance=()=>{
  setCartItems([]);
}
  return (
    <>
      <Router>
        <AboutUs cartItems={cartItems}/>
        <Routed
          productItems={productItems}
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleCartClearance={handleCartClearance}
        />
      </Router>
      <Footer/>
    </>
  );
}

export default App;
