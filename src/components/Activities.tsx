import { ArrowUpRight } from 'lucide-react'
import { activities } from '../data/content'

export function Activities() {
  return (
    <section id="activities" className="scroll-mt-20 bg-[#dfe2d5] py-24 sm:py-32"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="eyebrow">WHAT WE DO</p><h2 className="section-title mt-5">情報を、<br />行動に変える。</h2></div><p className="max-w-sm text-sm leading-7 text-black/65">答えを最初から決めない。地域に耳を傾け、仲間と対話しながら、できることをひとつずつ動かしていきます。</p></div><div className="mt-16 divide-y border-y border-black/20">{activities.map((activity) => <article className="group grid gap-5 py-7 transition md:grid-cols-[80px_0.85fr_1.1fr_auto] md:items-center md:gap-8 md:py-9" key={activity.number}><p className="font-mono text-xs text-black/50">{activity.number}</p><div><h3 className="text-2xl font-black tracking-[-0.05em] sm:text-3xl">{activity.title}</h3><p className="mt-2 font-bold text-[#526a11]">{activity.lead}</p></div><p className="max-w-md text-sm leading-7 text-black/65">{activity.description}</p><span className="grid h-11 w-11 place-items-center rounded-full border border-black/25 transition group-hover:bg-[#161616] group-hover:text-[#c7ff3d]" aria-hidden="true"><ArrowUpRight size={19} /></span></article>)}</div></div></section>
  )
}
