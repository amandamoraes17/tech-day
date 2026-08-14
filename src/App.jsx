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

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee text="Carreira. Inovação. Negócios. " />
        <Sobre />
        <Stats />
        <Schedule />
        <Speakers />
        <Experiencias />
        <Location />
        <Tickets />
        <Sponsors />
      </main>
      <Footer />
    </>
  )
}
