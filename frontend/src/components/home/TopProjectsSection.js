import React from 'react';

const projects = [
  { id: 1, name: 'Indus Luxury Builder Floor', location: 'Greater Kailash II, New Delhi', price: '₹ 5.25 Cr onwards' },
  { id: 2, name: 'Metro Premium Builder Floors', location: 'GK I, New Delhi', price: '₹ 4.75 Cr onwards' },
  { id: 3, name: 'Happy Homes Apartment', location: 'Uttam Nagar, New Delhi', price: '₹ 16 Lac onwards' }
];

const TopProjectsSection = () => (
  <section className="mb-section mb-fade-section">
    <div className="mb-section-header">
      <h2 className="mb-section-title">Top Projects</h2>
      <button className="mb-link-button">See all Projects →</button>
    </div>

    <div className="mb-projects-row">
      {projects.map(p => (
        <div key={p.id} className="mb-project-card">
          <div className="mb-project-img" />
          <div className="mb-project-body">
            <h3 className="mb-project-name">{p.name}</h3>
            <p className="mb-project-loc">{p.location}</p>
            <p className="mb-project-price">{p.price}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TopProjectsSection;
