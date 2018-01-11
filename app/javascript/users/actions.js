import api from '../global/api'

export const fetchUsers = () =>
  api.get({
    endpoint: `/api/v1/users`,
    types: ['FETCH_USERS_REQUEST', 'FETCH_USERS_SUCCESS', 'FETCH_USERS_FAILURE']
  })
