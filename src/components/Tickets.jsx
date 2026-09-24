import { useRef } from 'react'
import Reveal from './Reveal'

// Features apresentadas de forma positiva — sem colunas de check/dash
const MORNING_FEATURES = [
  'Palestras e painéis de carreira',
  'Mentorias rápidas 1:1',
  'Arena de Empregabilidade',
  'Certificado de participação',
  'Networking com profissionais de tecnologia',
]

const AFTERNOON_FEATURES = [
  'Palestras e painéis de negócios',
  'Business Lounge',
  'Cases de inovação e IA',
  'Rodadas de conexão entre empresas',
  'Certificado de participação',
]

const FULL_FEATURES = [
  'Acesso completo às duas trilhas',
  'Mentorias, painéis e workshops',
  'Arena de Empregabilidade + Business Lounge',
  'Rodadas de conexão e networking',
  'Certificado de participação',
]

const PLANS = [
  {
    key: 'morning',
    name: 'Manhã',
    sub: 'Carreira',
    badge: null,
    audience: 'Estudantes e profissionais em desenvolvimento',
    text: 'Entre, cresça ou se reposicione no mercado de tecnologia.',
    variant: 'morning',
    highlight: false,
    features: MORNING_FEATURES,
    time: '09h – 12h',
  },
  {
    key: 'full',
    name: 'Dia Completo',
    sub: null,
    badge: 'Recomendado',
    audience: 'Para quem quer aproveitar tudo',
    text: 'Uma inscrição gratuita. Circule pela programação conforme seu interesse.',
    variant: 'full',
    highlight: true,
    features: FULL_FEATURES,
    time: '09h – 18h',
  },
  {
    key: 'afternoon',
    name: 'Tarde',
    sub: 'Negócios',
    badge: null,
    audience: 'Empresas, gestores e empreendedores',
    text: 'Inovação, IA, transformação digital e novas conexões de negócio.',
    variant: 'afternoon',
    highlight: false,
    features: AFTERNOON_FEATURES,
    time: '14h – 18h',
  },
]

export default function Tickets() {
  const gridRef = useRef(null)

  // Spotlight: rastreia ponteiro nos cards via CSS vars — sem state React
  function handlePointerMove(e) {
    const cards = gridRef.current?.querySelectorAll('.ticket')
    cards?.forEach((card) => {
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--x', `${e.clientX - rect.left}px`)
      card.style.setProperty('--y', `${e.clientY - rect.top}px`)
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
            O CG Tech Day é gratuito. Escolha a trilha que combina com você ou participe do dia inteiro.
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

              <div className="ticket__title-group">
                <h3 className="ticket__name">{plan.name}</h3>
                {plan.sub && <span className="ticket__name-sub">{plan.sub}</span>}
              </div>

              <span className="ticket__time">{plan.time}</span>
              <span className="ticket__price">{plan.audience}</span>
              <p className="ticket__text">{plan.text}</p>

              <ul className="ticket__features">
                {plan.features.map((feat) => (
                  <li key={feat} className="ticket__feat-row">
                    <i className="fa-solid fa-check ticket__feat-check" aria-hidden="true" />
                    <span>{feat}</span>
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
            <i className="fa-solid fa-ticket" aria-hidden="true" />
            Inscreva-se
          </a>
        </Reveal>
      </div>
    </section>
  )
}
