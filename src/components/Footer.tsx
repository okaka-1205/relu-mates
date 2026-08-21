import { siteConfig } from '../data/content'

export function Footer() {
  return (
    <footer className="bg-[#001d50] py-10 text-white"><div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 px-5 sm:px-8 md:flex-row md:items-end lg:px-12"><div className="flex items-center gap-4"><img className="h-16 w-16 rounded-full bg-white object-contain" src={siteConfig.logoImage} alt="ReLU Mates ロゴ" /><div><p className="text-3xl font-black tracking-[-0.07em]">{siteConfig.name}</p><p className="mt-1 text-sm text-white/65">{siteConfig.tagline}</p></div></div><div className="text-sm text-white/50"><p>学生主体のコミュニティです。</p><p className="mt-2">© 2026 ReLU Mates</p></div></div></footer>
  )
}
