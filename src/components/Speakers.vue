<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import Reveal from './Reveal.vue'
import { speakers } from '../data/content'

const TRACK = { morning: 'Manhã · Carreira', afternoon: 'Tarde · Negócios' }
const CYCLE_MS = 6000

const PHOTO_SEEDS = [
  'speaker-ana-beatriz-techms',
  'speaker-carlos-mendes-cto',
  'speaker-juliana-souza-talent',
  'speaker-rafael-lima-hub',
  'speaker-mariana-costa-data',
  'speaker-pedro-alves-innovation',
  'speaker-fernanda-rocha-ceo',
  'speaker-lucas-oliveira-tech',
]

function getPerPage() {
  if (typeof window === 'undefined') return 4
  if (window.innerWidth <= 768)  return 1
  if (window.innerWidth <= 1024) return 3
  return 4
}

const perPage        = ref(getPerPage())
const page           = ref(0)
const progressDisplay= ref(0)
const viewportEl     = ref(null)
const offset         = ref(0)

const totalPages = computed(() => Math.ceil(speakers.length / perPage.value))
const doubled    = [...speakers, ...speakers]

const prefersReduced =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Compute offset from page + viewport width
function computeOffset() {
  if (!viewportEl.value) return 0
  return -(page.value * viewportEl.value.offsetWidth)
}

watch([page, perPage], () => { offset.value = computeOffset() })

// Resize
const onResize = () => {
  perPage.value = getPerPage()
  page.value    = 0
  offset.value  = computeOffset()
}

// Auto-advance
let rafId
let startMs
let lastDisplayUpdate = 0

function tick() {
  const elapsed = Date.now() - startMs
  const p = Math.min(elapsed / CYCLE_MS, 1)

  const now = Date.now()
  if (now - lastDisplayUpdate > 100) {
    progressDisplay.value = p
    lastDisplayUpdate = now
  }

  if (p >= 1) {
    page.value  = (page.value + 1) % totalPages.value
    startMs     = Date.now()
  }
  rafId = requestAnimationFrame(tick)
}

function dotClick(idx) {
  page.value           = idx
  startMs              = Date.now()
  progressDisplay.value = 0
}

onMounted(() => {
  window.addEventListener('resize', onResize, { passive: true })
  offset.value = computeOffset()
  if (!prefersReduced) {
    startMs = Date.now()
    rafId   = requestAnimationFrame(tick)
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<template>
  <section id="palestrantes" class="section section--speakers">
    <div class="container">
      <Reveal class-name="section__head">
        <span class="eyebrow">Palestrantes</span>
        <h2 class="section__title">Quem faz o CG Tech Day acontecer</h2>
        <p class="section__lead">
          Profissionais e empreendedores que estão construindo o ecossistema de tecnologia
          em Mato Grosso do Sul.
        </p>
      </Reveal>

      <div ref="viewportEl" class="speakers-viewport">
        <div
          class="speakers-track"
          :style="{ transform: `translateX(${offset}px)` }"
        >
          <div
            v-for="(s, i) in doubled"
            :key="`${s.name}-${i}`"
            class="speakers-track__item"
          >
            <article :class="`speaker speaker--${s.period}`">
              <div class="speaker__photo">
                <img
                  :src="`https://picsum.photos/seed/${PHOTO_SEEDS[i % PHOTO_SEEDS.length]}/320/320`"
                  :alt="s.name"
                />
                <span class="speaker__tag">{{ TRACK[s.period] }}</span>
              </div>
              <div class="speaker__body">
                <h3 class="speaker__name">{{ s.name }}</h3>
                <span class="speaker__meta">{{ s.role }} · {{ s.org }}</span>
                <p class="speaker__text">{{ s.bio }}</p>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div class="speakers-dots" role="tablist" aria-label="Páginas de palestrantes">
        <button
          v-for="(_, i) in totalPages"
          :key="i"
          :class="['speakers-dot', i === page && 'is-active']"
          role="tab"
          :aria-selected="i === page"
          :aria-label="`Página ${i + 1} de palestrantes`"
          :style="i === page ? { '--dot-progress': `${progressDisplay * 100}%` } : undefined"
          @click="dotClick(i)"
        />
      </div>
    </div>
  </section>
</template>
