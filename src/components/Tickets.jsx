import { useRef } from 'react'
import Reveal from './Reveal'

// Feature rows are canonical: same order across all plans.
// Each entry: { label, morning, afternoon, full }
// true = tick, false = dash (not included), string = custom label
const FEATURE_ROWS = [
  { label: 'Palestras e painéis',       morning: true,  afternoon: true,  full: true  },
  { label: 'Mentorias e networking',    morning: true,  afternoon: false, full: true  },
  { label: 'Arena de Empregabilidade',  morning: true,  afternoon: false, full: true  },
  { label: 'Business Lounge',           morning: false, afternoon: true,  full: true  },
  { label: 'Cases e tendências',        morning: false, afternoon: true,  full: true  },
  { label: 'Rodadas de conexão',        morning: false, afternoon: true,  full: true  },
  { label: 'Certificado',               morning: true,  afternoon: true,  full: true  },
]

const PLANS = [
  {
    key: 'morning',
    name: 'Manhã',
    sub: 'Carreira',
    badge: null,
    audience: 'Para talentos, estudantes e profissionais',
    text: 'Entre, cresça ou se reposicione no mercado de tecnologia.',
    variant: 'morning',
    highlight: false,
  },
  {
    key: 'full',
    name: 'Dia',
    sub: 'Completo',
    badge: 'Mais completo',
    audience: 'Uma inscrição para viver tudo',
    text: 'Inscrição única e gratuita. Circule pela programação conforme seu interesse.',
    variant: 'full',
    highlight: true,
  },
  {
    key: 'afternoon',
    name: 'Tarde',
    sub: 'Negócios',
    badge: null,
    audience: 'Para empresas, gestores e empreendedores',
    text: 'Inovação, IA, transformação digital e novas conexões de negócio.',
    variant: 'afternoon',
    highlight: false,
  },
]

function FeatureValue({ active }) {
  if (active) {
    return <i className="fa-solid fa-check ticket__feat-check" aria-label="Incluído" />
  }
  return <span className="ticket__feat-dash" aria-label="Não incluído">—</span>
}

export default function Tickets() {
  const gridRef = useRef(null)

  // Spotlight: track pointer on the grid, write CSS vars directly — no React state, no re-render
  function handlePointerMove(e) {
    const cards = gridRef.current?.querySelectorAll('.ticket')
    cards?.forEach((card) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      card.style.setProperty('--x', `${x}px`)
      card.style.setProperty('--y', `${y}px`)
    })
  }

  function handlePointerLeave() {
    const cards = gridRef.current?.querySelectorAll('.ticket')
    cards?.forEach((card) => {
      card.style.setProperty('--x', `-999px`)
      card.style.setProperty('--y', `-999px`)
    })
  }

  return (
    <section id="inscricao" className="section section--tickets">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Inscrição</span>
          <h2 className="section__title">Uma inscrição. Todas as possibilidades.</h2>
          <p className="section__lead">
            Não existe ingresso diferente por trilha. A inscrição gratuita dá acesso ao CG Tech Day e você escolhe como aproveitar o dia.
          </p>
        </Reveal>

        <div
          ref={gridRef}
          className="tickets tickets--passes"
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
          {PLANS.map((plan) => (
            <Reveal
              key={plan.key}
              className={`ticket ticket--${plan.variant}${plan.highlight ? ' ticket--highlight' : ''}`}
            >
              {plan.badge && (
                <span className="ticket__badge">{plan.badge}</span>
              )}

              <span className="ticket__kicker">Incluído na inscrição</span>

              <div className="ticket__title-group">
                <h3 className="ticket__name">{plan.name}</h3>
                <span className="ticket__name-sub">{plan.sub}</span>
              </div>

              <span className="ticket__price">{plan.audience}</span>
              <p className="ticket__text">{plan.text}</p>

              <ul className="ticket__features">
                {FEATURE_ROWS.map((row) => (
                  <li key={row.label} className={`ticket__feat-row${!row[plan.key] ? ' ticket__feat-row--off' : ''}`}>
                    <FeatureValue active={row[plan.key]} />
                    <span>{row.label}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="tickets__single-cta">
          <div className="tickets__cta-copy">
            <p className="tickets__cta-headline">Garanta sua vaga — é gratuito</p>
            <p className="tickets__cta-sub">Acesso completo ao evento, certificado e networking em um único cadastro.</p>
          </div>
          <a
            href="https://www.sympla.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary tickets__cta-btn"
          >
            <i className="fa-solid fa-ticket" />
            Fazer inscrição gratuita
          </a>
        </Reveal>
      </div>
    </section>
  )
}
