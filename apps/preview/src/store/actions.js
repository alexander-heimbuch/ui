import { createAction } from 'redux-actions'
import * as types from './types'

export const addEpisode = createAction(types.ADD_EPISODE)
export const setEpisodes = createAction(types.SET_EPISODES)
export const syncRouter = createAction(types.ROUTE_CHANGED)
