import { Link } from 'react-router-dom'
import './CafeExperience.css'

const spaces = [
  {
    icon: '📚',
    titleUrdu: 'ادبی کونہ',
    title: 'The Literary Corner',
    desc: 'Curated shelves of over 500 Urdu books — fiction, poetry, history, and philosophy — available to browse and read in-café. A quiet nook for the solitary reader.',
    details: ['500+ Urdu books', 'Reading pillows', 'Personal lamp lighting', 'Book borrowing programme'],
  },
  {
    icon: '🖋️',
    titleUrdu: 'خطاطی دیوار',
    title: 'The Calligraphy Wall',
    desc: 'A stunning live mural created by rotating guest calligraphers — featuring Urdu verses from classical poets. The wall changes seasonally with new poetry.',
    details: ['Live calligraphy art', 'Seasonal rotations', 'Poet-featured verses', 'Photography-friendly'],
  },
  {
    icon: '🎭',
    titleUrdu: 'مشاعرہ گاہ',
    title: 'Mushaira Stage',
    desc: 'A dedicated performance area for our mushairas, storytelling sessions, and open mic evenings. Intimate, warm, and acoustically designed for poetry.',
    details: ['Acoustic staging', 'Microphone & PA system', 'Warm stage lighting', 'Capacity: 80 guests'],
  },
  {
    icon: '☕',
    titleUrdu: 'قہوہ خانہ',
    title: 'The Brew Bar',
    desc: 'Watch expert baristas craft your Kashmiri chai, kehwa, or dastaan latte right in front of you. Traditional preparation methods meet modern café precision.',
    details: ['Open brew bar', 'Traditional chai methods', 'Specialty coffee station', 'Barista consultations'],
  },
  {
    icon: '🌿',
    titleUrdu: 'باغیچہ نشست',
    title: 'Garden Seating',
    desc: 'Our outdoor courtyard features jasmine climbing the walls, traditional Mughal-inspired planters, and string lights — perfect for evening conversations.',
    details: ['Outdoor courtyard', 'Jasmine & flora', 'String lighting', 'Heaters in winter'],
  },
  {
    icon: '🛍️',
    titleUrdu: 'اسٹور',
    title: 'Stationery Boutique',
    desc: 'A curated selection of Urdu notebooks, calligraphy sets, branded merchandise, and poetry postcards. Designed exclusively for Qissa.',
    details: ['Exclusive merchandise', 'Handmade stationery', 'Limited edition prints', 'Gift packaging'],
  },
]

const experiences = [
  {
    num: '01',
    titleUrdu: 'فضا',
    title: 'The Atmosphere',
    desc: "From the moment you enter, you're greeted by the scent of qahwa and the sound of classical Urdu music. Every corner is designed to evoke the warmth of a literary gathering.",
  },
  {
    num: '02',
    titleUrdu: 'جمالیات',
    title: 'The Aesthetics',
    desc: 'Hand-carved wooden screens, traditional Mughal arches, Persian carpet flooring, antique brasswork, and Urdu calligraphy illuminated in warm candlelight.',
  },
  {
    num: '03',
    titleUrdu: 'ذائقہ',
    title: 'The Flavours',
    desc: 'A menu that marries traditional Pakistani flavours with modern café sensibility — each dish named after a Urdu literary concept or a mood from poetry.',
  },
  {
    num: '04',
    titleUrdu: 'آواز',
    title: 'The Sounds',
    desc: 'Curated Urdu music playlists featuring Mehdi Hassan, Nusrat Fateh Ali Khan, and contemporary Urdu artists — setting the perfect literary mood.',
  },
]

export default function CafeExperience() {
  return (
    <div className="cafe-exp">

      <section className="page-hero" data-watermark="تجربہ">
        <div className="page-hero-content">
          <span className="urdu-heading urdu">کیفے کا تجربہ</span>
          <div className="page-hero-line" />
          <span className="eng-heading">The Qissa Experience</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="cafe-exp-intro section">
        <div className="container">
          <div className="cafe-exp-intro__inner">
            <div className="section-heading">
              <span className="urdu-title urdu">ایک انوکھا تجربہ</span>
              <div className="divider" />
              <span className="eng-title">More Than Just a Café</span>
            </div>
            <p className="cafe-exp-intro__text">
              Qissa Urdu Café is designed as a total sensory experience — where the architecture,
              the aroma, the music, and the menu all conspire to make you feel that you have
              stepped into the pages of an Urdu novel set in the golden age of Lahori literature.
            </p>
          </div>
        </div>
      </section>

      {/* SPACES */}
      <section className="cafe-exp-spaces section-alt">
        <div className="container">
          <div className="section-heading">
            <span className="urdu-title urdu">ہمارے کمرے</span>
            <div className="divider" />
            <span className="eng-title">Our Spaces</span>
          </div>
          <div className="cafe-exp-spaces__grid">
            {spaces.map((space) => (
              <div key={space.title} className="cafe-exp-space-card">
                <div className="cafe-exp-space-card__icon">{space.icon}</div>
                <div className="cafe-exp-space-card__body">
                  <h3 className="urdu cafe-exp-space-card__urdu">{space.titleUrdu}</h3>
                  <h4 className="cafe-exp-space-card__eng">{space.title}</h4>
                  <p className="cafe-exp-space-card__desc">{space.desc}</p>
                  <ul className="cafe-exp-space-card__details">
                    {space.details.map((d) => <li key={d}>{d}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE PILLARS */}
      <section className="cafe-exp-pillars section">
        <div className="container">
          <div className="section-heading">
            <span className="urdu-title urdu">چار ستون</span>
            <div className="divider" />
            <span className="eng-title">The Four Pillars of Qissa</span>
          </div>
          <div className="cafe-exp-pillars__grid">
            {experiences.map((exp) => (
              <div key={exp.title} className="cafe-exp-pillar">
                <span className="cafe-exp-pillar__num">{exp.num}</span>
                <div className="cafe-exp-pillar__line" />
                <span className="urdu cafe-exp-pillar__urdu">{exp.titleUrdu}</span>
                <h3 className="cafe-exp-pillar__title">{exp.title}</h3>
                <p className="cafe-exp-pillar__desc">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="cafe-exp-quotes section-alt">
        <div className="container">
          <div className="section-heading">
            <span className="urdu-title urdu">آراء</span>
            <div className="divider" />
            <span className="eng-title">What Our Guests Say</span>
          </div>
          <div className="cafe-exp-quotes__grid">
            {[
              { text: 'Qissa is the kind of place that makes you fall in love with Urdu all over again. I spent three hours in the literary corner without realizing.', name: 'Ayesha R., Islamabad' },
              { text: 'The mushaira evening was unlike anything I have experienced in a modern café. It felt like being transported to a different era — but with excellent coffee.', name: 'Bilal K., Lahore' },
              { text: 'As a literature student, Qissa feels like home. The calligraphy wall, the books, the dastaan latte — it all fits together perfectly.', name: 'Sana M., NUML' },
            ].map((q) => (
              <div key={q.name} className="cafe-exp-quote">
                <span className="cafe-exp-quote__mark">"</span>
                <p className="cafe-exp-quote__text">{q.text}</p>
                <span className="cafe-exp-quote__name">— {q.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cafe-exp-cta">
        <div className="container">
          <span className="urdu cafe-exp-cta__urdu">آج آئیں</span>
          <h2 className="cafe-exp-cta__heading">Experience Qissa for Yourself</h2>
          <div className="cafe-exp-cta__buttons">
            <Link to="/reservation" className="btn-primary">Reserve a Table</Link>
            <Link to="/menu" className="btn-secondary">View Our Menu</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
