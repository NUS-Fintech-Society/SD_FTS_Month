import React from 'react'
import Layout from '../../components/Layout'
import Example from '../../components/Example'
import Sponsors from '../../components/Sponsors'
import FAQ from '../../components/FAQ'
import About from '../../components/About'

const Home = () => {
  return (
    <Layout>
      <Example />
      {/* Hero Section */}
      {/* About Section */}
      <About />
      {/* Sponsors Section */}
      <Sponsors />
      {/* Prizes Section */}
      {/* FAQ Section */}
      <FAQ />
      {/* Contact Us Section */}
    </Layout>
  )
}

export default Home
