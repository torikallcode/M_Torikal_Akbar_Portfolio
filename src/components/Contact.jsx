import { contact, profile, socialLinks } from '../data/portfolio'
import { socialIconMap } from './BrandIcons'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const reveal = useReveal()
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
    contact.mailtoSubject,
  )}`

  return (
    <section
      id="contact"
      className="relative mx-auto flex w-full max-w-7xl scroll-mt-24 flex-col px-5 pb-32 pt-20"
    >
      <div
        ref={reveal.ref}
        className={`${reveal.className} mb-11 flex w-full items-center justify-start text-start sm:mb-7 lg:mb-20`}
      >
        <h2 className="section-heading !mb-0">— Contact</h2>
      </div>

      <div className="mx-auto mb-5 flex w-full flex-col items-center justify-center lg:max-w-3xl xl:max-w-4xl">
        <h2 className="font-archivo text-3xl font-extralight leading-tight text-hitam sm:text-5xl lg:text-6xl lg:font-thin xl:text-7xl">
          {contact.title}
        </h2>
        <p className="mt-4 font-archivo text-sm font-normal leading-relaxed text-hitam sm:text-base md:text-lg">
          {contact.description}
        </p>
      </div>

      <div className="mb-14 w-full lg:mb-24 lg:px-11 xl:px-44">
        <a href={mailto} className="pill-outline w-44 lg:w-48">
          Send your email
        </a>
      </div>

      <div className="flex items-center justify-around border-y border-slate-400 py-9 lg:mx-11 lg:py-11">
        {socialLinks.map((social) => {
          const Icon = socialIconMap[social.icon]
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="social-icon"
            >
              <Icon size={24} />
            </a>
          )
        })}
      </div>
    </section>
  )
}
