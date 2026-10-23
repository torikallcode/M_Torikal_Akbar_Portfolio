import { useEffect, useState } from 'react'
import { navLinks, profile, socials } from '../data/portfolio'
import { GithubIcon } from './BrandIcons'

const lineBase =
  'my-1 block h-[3px] rounded-full bg-putih transition-all duration-300'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > lastY && y > 120)
      lastY = y
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (open) setHidden(false)

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-3 z-50 transition-transform duration-300 ${
          hidden && !open ? '-translate-y-[150%]' : 'translate-y-0'
        }`}
      >
        <nav className="mx-auto flex w-[calc(100%-2rem)] max-w-[22rem] items-center justify-between rounded-lg bg-slate-600/50 p-3 backdrop-blur-sm sm:max-w-lg lg:max-w-2xl lg:justify-center lg:py-2">
          <a href="#home" className="lg:hidden" aria-label="Torikal — Home">
            <img src={profile.logo} alt="Logo Torikal" className="w-9" />
          </a>

          <ul className="hidden items-center justify-center gap-7 lg:flex lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="relative z-[60] block lg:hidden"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span
              className={`${lineBase} w-[22px] ${
                open ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`${lineBase} w-[30px] ${
                open ? 'scale-0 opacity-0' : ''
              }`}
            />
            <span
              className={`${lineBase} w-[15px] ${
                open ? 'w-[22px] -translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>
        </nav>
      </header>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-28 bg-hitam transition-opacity duration-300 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-primary text-2xl font-bold uppercase text-putih"
                tabIndex={open ? 0 : -1}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={socials.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          tabIndex={open ? 0 : -1}
        >
          <GithubIcon size={32} className="text-putih" />
        </a>
      </div>
    </>
  )
}
