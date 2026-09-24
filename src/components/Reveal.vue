<script setup>
import { useReveal } from '../composables/useReveal'

const props = defineProps({
  as:        { type: String,  default: 'div' },
  className: { type: String,  default: '' },
  delay:     { type: Number,  default: 0 },
})

const { el, visible } = useReveal()
</script>

<template>
  <component
    :is="props.as"
    ref="el"
    :class="['reveal', visible && 'visible', props.className].filter(Boolean).join(' ')"
    :style="props.delay ? { transitionDelay: `${props.delay}ms` } : undefined"
  >
    <slot />
  </component>
</template>
