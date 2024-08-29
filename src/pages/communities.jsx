import React from 'react';
import '../styling/Communities.css';

const Communities = () => {
  return (
    <div className="communities-page">
      <header className="communities-header">
        <h1>Our Community</h1>
        <p>At Eco Eats, we are proud to be part of a vibrant community that shares our commitment to sustainability, quality, and growth.</p>
      </header>

      <section className="community-section">
        <div className="community-image">
          <img src="https://media.istockphoto.com/id/1249196628/photo/life-hack-edible-helix-pomatia-grape-snails-or-roman-snails-burgundy-snails-in-shells-in.jpg?s=612x612&w=0&k=20&c=ETJTmo9pVTBgc0VwMSy-xMZeWdrLJrl8uNiXwq1sPrA=" alt="Community" />
        </div>
        <div className="community-story">
          <h2>Our Journey Together</h2>
          <p>
            Our collaboration with Ungana began with a shared vision of creating a sustainable future. 
            Together, we've worked to promote eco-friendly practices and support local farmers. 
            Their dedication to organic farming aligns perfectly with our mission at Eco Eats, 
            making this partnership a natural fit. 
            We've not only cultivated great produce but also built a community that values sustainability and quality.
          </p>
          <p>
            Through this partnership, Eco Eats and Ungana have been able to bring fresh, organic mushrooms and snails 
            to tables across the region, ensuring that our customers receive the best quality products while supporting local agriculture.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Communities;
