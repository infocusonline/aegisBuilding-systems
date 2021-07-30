import React from 'react'
import { getImage } from 'gatsby-plugin-image'
import { useHeroQuery } from '../../hooks/useHeroQuery'
import {
  Wrapper,
  HeaderWrapper,
  StyledImg,
  HeaderParagraph,
} from './Hero.styles'

const Hero = () => {
  const {
    wpPage: { cta_homepage },
  } = useHeroQuery()

  const image = cta_homepage.heroImage.localFile.childImageSharp.gatsbyImageData

  const { wpPage } = useHeroQuery()

  return (
    <Wrapper>
      <StyledImg image={image} alt="Hero Image" />
      <HeaderWrapper>
        <h1>Aegis Building Systems</h1>
      </HeaderWrapper>

      <HeaderParagraph
        dangerouslySetInnerHTML={{ __html: wpPage.content }}
      ></HeaderParagraph>
    </Wrapper>
  )
}

export default Hero
