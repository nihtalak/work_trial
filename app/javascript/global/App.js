import React from 'react'
import { connect } from 'react-redux'
import { validate } from '../auth/actions'
import { getCredentials } from '../auth/utils'

class App extends React.Component {
  componentDidMount () {
    const authHeaders = getCredentials()
    this.props.validate(authHeaders)
  }

  render () {
    if (this.props.validated) {
      return <div>{this.props.children}</div>
    } else {
      return null
    }
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    validated: auth.validated
  }
}

export default connect(mapStateToProps, {validate})(App)
