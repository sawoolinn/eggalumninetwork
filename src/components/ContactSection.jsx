import { useState } from 'react'

const SOCIAL_LINKS = [
  { icon: 'fa-brands fa-facebook',   label: 'Facebook',   color: '#1877F2' },
  { icon: 'fa-brands fa-instagram',  label: 'Instagram',  color: '#E1306C' },
  { icon: 'fa-brands fa-linkedin',   label: 'LinkedIn',   color: '#0A66C2' },
  { icon: 'fa-brands fa-youtube',    label: 'YouTube',    color: '#FF0000' },
  { icon: 'fa-brands fa-x-twitter',  label: 'Twitter / X', color: '#000000' },
]

export default function ContactSection({ onShowToast }) {
  const [form, setForm] = useState({ name: '', classYear: '', email: '', subject: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [newsletterEmail, setNewsletterEmail] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.subject || !form.message) {
      onShowToast('⚠️ Please fill in all required fields.')
      return
    }
    setSubmitting(true)
    setTimeout(() => {
      setForm({ name: '', classYear: '', email: '', subject: '', message: '' })
      setSubmitting(false)
      onShowToast("✅ Your message has been sent! We'll respond within 2 business days.")
    }, 1200)
  }

  const handleNewsletter = () => {
    if (!newsletterEmail.includes('@')) {
      onShowToast('⚠️ Please enter a valid email address.')
      return
    }
    setNewsletterEmail('')
    onShowToast('🎉 You\'re subscribed to the EggAlumni Monthly Digest!')
  }

  return (
    <section className="section section-alt" style={{ minHeight: '100vh' }}>
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <i className="fa-solid fa-paper-plane"></i> Get In Touch
          </span>
          <h2 className="section-title">Contact EggAlumni Network</h2>
          <p className="section-subtitle">
            Have a question, partnership inquiry, or want to be featured in our next alumni spotlight?
            We&apos;d love to hear from you.
          </p>
        </div>

        <div className="contact-grid">

          {/* ── Left: Contact Info ───────────── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>

            {/* Office info */}
            {/* <div className="contact-info-card">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
                <i className="fa-solid fa-address-book" style={{ color: 'var(--color-primary)' }}></i> Office Information
              </h3>
              {[
                { icon: 'fa-location-dot', title: 'Address', text: <>EggAlumni Network Secretariat<br />123 Alumni Avenue, School District<br />Bangkok 10400, Thailand</> },
                { icon: 'fa-envelope',     title: 'Email',   text: <>info@eggalumni.org<br />scholarships@eggalumni.org</> },
                { icon: 'fa-phone',        title: 'Phone',   text: <>+66 2-123-4567<br />Mon – Fri, 09:00 – 17:00 ICT</> },
                { icon: 'fa-brands fa-line', title: 'LINE Official', text: '@eggalumni (Response within 24 hrs)' },
              ].map((item) => (
                <div key={item.title} className="contact-detail-item">
                  <div className="contact-icon"><i className={`fa-solid ${item.icon}`}></i></div>
                  <div className="contact-text">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div> */}

            {/* Social links */}
            <div className="contact-info-card">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1.2rem' }}>
                <i className="fa-solid fa-share-nodes" style={{ color: 'var(--color-primary)' }}></i> Follow Our Community
              </h3>
              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                {SOCIAL_LINKS.map((s) => (
                  <SocialBadge key={s.label} {...s} />
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="contact-info-card" style={{
              background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-navy) 100%)',
              border: 'none', color: '#fff',
            }}>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                <i className="fa-solid fa-bell"></i> Monthly Alumni Digest
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', marginBottom: '1.2rem' }}>
                {/* Get monthly scholarship updates, event invitations, and alumni spotlights delivered to your inbox. */}
              </p>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                {/* <input
                  type="email"
                  placeholder="your@email.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  style={{
                    flex: 1, padding: '0.65rem 1rem',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255,255,255,0.12)', color: '#fff',
                    fontFamily: 'var(--font-family)', outline: 'none',
                  }}
                /> */}
                {/* <button
                  className="btn"
                  onClick={handleNewsletter}
                  style={{ background: '#FCD34D', color: 'var(--color-navy)', border: 'none', whiteSpace: 'nowrap', padding: '0.65rem 1.2rem' }}
                >
                  <i className="fa-solid fa-paper-plane"></i> Subscribe
                </button> */}
              </div>
            </div>
          </div>

          {/* ── Right: Inquiry Form ───────────── */}
          <div className="contact-form">
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.3rem' }}>Send an Inquiry</h3>
            {/* <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1.8rem' }}>
              Partnerships, scholarship questions, event hosting, or media inquiries — we&apos;ll respond within 2 business days.
            </p> */}

            <form onSubmit={handleSubmit} noValidate>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input id="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="classYear">Graduation Year</label>
                  <input id="classYear" type="text" placeholder="e.g. Class of 2018" value={form.classYear} onChange={handleChange} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input id="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select id="subject" value={form.subject} onChange={handleChange} required>
                  <option value="">Select a topic...</option>
                  <option>Scholarship &amp; Study Abroad Inquiry</option>
                  <option>Partnership Proposal</option>
                  <option>Event Hosting / Sharing Session</option>
                  <option>Media &amp; Press Inquiry</option>
                  <option>Membership &amp; Chapters</option>
                  <option>General Question</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us more about your inquiry..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', fontSize: '1rem' }}
                disabled={submitting}
              >
                {submitting
                  ? <><i className="fa-solid fa-spinner fa-spin"></i> Sending...</>
                  : <><i className="fa-solid fa-paper-plane"></i> Send Message</>
                }
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

function SocialBadge({ icon, label, color }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href="#"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
        background: hovered ? color : 'var(--color-bg-alt)',
        color: hovered ? '#fff' : 'var(--color-navy)',
        border: `1px solid ${hovered ? color : 'var(--color-border)'}`,
        padding: '0.5rem 0.9rem', borderRadius: 'var(--radius-full)',
        fontSize: '0.85rem', fontWeight: '600',
        transition: 'all 0.2s ease', textDecoration: 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <i className={icon}></i> {label}
    </a>
  )
}
