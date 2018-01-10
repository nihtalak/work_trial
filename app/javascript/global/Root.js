import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Switch } from 'react-router-dom'
import LoginPage from '../auth/components/LoginPage'
import PrivateRoute from './PrivateRoute'
import GuestRoute from './GuestRoute'
import App from './App'

import LogoutButton from '../auth/containers/LogoutButton'

// TODO: move it from here
const TasksListPage = () => (
  <div className="text-center">
    <h1>TasksList</h1>
    <LogoutButton />
  </div>
)

const Root = ({ store }) => (
  <Provider store={store}>
    <App>
      <Switch>
      <GuestRoute path="/login" component={LoginPage} />
      <PrivateRoute component={TasksListPage} />
      </Switch>
    </App>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
