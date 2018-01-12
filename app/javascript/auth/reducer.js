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
    case 'VALIDATE_AUTH_SUCCESS':
    case 'LOGIN_SUCCESS':
      return action.payload.data
    case 'LOGOUT_SUCCESS':
      return {}
    default:
      return state
  }
}

const signedIn = (state = false, action) => {
  switch (action.type) {
    case 'VALIDATE_AUTH_SUCCESS':
    case 'LOGIN_SUCCESS':
      return true
    case 'LOGOUT_SUCCESS':
      return false
    default:
      return state
  }
}

const validated = (state = false, action) => {
  switch (action.type) {
    case 'VALIDATE_AUTH_SUCCESS':
    case 'VALIDATE_AUTH_FAILURE':
      return true
    default:
      return state
  }
}

const authHeaders = (state = null, action) => {
  switch (action.type) {
    case 'VALIDATE_AUTH_SUCCESS':
    case 'LOGIN_SUCCESS':
      return action.meta
    default:
      return state
  }
}

export default combineReducers({
  ui,
  attributes,
  signedIn,
  validated,
  authHeaders
})
