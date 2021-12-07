import React from 'react'
import Layout from '../../components/Layout'
import Example from '../../components/Example'
import Sponsors from '../../components/Sponsors'
import Hero from '../../components/Hero'
import FAQ from '../../components/FAQ'
import About from '../../components/About'
import Prizes from '../../components/Prizes'
import OtherPrizes from '../../components/OtherPrizes'
import ContactUs from '../../components/ContactUs'
import AboutHackathon from '../../components/AboutHackathon'

const Home = () => {
  return (
    <Layout>
      <Example />
      <Hero />
      <Sponsors />
      {/* About Section */}
      <About />
      {/* Prizes Section */}
      <AboutHackathon />
      <Prizes />
      <OtherPrizes />
      {/* FAQ Section */}
      <FAQ />
      {/* Contact Us Section */}
      {/* Sponsors Section */}
      <ContactUs />
    </Layout>
  )
}

export default Home
