// Layout principal portfolio complet avec 6 sections
import Navbar from "../components/layout/Navbar"
import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import Projects from "../components/projects/Projects";
import Education from "../components/sections/Education"
import Contact from "../components/sections/Contact"
import Footer from "../components/layout/Footer"

export default function Home() {
  return (
    <>
      {/* Navbar fixe en haut de page */}
      <Navbar />

      {/* Main : 5 sections principales */}
      <main>
        <Hero />        {/* Section intro avec CTA */}
        <About />       {/* Présentation personnelle */}
        <Projects />    {/* Portfolio projets */}
        <Education />   {/* Formation/études */}
        <Contact />     {/* Formulaire EmailJS */}
      </main>

      {/* Footer avec copyright i18n */}
      <Footer />
    </>
  )
}
