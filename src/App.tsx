import { Activities } from './components/Activities'
import { About } from './components/About'
import { Events } from './components/Events'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Join } from './components/Join'
import { News } from './components/News'

export default function App() {
  return (
    <div className="overflow-x-clip bg-[#f6f5f2] text-[#161616]">
      <Header />
      <main>
        <Hero />
        <About />
        <Activities />
        <Events />
        <News />
        <Join />
      </main>
      <Footer />
    </div>
  )
}
