'use client'

import Cursor from '../components/Cursor'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Story from '../components/Story'
import SkillsTicker from '../components/SkillsTicker'
import Work from '../components/Work'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Story />
        <SkillsTicker />
        <Work />
        <Contact />
      </main>
    </>
  )
}
