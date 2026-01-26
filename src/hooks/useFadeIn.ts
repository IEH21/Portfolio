// Importation des hooks React nécessaires : useEffect et useRef
import { useEffect, useRef } from "react"

// Hook personnalisé pour animer un élément lorsqu’il entre dans le champ de vision
export function useFadeIn() {
  // Référence à l’élément DOM à observer
  const ref = useRef<HTMLDivElement>(null)

  // Effet déclenché après le montage du composant
  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Création d’un observateur pour détecter quand l’élément apparaît à l’écran
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si l’élément devient visible (20% de visibilité définie par le threshold)
        if (entry.isIntersecting) {
          // On retire les classes Tailwind responsables de l’opacité et du décalage
          el.classList.remove("opacity-0", "translate-y-6")
        }
      },
      { threshold: 0.2 }
    )

    // Démarre l’observation de l’élément
    observer.observe(el)
    // Nettoyage lorsque le composant est démonté
    return () => observer.disconnect()
  }, [])

  // Retourne la référence à utiliser sur un élément JSX
  return ref
}
