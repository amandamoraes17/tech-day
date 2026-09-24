<script setup>
import Reveal from './Reveal.vue'
import { PhMapPinSimple, PhClock, PhMapTrifold, PhArrowUpRight } from '@phosphor-icons/vue'
</script>

<template>
  <section id="local" class="section section--location">
    <div class="container">

      <Reveal class-name="location__header">
        <div class="location__header-left">
          <span class="eyebrow">Local</span>
          <h2 class="section__title">O Tech Day acontece aqui</h2>
        </div>
        <div class="location__header-right">
          <span class="location__venue-badge">Bioparque Pantanal</span>
          <p class="section__lead">
            Um cenário único para conectar pessoas, ideias e oportunidades em uma
            experiência que vai muito além do palco.
          </p>
        </div>
      </Reveal>

      <div class="location__body">

        <Reveal class-name="location__info-col">
          <div class="location__info-cards">
            <div class="location__info-card">
              <span class="location__info-icon-wrap">
                <PhMapPinSimple :size="22" weight="fill" />
              </span>
              <div>
                <span class="location__info-label">Cidade</span>
                <span class="location__info-value">Campo Grande, MS</span>
              </div>
            </div>

            <div class="location__info-card">
              <span class="location__info-icon-wrap">
                <PhClock :size="22" weight="fill" />
              </span>
              <div>
                <span class="location__info-label">Data e horário</span>
                <span class="location__info-value">16 de Outubro · 09h às 18h</span>
              </div>
            </div>

            <a
              class="location__info-card location__info-card--link"
              href="https://www.google.com/maps/search/?api=1&query=Bioparque+Pantanal+Campo+Grande+MS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="location__info-icon-wrap location__info-icon-wrap--accent">
                <PhMapTrifold :size="22" weight="fill" />
              </span>
              <div>
                <span class="location__info-label">Navegação</span>
                <span class="location__info-value">Visualizar rota</span>
              </div>
              <PhArrowUpRight :size="18" class="location__info-arrow" weight="bold" />
            </a>
          </div>
        </Reveal>

        <Reveal class-name="location__gallery">
          <div class="location__bento">
            <div class="location__bento-hero">
              <img src="/assets/bioparque.webp" alt="Fachada do Bioparque Pantanal" loading="lazy" />
              <span class="location__photo-tag">Bioparque Pantanal</span>
            </div>
            <div class="location__bento-side">
              <div class="location__bento-cell location__bento-cell--top">
                <img src="/assets/bioparque.webp" alt="Entrada do Bioparque Pantanal" loading="lazy" />
                <span class="location__photo-tag">Entrada</span>
              </div>
              <div class="location__bento-cell location__bento-cell--mid">
                <img src="/assets/bioparque.webp" alt="Estrutura arquitetônica do Bioparque" loading="lazy" />
                <span class="location__photo-tag">Estrutura</span>
              </div>
              <div class="location__bento-cell location__bento-cell--bot">
                <img src="/assets/bioparque.webp" alt="Área externa do Bioparque Pantanal" loading="lazy" />
                <span class="location__photo-tag">Área externa</span>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  </section>
</template>
