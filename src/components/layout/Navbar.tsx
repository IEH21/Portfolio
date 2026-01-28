// Importation des hooks pour scrollspy, i18n et composant thème
import ThemeToggle from "../ui/ThemeToggle"
import { useActiveSection } from "../../hooks/useActiveSection"
import { useLanguage } from "../../context/LanguageContext"

export default function Navbar() {
  // Section active + traductions multilingues dynamiques
  const active = useActiveSection()
  const { t, lang, toggleLang } = useLanguage()

  // Liens de navigation générés dynamiquement depuis les traductions
  const links = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "projects", label: t.nav.projects },
    { id: "education", label: t.nav.education },
    { id: "contact", label: t.nav.contact },
  ]

  return (
    // Navbar fixe avec support complet light/dark mode + flou
    <header className="fixed top-0 left-0 w-full z-50
                       bg-bg/70 dark:bg-darkbg/70
                       backdrop-blur-md
                       border-b border-black/5 dark:border-white/5">
      <nav className="max-w-6xl mx-auto flex flex-wrap items-center justify-between px-6 py-4 gap-y-2">
        {/* Logo fixe */}
        <a href="#home" className="font-semibold text-sm text-accent dark:text-accentDark">
          Imane
        </a>

        {/* Menu avec highlight automatique de la section active */}
        <ul className="flex items-center gap-6 text-sm list-none">
          {links.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={
                  active === link.id
                    ? "text-accent"
                    : "text-muted dark:text-darkfg/70 hover:text-accent transition"
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Toggle langue + thème (EN/FR + ☀️🌙) */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Toggle langue */}
          <button
            onClick={toggleLang}
            className="text-xs px-2 py-1 rounded-md
                     text-muted hover:text-accent transition"
          >
            {lang === "en" ? "FR" : "EN"}
          </button>

          {/* Theme toggle */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Theme toggle MOBILE (icône seulement) */}
          <button
            onClick={() =>
              document.documentElement.classList.toggle("dark")
            }
            className="md:hidden text-lg"
            aria-label="Toggle theme"
          >
            🌙
          </button>
        </div>
      </nav>
    </header>
  )
}
