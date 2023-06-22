import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Cart.css';

const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance }) => {
  const [email, setEmail] = useState('');
  const [customerRequest, setCustomerRequest] = useState('');

  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCustomerRequestChange = (event) => {
    setCustomerRequest(event.target.value);
  };

  const handleEmailSend = () => {
    if (!email) {
      alert('Please enter your email address.');
      return;
    }
    if (cartItems.length === 0) {
      alert('Your cart is empty.');
      return;
    }

    const templateParams = {
      from_name: email,
      to_name: 'Your Name', // Replace with the recipient's name or leave it blank
      message: customerRequest,
      items: cartItems.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      total: totalPrice.toFixed(2),
    };

    emailjs
      .send('service_l864cci', 'template_kmzixsa', templateParams, 'UB2YFOL9Ux2ga_0SS')
      .then(() => {
        alert('Email sent successfully!');
        setEmail('');
        setCustomerRequest('');
        handleCartClearance(); // Clear the cart after the email is sent
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('An error occurred while sending the email. Please try again later.');
      });
  };

  return (
    <div className="cart-container">
      <h2 className="cart-header">Cart Items</h2>
      <div className="clear-cart">
        {cartItems.length >= 1 && (
          <button className="clear-cart-button" onClick={handleCartClearance}>
            Clear Cart
          </button>
        )}
      </div>
      {cartItems.length === 0 && <div className="cart-empty-message">No items added</div>}
      {cartItems.length > 0 && (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-function">
                  <button className="cart-item-button" onClick={() => handleAddProduct(item)}>
                    +
                  </button>
                  <button className="cart-item-button" onClick={() => handleRemoveProduct(item)}>
                    -
                  </button>
                </div>
                <div className="cart-item-price">
                  {item.quantity} * Ksh {item.price}
                </div>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <div className="cart-summary-info">
              You have selected {cartItems.reduce((total, item) => total + item.quantity, 0)} item{cartItems.length !== 1 ? 's' : ''}
            </div>
            <div className="cart-summary-total">Total: Ksh {totalPrice.toFixed(2)}</div>
          </div>

          <div className="order-form">
            <h1>Please place your order below</h1>
            <input
              type="email"
              className="order-form-input"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
            <textarea
              className="order-form-textarea"
              placeholder="Enter your request"
              value={customerRequest}
              onChange={handleCustomerRequestChange}
            />
            <button className="order-form-button" onClick={handleEmailSend}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
