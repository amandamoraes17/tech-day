import { useState, useEffect, useRef, useCallback } from 'react'
import Reveal from './Reveal'
import { speakers } from '../data/content'

const TRACK = {
  morning: 'Manhã · Carreira',
  afternoon: 'Tarde · Negócios'
}

const CYCLE_MS = 6000

// Placeholders únicos por speaker usando Picsum com seeds descritivos
const PHOTO_SEEDS = [
  'speaker-ana-beatriz-techms',
  'speaker-carlos-mendes-cto',
  'speaker-juliana-souza-talent',
  'speaker-rafael-lima-hub',
  'speaker-mariana-costa-data',
  'speaker-pedro-alves-innovation',
  'speaker-fernanda-rocha-ceo',
  'speaker-lucas-oliveira-tech',
]

function getPerPage() {
  if (typeof window === 'undefined') return 4
  if (window.innerWidth <= 768) return 1
  if (window.innerWidth <= 1024) return 3
  return 4
}

function SpeakerCard({ s, photoSeed }) {
  const photoUrl = `https://picsum.photos/seed/${photoSeed}/320/320`

  return (
    <article className={`speaker speaker--${s.period}`}>
      <div className="speaker__photo">
        <img src={photoUrl} alt={s.name} />
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
  // Progress como ref para não causar re-render a cada frame
  const progressRef = useRef(0)
  const [progressDisplay, setProgressDisplay] = useState(0)
  const [offset, setOffset] = useState(0)
  const rafRef = useRef(null)
  const startRef = useRef(Date.now())
  const viewportRef = useRef(null)

  // Respeita prefers-reduced-motion
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const doubled = [...speakers, ...speakers]

  useEffect(() => {
    const onResize = () => {
      setPerPage(getPerPage())
      setPage(0)
    }
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const computeOffset = useCallback(() => {
    if (!viewportRef.current) return 0
    return -(page * viewportRef.current.offsetWidth)
  }, [page])

  useEffect(() => {
    setOffset(computeOffset())
  }, [page, computeOffset])

  useEffect(() => {
    const onResize = () => setOffset(computeOffset())
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [computeOffset])

  // Auto-avanço: usa ref para progress, só chama setState na virada de página
  // ou a cada ~100ms para atualizar o indicador visual — não a cada frame
  useEffect(() => {
    if (prefersReduced) return

    startRef.current = Date.now()
    let lastDisplayUpdate = 0

    const tick = () => {
      const elapsed = Date.now() - startRef.current
      const p = Math.min(elapsed / CYCLE_MS, 1)
      progressRef.current = p

      // Atualiza display apenas a cada 100ms para evitar re-renders por frame
      const now = Date.now()
      if (now - lastDisplayUpdate > 100) {
        setProgressDisplay(p)
        lastDisplayUpdate = now
      }

      if (p >= 1) {
        setPage((prev) => (prev + 1) % totalPages)
        startRef.current = Date.now()
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [totalPages, prefersReduced])

  const handleDotClick = (idx) => {
    setPage(idx)
    startRef.current = Date.now()
    setProgressDisplay(0)
  }

  return (
    <section id="palestrantes" className="section section--speakers">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Palestrantes</span>
          <h2 className="section__title">Quem faz o Tech Day acontecer</h2>
          <p className="section__lead">
            Profissionais e empreendedores que estão construindo o ecossistema de tecnologia em Mato Grosso do Sul.
          </p>
        </Reveal>

        <div className="speakers-viewport" ref={viewportRef}>
          <div
            className="speakers-track"
            style={{ transform: `translateX(${offset}px)` }}
          >
            {doubled.map((s, i) => (
              <div key={`${s.name}-${i}`} className="speakers-track__item">
                <SpeakerCard s={s} photoSeed={PHOTO_SEEDS[i % PHOTO_SEEDS.length]} />
              </div>
            ))}
          </div>
        </div>

        <div className="speakers-dots" role="tablist" aria-label="Páginas de palestrantes">
          {Array.from({ length: totalPages }).map((_, i) => {
            const isActive = i === page
            return (
              <button
                key={i}
                className={`speakers-dot ${isActive ? 'is-active' : ''}`}
                onClick={() => handleDotClick(i)}
                role="tab"
                aria-selected={isActive}
                aria-label={`Página ${i + 1} de palestrantes`}
                style={isActive ? { '--dot-progress': `${progressDisplay * 100}%` } : undefined}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
