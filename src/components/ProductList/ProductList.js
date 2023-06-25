import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductList.css';
import AllItems from '../Allitems/AllItems';

const ProductList = ({ productItems, handleAddProduct }) => {
  const NextArrow = (props) => {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick}><i className="fas fa-chevron-right"></i></div>;
  };

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick}><i className="fas fa-chevron-left"></i></div>;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="products">
      <h1>Explore Our Products</h1> {/* Added h1 element */}
      <Slider {...settings}>
        {productItems.map((productItem) => (
          <div className="card" key={productItem.id}>
            <div>
              <img className="product-image" src={productItem.image} alt={productItem.name} />
            </div>
            <div>
              <h3 className="product-name">{productItem.name}</h3>
              <p className="product-description">{productItem.description}</p>
            </div>
           
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
      <AllItems/>
    </div>
  );
};

export default ProductList;
