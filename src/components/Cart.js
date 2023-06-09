import React from 'react';

const Cart = ({ cartItems, removeItem, updateQuantity }) => {
  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  const handleQuantityChange = (itemId, quantity) => {
    updateQuantity(itemId, quantity);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice.toFixed(2);
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                <input
                  type="number"
                  id={`quantity-${item.id}`}
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                />
                <button onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <p className="total-price">Total Price: ${calculateTotalPrice()}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
