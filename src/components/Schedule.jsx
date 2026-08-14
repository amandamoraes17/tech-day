import { useState } from 'react'
import Reveal from './Reveal'
import { morningTrack, afternoonTrack } from '../data/content'
import { RocketLaunchIcon  , BriefcaseMetalIcon  } from "@phosphor-icons/react";

export default function Schedule() {
  const [period, setPeriod] = useState('morning')
  const track = period === 'morning' ? morningTrack : afternoonTrack

  return (
    <section id="programacao" className="section section--schedule">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Programação</span>
          <h2 className="section__title">O que rola no dia?</h2>
          <p className="section__lead">
            Veja o cronograma. A manhã é para carreira, ea tarde é para negócios.
          </p>
        </Reveal>

        <div className="schedule__grid">
          <div className="schedule__media">
            <video
              className="schedule__video"
              autoPlay
              muted
              loop
              playsInline
              poster="/assets/hero-bg.jpg"
            >
              <source src="/assets/max.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="schedule__content">
            <div className="segmented" role="tablist" aria-label="Período">
              <div className={`segmented__track segmented__track--${period}`} />
              <button
                className={`segmented__btn ${period === 'morning' ? 'is-active' : ''}`}
                onClick={() => setPeriod('morning')}
                role="tab"
                aria-selected={period === 'morning'}
              >
                <RocketLaunchIcon className="segmented__icon segmented__icon--morning" size={18} weight="regular" />
                <span className="segmented__name">Manhã</span>
              </button>
              <button
                className={`segmented__btn ${period === 'afternoon' ? 'is-active' : ''}`}
                onClick={() => setPeriod('afternoon')}
                role="tab"
                aria-selected={period === 'afternoon'}
              >
                <BriefcaseMetalIcon className="segmented__icon segmented__icon--afternoon" size={18} weight="regular" />
                <span className="segmented__name">Tarde</span>
              </button>
            </div>

            <div className={`segmented__info segmented__info--${period}`}>
              <span className="segmented__info-tag">
                {period === 'morning' ? 'Carreira & Desenvolvimento' : 'Negócios & Parcerias'}
              </span>
              <span className="segmented__info-time">
                {period === 'morning' ? '09h – 12h' : '14h – 18h'}
              </span>
            </div>

            <div className={`schedule__list schedule__list--${period}`}>
              {track.map((item, i) => {
                const [h, m] = item.time.split(':').map(Number)
                const ampm = h < 12 ? 'AM' : 'PM'
                const hr = h % 12 || 12
                const timeLabel = `${String(hr).padStart(2, '0')}:${String(m).padStart(2, '0')} ${ampm}`
                return (
                  <Reveal key={`${period}-${i}`} className="schedule__item">
                    <span className="schedule__time-tag">{timeLabel}</span>
                    <h3 className="schedule__title">{item.title}</h3>
                    <span className="schedule__subtitle">{item.tag}</span>
                    <p className="schedule__desc">{item.desc}</p>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
