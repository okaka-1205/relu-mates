import { ArrowUpRight, InstagramLogo, UsersThree } from '@phosphor-icons/react'
import { communityRoles, siteConfig } from '../data/content'

export function Community() {
  return (
    <section id="community" className="scroll-scene scroll-mt-20 bg-[#f6f8fc] py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div><p className="eyebrow">OUR COMMUNITY</p><h2 className="section-title mt-5">一緒に、<br />動かす人へ。</h2></div>
          <div><p className="max-w-2xl text-lg leading-9 text-[#23477b] sm:text-xl">ReLU Matesは、誰かがつくった場所に参加するだけのコミュニティではありません。会津で何かを始めたい人が、仲間を見つけ、学び、試せる場所です。</p><a className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#0056c8] px-6 py-4 text-sm font-black text-white transition hover:bg-[#001d50]" href={siteConfig.socials.instagram} target="_blank" rel="noreferrer"><InstagramLogo size={20} weight="bold" />Instagramでつながる <ArrowUpRight size={18} weight="bold" /></a></div>
        </div>

        <div className="mt-16 grid divide-y divide-[#001d50]/15 border-y border-[#001d50]/15 md:grid-cols-3 md:divide-x md:divide-y-0">
          {communityRoles.map((role) => <article className="p-7 sm:p-9" key={role.label}><UsersThree size={28} weight="bold" className="text-[#0056c8]" /><p className="mt-14 text-xs font-black tracking-[0.16em] text-[#0056c8]">{role.label}</p><h3 className="mt-3 text-3xl font-black tracking-[-0.06em]">{role.title}</h3><p className="mt-5 text-sm leading-7 text-[#23477b]">{role.description}</p></article>)}
        </div>
        <p className="mt-6 text-xs leading-6 text-[#23477b]">活動写真は、公式Instagramの投稿と連携して順次掲載予定です。</p>
      </div>
    </section>
  )
}
