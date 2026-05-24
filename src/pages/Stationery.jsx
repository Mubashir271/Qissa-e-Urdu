import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Stationery.css'

const categories = ['All', 'Notebooks', 'Mugs', 'Postcards', 'Tote Bags', 'Calligraphy', 'Wall Art']

const products = [
  {
    category: 'Notebooks',
    titleUrdu: 'شاعری کاپی',
    title: 'Poetry Journal',
    desc: 'Handbound Nastaliq-ruled journal with Urdu ghazal prompts and gold foil stamping. 200 pages, A5 format.',
    price: 'PKR 1,200',
    badge: 'Bestseller',
    icon: '📓',
  },
  {
    category: 'Notebooks',
    titleUrdu: 'خطاطی کاپی',
    title: 'Calligraphy Practice Book',
    desc: 'Grid-lined practice book designed for Nastaliq script. Includes stroke guides and alphabet reference.',
    price: 'PKR 950',
    badge: null,
    icon: '📒',
  },
  {
    category: 'Mugs',
    titleUrdu: 'شعر مگ',
    title: 'Urdu Poetry Mug',
    desc: 'Ceramic mug with a handpainted Urdu verse. Each mug features a different ghazal line. Dishwasher safe.',
    price: 'PKR 1,500',
    badge: 'New',
    icon: '☕',
  },
  {
    category: 'Mugs',
    titleUrdu: 'قصہ مگ',
    title: 'Qissa Signature Mug',
    desc: 'Our logo mug — classic maroon and beige. Perfect for your morning doodh patti or evening kehwa.',
    price: 'PKR 1,200',
    badge: null,
    icon: '🫖',
  },
  {
    category: 'Postcards',
    titleUrdu: 'شعری کارڈ',
    title: 'Poetry Postcard Set',
    desc: 'Set of 10 illustrated Urdu poetry postcards featuring verses by Faiz, Ghalib, and Mir Taqi Mir.',
    price: 'PKR 800',
    badge: 'Bestseller',
    icon: '🗂️',
  },
  {
    category: 'Postcards',
    titleUrdu: 'خطاطی کارڈ',
    title: 'Calligraphy Greeting Cards',
    desc: 'Pack of 6 handmade calligraphy greeting cards for Eid, birthdays, and special occasions.',
    price: 'PKR 650',
    badge: null,
    icon: '💌',
  },
  {
    category: 'Tote Bags',
    titleUrdu: 'ادبی بیگ',
    title: 'Literary Tote',
    desc: 'Heavy-duty canvas tote with Urdu calligraphy print. Holds 15+ books comfortably.',
    price: 'PKR 1,800',
    badge: 'New',
    icon: '👜',
  },
  {
    category: 'Calligraphy',
    titleUrdu: 'خطاطی سیٹ',
    title: 'Beginner Calligraphy Set',
    desc: 'Complete starter kit — bamboo qalam, ink, nibs, practice paper, and an Urdu alphabet guide.',
    price: 'PKR 2,500',
    badge: null,
    icon: '🖋️',
  },
  {
    category: 'Calligraphy',
    titleUrdu: 'قلم و دوات',
    title: 'Traditional Qalam & Ink',
    desc: 'Handturned bamboo qalam and traditional carbon ink — the tools of the classical khattaat.',
    price: 'PKR 1,100',
    badge: null,
    icon: '✒️',
  },
  {
    category: 'Wall Art',
    titleUrdu: 'دیوار تصویر',
    title: 'Urdu Poetry Print — Faiz',
    desc: 'A3 museum-quality giclée print of Faiz Ahmed Faiz\'s "Hum Dekhenge" in Nastaliq calligraphy.',
    price: 'PKR 3,500',
    badge: 'Limited',
    icon: '🖼️',
  },
  {
    category: 'Wall Art',
    titleUrdu: 'خطاطی تصویر',
    title: 'Custom Calligraphy Print',
    desc: 'Commission your favourite Urdu couplet or name in Nastaliq script. A4 or A3. Framed or unframed.',
    price: 'From PKR 4,000',
    badge: 'Custom',
    icon: '🎨',
  },
  {
    category: 'Notebooks',
    titleUrdu: 'ناول نوٹ بک',
    title: 'Fiction Writer\'s Notebook',
    desc: 'Wide-ruled Urdu-friendly notebook with chapter dividers, character sheets, and plot templates.',
    price: 'PKR 1,050',
    badge: null,
    icon: '📔',
  },
]

export default function Stationery() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? products : products.filter((p) => p.category === active)

  return (
    <div className="stationery">

      <section className="page-hero" data-watermark="قلم">
        <div className="page-hero-content">
          <span className="urdu-heading urdu">اسٹیشنری و اشیاء</span>
          <div className="page-hero-line" />
          <span className="eng-heading">Stationery & Merchandise</span>
        </div>
      </section>

      {/* INTRO */}
      <div className="stationery-intro">
        <div className="container">
          <p>
            Every product is designed to celebrate Urdu script, poetry, and Pakistani heritage.
            Available in-café and via special order.
          </p>
        </div>
      </div>

      {/* FILTER */}
      <div className="stationery-filter-wrap">
        <div className="container">
          <div className="stationery-filter">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`stationery-filter__btn ${active === cat ? 'stationery-filter__btn--active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* PRODUCTS */}
      <section className="stationery-products section">
        <div className="container">
          <div className="stationery-grid">
            {filtered.map((product) => (
              <div key={product.title} className="stationery-card">
                {product.badge && (
                  <span className="stationery-card__badge">{product.badge}</span>
                )}
                <div className="stationery-card__icon">{product.icon}</div>
                <div className="stationery-card__body">
                  <span className="stationery-card__cat">{product.category}</span>
                  <h3 className="urdu stationery-card__urdu">{product.titleUrdu}</h3>
                  <h4 className="stationery-card__title">{product.title}</h4>
                  <p className="stationery-card__desc">{product.desc}</p>
                </div>
                <div className="stationery-card__footer">
                  <span className="stationery-card__price">{product.price}</span>
                  <Link to="/contact" className="stationery-card__btn">Enquire</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM ORDER */}
      <section className="stationery-custom">
        <div className="container">
          <div className="stationery-custom__inner">
            <div>
              <span className="urdu stationery-custom__urdu">خصوصی آرڈر</span>
              <h2>Custom & Bulk Orders</h2>
              <p>
                Looking for branded gifts, corporate orders, or custom calligraphy pieces?
                We work with individuals, businesses, and institutions on bespoke stationery.
              </p>
              <Link to="/contact" className="btn-primary">Get a Quote</Link>
            </div>
            <div className="stationery-custom__features">
              {['Personalized calligraphy', 'Bulk notebook orders', 'Corporate gifting', 'Wedding stationery', 'University branding', 'Custom packaging'].map(f => (
                <span key={f} className="stationery-custom__feature">{f}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
