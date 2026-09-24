<script setup>
defineProps({
  text:    { type: String, required: true },
  reverse: { type: Boolean, default: false },
})
</script>

<template>
  <div :class="['marquee', reverse && 'marquee--reverse']">
    <div class="marquee__track">
      <span v-for="i in 8" :key="i" class="marquee__item">{{ text }}</span>
    </div>
  </div>
</template>
