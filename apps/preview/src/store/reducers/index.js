import { combineReducers } from 'redux'
import { reducer as action } from './action'
import { reducer as title } from './title'
import { reducer as episodes } from './episodes'
import { reducer as router } from './router'
import { reducer as progressbar } from './progressbar'

export default combineReducers({ title, episodes, action, router, progressbar })
