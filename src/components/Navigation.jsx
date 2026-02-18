import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import { Sun, Moon, Menu, X, Github, Linkedin, Mail, LayoutDashboard } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
  ]

  const socialLinks = [
    { href: 'https://github.com/akiyer18', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/akshaye-iyer/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:akshaye.iyer@outlook.com', icon: Mail, label: 'Email' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-primary-950/70 backdrop-blur-md border-b border-slate-200 dark:border-white/[0.06]">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-white hover:text-accent-500 dark:hover:text-accent-400 transition-colors duration-300"
          >
            <LayoutDashboard size={20} className="text-accent-500 dark:text-accent-400" />
            <span className="hidden sm:inline">Akshaye Iyer</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive(item.path)
                      ? 'text-accent-500 dark:text-accent-400'
                      : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100'
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <div className="absolute -bottom-1 left-0 right-0 h-px bg-accent-500 dark:bg-accent-400 rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-500 dark:text-zinc-400 hover:text-slate-700 dark:hover:text-zinc-100 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-500 dark:text-zinc-400 hover:text-slate-700 dark:hover:text-zinc-100 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200 dark:border-white/[0.06]">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive(item.path) ? 'text-accent-500 dark:text-accent-400' : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-white/[0.06]">
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                  className="p-2 text-slate-500 dark:text-zinc-400 hover:text-slate-700 dark:hover:text-zinc-100 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
                </div>
                <button
                  onClick={toggleTheme}
                  className="p-2 text-slate-500 dark:text-zinc-400 hover:text-slate-700 dark:hover:text-zinc-100 transition-colors duration-300"
                  aria-label="Toggle theme"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 