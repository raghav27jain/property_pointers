// import React, { useState } from 'react';

// const tabs = ['Buy', 'Rent', 'Plots'];

// const SearchHero = ({ onSearch }) => {
//   const [activeTab, setActiveTab] = useState('Buy');
//   const [city, setCity] = useState('');
//   const [budget, setBudget] = useState('');
//   const [bhk, setBhk] = useState('');
//   const [verifiedOnly, setVerifiedOnly] = useState(false);

//   const handleSearch = () => {
//     onSearch?.({
//       type: activeTab.toLowerCase(),
//       city,
//       budget,
//       bhk,
//       verified: verifiedOnly
//     });
//   };

//   return (
//     <section className="mb-hero">
//       <div className="mb-hero-inner">
//         <div className="mb-hero-tabs">
//           {tabs.map(t => (
//             <button
//               key={t}
//               className={`mb-hero-tab ${activeTab === t ? 'active' : ''}`}
//               onClick={() => setActiveTab(t)}
//             >
//               {t}
//             </button>
//           ))}
//         </div>

//         <h1 className="mb-hero-title">
//           Buy, Sell, Rent Property in India
//         </h1>

//         <div className="mb-search-card">
//           <input
//             className="mb-input"
//             placeholder="Search by City / Locality / Project"
//             value={city}
//             onChange={e => setCity(e.target.value)}
//           />
//           <input
//             className="mb-input"
//             placeholder="Budget (e.g. 50 Lac)"
//             value={budget}
//             onChange={e => setBudget(e.target.value)}
//           />
//           <input
//             className="mb-input"
//             placeholder="BHK (1, 2, 3...)"
//             value={bhk}
//             onChange={e => setBhk(e.target.value)}
//           />

//           <button className="mb-btn-primary" onClick={handleSearch}>
//             Search
//           </button>

//           <div className="mb-filter-chips">
//             <span
//               className={`mb-chip ${verifiedOnly ? 'active' : ''}`}
//               onClick={() => setVerifiedOnly(v => !v)}
//             >
//               Verified Listings
//             </span>
//             <span className="mb-chip">Ready to Move</span>
//             <span className="mb-chip">Owner Properties</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SearchHero;
