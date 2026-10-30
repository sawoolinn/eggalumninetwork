import { useState } from 'react'

const PRIMARY_NAV = [
  { id: 'home',          label: 'Home' },
  { id: 'news',          label: 'News & Updates' },
  { id: 'history',       label: 'About' },
  { id: 'organizations', label: 'Partners' },
  { id: 'leadership',    label: 'Leadership' },
  { id: 'events',        label: 'Events' },
]

export default function Navbar({ activeTab, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleNav = (id) => {
    onNavigate(id)
    setMenuOpen(false)
    setSearchOpen(false)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      handleNav('news')
    }
  }

  return (
    <header className="navbar-wrapper">
      {/* ── Tier 1: Top Utility Pre-Header (Harvard Style) ── */}
      <div className="nav-utility-bar">
        <div className="container nav-utility-container">
          <div className="nav-utility-left">
            <span className="nav-utility-institution">
              <i className="fa-solid fa-graduation-cap"></i> EGG ACADEMY ALUMNI
            </span>
            <span className="nav-utility-divider">/</span>
            <span className="nav-utility-sub">EST. 2002 &middot; BANGKOK &amp; GLOBAL</span>
          </div>

          <div className="nav-utility-right">
            <button
              className="nav-utility-link"
              onClick={() => handleNav('news')}
            >
              Scholarships Abroad
            </button>
            <span className="nav-utility-dot">&middot;</span>
            <button
              className="nav-utility-link"
              onClick={() => handleNav('events')}
            >
              Sharing Sessions
            </button>
            <span className="nav-utility-dot">&middot;</span>
            <button
              className="nav-utility-link"
              onClick={() => handleNav('organizations')}
            >
              Partner Directory
            </button>
            <span className="nav-utility-dot">&middot;</span>
            <button
              className="nav-utility-search-toggle"
              onClick={() => setSearchOpen(!searchOpen)}
              title="Quick Search"
              aria-label="Toggle Search"
            >
              <i className={`fa-solid ${searchOpen ? 'fa-xmark' : 'fa-magnifying-glass'}`}></i>
              <span>{searchOpen ? 'Close' : 'Search'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── Expandable Search Dropdown ── */}
      {searchOpen && (
        <div className="nav-search-bar">
          <div className="container">
            <form onSubmit={handleSearchSubmit} className="nav-search-form">
              <i className="fa-solid fa-magnifying-glass nav-search-icon"></i>
              <input
                type="text"
                placeholder="Search scholarships, articles, leadership, or events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button type="submit" className="btn btn-primary nav-search-btn">
                Search News
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ── Tier 2: Main Navigation Bar ── */}
      <div className="nav-main-bar">
        <div className="container nav-container">

          {/* Harvard-Style Academic Crest & Typography */}
          <button
            className="brand-logo-link"
            onClick={() => handleNav('home')}
            aria-label="EGG Alumni Network Home"
          >
            <img
              src="/assets/logo.jpeg"
              alt="EggAlumni Network Crest Logo"
              className="brand-logo-img"
            />
            <div className="brand-text">
              <span className="brand-name">EGG ALUMNI</span>
              <span className="brand-sub">ACADEMIC &amp; GLOBAL NETWORK</span>
            </div>
          </button>

          {/* Desktop Primary Navigation */}
          <nav className="nav-desktop">
            <ul className="nav-menu">
              {PRIMARY_NAV.map((item) => (
                <li key={item.id} className="nav-item">
                  <button
                    className={activeTab === item.id ? 'active' : ''}
                    onClick={() => handleNav(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Action CTA Button */}
            <button
              className={`nav-cta-btn ${activeTab === 'contact' ? 'active' : ''}`}
              onClick={() => handleNav('contact')}
            >
              Contact Us <i className="fa-solid fa-arrow-right"></i>
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>

        </div>
      </div>

      {/* ── Mobile Dropdown Menu (Harvard Editorial Drawer) ── */}
      <div className={`nav-mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <div className="container nav-mobile-content">
          <ul className="nav-mobile-list">
            {PRIMARY_NAV.map((item) => (
              <li key={item.id} className="nav-mobile-item">
                <button
                  className={activeTab === item.id ? 'active' : ''}
                  onClick={() => handleNav(item.id)}
                >
                  <span>{item.label}</span>
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </li>
            ))}
            <li className="nav-mobile-item">
              <button
                className={`nav-mobile-cta ${activeTab === 'contact' ? 'active' : ''}`}
                onClick={() => handleNav('contact')}
              >
                <span>Contact &amp; Inquiries</span>
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </li>
          </ul>

          <div className="nav-mobile-utility">
            <div className="nav-mobile-utility-title">Quick Portals</div>
            <div className="nav-mobile-utility-links">
              <button onClick={() => handleNav('news')}>Scholarships</button>
              <button onClick={() => handleNav('events')}>Sessions</button>
              <button onClick={() => handleNav('organizations')}>Partners</button>
              <button onClick={() => handleNav('history')}>About EGG</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
