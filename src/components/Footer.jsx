import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/about#contact', label: 'Contact' },
  ]

  const social = [
    { href: 'https://github.com/akiyer18', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/akshaye-iyer/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:akshaye.iyer@outlook.com', icon: Mail, label: 'Email' },
  ]

  return (
    <footer className="border-t border-white/[0.06] bg-primary-950/50">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="space-y-4">
            <span className="text-sm font-semibold text-white">Akshaye Iyer</span>
            <p className="text-sm text-zinc-500 max-w-md">
              Building tools and systems with AI. Focus on practical applications and clear outcomes.
            </p>
            <div className="flex gap-3">
              {social.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-zinc-500 hover:text-zinc-300 transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          <nav className="flex flex-col gap-2">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-300 w-fit"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-10 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <span>&copy; {currentYear} Akshaye Iyer</span>
          <a
            href="https://github.com/akiyer18/akiyer18.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-400 transition-colors duration-300"
          >
            Source
          </a>
        </div>
      </div>
    </footer>
  )
}
