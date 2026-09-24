<script setup>
import { useScrollFX } from './composables/useScrollFX'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Marquee from './components/Marquee.vue'
import Sobre from './components/Sobre.vue'
import Stats from './components/Stats.vue'
import Schedule from './components/Schedule.vue'
import Experiencias from './components/Experiencias.vue'
import BancoTalentos from './components/BancoTalentos.vue'
import Speakers from './components/Speakers.vue'
import Location from './components/Location.vue'
import Tickets from './components/Tickets.vue'
import Sponsors from './components/Sponsors.vue'
import Footer from './components/Footer.vue'
import ScrollProgress from './components/ScrollProgress.vue'

useScrollFX()
</script>

<template>
  <Header />
  <Hero />
  <main class="conteudo-sobreposto">
    <Marquee text="Carreira. Inovação. Negócios. " />
    <Sobre />
    <Stats />
    <Schedule />
    <Experiencias />
    <BancoTalentos />
    <Speakers />
    <Location />
    <Tickets />
    <Sponsors />
  </main>
  <Footer />
  <ScrollProgress />
</template>
