import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import AllProducts from "../backup/AllProducts";
import "./Allitems.css";

const AllItems = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [senderEmail, setSenderEmail] = useState('');
  const [customerRequest, setCustomerRequest] = useState('');

  const filteredProducts = AllProducts.AllProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClick = (product) => {
    setSelectedItem(product);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const handleEmail = () => {
    if (!senderEmail.trim() || !customerRequest.trim()) {
      alert('Please enter your email and request.');
      return;
    }

    const templateParams = {
      name: selectedItem.name,
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
    return null;
  }

  const handleSenderEmailChange = (e) => {
    setSenderEmail(e.target.value);
  };

  const handleCustomerRequestChange = (e) => {
    setCustomerRequest(e.target.value);
  };

  const whatsappNumbers = [
    "+254123456789", // Replace with the desired WhatsApp number
    "+254987654321", // Replace with another WhatsApp number
  ];

  return (
    <div className="footer">
      <h2>Selected Item: {selectedItem.name}</h2>
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
          WhatsApp Numbers: {whatsappNumbers.map((number, index) => (
            <React.Fragment key={index}>
              <a className="number" href={`https://wa.me/${number}`}>
                {number}
              </a>
              {index !== whatsappNumbers.length - 1 && ' or '}
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

export default AllItems;
