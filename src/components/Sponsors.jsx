import Reveal from './Reveal'
import { sponsors } from '../data/content'

export default function Sponsors() {
  return (
    <section id="patrocinadores" className="section section--sponsors">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Patrocinadores</span>
          <h2 className="section__title">Parceiros que conectam o futuro</h2>
        </Reveal>

        <div className="sponsors">
          <div className="sponsors__track">
            {[...sponsors, ...sponsors].map((s, i) => (
              <div key={`${s.name}-${i}`} className="sponsor">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
