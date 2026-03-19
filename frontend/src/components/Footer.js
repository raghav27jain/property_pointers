import React from 'react';

const Footer = () => {
  return (
    <footer className="mb-footer">
      <div className="mb-footer-top">
        <div className="mb-footer-col">
          <h4>About PropertyPointers</h4>
          <p>
            As a smart platform connecting property buyers and sellers, we help you
            discover verified homes, trusted agents and data-backed decisions.
          </p>
        </div>

        <div className="mb-footer-col">
          <h4>Properties in India</h4>
          <p>Property in New Delhi</p>
          <p>Property in Mumbai</p>
          <p>Property in Chennai</p>
          <p>Property in Pune</p>
        </div>

        <div className="mb-footer-col">
          <h4>New Projects in India</h4>
          <p>New Projects in Delhi</p>
          <p>New Projects in Mumbai</p>
          <p>New Projects in Bangalore</p>
          <p>New Projects in Gurgaon</p>
        </div>

        <div className="mb-footer-col">
          <h4>Property Services</h4>
          <p>Home Loan</p>
          <p>Home Interior</p>
        </div>
      </div>

      <div className="mb-footer-bottom">
        <div className="mb-footer-links">
          <span>Sitemap</span>
          <span>Terms &amp; Conditions</span>
          <span>Privacy Policy</span>
          <span>Blog</span>
          <span>Careers</span>
          <span>Help Center</span>
        </div>
        <p className="mb-footer-note">
          Disclaimer: PropertyPointers only provides a platform to advertise properties.
          Users are advised to verify all information independently before making any
          investment or purchase decisions.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
