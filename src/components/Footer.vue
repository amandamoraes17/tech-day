<script setup>
import {
  PhLinkedinLogo,
  PhInstagramLogo,
  PhWhatsappLogo,
  PhAt,
  PhMapPin,
  PhFileText,
} from '@phosphor-icons/vue'
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">

      <div class="footer__col footer__col--brand">
        <div class="footer__brand">
          <img
            class="footer__realization-logo"
            src="/assets/logo-agetec.png"
            alt="Realização: Agetec"
            width="120"
            height="40"
          />
          <p class="footer__tagline">A tecnologia de Campo Grande em um só dia.</p>
        </div>
      </div>

      <div class="footer__col footer__col--links">
        <h4 class="footer__col-title">Navegação</h4>
        <div class="footer__links">
          <a href="#sobre">Sobre</a>
          <a href="#programacao">Programação</a>
          <a href="#experiencias">Experiências</a>
          <a href="#palestrantes">Palestrantes</a>
          <a href="#inscricao">Inscrição</a>
        </div>
      </div>

      <div class="footer__col footer__col--contact">
        <h4 class="footer__col-title">Contato</h4>
        <ul class="footer__contact">
          <li>
            <PhAt :size="22" aria-hidden="true" />
            <span>contato@cgtechday.com.br</span>
          </li>
          <li>
            <PhMapPin :size="22" aria-hidden="true" />
            <span>Bioparque Pantanal, Campo Grande/MS</span>
          </li>
        </ul>
      </div>

      <div class="footer__col footer__col--talent">
        <h4 class="footer__col-title">Banco de Talentos</h4>
        <a href="#banco-talentos" class="footer__link">
          <PhFileText :size="18" aria-hidden="true" />
          Banco de Talentos
        </a>
      </div>

      <div class="footer__col footer__col--social">
        <h4 class="footer__col-title">Redes sociais</h4>
        <div class="footer__social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram do CG Tech Day">
            <PhInstagramLogo :size="22" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn do CG Tech Day">
            <PhLinkedinLogo :size="22" />
          </a>
          <a href="https://wa.me/5567900000000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp do CG Tech Day">
            <PhWhatsappLogo :size="22" />
          </a>
        </div>
      </div>

    </div>

    <div class="footer__copy">
      <span>© 2026 CG Tech Day · Campo Grande · MS</span>
      <div class="footer__legal">
        <a href="#" class="footer__btn">Política de Privacidade</a>
        <a href="#" class="footer__btn">LGPD</a>
      </div>
    </div>
  </footer>
</template>
