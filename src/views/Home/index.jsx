import React from 'react'
import Layout from '../../components/Layout'
import Example from '../../components/Example'
import Sponsors from '../../components/Sponsors'
import Hero from '../../components/Hero'
import FAQ from '../../components/FAQ'

const Home = () => {
  return (
    <Layout>
      <Example />
      <Hero />
      {/* About Section */}
      <Sponsors />
      {/* Prizes Section */}
      {/* FAQ Section */}
      <FAQ />
      {/* Contact Us Section */}
    </Layout>
  )
}

export default Home
