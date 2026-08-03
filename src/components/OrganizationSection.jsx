import orgData from '../data/organizations.json'

const ORG_ICONS = {
  'Mentorship & Education': 'fa-chalkboard-user',
  'Industry Chapter':       'fa-briefcase',
  'Regional Chapter':       'fa-earth-americas',
}

const PARTNER_ICONS = {
  'Educational Alliance':      'fa-graduation-cap',
  'Research & Industry Partner':'fa-flask',
  'Academic Exchange Partner': 'fa-school',
  'Entrepreneurship Partner':  'fa-rocket',
}

export default function OrganizationSection() {
  const { subOrganizations, partnerships } = orgData

  return (
    <section className="section" style={{ minHeight: '100vh' }}>
      <div className="container">

        {/* ── Sub-Organizations ─────────────── */}
        <div className="section-header">
          <span className="section-tag">
            <i className="fa-solid fa-sitemap"></i> Our Network
          </span>
          <h2 className="section-title">Organizations Under EggAlumni Network</h2>
          <p className="section-subtitle">
            From regional international chapters to industry-specific guilds, our network is organized
            into focused communities serving alumni everywhere.
          </p>
        </div>

        <div className="org-grid">
          {subOrganizations.map((org) => (
            <div key={org.id} className="org-card">
              <div className="org-header">
                <div className="org-icon-wrapper">
                  <i className={`fa-solid ${ORG_ICONS[org.category] || 'fa-users-rectangle'}`}></i>
                </div>
                <span className="org-badge">{org.badge}</span>
              </div>
              <h3 className="org-title">{org.name}</h3>
              <p className="org-lead">
                <i className="fa-solid fa-crown" style={{ fontSize: '0.75rem' }}></i> Led by {org.lead}
              </p>
              <p style={{ fontSize: '0.82rem', color: 'var(--color-primary)', marginBottom: '0.8rem', fontWeight: '600' }}>
                <i className="fa-solid fa-users"></i> {org.members}
              </p>
              <p className="org-desc">{org.description}</p>
            </div>
          ))}
        </div>

        {/* ── Divider ───────────────────────── */}
        <div style={{ margin: '4.5rem 0', borderTop: '2px solid var(--color-border)', position: 'relative' }}>
          <span style={{
            position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
            background: 'var(--color-bg-light)', padding: '0 1.5rem',
            color: 'var(--color-text-muted)', fontSize: '0.85rem', fontWeight: '600',
            textTransform: 'uppercase', letterSpacing: '0.08em',
          }}>
            <i className="fa-solid fa-handshake"></i> Official Partnerships
          </span>
        </div>

        {/* ── Partnerships ──────────────────── */}
        <div className="section-header">
          <span className="section-tag">
            <i className="fa-solid fa-handshake"></i> Partnerships
          </span>
          <h2 className="section-title">Institutional & Industry Partners</h2>
          <p className="section-subtitle">
            We collaborate with world-class academic institutions, research labs, and industry
            accelerators to create real opportunities for our alumni.
          </p>
        </div>

        <div className="org-grid">
          {partnerships.map((partner) => (
            <div key={partner.id} className="org-card" style={{ borderTop: '3px solid var(--color-primary)' }}>
              <div className="org-header" style={{ marginBottom: '1.2rem' }}>
                <div className="org-icon-wrapper">
                  <i className={`fa-solid ${PARTNER_ICONS[partner.type] || 'fa-handshake'}`}></i>
                </div>
                <span className="org-badge" style={{ background: '#DBEAFE', color: '#1E40AF' }}>
                  {partner.type}
                </span>
              </div>
              <h3 className="org-title">{partner.name}</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginBottom: '0.75rem' }}>
                <i className="fa-solid fa-location-dot"></i> {partner.region}
              </p>
              <div style={{
                background: 'var(--color-bg-alt)', borderRadius: 'var(--radius-md)',
                padding: '0.9rem 1rem', borderLeft: '3px solid var(--color-primary)',
              }}>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                  &ldquo;{partner.impact}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
