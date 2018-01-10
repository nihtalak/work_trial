import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import LoginPage from '../auth/components/LoginPage'

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Route path="/login" component={LoginPage} />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
