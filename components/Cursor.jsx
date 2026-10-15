'use client'

import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const dot  = document.getElementById('cursor-dot')
    const ring = document.getElementById('cursor-ring')
    if (!dot || !ring) return

    let rx = 0, ry = 0
    let mx = 0, my = 0

    const move = (e) => {
      mx = e.clientX
      my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top  = my + 'px'
    }

    let raf
    const animate = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top  = ry + 'px'
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', move)
    raf = requestAnimationFrame(animate)

    // Expand ring on interactive elements
    const grow = () => {
      ring.style.width  = '64px'
      ring.style.height = '64px'
      dot.style.transform = 'translate(-50%,-50%) scale(0)'
    }
    const shrink = () => {
      ring.style.width  = '36px'
      ring.style.height = '36px'
      dot.style.transform = 'translate(-50%,-50%) scale(1)'
    }

    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div id="cursor-dot"/>
      <div id="cursor-ring"/>
    </>
  )
}
