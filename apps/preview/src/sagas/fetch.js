import { map, prop, compose, flatten } from 'ramda'
import ApolloClient from 'apollo-boost'
import { gql } from 'apollo-boost'
import { call, takeEvery, put, fork, take, race } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import networkQuery from '../graphql/network'
import episodeQuery from '../graphql/episode'

import { FETCH_NETWORK, FETCH_EPISODE } from '../store/types'
import * as actions from '../store/actions'

export const client = new ApolloClient({
  uri: 'http://localhost:4000/api/graphiql'
})

const request = (query, variables = {}) =>
  client
    .query({
      query: gql`
        ${query(variables)}
      `
    })
    .catch(err => {
      throw new Error(err)
    })
    .then(prop('data'))

export function* fetching() {
  let running = []

  while (true) {
    const startAction = yield take(({ type }) => type.startsWith('FETCH_START_'))
    running = [...running, startAction.type.replace('FETCH_START_', '')]

    const finishedAction = yield take(({ type }) => type.startsWith('FETCH_DONE_'))
    running = running.filter(type => type !== finishedAction.type.replace('FETCH_DONE_', ''))

    if (running.length === 0) {
      yield put(actions.fetchDone())
    }
  }
}

export function* fetch(type, query, callback, { payload }) {
  yield put({
    type: `FETCH_START_${type}`
  })

  try {
    const response = yield call(request, query, payload)

    yield put(callback(response))
    yield put({
      type: `FETCH_DONE_${type}`
    })
  } catch (err) {
    yield put(actions.fetchFailed())
  }
}

const setNetwork = compose(
  actions.setEpisodes,
  flatten,
  map(prop('episodes')),
  prop('publishedPodcasts')
)

const setEpisode = compose(
  actions.addEpisode,
  prop('publishedEpisode')
)

// wait if a fech is happening
export function* waiting() {
  const { timeout } = yield race({
    fetched: take(({ type }) => type.startsWith('FETCH_START_')),
    timeout: delay(100)
  })

  if (timeout) {
    yield put(actions.fetchDone())
  }
}

export function* fetchSaga() {
  yield takeEvery(FETCH_NETWORK, fetch, 'NETWORK', networkQuery, setNetwork)
  yield takeEvery(FETCH_EPISODE, fetch, 'EPISODE', episodeQuery, setEpisode)

  // Fetch automatism
  yield fork(fetching)
  yield fork(waiting)
}
