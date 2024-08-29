import React from 'react';
import '../styling/Home.css';
import Testimonials from './Testimonials';
import Footer from './Contacts';
import useScrollRotation from '../scroll';
import FAQ from './faq';

const HomePage = () => {
  useScrollRotation()
  return (
    <div className="home-page">
      <section className="hero-wrapper">
        <section className="hero">
          <div className="hero-content">
            <h1>Savor the Earth’s Delicacies</h1>
            <p>Explore our selection of organic mushrooms and snails, grown with care.</p>
            
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
                <h3>Oyster Mushrooms</h3>
                <p>Oyster mushrooms are prized for their mild, savory flavor and tender, velvety texture, making them perfect for sautéing and stir-fries. Rich in protein, fiber, and vitamins B and D, they also offer powerful antioxidants that boost immune health. Known for absorbing flavors well, oyster mushrooms add depth to a variety of dishes. Their unique appearance and earthy taste enhance both the visual appeal and flavor of meals.</p>
               
                
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-card-inner">
              <div className="product-card-front">
                <img src="/assets/escaragot.webp" alt="Fresh Snails" />
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
                <img src="/assets/Tallow.webp" alt="Fresh Snails" />
                <h3> Tallow</h3>
              </div>
              <div className="product-card-back">
                <h3> </h3>Tallow
                <p>
                Tallow is a nutrient-rich fat, ideal for high-heat cooking due to its high smoke point and stability. It adds a deep, savory flavor to dishes, making it popular for frying and roasting. Rich in vitamins A, D, E, and K, tallow also boasts impressive moisturizing properties, making it a key ingredient in natural skincare products. Historically used in traditional cooking and remedies, tallow is cherished for its versatility and health benefits.</p>
               
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-card-inner">
              <div className="product-card-front">
                <img src="https://media.istockphoto.com/id/1082526308/photo/close-up-of-dry-mushrooms-in-jar.jpg?s=612x612&w=0&k=20&c=z2fVV74-24EdSg_8u_Qt0Jezu__PtK2KQ8k_oIkzH58=" alt="Fresh Snails" />
                <h3> Escargot</h3>
              </div>
              <div className="product-card-back">
                <h3> Dried mushroom</h3>
                <p>Dried mushrooms are dehydrated fungi that retain their rich, earthy flavor and nutritional benefits. They are commonly used in cooking to add depth and umami to dishes like soups, stews, and sauces. Before use, they are typically rehydrated by soaking in water, which also creates a flavorful broth. Dried mushrooms have a long shelf life, making them a convenient pantry staple. They are also valued in traditional medicine for their potential health benefits, including immune support and anti-inflammatory properties..</p>
               
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits">
        <h2>Why Choose Eco Eats?</h2>
        <div className="benefit-cards">
          <div className="benefit-card">
            <img src="/assets/farm.webp" alt="100% Organic" />
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
      <FAQ />
      <Testimonials /> 

      
    
    </div>
  );
};

export default HomePage;
