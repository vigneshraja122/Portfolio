'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

function Waveform() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let t = 0
    let mouseX = canvas.width / 2
    let raf

    const resize = () => {
      canvas.width  = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener('resize', resize)

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
    })

    const draw = () => {
      const W = canvas.offsetWidth
      const H = canvas.offsetHeight
      ctx.clearRect(0, 0, W, H)

      const cx = mouseX / W  // 0–1 influence position

      // Ghost wave (lighter)
      ctx.beginPath()
      ctx.strokeStyle = 'rgba(15,14,12,0.15)'
      ctx.lineWidth = 1
      for (let x = 0; x <= W; x++) {
        const nx = x / W
        const distFromCenter = Math.abs(nx - cx)
        const amp = Math.exp(-distFromCenter * 6) * 28
        const freq = 4 + distFromCenter * 2
        const y = H / 2 + Math.sin(nx * Math.PI * freq - t * 2.5) * amp * 0.5
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }
      ctx.stroke()

      // Main wave
      ctx.beginPath()
      ctx.strokeStyle = 'rgba(15,14,12,0.7)'
      ctx.lineWidth = 1.5
      for (let x = 0; x <= W; x++) {
        const nx = x / W
        const distFromCenter = Math.abs(nx - cx)
        const amp = Math.exp(-distFromCenter * 5) * 32
        const freq = 3 + distFromCenter
        const y = H / 2 + Math.sin(nx * Math.PI * freq - t * 2) * amp
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }
      ctx.stroke()

      // Moving red dot on main wave
      const dotNX = cx
      const distCenter = 0
      const dotAmp = Math.exp(-distCenter * 5) * 32
      const dotFreq = 3
      const dotY = H / 2 + Math.sin(dotNX * Math.PI * dotFreq - t * 2) * dotAmp

      ctx.beginPath()
      ctx.arc(mouseX, dotY, 3.5, 0, Math.PI * 2)
      ctx.fillStyle = '#c8392b'
      ctx.fill()

      t += 0.015
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="waveform-canvas"
      style={{ width: '100%', height: '100px', display: 'block' }}
    />
  )
}

export default function Hero() {
  return (
    <section
      id="intro"
      data-dark="false"
      className="min-h-screen bg-cream flex flex-col pt-20"
    >
      {/* Top meta bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="flex items-center justify-between px-8 pt-6 pb-4"
      >
        <p className="font-mono text-xs tracking-widest text-muted uppercase">
          Frontend Developer
        </p>
        <p className="font-mono text-xs tracking-widest text-muted">
          EST. 2022
        </p>
      </motion.div>

      {/* Main content — grows to fill */}
      <div className="flex-1 flex flex-col justify-center px-8">
        {/* Giant name */}
        <motion.h1
          className="font-display font-black text-ink leading-none select-none"
          style={{ fontSize: 'clamp(5rem, 20vw, 18rem)', lineHeight: 0.88 }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          Vignesh
        </motion.h1>

        {/* Two-column row below name */}
        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-0 mt-8 md:mt-10">
          {/* Left — italic tagline */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          >
            <p
              className="font-display italic text-ink leading-tight"
              style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.6rem)' }}
            >
              I build responsive web apps,<br />
              immersive 3D experiences,<br />
              and Shopify storefronts.
            </p>
          </motion.div>

          {/* Right — description + bullets */}
          <motion.div
            className="md:w-1/2 md:pl-16 md:pb-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          >
            <p className="text-muted text-sm md:text-base leading-relaxed mb-6 max-w-md">
              3+ years building responsive web applications and immersive 3D,
              scroll-driven experiences with React, Next.js and Three.js — plus
              Shopify (Liquid &amp; Hydrogen) and Shopware storefront work.
            </p>
            <div className="flex flex-col gap-2 font-mono text-xs tracking-widest text-ink uppercase">
              {[
                'Frontend Developer, Sportstech.de',
                'Shopify Liquid · Hydrogen · Oxygen',
                'Madurai, Tamil Nadu, India',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="red-dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Waveform divider */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="mt-auto"
      >
        <div className="w-full h-px bg-ink/10" />
        <Waveform />
      </motion.div>
    </section>
  )
}
