import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import LoginPage from '../auth/components/LoginPage'
import App from './App'

const Root = ({ store }) => (
  <Provider store={store}>
    <App>
      <Route path="/login" component={LoginPage} />
    </App>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
