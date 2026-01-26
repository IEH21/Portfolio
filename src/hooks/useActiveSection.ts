// Importation des hooks React pour gérer l'état et les effets
import { useEffect, useState } from "react"

// Liste des sections à surveiller pour la navigation active
const sections = ["home", "about", "projects", "education", "contact"]

// Hook personnalisé pour détecter la section active (scrollspy)
export function useActiveSection() {
  // État pour stocker l'ID de la section actuellement visible
  const [active, setActive] = useState("home")

  // Surveillance des sections avec IntersectionObserver
  useEffect(() => {
    const observers = sections.map(id => {
      // Récupération de l'élément DOM de chaque section
      const el = document.getElementById(id)
      if (!el) return null

      // Observateur qui déclenche setActive quand 60% de la section est visible
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id)
          }
        },
        { threshold: 0.6 }
      )

      observer.observe(el)
      return observer
    })

    // Nettoyage : déconnexion de tous les observateurs au démontage
    return () => {
      observers.forEach(o => o?.disconnect())
    }
  }, [])

  // Retourne l'ID de la section active pour la navbar
  return active
}
