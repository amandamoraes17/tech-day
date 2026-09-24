<script setup>
import Reveal from './Reveal.vue'
import { PhRocket, PhHandshake, PhBriefcase, PhChatsTeardrop } from '@phosphor-icons/vue'

const experiences = [
  {
    title:     'Painéis',
    cta:       'Oportunidade para seu futuro',
    desc:      'Especialistas e profissionais compartilham experiências, tendências e perspectivas sobre o futuro da tecnologia, do mercado e das carreiras.',
    icon:      PhRocket,
    accent:    'var(--c-green)',
    direction: 'left',
  },
  {
    title:     'Business Lounge',
    cta:       'Leve seu negócio mais longe',
    desc:      'Um espaço para conectar negócios, inovação e novas possibilidades.',
    icon:      PhHandshake,
    accent:    'var(--c-morning)',
    direction: 'right',
  },
  {
    title:     'Arena de Empregabilidade',
    cta:       'O próximo passo da sua carreira',
    desc:      'Um espaço para aproximar talentos e empresas, explorar oportunidades e criar conexões que podem transformar o próximo passo da sua carreira.',
    icon:      PhBriefcase,
    accent:    'var(--c-afternoon)',
    direction: 'left',
  },
  {
    title:     'Rodas de Conversa',
    cta:       'Compartilhe novas perspectivas',
    desc:      'Conversas mais próximas e abertas para compartilhar experiências, discutir desafios e descobrir diferentes perspectivas sobre tecnologia e futuro.',
    icon:      PhChatsTeardrop,
    accent:    'var(--c-base)',
    direction: 'right',
  },
]
</script>

<template>
  <section id="experiencias" class="section xp">
    <div class="container">
      <Reveal class-name="section__head">
        <h2 class="section__title">Muito além do palco</h2>
        <p class="section__lead">
          Descubra diferentes formas de aprender, conectar-se e encontrar novas
          oportunidades no CG Tech Day.
        </p>
      </Reveal>

      <div class="xp-grid">
        <div
          v-for="(e, i) in experiences"
          :key="i"
          :class="`xp-card xp-card--${e.direction}`"
          :style="{ '--card-accent': e.accent }"
        >
          <div class="xp-card__visual" aria-hidden="true">
            <span class="xp-card__visual-icon">
              <component :is="e.icon" :size="32" />
            </span>
            <span class="xp-card__visual-line xp-card__visual-line--one" />
            <span class="xp-card__visual-line xp-card__visual-line--two" />
          </div>

          <div class="xp-card__body">
            <h3 class="xp-card__title">{{ e.title }}</h3>
            <p class="xp-card__desc">{{ e.desc }}</p>
            <div class="xp-card__cta">
              <a
                href="#inscricao"
                class="xp-card__btn"
                :aria-label="`${e.cta} — inscreva-se no CG Tech Day`"
              >
                <component :is="e.icon" :size="18" weight="bold" />
              </a>
              <span class="xp-card__cta-text">{{ e.cta }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
