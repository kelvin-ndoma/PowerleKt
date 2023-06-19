import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductList.css';

const ProductList = ({ productItems, handleAddProduct }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const filteredProductItems = productItems.filter((productItem) =>
    productItem.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="products">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <button className="search-button">Search</button>
      </div>
      <Slider {...settings}>
        {filteredProductItems.map((productItem) => (
          <div className="card" key={productItem.id}>
            <div>
              <img className="product-image" src={productItem.image} alt={productItem.name} />
            </div>
            <div>
              <h3 className="product-name">{productItem.name}</h3>
            </div>
            <div className="product-price">$ {productItem.price}</div>
            <div>
              <button
                className="product-add-button"
                onClick={() => handleAddProduct(productItem)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductList;
