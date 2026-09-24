<script setup>
import { ref, computed } from 'vue'
import Reveal from './Reveal.vue'
import { morningTrack, afternoonTrack } from '../data/content'
import { PhRocketLaunch, PhBriefcase } from '@phosphor-icons/vue'

const period = ref('morning')
const track  = computed(() => period.value === 'morning' ? morningTrack : afternoonTrack)

function formatTime(time) {
  const [h, m] = time.split(':')
  return m === '00' ? `${h}h` : `${h}h${m}`
}
</script>

<template>
  <section id="programacao" class="section section--schedule">
    <div class="container">
      <Reveal class-name="section__head">
        <h2 class="section__title">O que rola no dia?</h2>
        <p class="section__lead">
          A manhã é para carreira. A tarde é para negócios. Você decide como aproveitar.
        </p>
      </Reveal>

      <div class="schedule__grid">
        <div class="schedule__media">
          <video
            class="schedule__video"
            autoplay muted loop playsinline
            aria-label="Imagens do evento CG Tech Day"
          >
            <source src="/assets/max2.mp4" type="video/mp4" />
          </video>
        </div>

        <div class="schedule__content">
          <div class="segmented" role="tablist" aria-label="Período">
            <div :class="`segmented__track segmented__track--${period}`" />

            <button
              :class="['segmented__btn', period === 'morning' && 'is-active']"
              role="tab"
              :aria-selected="period === 'morning'"
              @click="period = 'morning'"
            >
              <PhRocketLaunch class="segmented__icon segmented__icon--morning" :size="18" />
              <span class="segmented__name segmented__name--morning">Manhã</span>
            </button>

            <button
              :class="['segmented__btn', period === 'afternoon' && 'is-active']"
              role="tab"
              :aria-selected="period === 'afternoon'"
              @click="period = 'afternoon'"
            >
              <PhBriefcase class="segmented__icon segmented__icon--afternoon" :size="18" />
              <span class="segmented__name segmented__name--afternoon">Tarde</span>
            </button>
          </div>

          <div :class="`segmented__info segmented__info--${period}`">
            <span class="segmented__info-tag">
              {{ period === 'morning' ? 'Carreira & Desenvolvimento' : 'Negócios & Parcerias' }}
            </span>
            <span class="segmented__info-time">
              {{ period === 'morning' ? '09h – 12h' : '14h – 18h' }}
            </span>
          </div>

          <div :class="`schedule__list schedule__list--${period}`">
            <Reveal
              v-for="(item, i) in track"
              :key="`${period}-${i}`"
              class-name="schedule__item"
            >
              <span class="schedule__time-tag">{{ formatTime(item.time) }}</span>
              <h3 class="schedule__title">{{ item.title }}</h3>
              <span class="schedule__subtitle">{{ item.tag }}</span>
              <p class="schedule__desc">{{ item.desc }}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
