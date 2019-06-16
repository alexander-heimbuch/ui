import { handleActions } from 'redux-actions'
import { SHOW_PROGRESSBAR, HIDE_PROGRESSBAR } from '../types'

export const INITIAL_STATE = {
  show: false
}

export const reducer = handleActions({
  [SHOW_PROGRESSBAR]: state => ({
    ...state,
    show: true
  }),

  [HIDE_PROGRESSBAR]: state => ({
    ...state,
    show: false
  })
}, INITIAL_STATE)
