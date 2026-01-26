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
                       bg-white/60 dark:bg-darkbg/60
                       backdrop-blur-md
                       border-b border-black/5 dark:border-white/5">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
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
                    : "text-muted dark:text-gray-400 hover:text-accent transition"
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Toggle langue + thème (EN/FR + ☀️🌙) */}
        <div className="flex items-center gap-4">
          {/* Toggle langue */}
          <button
            onClick={toggleLang}
            className="text-xs font-medium px-2 py-1 rounded-md
                      bg-white/60 dark:bg-black/40
                      text-fg dark:text-darkfg
                      hover:text-accent transition"
          >
            {lang === "en" ? "FR" : "EN"}
          </button>

          {/* Theme toggle */}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
