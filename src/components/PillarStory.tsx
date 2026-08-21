import { useEffect, useRef, useState } from 'react'
import { activityPillars } from '../data/content'

export function PillarStory() {
  const [activeIndex, setActiveIndex] = useState(0)
  const stepsRef = useRef<Array<HTMLElement | null>>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.index)
            setActiveIndex(index)
          }
        })
      },
      { threshold: 0.55 },
    )

    stepsRef.current.forEach((step) => step && observer.observe(step))
    return () => observer.disconnect()
  }, [])

  const active = activityPillars[activeIndex]

  return (
    <section className="scroll-scene bg-[#001d50] text-white">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-0">
        <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center">
          <p className="eyebrow text-[#8ec9ff]">HOW WE MOVE</p>
          <p className="mt-10 text-xs font-bold tracking-[0.2em] text-white/50">0{activeIndex + 1} / 03</p>
          <h2 className="mt-4 text-[clamp(4.5rem,10vw,10rem)] font-black leading-none tracking-[-0.09em] text-[#8ec9ff]">{active.name}</h2>
          <p className="mt-6 max-w-sm text-xl font-bold leading-8">{active.text}</p>
          <p className="mt-8 max-w-sm text-sm leading-7 text-white/60">スクロールに合わせて、ReLU Matesが大切にする3つの行動をたどります。</p>
        </div>

        <div className="pb-0 lg:py-[22vh]">
          {activityPillars.map((pillar, index) => (
            <article ref={(element) => { stepsRef.current[index] = element }} className="story-step flex min-h-[55svh] items-center border-b border-white/15 py-12 lg:min-h-[70svh]" data-index={index} key={pillar.name}>
              <div className={activeIndex === index ? 'opacity-100 transition duration-500' : 'opacity-35 transition duration-500'}>
                <p className="font-mono text-sm text-[#8ec9ff]">{pillar.number}</p>
                <h3 className="mt-6 text-5xl font-black tracking-[-0.07em] sm:text-7xl">{pillar.name}</h3>
                <p className="mt-5 text-xl font-bold leading-8">{pillar.text}</p>
                <p className="mt-7 max-w-md text-sm leading-7 text-white/60">会津で起きていることに目を向け、対話を重ね、次の挑戦をつくる。その循環を大切にしています。</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
