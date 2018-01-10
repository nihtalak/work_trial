export const saveCredentials = (response) => {
  if (response.meta && response.meta.uid) {
    window.localStorage.setItem('authHeaders', JSON.stringify(response.meta))
  }
}

export const getCredentials = () => {
  const headers = window.localStorage.getItem('authHeaders')
  return headers ? JSON.parse(headers) : null
}
