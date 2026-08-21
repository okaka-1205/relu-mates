import { activityPillars } from '../data/content'

const stories = [
  {
    title: 'まず、知る。',
    description: '会津で暮らす人、働く人、学ぶ人の声に耳を傾けます。地域の魅力も課題も、現場から知ることを大切にします。',
    color: 'bg-[#001d50] text-white',
  },
  {
    title: '人と、つながる。',
    description: '学生、地域のみなさん、企業や団体が出会える場をつくります。対話から、思いがけない仲間やアイデアが生まれます。',
    color: 'bg-[#0056c8] text-white',
  },
  {
    title: '小さく、挑戦する。',
    description: '話して終わりにせず、できることから動かします。小さな実践を重ねて、会津から福島へ広げていきます。',
    color: 'bg-[#eaf5ff] text-[#001d50]',
  },
]

export function PillarStory() {
  return (
    <section className="scroll-scene bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mb-12 max-w-2xl"><p className="eyebrow">ReLU Matesが大切にすること</p><h2 className="mt-5 text-[clamp(2.4rem,5vw,5rem)] font-black leading-[1.15] tracking-[-0.04em]">知って、つながって、<br />一歩ずつ動かす。</h2></div>
        <div className="story-stack">
          {stories.map((story, index) => {
            const pillar = activityPillars[index]
            return (
              <article className={`story-card ${story.color}`} key={pillar.number}>
                <div className="grid min-h-[54svh] gap-10 p-7 sm:p-12 lg:grid-cols-[0.55fr_1.45fr] lg:items-end lg:p-16">
                  <p className="font-mono text-sm opacity-60">{pillar.number}</p>
                  <div><p className="text-sm font-bold opacity-70">{pillar.name}</p><h3 className="mt-4 text-[clamp(2.8rem,6vw,6.5rem)] font-black leading-[1.04] tracking-[-0.05em]">{story.title}</h3><p className="mt-7 max-w-xl text-base leading-8 opacity-80 sm:text-lg">{story.description}</p></div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
