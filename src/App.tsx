// Importation du composant principal contenant toutes les sections
import Home from "./pages/Home"

// Composant racine de l'application React (point d'entrée)
export default function App() {
  return (
    <div className="
      min-h-screen
      text-fg dark:text-darkfg
      bg-bg dark:bg-darkbg
    ">
      <Home />
    </div>
  )
}
