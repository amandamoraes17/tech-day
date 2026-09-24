import { useCountdown } from '../hooks/useCountdown'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const { days, hours, minutes, seconds } = useCountdown()
  const videoRef = useRef(null)

  // Pausa o vídeo se o usuário preferir movimento reduzido
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const applyMotionPref = () => {
      if (mq.matches) {
        video.pause()
      } else {
        video.play().catch(() => {}) // Silencia erros de autoplay policy
      }
    }

    applyMotionPref()
    mq.addEventListener('change', applyMotionPref)
    return () => mq.removeEventListener('change', applyMotionPref)
  }, [])

  return (
    <section id="topo" className="hero">
      {/*
        Otimizações aplicadas:
        - poster="/assets/hero-bg.jpg" → exibe imagem estática imediatamente, antes do vídeo carregar (evita flash preto e melhora LCP)
        - preload="none" → não baixa o vídeo antes do usuário precisar; o poster já cobre a tela
        - fetchpriority="low" → vídeo tem baixa prioridade, conteúdo crítico carrega primeiro
        - playsInline → obrigatório para autoplay no iOS (evita fullscreen forçado)
        - muted → obrigatório para autoplay em todos os navegadores
        - tabIndex={-1} + aria-hidden → invisível para leitores de tela
      */}
      <video
        ref={videoRef}
        className="hero__bg-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/hero-bg.jpg"
        preload="none"
        // @ts-ignore — fetchpriority é atributo HTML5 válido
        fetchpriority="low"
        tabIndex={-1}
        aria-hidden="true"
      >
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="hero__dim" />

      <div className="hero__content">
        <div className="hero__eyebrow-row" aria-label="Destaques do evento">
          <span>Evento gratuito</span>
          <span>Vagas limitadas</span>
          <span>Certificado</span>
        </div>

        <h1 className="hero__title">
          CG Tech<br />Day 2026
        </h1>

        <div className="hero__subrow">
          <p className="hero__subtitle">
            Um encontro para quem quer entrar, crescer e decidir os próximos movimentos da tecnologia em Campo Grande.
          </p>

          <div className="hero__subactions">
            <div className="hero__actions">
              <a href="#inscricao" className="btn btn--primary">Inscreva-se</a>
              <a href="#programacao" className="btn btn--ghost">Ver programação</a>
            </div>
            <div className="hero__countdown">
              <div className="countdown">
                <span className="countdown__eyebrow">Faltam para o evento</span>
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
                <span className="countdown__date">16 de Outubro de 2026 · Bioparque Pantanal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
