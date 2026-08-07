import newsData from '../data/news.json'
import eventsData from '../data/events.json'
import historyData from '../data/history.json'

export default function HomeSection({ onNavigate, onOpenNews, onOpenEvent }) {
  const latestNews = newsData.slice(0, 3)
  const upcomingEvents = eventsData.filter((e) => e.status === 'Upcoming').slice(0, 2)

  return (
    <>
      {/* ── Hero ─────────────────────────────── */}
      <section className="hero">
        <div className="container hero-grid">

          <div className="hero-content">
            <div className="hero-badge">
              <i className="fa-solid fa-graduation-cap"></i> Official EGG Alumni Network
            </div>
            <h1 className="hero-title">
              Connecting Generations,{' '}
              <span>Empowering Futures.</span>
            </h1>
            <p className="hero-lead">
              The EGG Alumni Network was established in 2013 as a platform to unite graduates of EGG Academy, fostering collaboration and continued development among alumni. The network builds on the collective efforts of its members to promote meaningful change in their communities.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => onNavigate('news')}>
                Update News
              </button>
              <button className="btn btn-outline-white" onClick={() => onNavigate('events')}>
                <i className="fa-solid fa-calendar-check"></i> View Events
              </button>
            </div>
          </div>

          <div className="hero-media">
            {/* <div className="hero-card-glass"> */}
              <img
                src="/assets/logo.jpeg"
                alt="EggAlumni Network emblem logo on a clean background, displaying the alumni organization name and formal academic crest in a proud, welcoming tone"
                className="hero-logo-display"
              />
              {/* <h3 className="hero-card-title">EGG ALUMNI NETWORK</h3>
              <p className="hero-card-desc">
                Fostering excellence, global fellowship, and academic legacy worldwide.
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <span className="section-tag" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: 'none' }}>
                  <i className="fa-solid fa-award"></i> 180+ Scholarships
                </span>
                <span className="section-tag" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: 'none' }}>
                  <i className="fa-solid fa-earth-americas"></i> 30+ Nations
                </span>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────── */}
      {/* <div className="container">
        <div className="stats-bar">
          <div className="stats-grid">
            {historyData.stats.map((stat) => (
              <div key={stat.label} className="stat-item">
                <div className="stat-number">
                  <i className={`fa-solid ${stat.icon}`}></i> {stat.value}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* ── Latest News ──────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <i className="fa-solid fa-newspaper"></i> Latest Updates
            </span>
            <h2 className="section-title">Abroad Scholarships & News Spotlights</h2>
            {/* <p className="section-subtitle">
              Read about our alumni achievements abroad, research fellowships, and campus announcements.
            </p> */}
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
                    <span className="news-date">
                      <i className="fa-regular fa-calendar"></i> {item.date}
                    </span>
                    <button className="read-btn" onClick={() => onOpenNews(item)}>
                      Read Story <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button className="btn btn-secondary" onClick={() => onNavigate('news')}>
              View All News <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* ── Upcoming Events Preview ───────────── */}
      {/* <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <i className="fa-solid fa-comments"></i> Sharing Sessions
            </span>
            <h2 className="section-title">Upcoming Webinars & Fireside Chats</h2>
            <p className="section-subtitle">
              Learn directly from senior alumni studying and working in London, Tokyo, San Francisco, and beyond.
            </p>
          </div>

          <div className="events-grid">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="event-card">
                <span className="event-date-badge">
                  <i className="fa-regular fa-calendar"></i> {event.date} | {event.time}
                </span>
                <h3 className="event-title">{event.title}</h3>
                <p className="news-summary">{event.summary}</p>

                <div className="event-speaker-box">
                  <img src={event.speaker.avatar} alt={event.speaker.name} className="speaker-avatar" />
                  <div className="speaker-info">
                    <h5>{event.speaker.name}</h5>
                    <p>{event.speaker.role}</p>
                  </div>
                </div>

                <button
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: 'auto' }}
                  onClick={() => onOpenEvent(event)}
                >
                  <i className="fa-solid fa-ticket"></i> View Session Agenda
                </button>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button className="btn btn-secondary" onClick={() => onNavigate('events')}>
              Browse All Sharing Sessions & Past Recordings <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section> */}
    </>
  )
}
