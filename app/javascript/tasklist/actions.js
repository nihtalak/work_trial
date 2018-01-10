import api from '../global/api'

export const fetchTasks = () =>
  api.get({
    endpoint: '/api/v1/tasks',
    types: ['FETCH_TASKS_REQUEST', 'FETCH_TASKS_SUCCESS', 'FETCH_TASKS_FAILURE']
  })
