import { ref, onMounted, onUnmounted } from 'vue'

export function useReveal(options = {}) {
  const el      = ref(null)
  const visible = ref(false)
  let observer

  onMounted(() => {
    if (!el.value) return
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible.value = true
          observer.unobserve(el.value)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px', ...options }
    )
    observer.observe(el.value)
  })

  onUnmounted(() => observer?.disconnect())

  return { el, visible }
}
