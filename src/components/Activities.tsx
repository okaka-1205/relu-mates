import { ArrowUpRight } from '@phosphor-icons/react'
import { activities } from '../data/content'

export function Activities() {
  return (
    <section id="activities" className="scroll-scene scroll-mt-20 bg-[#eaf5ff] py-24 sm:py-32"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="eyebrow">活動内容</p><h2 className="section-title mt-5">知ったことを、<br />行動につなげる。</h2></div><p className="max-w-sm text-sm leading-7 text-[#23477b]">答えを最初から決めず、地域に耳を傾けます。仲間と話しながら、できることを一つずつ形にしていきます。</p></div><div className="mt-10 divide-y border-y border-[#001d50]/20 sm:mt-16">{activities.map((activity) => <article className="group relative grid gap-5 py-7 pr-14 transition md:grid-cols-[64px_0.72fr_1.45fr_auto] md:items-center md:gap-5 md:py-9 md:pr-0" key={activity.number}><p className="font-mono text-xs text-[#001d50]/50">{activity.number}</p><div><h3 className="text-2xl font-black tracking-[-0.03em] sm:text-3xl">{activity.title}</h3><p className="mt-2 font-bold text-[#0056c8]">{activity.lead}</p></div><p className="max-w-none text-xs leading-7 text-[#23477b] lg:whitespace-nowrap">{activity.description}</p><span className="absolute right-0 top-16 grid h-11 w-11 place-items-center rounded-full border border-[#001d50]/25 transition group-hover:bg-[#0056c8] group-hover:text-white md:static md:translate-y-0" aria-hidden="true"><ArrowUpRight size={19} weight="bold" /></span></article>)}</div></div></section>
  )
}
