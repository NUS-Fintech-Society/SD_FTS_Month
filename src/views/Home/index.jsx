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
import Workshops from '../../components/Workshops'
import StaticTimeline from '../../components/MyTimeline/StaticTimeline'

const Home = () => {
  return (
    <Layout>
      <div id="hero">
        <Hero />
      </div>
      <About />
      <div id="timeline">
        <StaticTimeline />
      </div>
      <div id="hackathon">
        <AboutHackathon />
        <Prizes />
        <OtherPrizes />
        {/* <HackathonTimeline /> */}
      </div>
      <div id="workshops">
        <WorkshopBanner />
        <Workshops />
        {/* <WorkshopTimeline /> */}
      </div>
      <div id="faq">
        <FAQ />
      </div>
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
