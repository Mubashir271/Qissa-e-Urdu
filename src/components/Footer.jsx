import { Link } from 'react-router-dom'
import {
  FaInstagram, FaTiktok, FaPinterest,
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe
} from 'react-icons/fa'
import logoImg from '../assets/logo.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">

            {/* Brand */}
            <div className="footer__brand">
              <div className="footer__logo">
                <img src={logoImg} alt="Qissa Urdu Café" className="footer__logo-img" />
                <div>
                  <span className="footer__logo-tagline">Qissa Urdu Café</span>
                </div>
              </div>
              <p className="urdu footer__tagline-urdu">ہر شام ایک داستان</p>
              <p className="footer__desc">
                A contemporary literary café where literature, poetry, coffee,
                and design come together in the heart of Islamabad.
              </p>
              <div className="footer__social">
                <a href="https://instagram.com/qissaeurdu" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://tiktok.com/@qissaeurdu" target="_blank" rel="noreferrer" aria-label="TikTok">
                  <FaTiktok />
                </a>
                <a href="https://pinterest.com/qissaeurdu" target="_blank" rel="noreferrer" aria-label="Pinterest">
                  <FaPinterest />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__col">
              <h4 className="footer__col-title">Quick Links</h4>
              <ul className="footer__links">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/about', label: 'About Us' },
                  { to: '/menu', label: 'Our Menu' },
                  { to: '/experience', label: 'Café Experience' },
                  { to: '/events', label: 'Events' },
                  { to: '/gallery', label: 'Gallery' },
                  { to: '/reservation', label: 'Reserve a Table' },
                ].map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hours */}
            <div className="footer__col">
              <h4 className="footer__col-title">Opening Hours</h4>
              <ul className="footer__hours">
                <li><span>Mon – Thu</span><span>11 am – 11 pm</span></li>
                <li><span>Fri – Sat</span><span>11 am – 12 am</span></li>
                <li><span>Sunday</span><span>12 pm – 10 pm</span></li>
              </ul>
              <p className="footer__hours-note">
                * Event nights may have extended hours
              </p>
            </div>

            {/* Contact */}
            <div className="footer__col">
              <h4 className="footer__col-title">Contact</h4>
              <ul className="footer__contact-list">
                <li>
                  <FaMapMarkerAlt />
                  <span>Street 5, Art District, F-7 Markaz, Islamabad, Pakistan</span>
                </li>
                <li>
                  <FaPhone />
                  <span>+92 300 1234567</span>
                </li>
                <li>
                  <FaEnvelope />
                  <span>hello@qissaeurdu.com</span>
                </li>
                <li>
                  <FaGlobe />
                  <span>www.qissaeurdu.com</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className="footer__quote-strip">
        <span className="urdu">لفظوں میں بسی ایک دنیا</span>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Qissa Urdu Café. All rights reserved.</p>
          <p>Crafted with love for Urdu literature & culture.</p>
        </div>
      </div>
    </footer>
  )
}
