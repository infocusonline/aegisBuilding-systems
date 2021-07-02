import React, { useState } from 'react'
import Hamburger from '../Hamburger/Hamburger'
import OverlayMenu from '../OverlayMenu/OverlayMenu'
import { GlobalStyles, Primary } from './Layout.styles'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleOverlay = () => {
    setMenuOpen((prev) => !prev)
  }

  return (
    <>
      <GlobalStyles />
      <Hamburger handleOverlay={handleOverlay} />
      <OverlayMenu menuOpen={menuOpen} callback={handleOverlay} />
      <Header />
      <Primary>{children}</Primary>
      <Footer />
    </>
  )
}

export default Layout
