import { useState, useEffect } from 'react'

const PRIMARY_NAV = [
  { id: 'home',          label: 'Home',         num: '01' },
  { id: 'news',          label: 'News',         num: '02' },
  { id: 'history',       label: 'About',        num: '03' },
  { id: 'leadership',    label: 'Leadership',   num: '04' },
  { id: 'events',        label: 'Events',       num: '05' },
  { id: 'organizations', label: 'Partners',     num: '06' },
  { id: 'contact',       label: 'Contact',      num: '07' },
]

export default function Navbar({ activeTab, onNavigate, onSearch }) {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // Close menus on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setMegaMenuOpen(false)
        setSearchOpen(false)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  // Lock body scroll when mega menu is open
  useEffect(() => {
    if (megaMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [megaMenuOpen])

  const handleNav = (id) => {
    onNavigate(id)
    setMegaMenuOpen(false)
    setSearchOpen(false)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      if (onSearch) {
        onSearch(searchQuery.trim())
      } else {
        handleNav('news')
      }
      setSearchOpen(false)
      setMegaMenuOpen(false)
    }
  }

  return (
    <>
      {/* ── Harvard-Exact Header ── */}
      <header className="hv-header">
        {/* Harvard Crimson Accent Stripe */}
        <div className="hv-top-stripe"></div>

        <div className="container hv-header-container">
          {/* Harvard Veritas-Style Crest & Wordmark */}
          <button
            className="hv-brand"
            onClick={() => handleNav('home')}
            aria-label="EggAlumni Network Homepage"
          >
            <img
              src="/assets/logo.jpeg"
              alt="EggAlumni Shield"
              className="hv-brand-shield"
            />
            <div className="hv-brand-typography">
              <span className="hv-brand-title">EGG ALUMNI</span>
              <span className="hv-brand-sub">NETWORK</span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hv-desktop-nav" aria-label="Main Navigation">
            <ul className="hv-nav-list">
              {PRIMARY_NAV.map((item) => (
                <li key={item.id} className="hv-nav-item">
                  <button
                    className={`hv-nav-link ${activeTab === item.id ? 'active' : ''}`}
                    onClick={() => handleNav(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Header Utilities (Search & Harvard Menu Toggle) */}
          <div className="hv-header-actions">
            <button
              className={`hv-action-btn hv-search-btn ${searchOpen ? 'active' : ''}`}
              onClick={() => { setSearchOpen(!searchOpen); setMegaMenuOpen(false); }}
              aria-label="Toggle Search"
            >
              <i className={`fa-solid ${searchOpen ? 'fa-xmark' : 'fa-magnifying-glass'}`}></i>
              <span className="hv-action-label">{searchOpen ? 'Close' : 'Search'}</span>
            </button>

            <button
              className={`hv-action-btn hv-menu-btn ${megaMenuOpen ? 'active' : ''}`}
              onClick={() => { setMegaMenuOpen(!megaMenuOpen); setSearchOpen(false); }}
              aria-label="Toggle Full Menu"
              aria-expanded={megaMenuOpen}
            >
              <span className="hv-hamburger-icon">
                <span className="hv-hamburger-bar"></span>
                <span className="hv-hamburger-bar"></span>
                <span className="hv-hamburger-bar"></span>
              </span>
              <span className="hv-action-label">{megaMenuOpen ? 'Close' : 'Menu'}</span>
            </button>

            <button
              className={`hv-cta-contact-btn ${activeTab === 'contact' ? 'active' : ''}`}
              onClick={() => handleNav('contact')}
            >
              Inquire
            </button>
          </div>
        </div>

        {/* ── Harvard Instant Search Bar ── */}
        {searchOpen && (
          <div className="hv-search-overlay">
            <div className="container">
              <form onSubmit={handleSearchSubmit} className="hv-search-box">
                <i className="fa-solid fa-magnifying-glass hv-search-icon"></i>
                <input
                  type="text"
                  placeholder="Search articles, scholarships, events, or alumni directories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button type="submit" className="btn btn-primary hv-search-submit">
                  Search
                </button>
                <button
                  type="button"
                  className="hv-search-close"
                  onClick={() => setSearchOpen(false)}
                  aria-label="Close search"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </form>
            </div>
          </div>
        )}
      </header>

      {/* ── Harvard Full-Screen Editorial Mega Drawer ── */}
      {megaMenuOpen && (
        <div className="hv-mega-menu-overlay" role="dialog" aria-modal="true">
          <div className="container hv-mega-container">
            {/* Mega Header */}
            <div className="hv-mega-header">
              <div className="hv-mega-brand">
                <img src="/assets/logo.jpeg" alt="Logo" className="hv-mega-logo" />
                <span className="hv-mega-brand-name">EGG ALUMNI NETWORK</span>
              </div>
              <button
                className="hv-mega-close"
                onClick={() => setMegaMenuOpen(false)}
                aria-label="Close menu"
              >
                <span>CLOSE</span>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            {/* Mega Columns */}
            <div className="hv-mega-grid">
              {/* Primary Column */}
              <div className="hv-mega-col-primary">
                <span className="hv-mega-col-eyebrow">NAVIGATION</span>
                <ul className="hv-mega-nav-list">
                  {PRIMARY_NAV.map((item) => (
                    <li key={item.id} className="hv-mega-nav-item">
                      <button
                        className={`hv-mega-nav-link ${activeTab === item.id ? 'active' : ''}`}
                        onClick={() => handleNav(item.id)}
                      >
                        <span className="hv-mega-nav-num">{item.num}</span>
                        <span className="hv-mega-nav-text">{item.label}</span>
                        <i className="fa-solid fa-arrow-right hv-mega-nav-arrow"></i>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Secondary Column: Programs & Initiatives */}
              <div className="hv-mega-col-secondary">
                <span className="hv-mega-col-eyebrow">KEY INITIATIVES</span>
                <div className="hv-mega-feature-list">
                  <div
                    className="hv-mega-feature-card"
                    onClick={() => handleNav('news')}
                  >
                    <h4>Abroad Scholarships</h4>
                    <p>Guidance and spotlight stories for international universities &amp; research fellowships.</p>
                  </div>

                  <div
                    className="hv-mega-feature-card"
                    onClick={() => handleNav('events')}
                  >
                    <h4>Sharing Sessions &amp; Webinars</h4>
                    <p>Live mentorship sessions led by graduates living in Tokyo, London, Singapore, and San Francisco.</p>
                  </div>

                  <div
                    className="hv-mega-feature-card"
                    onClick={() => handleNav('history')}
                  >
                    <h4>History &amp; Milestones</h4>
                    <p>Learn how our community grew from an academy founded in 1991 into a global network.</p>
                  </div>
                </div>
              </div>

              {/* Tertiary Column: Institutional Links & Contact */}
              <div className="hv-mega-col-tertiary">
                <span className="hv-mega-col-eyebrow">NETWORK &amp; CONTACT</span>
                <div className="hv-mega-contact-box">
                  <p className="hv-mega-contact-desc">
                    Official alumni association uniting graduates of EGG Academy across 30+ nations.
                  </p>
                  <div className="hv-mega-contact-details">
                    <div>
                      <strong>Inquiries:</strong> info@eggalumni.tech
                    </div>
                    <div>
                      <strong>Line:</strong> @eggalumni
                    </div>
                    <div>
                      <strong>Headquarters:</strong> Bangkok, Thailand
                    </div>
                  </div>
                  <button
                    className="btn btn-primary hv-mega-inquire-btn"
                    onClick={() => handleNav('contact')}
                  >
                    Send Direct Inquiry <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Mega Bottom Bar */}
            <div className="hv-mega-footer">
              <span className="hv-mega-copy">
                &copy; {new Date().getFullYear()} EggAlumni Network. Modeled in the tradition of academic excellence.
              </span>
              <div className="hv-mega-socials">
                <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
