import { handleActions } from 'redux-actions'

import { ADD_EPISODE, SET_EPISODES } from '../types'

export const INITIAL_STATE = []

export const reducer = handleActions(
  {
    [ADD_EPISODE]: (state, { payload }) => [...state, payload],
    [SET_EPISODES]: (_, { payload }) => payload
  },
  INITIAL_STATE
)
