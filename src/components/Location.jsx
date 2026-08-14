import Reveal from './Reveal'
import { MapPinSimpleIcon , ClockIcon , MapTrifoldIcon } from "@phosphor-icons/react";
export default function Location() {
  return (
    <section id="local" className="section section--location">
      <div className="container">
        <div className="location">
          <Reveal className="location__text">
            <span className="eyebrow">Local</span>
            <h2 className="section__title">O Tech Day acontece aqui</h2>
            <h4 className='sesection__title'>Bioparque Pantanal</h4>
            <p className="section__lead">
              Um cenário único para conectar pessoas, ideias e oportunidades em uma experiência que vai muito além do palco.
            </p>
            <ul className="location__info">
              <li><MapPinSimpleIcon className='location-icon' size={26} weight="regular" /> Campo Grande, MS</li>
              <li><ClockIcon className='location-icon'size={26} weight="regular"/> 16 de Outubro · 09h às 18h</li>
              <li>
                <a className="location__route" href="https://www.google.com/maps/search/?api=1&query=Bioparque+Pantanal+Campo+Grande+MS" target="_blank" rel="noopener noreferrer">
                  <MapTrifoldIcon className='location-icon' size={26} weight="regular"/> Visualizar rota
                </a>
              </li>
              
            </ul>
          </Reveal>

          <Reveal className="location__map">
            <img
              className="location__photo"
              src="/assets/bioparque.webp"
              alt="Bioparque Pantanal - local do Tech Day"
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
