import React from 'react';
import '../styling/AboutUs.css';
import ContactModal from './contactmodal';

const AboutUs = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Eco Eats</h1>
        <p>We're passionate about providing the finest organic mushrooms and snails, grown with care and sustainability in mind.</p>
      </header>

      <section className="mission-section">
        <div className="mission-text">
          <h2>Our Mission</h2>
          <p>
            At Eco Eats, our mission is to bring the healthiest and most flavorful organic products directly from the farm to your table. We believe in sustainable farming practices that respect the environment and contribute to a healthier planet. Our mushrooms and snails are carefully cultivated to ensure the highest quality and taste, making them a perfect addition to your diet.
          </p>
        </div>
        <div className="mission-image">
          <img src="https://media.istockphoto.com/id/1415628262/photo/organic-mushroom-farm-mushrooms-growing-on-the-farm.jpg?s=612x612&w=0&k=20&c=1jC346cztHLPwWZMNV6ElXdm-ybHZ461BVgF-NCBMOU=" alt="Our farm" />
        </div>
      </section>

      <section className="team-section">
        <h2>Our Story</h2>
        <div className="team-content">
          <div className="team-member">
            <img src="../../src/assets/team-member1.jpg" alt="Team Member 1" />
            <h3>Anita Kinyua</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-text">
            <p>
              Eco Eats was founded with a vision to bring the finest organic mushrooms and snails to your table. Our leader, Anita Kinyua,
              has always been passionate about sustainable agriculture and providing healthy, natural foods.
              Under her guidance, Eco Eats has grown into a trusted source for gourmet ingredients,
              all while staying true to our commitment to sustainability and community support.
            </p>
            <h2>Our Values</h2>
            <ul>
              <li><strong>Sustainability:</strong> We prioritize eco-friendly practices in every step of our process.</li>
              <li><strong>Quality:</strong> We ensure that all our products are of the highest standard.</li>
              <li><strong>Community:</strong> We believe in supporting local farmers and giving back to the community.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Join Us on Our Journey</h2>
        <p>We're always looking for passionate individuals to join our team and help us bring healthy, organic products to more people. Get in touch to learn more!</p>
        
      </section>
    </div>
  );
};

export default AboutUs;
