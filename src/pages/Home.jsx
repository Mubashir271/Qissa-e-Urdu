import { Link } from 'react-router-dom'
import { FaArrowRight, FaCalendarAlt, FaMicrophone, FaPen, FaBook } from 'react-icons/fa'
import logoImg from '/public/logo.png'
import './Home.css'

const featuredAreas = [
  {
    icon: '📚',
    titleUrdu: 'ادبی تجربہ',
    titleEng: 'Literary Café Experience',
    desc: 'Curated shelves of Urdu literature, poetry, and prose — a space to read, reflect, and reconnect.',
  },
  {
    icon: '✍️',
    titleUrdu: 'روایتی جمالیات',
    titleEng: 'Traditional Urdu Aesthetics',
    desc: 'Inspired by Mughal architecture and Old Lahore — every corner tells a story in calligraphy and craft.',
  },
  {
    icon: '🎭',
    titleUrdu: 'شعر و مشاعرہ',
    titleEng: 'Poetry & Mushaira Nights',
    desc: 'Monthly mushairas, open mic evenings, and storytelling sessions that bring poetry to life.',
  },
  {
    icon: '🖋️',
    titleUrdu: 'اردو اسٹیشنری',
    titleEng: 'Urdu Stationery & Art',
    desc: 'Handcrafted notebooks, calligraphy sets, postcards, and merchandise celebrating Urdu identity.',
  },
  {
    icon: '☕',
    titleUrdu: 'قہوہ و مٹھائی',
    titleEng: 'Coffee & Traditional Desserts',
    desc: 'Signature Urdu-named coffees alongside gulab jamun cheesecake, shahi tukra, and kehwa.',
  },
  {
    icon: '🌸',
    titleUrdu: 'ثقافتی ماحول',
    titleEng: 'Cultural Sanctuary',
    desc: 'A warm, immersive environment where younger generations reconnect with language and identity.',
  },
]

const featuredEvents = [
  {
    icon: <FaMicrophone />,
    labelUrdu: 'اوپن مائیک',
    label: 'Open Mic Nights',
    desc: 'Share your poetry, prose, or spoken word every Friday evening.',
    tag: 'Bi-weekly',
  },
  {
    icon: <FaPen />,
    labelUrdu: 'خطاطی',
    label: 'Live Calligraphy Sessions',
    desc: 'Watch master calligraphers create live art and learn the ancient script.',
    tag: 'Monthly',
  },
  {
    icon: <FaBook />,
    labelUrdu: 'شعر کی شام',
    label: 'Urdu Poetry Evenings',
    desc: 'An intimate gathering of poets and poetry lovers in the mushaira tradition.',
    tag: 'Monthly',
  },
  {
    icon: <FaCalendarAlt />,
    labelUrdu: 'داستان گوئی',
    label: 'Storytelling Sessions',
    desc: 'Traditional Urdu storytelling — dastaans told the way they were meant to be heard.',
    tag: 'Weekly',
  },
]

export default function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero__watermark" aria-hidden="true">اردو</div>
        <div className="home-hero__content">
          <div className="home-hero__line" />
          <h1 className="urdu home-hero__title">جہاں ادب سانس لیتا ہے</h1>
          <p className="home-hero__subtitle">
            A contemporary literary café reconnecting generations with Urdu,<br />
            culture, and conversation.
          </p>
          <div className="home-hero__line" />
          <div className="home-hero__buttons">
            <Link to="/menu" className="btn-primary">Explore Menu</Link>
            <Link to="/about" className="btn-secondary">Discover Urdu Adab</Link>
          </div>
        </div>
        <div className="home-hero__scroll" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* INTRO */}
      <section className="home-intro section">
        <div className="container">
          <div className="home-intro__grid">
            <div className="home-intro__text">
              <span className="home-intro__label">Our Story</span>
              <h2 className="home-intro__heading">
                Urdu is not just a language —<br />
                <em>it is an experience.</em>
              </h2>
              <div className="home-intro__divider" />
              <p>
                Qissa Urdu Café is a cultural sanctuary where literature, poetry, coffee, and
                design come together. Inspired by traditional Urdu heritage and modern café
                culture, the space creates an immersive environment for younger generations to
                reconnect with language, identity, and storytelling.
              </p>
              <p className="urdu home-intro__urdu-para">
                قصۂ اردو کیفے — ایک ایسی جگہ جہاں زبان، ادب اور قہوے کی خوشبو مل کر ایک
                انوکھا تجربہ بناتی ہے۔
              </p>
              <Link to="/about" className="btn-outline home-intro__cta">
                Our Story <FaArrowRight style={{ marginLeft: '0.5rem', fontSize: '0.8rem' }} />
              </Link>
            </div>
            <div className="home-intro__visual">
              <div className="home-intro__deco-box">
                <img src={logoImg} alt="Qissa Urdu Café" className="home-intro__logo-img" />
                <div className="home-intro__deco-info">
                  <div className="home-intro__stat">
                    <span className="home-intro__stat-num">2024</span>
                    <span className="home-intro__stat-label">Est.</span>
                  </div>
                  <div className="home-intro__stat">
                    <span className="home-intro__stat-num">500+</span>
                    <span className="home-intro__stat-label">Urdu Books</span>
                  </div>
                  <div className="home-intro__stat">
                    <span className="home-intro__stat-num">50+</span>
                    <span className="home-intro__stat-label">Events/year</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED AREAS */}
      <section className="home-areas section-alt">
        <div className="container">
          <div className="section-heading">
            <span className="urdu-title urdu">ہماری خصوصیات</span>
            <div className="divider" />
            <span className="eng-title">What Makes Us Qissa</span>
          </div>
          <div className="home-areas__grid">
            {featuredAreas.map((area) => (
              <div key={area.titleEng} className="home-areas__card">
                <span className="home-areas__icon">{area.icon}</span>
                <h3 className="urdu home-areas__title-urdu">{area.titleUrdu}</h3>
                <h4 className="home-areas__title-eng">{area.titleEng}</h4>
                <p className="home-areas__desc">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE BANNER */}
      <section className="home-quote">
        <div className="home-quote__texture" aria-hidden="true" />
        <div className="container">
          <div className="home-quote__content">
            <span className="home-quote__ornament" aria-hidden="true">❝</span>
            <blockquote className="urdu home-quote__text">لفظوں میں بسی ایک دنیا</blockquote>
            <p className="home-quote__translation">A world that lives within words</p>
            <div className="home-quote__line" />
            <cite className="home-quote__cite">Qissa Urdu Café</cite>
          </div>
        </div>
      </section>

      {/* FEATURED EVENTS */}
      <section className="home-events section">
        <div className="container">
          <div className="section-heading">
            <span className="urdu-title urdu">ہماری محفلیں</span>
            <div className="divider" />
            <span className="eng-title">Featured Events</span>
          </div>
          <div className="home-events__grid">
            {featuredEvents.map((ev) => (
              <div key={ev.label} className="home-events__card">
                <div className="home-events__card-top">
                  <span className="home-events__icon">{ev.icon}</span>
                  <span className="home-events__tag">{ev.tag}</span>
                </div>
                <h3 className="urdu home-events__title-urdu">{ev.labelUrdu}</h3>
                <h4 className="home-events__title-eng">{ev.label}</h4>
                <p className="home-events__desc">{ev.desc}</p>
                <Link to="/events" className="home-events__link">
                  Learn more <FaArrowRight />
                </Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/events" className="btn-primary">View All Events</Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="home-cta">
        <div className="container">
          <div className="home-cta__content">
            <span className="urdu home-cta__urdu">اپنی محفل بکل کریں</span>
            <h2 className="home-cta__heading">Reserve Your Evening at Qissa</h2>
            <p className="home-cta__desc">
              Book a table, host a private event, or reserve a space for your next mushaira,
              book launch, or cultural gathering.
            </p>
            <div className="home-cta__buttons">
              <Link to="/reservation" className="btn-primary">Book a Table</Link>
              <Link to="/contact" className="btn-secondary">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
