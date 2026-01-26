import { useState } from "react"
import { Project } from "../../data/projects"
import { useLanguage } from "../../context/LanguageContext"
import ProjectModal from "./ProjectModal"

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  const { t } = useLanguage()
  const content = t.projects.items[project.id]

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const next = () =>
    setIndex((index + 1) % project.images.length)

  const prev = () =>
    setIndex((index - 1 + project.images.length) % project.images.length)

  return (
    <>
      <div
        className="group relative bg-bg/80 dark:bg-darkbg/80 backdrop-blur rounded-2xl
                   overflow-hidden shadow-md hover:shadow-xl
                   hover:-translate-y-1 transition-all duration-300
                   cursor-pointer"
        onClick={() => setOpen(true)}
      >

        {/* ===== ZONE IMAGE + CAROUSEL ===== */}
        <div className="relative w-full h-48 bg-bg dark:bg-darkbg flex items-center justify-center overflow-hidden">

          <img
            src={project.images[index]}
            alt={content.title}
            className="max-h-full max-w-full object-contain
                       transition-all duration-300"
          />

          {project.images.length > 1 && (
            <>
              {/* Flèche gauche */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prev()
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2
                           bg-white/80 backdrop-blur p-2 rounded-full
                           shadow hover:bg-white"
              >
                ‹
              </button>

              {/* Flèche droite */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  next()
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2
                           bg-white/80 backdrop-blur p-2 rounded-full
                           shadow hover:bg-white"
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* ===== CONTENU TEXTE ===== */}
        <div className="p-6">
          <h3 className="font-semibold text-lg mb-1">
            {content.title}
          </h3>

          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            {content.description}
          </p>

          {/* Techs */}
          <div className="flex flex-wrap gap-2 text-xs mb-4">
            {project.techs.map(tech => (
              <span
                key={tech}
                className="px-2 py-1 bg-accent/15 text-accent dark:bg-accentDark/20 dark:text-accentDark rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* ===== ICÔNE GITHUB (SANS TEXTE) ===== */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="
              inline-flex items-center justify-center
              w-8 h-8 rounded-full
              bg-black text-white
              hover:bg-gray-800
              dark:bg-white dark:text-black
              dark:hover:bg-gray-200
              transition
            "
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.54-3.87-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.28 1.2-3.08-.12-.3-.52-1.52.12-3.18 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.18 3.2-1.18.64 1.66.24 2.88.12 3.18.75.8 1.2 1.82 1.2 3.08 0 4.43-2.69 5.4-5.25 5.69.41.35.77 1.04.77 2.1v3.1c0 .3.21.65.78.55A11.52 11.52 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* ===== MODAL ===== */}
      {open && (
        <ProjectModal
          project={project}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}
