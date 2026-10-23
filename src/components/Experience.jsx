import { experience } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'

function ExperienceItem({ item, index, last }) {
  const reveal = useReveal()

  return (
    <li
      ref={reveal.ref}
      className={`${reveal.className} group border-t border-slate-400 px-1 py-5 transition-colors duration-200 hover:bg-white sm:px-3 ${
        last ? 'border-b' : ''
      }`}
    >
      <div className="flex gap-4 sm:gap-6">
        <span className="mt-1 font-primary text-xs font-semibold tabular-nums text-hitam/40">
          {String(index + 1).padStart(2, '0')}
        </span>

        <div>
          <h4 className="font-archivo text-lg font-semibold leading-snug text-hitam sm:text-xl">
            {item.title}
          </h4>
          <p className="mt-2 max-w-2xl font-archivo text-sm font-light leading-relaxed text-hitam/80">
            {item.description}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-hitam/30 px-3 py-0.5 font-primary text-[11px] uppercase tracking-wide text-hitam/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </li>
  )
}

export default function Experience() {
  const intro = useReveal()

  return (
    <section
      id="experience"
      className="relative mx-auto w-full max-w-7xl scroll-mt-24 px-5 pb-16 pt-20 sm:pb-20 sm:pt-24"
    >
      <div className="flex w-full items-center justify-start text-start">
        <h2 className="section-heading">— Experience</h2>
      </div>

      <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.5fr] lg:gap-16">
        <div
          ref={intro.ref}
          className={`${intro.className} flex flex-col items-start`}
        >
          <p className="font-primary text-xs font-medium uppercase tracking-[0.25em] text-hitam/60">
            {experience.period}
          </p>

          <h3 className="mt-4 font-archivo text-4xl font-bold uppercase leading-[1.02] tracking-tight text-hitam sm:text-5xl xl:text-6xl">
            {experience.role}
          </h3>

          <p className="mt-5 max-w-sm font-archivo text-sm font-light leading-relaxed text-hitam/80 sm:text-base">
            {experience.summary}
          </p>
        </div>

        <ul className="w-full">
          {experience.highlights.map((item, index) => (
            <ExperienceItem
              key={item.title}
              item={item}
              index={index}
              last={index === experience.highlights.length - 1}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
