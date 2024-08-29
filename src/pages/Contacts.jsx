import React from 'react';
import '../styling/footer.css';
import useScrollRotation from '../scroll';
import FAQ from './faq';
import { Link } from 'react-router-dom';
import ContactModal from './contactmodal';
import { FaTwitter, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
    useScrollRotation("footer-logo")
    
    
  return (
    <footer className="footer">
      <div className="footer-newsletter">
        
      </div>
      <div className="footer-content">
        <div className="footer-column">
          <img src="/assets/logo.webp" alt="Eco Eats" className="footer-logo" />
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
            <li><a href="#" data-contact-us>FAQs</a></li>

            
          </ul>
        </div>
        <div className="footer-column">
          <h4>WEBSITE</h4>
          <ul>
            <li><a href="#terms" data-contact-us>TERMS & CONDITIONS</a></li>
           
           
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
          <a href="#" className="fab"><FaInstagram /></a>
          <a href="#" className="fab"><FaTwitter /></a>
          <a href="#" className="fab"><FaFacebook /></a>
          <a href="#" className="fab"><FaTiktok /></a>

        </div>
      </div>
      <ContactModal/>
      <div className="footer-bottom">
        <p>&copy; 2024 Eco-Eats. All Rights Reserved.</p>
       
      </div>
    </footer>
  );
};

export default Footer;
