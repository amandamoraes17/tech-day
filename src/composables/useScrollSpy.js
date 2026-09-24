import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollSpy(ids) {
  const activeId = ref('')
  let ticking = false

  const update = () => {
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean)
    if (!sections.length) return
    const pos = window.scrollY + window.innerHeight * 0.4
    let current = sections[0].id
    for (const s of sections) {
      const top    = s.getBoundingClientRect().top + window.scrollY
      const bottom = top + s.offsetHeight
      if (pos >= top && pos < bottom) { current = s.id; break }
    }
    activeId.value = current
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

  return activeId
}
