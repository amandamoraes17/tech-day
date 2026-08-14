import Reveal from './Reveal'
import { GraduationCapIcon, BriefcaseMetalIcon, ChatsTeardropIcon, HandshakeIcon} from "@phosphor-icons/react";
const experiences = [
  {
    idx: '01',
    title: 'PAINÉIS',
    desc: 'Especialistas e profissionais compartilham experiências, tendências e perspectivas sobre o futuro da tecnologia, do mercado e das carreiras.',
    icon: (<GraduationCapIcon size={32} />),
    tags: ['TECNOLOGIA', 'TENDÊNCIAS', 'MERCADO','ESPECIALISTAS'],
    color: { bg: '#d9dfd8', border: '#6BCB3C', accent: '#3AA022',  tagText: '#2B7A15' },
    direction: 'left'
  },
  {
    idx: '02',
    title: 'BUSINESS LOUNGE',
    desc: 'Negócios, inovação e networking',
    icon: (<HandshakeIcon size={32} />),
    tags: ['NEGÓCIOS', 'INOVAÇÃO', 'NETWORKING','PARCERIAS'],
    color: { bg: '#F3EEFF', border: '#8B5CF6', accent: '#7C3AED', tagText: '#6D28D9' },
    direction: 'right'
  },
  {
    idx: '03',
    title: 'ARENA DE EMPREGABILIDADE',
    desc: 'Um espaço para aproximar talentos e empresas, explorar oportunidades e criar conexões que podem transformar o próximo passo da sua carreira.',
    icon: (<BriefcaseMetalIcon  size={32}/>),
    tags: ['CARREIRA', 'OPORTUNIDADES', 'TALENTOS','CONEXÕES'],
    color: { bg: '#FFF4EB', border: '#F59E0B', accent: '#D97706', tagText: '#B45309' },
    direction: 'left'
  },
  {
    idx: '04',
    title: 'RODAS DE CONVERSA',
    desc: 'Conversas mais próximas e abertas para compartilhar experiências, discutir desafios e descobrir diferentes perspectivas sobre tecnologia e futuro.',
   icon: (<ChatsTeardropIcon size={32} />),
    tags: ['EXPERIÊNCIAS', 'DEBATES', 'COMUNIDADE','FUTURO'],
    color: { bg: '#E8F8FE', border: '#0EA5E9', accent: '#0284C7', tagText: '#0369A1' },
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
                '--card-bg': e.color.bg,
                '--card-border': e.color.border,
                '--card-accent': e.color.accent,
                '--tag-bg': e.color.tagBg,
                '--tag-text': e.color.tagText,
                transitionDelay: `${i * 0.12}s`
              }}
            >
              <span className="xp-card__idx">{e.idx}</span>
              <span className="xp-card__icon">{e.icon}</span>
              <h3 className="xp-card__title">{e.title}</h3>
              <p className="xp-card__desc">{e.desc}</p>
              <div className="xp-card__tags">
                {e.tags.map((t) => (
                  <span key={t} className="xp-card__tag">{t}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
