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
import Timeline from '../../components/MyTimeline'
import Workshops from '../../components/Workshops'
import JudgingCriteria from '../../components/JudgingCriteria'

const Home = () => {
  return (
    <Layout>
      <div id="hero">
        <Hero />
      </div>
      <About />
      <AboutHackathon />
      <div id="workshops">
        <WorkshopBanner />
        <Workshops />
      </div>
      <Prizes />
      <OtherPrizes />
      <JudgingCriteria />
      <div id="timeline">
        <Timeline />
      </div>
      <FAQ />
      <Sponsors />
      <div id="contact">
        <ContactUs />
      </div>
    </Layout>
  )
}

export default Home
