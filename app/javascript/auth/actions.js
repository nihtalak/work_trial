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
