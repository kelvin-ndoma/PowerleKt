import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "../ProductList/ProductList";

function Routed({ productItems}) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductList productItems={productItems}/>} />
      </Routes>
    </div>
  );
}

export default Routed;
