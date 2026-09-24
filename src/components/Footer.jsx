import {
  LinkedinLogoIcon,
  InstagramLogoIcon,
  WhatsappLogoIcon,
  AtIcon,
  MapPinIcon,
  FileTextIcon,
} from '@phosphor-icons/react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">

        <div className="footer__col footer__col--brand">
          <div className="footer__brand">
            <img
              className="footer__realization-logo"
              src="/assets/logo-agetec.png"
              alt="Realização: Agetec"
              width="120"
              height="40"
            />
            <p className="footer__tagline">A tecnologia de Campo Grande em um só dia.</p>
          </div>
        </div>

        <div className="footer__col footer__col--links">
          <h4 className="footer__col-title">Navegação</h4>
          <div className="footer__links">
            <a href="#sobre">Sobre</a>
            <a href="#programacao">Programação</a>
            <a href="#experiencias">Experiências</a>
            <a href="#palestrantes">Palestrantes</a>
            <a href="#inscricao">Inscrição</a>
          </div>
        </div>

        <div className="footer__col footer__col--contact">
          <h4 className="footer__col-title">Contato</h4>
          <ul className="footer__contact">
            <li>
              <AtIcon size={22} weight="regular" aria-hidden="true" />
              {/* Substitua pelo e-mail real antes de publicar */}
              <span>contato@cgtechday.com.br</span>
            </li>
            <li>
              <MapPinIcon size={22} weight="regular" aria-hidden="true" />
              <span>Bioparque Pantanal, Campo Grande/MS</span>
            </li>
          </ul>
        </div>

        <div className="footer__col footer__col--talent">
          <h4 className="footer__col-title">Banco de Talentos</h4>
          <a href="#banco-talentos" className="footer__link">
            <FileTextIcon size={18} weight="regular" aria-hidden="true" />
            Banco de Talentos
          </a>
        </div>

        <div className="footer__col footer__col--social">
          <h4 className="footer__col-title">Redes sociais</h4>
          <div className="footer__social">
            {/* Substitua os href pelas URLs reais antes de publicar */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram do CG Tech Day">
              <InstagramLogoIcon size={22} weight="regular" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn do CG Tech Day">
              <LinkedinLogoIcon size={22} weight="regular" />
            </a>
            <a href="https://wa.me/5567900000000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp do CG Tech Day">
              <WhatsappLogoIcon size={22} weight="regular" />
            </a>
          </div>
        </div>

      </div>

      <div className="footer__copy">
        <span>© 2026 CG Tech Day · Campo Grande · MS</span>
        <div className="footer__legal">
          <a href="#" className="footer__btn">Política de Privacidade</a>
          <a href="#" className="footer__btn">LGPD</a>
        </div>
      </div>
    </footer>
  )
}
