import { prop, compose } from 'ramda'
import ApolloClient from 'apollo-boost'
import { gql } from 'apollo-boost'
import { call, takeEvery, put, select, race, delay, cancel, fork, take } from 'redux-saga/effects'

import podcastsQuery from '../graphql/podcasts.graphql'
import { FETCH_EPISODES } from '../store/types'
import { setEpisodes } from '../store/actions'

export const client = new ApolloClient({
  uri: 'http://localhost:4000/api/graphiql'
})

export function* fetchSaga() {
  yield fetchWait()
  yield takeEvery(FETCH_EPISODES, fetchEpisodes)
}

const request = query =>
  client
    .query({
      query: gql`
        ${query}
      `
    })
    .then(prop('data'))

const fetchStart = type => ({
  type: `FETCH_START_${type}`
})

const fetchDone = type => ({
  type: `FETCH_DONE_${type}`
})

export function* fetchEpisodes() {
  yield put(fetchStart('EPISODES'))

  const podcasts = yield call(request, podcastsQuery)
  yield put(setEpisodes(prop('podcasts', podcasts)))

  yield put(fetchDone('EPISODES'))
}

// export function* fetchDone() {
//   yield delay(100)
//   yield put({ type: 'FETCH_DONE' })
// }

export function* fetchWait() {
  while (true) {
    const action = yield take('FETCH_START_*')
    console.log(action)
  }
}

// FETCH_WAIT

// FETCH_{DATA}
// FETCHED_{DATA}
// FAILED_{DATA}

// FETCH_DONE
// FETCH_FAILED
