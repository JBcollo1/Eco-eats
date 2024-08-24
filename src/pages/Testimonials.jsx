import React, { useState } from 'react';

const testimonials = [
  { id: 1, quote: "The best mushrooms I've ever had! Fresh and full of flavor.", author: "- Sarah M." },
  { id: 2, quote: "The snails were amazing, a true gourmet experience.", author: "- John D." },
  { id: 3, quote: "I love the variety and quality of Eco Eats products. Highly recommended!", author: "- Alice B." },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="tv-screen">
        <div className="stars">
          {'★'.repeat(5)}
        </div>
        <div className="testimonial-container">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-card ${index === currentTestimonial ? 'active' : ''}`}
            >
              <p>{testimonial.quote}</p>
              <h4>{testimonial.author}</h4>
            </div>
          ))}
        </div>
        <button className="arrow left-arrow" onClick={handlePrevTestimonial}>
          &larr;
        </button>
        <button className="arrow right-arrow" onClick={handleNextTestimonial}>
          &rarr;
        </button>
        <div className="dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentTestimonial ? 'active' : ''}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
