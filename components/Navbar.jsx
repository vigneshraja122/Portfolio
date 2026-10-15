'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const sections = [
  { id: 'intro',   label: 'INTRO',   num: '00' },
  { id: 'story',   label: 'STORY',   num: '01' },
  { id: 'skills',  label: 'SKILLS',  num: '02' },
  { id: 'work',    label: 'WORK',    num: '03' },
  { id: 'contact', label: 'CONTACT', num: '04' },
]

export default function Navbar() {
  const [active, setActive] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = sections.findIndex(s => s.id === e.target.id)
            if (idx >= 0) {
              setActive(idx)
              const isDark = e.target.dataset.dark === 'true'
              setDark(isDark)
              if (isDark) document.body.classList.add('dark-section')
              else document.body.classList.remove('dark-section')
            }
          }
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  const textColor = dark ? 'text-cream' : 'text-ink'
  const borderColor = dark ? 'border-cream/10' : 'border-ink/10'

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b ${borderColor} transition-colors duration-500`}
        style={{ background: dark ? 'rgba(15,14,12,0.95)' : 'rgba(237,232,223,0.95)', backdropFilter: 'blur(12px)' }}
      >
        {/* Logo */}
        <a href="#intro" className={`font-display text-xl font-black ${textColor} transition-colors`}>
          V<span className="text-red">.</span>
        </a>

        {/* Section indicator */}
        <div className={`hidden md:flex items-center gap-3 font-mono text-xs tracking-widest ${textColor} transition-colors`}>
          <span className="text-red">{sections[active].num}</span>
          <span className={`w-8 h-px ${dark ? 'bg-cream/30' : 'bg-ink/30'}`} />
          <span>{sections[active].label}</span>
        </div>

        {/* Menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`flex items-center gap-3 font-mono text-xs tracking-widest ${textColor} transition-colors`}
        >
          <span>{menuOpen ? 'CLOSE' : 'MENU'}</span>
          <div className="flex flex-col gap-1.5 w-6">
            <span className={`block h-px ${dark ? 'bg-cream' : 'bg-ink'} transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{transformOrigin: 'left'}} />
            <span className={`block h-px ${dark ? 'bg-cream' : 'bg-ink'} transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px ${dark ? 'bg-cream' : 'bg-ink'} transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{transformOrigin: 'left'}} />
          </div>
        </button>
      </motion.nav>

      {/* Fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-red flex flex-col justify-center px-12 py-24"
          >
            <nav className="flex flex-col gap-2">
              {sections.map((s, i) => (
                <motion.a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-baseline gap-4 py-4 border-b border-ink/15"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="font-mono text-xs text-ink/50">{s.num}</span>
                  <span className="font-display text-5xl md:text-7xl text-ink group-hover:italic transition-all duration-300">
                    {s.label.charAt(0) + s.label.slice(1).toLowerCase()}
                  </span>
                </motion.a>
              ))}
            </nav>

            {/* Footer — contact details inside menu */}
            <motion.div
              className="mt-auto pt-12 flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs tracking-widest text-ink/70 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a href="mailto:vigneshraja416@gmail.com" className="hover:text-ink transition-colors">
                vigneshraja416@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/vignesh-srinivasan-a49ab4233"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink transition-colors"
              >
                LinkedIn ↗
              </a>
              <span>Madurai, Tamil Nadu, India</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
