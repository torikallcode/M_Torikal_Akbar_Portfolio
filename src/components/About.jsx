import { profile } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  const photo = useReveal()
  const text = useReveal()

  return (
    <section
      id="hero"
      className="relative w-full scroll-mt-24 px-5 pb-20 pt-20 sm:pt-24"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-3">
        <div ref={photo.ref} className={`${photo.className} flex justify-center`}>
          <div className="relative mb-10 h-72 w-64 rounded-2xl bg-hitam sm:h-[368px] sm:w-[336px] xl:h-[418px] xl:w-[386px]">
            <img
              src={profile.photo}
              alt={`Foto ${profile.name}`}
              loading="lazy"
              className="absolute -bottom-3 left-1/2 w-52 -translate-x-1/2 rounded-2xl sm:-bottom-9 sm:w-[288px] xl:w-[328px]"
            />
          </div>
        </div>

        <div
          ref={text.ref}
          className={`${text.className} mx-auto flex w-full max-w-xl flex-col gap-4 text-center lg:text-left`}
        >
          <h2 className="font-archivo text-5xl font-bold leading-[1.05] tracking-tight text-hitam sm:text-6xl xl:text-8xl">
            {profile.aboutTitle}
          </h2>
          <p className="max-w-lg font-archivo text-base font-medium leading-relaxed text-hitam sm:max-w-xs md:mx-auto md:max-w-md lg:mx-0 xl:max-w-lg">
            {profile.aboutText}
          </p>
        </div>
      </div>
    </section>
  )
}
