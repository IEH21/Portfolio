// Footer avec copyright dynamique + i18n parfaite
import { useLanguage } from "../../context/LanguageContext"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer
      className="w-full py-6 mt-32 text-center
                 text-sm text-muted dark:text-gray-400
                 border-t border-black/10 dark:border-white/10"
    >
      {/* Année auto + droits traduits */}
      © {new Date().getFullYear()}, {t.footer.rights}
    </footer>
  )
}
