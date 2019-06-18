import Vue from 'vue'
import sagas from '@podlove/player-sagas'
import { createStore as createReduxStore, applyMiddleware, compose } from 'redux'
import { connect } from 'redux-vuex'
import { routerSaga } from '../sagas/routes'
import { fetchSaga } from '../sagas/fetch'
import { progressbarSaga } from '../sagas/progressbar'

import reducers from './reducers'
import * as selectors from './selectors'

export function createStore(env = 'server') {
  let composeEnhancers = compose
  let initialState = {}

  if (env === 'client') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    initialState = window.__INITIAL_STATE__ || {}
  }

  const store = createReduxStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(sagas.middleware))
  )

  sagas.run(
    fetchSaga,
    routerSaga,
    progressbarSaga({
      visible: selectors.progressbarVisible,
      progress: selectors.progressbarProgress
    })
  )

  connect({ Vue, store })

  return store
}
