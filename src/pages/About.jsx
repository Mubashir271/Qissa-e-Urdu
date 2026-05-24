import { Link } from 'react-router-dom'
import './About.css'

const inspirations = [
  { emoji: '🪨', label: 'Traditional Carpets', urdu: 'قالین' },
  { emoji: '📖', label: 'Urdu Literature', urdu: 'اردو ادب' },
  { emoji: '🦚', label: 'Peacock Motifs', urdu: 'طاؤس' },
  { emoji: '🦉', label: 'The Wise Owl', urdu: 'الو' },
  { emoji: '🐎', label: 'Horse Symbolism', urdu: 'گھوڑا' },
  { emoji: '✍️', label: 'Urdu Calligraphy', urdu: 'خطاطی' },
  { emoji: '🏛️', label: 'Old Lahore', urdu: 'پرانا لاہور' },
  { emoji: '🌙', label: 'Mughal Nights', urdu: 'مغل شب' },
  { emoji: '🌹', label: 'Rose & Poetry', urdu: 'گلاب و شعر' },
]

const team = [
  {
    name: 'Eman Javed Mughal',
    role: 'Founder & Creative Director',
    urdu: 'بانی و تخلیقی ہدایتکار',
  },
  {
    name: 'Ahmad Raza',
    role: 'Head of Culinary Arts',
    urdu: 'باورچی خانے کے سربراہ',
  },
  {
    name: 'Saba Noor',
    role: 'Literary Curator',
    urdu: 'ادبی نگران',
  },
]

export default function About() {
  return (
    <div className="about">

      {/* HERO */}
      <section className="page-hero" data-watermark="داستان">
        <div className="page-hero-content">
          <span className="urdu-heading urdu">ہماری داستان</span>
          <div className="page-hero-line" />
          <span className="eng-heading">Our Story</span>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="about-story section">
        <div className="container">
          <div className="about-story__grid">
            <div className="about-story__visual">
              <div className="about-story__img-box">
                <div className="about-story__img-inner">
                  <span className="urdu about-story__deco">قصہ</span>
                  <div className="about-story__badge">
                    <span className="urdu">۲۰۲۴</span>
                    <span>Est.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-story__content">
              <span className="about-story__label">Who We Are</span>
              <h2 className="about-story__heading">
                A Cultural Sanctuary Born from<br />
                <em>Love for Urdu</em>
              </h2>
              <div className="about-story__divider" />
              <p>
                Qissa Urdu Café was created to revive Urdu through atmosphere, creativity,
                and human connection. The café blends traditional Pakistani aesthetics with
                contemporary design to create a warm and immersive cultural experience.
              </p>
              <p>
                Inspired by poetry, storytelling, and nostalgia, the café encourages younger
                generations to rediscover the beauty of Urdu within modern social spaces — a
                bridge between heritage and the present.
              </p>
              <p className="urdu about-story__urdu-para">
                ہمارا مقصد اردو زبان کو ایک زندہ تجربے میں تبدیل کرنا ہے — جہاں ادب صرف
                کتابوں میں نہیں بلکہ فضا میں سانس لیتا ہو۔
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="about-vision section-alt">
        <div className="container">
          <div className="about-vision__inner">
            <div className="section-heading">
              <span className="urdu-title urdu">ہمارا وژن</span>
              <div className="divider" />
              <span className="eng-title">Our Vision</span>
            </div>
            <div className="about-vision__grid">
              <div className="about-vision__card">
                <div className="about-vision__icon">🌿</div>
                <h3>Our Mission</h3>
                <p>
                  To transform Urdu from a forgotten tradition into a living modern experience —
                  one cup of coffee and one poem at a time.
                </p>
              </div>
              <div className="about-vision__card about-vision__card--featured">
                <div className="about-vision__quote-mark">"</div>
                <blockquote className="urdu about-vision__quote">
                  اردو کو ایک زندہ تجربے میں بدل دیں
                </blockquote>
                <p className="about-vision__quote-eng">
                  To transform Urdu from a forgotten tradition into a living modern experience.
                </p>
              </div>
              <div className="about-vision__card">
                <div className="about-vision__icon">✨</div>
                <h3>Our Values</h3>
                <p>
                  Authenticity, creativity, cultural pride, and inclusivity — we welcome every
                  generation to the table of Urdu literature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSPIRATION COLLAGE */}
      <section className="about-inspiration section">
        <div className="container">
          <div className="section-heading">
            <span className="urdu-title urdu">ہماری الہام</span>
            <div className="divider" />
            <span className="eng-title">Our Inspirations</span>
          </div>
          <p className="about-inspiration__intro">
            Every detail of Qissa is inspired by the rich visual culture of the Subcontinent —
            from Mughal courts to the bustling streets of Old Lahore.
          </p>
          <div className="about-inspiration__grid">
            {inspirations.map((item) => (
              <div key={item.label} className="about-inspiration__item">
                <span className="about-inspiration__emoji">{item.emoji}</span>
                <span className="urdu about-inspiration__urdu">{item.urdu}</span>
                <span className="about-inspiration__label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="about-team section-alt">
        <div className="container">
          <div className="section-heading">
            <span className="urdu-title urdu">ہماری ٹیم</span>
            <div className="divider" />
            <span className="eng-title">The People Behind Qissa</span>
          </div>
          <div className="about-team__grid">
            {team.map((member) => (
              <div key={member.name} className="about-team__card">
                <div className="about-team__avatar">
                  <span className="urdu">{member.name[0]}</span>
                </div>
                <h3 className="about-team__name">{member.name}</h3>
                <span className="urdu about-team__role-urdu">{member.urdu}</span>
                <span className="about-team__role">{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <div className="about-cta__content">
            <span className="urdu about-cta__urdu">ہمارے ساتھ آئیں</span>
            <h2>Come Experience Qissa Yourself</h2>
            <div className="about-cta__buttons">
              <Link to="/reservation" className="btn-primary">Reserve a Table</Link>
              <Link to="/experience" className="btn-secondary">Explore the Café</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
