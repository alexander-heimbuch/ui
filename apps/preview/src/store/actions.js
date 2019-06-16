import { createAction } from 'redux-actions'
import * as types from './types'

export const addEpisode = createAction(types.ADD_EPISODE)
export const setEpisodes = createAction(types.SET_EPISODES)
export const syncRouter = createAction(types.ROUTE_CHANGED)
export const fetchDone = createAction(types.FETCH_DONE)
export const fetchFailed = createAction(types.FETCH_FAILED)
export const fetchEpisodes = createAction(types.FETCH_EPISODES)
export const routeChanged = createAction(types.ROUTE_CHANGED)

// Progressbar
export const showProgressbar = createAction(types.SHOW_PROGRESSBAR)
export const hideProgressbar = createAction(types.HIDE_PROGRESSBAR)
