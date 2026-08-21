import { Activities } from './components/Activities'
import { About } from './components/About'
import { Community } from './components/Community'
import { Events } from './components/Events'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Join } from './components/Join'
import { News } from './components/News'
import { PillarStory } from './components/PillarStory'
import { ScrollScenes } from './components/ScrollScenes'

export default function App() {
  return (
    <div className="motion-enabled overflow-x-clip bg-[#f6f8fc] text-[#001d50]">
      <Header />
      <ScrollScenes />
      <main>
        <Hero />
        <About />
        <PillarStory />
        <Activities />
        <Community />
        <Events />
        <News />
        <Join />
      </main>
      <Footer />
    </div>
  )
}
