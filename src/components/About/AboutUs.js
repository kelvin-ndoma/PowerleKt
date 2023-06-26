import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';

function AboutUs({ cartItems }) {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="./pics/logo.jpg" alt="Powerlekt" className="logo-image" />
        </Link>
        <div className="logo-name">Powerlekt</div>
      </div>

      <div className="header-links">
        <ul>
          <li>
            <Link to="/" className="active-link">About Us</Link>
          </li>
          <li>
            <Link to="/productlist" className="active-link">Products</Link>
          </li>
          <li>
            <Link to="/cart" className="cart">
              <FaShoppingCart className="custom-cart-icon" />
              <span className="cart-length">
                {cartItems.length === 0 ? "" : cartItems.length}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default AboutUs;
