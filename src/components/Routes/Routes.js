import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "../ProductList/ProductList";
import Cart from "../cart/Cart";
import Home from "../Home/Home";



function Routed({ productItems, cartItems, handleAddProduct, handleRemoveProduct,handleCartClearance }) {
  return (
    <div>
      <Routes>
        <Route path="/aboutus" element={<Home/>}/>
        <Route path="/" element={<ProductList productItems={productItems} handleAddProduct={handleAddProduct} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>} />
      </Routes>
    </div>
  );
}

export default Routed;
