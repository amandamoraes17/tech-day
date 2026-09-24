<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const STATS = [
  { value: 1,  title: 'Um dia para colocar o futuro em movimento.',                       label: 'Dia' },
  { value: 10, title: 'Mentores disponíveis para rodadas de orientação profissional.',     label: 'Mentores' },
  { value: 20, title: 'Atividades entre painéis, workshops e rodas de conversa.',          label: 'Atividades' },
  { value: 9,  title: 'Horas de conteúdo, conexões e experiências ao longo do dia.',       label: 'Horas de evento' },
]

const statsEl = ref(null)
let raf = 0
let targetP = 0
let currentP = 0

function apply(p) {
  const el = statsEl.value
  if (!el) return
  el.style.setProperty('--p', p.toFixed(4))
  const n = STATS.length
  const rawIndex = p * (n - 1) + 0.5
  el.querySelectorAll('.stat').forEach((stat, i) => {
    const dist    = rawIndex - (i + 0.5)
    const opacity = Math.abs(dist) < 0.5 ? 1 : 0
    stat.style.setProperty('--so', opacity)
    stat.style.zIndex       = opacity ? Math.round((1 - Math.abs(dist)) * 10) : 0
    stat.style.pointerEvents = opacity > 0.01 ? 'auto' : 'none'
  })
}

function loop() {
  const diff = targetP - currentP
  if (Math.abs(diff) < 0.0003) {
    currentP = targetP
    apply(currentP)
    raf = 0
    return
  }
  currentP += diff * 0.05
  apply(currentP)
  raf = requestAnimationFrame(loop)
}

function update() {
  const el = statsEl.value
  if (!el) return
  const block = el.closest('.container--stats') || el
  const rect  = block.getBoundingClientRect()
  const total = Math.max(rect.height - window.innerHeight, 1)
  targetP = Math.min(Math.max(-rect.top, 0), total) / total
  if (!raf) raf = requestAnimationFrame(loop)
}

onMounted(() => {
  update()
  window.addEventListener('scroll', update, { passive: true })
  window.addEventListener('resize', update, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', update)
  window.removeEventListener('resize', update)
  if (raf) cancelAnimationFrame(raf)
})
</script>

<template>
  <section class="section section--stats">
    <div class="container container--stats">
      <div class="stats-map__intro">
        <span>Mapa do dia</span>
        <strong>Um fluxo entre talentos, empresas e cidade.</strong>
      </div>
      <div ref="statsEl" class="stats" aria-label="Números do evento">
        <span class="stats__arrow" aria-hidden="true" />
        <div v-for="s in STATS" :key="s.label" class="stat">
          <span class="stat__title">{{ s.title }}</span>
          <div class="stat__content">
            <span class="stat__value">{{ s.value }}</span>
            <span class="stat__label">{{ s.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
