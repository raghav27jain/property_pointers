import React, { useState } from 'react';

const PopularSearchesSection = () => {
  const [tab, setTab] = useState('buy');

  const columns = [
    {
      title: 'Popular Residential Searches',
      items: [
        'Property for Sale in New Delhi',
        'Flats in New Delhi',
        'Studio Apartments in New Delhi',
        'Resale House in New Delhi',
        'Flats in Delhi NCR',
        'Property in Delhi NCR'
      ]
    },
    {
      title: 'Popular BHK Searches',
      items: [
        '1 BHK Flats in New Delhi',
        '2 BHK Flats in New Delhi',
        '3 BHK Flats in New Delhi',
        '4 BHK Flats in New Delhi',
        '1 BHK House for Sale in New Delhi'
      ]
    },
    {
      title: 'Popular Flat Searches',
      items: [
        'Flats for Sale in Saket',
        'Flats for Sale in Karol Bagh',
        'Flats for Sale in Lajpat Nagar',
        'Flats for Sale in Malviya Nagar'
      ]
    },
    {
      title: 'Popular House Searches',
      items: [
        'House for Sale in Dwarka',
        'House for Sale in Uttam Nagar',
        'House for Sale in Janakpuri',
        'House for Sale in Vasant Vihar'
      ]
    }
  ];

  return (
    <section className="mb-section mb-fade-section">
      <h2 className="mb-section-title">Property Options in New Delhi</h2>

      <div className="mb-tabs-row">
        <button
          className={`mb-tab-pill ${tab === 'buy' ? 'active' : ''}`}
          onClick={() => setTab('buy')}
        >
          Buy
        </button>
        <button
          className={`mb-tab-pill ${tab === 'rent' ? 'active' : ''}`}
          onClick={() => setTab('rent')}
        >
          Rent
        </button>
      </div>

      <div className="mb-popular-grid">
        {columns.map(col => (
          <div key={col.title} className="mb-popular-col">
            <h3 className="mb-popular-title">{col.title}</h3>
            <ul className="mb-popular-list">
              {col.items.map(item => (
                <li key={item} className="mb-popular-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularSearchesSection;
