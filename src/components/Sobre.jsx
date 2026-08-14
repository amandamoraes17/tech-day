import Reveal from './Reveal'

const CARDS = [
  {
    variant: 'morning',
    tag: 'Manhã ',
    title: 'Tech Carreiras',
    text: 'Uma manhã dedicada às pessoas, às novas profissões e às competências que serão essenciais para o mercado de trabalho.',
    seeks: ['Carreira', 'Conhecimento', 'Oportunidades']
  },
  {
    variant: 'afternoon',
    tag: 'Tarde',
    title: 'Tech Business',
    text: 'Uma tarde dedicada a tendências, soluções e oportunidades que aproximam empresas, inovação e transformação digital.',
    seeks: ['Parcerias', 'Networking', 'Negócios']
  }
]

export default function Sobre() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Sobre o evento</span>
          <h2 className="section__title">Um encontro. Dois momentos. Novas possibilidades.</h2>
          <p className="section__lead">
           O CG Tech Day nasce para conectar pessoas, conhecimento e oportunidades em torno das transformações que estão moldando o futuro da tecnologia em Campo Grande.
          </p>
        </Reveal>

        <div className="cards">
          {CARDS.map((card) => (
            <Reveal key={card.variant} className={`card card--${card.variant}`}>
              <span className="card__tag">{card.tag}</span>
              <h3 className="card__title">{card.title}</h3>
              <p className="card__text">{card.text}</p>
              <div className="card__seeks">
                <span className="card__seeks-label">Para você que busca:</span>
                <div className="card__seeks-tags">
                  {card.seeks.map((s) => (
                    <span key={s} className="card__pill">{s}</span>
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
