import React from 'react';
import '../styling/Home.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero-wrapper">
        <section className="hero">
          <div className="hero-content">
            <h1>Savor the Earth’s Delicacies</h1>
            <p>Explore our selection of organic mushrooms and snails, grown with care.</p>
            <button className="cta-button">Shop Now</button>
          </div>
        </section>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          <div className="product-card">
            <img src="../../src/assets/fancy.webp" alt="Organic Shiitake Mushrooms" />
            <h3>Organic Shiitake Mushrooms</h3>
            <p>Rich in flavor and nutrients.</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="/images/snail1.jpg" alt="Fresh Snails" />
            <h3>Fresh Snails</h3>
            <p>A gourmet delight for your table.</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </section>

      <section className="benefits">
        <h2>Why Choose Eco Eats?</h2>
        <div className="benefit-cards">
          <div className="benefit-card">
            <img src="../../src/assets/fancy.webp" alt="100% Organic" />
            <h3>100% Organic</h3>
            <p>Our products are grown without chemicals or pesticides.</p>
          </div>
          <div className="benefit-card">
            <img src="/images/sustainability.png" alt="Sustainably Sourced" />
            <h3>Sustainably Sourced</h3>
            <p>We prioritize sustainable farming practices.</p>
          </div>
          <div className="benefit-card">
            <img src="/images/nutrition.png" alt="Rich in Nutrients" />
            <h3>Rich in Nutrients</h3>
            <p>Our mushrooms and snails are packed with essential nutrients.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"The best mushrooms I've ever had! Fresh and full of flavor."</p>
            <h4>- Sarah M.</h4>
          </div>
          <div className="testimonial-card">
            <p>"The snails were amazing, a true gourmet experience."</p>
            <h4>- John D.</h4>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Try the Best?</h2>
        <button className="cta-button">Shop Now</button>
      </section>
    </div>
  );
};

export default HomePage;
