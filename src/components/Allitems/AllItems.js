import React, { useState } from 'react';
import AllProducts from "../backup/AllProducts";
import "./Allitems.css";

const AllItems = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter the products based on the search term
  const filteredProducts = AllProducts.AllProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list">
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <h1>What we sell!</h1>
      <div className="product-container">
        {filteredProducts.map((product, index) => (
          <div key={index} className="product-item">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllItems;
