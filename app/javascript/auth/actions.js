import api from '../global/api'

const extractFromHeaders = (headers) =>
  ['access-token', 'client', 'uid', 'token-type'].reduce((o, h) => {
    o[h] = headers.get(h)
    return o
  }, {})

export const login = ({ email, password }) =>
  api.post({
    endpoint: '/api/v1/auth/sign_in',
    body: {email, password},
    types: [
      'LOGIN_REQUEST',
      {
        type: 'LOGIN_SUCCESS',
        meta: (action, state, res) => extractFromHeaders(res.headers)
      },
      'LOGIN_FAILURE'
    ]
  })

const _validate = (headers) =>
  api.get({
    endpoint: `/api/v1/auth/validate_token?access-token=${headers['access-token']}&uid=${headers.uid}&client=${headers.client}`,
    types: [
      'VALIDATE_AUTH_REQUEST',
      {
        type: 'VALIDATE_AUTH_SUCCESS',
        meta: (action, state, res) => extractFromHeaders(res.headers)
      },
      'VALIDATE_AUTH_FAILURE'
    ]
  })

export const validate = (headers) => headers ? _validate(headers) : {type: 'VALIDATE_AUTH_FAILURE'}

export const logout = () =>
  api.delete({
    endpoint: '/api/v1/auth/sign_out',
    types: ['LOGOUT_REQUEST', 'LOGOUT_SUCCESS', 'LOGOUT_FAILURE']
  })
