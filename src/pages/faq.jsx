import React, { useState } from 'react';
import '../styling/FAQ.css'; // Make sure to add styling for this component

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What products do you offer?",
      answer: "We offer a selection of organic mushrooms and snails, all grown sustainably."
    },
    {
      question: "How are your products sourced?",
      answer: "Our products are grown without chemicals or pesticides, ensuring 100% organic quality."
    },
    {
      question: "Why choose Eco Eats?",
      answer: "Eco Eats prioritizes sustainability and health, offering nutrient-rich products that are good for you and the environment."
    },
    {
      question: "How can I purchase your products?",
      answer: "You can purchase our products directly through our website. Simply add the items to your cart and proceed to checkout."
    }
  ];

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => toggleFAQ(index)}
        >
          <div className="faq-question">
            {item.question}
            <span className="arrow">{activeIndex === index ? '▲' : '▼'}</span>
          </div>
          <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
            {item.answer}
          </div>
        </div>
      ))}
    </section>
  );
};

export default FAQ;
