import { CALL_API } from 'redux-api-middleware'
import { getCredentials } from '../auth/utils'

const makeAction = (method, options) => {
  const { body, headers, types, normalize, ...rest } = options

  return {
    [CALL_API]: {
      ...rest,
      types: [
        types[0],
        {
          type: typeof types[1] === 'string' ? types[1] : types[1].type,
          meta: typeof types[1] === 'string' ? null : types[1].meta,
          payload: (action, state, res) => {
            const contentType = res.headers.get('Content-Type')
            if (contentType && ~contentType.indexOf('json')) {
              return res.json()
            }
          }
        },
        types[2]
      ],
      body: body instanceof window.FormData ? body : JSON.stringify(body),
      headers: () => {
        let defaultHeaders = {}
        if (!(body instanceof window.FormData)) {
          defaultHeaders = {'Content-Type': 'application/json', 'Accept': 'application/json'}
        }
        const authHeaders = getCredentials()
        return {...defaultHeaders, ...authHeaders, ...headers}
      },
      method
    }
  }
}

const methods = ['get', 'post', 'put', 'patch', 'delete', 'head']
const api = methods.reduce((result, method) => {
  return { ...result, [method]: (options) => makeAction(method.toUpperCase(), options) }
}, {})

export default api
