import React from 'react';

const ListingCard = ({ prop }) => {
  return (
    <article className="mb-card">
      <div
        className="mb-card-img"
        style={{ backgroundImage: `url(${prop.image || 'https://via.placeholder.com/400x200'})` }}
      />
      <div className="mb-card-body">
        <h3 className="mb-card-title">
          {prop.title || '2 BHK Apartment'}
          {prop.verified && <span className="mb-badge-verified">Verified</span>}
        </h3>
        <p className="mb-card-subtitle">
          {prop.city || 'Delhi'} • {prop.locality || 'Dwarka'}
        </p>
        <p className="mb-card-price">₹{prop.price || '75 Lac'}</p>
      </div>
    </article>
  );
};

export default ListingCard;
