import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Switch } from 'react-router-dom'
import LoginPage from '../auth/components/LoginPage'
import PrivateRoute from './PrivateRoute'
import GuestRoute from './GuestRoute'
import App from './App'
import TaskListPage from '../tasklist/components/TaskListPage'
import ModalRoot from '../modal/containers/ModalRoot'

const Root = ({ store }) => (
  <Provider store={store}>
    <App>
      <Switch>
      <GuestRoute path="/login" component={LoginPage} />
      <PrivateRoute component={TaskListPage} />
      </Switch>
      <ModalRoot />
    </App>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
