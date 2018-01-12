import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware';
import { createLogger } from 'redux-logger'
import rootReducer from '../reducer'

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk, apiMiddleware, createLogger())
    )
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
}

export default configureStore
