import { handleActions } from 'redux-actions'

export const INITIAL_STATE = 'Home'

export const reducer = handleActions(
  {
    SET_TITLE: (_, { payload }) => payload
  }, INITIAL_STATE
)
