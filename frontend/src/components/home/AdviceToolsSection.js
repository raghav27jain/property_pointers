import React from 'react';
import { useNavigate } from 'react-router-dom';

const cards = [
  { key: 'emi', title: 'EMI Calculator', text: 'Know how much you will have to pay every month on your loan.' },
  { key: 'offers', title: 'Best Home Loan Offers', text: 'Get the best bank offers curated just for your profile.' },
  { key: 'interiors', title: 'Interiors Budget Estimator', text: 'Estimate your interior budget before you start.' },
  { key: 'rates', title: 'Rates & Trends', text: 'Know all about property rates & trends in your city.' }
];

const AdviceToolsSection = () => {
  const navigate = useNavigate();

  const handleClick = (key) => {
    if (key === 'emi') {
      // go to EMI calculator page
      navigate('/emi-calculator');
    }
    // add more routes for other cards later if needed
  };

  return (
    <section className="mb-section mb-fade-section">
      <h2 className="mb-section-title">Helpful Tools</h2>
      <div className="mb-tools-grid">
        {cards.map((card) => (
          <div key={card.key} className="mb-tool-card">
            <div className="mb-tool-icon" />
            <h3 className="mb-tool-title">{card.title}</h3>
            <p className="mb-tool-text">{card.text}</p>
            <button
              className="mb-link-button"
              type="button"
              onClick={() => handleClick(card.key)}
            >
              View now →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdviceToolsSection;
