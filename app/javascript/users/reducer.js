import { combineReducers } from 'redux'

const entities = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USERS_SUCCESS':
      return action.payload
    default:
      return state
  }
}

const loading = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_USERS_REQUEST':
      return true
    case 'FETCH_USERS_SUCCESS':
    case 'FETCH_USERS_FAILURE':
      return false
    default:
      return state
  }
}

export default combineReducers({
  entities,
  loading
})
