import newsData from '../data/news.json'

export default function HomeSection({ onNavigate, onOpenNews }) {
  const latestNews = newsData.slice(0, 3)

  return (
    <>
      {/* ── Hero ── */}
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
              The EGG Alumni Network was established in 2013 as a platform to unite graduates
              of EGG Academy, fostering collaboration and continued development among alumni.
              The network builds on the collective efforts of its members to promote meaningful
              change in their communities.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => onNavigate('news')}>
                Latest News
              </button>
              <button className="btn btn-outline-white" onClick={() => onNavigate('contact')}>
                Contact Us
              </button>
            </div>
          </div>

          <div className="hero-media">
            <img
              src="/assets/logo.jpeg"
              alt="EggAlumni Network Logo"
              className="hero-logo-display"
            />
          </div>

        </div>
      </section>

      {/* ── Latest News ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <i className="fa-solid fa-newspaper"></i> Latest Updates
            </span>
            <h2 className="section-title">Abroad Scholarships &amp; News Spotlights</h2>
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

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button className="btn btn-secondary" onClick={() => onNavigate('news')}>
              View All News
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
