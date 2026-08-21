import Reveal from './Reveal'
import { sponsors } from '../data/content'

const half = Math.ceil(sponsors.length / 2)
const row1 = sponsors.slice(0, half)
const row2 = sponsors.slice(half)

function SponsorLogo({ s }) {
  return (
    <div className="sponsor">
      <img
        className="sponsor__logo"
        src={s.logo}
        alt={s.name}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
          e.currentTarget.parentElement.classList.add('sponsor--text')
        }}
      />
      <span className="sponsor__name">{s.name}</span>
    </div>
  )
}

export default function Sponsors() {
  return (
    <section id="patrocinadores" className="section section--sponsors">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Patrocinadores</span>
          <h2 className="section__title">Parceiros que conectam o futuro</h2>
        </Reveal>

        <div className="sponsors-marquee">
          <div className="sponsors-marquee__row sponsors-marquee__row--left">
            <div className="sponsors-marquee__track">
              {[...row1, ...row1, ...row1].map((s, i) => (
                <SponsorLogo key={`${s.name}-${i}`} s={s} />
              ))}
            </div>
          </div>
          <div className="sponsors-marquee__row sponsors-marquee__row--right">
            <div className="sponsors-marquee__track">
              {[...row2, ...row2, ...row2].map((s, i) => (
                <SponsorLogo key={`${s.name}-${i}`} s={s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
