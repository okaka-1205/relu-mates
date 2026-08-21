import { activityPillars } from '../data/content'

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-[#f6f5f2] py-24 sm:py-32"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20"><div><p className="eyebrow">ABOUT US</p><p className="mt-5 max-w-xs text-sm leading-7 text-black/60">ReLU Matesは、会津大学と地域のあいだに、新しい接点をつくる学生コミュニティです。</p></div><div><h2 className="section-title">大学の外へ。<br />会津の中へ。<br /><span className="text-[#245a84]">そして福島へ。</span></h2><p className="mt-10 max-w-2xl text-lg leading-9 text-black/70 sm:text-xl">情報を持つことは、選択肢を増やすこと。知ること、伝えること、つなげること。ReLU Matesは、学生の視点と行動力で、会津大学と地域のあいだに新しい接点をつくります。</p></div></div><div className="mt-18 grid border-l border-t border-black/15 md:mt-24 md:grid-cols-3">{activityPillars.map((pillar) => <article className="group min-h-56 border-b border-r border-black/15 p-6 transition hover:bg-[#78d4ff] sm:p-8" key={pillar.name}><p className="font-mono text-xs text-black/55">{pillar.number}</p><h3 className="mt-14 text-3xl font-black tracking-[-0.06em] sm:text-4xl">{pillar.name}</h3><p className="mt-3 text-sm font-bold">{pillar.text}</p></article>)}</div></div></section>
  )
}
