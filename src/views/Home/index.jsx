import React from 'react'
import Layout from '../../components/Layout'
import Example from '../../components/Example'
import Sponsors from '../../components/Sponsors'
import FAQ from '../../components/FAQ'
import About from '../../components/About'
import ContactUs from '../../components/ContactUs'

const Home = () => {
  return (
    <Layout>
      <Example />
      {/* Hero Section */}
      {/* About Section */}
      <About />
      {/* Prizes Section */}
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
