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
  let copy
  switch (action.type) {
    case 'FETCH_TASKS_SUCCESS':
      return action.payload.reduce((e, t) => {e[t.id] = t; return e}, {})
    case 'DELETE_TASK_SUCCESS':
      copy = {...state}
      delete copy[action.meta]
      return copy
    case 'DELETE_TASK':
      copy = {...state}
      delete copy[action.payload.id]
      return copy
    case 'UPDATE_TASK':
    case 'CREATE_TASK':
    case 'UPDATE_TASK_SUCCESS':
    case 'CREATE_TASK_SUCCESS':
      return {...state, ...{[action.payload.id]: action.payload}}
    default:
      return state
  }
}

const ids = (state = [], action) => {
  let currentUser, performer, owner
  switch (action.type) {
    case 'FETCH_TASKS_SUCCESS':
      return action.payload.map((t) => t.id)
    case 'CREATE_TASK':
    case 'CREATE_TASK_SUCCESS':
      return state.filter((t) => t != action.payload.id).concat([action.payload.id])
    case 'DELETE_TASK_SUCCESS':
      return state.filter((id) => id != action.meta)
    case 'DELETE_TASK':
      return state.filter((id) => id != action.payload.id)
    case 'UPDATE_TASK':
      currentUser = action.meta.currentUser
      owner = action.payload.owner.id
      performer = action.payload.performer.id

      if (currentUser !== owner && currentUser !== performer) { // Task became non of current user interest case
        return state.filter((id) => id != action.payload.id)
      } else {
        return state.filter((t) => t != action.payload.id).concat([action.payload.id])
      }
    default:
      return state
  }
}

export default combineReducers({
  loading,
  byId,
  ids
})
