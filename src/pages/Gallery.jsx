import { useState } from 'react'
import './Gallery.css'

const filters = ['All', 'Café Interior', 'Events', 'Calligraphy', 'Food & Drinks', 'Stationery']

const items = [
  { cat: 'Café Interior', label: 'Literary Corner', size: 'large', color: '#4a1f20' },
  { cat: 'Calligraphy', label: 'Nastaliq Wall Mural', size: 'medium', color: '#331516' },
  { cat: 'Food & Drinks', label: 'Dastaan Latte', size: 'medium', color: '#5a2d1e' },
  { cat: 'Events', label: 'Monthly Mushaira', size: 'large', color: '#2a1012' },
  { cat: 'Café Interior', label: 'Main Seating Area', size: 'medium', color: '#3d1a1b' },
  { cat: 'Stationery', label: 'Poetry Journal', size: 'small', color: '#4a1f20' },
  { cat: 'Calligraphy', label: 'Live Art Session', size: 'small', color: '#331516' },
  { cat: 'Food & Drinks', label: 'Kashmiri Chai', size: 'medium', color: '#2d1010' },
  { cat: 'Events', label: 'Open Mic Night', size: 'small', color: '#3a1618' },
  { cat: 'Café Interior', label: 'Garden Courtyard', size: 'large', color: '#281010' },
  { cat: 'Stationery', label: 'Calligraphy Set', size: 'medium', color: '#4a2820' },
  { cat: 'Events', label: 'Book Launch Evening', size: 'medium', color: '#331516' },
  { cat: 'Food & Drinks', label: 'Gulab Jamun Cheesecake', size: 'small', color: '#3d2010' },
  { cat: 'Calligraphy', label: 'Poem in Gold Ink', size: 'large', color: '#1f0d0e' },
  { cat: 'Café Interior', label: 'Brew Bar', size: 'small', color: '#4a1f20' },
  { cat: 'Stationery', label: 'Urdu Postcards', size: 'medium', color: '#331516' },
  { cat: 'Events', label: 'Storytelling Session', size: 'small', color: '#2a1012' },
  { cat: 'Food & Drinks', label: 'Shahi Tukra', size: 'medium', color: '#3d1a1b' },
]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All' ? items : items.filter((i) => i.cat === active)

  return (
    <div className="gallery">

      <section className="page-hero" data-watermark="تصاویر">
        <div className="page-hero-content">
          <span className="urdu-heading urdu">گیلری</span>
          <div className="page-hero-line" />
          <span className="eng-heading">A Visual Story</span>
        </div>
      </section>

      {/* FILTER */}
      <div className="gallery-filter-wrap">
        <div className="container">
          <div className="gallery-filter">
            {filters.map((f) => (
              <button
                key={f}
                className={`gallery-filter__btn ${active === f ? 'gallery-filter__btn--active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <p className="gallery-filter__count">{filtered.length} photos</p>
        </div>
      </div>

      {/* GRID */}
      <section className="gallery-grid-section section">
        <div className="container">
          <div className="gallery-grid">
            {filtered.map((item, i) => (
              <div
                key={`${item.label}-${i}`}
                className={`gallery-item gallery-item--${item.size}`}
                onClick={() => setLightbox(item)}
              >
                <div
                  className="gallery-item__img"
                  style={{ background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}dd 100%)` }}
                >
                  <div className="gallery-item__overlay">
                    <span className="gallery-item__label">{item.label}</span>
                    <span className="gallery-item__cat">{item.cat}</span>
                    <span className="gallery-item__icon">⊕</span>
                  </div>
                  <div className="gallery-item__pattern" aria-hidden="true" />
                  <span className="gallery-item__placeholder-text urdu">
                    {item.cat === 'Calligraphy' ? 'خطاطی' :
                     item.cat === 'Events' ? 'محفل' :
                     item.cat === 'Food & Drinks' ? 'ذائقہ' :
                     item.cat === 'Stationery' ? 'قلم' : 'قصہ'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="gallery-note">
            <span className="urdu gallery-note__urdu">نوٹ</span>
            <p>
              Add your actual café photography to the <code>/public/gallery/</code> folder and update
              the image paths in this component to replace the placeholders shown here.
            </p>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="gallery-lightbox" onClick={() => setLightbox(null)}>
          <div className="gallery-lightbox__inner" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-lightbox__close" onClick={() => setLightbox(null)}>✕</button>
            <div
              className="gallery-lightbox__img"
              style={{ background: `linear-gradient(135deg, ${lightbox.color} 0%, ${lightbox.color}cc 100%)` }}
            >
              <span className="gallery-lightbox__placeholder urdu">
                {lightbox.cat === 'Calligraphy' ? 'خطاطی' :
                 lightbox.cat === 'Events' ? 'محفل' :
                 lightbox.cat === 'Food & Drinks' ? 'ذائقہ' :
                 lightbox.cat === 'Stationery' ? 'قلم' : 'قصہ'}
              </span>
            </div>
            <div className="gallery-lightbox__meta">
              <h3 className="gallery-lightbox__title">{lightbox.label}</h3>
              <span className="gallery-lightbox__cat">{lightbox.cat}</span>
            </div>
          </div>
        </div>
      )}

      {/* INSTAGRAM CTA */}
      <section className="gallery-instagram">
        <div className="container">
          <div className="gallery-instagram__inner">
            <span className="urdu gallery-instagram__urdu">انسٹاگرام</span>
            <h2>Follow Our Story on Instagram</h2>
            <p>
              Daily doses of poetry, calligraphy, coffee, and cultural moments from Qissa Urdu Café.
            </p>
            <a href="https://instagram.com/qissaeurdu" target="_blank" rel="noreferrer" className="btn-secondary">
              @qissaeurdu
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
