import { useEffect, useState } from 'react'

// Highlights the section whose top has passed ~40% of the viewport.
export function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState('')
  const key = ids.join('|')

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!sections.length) return

    let ticking = false
    const update = () => {
      const pos = window.scrollY + window.innerHeight * 0.4
      let current = sections[0].id
      for (const s of sections) {
        const rect = s.getBoundingClientRect()
        const top = rect.top + window.scrollY
        const bottom = top + rect.height
        if (pos >= top && pos < bottom) {
          current = s.id
          break
        }
      }
      setActiveId(current)
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
  }, [key])

  return activeId
}
