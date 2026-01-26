// Contexte i18n amélioré avec type générique parfait
import { createContext, useContext, useState } from "react"
import { translations } from "../i18n/translations"

type Lang = "en" | "fr"                                // ✅ Langues supportées
type Translations = typeof translations[keyof typeof translations]  // ✅ Type générique

// Contexte typé avec interface complète
const LanguageContext = createContext<{
  lang: Lang
  t: Translations
  toggleLang: () => void
} | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en")  // ✅ État langue par défaut

  // Toggle EN/FR avec logique ternaire
  const toggleLang = () => {
    setLang(prev => (prev === "en" ? "fr" : "en"))
  }

  console.log("TRANSLATIONS USED →", translations)

  return (
    <LanguageContext.Provider
      value={{
        lang,
        t: translations[lang as Lang],    // Traductions selon langue
        toggleLang,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

// Hook avec error boundary TypeScript
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used inside LanguageProvider")
  }
  return ctx
}
