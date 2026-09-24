<script setup>
import Reveal from './Reveal.vue'

const CARDS = [
  {
    variant: 'morning',
    tag:     'Manhã',
    title:   'Tech Carreiras',
    text:    'Uma manhã dedicada às pessoas, às novas profissões e às competências que serão essenciais para o mercado de trabalho.',
    seeks:   ['Carreira', 'Conhecimento', 'Oportunidades'],
    icon:    '☀',
    delay:   0,
  },
  {
    variant: 'afternoon',
    tag:     'Tarde',
    title:   'Tech Business',
    text:    'Uma tarde dedicada a tendências, soluções e oportunidades que aproximam empresas, inovação e transformação digital.',
    seeks:   ['Parcerias', 'Networking', 'Negócios'],
    icon:    '◆',
    delay:   120,
  },
]
</script>

<template>
  <section id="sobre" class="section section--sobre">
    <div class="container">
      <Reveal class-name="section__head">
        <h2 class="section__title">Um dia. Dois caminhos. Você escolhe o seu.</h2>
        <p class="section__lead">
          O CG Tech Day conecta pessoas, conhecimento e oportunidades em torno das
          transformações que estão moldando o futuro da tecnologia em Campo Grande.
        </p>
      </Reveal>

      <div class="journey-split" aria-label="Dois momentos do CG Tech Day">
        <Reveal
          v-for="card in CARDS"
          :key="card.variant"
          :delay="card.delay"
          :class-name="`journey-panel journey-panel--${card.variant}`"
        >
          <span class="journey-panel__time">{{ card.tag }}</span>
          <div class="journey-panel__marker" aria-hidden="true">{{ card.icon }}</div>
          <h3 class="journey-panel__title">{{ card.title }}</h3>
          <p class="journey-panel__text">{{ card.text }}</p>
          <div class="journey-panel__seeks">
            <span class="journey-panel__label">Para você que busca</span>
            <div class="journey-panel__tags">
              <span v-for="s in card.seeks" :key="s" class="journey-panel__pill">{{ s }}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
</template>
