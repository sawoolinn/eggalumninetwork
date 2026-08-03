import historyData from '../data/history.json'

export default function HistorySection() {
  const { about, timeline } = historyData

  return (
    <div style={{ minHeight: '100vh' }}>

      {/* ── About & Mission Dark Strip ────── */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }}>

            <div>
              <span className="section-tag">
                <i className="fa-solid fa-landmark"></i> History & About
              </span>
              <h2 className="section-title" style={{ color: '#fff', marginTop: '0.5rem', fontSize: '2.3rem' }}>
                {about.title}
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                {about.story}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{
                background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 'var(--radius-md)', padding: '1.8rem', borderLeft: '4px solid #FCD34D',
              }}>
                <h4 style={{ color: '#FCD34D', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                  <i className="fa-solid fa-bullseye"></i> Our Mission
                </h4>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                  {about.mission}
                </p>
              </div>

              <div style={{
                background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 'var(--radius-md)', padding: '1.8rem', borderLeft: '4px solid #86EFAC',
              }}>
                <h4 style={{ color: '#86EFAC', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                  <i className="fa-solid fa-eye"></i> Our Vision
                </h4>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                  {about.vision}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Timeline ──────────────────────── */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <i className="fa-solid fa-timeline"></i> Heritage Timeline
            </span>
            <h2 className="section-title">Our Journey Through the Years</h2>
            <p className="section-subtitle">
              A chronicle of milestones that have shaped the EggAlumni Network into a world-class alumni community.
            </p>
          </div>

          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={item.year} className={`timeline-item ${index % 2 === 1 ? 'timeline-item-right' : ''}`}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
