import Reveal from './Reveal'

const CARDS = [
  {
    variant: 'morning',
    tag: 'Manhã',
    title: 'Tech Carreiras',
    text: 'Uma manhã dedicada às pessoas, às novas profissões e às competências que serão essenciais para o mercado de trabalho.',
    seeks: ['Carreira', 'Conhecimento', 'Oportunidades'],
    icon: '☀',
  },
  {
    variant: 'afternoon',
    tag: 'Tarde',
    title: 'Tech Business',
    text: 'Uma tarde dedicada a tendências, soluções e oportunidades que aproximam empresas, inovação e transformação digital.',
    seeks: ['Parcerias', 'Networking', 'Negócios'],
    icon: '◆',
  }
]

export default function Sobre() {
  return (
    <section id="sobre" className="section section--sobre">
      <div className="container">
        <Reveal className="section__head">
          <h2 className="section__title">Um dia. Dois caminhos. Você escolhe o seu.</h2>
          <p className="section__lead">
            O CG Tech Day conecta pessoas, conhecimento e oportunidades em torno das transformações que estão moldando o futuro da tecnologia em Campo Grande.
          </p>
        </Reveal>

        <div className="journey-split" aria-label="Dois momentos do CG Tech Day">
          {CARDS.map((card, i) => (
            <Reveal key={card.variant} delay={i * 120} className={`journey-panel journey-panel--${card.variant}`}>
              <span className="journey-panel__time">{card.tag}</span>
              <div className="journey-panel__marker" aria-hidden="true">{card.icon}</div>
              <h3 className="journey-panel__title">{card.title}</h3>
              <p className="journey-panel__text">{card.text}</p>
              <div className="journey-panel__seeks">
                <span className="journey-panel__label">Para você que busca</span>
                <div className="journey-panel__tags">
                  {card.seeks.map((s) => (
                    <span key={s} className="journey-panel__pill">{s}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
