import { useFadeIn } from "../../hooks/useFadeIn"
import { useLanguage } from "../../context/LanguageContext"

export default function Education() {
  const ref = useFadeIn()
  const { t } = useLanguage()

  return (
    <section id="education" className="py-32 px-6">
      <div
        ref={ref}
        className="max-w-3xl mx-auto opacity-0 translate-y-6 transition-all duration-700"
      >
        <h2 className="text-3xl font-bold mb-10 text-accent">
          {t.education.title}
        </h2>

        <div className="space-y-8 text-muted dark:text-darkfg/70">
          {t.education.items.map((item, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-fg dark:text-darkfg">
                {item.school}
              </h3>
              <p className="text-sm italic">
                {item.location}
              </p>
              <p className="mt-1">
                {item.diploma}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
