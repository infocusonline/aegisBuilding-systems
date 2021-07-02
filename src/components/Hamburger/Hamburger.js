import React from 'react'
import { HamburgerButton } from './Hamburger.styles'
import HamburgerIcon from '../../images/menu.svg'

const Hamburger = ({ handleOverlay }) => {
  return (
    <HamburgerButton onClick={handleOverlay}>
      <img src={HamburgerIcon} alt="menu-hamburger" />
    </HamburgerButton>
  )
}

export default Hamburger
