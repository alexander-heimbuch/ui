import { combineReducers } from 'redux'
import { reducer as action } from './action'
import { reducer as title } from './title'
import { reducer as episodes } from './episodes'

export default combineReducers({ title, episodes, action })
