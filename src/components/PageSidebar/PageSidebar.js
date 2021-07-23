import React from 'react'
import { Link } from 'gatsby'
import SidebarMessage from '../SidebarMessage/SidebarMessage'
import PageIcon from '../../images/tango-page-icon.svg'
import { Wrapper, Menu } from './PageSidebar.styles'

const PageSidebar = ({ children, parentChildren, currentPage, parent }) => {
  // console.log(parentChildren, 'here are the props')
  return (
    <Wrapper>
      {children?.nodes.length === 0 && !parent ? (
        <SidebarMessage />
      ) : (
        <div>Menu</div>
      )}
    </Wrapper>
  )
}

export default PageSidebar
