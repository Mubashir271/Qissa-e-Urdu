import { useState } from 'react'
import './Reservation.css'

const occasions = [
  'Regular Visit', 'Birthday Celebration', 'Anniversary', 'Business Meeting',
  'Book Club', 'Mushaira / Poetry Evening', 'Private Event', 'Other'
]

const eventTypes = [
  { icon: '🎭', label: 'Mushaira', desc: 'Host a poetry gathering in our literary space.' },
  { icon: '📚', label: 'Book Launch', desc: 'Launch your book or literary work at Qissa.' },
  { icon: '✍️', label: 'Workshop', desc: 'Run a calligraphy, writing, or Urdu language workshop.' },
  { icon: '🎓', label: 'University Event', desc: 'Cultural events, literary fests, and student gatherings.' },
  { icon: '🌙', label: 'Private Dinner', desc: 'An intimate private dining experience.' },
  { icon: '🎪', label: 'Cultural Event', desc: 'Any Urdu or Pakistani cultural celebration.' },
]

export default function Reservation() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '',
    date: '', time: '', guests: '',
    occasion: '', notes: '', privateEvent: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm({ ...form, [e.target.name]: val })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="reservation">

      <section className="page-hero" data-watermark="محفل">
        <div className="page-hero-content">
          <span className="urdu-heading urdu">اپنی محفل محفوظ کریں</span>
          <div className="page-hero-line" />
          <span className="eng-heading">Reserve Your Evening</span>
        </div>
      </section>

      <section className="reservation-main section">
        <div className="container">
          <div className="reservation-grid">

            {/* FORM */}
            <div className="reservation-form-wrap">
              <h2 className="reservation-form-title">Make a Reservation</h2>
              <p className="reservation-form-desc">
                Fill in the details below and our team will confirm your booking within a few hours.
              </p>

              {submitted ? (
                <div className="reservation-success">
                  <span className="urdu reservation-success__urdu">بہت شکریہ</span>
                  <h3>Your reservation is confirmed!</h3>
                  <p>We've received your booking request and will send a confirmation to your email shortly.</p>
                  <p className="reservation-success__sub">We look forward to welcoming you to Qissa. ☕</p>
                  <button className="btn-outline" onClick={() => setSubmitted(false)}>Make Another Reservation</button>
                </div>
              ) : (
                <form className="reservation-form" onSubmit={handleSubmit}>
                  <div className="reservation-form__section">
                    <h4 className="reservation-form__section-title">Personal Information</h4>
                    <div className="reservation-form__row">
                      <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input id="name" name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input id="phone" name="phone" type="tel" placeholder="+92 300 0000000" value={form.phone} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input id="email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="reservation-form__section">
                    <h4 className="reservation-form__section-title">Booking Details</h4>
                    <div className="reservation-form__row">
                      <div className="form-group">
                        <label htmlFor="date">Date *</label>
                        <input id="date" name="date" type="date" value={form.date} onChange={handleChange} required min={new Date().toISOString().split('T')[0]} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="time">Preferred Time *</label>
                        <select id="time" name="time" value={form.time} onChange={handleChange} required>
                          <option value="">Select a time</option>
                          {['11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'].map(t => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="reservation-form__row">
                      <div className="form-group">
                        <label htmlFor="guests">Number of Guests *</label>
                        <select id="guests" name="guests" value={form.guests} onChange={handleChange} required>
                          <option value="">Select</option>
                          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '10+', '20+', '50+'].map(n => (
                            <option key={n} value={n}>{n} {n === '1' ? 'guest' : 'guests'}</option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="occasion">Special Occasion</label>
                        <select id="occasion" name="occasion" value={form.occasion} onChange={handleChange}>
                          <option value="">None / Regular Visit</option>
                          {occasions.map(o => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="reservation-form__section">
                    <div className="reservation-checkbox">
                      <input id="privateEvent" name="privateEvent" type="checkbox" checked={form.privateEvent} onChange={handleChange} />
                      <label htmlFor="privateEvent" className="reservation-checkbox__label">
                        <strong>This is a private event booking</strong>
                        <span>Select if you'd like to book the café or a section exclusively for your event.</span>
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="notes">Special Requests or Notes</label>
                    <textarea id="notes" name="notes" placeholder="Any dietary requirements, accessibility needs, or special arrangements..." value={form.notes} onChange={handleChange} />
                  </div>

                  <button type="submit" className="btn-primary reservation-form__submit">
                    Confirm Reservation
                  </button>
                </form>
              )}
            </div>

            {/* SIDEBAR */}
            <div className="reservation-sidebar">

              <div className="reservation-info-card">
                <h3 className="urdu reservation-info-card__urdu">ضروری معلومات</h3>
                <h4 className="reservation-info-card__title">Before You Book</h4>
                <ul className="reservation-info-list">
                  <li>Reservations are held for 15 minutes past the booking time.</li>
                  <li>For groups of 8+, please call us directly.</li>
                  <li>Private event bookings require 48 hours advance notice.</li>
                  <li>Special occasion decorations can be arranged with advance request.</li>
                  <li>A deposit may be required for large group and private event bookings.</li>
                </ul>
              </div>

              <div className="reservation-events-section">
                <h4 className="reservation-events-title">Book for a Private Event</h4>
                <div className="reservation-events-grid">
                  {eventTypes.map((ev) => (
                    <div key={ev.label} className="reservation-event-card">
                      <span className="reservation-event-card__icon">{ev.icon}</span>
                      <div>
                        <strong>{ev.label}</strong>
                        <p>{ev.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reservation-contact-note">
                <span className="urdu reservation-contact-note__urdu">فوری رابطہ</span>
                <p>For urgent bookings or enquiries, call us directly:</p>
                <a href="tel:+923001234567" className="reservation-contact-note__phone">+92 300 1234567</a>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
