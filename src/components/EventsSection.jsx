import { useState } from 'react'
import eventsData from '../data/events.json'

export default function EventsSection({ onOpenEvent, onNavigate }) {
  const [activeTab, setActiveTab] = useState('upcoming')
  const upcoming = eventsData.filter((e) => e.status === 'Upcoming')
  const past     = eventsData.filter((e) => e.status !== 'Upcoming')
  const displayed = activeTab === 'upcoming' ? upcoming : past

  return (
    <div style={{ minHeight: '100vh' }}>

      {/* ── Page Hero Banner ── */}
      <div style={{ background: 'var(--color-navy)', padding: '4rem 0 3rem 0', borderBottom: '3px solid var(--color-primary)' }}>
        <div className="container">
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', display: 'block', marginBottom: '0.75rem' }}>
            <i className="fa-solid fa-calendar-check"></i>&nbsp; Events &amp; Sessions
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff', fontWeight: '700', marginBottom: '0.75rem' }}>
            Join the Conversation
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '1rem', maxWidth: '580px', fontFamily: 'var(--font-sans)', lineHeight: '1.75' }}>
            Our alumni regularly gather for webinars, fireside chats, mentorship workshops, and networking reunions — both online and in person.
          </p>
          {/* Quick stats */}
          <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Upcoming Events', value: upcoming.length },
              { label: 'Past Sessions',   value: past.length },
              { label: 'Total Hosted',    value: '95+' },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: '700', color: '#fff' }}>{s.value}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <section className="section">
        <div className="container">

          {/* Tab Bar */}
          <div style={{ display: 'flex', borderBottom: '2px solid var(--color-border)', marginBottom: '2.5rem' }}>
            {[
              { id: 'upcoming', label: `Upcoming (${upcoming.length})`, icon: 'fa-hourglass-half' },
              { id: 'past',     label: `Past Sessions (${past.length})`,  icon: 'fa-clock-rotate-left' },
            ].map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: '600',
                  padding: '0.85rem 1.5rem', marginBottom: '-2px',
                  color: activeTab === tab.id ? 'var(--color-navy)' : 'var(--color-text-muted)',
                  borderBottom: activeTab === tab.id ? '3px solid var(--color-navy)' : '3px solid transparent',
                  transition: 'all 0.15s ease',
                }}>
                <i className={`fa-solid ${tab.icon}`}></i> {tab.label}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          {displayed.length === 0 ? (
            <div className="empty-state">
              <i className="fa-solid fa-calendar-xmark"></i>
              <p>No {activeTab} events at this time. Check back soon.</p>
            </div>
          ) : (
            <div className="events-grid">
              {displayed.map((event) => (
                <EventCard key={event.id} event={event} onOpenEvent={onOpenEvent} />
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ── Host an Event CTA ── */}
      <section style={{ background: 'var(--color-bg-alt)', padding: '5rem 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <span className="section-tag"><i className="fa-solid fa-microphone"></i> Host a Session</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-navy)', margin: '0.5rem 0 1.25rem 0' }}>
              Share Your Experience with Fellow Alumni
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '1.25rem', fontFamily: 'var(--font-sans)' }}>
              Are you an alumnus with experience studying or working abroad? We invite you to host a sharing session and inspire the next generation of EGG graduates.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.8', fontFamily: 'var(--font-sans)' }}>
              Sessions can be held online or in-person. Our team will handle promotion, registration, and technical support.
            </p>
            {onNavigate && (
              <button
                className="btn btn-primary"
                style={{ marginTop: '1.75rem' }}
                onClick={() => onNavigate('contact')}
              >
                <i className="fa-solid fa-microphone"></i> Propose an Alumni Session
              </button>
            )}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { icon: 'fa-comments',       title: 'Sharing Sessions',   desc: 'Casual, story-led talks about your study or work experience abroad.' },
              { icon: 'fa-chalkboard-user', title: 'Mentorship Clinics', desc: 'One-on-one or group sessions to guide applicants through university or visa processes.' },
              { icon: 'fa-people-roof',    title: 'Reunions',           desc: 'Annual or chapter-level gatherings to reconnect and celebrate the network.' },
              { icon: 'fa-handshake',      title: 'Partnership Events', desc: 'Collaborative events with universities, embassies, or sponsor organisations.' },
            ].map((item) => (
              <div key={item.title} style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#fff', border: '1px solid var(--color-border)' }}>
                <div style={{ width: '38px', height: '38px', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className={`fa-solid ${item.icon}`} style={{ color: '#fff', fontSize: '0.9rem' }}></i>
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '0.95rem', color: 'var(--color-navy)', marginBottom: '0.2rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: '1.6', fontFamily: 'var(--font-sans)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

function EventCard({ event, onOpenEvent }) {
  const isUpcoming = event.status === 'Upcoming'
  return (
    <div className="event-card">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
        <span className="event-date-badge"><i className="fa-regular fa-calendar"></i> {event.date}</span>
        <span style={{ fontSize: '0.7rem', fontWeight: '700', padding: '0.2rem 0.65rem', fontFamily: 'var(--font-sans)',
          background: isUpcoming ? '#DCFCE7' : 'var(--color-bg-alt)',
          color: isUpcoming ? '#15803D' : 'var(--color-text-muted)',
        }}>
          {isUpcoming ? '● Upcoming' : '✓ Completed'}
        </span>
      </div>
      <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)' }}>
        <i className="fa-regular fa-clock"></i> {event.time}&nbsp;&nbsp;
        <i className="fa-solid fa-location-dot"></i> {event.location}
      </p>
      <h3 className="event-title">{event.title}</h3>
      <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: '1.65', fontFamily: 'var(--font-sans)' }}>{event.summary}</p>

      {/* Speaker */}
      <div className="event-speaker-box">
        <img src={event.speaker.avatar} alt={event.speaker.name} className="speaker-avatar" />
        <div className="speaker-info">
          <h5>{event.speaker.name}</h5>
          <p>{event.speaker.role}</p>
        </div>
      </div>

      {/* Agenda (upcoming only) */}
      {isUpcoming && event.agenda && (
        <div style={{ background: 'var(--color-bg-alt)', border: '1px solid var(--color-border)', padding: '1rem', marginBottom: '1rem' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-navy)', marginBottom: '0.6rem' }}>
            <i className="fa-solid fa-list-check"></i> Session Agenda
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {event.agenda.map((a, i) => (
              <li key={i} style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', display: 'flex', gap: '0.5rem', fontFamily: 'var(--font-sans)' }}>
                <i className="fa-solid fa-circle-check" style={{ color: 'var(--color-primary)', marginTop: '0.15rem' }}></i> {a}
              </li>
            ))}
          </ul>
        </div>
      )}

      {isUpcoming ? (
        <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => onOpenEvent(event)}>
          <i className="fa-solid fa-ticket"></i> View Full Details
        </button>
      ) : (
        <a href={event.recordingUrl || '#'} className="btn btn-secondary" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <i className="fa-solid fa-circle-play"></i> Watch Recording
        </a>
      )}
    </div>
  )
}
