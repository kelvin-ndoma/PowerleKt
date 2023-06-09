import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './Navbar.css'; // Import the CSS file for custom styling

const Navbar = ({ cartItems, removeItem, updateQuantity }) => {
  return (
    <nav className="custom-navbar">
      <div className="custom-container">
        <a className="custom-brand" href="#">
          PowerleKt
        </a>

        <div className="custom-collapse" id="navbarNav">
          <ul className="custom-nav">
            <li className="custom-nav-item">
              <a className="custom-nav-link active" aria-current="page" href="/powerlekt">
                Home
              </a>
            </li>
            <li className="custom-nav-item">
              <a className="custom-nav-link" href="aboutus">
                About Us
              </a>
            </li>
            <li className="custom-nav-item">
              <a className="custom-nav-link" href="ourproducts">
                Products
              </a>
            </li>
            <li className="custom-nav-item">
              <a className="custom-nav-link" href="cart">
                <FaShoppingCart className="custom-cart-icon" />
                <span className="custom-cart-count">{cartItems.length}</span>
              </a>
              {cartItems.length > 0 && (
                <div className="custom-cart-dropdown">
                  <ul className="custom-cart-items">
                    {cartItems.map((item) => (
                      <li key={item.id} className="custom-cart-item">
                        <div>
                          <span className="custom-cart-item-name">{item.name}</span>
                          <span className="custom-cart-item-quantity">Quantity: {item.quantity}</span>
                        </div>
                        <div>
                          <button onClick={() => removeItem(item.id)}>Remove</button>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="custom-cart-total">
                    Total Price: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
