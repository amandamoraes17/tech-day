import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 1,   label: 'Dia' },
  { value: 10,  label: 'Mentores' },
  { value: 30,  label: 'Palestras' },
  { value: 12,  label: 'horas de evento' }
]

function useCountUp(target) {
  const [val, setVal] = useState(0)
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        setVisible(true)
        const duration = 1400
        const start = performance.now()
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setVal(Math.round(eased * target))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.4 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return [ref, val, visible]
}

function StatItem({ value, suffix, label }) {
  const [ref, val, visible] = useCountUp(value)
  return (
    <div ref={ref} className={`stat reveal ${visible ? 'visible' : ''}`.trim()}>
      <span className="stat__value">{val}{suffix}</span>
      <span className="stat__label">{label}</span>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="section section--stats">
      <div className="container">
        <div className="stats">
          {STATS.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
