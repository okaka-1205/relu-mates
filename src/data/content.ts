export type LinkItem = { label: string; href: string }

export type Activity = {
  number: string
  title: string
  lead: string
  description: string
}

export type Event = {
  title: string
  date: string
  venue: string
  description: string
  status: string
  url: string
}

export type NewsItem = {
  date: string
  category: 'NEWS' | 'EVENT' | 'REPORT'
  title: string
}

export const siteConfig = {
  name: 'ReLU Mates',
  tagline: 'つながる。学ぶ。挑戦する。',
  logoImage: '/relu-mates-logo.png',
  // TODO: 正式な問い合わせ先に差し替えてください。
  contactEmail: '',
  // TODO: 公式SNSのURLを入力してください。未設定時はボタンが準備中表示になります。
  socials: {
    instagram: '',
    x: '',
  },
}

export const navLinks: LinkItem[] = [
  { label: '私たちについて', href: '#about' },
  { label: '活動', href: '#activities' },
  { label: 'イベント', href: '#events' },
  { label: 'ニュース', href: '#news' },
]

export const activityPillars = [
  { number: '01', name: 'KNOW', text: '地域の魅力や課題を知る' },
  { number: '02', name: 'CONNECT', text: '学生・住民・企業をつなぐ' },
  { number: '03', name: 'CREATE', text: '対話から新しい活動を生み出す' },
]

export const activities: Activity[] = [
  {
    number: '01',
    title: 'まちの情報発信',
    lead: '会津・福島の「いま」を、ひらく。',
    description: '人、場所、挑戦を学生の視点で見つめ、もっと届くかたちにして発信します。',
  },
  {
    number: '02',
    title: '学生と地域の対話',
    lead: '出会いから、次の問いをつくる。',
    description: '学生、住民、事業者が交わり、それぞれの視点から地域のこれからを考えます。',
  },
  {
    number: '03',
    title: 'イベント企画',
    lead: '知る、話す、試してみる。',
    description: '一歩目のきっかけになる、小さくても実りある場を企画・運営します。',
  },
  {
    number: '04',
    title: 'コミュニティ運営',
    lead: '「やってみたい」を、仲間と形に。',
    description: '興味やスキルを持ち寄り、個人のアイデアを次のアクションへつなげます。',
  },
]

// TODO: 初回イベントの名称・日時・場所・申込URLが決まり次第、ここを更新してください。
export const featuredEvent: Event = {
  title: 'ReLU Mates Kickoff Session',
  date: '開催日を準備中',
  venue: '会津若松市内／会津大学周辺',
  description: '会津と福島のこれからを、学生と地域で考える最初の対話イベントです。',
  status: '詳細は近日公開',
  url: '',
}

// TODO: 開催済みイベントができたら、ここへ追加してください。
export const pastEvents: Event[] = []

export const newsItems: NewsItem[] = [
  { date: '2026.05.XX', category: 'NEWS', title: 'ReLU Matesを設立しました' },
  { date: '2026.XX.XX', category: 'EVENT', title: 'イベント情報を公開しました' },
  { date: '2026.XX.XX', category: 'REPORT', title: '活動レポートを公開しました' },
]
