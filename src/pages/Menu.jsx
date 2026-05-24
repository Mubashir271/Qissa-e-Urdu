import { useState } from 'react'
import './Menu.css'

const categories = [
  {
    id: 'signature',
    labelUrdu: 'سگنیچر کافی',
    label: 'Signature Coffees',
    icon: '☕',
    items: [
      { name: 'Dastaan Latte', urdu: 'داستان لاتے', desc: 'A story in every sip — cardamom-infused espresso with silky oat milk and a whisper of rose.', price: 'PKR 650' },
      { name: 'Mehfil Mocha', urdu: 'محفل موکا', desc: 'Rich dark chocolate meets double espresso, crowned with saffron cream and gold dust.', price: 'PKR 700' },
      { name: 'Sukoon Cappuccino', urdu: 'سکون کیپوچینو', desc: 'Velvety steamed milk, bold espresso, and a hint of kewra — peace in a cup.', price: 'PKR 600' },
      { name: 'Riwayat Espresso', urdu: 'روایت ایسپریسو', desc: 'Pure, unadulterated tradition — a double shot of our heritage blend, served black.', price: 'PKR 450' },
    ],
  },
  {
    id: 'traditional',
    labelUrdu: 'روایتی مشروبات',
    label: 'Traditional Drinks',
    icon: '🍵',
    items: [
      { name: 'Kashmiri Chai', urdu: 'کشمیری چائے', desc: 'Pink tea brewed with almonds, cardamom, and a touch of rose petals — straight from Kashmir.', price: 'PKR 550' },
      { name: 'Doodh Patti', urdu: 'دودھ پتی', desc: 'Strong, comforting milk tea simmered the traditional Pakistani way. Simple. Perfect.', price: 'PKR 350' },
      { name: 'Kehwa', urdu: 'قہوہ', desc: 'Afghani-style green tea with cardamom, clove, saffron, and crushed almond garnish.', price: 'PKR 500' },
      { name: 'Rose Milk', urdu: 'گلاب دودھ', desc: 'Chilled milk infused with rose syrup, topped with pistachios and dried rose petals.', price: 'PKR 450' },
    ],
  },
  {
    id: 'desserts',
    labelUrdu: 'مٹھائیاں',
    label: 'Desserts',
    icon: '🍮',
    items: [
      { name: 'Gulab Jamun Cheesecake', urdu: 'گلاب جامن چیز کیک', desc: 'New York style cheesecake with a gulab jamun-infused base and rose reduction glaze.', price: 'PKR 800' },
      { name: 'Elaichi Tres Leches', urdu: 'الائچی ٹریس لیچیس', desc: 'Traditional tres leches elevated with cardamom syrup, topped with saffron cream.', price: 'PKR 750' },
      { name: 'Shahi Tukra', urdu: 'شاہی ٹکڑا', desc: 'Classic Mughal bread pudding with condensed milk, silver leaves, and pistachio.', price: 'PKR 650' },
      { name: 'Coffee Rasmalai', urdu: 'کافی رس ملائی', desc: 'Soft cottage cheese dumplings soaked in espresso-spiked saffron milk. Unique to Qissa.', price: 'PKR 700' },
    ],
  },
  {
    id: 'meals',
    labelUrdu: 'کھانا',
    label: 'Café Meals',
    icon: '🍽️',
    items: [
      { name: 'Chicken Panini', urdu: 'چکن پانینی', desc: 'Grilled chicken with caramelized onion chutney, fresh greens, and melted cheese on artisan bread.', price: 'PKR 1,100' },
      { name: 'Pasta', urdu: 'پاستا', desc: 'Creamy Pakistani-spiced pasta with your choice of white or pink sauce, garnished with herbs.', price: 'PKR 1,050' },
      { name: 'Loaded Fries', urdu: 'لوڈڈ فرائز', desc: 'Crispy fries smothered in spiced cheese sauce, jalapeños, and signature Qissa sauces.', price: 'PKR 750' },
      { name: 'Traditional Fusion Platter', urdu: 'فیوژن پلیٹر', desc: 'A sharing platter of mini samosas, seekh sliders, chaat croquettes, and chutney dips.', price: 'PKR 1,500' },
    ],
  },
]

export default function Menu() {
  const [active, setActive] = useState('signature')

  const current = categories.find((c) => c.id === active)

  return (
    <div className="menu">

      <section className="page-hero" data-watermark="ذائقہ">
        <div className="page-hero-content">
          <span className="urdu-heading urdu">ذائقوں میں تہذیب</span>
          <div className="page-hero-line" />
          <span className="eng-heading">Culture Served on a Plate</span>
        </div>
      </section>

      {/* INTRO */}
      <div className="menu-intro">
        <div className="container">
          <p>
            Every item on our menu is a nod to Urdu culture, named after poetry and tradition,
            crafted with flavours that feel like home.
          </p>
        </div>
      </div>

      {/* TABS */}
      <div className="menu-tabs-wrapper">
        <div className="container">
          <div className="menu-tabs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`menu-tab ${active === cat.id ? 'menu-tab--active' : ''}`}
                onClick={() => setActive(cat.id)}
              >
                <span className="menu-tab__icon">{cat.icon}</span>
                <span className="urdu menu-tab__urdu">{cat.labelUrdu}</span>
                <span className="menu-tab__eng">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ITEMS */}
      <section className="menu-items section">
        <div className="container">
          <div className="menu-category-header">
            <span className="menu-category-icon">{current.icon}</span>
            <div>
              <h2 className="urdu menu-category-urdu">{current.labelUrdu}</h2>
              <h3 className="menu-category-eng">{current.label}</h3>
            </div>
          </div>
          <div className="menu-grid">
            {current.items.map((item) => (
              <div key={item.name} className="menu-item-card">
                <div className="menu-item-card__header">
                  <div>
                    <h4 className="urdu menu-item-card__name-urdu">{item.urdu}</h4>
                    <h5 className="menu-item-card__name">{item.name}</h5>
                  </div>
                  <span className="menu-item-card__price">{item.price}</span>
                </div>
                <div className="menu-item-card__divider" />
                <p className="menu-item-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTE */}
      <div className="menu-note">
        <div className="container">
          <div className="menu-note__inner">
            <span className="urdu menu-note__urdu">نوٹ</span>
            <p>
              All prices are inclusive of taxes. Menu items and prices are subject to seasonal
              availability. Please inform us of any dietary requirements or allergies.
              We also offer a rotating seasonal menu — ask your server for today's specials.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}
