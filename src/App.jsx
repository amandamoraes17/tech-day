import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Sobre from './components/Sobre'
import Stats from './components/Stats'
import Schedule from './components/Schedule'
import Speakers from './components/Speakers'
import Experiencias from './components/Experiencias'
import Location from './components/Location'
import Tickets from './components/Tickets'
import Sponsors from './components/Sponsors'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import { useScrollFX } from './hooks/useScrollFX'

export default function App() {
  useScrollFX()

  return (
    <>
      <Header />
      <Hero />
      <main className="conteudo-sobreposto">
        <Marquee text="Carreira. Inovação. Negócios. " />
        <Sobre />
        <Stats />
        <Schedule />
        <Experiencias />
        <Speakers />
        <Location />
        <Tickets />
        <Sponsors />
      </main>
      <Footer />
      <ScrollProgress />
    </>
  )
}
