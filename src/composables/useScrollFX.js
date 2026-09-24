import { onMounted, onUnmounted } from 'vue'

export function useScrollFX() {
  let ticking = false

  const update = () => {
    const y   = window.scrollY || 0
    const doc = document.documentElement
    const max = doc.scrollHeight - window.innerHeight
    const progress = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0
    doc.style.setProperty('--scroll',   progress.toFixed(4))
    doc.style.setProperty('--scroll-y', `${y.toFixed(1)}px`)
    ticking = false
  }

  const onScroll = () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update) }
  }

  onMounted(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
  })
}
