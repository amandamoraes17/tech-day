import { useEffect, useState } from 'react'
import { useScrollSpy } from '../hooks/useScrollSpy'

const NAV_ITEMS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Programação', href: '#programacao' },
  { label: 'Experiências', href: '#experiencias' },
  { label: 'Palestrantes', href: '#palestrantes' },
  { label: 'Local', href: '#local' },
]

export default function Header() {
  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(false)
  const spyIds = NAV_ITEMS.map((i) => i.href.slice(1))
  const activeId = useScrollSpy(spyIds)

  useEffect(() => {
    const onScroll = () => setActive(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${active ? 'is-active' : ''}`}>
      <div className="header__inner">
        <a href="#topo" className="header__logo">
          <span className="header__logo-mark">CG</span>
          <span className="header__logo-text">Tech Day</span>
        </a>

        <nav className={`header__nav ${open ? 'is-open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={activeId === item.href.slice(1) ? 'is-active' : ''}
            >
              {item.label}
            </a>
          ))}
          <a href="#inscricao" className="header__cta" onClick={() => setOpen(false)}>
            Inscreva-se
          </a>
        </nav>

        <button
          className={`header__burger ${open ? 'is-open' : ''}`}
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
