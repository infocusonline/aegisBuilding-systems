import React from 'react'
import { StyledImg } from './CTACustom.styles'

const CTACustom = ({ blockImages, title, link, description }) => {
  return (
    <div className="flex">
      <div>
        <h1>{title}</h1>
        <StyledImg image={blockImages} alt="Hero Image" />

        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  )
}

export default CTACustom
