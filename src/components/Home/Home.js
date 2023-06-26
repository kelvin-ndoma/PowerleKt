import React from 'react';
import "./Home.css";

import Footer from '../Footer/Footer';

const AboutUs = () => {
  return (
    <>
      <div className="about-section">
        <div className="wave-container">
          <div className="wave"></div>
        </div>
        <div className="content">
          <h2>About Powerlekt </h2>
          <p>Powerlekt Solutions is a leading provider of high-quality medical equipment, dedicated to improving patient care and healthcare outcomes.</p>
          <p>With a strong commitment to innovation and customer satisfaction, we offer a comprehensive range of medical devices and solutions designed to meet the evolving needs of healthcare professionals and institutions.</p>
          <p>At Powerlekt Solutions, we understand the critical role that reliable and advanced medical equipment plays in the delivery of effective healthcare. Therefore, we collaborate with renowned manufacturers and suppliers to ensure that our customers have access to cutting-edge technologies and top-of-the-line products.</p>
          <p>Our team of experienced professionals is passionate about delivering exceptional service and support to our customers. We work closely with healthcare providers to assess their requirements, provide tailored solutions, and offer ongoing technical assistance and training.</p>
          <p>Whether you are a small clinic, a hospital, or a research facility, Powerlekt Solutions is your trusted partner for all your medical equipment needs. We strive to make a positive impact on healthcare by delivering reliable products and superior customer service.</p>
          <p>Get in touch with us today to explore our wide range of medical equipment offerings and experience the Powerlekt Solutions difference.</p>
          <button className="gets-intouch">
            <a href="productlist" className="gets-intouch-link">See Products</a>
          </button>

        </div>
        <div className="image-container">
          <img className="landing-image" src="https://img.freepik.com/free-vector/healthcare-medical-accessories-flat-icons-set_1284-15055.jpg?w=740&t=st=1686322267~exp=1686322867~hmac=33fe3cf5a28a94b30f6ccfe3dd12689029c42bd41cb7dbccf8bf8d2e4e6c3425" alt="Medical Accessories" />
        </div>

      </div>

      <Footer />
    </>


  );
};

export default AboutUs;
