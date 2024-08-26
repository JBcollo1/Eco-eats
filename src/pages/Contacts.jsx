import React from 'react';
import '../styling/footer.css';
import useScrollRotation from '../scroll';
import FAQ from './faq';
import { Link } from 'react-router-dom';
import ContactModal from './contactmodal';

const Footer = () => {
    useScrollRotation("footer-logo")
  return (
    <footer className="footer">
      <div className="footer-newsletter">
        
      </div>
      <div className="footer-content">
        <div className="footer-column">
          <img src="../../src/assets/logo.webp" alt="Eco Eats" className="footer-logo" />
        </div>
        <div className="footer-column">
          <h4>ABOUT</h4>
          <ul>
            <Link to = "/about">
            <li><a href="#">ABOUT US</a></li>
            </Link>
            <Link to = "/community">
            <li><a href="#">OUR COMMUNITIES</a></li>
            </Link>
            
          
            
         
          </ul>
        </div>
        <div className="footer-column">
          <h4>HELP</h4>
          <ul>
           
            <li><a href="#" data-contact-us>CONTACT US</a></li>
            <ContactModal/>
          </ul>
        </div>
        <div className="footer-column">
          <h4>WEBSITE</h4>
          <ul>
            <li><a href="#">TERMS & CONDITIONS</a></li>
           
           
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
