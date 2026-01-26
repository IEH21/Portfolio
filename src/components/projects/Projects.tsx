import { useFadeIn } from "../../hooks/useFadeIn"
import { projects } from "../../data/projects"
import { useLanguage } from "../../context/LanguageContext"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  const ref = useFadeIn()
  const { t } = useLanguage()

  return (
    <section id="projects" className="py-32 px-6">
      <div
        ref={ref}
        className="max-w-6xl mx-auto opacity-0 translate-y-6 transition-all duration-700"
      >
        <h2 className="text-3xl font-bold mb-12 text-accent">
          {t.projects.title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
