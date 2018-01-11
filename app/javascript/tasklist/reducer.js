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
    case 'DELETE_TASK_SUCCESS':
      let copy = {...state}
      delete copy[action.meta]
      return copy
    case 'UPDATE_TASK_SUCCESS':
    case 'CREATE_TASK_SUCCESS':
      return {...state, ...{[action.payload.id]: action.payload}}
    default:
      return state
  }
}

const ids = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TASKS_SUCCESS':
      return action.payload.map((t) => t.id)
    case 'CREATE_TASK_SUCCESS':
      return state.concat([action.payload.id])
    case 'DELETE_TASK_SUCCESS':
      return state.filter((id) => id != action.meta)
    default:
      return state
  }
}

export default combineReducers({
  loading,
  byId,
  ids
})
