import { useState } from 'react'

const NAV_ITEMS = [
  { id: 'home',          label: 'Home',                    icon: 'fa-house' },
  { id: 'news',          label: 'News',     icon: 'fa-newspaper' },
  // { id: 'organizations', label: 'Organizations', icon: 'fa-sitemap' },
  // { id: 'history',       label: 'History',          icon: 'fa-landmark' },
  { id: 'leadership',    label: 'Current Leadership',       icon: 'fa-user-tie' },
  // { id: 'events',        label: 'Events',         icon: 'fa-calendar-days' },
  { id: 'contact',       label: 'Contact Us',               icon: 'fa-paper-plane' },
]

export default function Navbar({ activeTab, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = (id) => {
    onNavigate(id)
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="container nav-container">

        {/* Brand */}
        <button
          className="brand-logo-link"
          onClick={() => handleNav('home')}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <img src="/assets/logo.jpeg" alt="EggAlumni Network Logo" className="brand-logo-img" />
          <div className="brand-text">
            <span className="brand-name">EGG ALUMNI</span>
            <span className="brand-sub">NETWORK</span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.id} className="nav-item">
              <button
                className={activeTab === item.id ? 'active' : ''}
                onClick={() => handleNav(item.id)}
              >
                <i className={`fa-solid ${item.icon}`}></i> {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>

      </div>
    </header>
  )
}
