// Contact avec EmailJS + i18n complète + feedback utilisateur
import { useFadeIn } from "../../hooks/useFadeIn"
import { useLanguage } from "../../context/LanguageContext"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const ref = useFadeIn()
  const { t } = useLanguage()
  const formRef = useRef<HTMLFormElement | null>(null)

  // États pour loading + messages de succès/erreur
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [loading, setLoading] = useState(false)

  // Envoi EmailJS avec gestion complète des états
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current || loading) return

    setLoading(true)
    setStatus("idle")

    emailjs
      .sendForm(
        "service_ztlojkk",    // Service ID EmailJS
        "template_0sisirw",   // Template ID EmailJS
        formRef.current,
        "dCWM_FAzx6-N_b_52"  // Public Key EmailJS
      )
      .then(
        () => {
          setStatus("success")
          formRef.current?.reset()
        },
        () => {
          setStatus("error")
        }
      )
      .finally(() => {
        setLoading(false)
        setTimeout(() => setStatus("idle"), 5000)  // Reset auto 5s
      })
  }

  return (
    <section id="contact" className="py-32 px-6">
      {/* Animation d'apparition fluide */}
      <div
        ref={ref}
        className="max-w-4xl mx-auto opacity-0 translate-y-6 transition-all duration-700"
      >
        {/* Header : message intro + liens sociaux */}
        <div className="flex items-center justify-between mb-10">
          <p className="text-muted dark:text-darkfg/70 max-w-xl">
            {t.contact.message}
          </p>

          <div className="flex items-center gap-4 text-xl text-muted hover:text-accent transition-all">
            <a href="mailto:imane.elharch@outlook.com" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/in/imane-el-harch-a88110207/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/IEH21" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Formulaire 100% i18n + EmailJS */}
        <form ref={formRef} onSubmit={sendEmail} className="space-y-8">
          <div>
            <label className="block text-sm font-medium text-accent mb-2">
              {t.contact.nameLabel}
            </label>
            <input
              name="name"
              placeholder={t.contact.namePlaceholder}
              required
              className="w-full rounded-lg px-4 py-3 bg-white text-black dark:bg-darkbg dark:text-darkfg
                         border border-black/10 dark:border-white/10 focus:ring-2 focus:ring-accent/50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-accent mb-2">
              {t.contact.emailLabel}
            </label>
            <input
              name="email"
              type="email"
              placeholder={t.contact.emailPlaceholder}
              required
              className="w-full rounded-lg px-4 py-3 bg-white text-black dark:bg-darkbg dark:text-darkfg
                         border border-black/10 dark:border-white/10 focus:ring-2 focus:ring-accent/50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-accent mb-2">
              {t.contact.messageLabel}
            </label>
            <textarea
              name="message"
              rows={5}
              placeholder={t.contact.messagePlaceholder}
              required
              className="w-full rounded-lg px-4 py-3 resize-none bg-white text-black dark:bg-darkbg dark:text-darkfg
                         border border-black/10 dark:border-white/10 focus:ring-2 focus:ring-accent/50"
            />
          </div>

          {/* Bouton avec états loading + disabled */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-lg font-medium transition-all
              ${loading ? "bg-accent/60 cursor-not-allowed" : "bg-accent hover:opacity-90 hover:shadow-lg"}
              text-white focus:ring-2 focus:ring-accent/50`}
          >
            {loading ? t.contact.sending : t.contact.send}
          </button>

          {/* Feedback traduit avec auto-reset */}
          {status === "success" && (
            <p className="text-green-500 font-medium p-3 bg-green-50/50 rounded-lg border border-green-200">
              {t.contact.success}
            </p>
          )}
          {status === "error" && (
            <p className="text-red-500 font-medium p-3 bg-red-50/50 rounded-lg border border-red-200">
              {t.contact.error}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
