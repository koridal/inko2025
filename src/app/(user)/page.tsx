import Hero from '@/components/Hero'
import HomeAbout from '@/components/HomeAbout'
import ProjectContent from '@/components/ProjectContent'
import ServicesCard from '@/components/ServiceCard'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeAbout />
      <ServicesCard />
      <ProjectContent />
    </div>
  )
}
