import Reveal from './Reveal'
import { MapPinSimpleIcon, ClockIcon, MapTrifoldIcon, ArrowUpRightIcon } from "@phosphor-icons/react";

export default function Location() {
  return (
    <section id="local" className="section section--location">
      <div className="container">

        {/* Header row */}
        <Reveal className="location__header">
          <div className="location__header-left">
            <span className="eyebrow">Local</span>
            <h2 className="section__title">O Tech Day acontece aqui</h2>
          </div>
          <div className="location__header-right">
            <span className="location__venue-badge">Bioparque Pantanal</span>
            <p className="section__lead">
              Um cenário único para conectar pessoas, ideias e oportunidades em uma experiência que vai muito além do palco.
            </p>
          </div>
        </Reveal>

        {/* Main content grid */}
        <div className="location__body">

          {/* Info cards column */}
          <Reveal className="location__info-col">
            <div className="location__info-cards">
              <div className="location__info-card">
                <span className="location__info-icon-wrap">
                  <MapPinSimpleIcon size={22} weight="fill" />
                </span>
                <div>
                  <span className="location__info-label">Cidade</span>
                  <span className="location__info-value">Campo Grande, MS</span>
                </div>
              </div>

              <div className="location__info-card">
                <span className="location__info-icon-wrap">
                  <ClockIcon size={22} weight="fill" />
                </span>
                <div>
                  <span className="location__info-label">Data e horário</span>
                  <span className="location__info-value">16 de Outubro · 09h às 18h</span>
                </div>
              </div>

              <a
                className="location__info-card location__info-card--link"
                href="https://www.google.com/maps/search/?api=1&query=Bioparque+Pantanal+Campo+Grande+MS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="location__info-icon-wrap location__info-icon-wrap--accent">
                  <MapTrifoldIcon size={22} weight="fill" />
                </span>
                <div>
                  <span className="location__info-label">Navegação</span>
                  <span className="location__info-value">Visualizar rota</span>
                </div>
                <ArrowUpRightIcon size={18} className="location__info-arrow" weight="bold" />
              </a>
            </div>
          </Reveal>

          {/* Photo gallery bento */}
          <Reveal className="location__gallery">
            <div className="location__bento">

              {/* Hero — large left */}
              <div className="location__bento-hero">
                <img
                  src="/assets/bioparque.webp"
                  alt="Fachada do Bioparque Pantanal"
                  loading="lazy"
                />
                <span className="location__photo-tag">Bioparque Pantanal</span>
              </div>

              {/* Right column — 3 stacked crops */}
              <div className="location__bento-side">
                <div className="location__bento-cell location__bento-cell--top">
                  <img
                    src="/assets/bioparque.webp"
                    alt="Entrada do Bioparque Pantanal"
                    loading="lazy"
                  />
                  <span className="location__photo-tag">Entrada</span>
                </div>
                <div className="location__bento-cell location__bento-cell--mid">
                  <img
                    src="/assets/bioparque.webp"
                    alt="Estrutura arquitetônica do Bioparque"
                    loading="lazy"
                  />
                  <span className="location__photo-tag">Estrutura</span>
                </div>
                <div className="location__bento-cell location__bento-cell--bot">
                  <img
                    src="/assets/bioparque.webp"
                    alt="Área externa do Bioparque Pantanal"
                    loading="lazy"
                  />
                  <span className="location__photo-tag">Área externa</span>
                </div>
              </div>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
