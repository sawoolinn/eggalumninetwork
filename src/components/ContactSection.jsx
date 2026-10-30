import { useState } from 'react'

const INIT = { name: '', classYear: '', email: '', subject: '', message: '' }

export default function ContactSection({ onShowToast, onNavigate }) {
  const [form, setForm]           = useState(INIT)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.id]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.subject || !form.message) {
      onShowToast('Please fill in all required fields.')
      return
    }
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1400))
    setSubmitting(false)
    setForm(INIT)
    onShowToast('Message sent! We will reply within 2 business days.')
  }

  return (
    <div style={{ minHeight: '100vh' }}>

      {/* ── Page Hero Banner ── */}
      <div style={{ background: 'var(--color-navy)', padding: '4rem 0 3rem 0', borderBottom: '3px solid var(--color-primary)' }}>
        <div className="container">
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', display: 'block', marginBottom: '0.75rem' }}>
            <i className="fa-solid fa-paper-plane"></i>&nbsp; Get In Touch
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff', fontWeight: '700', marginBottom: '0.75rem' }}>
            Contact Us
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '1rem', maxWidth: '580px', fontFamily: 'var(--font-sans)', lineHeight: '1.75' }}>
            Partnerships, scholarship questions, event hosting, or media inquiries — we are here to help and will respond within 2 business days.
          </p>
        </div>
      </div>

      {/* ── Contact Grid ── */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">

            {/* Left: Info */}
            <div>
              <div className="section-header">
                <span className="section-tag"><i className="fa-solid fa-address-card"></i> Contact Information</span>
                <h2 className="section-title">How to Reach Us</h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                {[
                  { icon: 'fa-envelope',   label: 'Email',   value: 'info@eggalumni.tech' },
                  { icon: 'fa-brands fa-line', label: 'Line',  value: '@eggalumni' },
                  { icon: 'fa-clock',      label: 'Office Hours', value: 'Mon – Fri · 09:00 – 17:00 ICT' },
                ].map((c) => (
                  <div key={c.label} style={{ display: 'flex', gap: '1rem', padding: '1.25rem', background: 'var(--color-bg-alt)', border: '1px solid var(--color-border)' }}>
                    <div style={{ width: '40px', height: '40px', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <i className={`fa-solid ${c.icon}`} style={{ color: '#fff', fontSize: '0.95rem' }}></i>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.68rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '0.2rem' }}>{c.label}</div>
                      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--color-navy)', fontWeight: '500' }}>{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.75rem' }}>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>Follow Us</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {[
                    { icon: 'fa-brands fa-facebook-f', label: 'Facebook' },
                    { icon: 'fa-brands fa-instagram',  label: 'Instagram' },
                    { icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn' },
                    { icon: 'fa-brands fa-youtube',    label: 'YouTube' },
                  ].map((s) => (
                    <a key={s.label} href="#"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: '600', color: 'var(--color-primary)', border: '1px solid var(--color-border)', padding: '0.45rem 0.9rem', textDecoration: 'none', transition: 'all 0.15s' }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--color-primary)' }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-primary)'; e.currentTarget.style.borderColor = 'var(--color-border)' }}>
                      <i className={s.icon}></i> {s.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* FAQ quick links */}
              <div style={{ marginTop: '2.5rem', background: 'var(--color-navy)', padding: '1.75rem', borderLeft: '4px solid var(--color-accent-gold)' }}>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', color: '#fff', marginBottom: '1rem' }}>Frequently Asked Questions</h4>
                {[
                  { q: 'How do I become a member?', action: () => setForm((f) => ({ ...f, subject: 'Membership Registration Inquiry' })) },
                  { q: 'How can I apply for a scholarship?', action: () => onNavigate ? onNavigate('news') : null },
                  { q: 'How do I host a sharing session?', action: () => onNavigate ? onNavigate('events') : null },
                  { q: 'How do I update my alumni profile?', action: () => setForm((f) => ({ ...f, subject: 'Alumni Profile Update Request' })) },
                ].map(({ q, action }) => (
                  <div
                    key={q}
                    onClick={action}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)', fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', cursor: 'pointer', transition: 'color 0.15s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent-gold)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}
                  >
                    <i className="fa-solid fa-chevron-right" style={{ color: 'var(--color-accent-gold)', fontSize: '0.65rem' }}></i> {q}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <div className="section-header">
                <span className="section-tag"><i className="fa-solid fa-pen-to-square"></i> Send a Message</span>
                <h2 className="section-title">Send an Inquiry</h2>
                <p className="section-subtitle">We respond to all messages within 2 business days.</p>
              </div>

              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
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
                  <textarea id="message" rows={7} placeholder="Tell us more about your inquiry..." value={form.message} onChange={handleChange} required style={{ resize: 'vertical' }} />
                </div>

                <button type="submit" className="btn btn-primary" style={{ fontSize: '0.9rem', justifyContent: 'center' }} disabled={submitting}>
                  {submitting
                    ? <><i className="fa-solid fa-spinner fa-spin"></i> Sending...</>
                    : <><i className="fa-solid fa-paper-plane"></i> Send Message</>
                  }
                </button>

                <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)', lineHeight: '1.6' }}>
                  By submitting this form you agree to our privacy policy. We will never share your information with third parties.
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ── Chapters Map ── */}
      <section style={{ background: 'var(--color-bg-alt)', padding: '5rem 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', borderBottom: 'none', paddingBottom: 0 }}>
            <span className="section-tag"><i className="fa-solid fa-globe"></i> Global Presence</span>
            <h2 className="section-title">Alumni Chapters Worldwide</h2>
            <p className="section-subtitle" style={{ margin: '0.75rem auto 0 auto' }}>Our members are active in universities, cities, and organisations across the globe.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem', marginTop: '3rem' }}>
            {[
              { region: 'Southeast Asia', countries: 'Thailand · Myanmar · Vietnam · Singapore', icon: 'fa-earth-asia' },
              { region: 'East Asia',      countries: 'Japan · South Korea · China',              icon: 'fa-torii-gate' },
              { region: 'Europe',         countries: 'UK · Germany · France · Netherlands',      icon: 'fa-earth-europe' },
              { region: 'North America',  countries: 'USA · Canada',                             icon: 'fa-earth-americas' },
            ].map((ch) => (
              <div key={ch.region} style={{ background: '#fff', border: '1px solid var(--color-border)', padding: '1.75rem', textAlign: 'center' }}>
                <i className={`fa-solid ${ch.icon}`} style={{ fontSize: '2rem', color: 'var(--color-primary)', display: 'block', marginBottom: '0.75rem' }}></i>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '0.95rem', color: 'var(--color-navy)', marginBottom: '0.4rem' }}>{ch.region}</h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', lineHeight: '1.65', fontFamily: 'var(--font-sans)' }}>{ch.countries}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
