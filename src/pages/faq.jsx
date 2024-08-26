import React, { useState } from 'react';
import '../styling/FAQ.css'; // Ensure you have appropriate styles for this component

const FAQ = () => {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
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
      <h2>Some Frequently Asked Questions</h2>
      <ul className="faq-list">
        {faqData.map((faq, index) => (
          <li key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openFAQIndex === index}
            >
              {faq.question} <span className="plus-icon">{openFAQIndex === index ? '-' : '+'}</span>
            </button>
            {openFAQIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQ;
