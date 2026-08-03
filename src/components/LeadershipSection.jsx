import leadershipData from '../data/leadership.json'

export default function LeadershipSection({ onNavigate }) {
  return (
    <section className="section" style={{ minHeight: '100vh' }}>
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <i className="fa-solid fa-user-tie"></i> Executive Committee
          </span>
          <h2 className="section-title">Current Leading Members</h2>
          <p className="section-subtitle">
            Meet the dedicated alumni who guide the EggAlumni Network — shaping partnerships,
            overseeing scholarships, and driving the mission forward.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="leadership-grid">
          {leadershipData.map((leader) => (
            <div key={leader.id} className="leader-card">
              <img src={leader.avatar} alt={leader.name} className="leader-avatar" />
              <h3 className="leader-name">{leader.name}</h3>
              <p className="leader-role">{leader.role}</p>
              <p className="leader-year">
                <i className="fa-solid fa-graduation-cap"></i> {leader.classYear}
              </p>
              <p className="leader-bio">{leader.bio}</p>
              <div className="leader-socials">
                <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href={`mailto:${leader.email}`} title="Send Email">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Board Election Note */}
        <div style={{
          marginTop: '3.5rem',
          background: 'linear-gradient(135deg, var(--color-bg-alt) 0%, #EFF6FF 100%)',
          border: '1px solid var(--color-border-primary)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.2rem 2.5rem',
          textAlign: 'center',
        }}>
          <i className="fa-solid fa-rotate" style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '0.8rem', display: 'block' }}></i>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.6rem' }}>Board Elections Held Annually</h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto 1.2rem auto' }}>
            The EggAlumni executive committee is democratically elected each year by registered alumni members.
            All leadership terms are two years, renewable once.
          </p>
          <button className="btn btn-secondary" onClick={() => onNavigate('contact')}>
            <i className="fa-solid fa-paper-plane"></i> Contact the Board
          </button>
        </div>

      </div>
    </section>
  )
}
