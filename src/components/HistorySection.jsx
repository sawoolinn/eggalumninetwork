import historyData from '../data/history.json'

export default function HistorySection({ onNavigate }) {
  const { about, timeline, stats } = historyData

  const missionList = Array.isArray(about.mission) ? about.mission : [about.mission]

  return (
    <div style={{ minHeight: '100vh' }}>

      {/* ── Page Hero Banner ── */}
      <div style={{ background: 'var(--color-navy)', padding: '4rem 0 3rem 0', borderBottom: '3px solid var(--color-primary)' }}>
        <div className="container">
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', display: 'block', marginBottom: '0.75rem' }}>
            <i className="fa-solid fa-landmark"></i>&nbsp; History &amp; About
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff', fontWeight: '700', marginBottom: '0.75rem' }}>
            Our Story &amp; Mission
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '1rem', maxWidth: '580px', fontFamily: 'var(--font-sans)', lineHeight: '1.75' }}>
            From a school founding in 1991 to a global alumni network spanning 30+ countries — discover the journey of EGG Alumni Network.
          </p>
        </div>
      </div>

      {/* ── About & Story ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
            <div>
              <span className="section-tag"><i className="fa-solid fa-book-open"></i> Our Story</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-navy)', margin: '0.5rem 0 1.25rem 0', lineHeight: '1.25' }}>
                {about.title || 'Building a Legacy of Excellence'}
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '1.5rem', fontFamily: 'var(--font-sans)' }}>
                {about.story}
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.8', fontFamily: 'var(--font-sans)' }}>
                Over more than two decades, the network has grown from a small circle of graduates into a dynamic global community with representation across Asia, Europe, North America, and beyond. Every chapter carries forward the founding spirit of mutual respect, shared responsibility, and community uplift.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Vision */}
              <div style={{ background: 'var(--color-bg-alt)', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-primary)', padding: '1.75rem' }}>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
                  <i className="fa-solid fa-eye"></i>&nbsp; Our Vision
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-main)', lineHeight: '1.75', fontFamily: 'var(--font-sans)', fontStyle: 'italic' }}>
                  "{about.vision}"
                </p>
              </div>

              {/* Mission */}
              <div style={{ background: 'var(--color-navy)', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-accent-gold)', padding: '1.75rem' }}>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-accent-gold)', marginBottom: '1rem' }}>
                  <i className="fa-solid fa-bullseye"></i>&nbsp; Our Mission
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                  {missionList.map((m, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.82)', lineHeight: '1.7', fontFamily: 'var(--font-sans)' }}>
                      <i className="fa-solid fa-circle-check" style={{ color: 'var(--color-accent-gold)', marginTop: '0.2rem', flexShrink: 0 }}></i>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <div style={{ background: 'var(--color-primary)', padding: '3rem 0' }}>
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={stat.label} className="stat-item" style={{ borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.2)' : 'none' }}>
                <i className={`fa-solid ${stat.icon}`} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.5rem', display: 'block', marginBottom: '0.4rem' }}></i>
                <div className="stat-number">{stat.value || '—'}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Timeline ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag"><i className="fa-solid fa-timeline"></i> Milestones</span>
            <h2 className="section-title">Our Journey Through the Years</h2>
            <p className="section-subtitle">Key moments that shaped the EGG Alumni Network into what it is today.</p>
          </div>

          <div className="timeline">
            {timeline.map((item, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-year">{item.year}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values Section ── */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', borderBottom: 'none', paddingBottom: 0 }}>
            <span className="section-tag"><i className="fa-solid fa-star"></i> Core Values</span>
            <h2 className="section-title">What We Stand For</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginTop: '3rem' }}>
            {[
              { icon: 'fa-heart-handshake', title: 'Mutual Respect',     desc: 'We honour every member\'s background, perspective, and journey — regardless of generation or geography.' },
              { icon: 'fa-scale-balanced',  title: 'Accountability',     desc: 'We hold ourselves and our leaders to the highest standards of transparency and responsible stewardship.' },
              { icon: 'fa-seedling',        title: 'Community Growth',   desc: 'Every initiative — from scholarships to fundraisers — is designed to lift communities, not just individuals.' },
              { icon: 'fa-globe',           title: 'Global Perspective', desc: 'With alumni in 30+ countries, we embrace diverse viewpoints as a source of strength and innovation.' },
              { icon: 'fa-lightbulb',       title: 'Innovation',         desc: 'We adapt to the changing world, embracing digital tools and new models of alumni engagement.' },
              { icon: 'fa-handshake',       title: 'Collaboration',      desc: 'Our greatest achievements come not from individuals alone, but from alumni working together.' },
            ].map((v) => (
              <div key={v.title} style={{ background: '#fff', border: '1px solid var(--color-border)', padding: '2rem', transition: 'box-shadow 0.15s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-md)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}>
                <div style={{ width: '44px', height: '44px', background: 'var(--color-bg-alt)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <i className={`fa-solid ${v.icon}`} style={{ color: 'var(--color-primary)', fontSize: '1.1rem' }}></i>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>{v.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: '1.7', fontFamily: 'var(--font-sans)' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey Call to Action ── */}
      <section style={{ background: 'var(--color-navy)', padding: '4.5rem 0', borderTop: '3px solid var(--color-primary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', display: 'block', marginBottom: '0.75rem' }}>
            BECOME PART OF OUR LEGACY
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', color: '#fff', marginBottom: '1rem', fontWeight: '700' }}>
            Continue the Journey with EGG Alumni
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', maxWidth: '540px', margin: '0 auto 2rem auto', fontFamily: 'var(--font-sans)', lineHeight: '1.75' }}>
            Reach out to connect with regional chapters, get involved in student mentorship, or support our scholarship fund.
          </p>
          {onNavigate && (
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={() => onNavigate('contact')}>
                <i className="fa-solid fa-paper-plane"></i> Get in Touch
              </button>
              <button className="btn btn-outline-white" onClick={() => onNavigate('leadership')}>
                <i className="fa-solid fa-users"></i> Meet Executive Board
              </button>
            </div>
          )}
        </div>
      </section>

    </div>
  )
}
