import { useEffect } from 'react'

// Exposes --scroll (0..1 page progress) and --scroll-y (px) on <html>,
// updated on scroll via requestAnimationFrame. Respects reduced motion.
export function useScrollFX() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    let ticking = false
    const update = () => {
      const y = window.scrollY || window.pageYOffset || 0
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0
      doc.style.setProperty('--scroll', progress.toFixed(4))
      doc.style.setProperty('--scroll-y', `${y.toFixed(1)}px`)
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
}
