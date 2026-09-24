import Reveal from './Reveal'
import { RocketIcon, BriefcaseMetalIcon, ChatsTeardropIcon, HandshakeIcon } from "@phosphor-icons/react"

const experiences = [
  {
    title: 'Painéis',
    cta: 'Oportunidade para seu futuro',
    desc: 'Especialistas e profissionais compartilham experiências, tendências e perspectivas sobre o futuro da tecnologia, do mercado e das carreiras.',
    icon: <RocketIcon size={32} />,
    btnIcon: <RocketIcon size={18} weight="bold" />,
    color: { accent: 'var(--c-green)' },
    direction: 'left'
  },
  {
    title: 'Business Lounge',
    cta: 'Leve seu negócio mais longe',
    desc: 'Um espaço para conectar negócios, inovação e novas possibilidades.',
    icon: <HandshakeIcon size={32} />,
    btnIcon: <HandshakeIcon size={18} weight="bold" />,
    color: { accent: 'var(--c-morning)' },
    direction: 'right'
  },
  {
    title: 'Arena de Empregabilidade',
    cta: 'O próximo passo da sua carreira',
    desc: 'Um espaço para aproximar talentos e empresas, explorar oportunidades e criar conexões que podem transformar o próximo passo da sua carreira.',
    icon: <BriefcaseMetalIcon size={32} />,
    btnIcon: <BriefcaseMetalIcon size={18} weight="bold" />,
    color: { accent: 'var(--c-afternoon)' },
    direction: 'left'
  },
  {
    title: 'Rodas de Conversa',
    cta: 'Compartilhe novas perspectivas',
    desc: 'Conversas mais próximas e abertas para compartilhar experiências, discutir desafios e descobrir diferentes perspectivas sobre tecnologia e futuro.',
    icon: <ChatsTeardropIcon size={32} />,
    btnIcon: <ChatsTeardropIcon size={18} weight="bold" />,
    color: { accent: 'var(--c-base)' },
    direction: 'right'
  }
]

const classMap = {
  left: 'xp-card--left',
  right: 'xp-card--right'
}

export default function Experiencias() {
  return (
    <section id="experiencias" className="section xp">
      <div className="container">
        <Reveal className="section__head">
          <h2 className="section__title">Muito além do palco</h2>
          <p className="section__lead">
            Descubra diferentes formas de aprender, conectar-se e encontrar novas
            oportunidades no CG Tech Day.
          </p>
        </Reveal>

        <div className="xp-grid">
          {experiences.map((e, i) => (
            <div
              key={i}
              className={`xp-card ${classMap[e.direction]}`}
              style={{ '--card-accent': e.color.accent }}
            >
              {/* Área visual — decorativa, sem numeração duplicada */}
              <div className="xp-card__visual" aria-hidden="true">
                <span className="xp-card__visual-icon">{e.icon}</span>
                <span className="xp-card__visual-line xp-card__visual-line--one" />
                <span className="xp-card__visual-line xp-card__visual-line--two" />
              </div>

              <div className="xp-card__body">
                <h3 className="xp-card__title">{e.title}</h3>
                <p className="xp-card__desc">{e.desc}</p>
                <div className="xp-card__cta">
                  <a
                    href="#inscricao"
                    className="xp-card__btn"
                    aria-label={`${e.cta} — inscreva-se no CG Tech Day`}
                  >
                    {e.btnIcon}
                  </a>
                  <span className="xp-card__cta-text">{e.cta}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
