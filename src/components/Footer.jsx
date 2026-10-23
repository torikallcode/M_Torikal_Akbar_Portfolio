import { footer, profile, socialLinks } from '../data/portfolio'

const footerSocials = socialLinks.slice(0, 3)

function SocialPills({ className = '' }) {
  return (
    <div className={`mx-auto grid grid-cols-3 gap-2 sm:max-w-xs ${className}`}>
      {footerSocials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          className="footer-pill py-1 text-center"
        >
          {social.label}
        </a>
      ))}
    </div>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="flex w-full flex-col items-center bg-hitam px-5 pb-7 pt-20">
      <div className="flex max-w-[19rem] flex-col items-center justify-center sm:max-w-[22rem] md:max-w-md">
        <h2 className="mb-7 text-center font-archivo text-3xl font-bold text-putih sm:text-4xl md:text-5xl">
          {footer.heading}
        </h2>
        <p className="mb-7 text-center font-archivo text-base font-light text-putih md:text-lg">
          {footer.quote}
        </p>
      </div>

      <div className="flex w-full max-w-7xl flex-col gap-5 rounded-2xl bg-putih p-5 md:gap-11 lg:gap-16 xl:gap-32">
        <div className="mb-5 flex flex-col justify-between gap-3 md:mb-0 md:flex-row">
          <div>
            <p className="text-center font-archivo text-sm font-medium text-hitam sm:text-base md:text-start md:text-sm xl:text-base">
              {footer.leftTop}
            </p>
            <p className="text-center font-archivo text-sm font-medium text-hitam sm:text-base md:text-start md:text-sm xl:text-base">
              {footer.leftBottom}
            </p>
          </div>
          <div>
            <p className="text-center font-archivo text-sm font-medium text-hitam sm:text-base md:text-end md:text-sm xl:text-base">
              {footer.rightTop}
            </p>
            <p className="text-center font-archivo text-sm font-medium text-hitam sm:text-base md:text-end md:text-sm xl:text-base">
              {footer.rightBottom}
            </p>
          </div>
        </div>

        <div className="mx-auto mb-5 flex max-w-[17rem] items-center justify-center sm:max-w-xs md:max-w-md xl:max-w-2xl">
          <p className="text-center font-anton text-4xl font-bold uppercase leading-tight text-hitam sm:text-5xl md:text-6xl xl:text-7xl">
            {footer.bigText}
          </p>
        </div>

        <div className="flex flex-col justify-between gap-3 md:flex-row">
          <div>
            <p className="text-center font-archivo text-sm font-medium text-hitam sm:text-base md:text-start md:text-sm xl:text-base">
              Click for contact me ↘
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="block text-center font-archivo text-sm font-medium text-hitam hover:underline sm:text-base md:text-start md:text-sm xl:text-base"
            >
              {profile.email}
            </a>
          </div>

          <SocialPills className="hidden md:grid" />

          <div>
            <a href="#home">
              <p className="text-center font-archivo text-sm font-medium text-hitam sm:text-base md:text-end md:text-sm xl:text-base">
                Back to top ↑
              </p>
            </a>
            <p className="text-center font-archivo text-sm font-medium text-hitam sm:text-base md:text-end md:text-sm xl:text-base">
              ® {year} All rights Reserved
            </p>
          </div>
        </div>

        <SocialPills className="md:hidden" />
      </div>
    </footer>
  )
}
