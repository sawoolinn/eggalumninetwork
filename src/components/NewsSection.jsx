import { useState, useMemo } from 'react'
import newsData from '../data/news.json'

const ITEMS_PER_PAGE = 6
const CATEGORIES = ['All', 'Scholarships Abroad','Alumni Achievements', "TOUNGE LA' YAT COMMUNITY COLLEGE"]
const YEARS = ['All Years', '2026', '2025']
const MONTHS = [
  'All Months', 'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
]

export default function NewsSection({ onOpenNews }) {
  const [category, setCategory] = useState('All')
  const [year, setYear]         = useState('All Years')
  const [month, setMonth]       = useState('All Months')
  const [search, setSearch]     = useState('')
  const [page, setPage]         = useState(1)

  // Derived filtered list — recalculates only when filters change
  const filtered = useMemo(() => {
    return newsData.filter((item) => {
      const matchCat    = category === 'All' || item.category === category
      const matchYear   = year === 'All Years' || item.year === year
      const matchMonth  = month === 'All Months' || item.month === month
      const matchSearch = !search || item.title.toLowerCase().includes(search.toLowerCase())
                        || item.summary.toLowerCase().includes(search.toLowerCase())
      return matchCat && matchYear && matchMonth && matchSearch
    })
  }, [category, year, month, search])

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const paged      = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)

  const handleFilter = (setter) => (value) => {
    setter(value)
    setPage(1)
  }

  return (
    <section className="section section-alt" style={{ minHeight: '100vh' }}>
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <i className="fa-solid fa-newspaper"></i> News & Announcements
          </span>
          <h2 className="section-title">Abroad Scholarships & Alumni Stories</h2>
          {/* <p className="section-subtitle">
            Stay informed with the latest scholarship victories, research awards, and campus highlights from alumni around the world.
          </p> */}
        </div>

        {/* Filters Bar */}
        <div className="filters-bar">
          <div className="category-tabs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`cat-btn ${category === cat ? 'active' : ''}`}
                onClick={() => handleFilter(setCategory)(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="search-archive-group">
            <div className="search-box">
              <i className="fa-solid fa-search"></i>
              <input
                type="text"
                placeholder="Search news..."
                value={search}
                onChange={(e) => handleFilter(setSearch)(e.target.value)}
              />
            </div>
            <select
              className="archive-select"
              value={year}
              onChange={(e) => handleFilter(setYear)(e.target.value)}
            >
              {YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
            </select>
            <select
              className="archive-select"
              value={month}
              onChange={(e) => handleFilter(setMonth)(e.target.value)}
            >
              {MONTHS.map((m) => <option key={m} value={m}>{m}</option>)}
            </select>
          </div>
        </div>

        {/* Result count */}
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
          Showing <strong>{filtered.length}</strong> article{filtered.length !== 1 ? 's' : ''}
        </p>

        {/* News Grid */}
        {paged.length === 0 ? (
          <div className="empty-state">
            <i className="fa-solid fa-folder-open"></i>
            <p>No news articles found for the selected filters.</p>
          </div>
        ) : (
          <div className="news-grid">
            {paged.map((item) => (
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
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination-bar" style={{ marginTop: '2.5rem' }}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                className={`page-btn ${p === page ? 'active' : ''}`}
                onClick={() => { setPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              >
                {p}
              </button>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
