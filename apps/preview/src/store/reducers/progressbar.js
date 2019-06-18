import { prop } from 'ramda'
import { handleActions } from 'redux-actions'
import {
  SHOW_PROGRESSBAR,
  HIDE_PROGRESSBAR,
  PROGRESS_PROGRESSBAR,
  FAIL_PROGRESSBAR
} from '../types'

export const INITIAL_STATE = {
  show: false,
  failed: false,
  progress: 0
}

export const reducer = handleActions(
  {
    [SHOW_PROGRESSBAR]: state => ({
      ...state,
      show: true,
      failed: false,
      progress: 0
    }),

    [HIDE_PROGRESSBAR]: state => ({
      ...state,
      show: false
    }),

    [PROGRESS_PROGRESSBAR]: (state, { payload }) => ({
      ...state,
      progress: payload
    }),

    [FAIL_PROGRESSBAR]: state => ({
      ...state,
      failed: true
    })
  },
  INITIAL_STATE
)

export const visible = prop('show')
export const failed = prop('failed')
export const progress = prop('progress')
