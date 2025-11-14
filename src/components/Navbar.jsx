import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500 grid place-items-center ring-1 ring-white/20">
            <Sparkles className="h-5 w-5 text-white drop-shadow" />
          </div>
          <span className="text-white text-lg font-semibold tracking-tight">
            j10<span className="text-fuchsia-400">effect</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="px-3 py-2 text-sm text-white/80 hover:text-white transition">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white text-sm transition border border-white/10">
            Start a project
          </a>
        </div>

        <button className="md:hidden text-white p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block px-2 py-2 rounded text-white/90 hover:bg-white/10">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="block px-2 py-2 rounded text-white/90 bg-white/10 border border-white/10">
              Start a project
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
