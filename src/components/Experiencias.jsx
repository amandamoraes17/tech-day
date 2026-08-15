import Reveal from './Reveal'
import { GraduationCapIcon, BriefcaseMetalIcon, ChatsTeardropIcon, HandshakeIcon} from "@phosphor-icons/react";
const experiences = [
  {
    title: 'PAINÉIS',
    desc: 'Especialistas e profissionais compartilham experiências, tendências e perspectivas sobre o futuro da tecnologia, do mercado e das carreiras.',
    icon: (<GraduationCapIcon size={32} />),
    color: { accent: 'var(--c-green)' },
    direction: 'left'
  },
  {
    title: 'BUSINESS LOUNGE',
    desc: 'Negócios, inovação e networking',
    icon: (<HandshakeIcon size={32} />),
    color: { accent: 'var(--c-morning)' },
    direction: 'right'
  },
  {
    title: 'ARENA DE EMPREGABILIDADE',
    desc: 'Um espaço para aproximar talentos e empresas, explorar oportunidades e criar conexões que podem transformar o próximo passo da sua carreira.',
    icon: (<BriefcaseMetalIcon size={32} />),
    color: { accent: 'var(--c-afternoon)' },
    direction: 'left'
  },
  {
    title: 'RODAS DE CONVERSA',
    desc: 'Conversas mais próximas e abertas para compartilhar experiências, discutir desafios e descobrir diferentes perspectivas sobre tecnologia e futuro.',
    icon: (<ChatsTeardropIcon size={32} />),
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
            <Reveal
              key={i}
              className={`xp-card ${classMap[e.direction]}`}
              style={{
                '--card-accent': e.color.accent,
                transitionDelay: `${i * 0.12}s`
              }}
            >
              <span className="xp-card__icon">{e.icon}</span>
              <h3 className="xp-card__title">{e.title}</h3>
              <p className="xp-card__desc">{e.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
