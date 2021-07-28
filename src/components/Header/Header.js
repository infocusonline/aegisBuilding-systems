import React from 'react'
import { Link } from 'gatsby'
import Logo from '../../images/abs_logo_sys.png'
import { useMenuQuery } from '../../hooks/useMenuQuery'
import { Wrapper, Content } from './Header.styles'
import Navigation from '../Navigation/Navigation'

const Header = () => {
  const { site, wpMenu } = useMenuQuery()
  console.log(wpMenu, 'menu items')

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <img src={Logo} alt={site.siteMetadata.title} />
        </Link>
        <Navigation menu={wpMenu.menuItems.nodes} />
      </Content>
    </Wrapper>
  )
}

export default Header
