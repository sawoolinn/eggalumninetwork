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

      {/* ── About Us & The Journey (2010 – 2026) ── */}
      <section className="section hv-journey-section">
        <div className="container">
          <div className="hv-journey-grid">
            
            {/* Left: About Us & Founding Roots */}
            <div className="hv-about-narrative">
              <span className="section-tag">
                <i className="fa-solid fa-landmark"></i> About Us &middot; Founding Roots
              </span>
              <h2 className="hv-journey-title">
                Started with a Purpose in 2010, <br />
                <span>Growing Stronger in 2026.</span>
              </h2>
              
              <p className="hv-journey-lead">
                In 2010, a group of forward-thinking educators and grassroots community leaders set out to develop the academy with a profound conviction: that empowering young individuals through rigorous education, mutual accountability, and moral courage could transform entire communities.
              </p>

              <p className="hv-journey-body">
                What began in 2010 as a grassroots educational initiative quickly evolved. By 2013, the graduates founded the official <strong>EGG Alumni Network</strong> to ensure that every graduating cohort could remain connected, mentor junior scholars, and spearhead social development projects.
              </p>

              {/* Harvard-Style Editorial Quote Box */}
              <div className="hv-founder-callout">
                <div className="hv-founder-quote-mark">“</div>
                <blockquote className="hv-founder-quote">
                  We did not merely build classrooms; we cultivated a resilient brotherhood and sisterhood of leaders who carry their community’s future with them wherever they go in the world.
                </blockquote>
                <div className="hv-founder-attribution">
                  <span className="hv-founder-name">Founding Leadership Council</span>
                  <span className="hv-founder-role">EGG Academy Development Initiative &middot; 2010</span>
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <button className="btn btn-secondary" onClick={() => onNavigate('history')}>
                  Read Full History &amp; Milestones <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>

            {/* Right: Journey Milestones Roadmap (2010 to 2026) */}
            <div className="hv-journey-roadmap">
              <div className="hv-roadmap-header">
                <span className="hv-roadmap-eyebrow">CHRONOLOGICAL ROADMAP</span>
                <h3 className="hv-roadmap-headline">Our Evolutionary Path (2010 &ndash; 2026)</h3>
              </div>

              <div className="hv-roadmap-timeline">
                {[
                  {
                    year: '2010',
                    title: 'The Founding & School Development',
                    desc: 'Visionary founders and community leaders initiated the development of EGG Academy, establishing core curricula focused on civic responsibility, academic rigor, and leadership.',
                    tag: 'Genesis & Development'
                  },
                  {
                    year: '2013',
                    title: 'Alumni Network Formalization',
                    desc: 'The graduating alumni united to establish the official EGG Alumni Network, instituting democratic governance and mutual mentorship frameworks.',
                    tag: 'Official Charter'
                  },
                  {
                    year: '2018',
                    title: 'Abroad Scholarship Guild & Global Reach',
                    desc: 'Expanded overseas university guidance, supporting students to secure study-abroad scholarships across Europe, Asia, and North America.',
                    tag: 'Global Fellowship'
                  },
                  {
                    year: '2022',
                    title: 'Community Capacity & Microcredit Programs',
                    desc: 'Pioneered microcredit support for local economies, environmental awareness campaigns, and youth-led community development initiatives.',
                    tag: 'Civic Impact'
                  },
                  {
                    year: '2026',
                    title: 'Global Innovation & 400+ Alumni Milestone',
                    desc: 'A thriving international fellowship of 400+ graduates active across 30+ nations, advancing research fellowships, institutional partnerships, and continuous alumni mentorship.',
                    tag: '2026 & Beyond'
                  }
                ].map((item, idx) => (
                  <div key={item.year} className="hv-roadmap-item">
                    <div className="hv-roadmap-node">
                      <span className="hv-roadmap-year">{item.year}</span>
                      <div className="hv-roadmap-point"></div>
                      {idx < 4 && <div className="hv-roadmap-line"></div>}
                    </div>
                    <div className="hv-roadmap-card">
                      <div className="hv-roadmap-badge">{item.tag}</div>
                      <h4 className="hv-roadmap-title">{item.title}</h4>
                      <p className="hv-roadmap-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── Harvard-Style Immersive Event Banner (Left-Aligned Text on Picture) ── */}
          <div className="hv-event-hero-banner">
            <div className="hv-event-hero-overlay">
              <div className="hv-event-hero-content">
                <span className="hv-event-hero-eyebrow">
                  <i className="fa-solid fa-calendar-check"></i> Latest Event Spotlight &middot; Tounge La&apos; Yat Community College
                </span>

                <h3 className="hv-event-hero-title">
                  Art Exhibition &amp; Youth Gathering
                </h3>

                <p className="hv-event-hero-desc">
                  Continuing the foundational vision established in 2010, students, educators, and alumni leaders recently gathered in the main assembly hall to celebrate creative expression, showcase student artwork, and open pathways for future higher education.
                </p>

                <button
                  className="hv-event-hero-cta"
                  onClick={() => onNavigate('events')}
                >
                  <span className="hv-event-hero-circle">
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                  <span className="hv-event-hero-cta-label">
                    Learn more about our community gatherings &amp; sessions
                  </span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

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
