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

const Home = () => {
  return (
    <Layout>
      <Example />
      <Hero />
      {/* About Section */}
      <About />
      {/* Prizes Section */}
      <Prizes />
      <OtherPrizes />
      {/* FAQ Section */}
      <FAQ />
      {/* Contact Us Section */}
      {/* Sponsors Section */}
      <Sponsors />
      <ContactUs />
    </Layout>
  )
}

export default Home
