import React from 'react'
import PT from 'prop-types'
import { Button } from 'react-bootstrap'

const LogoutButton = ({ logout, removeCredentials }) => (
  <Button bsSize="sm" type="submit" onClick={(e) => {e.preventDefault(); logout().then(removeCredentials)}}>Logout</Button>
)

LogoutButton.propTypes = {
  logout: PT.func.isRequired,
  removeCredentials: PT.func.isRequired
}

export default LogoutButton
