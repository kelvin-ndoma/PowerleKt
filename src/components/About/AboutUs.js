import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';

function AboutUs({ cartItems }) {
  return (
    <header className="header">
      <div>
        <h1 className="logo">
          <Link to="/aboutus">
            <img src="https://t4.ftcdn.net/jpg/02/11/96/73/360_F_211967379_XRebo9HOfAgRnbD8f2uvXmYIHyCjy2PM.jpg" alt="PowerleKtain" className="logo-image" />
          </Link>
        </h1>
        <div className="logo-name">Powerlekt</div>
      </div>

      <div className="header-links">
        <ul>
          <li>
            <Link to="/aboutus" className="active-link">About Us</Link>
          </li>
          <li>
            <Link to="/products" className="inactive-link">Products</Link>
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
