import { ArrowRight } from 'lucide-react'
import { newsItems } from '../data/content'

export function News() {
  return (
    <section id="news" className="scroll-mt-20 bg-[#f6f5f2] py-24 sm:py-32"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><div className="flex items-end justify-between"><div><p className="eyebrow">NEWS</p><h2 className="section-title mt-5">新着情報</h2></div><span className="hidden text-sm text-black/45 sm:block">活動の記録を、少しずつ。</span></div><div className="mt-14 border-t border-black/20">{newsItems.map((item) => <article className="group grid gap-3 border-b border-black/20 py-6 transition hover:px-3 sm:grid-cols-[150px_110px_1fr_auto] sm:items-center sm:gap-5 sm:py-7" key={`${item.date}-${item.title}`}><time className="font-mono text-xs text-black/55">{item.date}</time><span className="text-xs font-black tracking-[0.13em] text-[#526a11]">{item.category}</span><h3 className="text-base font-bold sm:text-lg">{item.title}</h3><ArrowRight size={19} className="hidden transition group-hover:translate-x-1 sm:block" aria-hidden="true" /></article>)}</div><p className="mt-7 text-sm text-black/45">ニュース一覧ページは準備中です。</p></div></section>
  )
}
