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
