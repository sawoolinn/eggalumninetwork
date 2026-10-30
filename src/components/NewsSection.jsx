import { useState, useMemo } from 'react'
import newsData from '../data/news.json'

const ITEMS_PER_PAGE = 6
const CATEGORIES = ['All', 'Scholarships Abroad', 'Alumni Achievements', "TOUNGE LA' YAT COMMUNITY COLLEGE"]
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

  const reset = (setter) => (value) => { setter(value); setPage(1) }

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>

      {/* ── Page Hero Banner ── */}
      <div style={{ background: 'var(--color-navy)', padding: '4rem 0 3rem 0', borderBottom: '3px solid var(--color-primary)' }}>
        <div className="container">
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', display: 'block', marginBottom: '0.75rem' }}>
            <i className="fa-solid fa-newspaper"></i>&nbsp; News &amp; Announcements
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff', fontWeight: '700', marginBottom: '0.75rem' }}>
            Abroad Scholarships &amp; Alumni Stories
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '1rem', maxWidth: '580px', fontFamily: 'var(--font-sans)', lineHeight: '1.75' }}>
            Stay informed with the latest scholarship victories, research awards, and campus highlights from alumni around the world.
          </p>
        </div>
      </div>

      {/* ── Content ── */}
      <section className="section">
        <div className="container">

          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '0', borderBottom: '2px solid var(--color-border)', marginBottom: '2rem', overflowX: 'auto' }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => reset(setCategory)(cat)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: '600',
                  padding: '0.8rem 1.25rem', whiteSpace: 'nowrap',
                  color: category === cat ? 'var(--color-navy)' : 'var(--color-text-muted)',
                  borderBottom: category === cat ? '3px solid var(--color-navy)' : '3px solid transparent',
                  marginBottom: '-2px', letterSpacing: '0.02em',
                  transition: 'all 0.15s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Archive Row */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.75rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid var(--color-border)', padding: '0.55rem 0.9rem', flex: '1', minWidth: '200px', background: '#fff' }}>
              <i className="fa-solid fa-search" style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}></i>
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => reset(setSearch)(e.target.value)}
                style={{ border: 'none', outline: 'none', fontFamily: 'var(--font-sans)', fontSize: '0.875rem', width: '100%', color: 'var(--color-text-main)' }}
              />
            </div>
            <select value={year} onChange={(e) => reset(setYear)(e.target.value)}
              style={{ border: '1px solid var(--color-border)', padding: '0.55rem 0.9rem', fontFamily: 'var(--font-sans)', fontSize: '0.875rem', outline: 'none', borderRadius: 0, background: '#fff', color: 'var(--color-text-main)' }}>
              {YEARS.map((y) => <option key={y}>{y}</option>)}
            </select>
            <select value={month} onChange={(e) => reset(setMonth)(e.target.value)}
              style={{ border: '1px solid var(--color-border)', padding: '0.55rem 0.9rem', fontFamily: 'var(--font-sans)', fontSize: '0.875rem', outline: 'none', borderRadius: 0, background: '#fff', color: 'var(--color-text-main)' }}>
              {MONTHS.map((m) => <option key={m}>{m}</option>)}
            </select>
          </div>

          {/* Result count */}
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '2rem', fontFamily: 'var(--font-sans)', borderLeft: '3px solid var(--color-primary)', paddingLeft: '0.75rem' }}>
            Showing <strong style={{ color: 'var(--color-navy)' }}>{filtered.length}</strong> article{filtered.length !== 1 ? 's' : ''}
          </p>

          {/* News Grid */}
          {paged.length === 0 ? (
            <div className="empty-state">
              <i className="fa-solid fa-folder-open"></i>
              <p>No articles found for the selected filters.</p>
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
                      <span className="news-date"><i className="fa-regular fa-calendar"></i> {item.date}</span>
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
            <div className="pagination-bar" style={{ marginTop: '3rem' }}>
              <button className="page-btn" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button key={n} className={`page-btn ${page === n ? 'active' : ''}`} onClick={() => setPage(n)}>{n}</button>
              ))}
              <button className="page-btn" onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          )}

        </div>
      </section>
    </div>
  )
}
