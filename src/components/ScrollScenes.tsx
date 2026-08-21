import { useEffect } from 'react'

export function ScrollScenes() {
  useEffect(() => {
    const scenes = document.querySelectorAll<HTMLElement>('.scroll-scene:not(.is-visible)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion) {
      scenes.forEach((scene) => scene.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -6% 0px' },
    )

    scenes.forEach((scene) => observer.observe(scene))
    return () => observer.disconnect()
  }, [])

  return null
}
