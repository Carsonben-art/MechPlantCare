import React from 'react'
import Hero from '../components/home/Hero'
import AboutSection from '../components/home/About'
import Features from '../components/home/Features'
import Services from '../components/home/Services'
import TestimonialSection from '../components/home/TestimonialSection'
import Blogs from '../components/home/Blogs'
import PricingSection from '../components/home/PricingSection'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Features />
      <Services />
      <PricingSection />
      <TestimonialSection />
      <Blogs />
    </div>
  )
}

export default Home
