import { useState } from 'react'
import { FaInstagram, FaTiktok, FaPinterest, FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="contact">

      <section className="page-hero" data-watermark="رابطہ">
        <div className="page-hero-content">
          <span className="urdu-heading urdu">رابطہ</span>
          <div className="page-hero-line" />
          <span className="eng-heading">Get in Touch</span>
        </div>
      </section>

      <section className="contact-main section">
        <div className="container">
          <div className="contact-grid">

            {/* FORM */}
            <div className="contact-form-wrap">
              <h2 className="contact-form-title">Send Us a Message</h2>
              <p className="contact-form-desc">
                Have a question, an event idea, or just want to say hello? We'd love to hear from you.
              </p>

              {sent ? (
                <div className="contact-success">
                  <span className="urdu contact-success__urdu">شکریہ</span>
                  <h3>Thank you for reaching out!</h3>
                  <p>We'll get back to you within 24 hours.</p>
                  <button className="btn-outline" onClick={() => setSent(false)}>Send Another Message</button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form__row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What is this about?"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn-primary contact-form__submit">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* INFO */}
            <div className="contact-info">
              <div className="contact-info__block">
                <h3 className="contact-info__heading">Visit Us</h3>
                <ul className="contact-info__list">
                  <li>
                    <FaMapMarkerAlt />
                    <div>
                      <strong>Address</strong>
                      <span>Street 5, Art District, F-7 Markaz, Islamabad, Pakistan</span>
                    </div>
                  </li>
                  <li>
                    <FaPhone />
                    <div>
                      <strong>Phone</strong>
                      <span>+92 300 1234567</span>
                    </div>
                  </li>
                  <li>
                    <FaEnvelope />
                    <div>
                      <strong>Email</strong>
                      <span>hello@qissaeurdu.com</span>
                    </div>
                  </li>
                  <li>
                    <FaGlobe />
                    <div>
                      <strong>Website</strong>
                      <span>www.qissaeurdu.com</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="contact-info__block">
                <h3 className="contact-info__heading">Opening Hours</h3>
                <ul className="contact-hours">
                  <li><span>Monday – Thursday</span><span>11 AM – 11 PM</span></li>
                  <li><span>Friday – Saturday</span><span>11 AM – 12 AM</span></li>
                  <li><span>Sunday</span><span>12 PM – 10 PM</span></li>
                </ul>
              </div>

              <div className="contact-info__block">
                <h3 className="contact-info__heading">Follow Us</h3>
                <div className="contact-social">
                  <a href="https://instagram.com/qissaeurdu" target="_blank" rel="noreferrer" className="contact-social__link">
                    <FaInstagram />
                    <span>@qissaeurdu</span>
                  </a>
                  <a href="https://tiktok.com/@qissaeurdu" target="_blank" rel="noreferrer" className="contact-social__link">
                    <FaTiktok />
                    <span>@qissaeurdu</span>
                  </a>
                  <a href="https://pinterest.com/qissaeurdu" target="_blank" rel="noreferrer" className="contact-social__link">
                    <FaPinterest />
                    <span>qissaeurdu</span>
                  </a>
                </div>
              </div>

              <div className="contact-map">
                <div className="contact-map__placeholder">
                  <span className="urdu">F-7 مرکز</span>
                  <p>Street 5, Art District, F-7 Markaz<br />Islamabad, Pakistan</p>
                  <span className="contact-map__note">📍 Map integration coming soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
