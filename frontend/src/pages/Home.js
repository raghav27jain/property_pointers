import React, { useState } from 'react';


const TABS = ['Buy', 'Rent', 'New Projects', 'Commercial', 'Services'];

const QUICK_CHIPS = [
  'Verified Only',
  'New Launches',
  'Luxury Homes',
  'Best ROI',
  'Builder Floors',
  'Interior Designers',
];


const HomeHero = () => {
  const [activeTab, setActiveTab] = useState('Buy');
  const [query, setQuery] = useState('');
  const [activeChip, setActiveChip] = useState('Verified Only');

  const handleSubmit = (e) => {
    e.preventDefault();
    // later: route based on activeTab + query
  };

  return (
    <section className="pp-hero">
      <div className="pp-hero-inner">
        <div className="pp-hero-left">
          <h1 className="pp-hero-title">
            Find the Right Property.
            <br />
            Analyze Before You Invest.
          </h1>

          <p className="pp-hero-subtitle">
            Explore verified properties, compare developers, discover services, and use smart tools — all in one real estate platform.
          </p>

          {/* STEP 2: tabs */}
          <div className="pp-hero-tabs">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                className={
                  'pp-hero-tab' + (activeTab === tab ? ' pp-hero-tab--active' : '')
                }
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* STEP 3: search + Verified + CTAs */}
          <form className="pp-hero-search-row" onSubmit={handleSubmit}>
            <div className="pp-hero-search">
              <span className="pp-hero-search-label">{activeTab}</span>
              <input
                type="text"
                className="pp-hero-search-input"
                placeholder="Search by city, locality, project, builder..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <span className="pp-hero-verified-pill">Verified</span>
            </div>

            <div className="pp-hero-cta-group">
              <button type="submit" className="pp-hero-cta pp-hero-cta--primary">
                Explore Properties
              </button>
              <button type="button" className="pp-hero-cta pp-hero-cta--secondary">
                Post Property FREE
              </button>
            </div>
          </form>

          {/* STEP 4: chips will come below here */}
          <div className="pp-hero-chips">
            {QUICK_CHIPS.map((chip) => (
              <button
                key={chip}
                type="button"
                className={
                  'pp-hero-chip' +
                  (activeChip === chip ? ' pp-hero-chip--active' : '')
                }
                onClick={() => setActiveChip(chip)}
              >
                {chip}
              </button>
            ))}
          </div>

          
        </div>

       
      </div>
    </section>
  );
};

export default HomeHero;
