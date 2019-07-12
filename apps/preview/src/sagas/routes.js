import { compose, prop } from 'ramda'
import { takeEvery, put, select } from 'redux-saga/effects'
import { ROUTE_CHANGED } from '../store/types'
import { fetchNetwork, fetchEpisode } from '../store/actions'

const routeName = compose(
  prop('name'),
  prop('payload')
)
const onRoute = name => action => action.type === ROUTE_CHANGED && routeName(action) === name

export const routerSaga = ({ routeParams }) =>
  function* saga() {
    yield takeEvery(onRoute('home'), home)
    yield takeEvery(onRoute('episode'), episode, { routeParams })
  }

export function* home() {
  yield put(fetchNetwork())
}

export function* episode({ routeParams }) {
  const { id } = yield select(routeParams)
  yield put(fetchEpisode({ id }))
}
