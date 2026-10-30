const FOOTER_NAV = [
  { id: 'home',       label: 'Home' },
  { id: 'news',       label: 'News & Scholarships' },
  { id: 'leadership', label: 'Current Leadership' },
  { id: 'events',     label: 'Events' },
  { id: 'contact',    label: 'Contact Us' },
]

export default function Footer({ onNavigate }) {
  const handleNav = (id) => {
    onNavigate(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <img
                src="/assets/logo.jpeg"
                alt="EggAlumni Logo"
                style={{ height: '46px', width: 'auto', borderRadius: '2px', border: '1px solid rgba(255,255,255,0.1)' }}
              />
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: '700', color: '#fff' }}>EGG ALUMNI</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.16em', color: 'rgba(255,255,255,0.4)' }}>NETWORK</div>
              </div>
            </div>
            <p>
              Uniting graduates of EGG Academy since 2013 — fostering collaboration, scholarship, and meaningful change in communities worldwide.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul className="footer-links">
              {FOOTER_NAV.map((item) => (
                <li key={item.id}>
                  <button onClick={() => handleNav(item.id)}>{item.label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="footer-col">
            <h4>Connect</h4>
            <ul className="footer-links">
              {['Facebook', 'Instagram', 'LinkedIn', 'YouTube'].map((label) => (
                <li key={label}><a href="#">{label}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', fontFamily: 'var(--font-sans)' }}>
                <i className="fa-solid fa-envelope" style={{ color: 'var(--color-primary)', marginRight: '0.5rem' }}></i>
                info@eggalumni.tech
              </li>
              <li style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', fontFamily: 'var(--font-sans)' }}>
                <i className="fa-brands fa-line" style={{ color: 'var(--color-primary)', marginRight: '0.5rem' }}></i>
                @eggalumni
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} EggAlumni Network. All rights reserved.</span>
          <span style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {['Privacy Policy', 'Terms of Use', 'Sitemap'].map((label) => (
              <a key={label} href="#" style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.78rem' }}>{label}</a>
            ))}
          </span>
        </div>
      </div>
    </footer>
  )
}
