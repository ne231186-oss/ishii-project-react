import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Members } from './sections/Members'
import { Events } from './sections/Events'
import { Contact } from './sections/Contact'
import { Activity } from './sections/Activity'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Activity />
        <Members />
        <Events />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
