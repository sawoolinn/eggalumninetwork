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
      className="modal-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="modal-box">
        <div className="modal-header">
          <div>
            <span className="section-tag" style={{ marginBottom: '0.25rem' }}>
              {type === 'news' ? data.category : (data.status || 'Event')}
            </span>
            <h2 className="modal-title">{data.title}</h2>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="modal-body">
          {type === 'news' && <NewsModalContent data={data} />}
          {type === 'event' && <EventModalContent data={data} />}
        </div>
      </div>
    </div>
  )
}

function NewsModalContent({ data }) {
  return (
    <>
      {data.image && (
        <img
          src={data.image}
          alt={data.title}
          style={{ width: '100%', height: '260px', objectFit: 'cover', marginBottom: '1.5rem', border: '1px solid var(--color-border)' }}
        />
      )}
      <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.82rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', flexWrap: 'wrap', fontFamily: 'var(--font-sans)', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.85rem' }}>
        <span><i className="fa-regular fa-calendar"></i> {data.date}</span>
        {data.author && <span><i className="fa-regular fa-user"></i> {data.author}</span>}
        {data.readTime && <span><i className="fa-regular fa-clock"></i> {data.readTime}</span>}
      </div>
      <div
        style={{ fontSize: '0.95rem', lineHeight: '1.85', color: 'var(--color-text-main)', fontFamily: 'var(--font-sans)' }}
        dangerouslySetInnerHTML={{ __html: data.content || data.summary }}
      />
    </>
  )
}

function EventModalContent({ data }) {
  return (
    <>
      <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.82rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem', flexWrap: 'wrap', fontFamily: 'var(--font-sans)' }}>
        <span style={{ color: 'var(--color-primary)', fontWeight: '700' }}>
          <i className="fa-regular fa-calendar"></i> {data.date} &middot; {data.time}
        </span>
        <span>
          <i className="fa-solid fa-location-dot"></i> {data.location}
        </span>
      </div>

      <div className="event-speaker-box" style={{ marginBottom: '1.5rem' }}>
        <img src={data.speaker.avatar} alt={data.speaker.name} className="speaker-avatar" style={{ width: '52px', height: '52px' }} />
        <div className="speaker-info">
          <h5 style={{ fontSize: '0.95rem', fontFamily: 'var(--font-sans)' }}>{data.speaker.name}</h5>
          <p style={{ fontSize: '0.8rem', fontFamily: 'var(--font-sans)' }}>{data.speaker.role}</p>
        </div>
      </div>

      <p style={{ fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--color-text-main)', marginBottom: '1.5rem', fontFamily: 'var(--font-sans)' }}>
        {data.summary}
      </p>

      {data.agenda && (
        <div style={{ background: 'var(--color-bg-alt)', padding: '1.25rem 1.5rem', borderLeft: '3px solid var(--color-primary)', border: '1px solid var(--color-border)', borderLeftWidth: '3px', borderLeftColor: 'var(--color-primary)' }}>
          <p style={{ fontWeight: '700', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-navy)', marginBottom: '0.8rem', fontFamily: 'var(--font-sans)' }}>
            <i className="fa-solid fa-list-check"></i> Session Agenda
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {data.agenda.map((a, i) => (
              <li key={i} style={{ fontSize: '0.85rem', color: 'var(--color-text-main)', display: 'flex', gap: '0.6rem', alignItems: 'flex-start', fontFamily: 'var(--font-sans)' }}>
                <i className="fa-solid fa-circle-check" style={{ color: 'var(--color-primary)', marginTop: '0.2rem', fontSize: '0.85rem' }}></i> {a}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
