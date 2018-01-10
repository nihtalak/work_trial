import { combineReducers } from 'redux'
import auth from './auth/reducer'
import tasklist from './tasklist/reducer'

export default combineReducers({
  auth,
  tasklist
})
