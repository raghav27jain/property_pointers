import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [openMenu, setOpenMenu] = useState(null); // 'buy' | 'rent' | ...
  const handleBlogsClick = () => {
    setOpenMenu(null);          // close the mega menu
    navigate('/insights/blogs'); // change route
  };

  const isActiveTab = (pathKey) => {
    if (pathKey === 'buy') return pathname.startsWith('/buy');
    if (pathKey === 'rent') return pathname.startsWith('/rent');
    if (pathKey === 'projects') return pathname.startsWith('/projects');
    if (pathKey === 'commercial') return pathname.startsWith('/commercial');
    if (pathKey === 'developers') return pathname.startsWith('/developers');
    if (pathKey === 'insights-') return pathname.startsWith('/insights');
    if (pathKey === 'tools') return pathname.startsWith('/tools');
    if (pathKey === 'services') return pathname.startsWith('/services');
    return false;
  };

  const handleNavClick = (key, path) => {
    navigate(path);
    setOpenMenu(key);
  };

  return (
    <header className="pp-header">
      {/* SUPER TOP BAR – keep as before */}
      <div className="pp-superbar">
        <div className="pp-superbar-inner">
          <div className="pp-superbar-left">
            <span className="pp-superbar-city">Delhi NCR</span>
            <span className="pp-superbar-sep">|</span>
            <span className="pp-superbar-text">
              Verified Listings • Smart Tools • Builder &amp; Vendor Services
            </span>
          </div>

          <div className="pp-superbar-right">
            <button
              type="button"
              className="pp-superbar-link"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
            <span className="pp-superbar-sep">|</span>
            <button
              type="button"
              className="pp-superbar-link"
              onClick={() => navigate('/vendors')}
            >
              Join as Vendor
            </button>
            <span className="pp-superbar-sep">|</span>
            <button
              type="button"
              className="pp-superbar-link"
              onClick={() => navigate('/list-project')}
            >
              List Project
            </button>
            <button
              type="button"
              className="pp-header-link"
              onClick={() => navigate('/insights/blogs/add')}
            >
              Host Login
            </button>
          </div>
        </div>
      </div>

      {/* MAIN HEADER ROW + MEGA MENUS */}
      <div
        className="pp-mainbar"
        onMouseLeave={() => setOpenMenu(null)}
      >
        <div className="pp-mainbar-inner">
          {/* Logo */}
          <div
            className="pp-logo"
            onClick={() => navigate('/')}
          >
            <span className="pp-logo-blue">Property</span>
            <span className="pp-logo-gold">Pointers</span>
          </div>

          {/* Center nav tabs */}
          <nav className="pp-nav">
            <div className="pp-nav-group">
              <button
                type="button"
                className={`pp-nav-item ${isActiveTab('buy') ? 'active' : ''}`}
                onMouseEnter={() => setOpenMenu('buy')}
                onClick={() => handleNavClick('buy', '/buy')}
              >
                Buy
              </button>
              {openMenu === 'buy' && (
                <div className="pp-mega">
                  <div className="pp-mega-block pp-mega-block-col">
                    <h4>Buy</h4>
                    <ul>
                      <li>Apartments</li>
                      <li>Builder Floors</li>
                      <li>Villas</li>
                      <li>Plots / Land</li>
                      <li>Ready to Move</li>
                      <li>Luxury Homes</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="pp-nav-group">
              <button
                type="button"
                className={`pp-nav-item ${isActiveTab('rent') ? 'active' : ''}`}
                onMouseEnter={() => setOpenMenu('rent')}
                onClick={() => handleNavClick('rent', '/rent')}
              >
                Rent
              </button>
              {openMenu === 'rent' && (
                <div className="pp-mega">
                  <div className="pp-mega-block pp-mega-block-col">
                    <h4>Rent</h4>
                    <ul>
                      <li>Flats for Rent</li>
                      <li>House for Rent</li>
                      <li>Commercial Rent</li>
                      <li>PG / Co-living</li>
                      <li>Owner Properties</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="pp-nav-group">
              <button
                type="button"
                className={`pp-nav-item ${isActiveTab('projects') ? 'active' : ''}`}
                onMouseEnter={() => setOpenMenu('projects')}
                onClick={() => handleNavClick('projects', '/projects')}
              >
                New Projects
              </button>
              {openMenu === 'projects' && (
                <div className="pp-mega">
                  <div className="pp-mega-block pp-mega-block-col">
                    <h4>New Projects</h4>
                    <ul>
                      <li>New Launches</li>
                      <li>Ready to Move</li>
                      <li>Luxury Projects</li>
                      <li>Affordable Projects</li>
                      <li>Builder Spotlight</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="pp-nav-group">
              <button
                type="button"
                className={`pp-nav-item ${isActiveTab('commercial') ? 'active' : ''}`}
                onMouseEnter={() => setOpenMenu('commercial')}
                onClick={() => handleNavClick('commercial', '/commercial')}
              >
                Commercial
              </button>
              {openMenu === 'commercial' && (
                <div className="pp-mega">
                  <div className="pp-mega-block pp-mega-block-col">
                    <h4>Commercial</h4>
                    <ul>
                      <li>Office Space</li>
                      <li>Shops</li>
                      <li>Showrooms</li>
                      <li>Warehouses</li>
                      <li>Commercial Land</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="pp-nav-group">
              <button
                type="button"
                className={`pp-nav-item ${isActiveTab('services') ? 'active' : ''}`}
                onMouseEnter={() => setOpenMenu('services')}
                onClick={() => handleNavClick('services', '/services')}
              >
                Services
              </button>
              {openMenu === 'services' && (
                <div className="pp-mega">
                  <div className="pp-mega-block pp-mega-block-col">
                    <h4>Services</h4>
                    <ul>
                      <li>Construction</li>
                      <li>Interiors</li>
                      <li>Legal</li>
                      <li>Printing / Marketing</li>
                      <li>Facility Mgmt.</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="pp-nav-group">
              <button
                type="button"
                className={`pp-nav-item ${isActiveTab('developers') ? 'active' : ''}`}
                onMouseEnter={() => setOpenMenu('developers')}
                onClick={() => handleNavClick('developers', '/developers')}
              >
                Developers
              </button>
              {openMenu === 'developers' && (
                <div className="pp-mega">
                  <div className="pp-mega-block pp-mega-block-col">
                    <h4>Developers</h4>
                    <ul>
                      <li>Top Developers</li>
                      <li>Explore by Builder</li>
                      <li>Builder Reviews</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="pp-nav-group">
              <button
                type="button"
                className={`pp-nav-item ${isActiveTab('insights') ? 'active' : ''}`}
                onMouseEnter={() => setOpenMenu('insights')}
                onClick={() => handleNavClick('insights', '/insights')}
              >
                Insights
              </button>

              {openMenu === 'insights' && (
                <div className="pp-mega">
                  <div className="pp-mega-block pp-mega-block-col">
                    <h4>Insights</h4>
                    <ul>
                      <li>Market Trends</li>
                      <li>City Reports</li>
                      <li>Investment Guides</li>
                      <li>
                        <button
                          type="button"
                          className="pp-mega-link-button"
                          onClick={handleBlogsClick}
                        >
                          Blogs
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>


            <div className="pp-nav-group">
              <button
                type="button"
                className={`pp-nav-item ${isActiveTab('tools') ? 'active' : ''}`}
                onMouseEnter={() => setOpenMenu('tools')}
                onClick={() => handleNavClick('tools', '/tools')}
              >
                Tools
              </button>
              {openMenu === 'tools' && (
                <div className="pp-mega">
                  <div className="pp-mega-block pp-mega-block-col">
                    <h4>Tools</h4>
                    <ul>
                      <li>EMI</li>
                      <li>ROI</li>
                      <li>Rental Yield</li>
                      <li>Vastu</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right CTA button */}
          <button
            type="button"
            className="pp-post-btn"
            onClick={() => navigate('/post-property')}
          >
            Post
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
