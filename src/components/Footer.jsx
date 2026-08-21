
import { useState } from 'react'
import { LinkedinLogoIcon  , InstagramLogoIcon  , WhatsappLogoIcon, PhoneIcon, AtIcon, MapPinIcon, FileTextIcon  } from "@phosphor-icons/react";
import CurriculumModal from './CurriculumModal'


export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__col footer__col--brand">
          <div className="footer__brand">
            <img className="footer__realization-logo" src="/assets/logo-agetec.png" alt="Realização" />
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
            <li><AtIcon size={22} weight="regular"/> contato@cgtechday.com.br</li>
            <li><PhoneIcon size={22} weight="regular"/> (67) 3000-0000</li>
            <li><MapPinIcon size={22} weight="regular"/> Bioparque Pantanal</li>
          </ul>
        </div>

        <div className="footer__col footer__col--talent">
          <h4 className="footer__col-title">Banco de Talentos</h4>
          <button type="button" className="footer__link" onClick={() => setModalOpen(true)}>
            <FileTextIcon size={18} weight="regular" />
            Enviar meu currículo
          </button>
        </div>

        <div className="footer__col footer__col--social">
          <h4 className="footer__col-title">Redes sociais</h4>
          <div className="footer__social">
            <a href="#" aria-label="Instagram"><InstagramLogoIcon size={22} weight="regular" /></a>
            <a href="#" aria-label="LinkedIn"><LinkedinLogoIcon size={22} weight="regular" /></a>
            <a href="#" aria-label="WhatsApp"><WhatsappLogoIcon size={22} weight="regular" /></a>
          </div>
          <a href="#inscricao" className="btn btn--primary footer__cta">Inscreva-se</a>
        </div>
      </div>

      <div className="footer__copy">
        <span>© 2026 CG Tech Day · Campo Grande · MS</span>
        <div className="footer__legal">
          <a href="#" className="footer__btn">Política de Privacidade</a>
          <a href="#" className="footer__btn">LGPD</a>
        </div>
      </div>

      <CurriculumModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </footer>
  )
}
