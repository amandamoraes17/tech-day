<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useCountdown } from '../composables/useCountdown'

const time    = useCountdown()
const videoEl = ref(null)

const pad = n => String(n).padStart(2, '0')

let mq, mqListener

onMounted(() => {
  const video = videoEl.value
  if (!video) return
  mq = window.matchMedia('(prefers-reduced-motion: reduce)')
  mqListener = () => { mq.matches ? video.pause() : video.play().catch(() => {}) }
  mqListener()
  mq.addEventListener('change', mqListener)
})

onUnmounted(() => mq?.removeEventListener('change', mqListener))
</script>

<template>
  <section id="topo" class="hero">
    <video
      ref="videoEl"
      class="hero__bg-video"
      autoplay
      muted
      loop
      playsinline
      poster="/assets/hero-bg.jpg"
      preload="none"
      fetchpriority="low"
      tabindex="-1"
      aria-hidden="true"
    >
      <source src="/assets/hero-video.mp4" type="video/mp4" />
    </video>
    <div class="hero__dim" />

    <div class="hero__content">
      <div class="hero__eyebrow-row" aria-label="Destaques do evento">
        <span>Evento gratuito</span>
        <span>Vagas limitadas</span>
        <span>Certificado</span>
      </div>

      <h1 class="hero__title">CG Tech<br />Day 2026</h1>

      <div class="hero__subrow">
        <p class="hero__subtitle">
          Um encontro para quem quer entrar, crescer e decidir os próximos movimentos da tecnologia em Campo Grande.
        </p>

        <div class="hero__subactions">
          <div class="hero__actions">
            <a href="#inscricao" class="btn btn--primary">Inscreva-se</a>
            <a href="#programacao" class="btn btn--ghost">Ver programação</a>
          </div>

          <div class="hero__countdown">
            <div class="countdown">
              <span class="countdown__eyebrow">Faltam para o evento</span>
              <div class="countdown__units">
                <div class="countdown__unit">
                  <span class="countdown__value">{{ pad(time.days) }}</span>
                  <span class="countdown__label">Dias</span>
                </div>
                <div class="countdown__unit">
                  <span class="countdown__value">{{ pad(time.hours) }}</span>
                  <span class="countdown__label">Horas</span>
                </div>
                <div class="countdown__unit">
                  <span class="countdown__value">{{ pad(time.minutes) }}</span>
                  <span class="countdown__label">Min</span>
                </div>
                <div class="countdown__unit">
                  <span :key="time.seconds" class="countdown__value countdown__value--seg">
                    {{ pad(time.seconds) }}
                  </span>
                  <span class="countdown__label">Seg</span>
                </div>
              </div>
              <div class="countdown__track">
                <span class="countdown__node" />
                <span class="countdown__node" />
                <span class="countdown__node" />
                <span class="countdown__node countdown__node--pulse" />
              </div>
              <span class="countdown__date">16 de Outubro de 2026 · Bioparque Pantanal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
