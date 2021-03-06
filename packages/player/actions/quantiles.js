import { createAction } from 'redux-actions'
import { SET_QUANTILE, LOAD_QUANTILES } from './types'

export const setQuantiles = createAction(SET_QUANTILE)
export const loadQuantiles = createAction(LOAD_QUANTILES)
