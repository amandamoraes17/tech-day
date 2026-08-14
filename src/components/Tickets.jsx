import Reveal from './Reveal'

const PLANS = [
  {
    name: 'Tech Careers',
    price: 'Carreira, pessoas e futuro do trabalho',
    text: 'Uma trilha dedicada a estudantes e profissionais que querem se conectar, aprender e encontrar novas oportunidades na tecnologia',
    features: ['Palestras e conteúdos', 'Mentorias rápidas', 'Networking de carreira','Certificado'],
    cta: 'Inscrever-se',
    variant: 'morning'
  },
  {
    name: 'Tech Business',
    price: 'Negócios, inovação e conexões',
    text: 'Uma trilha para empresas, empreendedores e profissionais que buscam novas conexões, parcerias e oportunidades de negócio.',
    features: ['Palestras e conteúdos', 'Business Lounge', 'Networkingo','Pitch de negócios'],
    cta: 'Inscrever-se',
    variant: 'afternoon',
    highlight: true
  },
  {
    name: 'Full Day',
    price: 'Viva o CG Tech Day por completo',
    text: 'Participe das duas trilhas e aproveite toda a programação, experiências e oportunidades de conexão do evento.',
    features: ['Tech Careers + Tech Business', 'Acesso à programação completa', 'Todas as experiências','Certificado'],
    cta: 'Inscrever-se',
    variant: 'full'
  }
]

export default function Tickets() {
  return (
    <section id="inscricao" className="section section--tickets">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Inscrição</span>
          <h2 className="section__title">Escolha como viver o CG Tech Day</h2>
          <p className="section__lead">
            Inscreva-se no maior dia da tecnologia em Campo Grande.
          </p>
        </Reveal>

        <div className="tickets">
          {PLANS.map((plan) => (
            <Reveal key={plan.name} className={`ticket ticket--${plan.variant} ${plan.highlight ? 'ticket--highlight' : ''}`}>
              <h3 className="ticket__name">{plan.name}</h3>
              <span className="ticket__price">{plan.price}</span>
              <p className="ticket__text">{plan.text}</p>
              <ul className="ticket__features">
                {plan.features.map((f) => (
                  <li key={f}><i className="fa-solid fa-check" /> {f}</li>
                ))}
              </ul>
              <a href="#" className="btn btn--primary ticket__cta">{plan.cta}</a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
