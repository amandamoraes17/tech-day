<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useScrollSpy } from '../composables/useScrollSpy'

const NAV_ITEMS = [
  { label: 'Sobre',       href: '#sobre' },
  { label: 'Programação', href: '#programacao' },
  { label: 'Experiências',href: '#experiencias' },
  { label: 'Palestrantes',href: '#palestrantes' },
  { label: 'Local',       href: '#local' },
]

const active = ref(false)
const open   = ref(false)
const spyIds = NAV_ITEMS.map(i => i.href.slice(1))
const activeId = useScrollSpy(spyIds)

const onScroll = () => { active.value = window.scrollY > 50 }

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header :class="['header', active && 'is-active']">
    <div class="header__inner">
      <a href="#topo" class="header__logo">
        <span class="header__logo-mark">CG</span>
        <span class="header__logo-text">Tech Day</span>
      </a>

      <nav :class="['header__nav', open && 'is-open']">
        <a
          v-for="item in NAV_ITEMS"
          :key="item.href"
          :href="item.href"
          :class="activeId === item.href.slice(1) ? 'is-active' : ''"
          @click="open = false"
        >{{ item.label }}</a>
        <a href="#inscricao" class="header__cta" @click="open = false">Inscreva-se</a>
      </nav>

      <button
        :class="['header__burger', open && 'is-open']"
        aria-label="Abrir menu"
        @click="open = !open"
      >
        <span /><span /><span />
      </button>
    </div>
  </header>
</template>
