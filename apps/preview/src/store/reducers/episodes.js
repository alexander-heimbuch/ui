import { prop, propOr, compose, either } from 'ramda'
import { handleActions } from 'redux-actions'

import { ADD_EPISODE, SET_EPISODES } from '../types'

export const INITIAL_STATE = []

export const reducer = handleActions(
  {
    [ADD_EPISODE]: (state, { payload }) => [...state, payload],
    [SET_EPISODES]: (_, { payload }) => payload
  },
  INITIAL_STATE
)

const audio = propOr({}, 'audio')
const podcast = propOr({}, 'podcast')
const enclosure = propOr({}, 'enclosure')

const contributors = prop('contributors')
const image = prop('image')
const title = prop('title')
const description = prop('description')
const duration = compose(
  prop('duration'),
  audio
)

const episodeCover = image
const podcastCover = compose(
  image,
  podcast
)
const podcastTitle = compose(
  title,
  podcast
)

const cover = either(episodeCover, podcastCover)

const published = prop('publishedAt')

const latestEpisodes = episodes =>
  episodes.sort((a, b) => new Date(published(b)).getTime() - new Date(published(a)).getTime())

export const selectors = {
  title,
  episodeCover,
  description,
  duration,
  podcast,
  audio,
  enclosure,
  cover,
  podcastCover,
  podcastTitle,
  published,
  latestEpisodes,
  contributors
}
