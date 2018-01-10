import React from 'react'
import PT from 'prop-types'
import { NavItem } from 'react-bootstrap'

const LogoutButton = ({ logout, removeCredentials }) => (
  <NavItem href="#" onClick={(e) => {e.preventDefault(); logout().then(removeCredentials)}}>Logout</NavItem>
)

LogoutButton.propTypes = {
  logout: PT.func.isRequired,
  removeCredentials: PT.func.isRequired
}

export default LogoutButton
