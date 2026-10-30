import organizationsData from '../data/organizations.json'

export default function OrganizationSection({ onNavigate }) {
  return (
    <div style={{ minHeight: '100vh' }}>

      {/* ── Page Hero Banner ── */}
      <div style={{ background: 'var(--color-navy)', padding: '4rem 0 3rem 0', borderBottom: '3px solid var(--color-primary)' }}>
        <div className="container">
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', display: 'block', marginBottom: '0.75rem' }}>
            <i className="fa-solid fa-building-columns"></i>&nbsp; Organizations &amp; Partners
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff', fontWeight: '700', marginBottom: '0.75rem' }}>
            Our Network of Partners
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '1rem', maxWidth: '580px', fontFamily: 'var(--font-sans)', lineHeight: '1.75' }}>
            The EGG Alumni Network collaborates with universities, NGOs, embassies, and professional organisations around the world to create opportunities for our members.
          </p>
        </div>
      </div>

      {/* ── Organizations Grid ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag"><i className="fa-solid fa-handshake"></i> Partners</span>
            <h2 className="section-title">Organizations &amp; Affiliations</h2>
            <p className="section-subtitle">These institutions share our commitment to education, community development, and global engagement.</p>
          </div>

          <div className="org-grid">
            {organizationsData.map((org, i) => (
              <div key={i} className="org-card">
                {org.logo && (
                  <img src={org.logo} alt={org.name}
                    style={{ height: '48px', width: 'auto', objectFit: 'contain', marginBottom: '1rem', display: 'block' }} />
                )}
                <h3 className="org-name">{org.name}</h3>
                {org.type && (
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.68rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary)', borderTop: '2px solid var(--color-primary)', paddingTop: '0.2rem', display: 'inline-block', marginBottom: '0.75rem' }}>
                    {org.type}
                  </span>
                )}
                <p className="org-desc">{org.description}</p>
                {org.country && (
                  <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '0.75rem', fontFamily: 'var(--font-sans)' }}>
                    <i className="fa-solid fa-location-dot" style={{ color: 'var(--color-primary)' }}></i> {org.country}
                  </p>
                )}
                {org.website && (
                  <a href={org.website} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '1rem', fontFamily: 'var(--font-sans)', fontSize: '0.78rem', fontWeight: '600', color: 'var(--color-primary)', textDecoration: 'none' }}>
                    Visit Website <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partnership CTA ── */}
      <section style={{ background: 'var(--color-bg-alt)', padding: '5rem 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span className="section-tag"><i className="fa-solid fa-plus-circle"></i> Partner With Us</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-navy)', margin: '0.5rem 0 1.25rem 0' }}>
                Become an Institutional Partner
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '1.5rem', fontFamily: 'var(--font-sans)' }}>
                We actively seek partnerships with universities, international organisations, embassies, NGOs, and private sector companies that share our values and can create pathways for EGG alumni.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.8', fontFamily: 'var(--font-sans)' }}>
                Partnerships may include scholarship sponsorships, co-hosted events, mentorship programmes, research collaborations, or employment pipelines.
              </p>
              {onNavigate && (
                <button
                  className="btn btn-primary"
                  style={{ marginTop: '2rem' }}
                  onClick={() => onNavigate('contact')}
                >
                  <i className="fa-solid fa-handshake"></i> Inquire About Partnership
                </button>
              )}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: 'fa-graduation-cap', title: 'Scholarship Sponsors',    desc: 'Fund study-abroad scholarships or fellowship programmes for qualifying alumni.' },
                { icon: 'fa-chalkboard',    title: 'University Partners',     desc: 'Offer admission pathways, conditional acceptance, or alumni mentoring programmes.' },
                { icon: 'fa-building',      title: 'Corporate Partners',      desc: 'Provide internships, graduate roles, or professional development opportunities.' },
                { icon: 'fa-globe',         title: 'International Bodies',    desc: 'Collaborate on community development, civic engagement, or youth leadership initiatives.' },
              ].map((item) => (
                <div key={item.title} style={{ display: 'flex', gap: '1rem', padding: '1.25rem', background: '#fff', border: '1px solid var(--color-border)' }}>
                  <div style={{ width: '40px', height: '40px', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={`fa-solid ${item.icon}`} style={{ color: '#fff', fontSize: '0.95rem' }}></i>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '0.95rem', color: 'var(--color-navy)', marginBottom: '0.25rem' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: '1.6', fontFamily: 'var(--font-sans)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
