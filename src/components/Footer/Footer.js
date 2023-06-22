// import React, { useRef, useState } from 'react';
// import emailjs from 'emailjs-com';
// import './Footer.css';

// const Footer = () => {
//   const form = useRef();
//   const [isMessageSent, setIsMessageSent] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_l864cci', 'template_kmzixsa', form.current, 'UB2YFOL9Ux2ga_0SS')
//       .then(
//         (result) => {
//           console.log(result.text);
//           console.log('Message sent');
//           setIsMessageSent(true);
//           form.current.reset();
//           setTimeout(() => {
//             setIsMessageSent(false);
//           }, 3000); // 3 seconds
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <div className="contact-container">
//       <div className="map-container">
//         {/* Embed Google Map */}
//         <iframe
//           title="Google Map"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15952.862201972133!2d36.814444!3d-1.286389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f19025fba33ff%3A0x4a501367f076ad3f!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1624370192533!5m2!1sen!2sus"
//           width= "100%"
//           height= "200px"
//         ></iframe>
//       </div>

//       <form ref={form} onSubmit={sendEmail} className="contact-form">
//         <label htmlFor="name">Name</label>
//         <input type="text" id="name" name="to_name" required />
//         <label htmlFor="email">Email</label>
//         <input type="email" id="email" name="from_name" required />
//         <label htmlFor="message">Message</label>
//         <textarea id="message" name="message" required />
//         <input type="submit" value="Send" className="submit-button" />
//       </form>

//       {isMessageSent && <p className="success-message">Message sent successfully!</p>}

      
//     </div>
//   );
// };

// export default Footer;

import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaFacebook } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_l864cci', 'template_kmzixsa', form.current, 'UB2YFOL9Ux2ga_0SS')
      .then(
        (result) => {
          console.log(result.text);
          console.log('Message sent');
          setIsMessageSent(true);
          form.current.reset();
          setTimeout(() => {
            setIsMessageSent(false);
          }, 3000); // 3 seconds
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="map-container">
        {/* Embed Google Map */}
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15952.862201972133!2d36.814444!3d-1.286389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f19025fba33ff%3A0x4a501367f076ad3f!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1624370192533!5m2!1sen!2sus"
          width="100%"
          height="200px"
        ></iframe>
        <p>Contact Number: +254******</p>
        <a href="https://www.facebook.com/profile.php?id=100064128641032&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">Facebook
          <FaFacebook className="facebook-icon" />
        </a>
      </div>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="to_name" required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="from_name" required />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
        <input type="submit" value="Send" className="submit-button" />
      </form>

      {isMessageSent && <p className="success-message">Message sent successfully!</p>}
    </div>
  );
};

export default Footer;

