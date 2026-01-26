import { FaDownload } from "react-icons/fa"
// Hook i18n pour langue + traductions
import { useLanguage } from "../../context/LanguageContext"

export default function DownloadCV() {
  const { t, lang } = useLanguage()

  return (
    // Lien intelligent : CV FR/EN selon langue
    <a
      href={
        lang === "fr"
          ? "/cv/Imane_ElHarch_CV_FR.pdf"
          : "/cv/Imane_ElHarch_CV_EN.pdf"
      }
      download={
        lang === "fr"
          ? "Imane_ElHarch_CV_FR.pdf"
          : "Imane_ElHarch_CV_EN.pdf"
      }
      className="
        inline-flex items-center gap-2
        px-6 py-3
        rounded-xl
        bg-accent text-white
        hover:bg-accentDark
        shadow-md hover:shadow-lg hover:-translate-y-0.5
        transition-all duration-300
        whitespace-nowrap
        focus:outline-none focus:ring-2 focus:ring-accent/50
      "
      aria-label={`Download ${t.hero.downloadCV}`}
    >
      {/* Texte traduit + icône */}
      {t.hero.downloadCV}
      <FaDownload className="text-sm" />
    </a>
  )
}
