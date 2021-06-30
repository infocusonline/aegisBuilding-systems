import React, { useState} from 'react'
import Hamburger from '../Hamburger/Hamburger'
import { HamburgerButton } from '../Hamburger/Hamburger.styles'

import {GlobalStyles, Primary  } from './Layout.styles'

const Layout= ({children }) => {
    const [ menuOpen, setMenuOpen ] = useState(false)


    const handleoverlay = () => setMenuOpen(prev => !prev)

    return(
        <>
        <GlobalStyles />
        <Hamburger handleoverlay={handleoverlay}/>
        <Primary>
            {children}
        </Primary>
        
        
        
        </>
    )
}

export default Layout