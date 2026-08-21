import { useCountdown } from '../hooks/useCountdown'

export default function Hero() {
  const { days, hours, minutes, seconds } = useCountdown()

  return (
    <section id="topo" className="hero">
      <video className="hero__bg-video" autoPlay muted loop playsInline poster="">
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="hero__dim" />

      <div className="hero__content">
        <h1 className="hero__title">
          A tecnologia de Campo Grande<br />tem um dia só dela.
        </h1>

        <div className="hero__subrow">
          <p className="hero__subtitle">
            Pela manhã, profissionais crescendo na carreira. À tarde, empresas e
            negócios se conectando. Um dia, duas jornadas, um ecossistema.
          </p>
          <div className="hero__subactions">
            <div className="hero__actions">
              <a href="#inscricao" className="btn btn--primary">Garantir minha vaga</a>
              <a href="#programacao" className="btn btn--ghost">Ver programação</a>
            </div>
            <div className="hero__countdown">
              <div className="countdown">
                <span className="countdown__eyebrow">Faltam</span>
                <div className="countdown__units">
                  <div className="countdown__unit">
                    <span className="countdown__value">{String(days).padStart(2, '0')}</span>
                    <span className="countdown__label">Dias</span>
                  </div>
                  <div className="countdown__unit">
                    <span className="countdown__value">{String(hours).padStart(2, '0')}</span>
                    <span className="countdown__label">Horas</span>
                  </div>
                  <div className="countdown__unit">
                    <span className="countdown__value">{String(minutes).padStart(2, '0')}</span>
                    <span className="countdown__label">Min</span>
                  </div>
                  <div className="countdown__unit">
                    <span className="countdown__value countdown__value--seg" key={seconds}>
                      {String(seconds).padStart(2, '0')}
                    </span>
                    <span className="countdown__label">Seg</span>
                  </div>
                </div>
                <div className="countdown__track">
                  <span className="countdown__node" />
                  <span className="countdown__node" />
                  <span className="countdown__node" />
                  <span className="countdown__node countdown__node--pulse" />
                </div>
                <span className="countdown__date"> 16 de Outubro de 2026 . Bioparque Pantanal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
