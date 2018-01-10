import { combineReducers } from 'redux'

const ui = (state = {loading: false, errors: null}, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {...state, loading: true}
    case 'LOGIN_SUCCESS':
      return {...state, loading: false, errors: null}
    case 'LOGIN_FAILURE':
      return {...state, loading: false, errors: action.payload.response.errors}
    default:
      return state
  }
}

const attributes = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return action.payload.data
    default:
      return state
  }
}

const signedIn = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return true
    default:
      return state
  }
}

export default combineReducers({
  ui,
  attributes,
  signedIn
})
