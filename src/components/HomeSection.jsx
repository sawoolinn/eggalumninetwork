import newsData from '../data/news.json'
import eventsData from '../data/events.json'
import historyData from '../data/history.json'
import leadershipData from '../data/leadership.json'

export default function HomeSection({ onNavigate, onOpenNews, onOpenEvent }) {
  const latestNews = newsData.slice(0, 3)
  const upcomingEvents = eventsData.filter((e) => e.status === 'Upcoming').slice(0, 2)
  const { stats } = historyData
  const featuredLeaders = leadershipData.slice(0, 3)

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <i className="fa-solid fa-graduation-cap"></i> Official EGG Alumni Network · Est. 2002
            </div>
            <h1 className="hero-title">
              Connecting Generations,{' '}
              <span>Empowering Futures.</span>
            </h1>
            <p className="hero-lead">
              The EGG Alumni Network was established as a platform to unite graduates of EGG Academy,
              fostering collaboration and continued development among alumni. We build on the collective
              efforts of our members to promote meaningful change in their communities.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => onNavigate('news')}>
                <i className="fa-solid fa-newspaper"></i> Latest News
              </button>
              <button className="btn btn-outline-white" onClick={() => onNavigate('history')}>
                <i className="fa-solid fa-landmark"></i> Our Story
              </button>
            </div>
          </div>
          <div className="hero-media">
            <img src="/assets/logo.jpeg" alt="EggAlumni Network Logo" className="hero-logo-display" />
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <div style={{ background: 'var(--color-primary)', padding: '2.5rem 0' }}>
        <div className="container">
          <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
            {stats.map((stat) => (
              <div key={stat.label} className="stat-item" style={{ borderRight: '1px solid rgba(255,255,255,0.2)' }}>
                <div className="stat-number" style={{ fontSize: '2.2rem' }}>
                  <i className={`fa-solid ${stat.icon}`} style={{ fontSize: '1.3rem', display: 'block', marginBottom: '0.3rem', opacity: 0.8 }}></i>
                  {stat.value || '—'}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Mission Strip ── */}
      <section style={{ background: 'var(--color-bg-alt)', padding: '4rem 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
            {[
              { icon: 'fa-handshake', title: 'Community', desc: 'Building bridges between alumni across generations, professions, and continents.' },
              { icon: 'fa-graduation-cap', title: 'Scholarship', desc: 'Guiding members toward internationally recognised study-abroad and fellowship opportunities.' },
              { icon: 'fa-earth-asia', title: 'Impact', desc: 'Driving community development through fundraising, mentorship, and grassroots initiatives.' },
            ].map((v) => (
              <div key={v.title} style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{
                  width: '56px', height: '56px', borderRadius: '50%',
                  background: 'var(--color-primary)', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', margin: '0 auto 1.2rem auto',
                }}>
                  <i className={`fa-solid ${v.icon}`} style={{ color: '#fff', fontSize: '1.3rem' }}></i>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--color-navy)', marginBottom: '0.6rem' }}>{v.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.7' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Latest News ── */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="section-tag"><i className="fa-solid fa-newspaper"></i> Latest Updates</span>
              <h2 className="section-title">Abroad Scholarships &amp; News Spotlights</h2>
            </div>
            <button className="btn btn-secondary" onClick={() => onNavigate('news')} style={{ marginBottom: '1.25rem' }}>
              View All News
            </button>
          </div>
          <div className="news-grid">
            {latestNews.map((item) => (
              <div key={item.id} className="news-card">
                <img src={item.image} alt={item.title} className="news-thumb" />
                <div className="news-body">
                  <div className="news-meta">
                    <span className="news-category-badge">{item.category}</span>
                    <span className="news-date">{item.readTime}</span>
                  </div>
                  <h3 className="news-card-title">{item.title}</h3>
                  <p className="news-summary">{item.summary}</p>
                  <div className="news-footer">
                    <span className="news-date"><i className="fa-regular fa-calendar"></i> {item.date}</span>
                    <button className="read-btn" onClick={() => onOpenNews(item)}>
                      Read Story <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Upcoming Events ── */}
      {upcomingEvents.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <div className="section-header" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span className="section-tag"><i className="fa-solid fa-calendar-check"></i> Coming Up</span>
                <h2 className="section-title">Upcoming Events &amp; Sharing Sessions</h2>
              </div>
              <button className="btn btn-secondary" onClick={() => onNavigate('events')} style={{ marginBottom: '1.25rem' }}>
                All Events
              </button>
            </div>
            <div className="events-grid">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="event-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="event-date-badge"><i className="fa-regular fa-calendar"></i> {event.date}</span>
                    <span style={{ fontSize: '0.72rem', fontWeight: '700', padding: '0.2rem 0.6rem', background: '#DCFCE7', color: '#15803D', fontFamily: 'var(--font-sans)' }}>● Upcoming</span>
                  </div>
                  <h3 className="event-title">{event.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)' }}>{event.summary}</p>
                  <div className="event-speaker-box">
                    <img src={event.speaker.avatar} alt={event.speaker.name} className="speaker-avatar" />
                    <div className="speaker-info">
                      <h5>{event.speaker.name}</h5>
                      <p>{event.speaker.role}</p>
                    </div>
                  </div>
                  <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => onOpenEvent(event)}>
                    <i className="fa-solid fa-ticket"></i> View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Featured Leadership ── */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="section-tag"><i className="fa-solid fa-user-tie"></i> Who Leads Us</span>
              <h2 className="section-title">Current Executive Committee</h2>
            </div>
            <button className="btn btn-secondary" onClick={() => onNavigate('leadership')} style={{ marginBottom: '1.25rem' }}>
              Full Committee
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.75rem' }}>
            {featuredLeaders.map((leader) => (
              <div key={leader.id} className="leader-card">
                <img src={leader.avatar} alt={leader.name} className="leader-avatar" />
                <h3 className="leader-name">{leader.name}</h3>
                <p className="leader-role">{leader.role}</p>
                <p className="leader-batch"><i className="fa-solid fa-graduation-cap"></i> {leader.classYear}</p>
                <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: '0.6rem', lineHeight: '1.6', fontFamily: 'var(--font-sans)' }}>{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ background: 'var(--color-navy)', padding: '5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', display: 'block', marginBottom: '1rem' }}>
            GET IN TOUCH
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem,4vw,3rem)', color: '#fff', marginBottom: '1.2rem', fontWeight: '700' }}>
            Ready to Connect with<br />the EGG Alumni Community?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', maxWidth: '520px', margin: '0 auto 2.5rem auto', fontFamily: 'var(--font-sans)', lineHeight: '1.75' }}>
            Whether you are a recent graduate or a long-standing member, we welcome you to engage, contribute, and grow with us.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => onNavigate('contact')}>
              <i className="fa-solid fa-paper-plane"></i> Contact Us
            </button>
            <button className="btn btn-outline-white" onClick={() => onNavigate('history')}>
              <i className="fa-solid fa-book-open"></i> Learn Our Story
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
