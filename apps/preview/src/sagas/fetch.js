import { map, prop, compose, flatten } from 'ramda'
import ApolloClient from 'apollo-boost'
import { gql } from 'apollo-boost'
import { call, takeEvery, put, fork, take, race } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import podcastsQuery from '../graphql/podcasts.graphql'
import { FETCH_EPISODES } from '../store/types'
import * as actions from '../store/actions'

export const client = new ApolloClient({
  uri: 'http://localhost:4000/api/graphiql'
})

const request = query =>
  client
    .query({
      query: gql`
        ${query}
      `
    })
    .catch(err => {
      throw new Error(err)
    })
    .then(prop('data'))

export function* fetching() {
  let running = []
  console.log('fetching')

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

export function* fetch(type, query, action) {
  yield put({
    type: `FETCH_START_${type}`
  })

  try {
    const response = yield call(request, query)

    yield put(action(response))
    yield put({
      type: `FETCH_DONE_${type}`
    })
  } catch (err) {
    yield put(actions.fetchFailed())
  }
}

export function* timeout() {
  console.log('timeout')
  yield delay(1000)
  yield put(actions.fetchDone())
}

const setEpisodes = compose(
  actions.setEpisodes,
  flatten,
  map(prop('episodes')),
  prop('publishedPodcasts')
)

export function* fetchSaga() {
  yield takeEvery(FETCH_EPISODES, fetch, 'EPISODES', podcastsQuery, setEpisodes)

  yield race({
    fetching: fork(fetching),
    timeout: timeout
  })

  console.log('done')
}
