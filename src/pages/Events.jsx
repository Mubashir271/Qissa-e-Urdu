import { Link } from 'react-router-dom'
import './Events.css'

const upcomingEvents = [
  {
    date: { day: '06', month: 'Jun', year: '2025' },
    titleUrdu: 'ماہانہ مشاعرہ',
    title: 'Monthly Mushaira',
    type: 'Poetry Night',
    time: '7:00 PM – 10:00 PM',
    desc: 'An evening of classical and contemporary Urdu poetry. Poets from across Islamabad perform their latest works in the grand mushaira tradition.',
    slots: 'Limited seats available',
    color: '#331516',
  },
  {
    date: { day: '14', month: 'Jun', year: '2025' },
    titleUrdu: 'اوپن مائیک',
    title: 'Open Mic Night',
    type: 'Open Mic',
    time: '6:30 PM – 9:30 PM',
    desc: 'Our beloved bi-weekly open mic. Share your poetry, ghazals, nazms, or short prose. All skill levels welcome — every voice matters.',
    slots: 'Walk-ins welcome',
    color: '#4a1f20',
  },
  {
    date: { day: '20', month: 'Jun', year: '2025' },
    titleUrdu: 'خطاطی ورکشاپ',
    title: 'Calligraphy Workshop',
    type: 'Workshop',
    time: '4:00 PM – 7:00 PM',
    desc: 'Learn the ancient art of Nastaliq calligraphy with master calligrapher Ustad Tariq Ahmad. All materials provided. Beginners welcome.',
    slots: '12 seats only',
    color: '#331516',
  },
  {
    date: { day: '28', month: 'Jun', year: '2025' },
    titleUrdu: 'کتاب لانچ',
    title: 'Book Launch & Reading',
    type: 'Literary Event',
    time: '5:00 PM – 8:00 PM',
    desc: 'A special evening celebrating the launch of "شبِ رواں" by Islamabad-based poet Hina Shahid, followed by a Q&A and book signing.',
    slots: 'Registration required',
    color: '#4a1f20',
  },
]

const regularEvents = [
  {
    icon: '🎙️',
    titleUrdu: 'اوپن مائیک',
    title: 'Open Mic Nights',
    frequency: 'Every other Friday',
    desc: 'A platform for poets, writers, and spoken word artists to share their work in an intimate setting.',
  },
  {
    icon: '🖋️',
    titleUrdu: 'خطاطی نشست',
    title: 'Live Calligraphy Sessions',
    frequency: 'First Saturday of each month',
    desc: 'Watch master calligraphers create art live while enjoying your coffee. Sometimes participatory.',
  },
  {
    icon: '📚',
    titleUrdu: 'ادبی شام',
    title: 'Urdu Poetry Evenings',
    frequency: 'Monthly',
    desc: 'Structured mushaira-style evenings with curated poets and audience participation.',
  },
  {
    icon: '🌙',
    titleUrdu: 'داستان گوئی',
    title: 'Storytelling Sessions',
    frequency: 'Every Sunday',
    desc: 'Traditional dastaan-goyi — long-form oral storytelling in the classical Urdu tradition.',
  },
  {
    icon: '📖',
    titleUrdu: 'کتاب کلب',
    title: 'Book Club Meetings',
    frequency: 'Bi-monthly',
    desc: 'A reading circle for Urdu fiction, non-fiction, and poetry with guided discussion.',
  },
  {
    icon: '🎓',
    titleUrdu: 'اردو کلاس',
    title: 'Urdu Language Classes',
    frequency: 'Weekends',
    desc: 'Beginner and intermediate Urdu language and script classes for those wishing to reconnect.',
  },
]

export default function Events() {
  return (
    <div className="events">

      <section className="page-hero" data-watermark="محفل">
        <div className="page-hero-content">
          <span className="urdu-heading urdu">محفلیں اور تقریبات</span>
          <div className="page-hero-line" />
          <span className="eng-heading">Events & Gatherings</span>
        </div>
      </section>

      {/* UPCOMING */}
      <section className="events-upcoming section">
        <div className="container">
          <div className="section-heading">
            <span className="urdu-title urdu">آنے والی محفلیں</span>
            <div className="divider" />
            <span className="eng-title">Upcoming Events</span>
          </div>
          <div className="events-upcoming__list">
            {upcomingEvents.map((ev) => (
              <div key={ev.title} className="events-card">
                <div className="events-card__date">
                  <span className="events-card__day">{ev.date.day}</span>
                  <span className="events-card__month">{ev.date.month}</span>
                  <span className="events-card__year">{ev.date.year}</span>
                </div>
                <div className="events-card__body">
                  <div className="events-card__meta">
                    <span className="events-card__type">{ev.type}</span>
                    <span className="events-card__time">{ev.time}</span>
                  </div>
                  <h3 className="urdu events-card__title-urdu">{ev.titleUrdu}</h3>
                  <h4 className="events-card__title">{ev.title}</h4>
                  <p className="events-card__desc">{ev.desc}</p>
                </div>
                <div className="events-card__action">
                  <span className="events-card__slots">{ev.slots}</span>
                  <Link to="/reservation" className="btn-primary">Reserve Seat</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGULAR EVENTS */}
      <section className="events-regular section-alt">
        <div className="container">
          <div className="section-heading">
            <span className="urdu-title urdu">باقاعدہ محفلیں</span>
            <div className="divider" />
            <span className="eng-title">Regular Programmes</span>
          </div>
          <div className="events-regular__grid">
            {regularEvents.map((ev) => (
              <div key={ev.title} className="events-regular__card">
                <span className="events-regular__icon">{ev.icon}</span>
                <div className="events-regular__content">
                  <h3 className="urdu events-regular__title-urdu">{ev.titleUrdu}</h3>
                  <h4 className="events-regular__title">{ev.title}</h4>
                  <span className="events-regular__freq">{ev.frequency}</span>
                  <p className="events-regular__desc">{ev.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIVATE EVENTS */}
      <section className="events-private">
        <div className="container">
          <div className="events-private__inner">
            <div className="events-private__text">
              <span className="urdu events-private__urdu">نجی تقریبات</span>
              <h2>Host Your Private Event at Qissa</h2>
              <p>
                Book our space for mushairas, book launches, university literary festivals,
                corporate cultural evenings, wedding ceremonies, and more.
                Our team handles décor, catering, and event management.
              </p>
              <ul className="events-private__list">
                {['Mushairas & Poetry Evenings', 'Book Launches & Signings', 'Cultural Workshops', 'University Gatherings', 'Corporate Events', 'Private Dining'].map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link to="/reservation" className="btn-primary">Enquire About Private Events</Link>
            </div>
            <div className="events-private__visual">
              <div className="events-private__box">
                <span className="urdu events-private__box-text">محفل</span>
                <div className="events-private__box-content">
                  <div className="events-private__stat">
                    <span>Up to</span>
                    <strong>100</strong>
                    <span>Guests</span>
                  </div>
                  <div className="events-private__stat">
                    <span>Full</span>
                    <strong>AV</strong>
                    <span>Setup</span>
                  </div>
                  <div className="events-private__stat">
                    <span>Custom</span>
                    <strong>Menu</strong>
                    <span>Options</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
