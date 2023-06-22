import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import data from "./components/backup/Data";
import AboutUs from "./components/About/AboutUs";
import Routed from "./components/Routes/Routes";
import "./App.css"; // Import the CSS file for App component

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

  const handleCartClearance = () => {
    setCartItems([]);
  };

  return (
    <div className="app-wrapper">
      <Router>
        <div className="content-wrapper">
          <AboutUs cartItems={cartItems} />
          <Routed
            productItems={productItems}
            cartItems={cartItems}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            handleCartClearance={handleCartClearance}
          />
        </div>
        <footer className="app-footer">
          &copy; {new Date().getFullYear()} PowerLekt. All rights reserved.
        </footer>
      </Router>
    </div>
  );
}

export default App;
