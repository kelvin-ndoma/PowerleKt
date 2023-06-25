import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import AllProducts from "../backup/AllProducts";
import "./Allitems.css";

const AllItems = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(null); // New state variable for the selected item
  const [senderEmail, setSenderEmail] = useState('');
  const [customerRequest, setCustomerRequest] = useState('');

  // Filter the products based on the search term
  const filteredProducts = AllProducts.AllProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle click event on product name
  const handleClick = (product) => {
    setSelectedItem(product);
  };

  const handleEmail = () => {
    // Implement your logic to send an email
    if (!senderEmail.trim() || !customerRequest.trim()) {
      alert('Please enter your email and request.');
      return;
    }

    const templateParams = {
      name: selectedItem.name,
      // Include other relevant data from the selected item
      senderEmail: senderEmail,
      customerRequest: customerRequest,
    };

    emailjs
      .send('service_l864cci', 'template_kmzixsa', templateParams, 'UB2YFOL9Ux2ga_0SS')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });
  };

  return (
    <div className="product-list">
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <h1>Click to Order!</h1>
      <div className="product-container">
        {filteredProducts.map((product, index) => (
          <div key={index} className="product-item" onClick={() => handleClick(product)}>
            <h3 className={`product-name ${selectedItem === product ? 'selected' : ''}`}>
              {product.name}
            </h3>
          </div>
        ))}
      </div>
      <Footer
        selectedItem={selectedItem}
        handleEmail={handleEmail}
        setSenderEmail={setSenderEmail}
        setCustomerRequest={setCustomerRequest}
        customerRequest={customerRequest}
      />
    </div>
  );
};

const Footer = ({
  selectedItem,
  handleEmail,
  setSenderEmail,
  setCustomerRequest,
  customerRequest,
}) => {
  if (!selectedItem) {
    return null; // Render nothing if no item is selected
  }

  const handleSenderEmailChange = (e) => {
    setSenderEmail(e.target.value);
  };

  const handleCustomerRequestChange = (e) => {
    setCustomerRequest(e.target.value);
  };

  const phoneNumber = "+254123456789"; // Replace with the desired phone number

  return (
    <div className="footer">
      {/* Render footer content based on the selected item */}
      <h2>Selected Item: {selectedItem.name}</h2>
      {/* <p>Price: {selectedItem.price}</p> */}
      {/* <p>Description: {selectedItem.description}</p> */}
      <div>
        <input
          type="email"
          placeholder="Your Email"
          onChange={handleSenderEmailChange}
          required
        />
        <textarea
          placeholder="Your Request"
          onChange={handleCustomerRequestChange}
          value={customerRequest}
          required
        ></textarea>
        <button onClick={handleEmail}>Send Request</button>
        <p>
          Call: <a className="number" href={`tel:${phoneNumber}`}>{phoneNumber}</a>
        </p>
      </div>
    </div>
  );
};

export default AllItems;
