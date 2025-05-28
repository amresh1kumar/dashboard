import React from 'react';
import '../Style/Contact.css';

const Contactss = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-card">
        <div className="contact-left">
          <h2>Contact Us</h2>
          <form className="contact-form">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />

            <label>Email</label>
            <input type="email" placeholder="Enter your email" />

            <label>Message</label>
            <textarea placeholder="Write your message..." />

            <button type="submit">Send</button>
          </form>
        </div>

        <div className="contact-right">
          <h3>Our Office</h3>
          <p>📍 CSPDCL Office, Daganiya, Raipur, Chhattisgarh</p>
          <p>📧 support@cspdcl.co.in</p>
          <p>📞 +91 771-257-4200</p>
          <p>📱 +91 98765 43210</p>
          <div className="map-box">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.6166114797774!2d81.63567407474976!3d21.23731008046071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a292305fb1a169d%3A0x38c71eafbb2f3b4f!2sCSPDCL!5e0!3m2!1sen!2sin!4v1689842027055!5m2!1sen!2sin"
              width="90%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactss;
