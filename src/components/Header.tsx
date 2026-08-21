import { List, X } from '@phosphor-icons/react'
import { useState } from 'react'
import { navLinks, siteConfig } from '../data/content'

export function Header() {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#001d50]/10 bg-white/95 text-[#001d50] backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a className="flex items-center gap-3 font-black tracking-[-0.06em]" href="#top" onClick={closeMenu} aria-label="ReLU Mates トップへ">
          {siteConfig.logoImage ? <img className="h-14 w-14 rounded-full object-contain" src={siteConfig.logoImage} alt="ReLU Mates" /> : <><span className="grid h-9 w-9 place-items-center border border-[#0056c8] text-[11px] text-[#0056c8]">R</span><span className="text-xl">ReLU<br className="sm:hidden" /> Mates</span></>}
        </a>
        <nav className="hidden items-center gap-8 text-sm font-bold lg:flex" aria-label="メインナビゲーション">
          {navLinks.map((link) => <a className="transition hover:text-[#0056c8]" href={link.href} key={link.href}>{link.label}</a>)}
          <a className="rounded-full bg-[#0056c8] px-5 py-3 text-white transition hover:bg-[#001d50]" href="#join">参加する</a>
        </nav>
        <button className="grid h-11 w-11 place-items-center lg:hidden" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}>{open ? <X size={25} weight="bold" /> : <List size={28} weight="bold" />}</button>
      </div>
      {open && <nav id="mobile-navigation" className="border-t border-[#001d50]/10 bg-white px-5 py-6 lg:hidden" aria-label="モバイルナビゲーション"><div className="mx-auto grid max-w-[1440px] gap-1">{navLinks.map((link) => <a className="border-b border-[#001d50]/10 py-4 text-lg font-bold" href={link.href} key={link.href} onClick={closeMenu}>{link.label}</a>)}<a className="mt-4 rounded-full bg-[#0056c8] px-5 py-4 text-center font-bold text-white" href="#join" onClick={closeMenu}>参加する</a></div></nav>}
    </header>
  )
}
