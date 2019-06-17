import { handleActions } from 'redux-actions'
import { prop } from 'ramda'
import { ROUTE_CHANGED } from '../types'

export const INITIAL_STATE = {
  name: null,
  path: null,
  params: null,
  query: null
}

export const reducer = handleActions(
  {
    [ROUTE_CHANGED]: (_, { payload }) => ({
      name: prop('name', payload),
      path: prop('path', payload),
      params: prop('params', payload),
      query: prop('query', payload)
    })
  },
  INITIAL_STATE
)
