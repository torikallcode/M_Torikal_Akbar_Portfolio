import { skills } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import {
  CssIcon,
  GitIcon,
  GoIcon,
  HtmlIcon,
  JavascriptIcon,
  MysqlIcon,
  ReactIcon,
  TailwindIcon,
} from './SkillIcons'

const iconMap = {
  html: HtmlIcon,
  css: CssIcon,
  javascript: JavascriptIcon,
  tailwind: TailwindIcon,
  react: ReactIcon,
  go: GoIcon,
  mysql: MysqlIcon,
  git: GitIcon,
}

function SkillRow({ skill, last }) {
  const Icon = iconMap[skill.icon]
  const reveal = useReveal()

  return (
    <li
      ref={reveal.ref}
      tabIndex={0}
      style={{ '--skill-color': skill.color }}
      className={`${reveal.className} group relative flex cursor-pointer items-center justify-between border-t border-slate-400 px-3 py-4 transition-colors duration-150 hover:bg-hitam focus:bg-hitam focus:outline-none ${
        last ? 'border-b' : ''
      }`}
    >
      <h3 className="font-archivo text-xl font-semibold uppercase text-hitam transition-colors group-hover:text-putih group-focus:text-putih">
        {skill.name}
      </h3>
      <Icon
        size={32}
        className="text-hitam/70 transition-colors duration-150 group-hover:text-[var(--skill-color)] group-focus:text-[var(--skill-color)]"
      />
    </li>
  )
}

export default function Skills() {
  return (
    <section
      id="section-skills"
      className="relative mx-auto w-full max-w-7xl scroll-mt-24 px-5 pb-16 pt-20 sm:pb-20 sm:pt-24"
    >
      <div className="flex w-full items-center justify-start text-start">
        <h2 className="section-heading">— Skills</h2>
      </div>

      <ul className="grid w-full grid-cols-1">
        {skills.map((skill, index) => (
          <SkillRow
            key={skill.name}
            skill={skill}
            last={index === skills.length - 1}
          />
        ))}
      </ul>
    </section>
  )
}
