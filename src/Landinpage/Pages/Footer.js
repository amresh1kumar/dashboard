import React from 'react';
import '../Style/Footer.css';
import { Link } from 'react-router-dom';
import image1 from '../Landingimage/phone_icon.png';
import image2 from '../Landingimage/free-png.webp';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h2>Quick Links</h2>
        <ul className="quick-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/Registration">Registration</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className="footer-section">
        <h2>Corporate HQ</h2>
        <p>Energy Info Tech Center, Block No. 8,<br />
           CSPDCL Campus, Danganiya, Raipur – 492013</p>
        <div className="contact-info">
          <p><img src={image1} alt="Phone" className="footer-icon" /> 0777-2574166</p>
          <p><img src={image2} alt="Website" className="footer-icon" /> <a href="https://www.cspdcl.co.in" target="_blank" rel="noopener noreferrer">www.cspdcl.co.in</a></p>
        </div>
      </div>

      <div className="footer-section">
        <h2>About CSPDCL</h2>
        <p>
          CSPDCL (Chhattisgarh State Power Distribution Company Ltd.) is committed to providing reliable, efficient, and affordable electricity across Chhattisgarh through innovation, transparency, and sustainability.
        </p>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CSPDCL Raipur. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

