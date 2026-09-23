import Reveal from './Reveal'
import { RocketIcon, BriefcaseMetalIcon, ChatsTeardropIcon, HandshakeIcon } from "@phosphor-icons/react";
const experiences = [
  {
    title: 'PAINÉIS',
    cta: 'Oportunidade para seu futuro',
    desc: 'Especialistas e profissionais compartilham experiências, tendências e perspectivas sobre o futuro da tecnologia, do mercado e das carreiras.',
    icon: (<RocketIcon size={32} />),
    btnIcon: (<RocketIcon size={18} weight="bold" />),
    color: { accent: 'var(--c-green)' },
    direction: 'left'
  },
  {
    title: 'BUSINESS LOUNGE',
    cta: 'Leve seu negócio mais longe',
    desc: 'Um espaço para conectar negócios, inovação e novas possibilidades.',
    icon: (<HandshakeIcon size={32} />),
    btnIcon: (<HandshakeIcon size={18} weight="bold" />),
    color: { accent: 'var(--c-morning)' },
    direction: 'right'
  },
  {
    title: 'ARENA DE EMPREGABILIDADE',
    cta: 'O próximo passo da sua carreira',
    desc: 'Um espaço para aproximar talentos e empresas, explorar oportunidades e criar conexões que podem transformar o próximo passo da sua carreira.',
    icon: (<BriefcaseMetalIcon size={32} />),
    btnIcon: (<BriefcaseMetalIcon size={18} weight="bold" />),
    color: { accent: 'var(--c-afternoon)' },
    direction: 'left'
  },
  {
    title: 'RODAS DE CONVERSA',
    cta: 'Compartilhe novas perspectivas',
    desc: 'Conversas mais próximas e abertas para compartilhar experiências, discutir desafios e descobrir diferentes perspectivas sobre tecnologia e futuro.',
    icon: (<ChatsTeardropIcon size={32} />),
    btnIcon: (<ChatsTeardropIcon size={18} weight="bold" />),
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
          <span className="eyebrow">Experiências</span>
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
              <div className="xp-card__visual" aria-hidden="true">
                <span className="xp-card__visual-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="xp-card__visual-icon">{e.icon}</span>
                <span className="xp-card__visual-line xp-card__visual-line--one" />
                <span className="xp-card__visual-line xp-card__visual-line--two" />
              </div>
              <div className="xp-card__body">
                <span className="xp-card__icon">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="xp-card__title">{e.title}</h3>
                <p className="xp-card__desc">{e.desc}</p>
                <div className="xp-card__cta">
                  <button type="button" className="xp-card__btn" aria-label={e.cta || 'Saiba mais'}>
                    {e.btnIcon}
                  </button>
                  <span className="xp-card__cta-text">{e.cta || 'Saiba mais'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
