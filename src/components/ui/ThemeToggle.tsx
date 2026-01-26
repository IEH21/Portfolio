// Importation des hooks React pour gérer l'état et les effets secondaires
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  // État local pour suivre le mode actuel (dark = true/false)
  const [dark, setDark] = useState(false)

  // Synchronise l'état avec la classe "dark" sur l'élément HTML root
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
  }, [dark])

  return (
    // Bouton toggle avec styles adaptés aux deux modes (light/dark)
    <button
      onClick={() => setDark(!dark)}
      className="
        text-xs px-3 py-1 rounded-full
        border border-black/10 dark:border-white/10
        text-muted dark:text-gray-300
        hover:text-accent transition
      "
    >
      {/* Texte dynamique selon le mode actuel */}
      {dark ? "Light" : "Dark"}
    </button>
  )
}
