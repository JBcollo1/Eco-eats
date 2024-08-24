import React from 'react';
import '../styling/Home.css';
import Testimonials from './Testimonials';

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero-wrapper">
        <section className="hero">
          <div className="hero-content">
            <h1>Savor the Earth’s Delicacies</h1>
            <p>Explore our selection of organic mushrooms and snails, grown with care.</p>
            {/* <button className="cta-button">Shop Now</button> */}
          </div>
        </section>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          <div className="product-card">
            <div className="product-card-inner">
              <div className="product-card-front">
                <img src="https://media.istockphoto.com/id/157444120/photo/close-up-of-white-colored-oyster-mushroom.jpg?s=612x612&w=0&k=20&c=X2QgogPDfoxc9vUh5jJGtIWKE1OUQhje1oIHjO9OTzs=" alt="Organic Shiitake Mushrooms" />
                <h3>Oyster Mushrooms</h3>
              </div>
              <div className="product-card-back">
                <h3>Organic Shiitake Mushrooms</h3>
                <p>Rich in flavor and nutrients.</p>
                <p>Perfect for various dishes.</p>
                
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-card-inner">
              <div className="product-card-front">
                <img src="../../src/assets/escaragot.webp" alt="Fresh Snails" />
                <h3> Escargot</h3>
              </div>
              <div className="product-card-back">
                <h3> Escargot</h3>
                <p>Escargot is a classic French delicacy, featuring tender snails often prepared in a rich garlic butter sauce. These snails are high in protein, low in fat, and provide essential nutrients like iron, magnesium, and omega-3 fatty acids. Escargot not only offers a luxurious dining experience but also supports heart health and contributes to a balanced diet, making it both a gourmet treat and a nutritious choice.</p>
               
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-card-inner">
              <div className="product-card-front">
                <img src="../../src/assets/Tallow.webp" alt="Fresh Snails" />
                <h3> Tallow</h3>
              </div>
              <div className="product-card-back">
                <h3> </h3>Tallow
                <p>A nutrient-rich fat perfect for high-heat cooking and natural skincare. Known for its rich flavor and moisturizing properties.</p>
               
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-card-inner">
              <div className="product-card-front">
                <img src="/images/snail1.jpg" alt="Fresh Snails" />
                <h3> Escargot</h3>
              </div>
              <div className="product-card-back">
                <h3> Escargot</h3>
                <p>A gourmet delight for your table.</p>
               
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits">
        <h2>Why Choose Eco Eats?</h2>
        <div className="benefit-cards">
          <div className="benefit-card">
            <img src="../../src/assets/farm.webp" alt="100% Organic" />
            <h3>100% Organic</h3>
            <p>Our products are grown without chemicals or pesticides.</p>
          </div>
          <div className="benefit-card">
            <img src="https://media.istockphoto.com/id/1164107307/photo/pleurotus-sp-oyster-mushroom-class-homobasidiomycetes-series-hymenomycetes-order-agaricales-a.jpg?s=612x612&w=0&k=20&c=ijomMO7PkfAFq-NvEeus1G7s1f1vJmoEFg75ktbWfgU=" alt="Sustainably Sourced" />
            <h3>Sustainably Sourced</h3>
            <p>We prioritize sustainable farming practices.</p>
          </div>
          <div className="benefit-card">
            <img src="https://media.istockphoto.com/id/1273246946/photo/close-up-various-fresh-picked-mushrooms-on-wood-board.jpg?s=612x612&w=0&k=20&c=1fG_J2-BZRUYhFVLdqmTxmFuH35Lxg0Z3nN8dhndU2o=" alt="Rich in Nutrients" />
            <h3>Rich in Nutrients</h3>
            <p>Our mushrooms and snails are packed with essential nutrients.</p>
          </div>
        </div>
      </section>

      <Testimonials /> 

      <section className="cta-section">
        <h2>Ready to Try the Best?</h2>
        <button className="cta-button">Shop Now</button>
      </section>
    </div>
  );
};

export default HomePage;
