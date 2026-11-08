import leadershipData from '../data/leadership.json'

export default function LeadershipSection({ onNavigate }) {
  return (
    <div style={{ minHeight: '100vh' }}>

      {/* ── Page Hero Banner ── */}
      <div style={{ background: 'var(--color-navy)', padding: '4rem 0 3rem 0', borderBottom: '3px solid var(--color-primary)' }}>
        <div className="container">
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', display: 'block', marginBottom: '0.75rem' }}>
            <i className="fa-solid fa-user-tie"></i>&nbsp; Executive Committee
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff', fontWeight: '700', marginBottom: '0.75rem' }}>
            Current Leading Members
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '1rem', maxWidth: '580px', fontFamily: 'var(--font-sans)', lineHeight: '1.75' }}>
            Meet the dedicated alumni who guide the EggAlumni Network — shaping partnerships, overseeing scholarships, and driving the mission forward.
          </p>
        </div>
      </div>

      {/* ── Leadership Grid ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag"><i className="fa-solid fa-people-group"></i> The Team</span>
            <h2 className="section-title">Executive Board</h2>
            <p className="section-subtitle">-</p>
          </div>

          <div className="leadership-grid">
            {leadershipData.map((leader) => (
              <div key={leader.id} className="leader-card">
                {leader.avatar ? (
                  <img src={leader.avatar} alt={leader.name} className="leader-avatar" />
                ) : (
                  <div className="leader-avatar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-bg-alt)', color: 'var(--color-primary)', fontSize: '2rem' }}>
                    <i className="fa-solid fa-user"></i>
                  </div>
                )}
                <h3 className="leader-name">{leader.name}</h3>
                <p className="leader-role">{leader.role}</p>
                <p className="leader-batch"><i className="fa-solid fa-graduation-cap"></i> {leader.classYear}</p>
                <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: '1.65', margin: '0.75rem 0', fontFamily: 'var(--font-sans)' }}>{leader.bio || '-'}</p>
                <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid var(--color-border)' }}>
                  {leader.linkedin && (
                    <a href={leader.linkedin} target="_blank" rel="noopener noreferrer"
                      style={{ width: '32px', height: '32px', background: 'var(--color-bg-alt)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', fontSize: '0.85rem', textDecoration: 'none', transition: 'all 0.15s' }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.color = '#fff' }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--color-bg-alt)'; e.currentTarget.style.color = 'var(--color-primary)' }}>
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  )}
                  {leader.email && (
                    <a href={`mailto:${leader.email}`}
                      style={{ width: '32px', height: '32px', background: 'var(--color-bg-alt)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', fontSize: '0.85rem', textDecoration: 'none', transition: 'all 0.15s' }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.color = '#fff' }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--color-bg-alt)'; e.currentTarget.style.color = 'var(--color-primary)' }}>
                      <i className="fa-solid fa-envelope"></i>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Board Elections Info ── */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <span className="section-tag"><i className="fa-solid fa-rotate"></i> Elections</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--color-navy)', margin: '0.5rem 0 1.25rem 0' }}>
                Board Elections Held Annually
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '1.5rem', fontFamily: 'var(--font-sans)' }}>
                -
              </p>
              <button className="btn btn-primary" style={{ marginTop: '2rem' }} onClick={() => onNavigate('contact')}>
                <i className="fa-solid fa-paper-plane"></i> Contact the Board
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { step: '01', title: 'Nomination Period',   desc: '-' },
                { step: '02', title: 'Candidate Profiles',  desc: '-' },
                { step: '03', title: 'Online Voting',       desc: '-' },
                { step: '04', title: 'Inauguration',        desc: '-' },
              ].map((s) => (
                <div key={s.step} style={{ display: 'flex', gap: '1.25rem', padding: '1.25rem', background: '#fff', border: '1px solid var(--color-border)' }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: '700', color: 'var(--color-border)', lineHeight: '1', flexShrink: 0, minWidth: '2.5rem' }}>{s.step}</div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '0.95rem', color: 'var(--color-navy)', marginBottom: '0.3rem' }}>{s.title}</h4>
                    <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: '1.65', fontFamily: 'var(--font-sans)' }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Governance Principles ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag"><i className="fa-solid fa-shield-halved"></i> Governance</span>
            <h2 className="section-title">Principles of Good Governance</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem' }}>
            {[
              { icon: 'fa-eye',           title: 'Transparency',   desc: '-' },
              { icon: 'fa-gavel',         title: 'Accountability', desc: '-' },
              { icon: 'fa-users-between-lines', title: 'Inclusivity', desc: '-' },
              { icon: 'fa-arrows-rotate', title: 'Continuity',     desc: '-' },
            ].map((g) => (
              <div key={g.title} style={{ textAlign: 'center', padding: '2rem 1.5rem', background: 'var(--color-bg-alt)', border: '1px solid var(--color-border)' }}>
                <i className={`fa-solid ${g.icon}`} style={{ color: 'var(--color-primary)', fontSize: '1.75rem', display: 'block', marginBottom: '1rem' }}></i>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>{g.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: '1.65', fontFamily: 'var(--font-sans)' }}>{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
