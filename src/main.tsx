// Importations principales React et styles globaux
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { LanguageProvider } from "./context/LanguageContext" // Contexte i18n

// Montage de l'application React dans le DOM
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Provider multilingue qui englobe toute l'application */}
    <LanguageProvider>
      {/* Composant racine contenant Navbar, Hero, About, etc. */}
      <App />
    </LanguageProvider>
  </React.StrictMode>
)
