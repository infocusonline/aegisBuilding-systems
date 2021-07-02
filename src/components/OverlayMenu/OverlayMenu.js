import React from 'react'
import { Link } from 'gatsby'
import CloseButton from '../../images/tango_close_button.svg'
import { useMenuQuery } from '../../hooks/useMenuQuery'
import { Overlay } from './OverlayMenu.styles'

const OverlayMenu = ({ menuOpen, callback }) => {
  const { wpMenu } = useMenuQuery()

  return (
    <Overlay menuOpen={menuOpen}>
      <div className="inner">
        <ul className="overlayMenu">
          {wpMenu.menuItems.nodes.map((item) =>
            !item.parentId ? (
              <li key={item.id}>
                <Link to={item.url} activeclassname="overlayActive">
                  {item.label}
                </Link>
              </li>
            ) : null
          )}
        </ul>
        <div
          className="closeButton"
          onClick={callback}
          role="button"
          tabIndex="0"
          onKeyDown={callback}
        >
          <img src={CloseButton} alt="close-button" />
        </div>
      </div>
    </Overlay>
  )
}

export default OverlayMenu
