import { compose, prop } from 'ramda'
import { takeEvery, put } from 'redux-saga/effects'
import { ROUTE_CHANGED } from '../store/types'
import { fetchEpisodes } from '../store/actions'

const routeName = compose(prop('name'), prop('payload'))
const onRoute = name => action =>  action.type === ROUTE_CHANGED && routeName(action) === name

export function* routerSaga() {
  yield takeEvery(onRoute('home'), home)
}

export function* home() {
  yield put(fetchEpisodes())
}
