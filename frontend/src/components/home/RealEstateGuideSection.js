import React from 'react';

const RealEstateGuideSection = () => {
  return (
    <section className="mb-section mb-fade-section">
      <h2 className="mb-section-title">Real Estate Guide</h2>

      <div className="mb-guide-grid">
        <div className="mb-guide-card">
          <h3 className="mb-guide-title">Locality Videos</h3>
          <p className="mb-guide-sub">Explore popular localities with short videos.</p>
          <div className="mb-guide-video-row">
            <div className="mb-guide-video" />
            <div className="mb-guide-video" />
          </div>
          <button className="mb-link-button">See all →</button>
        </div>

        <div className="mb-guide-card">
          <h3 className="mb-guide-title">Industry Insights</h3>
          <ul className="mb-guide-list">
            <li>Ready Reckoner Rate – What Does it Mean?</li>
            <li>Occupancy Certificate (OC) – Meaning & Importance</li>
            <li>15+ Vastu Tips for Residential Building</li>
          </ul>
          <button className="mb-link-button">See all →</button>
        </div>

        <div className="mb-guide-card">
          <h3 className="mb-guide-title">Legal Updates</h3>
          <ul className="mb-guide-list">
            <li>How to Write a Will for Property</li>
            <li>Delhi Land Records – How to Check Online</li>
          </ul>
          <button className="mb-link-button">See all →</button>
        </div>
      </div>
    </section>
  );
};

export default RealEstateGuideSection;
