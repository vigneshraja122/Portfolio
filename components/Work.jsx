'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'

const alsoBuilt = [
  {
    title: 'Customer Support Help Center',
    desc: 'Responsive Shopware help center converted from Figma, shipped in a single day with AI-assisted development.',
    tech: 'SHOPWARE · HTML/CSS/JS',
  },
  {
    title: 'Newsletter Subscription API',
    desc: 'Frontend validation and verification logic integrated into the Sportstech.io newsletter signup flow.',
    tech: 'REST API · JAVASCRIPT',
  },
  {
    title: 'AI Visual Asset Pipeline',
    desc: 'AI-generated imagery, banners, and logo concepts for Beeyoond Gaming and WalkingPad Vergleich.',
    tech: 'AI IMAGE GEN · CANVA',
  },
]

const projects = [
  {
    num: '01',
    type: 'AI AUTOMATION',
    title: 'AI Shopify Dev Bot',
    desc: 'Claude Skills-powered bot that classifies Wrike tasks, automates the Figma → Shopify pipeline, runs Theme Check, QA, and posts preview links back to Wrike.',
    tech: 'CLAUDE AI · SHOPIFY · GIT · N8N',
    url: 'https://www.sportstech.de',
  },
  {
    num: '02',
    type: 'WEB3 FRONTEND',
    title: 'Sportstech.io Platform',
    desc: 'Three iterative UI versions of a Web3 fitness platform — built with Next.js, Tailwind CSS, and GSAP ScrollTrigger animations.',
    tech: 'NEXT.JS · GSAP · TAILWIND · REST API',
    url: 'https://crypto-designphase2-update.netlify.app',
  },
  {
    num: '03',
    type: 'LEGAL TECH',
    title: 'Semanticverse AI Legal Suite',
    desc: 'Front-end for an AI-powered legal toolkit — judgment summarizer, case timeline generator, and a chat assistant for querying large file collections with source verification.',
    tech: 'REACT.JS · REST API · UI/UX',
    url: null,
  },
  {
    num: '04',
    type: 'AFFILIATE SITE',
    title: 'WalkingPad Vergleich',
    desc: 'Full multi-page affiliate comparison site using AI-assisted dev. Site architecture, AI image generation, and German translation — all via prompt engineering.',
    tech: 'NEXT.JS · TAILWIND · MINIMAX AI',
    url: 'https://www.walkingpadvergleich.com',
  },
  {
    num: '05',
    type: 'SHOPIFY',
    title: 'Sportstech.de Storefront',
    desc: 'Shopify landing pages and PDPs built with Liquid, working extensively with Metafields and Metaobjects for dynamic content across the B2B storefront.',
    tech: 'SHOPIFY LIQUID · B2B · METAFIELDS',
    url: 'https://www.sportstech.de',
  },
  {
    num: '06',
    type: 'COMPANY SITE',
    title: 'Beeyoond Gaming Website',
    desc: 'Complete company website from scratch — no Figma designs. Planned structure, navigation, built reusable components, integrated Contact Us form.',
    tech: 'NEXT.JS · TAILWIND CSS · REACT',
    url: 'https://www.beeyoondgaming.com',
  },
  {
    num: '07',
    type: 'PRODUCT PAGE',
    title: 'Sportstech NEO Landing',
    desc: 'High-performance product landing page inside Shopware for a crypto/Web3 fitness product with interactive sections and responsive layouts.',
    tech: 'SHOPWARE · HTML5 · CSS3 · JAVASCRIPT',
    url: 'https://sportstech-funnel.netlify.app',
  },
]

function WorkCard({ p, index, inView }) {
  return (
    <motion.article
      className="work-card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Thumbnail */}
      <div
        className="w-full aspect-video rounded-sm flex items-center justify-center overflow-hidden -mt-1"
        style={{ background: `linear-gradient(135deg, rgba(200,57,43,0.25), rgba(237,232,223,0.06))` }}
      >
        <span className="font-display italic text-cream/30 select-none" style={{ fontSize: '3.5rem' }}>
          {p.title.charAt(0)}
        </span>
      </div>

      {/* Number + type */}
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-red">{p.num}</span>
        <span className="font-mono text-xs tracking-widest text-cream/40">{p.type}</span>
      </div>

      {/* Title */}
      <h3 className="font-display text-3xl font-bold text-cream leading-tight">
        {p.title}
      </h3>

      {/* Desc */}
      <p className="text-cream/50 text-sm leading-relaxed flex-1">
        {p.desc}
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-cream/10" />

      {/* Tech + link */}
      <div className="flex items-end justify-between gap-4">
        <p className="font-mono text-xs text-cream/40 tracking-wider leading-relaxed">
          {p.tech}
        </p>
        {p.url && (
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest text-cream hover:text-red transition-colors flex items-center gap-1.5 shrink-0"
          >
            VISIT <span className="text-base leading-none">↗</span>
          </a>
        )}
      </div>
    </motion.article>
  )
}

export default function Work() {
  const ref = useRef(null)
  const pinRef = useRef(null)
  const trackRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [progress, setProgress] = useState(0)
  const [trackWidth, setTrackWidth] = useState(0)
  const [isPinned, setIsPinned] = useState(false)

  // Pin the card scroller while scrolling through it; release once the last card has passed.
  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ['start start', 'end end'],
  })

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        setTrackWidth(trackRef.current.scrollWidth - window.innerWidth)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const x = useTransform(scrollYProgress, [0, 1], [0, -trackWidth])

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(projects.length - 1, Math.round(v * (projects.length - 1)))
    setProgress(idx)
    setIsPinned(v > 0.001 && v < 0.999)
  })

  return (
    <section id="work" data-dark="true" className="section-dark" ref={ref}>
      {/* Pinned horizontal card scroller */}
      <div ref={pinRef} className="relative" style={{ height: `${projects.length * 70}vh` }}>
        <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
          {/* Header */}
          <div
            className={`flex items-center gap-4 px-8 py-5 border-b transition-colors duration-500 ${
              isPinned ? 'bg-ink-soft border-red/20' : 'bg-transparent border-cream/10'
            }`}
          >
            <span className="font-mono text-xs text-red tracking-widest">03</span>
            <span className="w-8 h-px bg-cream/20" />
            <span className="font-mono text-xs tracking-widest text-cream/40 uppercase">Work</span>
          </div>

          {/* Scroll-driven horizontal track */}
          <div className="flex-1 overflow-hidden">
            <style>{`#work ::-webkit-scrollbar { display: none; }`}</style>
            <motion.div ref={trackRef} className="flex h-full" style={{ x }}>
              {projects.map((p, i) => (
                <WorkCard key={p.num} p={p} index={i} inView={inView} />
              ))}
            </motion.div>
          </div>

          {/* Scroll hint + progress */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="px-8 py-4 border-t border-cream/10 flex items-center justify-between gap-3"
          >
            <span className="font-mono text-xs text-cream/30 tracking-widest">
              ↓ KEEP SCROLLING TO EXPLORE
            </span>
            <div className="flex items-center gap-3 font-mono text-xs text-red tracking-widest">
              <span>{String(progress + 1).padStart(2, '0')}</span>
              <span className="w-16 h-px bg-cream/20 relative overflow-hidden">
                <span
                  className="absolute inset-y-0 left-0 bg-red"
                  style={{ width: `${((progress + 1) / projects.length) * 100}%` }}
                />
              </span>
              <span>{String(projects.length).padStart(2, '0')}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Also built */}
      <div className="px-8 py-16 border-t border-cream/10">
        <h3 className="font-display text-cream text-3xl md:text-4xl font-bold mb-10">
          Also built
        </h3>
        <div className="flex flex-col">
          {alsoBuilt.map((item, i) => (
            <motion.div
              key={item.title}
              className="grid md:grid-cols-[1fr_2fr_auto] gap-4 md:gap-8 items-center py-5 border-b border-cream/10"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <p className="font-display font-semibold text-cream text-lg">{item.title}</p>
              <p className="text-cream/50 text-sm leading-relaxed">{item.desc}</p>
              <p className="font-mono text-xs text-cream/40 tracking-widest whitespace-nowrap">{item.tech}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
