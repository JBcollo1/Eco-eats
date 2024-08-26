import React, { useState, useEffect } from 'react';
import '../styling/ContactModal.css';
import { FaPhone, FaEnvelope, FaInstagram, FaTiktok } from 'react-icons/fa';

const faqs = [
  { question: "What products does Eco Eats offer?", answer: "Eco Eats offers a range of gourmet products including Oyster Mushrooms, Escargot, Tallow, and dried mushrooms. All our products are carefully selected to ensure high quality and sustainability." },
  { question: "Are your products organic?", answer: "Yes, all our products are grown using organic and sustainable farming practices to ensure the highest quality and to support environmental sustainability." },
  { question: "Do you offer home delivery?", answer: "Yes, we offer home delivery for our products. Please note that delivery charges apply, and we do not offer free delivery at this time." },
  { question: "How can I place an order?", answer: "You can place an order through our website. Simply select the products you wish to purchase, add them to your cart, and proceed to checkout." },
  { question: "Can I track my delivery?", answer: "Yes, once your order is processed and dispatched, we will provide you with a tracking number so you can monitor the status of your delivery." },
  { question: "What is your return policy?", answer: "We accept returns for products that are damaged or incorrect upon arrival. Please contact our customer service within 7 days of receiving your order to arrange a return or exchange." },
  { question: "Do you offer bulk purchasing options?", answer: "Yes, we offer bulk purchasing options for businesses or large orders. Please contact us directly for more information and pricing." },
  { question: "Are your products suitable for special diets?", answer: "Our products are all natural and free from additives. However, if you have specific dietary concerns, please check the product descriptions or consult with us to ensure they meet your dietary requirements." },
  { question: "How do you ensure the quality of your products?", answer: "We follow stringent quality control processes from cultivation to packaging. Our team carefully inspects each product to ensure it meets our high standards before it reaches you." },
  { question: "How can I contact Eco Eats for further inquiries?", answer: "You can reach us through our contact details provided on our website, or email us at info@ecoeats.com. We are here to assist you with any questions or concerns you may have." }
];

const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setShowFAQ(false);
    setShowTerms(false);
  };

  const toggleFAQ = () => {
    console.log('Toggling FAQ', { showFAQ });
    setShowFAQ(true);
    setShowTerms(false);
  };

  const toggleTerms = () => {
    console.log('Toggling FAQ', { showFAQ } , {showTerms});
    setShowTerms(true);
    setShowFAQ(false);
  };

  useEffect(() => {
    const contactElements = document.querySelectorAll('[data-contact-us]');
    contactElements.forEach((element) => {
      element.addEventListener('click', openModal);
    });

    return () => {
      contactElements.forEach((element) => {
        element.removeEventListener('click', openModal);
      });
    };
  }, []);

  return (
    <div>
      {isOpen && (
        <div className={`modal-overlay ${isOpen ? 'slide-in' : 'slide-out'}`}>
          <div className="modal-content">
            <div className="modal-navbar">
              <img src="../../src/assets/logo.webp" alt="Eco Eats Logo" className="logo" />
              <button className="navbar-button" onClick={toggleFAQ}>
                FAQs
              </button>
              <button className="navbar-button" onClick={toggleTerms}>
                Terms & Agreement
              </button>
              <span className="close-button" onClick={closeModal}>
                &times;
              </span>
            </div>

            {!showFAQ && !showTerms ? (
              <div className="contact-details">
                <h2>Contact Us</h2>
                <div className="contact-icons">
                  <a href="tel:+25444444444"><FaPhone /> +254 44444444 or +254 44444444</a>
                  <a href="mailto:anita@gmail.com"><FaEnvelope /> anita@gmail.com</a>
                  <a href="https://www.instagram.com/ecoeats"><FaInstagram /></a>
                  <a href="https://www.tiktok.com/@ecoeats"><FaTiktok /></a>
                </div>
              </div>
            ) : showFAQ ? (
              <div className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <ul className="faq-list">
                  {faqs.map((faq, index) => (
                    <li key={index} className="faq-item">
                      <button className="faq-question">
                        {faq.question} <span className="plus-icon">+</span>
                      </button>
                      <p className="faq-answer">{faq.answer}</p>
                    </li>
                  ))}
                </ul>
                <button className="back-button" onClick={() => setShowFAQ(false)}>
                  Back to Contact
                </button>
              </div>
            ) : showTerms ? (
              <div className="terms-section">
                <h2>Terms & Conditions</h2>
                <h3>IMPROPER PURCHASING & RETURNS ACTIVITY</h3>
                <p>Allbirds' consumer rights and policies are intended solely for the benefit of end consumers, not for those purchasing products for resale. Purchasing products for resale or engaging in fraudulent activities is strictly prohibited. If Allbirds determines that a purchase or order is intended for resale, involves fraudulent activity or if Allbirds determines that they are unable to properly satisfy a customer's needs, as demonstrated by a high return rate, they reserve the right to (1) suspend the application of any policy that provides a right or benefit intended for direct-to-consumer purchases; and (2) take any action to hinder such purchase or order, including restricting sales to any consumer, canceling orders, charging restocking fees, imposing purchase quantity limits, declining to issue refunds or take returns, and/or suspending or closing any account.</p>
                <h3>OUR RIGHT TO REJECT YOUR PURCHASE/RETURN, OR CANCEL AN ORDER</h3>
                <p>The sale of products and fulfillment of orders at Allbirds' stores or through our e-commerce site is contingent upon product availability and discretion in managing inventory. Allbirds explicitly reserves the right (in its sole discretion) to limit, decline, or reject any sales, returns, and orders for any reason, without being liable for any damages or costs, except for repaying any amount received from the customer in relation to such sale or order.</p>
                <button className="back-button" onClick={() => setShowTerms(false)}>
                  Back to Contact
                </button>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactModal;
