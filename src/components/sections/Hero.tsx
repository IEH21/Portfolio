// Téléchargement du CV selon la langue choisie
import DownloadCV from "../ui/DownloadCV"

// Animation d'apparition au scroll
import { useFadeIn } from "../../hooks/useFadeIn"

// Traductions multilingues EN/FR
import { useLanguage } from "../../context/LanguageContext"

export default function Hero() {
  const ref = useFadeIn()
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden
                 bg-bg dark:bg-darkbg px-6 pt-32"
    >
      {/* Dégradés radiaux décoratifs en arrière-plan */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px]
                    bg-pink-300/30 dark:bg-pink-500/20
                     rounded-full blur-3xl"
        />
        <div
          className="absolute top-[10%] right-[-10%] w-[500px] h-[500px]
                     bg-rose-200/30 dark:bg-rose-400/20
                     rounded-full blur-3xl"
        />
      </div>

      {/* Contenu principal avec animation fluide */}
      <div
        ref={ref}
        className="max-w-6xl mx-auto w-full
                   opacity-0 translate-y-6
                   transition-all duration-800 ease-out"
      >
        {/* Salutation personnalisée */}
        <p className="text-muted dark:text-darkfg/70 mb-6">
          {t.hero.greeting}
        </p>

        {/* Titre hero principal avec accent */}
        <h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight
                     text-fg dark:text-darkfg leading-tight mb-8"
        >
          {t.hero.title1}{" "}
          <span className="text-accent">
            {t.hero.title2}
          </span>
          <br />
          {t.hero.title3}
        </h1>

        {/* Description professionnelle */}
        <p
          className="text-lg text-muted dark:text-gray-400
                     max-w-xl mb-12"
        >
          {t.hero.description}
        </p>

        {/* Micro-phrase RH */}
        <p className="text-md font-medium text-accent mb-12">
          {t.hero.availability}
        </p>

        {/* CTA Layout hiérarchisé et aligné à gauche */}
        <div className="flex flex-col gap-4 items-start">
          {/* Ligne 1 : Actions principales */}
          <div className="flex items-center gap-6 flex-wrap">
            {/* Bouton principal "Voir projets" */}
            <a
              href="#projects"
              className="px-7 py-3 rounded-xl bg-accent text-white
                         font-medium shadow-md
                         hover:shadow-lg hover:-translate-y-0.5
                         transition-all duration-300"
            >
              {t.hero.viewProjects}
            </a>

            {/* Lien subtil "Contact" */}
            <a
              href="#contact"
              className="text-md font-medium text-accent/80
                         hover:text-accent transition-colors duration-200"
            >
              {t.hero.contact}
            </a>
          </div>

          {/* Ligne 2 : DownloadCV parfaitement aligné */}
          <div>
            <DownloadCV />
          </div>
        </div>
      </div>
    </section>
  )
}
