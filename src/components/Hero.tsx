import { ArrowDownRight, ArrowRight } from '@phosphor-icons/react'

export function Hero() {
  return (
    <section id="top" className="scroll-scene is-visible relative flex min-h-[780px] overflow-hidden bg-[#f6f8fc] pt-20 text-[#001d50] sm:min-h-[min(900px,100svh)]">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-2 bg-[#0056c8]" aria-hidden="true" />
      <div className="hero-ring pointer-events-none absolute -right-24 top-28 hidden lg:block" aria-hidden="true" />
      <div className="hero-bar pointer-events-none absolute bottom-0 right-0 h-2/5 w-1/2" aria-hidden="true" />
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col justify-between px-5 pb-7 pt-12 sm:px-8 sm:pb-10 lg:px-12 lg:pt-20">
        <div className="text-xs font-bold tracking-[0.2em] text-[#0056c8]">AIZU / FUKUSHIMA / 2026</div>
        <div className="my-auto py-16 lg:py-20">
          <div className="mb-8 flex items-center gap-4"><img className="h-20 w-20 rounded-full bg-white object-contain p-1 shadow-sm sm:h-24 sm:w-24" src="/relu-mates-logo.png" alt="ReLU Mates ロゴ" /><p className="text-sm font-bold leading-6 text-[#23477b]">つながる。学ぶ。挑戦する。<br />学生から、地域の未来へ。</p></div>
          <p className="mb-6 max-w-xl text-sm leading-7 text-[#23477b] sm:text-base">会津大学の学生から生まれたコミュニティ。<br />人・地域・アイデアをつなぎ、情報を力に変える活動を始めています。</p>
          <h1 className="max-w-5xl text-[clamp(3.4rem,9.3vw,9.4rem)] font-black leading-[0.94] tracking-[-0.08em]">会津から、<br /><span className="text-[#0056c8]">情報で福島を</span><br />おもしろくする。</h1>
          <div className="mt-10 flex flex-wrap gap-3"><a className="group inline-flex items-center gap-3 rounded-full bg-[#0056c8] px-6 py-4 text-sm font-black text-white transition hover:bg-[#001d50]" href="#events">イベントを見る <ArrowRight size={17} weight="bold" className="transition group-hover:translate-x-1" /></a><a className="inline-flex items-center gap-3 rounded-full border border-[#001d50]/35 px-6 py-4 text-sm font-black text-[#001d50] transition hover:border-[#001d50] hover:bg-white" href="#about">ReLU Matesについて <ArrowDownRight size={17} weight="bold" /></a></div>
        </div>
        <div className="flex items-end justify-between border-t border-[#001d50]/15 pt-5 text-xs font-medium text-[#23477b]"><p>STUDENT COMMUNITY<br />IN AIZUWAKAMATSU</p><p className="text-right">SCROLL TO EXPLORE<br />↓</p></div>
      </div>
    </section>
  )
}
