import { useCountdown } from '../hooks/useCountdown'

function CountdownBox({ value, label }) {
  return (
    <div className="countdown__box">
      <span className="countdown__value">{String(value).padStart(2, '0')}</span>
      <span className="countdown__label">{label}</span>
    </div>
  )
}

export default function Hero() {
  const { days, hours, minutes, seconds } = useCountdown()

  return (
    <section id="topo" className="hero">
      <div className="hero-video" />
      {<video className="hero__bg-video" autoPlay muted loop playsInline poster="">
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </video> }
      <div className="hero__dim" />

      <div className="hero__content">
        <span className="hero__badge">Campo Grande · MS · 16 de Outubro de 2026</span>

        <h1 className="hero__title">
          A tecnologia de Mato Grosso do Sul<br />tem um dia só dela.
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
                <CountdownBox value={days} label="Dias" />
                <CountdownBox value={hours} label="Horas" />
                <CountdownBox value={minutes} label="Min" />
                <CountdownBox value={seconds} label="Seg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
