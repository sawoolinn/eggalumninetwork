import { useState } from 'react'
import eventsData from '../data/events.json'

export default function EventsSection({ onOpenEvent }) {
  const [activeTab, setActiveTab] = useState('upcoming')

  const upcoming = eventsData.filter((e) => e.status === 'Upcoming')
  const past      = eventsData.filter((e) => e.status === 'Past')
  const displayed = activeTab === 'upcoming' ? upcoming : past

  return (
    <section className="section" style={{ minHeight: '100vh' }}>
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <i className="fa-solid fa-calendar-days"></i> Events & Sharing Sessions
          </span>
          <h2 className="section-title">Join the Conversation</h2>
          <p className="section-subtitle">
            Our alumni regularly gather for engaging webinars, fireside chats, mentorship workshops,
            and networking reunions — both online and in person.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2.5rem', borderBottom: '2px solid var(--color-border)' }}>
          {[
            { id: 'upcoming', label: `Upcoming (${upcoming.length})`, icon: 'fa-hourglass-half' },
            { id: 'past',     label: `Past Sessions (${past.length})`,  icon: 'fa-clock-rotate-left' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'var(--font-family)', fontSize: '1rem',
                padding: '0.75rem 1.5rem', marginBottom: '-2px',
                fontWeight: activeTab === tab.id ? '700' : '500',
                color: activeTab === tab.id ? 'var(--color-primary)' : 'var(--color-text-muted)',
                borderBottom: activeTab === tab.id ? '3px solid var(--color-primary)' : '3px solid transparent',
                transition: 'all 0.2s ease',
              }}
            >
              <i className={`fa-solid ${tab.icon}`}></i> {tab.label}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="events-grid">
          {displayed.map((event) => (
            <EventCard key={event.id} event={event} onOpenEvent={onOpenEvent} />
          ))}
        </div>

      </div>
    </section>
  )
}

function EventCard({ event, onOpenEvent }) {
  const isUpcoming = event.status === 'Upcoming'

  return (
    <div className="event-card">
      {/* Date & Status Row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
        <span className="event-date-badge">
          <i className="fa-regular fa-calendar"></i> {event.date}
        </span>
        <span style={{
          fontSize: '0.8rem', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontWeight: '600',
          background: isUpcoming ? '#DCFCE7' : '#F1F5F9',
          color: isUpcoming ? '#15803D' : 'var(--color-text-muted)',
        }}>
          {isUpcoming ? '● Upcoming' : '✓ Past'}
        </span>
      </div>

      {/* Time & Location */}
      <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
        <i className="fa-regular fa-clock"></i> {event.time}&nbsp;&nbsp;
        <i className="fa-solid fa-location-dot"></i> {event.location}
      </p>

      <h3 className="event-title">{event.title}</h3>
      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1.2rem' }}>
        {event.summary}
      </p>

      {/* Speaker */}
      <div className="event-speaker-box">
        <img src={event.speaker.avatar} alt={event.speaker.name} className="speaker-avatar" />
        <div className="speaker-info">
          <h5>{event.speaker.name}</h5>
          <p>{event.speaker.role}</p>
        </div>
      </div>

      {/* Agenda Preview (upcoming only) */}
      {isUpcoming && event.agenda && (
        <div style={{ background: 'var(--color-bg-alt)', borderRadius: 'var(--radius-md)', padding: '1rem 1.2rem', marginBottom: '1.2rem' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-navy)', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            <i className="fa-solid fa-list-check"></i> Session Agenda
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {event.agenda.map((a, i) => (
              <li key={i} style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', display: 'flex', gap: '0.5rem' }}>
                <i className="fa-solid fa-circle-check" style={{ color: 'var(--color-primary)', marginTop: '0.15rem' }}></i> {a}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA */}
      {isUpcoming ? (
        <button
          className="btn btn-primary"
          style={{ width: '100%', marginTop: 'auto' }}
          onClick={() => onOpenEvent(event)}
        >
          <i className="fa-solid fa-ticket"></i> View Full Details
        </button>
      ) : (
        <a
          href={event.recordingUrl || '#'}
          className="btn btn-secondary"
          style={{ width: '100%', marginTop: 'auto', display: 'flex' }}
        >
          <i className="fa-solid fa-circle-play"></i> Watch Recording
        </a>
      )}
    </div>
  )
}
