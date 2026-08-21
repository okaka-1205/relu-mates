import { ArrowRight } from '@phosphor-icons/react'
import { newsItems } from '../data/content'

export function News() {
  return (
    <section id="news" className="scroll-scene scroll-mt-20 bg-white py-24 sm:py-32"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><div className="flex items-end justify-between"><div><p className="eyebrow">お知らせ</p><h2 className="section-title mt-5">活動の記録</h2></div><span className="hidden text-sm text-[#23477b] sm:block">最新情報はInstagramでも発信しています。</span></div><div className="mt-10 border-t border-[#001d50]/20 sm:mt-14">{newsItems.map((item) => <article className="group grid gap-2 border-b border-[#001d50]/20 py-5 transition hover:px-3 sm:grid-cols-[150px_110px_1fr_auto] sm:items-center sm:gap-5 sm:py-7" key={`${item.date}-${item.title}`}><time className="font-mono text-xs text-[#001d50]/55">{item.date}</time><span className="text-xs font-black tracking-[0.08em] text-[#0056c8]">{item.category}</span><h3 className="text-base font-bold sm:text-lg">{item.title}</h3><ArrowRight size={20} weight="bold" className="hidden transition group-hover:translate-x-1 sm:block" aria-hidden="true" /></article>)}</div><p className="mt-7 text-sm text-[#23477b]">ニュース一覧ページは準備中です。</p></div></section>
  )
}
