<script setup>
import Reveal from './Reveal.vue'

const SPONSORS = [
  { name: 'GitHub',     logoUrl: 'https://cdn.simpleicons.org/github/23262F',              url: '#' },
  { name: 'Google',     logoUrl: 'https://cdn.simpleicons.org/google/23262F',              url: '#' },
  { name: 'AWS',        logoUrl: 'https://cdn.simpleicons.org/amazonwebservices/23262F',   url: '#' },
  { name: 'Microsoft',  logoUrl: 'https://cdn.simpleicons.org/microsoft/23262F',           url: '#' },
  { name: 'Figma',      logoUrl: 'https://cdn.simpleicons.org/figma/23262F',               url: '#' },
  { name: 'Notion',     logoUrl: 'https://cdn.simpleicons.org/notion/23262F',              url: '#' },
  { name: 'Vercel',     logoUrl: 'https://cdn.simpleicons.org/vercel/23262F',              url: '#' },
  { name: 'Cloudflare', logoUrl: 'https://cdn.simpleicons.org/cloudflare/23262F',          url: '#' },
]

const tripled = [...SPONSORS, ...SPONSORS, ...SPONSORS]

function onImgError(e, name) {
  const abbr = name.slice(0, 2).toUpperCase()
  e.target.outerHTML = `<span class="sponsor__mark" aria-label="${name}">${abbr}</span>`
}
</script>

<template>
  <section id="patrocinadores" class="section section--sponsors">
    <div class="container">
      <Reveal class-name="section__head">
        <h2 class="section__title">Apoio e realização</h2>
      </Reveal>

      <div class="sponsors-marquee">
        <div class="sponsors-marquee__row">
          <div class="sponsors-marquee__track">
            <a
              v-for="(s, i) in tripled"
              :key="`${s.name}-${i}`"
              :href="s.url"
              class="sponsor"
              :aria-label="s.name"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="sponsor__logo"
                :src="s.logoUrl"
                :alt="s.name"
                width="120"
                height="40"
                loading="lazy"
                @error="e => onImgError(e, s.name)"
              />
            </a>
          </div>
        </div>
      </div>

      <Reveal class-name="sponsors__cta">
        <p class="sponsors__cta-text">Quer apoiar o CG Tech Day?</p>
        <a href="mailto:contato@cgtechday.com.br" class="btn btn--secondary">
          Fale com a gente
        </a>
      </Reveal>
    </div>
  </section>
</template>
