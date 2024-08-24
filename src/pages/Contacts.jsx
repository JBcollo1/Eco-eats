import React from 'react';
import '../styling/footer.css';
import useScrollRotation from '../scroll';

const Footer = () => {
    useScrollRotation("footer-logo")
  return (
    <footer className="footer">
      <div className="footer-newsletter">
        {/* <h3>SIGN UP TO OUR NEWSLETTER</h3>
        <div className="newsletter-input">
          <input type="email" placeholder="Email address" />
          <button>SUBSCRIBE</button> */}
        {/* </div> */}
      </div>
      <div className="footer-content">
        <div className="footer-column">
          <img src="../../src/assets/logo.webp" alt="Eco Eats" className="footer-logo" />
        </div>
        <div className="footer-column">
          <h4>ABOUT</h4>
          <ul>
            <li><a href="#">ABOUT US</a></li>
            
            <li><a href="#">OUR COMMUNITIES</a></li>
            <li><a href="#"> OUR TEAM</a></li>
            
         
          </ul>
        </div>
        <div className="footer-column">
          <h4>HELP</h4>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">DELIVERY INFORMATION</a></li>
            <li><a href="#">RETURNS & REFUNDS</a></li>
            <li><a href="#">CONTACT US</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>WEBSITE</h4>
          <ul>
            <li><a href="#">TERMS & CONDITIONS</a></li>
            <li><a href="#">PRIVACY POLICY</a></li>
           
          </ul>
        </div>
        <div className="footer-column">
          <h4>FIND OUT MORE</h4>
          <ul>
            <li><a href="#">BLOG</a></li>
            <li><a href="#">EVENTS</a></li>
            <li><a href="#">UNPACKAGED</a></li>
          </ul>
        </div>
        <div className="footer-column social-icons">
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Eco-Eats. All Rights Reserved.</p>
       
      </div>
    </footer>
  );
};

export default Footer;
