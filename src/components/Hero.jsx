import { profile, socials } from '../data/portfolio'
import { GithubIcon } from './BrandIcons'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${profile.heroBackground})` }}
    >
      {/* Logo & GitHub di sudut atas (desktop) */}
      <div className="absolute inset-x-0 top-3 hidden px-11 lg:block">
        <div className="flex w-full items-center justify-between">
          <a href="#home" aria-label="Torikal — Home">
            <img
              src={profile.logo}
              alt="Logo Torikal"
              className="w-11 transition-opacity hover:opacity-70"
            />
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon
              size={40}
              className="text-putih transition-opacity hover:opacity-70"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-5 pt-28 text-center">
        <p className="font-primary text-base font-light uppercase text-putih sm:text-lg md:text-xl lg:text-2xl">
          {profile.greeting}
        </p>

        <h1 className="mt-3 font-archivo text-4xl font-extrabold uppercase leading-[1.08] tracking-tight text-putih sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          {profile.headlineTop}
          <span className="font-light">/</span>
          <br />
          <span>{profile.headlineBottom}</span>
        </h1>

        <p className="mt-5 font-primary text-sm text-putih md:text-base">
          {profile.tagline}
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-7xl justify-center gap-4 px-5 pb-10">
        <a href="#hero" className="pill-outline-light">
          Let&apos;s Talk <span className="ml-1 text-xl leading-none">↓</span>
        </a>
        <a href="/M_Torikal_Akbar_CV_Maganghub.pdf" download className="pill-outline-light">
          Curriculum Vitae
        </a>
      </div>
    </section>
  )
}
