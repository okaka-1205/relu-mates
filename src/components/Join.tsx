import { ArrowUpRight, EnvelopeSimple, InstagramLogo, PaperPlaneTilt } from '@phosphor-icons/react'
import { siteConfig } from '../data/content'

function PlaceholderLink({ children, href, icon: Icon }: { children: string; href: string; icon: typeof ArrowUpRight }) {
  const isReady = Boolean(href)
  const content = <>{children}<Icon size={18} aria-hidden="true" /></>
  return isReady ? <a className="join-link" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>{content}</a> : <span className="join-link cursor-not-allowed opacity-55" aria-label={`${children}は準備中です`}>{children}<span className="text-xs font-medium">準備中</span></span>
}

export function Join() {
  const contactHref = siteConfig.contactEmail ? `mailto:${siteConfig.contactEmail}` : siteConfig.socials.instagram
  return (
    <section id="join" className="scroll-scene scroll-mt-20 bg-[#8ec9ff] py-24 sm:py-32"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><p className="eyebrow">JOIN / PARTNERSHIP</p><div className="mt-6 grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end"><div><h2 className="text-[clamp(3.3rem,8vw,8rem)] font-black leading-[0.92] tracking-[-0.08em]">会津から、<br />一緒に変えていこう。</h2><p className="mt-9 max-w-xl text-lg leading-8 text-[#001d50]/75">イベントに参加したい学生も、地域で一緒に取り組みたい方も。まずはReLU Matesとつながってください。</p></div><div className="grid gap-2"><PlaceholderLink href={siteConfig.socials.instagram} icon={InstagramLogo}>Instagramを見る</PlaceholderLink><PlaceholderLink href={siteConfig.socials.x} icon={PaperPlaneTilt}>Xを見る</PlaceholderLink><PlaceholderLink href={contactHref} icon={siteConfig.contactEmail ? EnvelopeSimple : ArrowUpRight}>{siteConfig.contactEmail ? '連携について相談する' : 'Instagramで相談する'}</PlaceholderLink></div></div></div></section>
  )
}
