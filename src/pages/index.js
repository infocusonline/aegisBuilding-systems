import React from 'react'
import Hero from '../components/Hero/Hero'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="home" />
      <Hero />
    </Layout>
  )
}

export default IndexPage
