import { ref, onMounted, onUnmounted } from 'vue'

const EVENT_DATE = new Date('2026-10-16T09:00:00-04:00').getTime()

function getRemaining() {
  const diff = EVENT_DATE - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  }
}

export function useCountdown() {
  const time = ref(getRemaining())
  let id

  onMounted(() => {
    id = setInterval(() => { time.value = getRemaining() }, 1000)
  })
  onUnmounted(() => clearInterval(id))

  return time
}
