const SOCIAL_ICONS = [
  // 'fa-brands fa-facebook',
  // 'fa-brands fa-instagram',
  // 'fa-brands fa-linkedin',
  // 'fa-brands fa-youtube',
]

const FOOTER_NAV = [
  // { id: 'home',          label: 'Home' },
  // { id: 'news',          label: 'News & Scholarships' },
  // { id: 'organizations', label: 'Organizations & Partners' },
  // { id: 'history',       label: 'History & About' },
  // { id: 'leadership',    label: 'Current Leadership' },
  // { id: 'events',        label: 'Events & Sharing Sessions' },
]

const RESOURCES = [
  // 'Scholarship Application Guide',
  // 'Abroad Student Handbook',
  // 'Alumni Directory (Members Only)',
  // 'Annual Report 2025',
  // 'Photo Gallery & Archives',
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
          {/* <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
              <img
                src="/assets/logo.jpeg"
                alt="EggAlumni Logo"
                style={{ height: '50px', width: 'auto', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)' }}
              />
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fff' }}>EGG ALUMNI</div>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)' }}>NETWORK</div>
              </div>
            </div>
            <p>
              The EGG Alumni Network was established in 2013 as a platform to unite graduates of EGG Academy, fostering collaboration and continued development among alumni. The network builds on the collective efforts of its members to promote meaningful change in their communities.
            </p>
            <div style={{ display: 'flex', gap: '0.6rem', marginTop: '1.2rem' }}>
              {SOCIAL_ICONS.map((icon) => (
                <FooterSocialBtn key={icon} icon={icon} />
              ))}
            </div>
          </div> */}

          {/* Navigation */}
          {/* <div className="footer-col">
            <h4>Quick Navigation</h4>
            <ul className="footer-links">
              {FOOTER_NAV.map((item) => (
                <li key={item.id}>
                  <button onClick={() => handleNav(item.id)}>{item.label}</button>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Resources */}
          {/* <div className="footer-col">
            <h4>Resources</h4>
            <ul className="footer-links">
              {RESOURCES.map((label) => (
                <li key={label}><a href="#">{label}</a></li>
              ))}
            </ul>
          </div> */}

          {/* Contact */}
          {/* <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { icon: 'fa-envelope', text: 'info@eggalumni.org' },
                { icon: 'fa-phone',    text: '+66 2-123-4567' },
                { icon: 'fa-brands fa-line', text: '@eggalumni' },
                { icon: 'fa-regular fa-clock', text: 'Mon–Fri 09:00–17:00 ICT' },
              ].map((item) => (
                <li key={item.text} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.87rem' }}>
                  <i className={`fa-solid ${item.icon}`} style={{ color: 'var(--color-primary)' }}></i> {item.text}
                </li>
              ))}
            </ul>
            <button
              className="btn btn-outline-white"
              style={{ marginTop: '1.2rem', width: '100%' }}
              onClick={() => handleNav('contact')}
            >
              <i className="fa-solid fa-paper-plane"></i> Send Inquiry
            </button>
          </div> */}

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} EggAlumni Network. All rights reserved.</span>
          <span style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {['Privacy Policy', 'Terms of Use', 'Sitemap'].map((label) => (
              <a key={label} href="#" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem' }}>{label}</a>
            ))}
          </span>
        </div>

      </div>
    </footer>
  )
}

function FooterSocialBtn({ icon }) {
  return (
    <a
      href="#"
      style={{
        width: '34px', height: '34px', borderRadius: '50%',
        background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.12)',
        transition: 'all 0.2s', textDecoration: 'none',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.color = '#fff' }}
      onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
    >
      <i className={icon}></i>
    </a>
  )
}
