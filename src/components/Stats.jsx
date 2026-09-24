import { useEffect, useRef } from 'react'

// Números baseados na capacidade planejada do evento
const STATS = [
  { value: 1,   title: 'Um dia para colocar o futuro em movimento.',                          label: 'Dia' },
  { value: 10,  title: 'Mentores disponíveis para rodadas de orientação profissional.',        label: 'Mentores' },
  { value: 20,  title: 'Atividades entre painéis, workshops e rodas de conversa.',             label: 'Atividades' },
  { value: 9,   title: 'Horas de conteúdo, conexões e experiências ao longo do dia.',          label: 'Horas de evento' },
]

function StatItem({ value, title, label }) {
  return (
    <div className="stat">
      <span className="stat__title">{title}</span>
      <div className="stat__content">
        <span className="stat__value">{value}</span>
        <span className="stat__label">{label}</span>
      </div>
    </div>
  )
}

export default function Stats() {
  const statsRef = useRef(null)

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const block = el.closest('.container--stats') || el
    const statEls = el.querySelectorAll('.stat')

    let targetP = 0
    let currentP = 0
    let raf = 0

    const apply = (p) => {
      el.style.setProperty('--p', p.toFixed(4))

      const n = STATS.length
      const rawIndex = p * (n - 1) + 0.5

      statEls.forEach((stat, i) => {
        const statCenter = i + 0.5
        const dist = rawIndex - statCenter
        const absDist = Math.abs(dist)
        const opacity = absDist < 0.5 ? 1 : 0

        stat.style.setProperty('--so', opacity)
        stat.style.zIndex = opacity ? Math.round((1 - absDist) * 10) : 0
        stat.style.pointerEvents = opacity > 0.01 ? 'auto' : 'none'
      })
    }

    const loop = () => {
      const diff = targetP - currentP
      if (Math.abs(diff) < 0.0003) {
        currentP = targetP
        apply(currentP)
        raf = 0
        return
      }
      currentP += diff * 0.05
      apply(currentP)
      raf = requestAnimationFrame(loop)
    }

    const update = () => {
      const rect = block.getBoundingClientRect()
      const vh = window.innerHeight
      const total = Math.max(rect.height - vh, 1)
      const scrolled = Math.min(Math.max(-rect.top, 0), total)
      targetP = scrolled / total
      if (!raf) raf = requestAnimationFrame(loop)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="section section--stats">
      <div className="container container--stats">
        {/* Não mais aria-hidden — o conteúdo tem significado semântico */}
        <div className="stats-map__intro">
          <span>Mapa do dia</span>
          <strong>Um fluxo entre talentos, empresas e cidade.</strong>
        </div>
        <div className="stats" ref={statsRef} aria-label="Números do evento">
          <span className="stats__arrow" aria-hidden="true" />
          {STATS.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
