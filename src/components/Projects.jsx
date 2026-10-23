import { useEffect, useRef, useState } from 'react'
import { projects } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'

function PlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M7 6v12l10-6z" />
    </svg>
  )
}

function ProjectCard({ project, onUnavailable }) {
  const reveal = useReveal()

  return (
    <article ref={reveal.ref} className={`${reveal.className} project-card`}>
      <div className="mb-3 aspect-[5/3] w-full overflow-hidden rounded-xl border-2 border-hitam">
        <img
          src={project.image}
          alt={`Pratinjau proyek ${project.title}`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-archivo text-xl font-bold text-hitam sm:text-3xl md:text-3xl lg:text-xl">
          {project.title}
        </h3>
        <p className="mb-3 font-archivo text-sm font-light leading-relaxed text-hitam">
          {project.description}
        </p>

        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex w-24 items-center justify-center gap-1 rounded-lg bg-hitam px-2 py-1 transition-opacity hover:opacity-80"
            aria-label={`Buka demo ${project.title}`}
          >
            <PlayIcon />
            <span className="font-archivo text-xs text-putih">Demo</span>
          </a>
        ) : (
          <button
            type="button"
            onClick={() => onUnavailable(project.demoNote)}
            className="flex w-24 cursor-pointer items-center justify-center gap-1 rounded-lg bg-hitam px-2 py-1 transition-opacity hover:opacity-80"
            aria-label={`Demo ${project.title} belum tersedia`}
          >
            <PlayIcon />
            <span className="font-archivo text-xs text-putih">Demo</span>
          </button>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  const [note, setNote] = useState('')
  const timer = useRef(null)

  const showNote = (message) => {
    setNote(message)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setNote(''), 3000)
  }

  useEffect(() => () => window.clearTimeout(timer.current), [])

  return (
    <section
      id="project"
      className="relative mx-auto w-full max-w-7xl scroll-mt-24 px-5 pb-16 pt-20 sm:pb-20 sm:pt-24"
    >
      <div className="flex w-full items-center justify-start text-start">
        <h2 className="section-heading">— Projects</h2>
      </div>

      <div className="grid w-full grid-cols-1 gap-9 p-3 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onUnavailable={showNote}
          />
        ))}
      </div>

      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-hitam px-5 py-3 font-primary text-sm text-putih shadow-lg transition-all duration-300 ${
          note ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        {note}
      </div>
    </section>
  )
}
