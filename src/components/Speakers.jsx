import { useState, useEffect, useRef, useCallback } from 'react'
import Reveal from './Reveal'
import { speakers } from '../data/content'

const TRACK = {
  morning: 'Manhã · Carreira',
  afternoon: 'Tarde · Business'
}

const CYCLE_MS = 6000

function getPerPage() {
  if (typeof window === 'undefined') return 4
  if (window.innerWidth <= 768) return 1
  if (window.innerWidth <= 1024) return 3
  return 4
}

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
  const [perPage, setPerPage] = useState(getPerPage)
  const totalPages = Math.ceil(speakers.length / perPage)
  const [page, setPage] = useState(0)
  const [progress, setProgress] = useState(0)
  const [offset, setOffset] = useState(0)
  const rafRef = useRef(null)
  const startRef = useRef(Date.now())
  const viewportRef = useRef(null)

  const doubled = [...speakers, ...speakers]

  useEffect(() => {
    const onResize = () => {
      const newPerPage = getPerPage()
      setPerPage(newPerPage)
      setPage(0)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const computeOffset = useCallback(() => {
    if (!viewportRef.current) return 0
    const w = viewportRef.current.offsetWidth
    return -(page * w)
  }, [page])

  useEffect(() => {
    setOffset(computeOffset())
  }, [page, computeOffset])

  useEffect(() => {
    const onResize = () => setOffset(computeOffset())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [computeOffset])

  useEffect(() => {
    startRef.current = Date.now()

    const tick = () => {
      const elapsed = Date.now() - startRef.current
      const p = Math.min(elapsed / CYCLE_MS, 1)
      setProgress(p)

      if (p >= 1) {
        setPage((prev) => (prev + 1) % totalPages)
        startRef.current = Date.now()
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [totalPages])

  const handleDotClick = (idx) => {
    setPage(idx)
    startRef.current = Date.now()
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

        <div className="speakers-viewport" ref={viewportRef}>
          <div
            className="speakers-track"
            style={{ transform: `translateX(${offset}px)` }}
          >
            {doubled.map((s, i) => (
              <div key={`${s.name}-${i}`} className="speakers-track__item">
                <SpeakerCard s={s} />
              </div>
            ))}
          </div>
        </div>

        <div className="speakers-dots">
          {Array.from({ length: totalPages }).map((_, i) => {
            const isActive = i === page
            return (
              <button
                key={i}
                className={`speakers-dot ${isActive ? 'is-active' : ''}`}
                onClick={() => handleDotClick(i)}
                style={isActive ? { '--dot-progress': `${progress * 100}%` } : undefined}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
