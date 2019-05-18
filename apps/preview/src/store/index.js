import Vue from 'vue'
import sagas from '@podlove/player-sagas'
import { createStore as createReduxStore, applyMiddleware, compose } from 'redux'
import { connect } from 'redux-vuex'

import reducers from './reducers'

export function createStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createReduxStore(reducers, composeEnhancers(applyMiddleware(sagas.middleware)))

  connect({ Vue, store, actions })

  return store
}
