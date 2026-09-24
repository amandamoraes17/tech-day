<script setup>
import { ref } from 'vue'
import Reveal from './Reveal.vue'

const MORNING_FEATURES = [
  'Palestras e painéis de carreira',
  'Mentorias rápidas 1:1',
  'Arena de Empregabilidade',
  'Certificado de participação',
  'Networking com profissionais de tecnologia',
]
const AFTERNOON_FEATURES = [
  'Palestras e painéis de negócios',
  'Business Lounge',
  'Cases de inovação e IA',
  'Rodadas de conexão entre empresas',
  'Certificado de participação',
]
const FULL_FEATURES = [
  'Acesso completo às duas trilhas',
  'Mentorias, painéis e workshops',
  'Arena de Empregabilidade + Business Lounge',
  'Rodadas de conexão e networking',
  'Certificado de participação',
]

const PLANS = [
  { key: 'morning',   name: 'Manhã',        sub: 'Carreira',  badge: null,        audience: 'Estudantes e profissionais em desenvolvimento', text: 'Entre, cresça ou se reposicione no mercado de tecnologia.',                         highlight: false, features: MORNING_FEATURES,   time: '09h – 12h' },
  { key: 'full',      name: 'Dia Completo', sub: null,        badge: 'Recomendado',audience: 'Para quem quer aproveitar tudo',                text: 'Uma inscrição gratuita. Circule pela programação conforme seu interesse.',          highlight: true,  features: FULL_FEATURES,      time: '09h – 18h' },
  { key: 'afternoon', name: 'Tarde',        sub: 'Negócios',  badge: null,        audience: 'Empresas, gestores e empreendedores',            text: 'Inovação, IA, transformação digital e novas conexões de negócio.',                  highlight: false, features: AFTERNOON_FEATURES, time: '14h – 18h' },
]

const gridEl = ref(null)

function onPointerMove(e) {
  gridEl.value?.querySelectorAll('.ticket').forEach(card => {
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--x', `${e.clientX - rect.left}px`)
    card.style.setProperty('--y', `${e.clientY - rect.top}px`)
  })
}
function onPointerLeave() {
  gridEl.value?.querySelectorAll('.ticket').forEach(card => {
    card.style.setProperty('--x', '-999px')
    card.style.setProperty('--y', '-999px')
  })
}
</script>

<template>
  <section id="inscricao" class="section section--tickets">
    <div class="container">
      <Reveal class-name="section__head">
        <span class="eyebrow">Inscrição</span>
        <h2 class="section__title">Uma inscrição. Todas as possibilidades.</h2>
        <p class="section__lead">
          O CG Tech Day é gratuito. Escolha a trilha que combina com você ou participe do dia inteiro.
        </p>
      </Reveal>

      <div
        ref="gridEl"
        class="tickets tickets--passes"
        @pointermove="onPointerMove"
        @pointerleave="onPointerLeave"
      >
        <Reveal
          v-for="plan in PLANS"
          :key="plan.key"
          :class-name="`ticket ticket--${plan.key}${plan.highlight ? ' ticket--highlight' : ''}`"
        >
          <span v-if="plan.badge" class="ticket__badge">{{ plan.badge }}</span>

          <div class="ticket__title-group">
            <h3 class="ticket__name">{{ plan.name }}</h3>
            <span v-if="plan.sub" class="ticket__name-sub">{{ plan.sub }}</span>
          </div>

          <span class="ticket__time">{{ plan.time }}</span>
          <span class="ticket__price">{{ plan.audience }}</span>
          <p class="ticket__text">{{ plan.text }}</p>

          <ul class="ticket__features">
            <li v-for="feat in plan.features" :key="feat" class="ticket__feat-row">
              <i class="fa-solid fa-check ticket__feat-check" aria-hidden="true" />
              <span>{{ feat }}</span>
            </li>
          </ul>
        </Reveal>
      </div>

      <Reveal class-name="tickets__single-cta">
        <div class="tickets__cta-copy">
          <p class="tickets__cta-headline">Garanta sua vaga — é gratuito</p>
          <p class="tickets__cta-sub">Acesso completo ao evento, certificado e networking em um único cadastro.</p>
        </div>
        <a
          href="https://www.sympla.com.br"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn--primary tickets__cta-btn"
        >
          <i class="fa-solid fa-ticket" aria-hidden="true" />
          Inscreva-se
        </a>
      </Reveal>
    </div>
  </section>
</template>
