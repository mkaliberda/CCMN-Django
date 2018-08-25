import React from 'react'
import PropTypes from 'prop-types'
import NavToolBar from './navToolBar'

const Nav = ({ children }) => (

  <NavToolBar>
      {children}
    </NavToolBar>

)

Nav.propTypes = {
  children: PropTypes.any,
}

export default Nav
