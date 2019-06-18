import { takeEvery, put, select, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { FETCH_DONE, READY, FETCH_FAILED } from '../store/types'
import * as actions from '../store/actions'

export const progressbarSaga = ({ progress, visible }) =>
  function* saga() {
    yield takeEvery(READY, init, { progress, visible })
  }

export function* init({ progress, visible }) {
  yield takeEvery(({ type }) => type.startsWith('FETCH_START'), start, { progress, visible })
  yield takeEvery(FETCH_DONE, stop, { visible })
  yield takeEvery(FETCH_FAILED, failed)
}

export function* start({ progress, visible }) {
  const isVisible = yield select(visible)

  if (isVisible) {
    return
  }

  yield put(actions.showProgressbar())
  yield call(setProgress, { visible, progress })
}

export function* setProgress({ visible, progress }) {
  const isVisible = yield select(visible)
  const current = yield select(progress)
  const next = current + 3

  if (next > 100 || !isVisible) {
    return
  }

  yield put(actions.setProgressbarProgress(next))

  yield delay(100)
  yield call(setProgress, { visible, progress })
}

export function* stop({ visible }) {
  const isVisible = yield select(visible)
  if (!isVisible) {
    return
  }

  yield put(actions.hideProgressbar())
}

export function* failed() {
  yield put(actions.failProgress())
}
