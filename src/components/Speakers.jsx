import { useEffect, useRef } from 'react'
import Reveal from './Reveal'
import { speakers } from '../data/content'

const TRACK = {
  morning: 'Manhã · Carreira',
  afternoon: 'Tarde · Business'
}

const SPEED = 0.05
const TWEEN_MS = 850

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

function SpeakerCard({ s }) {
  return (
    <article className={`speaker speaker--${s.period}`}>
      <div className="speaker__photo">
        {s.photo ? (
          <img src={s.photo} alt={s.name} />
        ) : (
          s.name.split(' ').map((n) => n[0]).join('')
        )}
        <span className="speaker__tag">{TRACK[s.period]}</span>
      </div>
      <div className="speaker__body">
        <h3 className="speaker__name">{s.name}</h3>
        <span className="speaker__meta">{s.role} · {s.org}</span>
        <p className="speaker__text">{s.bio}</p>
      </div>
    </article>
  )
}

export default function Speakers() {
  const N = speakers.length
  const trackRef = useRef(null)
  const posRef = useRef(0)
  const stepRef = useRef(0)
  const tweenRef = useRef(null)
  const animRef = useRef(null)
  const lastRef = useRef(0)
  const pausedRef = useRef(false)

  useEffect(() => {
    const measure = () => {
      const t = trackRef.current
      if (t && t.firstElementChild) {
        const gap = parseFloat(getComputedStyle(t).gap) || 0
        stepRef.current = t.firstElementChild.offsetWidth + gap
      }
    }
    measure()
    window.addEventListener('resize', measure)

    const tick = (now) => {
      const dt = now - (lastRef.current || now)
      lastRef.current = now
      let pos = posRef.current

      if (tweenRef.current) {
        tweenRef.current.progress += dt
        const p = Math.min(tweenRef.current.progress / TWEEN_MS, 1)
        pos = tweenRef.current.from + (tweenRef.current.target - tweenRef.current.from) * easeInOutCubic(p)
        if (p >= 1) {
          pos = tweenRef.current.target
          tweenRef.current = null
        }
      } else if (!pausedRef.current) {
        pos += SPEED * dt
      }

      const setWidth = N * stepRef.current
      if (setWidth > 0) {
        const nextPos = ((pos % setWidth) + setWidth) % setWidth
        pos = pos >= setWidth ? nextPos : pos
      }

      posRef.current = pos
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${pos}px)`
      }
      animRef.current = requestAnimationFrame(tick)
    }

    animRef.current = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', measure)
    }
  }, [N])

  const stepTo = (dir) => {
    const s = stepRef.current
    if (!s) return
    const setWidth = N * s
    const target = ((Math.round(posRef.current / s) + dir) * s % setWidth + setWidth) % setWidth
    tweenRef.current = { from: posRef.current, target, progress: 0 }
  }

  return (
    <section id="palestrantes" className="section section--speakers">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Palestrantes</span>
          <h2 className="section__title">Quem vai estar lá</h2>
          <p className="section__lead">
            Profissionais e empreendedores que estão movendo a tecnologia.
          </p>
        </Reveal>

        <div
          className="speakers-carousel"
          onMouseEnter={() => { pausedRef.current = true }}
          onMouseLeave={() => { pausedRef.current = false }}
        >
          <button
            className="speakers-carousel__btn speakers-carousel__btn--prev"
            aria-label="Anterior"
            onClick={() => stepTo(-1)}
          >
            <i className="fa-solid fa-arrow-left" />
          </button>

          <div className="speakers-carousel__viewport">
            <div className="speakers-track" ref={trackRef}>
              {speakers.map((s) => (
                <SpeakerCard key={s.name} s={s} />
              ))}
              {speakers.map((s) => (
                <SpeakerCard key={`dup-${s.name}`} s={s} />
              ))}
            </div>
          </div>

          <button
            className="speakers-carousel__btn speakers-carousel__btn--next"
            aria-label="Próximo"
            onClick={() => stepTo(1)}
          >
            <i className="fa-solid fa-arrow-right" />
          </button>
        </div>
      </div>
    </section>
  )
}