import { combineReducers } from 'redux'

const loading = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_TASKS_REQUEST':
      return true
    case 'FETCH_TASKS_SUCCESS':
    case 'FETCH_TASKS_FAILURE':
      return false
    default:
      return state
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_TASKS_SUCCESS':
      return action.payload.reduce((e, t) => {e[t.id] = t; return e}, {})
    default:
      return state
  }
}

const ids = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TASKS_SUCCESS':
      return action.payload.map((t) => t.id)
    default:
      return state
  }
}

export default combineReducers({
  loading,
  byId,
  ids
})
