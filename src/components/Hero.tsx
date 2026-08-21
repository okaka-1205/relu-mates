import { ArrowDownRight, ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[780px] overflow-hidden bg-[#161616] pt-20 text-white sm:min-h-[min(900px,100svh)]">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="hero-orb hero-orb-one pointer-events-none absolute" aria-hidden="true" />
      <div className="hero-orb hero-orb-two pointer-events-none absolute" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 left-[12%] w-px bg-white/10" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-[19%] w-px bg-white/10" aria-hidden="true" />
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col justify-between px-5 pb-7 pt-12 sm:px-8 sm:pb-10 lg:px-12 lg:pt-20">
        <div className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-[#c7ff3d]"><Sparkles size={15} aria-hidden="true" />AIZU / FUKUSHIMA / 2026</div>
        <div className="my-auto py-16 lg:py-20">
          <p className="mb-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base">会津大学の学生から生まれたコミュニティ。<br />人・地域・アイデアをつなぎ、情報を力に変える活動を始めています。</p>
          <h1 className="max-w-5xl text-[clamp(3.4rem,9.3vw,9.4rem)] font-black leading-[0.94] tracking-[-0.08em]">会津から、<br /><span className="text-[#c7ff3d]">情報で福島を</span><br />おもしろくする。</h1>
          <div className="mt-10 flex flex-wrap gap-3"><a className="group inline-flex items-center gap-3 rounded-full bg-[#c7ff3d] px-6 py-4 text-sm font-black text-[#161616] transition hover:bg-white" href="#events">イベントを見る <ArrowRight size={17} className="transition group-hover:translate-x-1" /></a><a className="inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-4 text-sm font-black text-white transition hover:border-white hover:bg-white/10" href="#about">ReLU Matesについて <ArrowDownRight size={17} /></a></div>
        </div>
        <div className="flex items-end justify-between border-t border-white/15 pt-5 text-xs font-medium text-white/60"><p>STUDENT COMMUNITY<br />IN AIZUWAKAMATSU</p><p className="text-right">SCROLL TO EXPLORE<br />↓</p></div>
      </div>
    </section>
  )
}
