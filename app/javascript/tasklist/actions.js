import api from '../global/api'

export const fetchTasks = () =>
  api.get({
    endpoint: '/api/v1/tasks',
    types: ['FETCH_TASKS_REQUEST', 'FETCH_TASKS_SUCCESS', 'FETCH_TASKS_FAILURE']
  })

export const destroyTask = (id) =>
  api.delete({
    endpoint: `/api/v1/tasks/${id}`,
    types: ['DELETE_TASK_REQUEST', {type: 'DELETE_TASK_SUCCESS', meta: id}, 'DELETE_TASK_FAILURE']
  })

export const updateTask = (id, props) =>
  api.patch({
    endpoint: `/api/v1/tasks/${id}`,
    body: {task: props},
    types: ['UPDATE_TASK_REQUEST', 'UPDATE_TASK_SUCCESS', 'UPDATE_TASK_FAILURE']
  })

export const createTask = (props) =>
  api.post({
    endpoint: `/api/v1/tasks`,
    body: {task: props},
    types: ['CREATE_TASK_REQUEST', 'CREATE_TASK_SUCCESS', 'CREATE_TASK_FAILURE']
  })

export const taskEvent = ({ type, payload }) => {
  if (type === 'UPDATE_TASK' || type === 'CREATE_TASK' || type === 'DELETE_TASK') {
      return (dispatch, getState) => {
        const currentUser = getState().auth.attributes.id
        return dispatch({type, payload, meta: {currentUser}})
      }
  }
}
