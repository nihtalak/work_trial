import { combineReducers } from 'redux'
import auth from './auth/reducer'
import tasklist from './tasklist/reducer'
import modal from './modal/reducer'
import users from './users/reducer'

export default combineReducers({
  auth,
  tasklist,
  modal,
  users
})
