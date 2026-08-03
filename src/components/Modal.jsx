import { useEffect } from 'react'

export default function Modal({ modal, onClose }) {
  const { type, data } = modal

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="modal-overlay active"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="modal-box">
        <button className="modal-close-btn" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>

        {type === 'news' && <NewsModalContent data={data} />}
        {type === 'event' && <EventModalContent data={data} />}
      </div>
    </div>
  )
}

function NewsModalContent({ data }) {
  return (
    <>
      <img
        src={data.image}
        alt={data.title}
        style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem' }}
      />
      <span className="news-category-badge">{data.category}</span>
      <h2 style={{ fontSize: '1.6rem', margin: '0.8rem 0 0.5rem' }}>{data.title}</h2>
      <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <span><i className="fa-regular fa-calendar"></i> {data.date}</span>
        <span><i className="fa-regular fa-user"></i> {data.author}</span>
        <span><i className="fa-regular fa-clock"></i> {data.readTime}</span>
      </div>
      <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', marginBottom: '1.5rem' }} />
      <div
        style={{ fontSize: '1rem', lineHeight: '1.9', color: 'var(--color-text-main)' }}
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </>
  )
}

function EventModalContent({ data }) {
  return (
    <>
      <span className="event-date-badge" style={{ marginBottom: '1rem' }}>
        <i className="fa-regular fa-calendar"></i> {data.date} | {data.time}
      </span>
      <h2 style={{ fontSize: '1.5rem', margin: '0.8rem 0 0.5rem', lineHeight: '1.3' }}>{data.title}</h2>
      <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', marginBottom: '1.2rem' }}>
        <i className="fa-solid fa-location-dot"></i> {data.location}
      </p>
      <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', marginBottom: '1.5rem' }} />

      <div className="event-speaker-box" style={{ marginBottom: '1.5rem' }}>
        <img src={data.speaker.avatar} alt={data.speaker.name} className="speaker-avatar" style={{ width: '60px', height: '60px' }} />
        <div className="speaker-info">
          <h5 style={{ fontSize: '1rem' }}>{data.speaker.name}</h5>
          <p>{data.speaker.role}</p>
        </div>
      </div>

      <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--color-text-main)', marginBottom: '1.5rem' }}>
        {data.summary}
      </p>

      {data.agenda && (
        <div style={{ background: 'var(--color-bg-alt)', borderRadius: 'var(--radius-md)', padding: '1.2rem 1.5rem', borderLeft: '4px solid var(--color-primary)' }}>
          <p style={{ fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-navy)', marginBottom: '0.8rem' }}>
            <i className="fa-solid fa-list-check"></i> Full Session Agenda
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {data.agenda.map((a, i) => (
              <li key={i} style={{ fontSize: '0.92rem', color: 'var(--color-text-main)', display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <i className="fa-solid fa-circle-check" style={{ color: 'var(--color-primary)', marginTop: '0.2rem' }}></i> {a}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
