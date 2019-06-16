import { takeEvery, put } from 'redux-saga/effects'

import { FETCH_DONE } from '../store/types'
import * as actions from '../store/actions'

export function* progressbarSaga() {
  yield takeEvery(FETCH_DONE, put, actions.showProgressbar())
  yield takeEvery(({ type }) => type.startsWith('FETCH_START'), put, actions.hideProgressbar())
}
