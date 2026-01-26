import ImageCarousel from "./ImageCarousel"
import { Project } from "../../data/projects"
import { useLanguage } from "../../context/LanguageContext"

type Props = {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  const { t } = useLanguage()
  const content = t.projects.items[project.id]

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
      <div className="bg-white max-w-3xl w-full rounded-xl p-6 relative">

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl"
        >
          ✕
        </button>

        <ImageCarousel images={project.images} />

        <h3 className="text-xl font-bold mt-4">
          {content.title}
        </h3>

        <p className="text-gray-600 mt-2">
          {content.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.techs.map(t => (
            <span key={t} className="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs">
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 text-accent font-medium"
        >
          Voir le code sur GitHub →
        </a>
      </div>
    </div>
  )
}
