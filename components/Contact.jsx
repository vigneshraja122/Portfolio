'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const socials = [
  { label: 'LinkedIn', value: 'linkedin.com/in/vignesh-srinivasan-a49ab4233', href: 'https://linkedin.com/in/vignesh-srinivasan-a49ab4233' },
  { label: 'Email',    value: 'vigneshraja416@gmail.com',       href: 'mailto:vigneshraja416@gmail.com' },
  { label: 'Phone',    value: '+91 77088 15865',                href: 'tel:+917708815865' },
  { label: 'Location', value: 'Madurai, Tamil Nadu, India',     href: null },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" data-dark="true" className="section-dark" ref={ref}>
      {/* Section label */}
      <div className="flex items-center justify-between gap-4 px-8 py-5 border-b border-cream/10">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-red tracking-widest">04</span>
          <span className="w-8 h-px bg-cream/20" />
          <span className="font-mono text-xs tracking-widest text-cream/40 uppercase">Contact</span>
        </div>
        <div className="hidden md:flex items-center gap-2 font-mono text-xs tracking-widest text-cream/40 uppercase">
          <span className="red-dot" />
          Currently: Sportstech.de
        </div>
      </div>

      {/* Main CTA */}
      <div className="px-8 py-20 md:py-28 max-w-6xl mx-auto">
        <motion.h2
          className="font-display font-black text-cream leading-none mb-12"
          style={{ fontSize: 'clamp(2.6rem, 8vw, 7rem)', lineHeight: 0.92 }}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          Let&apos;s build<br />
          <span className="italic text-cream/60">something</span><br />
          that ships.
        </motion.h2>

        {/* Intro line */}
        <motion.p
          className="text-cream/50 text-sm md:text-base leading-relaxed max-w-md mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Open to frontend engineering roles and freelance builds — Shopify
          storefronts, React/Next.js apps, and AI-assisted web development.
        </motion.p>

        {/* Email display */}
        <motion.a
          href="mailto:vigneshraja416@gmail.com"
          className="block font-display text-cream hover:text-red transition-colors duration-300 border-b border-cream/20 hover:border-red pb-3 mb-16"
          style={{ fontSize: 'clamp(1rem, 3vw, 2.2rem)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          vigneshraja416@gmail.com ↗
        </motion.a>

        {/* Socials grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-cream/10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {socials.map((s, i) => {
            const Tag = s.href ? motion.a : motion.div
            return (
              <Tag
                key={s.label}
                href={s.href || undefined}
                target={s.href?.startsWith('http') ? '_blank' : undefined}
                rel={s.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center justify-between py-5 border-b border-cream/10 hover:bg-cream/5 transition-colors -mx-px px-0"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.35 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <div>
                  <p className="font-mono text-xs tracking-widest text-cream/40 mb-1 uppercase">
                    {s.label}
                  </p>
                  <p className="font-sans text-cream text-sm">
                    {s.value}
                  </p>
                </div>
                {s.href && (
                  <span className="text-cream/30 group-hover:text-red text-xl transition-colors ml-4">
                    ↗
                  </span>
                )}
              </Tag>
            )
          })}
        </motion.div>
      </div>

      {/* Footer bar */}
      <motion.footer
        className="px-8 py-6 border-t border-cream/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <p className="font-mono text-xs text-cream/30 tracking-widest">
          © {new Date().getFullYear()} VIGNESH RAJA · ALL RIGHTS RESERVED
        </p>
        <p className="font-mono text-xs text-cream/30 tracking-widest">
          NEXT.JS · FRAMER MOTION · TAILWIND CSS
        </p>
        <a
          href="#intro"
          className="font-mono text-xs tracking-widest text-cream/40 hover:text-red transition-colors"
        >
          BACK TO TOP ↑
        </a>
      </motion.footer>
    </section>
  )
}
