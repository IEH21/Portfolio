/** @type {import('tailwindcss').Config} */
module.exports = {
  // Active le mode sombre avec toggle manuel via classe CSS
  darkMode: "class",
  
  // Fichiers scannés pour générer uniquement les classes Tailwind utilisées
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        /* Light mode */
        bg: "#FFF1F5",        // rose pastel très doux
        fg: "#1F2937",        // texte foncé lisible
        accent: "#EC4899",    // rose principal (Tailwind pink-500)
        muted: "#6B7280",     // gris doux

        /* Dark mode */
        darkbg: "#0F172A",    // bleu-noir profond
        darkfg: "#F9FAFB",    // texte clair
        darkaccent: "#F472B6" // rose pastel en dark
      },
    },
  },
  
  plugins: [],
}
