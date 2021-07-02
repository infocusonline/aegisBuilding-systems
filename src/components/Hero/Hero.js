import React from 'react'
import { getImage } from 'gatsby-plugin-image'
import { useHeroQuery } from '../../hooks/useHeroQuery'
import { Wrapper, HeaderWrapper, StyledImg } from '../Header/Header.styles'

const Hero = () => {
  const data = useHeroQuery()
  console.log(data, 'this data from hero')
  return (
    <div>
      <p>tsting</p>
    </div>
  )
}

export default Hero
