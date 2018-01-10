import api from '../global/api'

export const login = ({ email, password }) =>
  api.post({
    endpoint: '/api/v1/auth/sign_in',
    body: {email, password},
    types: ['LOGIN_REQUEST', 'LOGIN_SUCCESS', 'LOGIN_FAILURE']
  })
