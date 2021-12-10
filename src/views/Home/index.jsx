import React from 'react'
import Layout from '../../components/Layout'
import Sponsors from '../../components/Sponsors'
import Hero from '../../components/Hero'
import FAQ from '../../components/FAQ'
import About from '../../components/About'
import Prizes from '../../components/Prizes'
import OtherPrizes from '../../components/OtherPrizes'
import ContactUs from '../../components/ContactUs'
import WorkshopBanner from '../../components/WorkshopBanner'
import AboutHackathon from '../../components/AboutHackathon'
import JudgingCriteria from '../../components/JudgingCriteria'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <WorkshopBanner />
      <AboutHackathon />
      <Prizes />
      <OtherPrizes />
      <JudgingCriteria />
      <FAQ />
      <Sponsors />
      <ContactUs />
    </Layout>
  )
}

export default Home
