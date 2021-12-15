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

const Home = () => {
  return (
    <Layout>
      <div id="hero">
        <Hero />
      </div>
      <About />
      <AboutHackathon />
      <div id="prizes">
        <Prizes />
        <OtherPrizes />
      </div>
      <div id="timeline">
        <Timeline />
      </div>
      <div id="workshops">
        <WorkshopBanner />
        <Workshops />
      </div>
      <FAQ />
      <Sponsors />
      <div id="contact">
        <ContactUs />
      </div>
      {/* Temporarily Removed */}
      {/* <JudgingCriteria /> */}
    </Layout>
  )
}

export default Home
