import { useFadeIn } from "../../hooks/useFadeIn"
import { useLanguage } from "../../context/LanguageContext"
import AboutSkills from "./AboutSkills"

export default function About() {
  const ref = useFadeIn()
  const { t } = useLanguage()

  return (
    <section id="about" className="py-32 px-6">
      <div
        ref={ref}
        className="max-w-3xl mx-auto opacity-0 translate-y-6 transition-all duration-700"
      >
        {/* Titre */}
        <h2 className="text-3xl font-bold mb-8 text-accent">
          {t.about.title}
        </h2>

        {/* Paragraphes */}
        <div className="space-y-6 text-muted dark:text-darkfg/70 leading-relaxed">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </div>
        <AboutSkills /> 
      </div>
    </section>
  )
}
