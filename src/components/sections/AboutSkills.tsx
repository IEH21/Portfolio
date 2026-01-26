import { useState } from "react"
import { useLanguage } from "../../context/LanguageContext"

const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "JSX"],
  backend: ["Kotlin", "Java", "Java EE", "C#", "PHP", "Python", "SQL"],
  frameworks: ["Angular", "Spring Boot", "ASP.NET Core"],
  others: ["Git", "Docker", "Linux", "CI/CD", "API Integration", "Unity", "OOP"],
}

type TabKey = keyof typeof skills

export default function AboutSkills() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<TabKey>("frontend")

  return (
    <div className="mt-24">
      {/* Titre */}
      <h3 className="text-2xl font-semibold mb-10 text-accent">
        {t.aboutSkills.title}
      </h3>

      {/* Onglets */}
      <div className="flex gap-4 flex-wrap mb-10">
        {(Object.keys(skills) as TabKey[]).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full border text-sm font-medium transition-all
              ${
                activeTab === tab
                  ? "bg-accent text-white border-accent"
                  : "border-white/20 text-muted hover:border-accent"
              }`}
          >
            {t.aboutSkills.tabs[tab]}
          </button>
        ))}
      </div>

      {/* Grille */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills[activeTab].map(skill => (
          <div
            key={skill}
            className="bg-white dark:bg-white/5
                       rounded-xl py-6 text-center
                       text-sm font-semibold text-muted
                       shadow-sm"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}
