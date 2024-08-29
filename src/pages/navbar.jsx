import React, { useState } from 'react';
import '../styling/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/"  className="navbar-logo">Eco Eats</a>
        {/* <img src="../../src/assets/logo.webp" alt="Eco Eats" className="footer-logo" /> */}
        <button className="navbar-toggle" onClick={toggleMenu}>
          <span className="navbar-toggle-icon">&#9776;</span>
        </button>
      </div>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/product">Products</a></li>
          <li><a href="/community">Our community</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
