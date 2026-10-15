'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const milestones = [
  {
    year: '2017–20',
    title: 'Bachelor of Computer Application',
    desc: 'NMS S. Vellaichamy Nadar College, Madurai — CGPA 5.85. Laid the groundwork in programming fundamentals and computer applications.',
  },
  {
    year: '2020–22',
    title: 'Master of Computer Application',
    desc: 'Karpagam Academy of Higher Education, Coimbatore — CGPA 8.72. Built the foundation in software engineering and computer science.',
  },
  {
    year: '2023–25',
    title: 'Frontend Developer, Semanticverse AI',
    desc: 'Joined Semanticverse AI Pvt Ltd in Bengaluru (Jul 2023 – Feb 2025). Built front-end for AI-powered legal tools: judgment summarizer, timeline generator, and a chat assistant with source verification using React.js.',
  },
  {
    year: '2025–Now',
    title: 'Frontend Developer, Sportstech.de — Germany',
    desc: 'Joined Beeyoond Gaming / Sportstech (Nov 2025 – Present). Shipped the WalkingPad Vergleich affiliate site, Sportstech NEO landing page, Sportstech.io Web3 platform, Beeyoond Gaming\'s company website, and Shopify storefront work with an automated Wrike → Figma → Shopify pipeline.',
  },
]

export default function Story() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="story" data-dark="false" className="bg-cream py-24 px-8" ref={ref}>
      {/* Section header */}
      <div className="flex items-center gap-4 mb-16 border-b border-ink/10 pb-5">
        <span className="font-mono text-xs text-red tracking-widest">01</span>
        <span className="w-8 h-px bg-ink/30" />
        <span className="font-mono text-xs tracking-widest text-muted uppercase">Story</span>
      </div>

      {/* Intro — heading + strengths */}
      <motion.div
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 mb-24"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2
          className="font-display font-black text-ink leading-[0.95]"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
        >
          From campus<br />
          to <span className="italic text-red">production</span>.
        </h2>

        <div>
          <p className="text-muted text-sm md:text-base leading-relaxed mb-8 max-w-md">
            Front-End Developer with 3+ years of experience building responsive
            web applications and immersive, scroll-driven experiences —
            focused on scalable, high-performance, user-first solutions.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="font-mono text-xs tracking-widest text-red uppercase mb-3">
                Core Strengths
              </p>
              <ul className="flex flex-col gap-2 text-sm text-ink">
                <li>React.js &amp; Next.js</li>
                <li>Shopify Liquid &amp; Hydrogen</li>
                <li>GSAP &amp; Three.js</li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs tracking-widest text-red uppercase mb-3">
                Also Explored
              </p>
              <ul className="flex flex-col gap-2 text-sm text-muted">
                <li>Shopware storefronts</li>
                <li>Python &amp; n8n automation</li>
                <li>Figma-to-code workflows</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Timeline label */}
      <div className="max-w-4xl mx-auto flex items-center justify-between mb-10 pb-3 border-b border-ink/10">
        <span className="font-display italic text-xl text-ink">Timeline</span>
        <span className="font-mono text-xs tracking-widest text-muted uppercase">Since 2023 · 3+ years</span>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical red border line */}
        <div className="absolute left-28 top-0 bottom-0 w-px bg-red/20" />

        <div className="flex flex-col gap-0">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year + m.title}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-0 group"
            >
              {/* Year */}
              <div className="w-28 shrink-0 pt-6 pr-6 text-right">
                <span className="font-display font-bold text-red text-2xl select-none">
                  {m.year}
                </span>
              </div>

              {/* Dot + content */}
              <div className="flex-1 pl-8 pb-10 relative">
                {/* Dot on the line */}
                <div className="absolute -left-1 top-7 w-2 h-2 rounded-full bg-red group-hover:scale-150 transition-transform" />

                <div className="pt-5">
                  <h3 className="font-sans font-semibold text-ink text-base mb-1.5">
                    {m.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed max-w-xl">
                    {m.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
