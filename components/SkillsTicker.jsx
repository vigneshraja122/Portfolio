'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
  'React.js', 'Next.js', 'Three.js', 'GSAP ScrollTrigger', 'JavaScript ES6+',
  'HTML5', 'CSS3', 'Tailwind CSS', 'Shopify Liquid', 'Shopify B2B',
  'Shopify Hydrogen', 'Shopify Oxygen', 'Shopware', 'REST API', 'Python',
  'n8n', 'Axios', 'Figma', 'Canva', 'Git', 'GitHub',
]

// Duplicate for seamless loop
const ticker = [...skills, ...skills]

// level: 3 = Master, 2 = Adept, 1 = Familiar
const stack = [
  {
    group: 'Frontend & Animation',
    items: [
      { name: 'React.js', level: 3 },
      { name: 'Next.js', level: 3 },
      { name: 'JavaScript (ES6+)', level: 3 },
      { name: 'Tailwind CSS', level: 3 },
      { name: 'GSAP (ScrollTrigger)', level: 2 },
      { name: 'Three.js', level: 2 },
    ],
  },
  {
    group: 'Shopify & Commerce',
    items: [
      { name: 'Shopify Liquid', level: 2 },
      { name: 'Shopify B2B', level: 2 },
      { name: 'Shopify Hydrogen', level: 1 },
      { name: 'Shopify Oxygen', level: 1 },
      { name: 'Shopware', level: 2 },
    ],
  },
  {
    group: 'Tools & Automation',
    items: [
      { name: 'REST API', level: 2 },
      { name: 'Git', level: 2 },
      { name: 'Figma', level: 2 },
      { name: 'Python', level: 1 },
      { name: 'n8n', level: 1 },
      { name: 'Canva', level: 1 },
    ],
  },
]

const levelLabel = { 3: 'Master', 2: 'Adept', 1: 'Familiar' }

function Bars({ level }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3].map((n) => (
        <span
          key={n}
          className={`inline-block w-1 rounded-sm ${n <= level ? 'bg-red' : 'bg-ink/15'}`}
          style={{ height: 4 + n * 3 }}
        />
      ))}
    </span>
  )
}

export default function SkillsTicker() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" data-dark="false" className="bg-cream border-y border-ink/10 overflow-hidden py-0" ref={ref}>
      {/* Section label */}
      <div className="flex items-center gap-4 px-8 py-5 border-b border-ink/10">
        <span className="font-mono text-xs text-red tracking-widest">02</span>
        <span className="w-8 h-px bg-ink/30" />
        <span className="font-mono text-xs tracking-widest text-muted uppercase">Skills</span>
      </div>

      {/* Ticker row 1 — left */}
      <div className="overflow-hidden border-b border-ink/8 py-5">
        <div className="marquee-track">
          {ticker.map((s, i) => (
            <span
              key={`a-${i}`}
              className="inline-flex items-center gap-6 pr-6 font-display italic text-2xl md:text-3xl text-ink select-none"
            >
              {s}
              <span className="red-dot mx-1 mb-1" />
            </span>
          ))}
        </div>
      </div>

      {/* Ticker row 2 — right (reverse) */}
      <div className="overflow-hidden border-b border-ink/10 py-5">
        <div className="marquee-track" style={{ animationDirection: 'reverse', animationDuration: '22s' }}>
          {[...ticker].reverse().map((s, i) => (
            <span
              key={`b-${i}`}
              className="inline-flex items-center gap-6 pr-6 font-mono text-xs tracking-widest uppercase text-muted select-none"
            >
              {s}
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-muted/40 mx-1" />
            </span>
          ))}
        </div>
      </div>

      {/* Heading + legend */}
      <div className="px-8 pt-16 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.h2
          className="font-display font-black text-ink leading-none"
          style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          The stack.
        </motion.h2>
        <div className="flex gap-6 font-mono text-xs tracking-widest text-muted uppercase">
          {[3, 2, 1].map((lvl) => (
            <div key={lvl} className="flex items-center gap-2">
              <Bars level={lvl} />
              <span>{levelLabel[lvl]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Categorized grid */}
      <div className="px-8 pb-16 grid md:grid-cols-3 gap-10">
        {stack.map((group, gi) => (
          <motion.div
            key={group.group}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: gi * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-xs tracking-widest text-red uppercase mb-4 pb-3 border-b border-ink/10">
              {group.group}
            </p>
            <ul className="flex flex-col gap-3">
              {group.items.map((item) => (
                <li key={item.name} className="flex items-center justify-between gap-4">
                  <span className="text-sm text-ink">{item.name}</span>
                  <Bars level={item.level} />
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
