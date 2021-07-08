import React from 'react'
import { getImage } from 'gatsby-plugin-image'
import { useHeroQuery } from '../../hooks/useHeroQuery'
import { Wrapper, HeaderWrapper, StyledImg } from './Hero.styles'

const Hero = () => {
  //   console.log(useHeroQuery(), 'this is the main query')
  const {
    wpPage: { cta_homepage },
  } = useHeroQuery()
  const imageHere =
    cta_homepage.heroImage.localFile.childImageSharp.gatsbyImageData

  console.log(imageHere, 'this is CTAHOME')

  return (
    <Wrapper>
      <StyledImg image={imageHere} alt="Hero Image" />
      <HeaderWrapper>
        <h1>.</h1>
      </HeaderWrapper>
    </Wrapper>
  )
}

export default Hero
