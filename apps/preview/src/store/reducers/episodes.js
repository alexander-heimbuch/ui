import { prop, propOr, compose, either, map } from 'ramda'
import { createObject } from '@podlove/utils/helper'

import { handleActions } from 'redux-actions'

import { ADD_EPISODE, SET_EPISODES } from '../types'

export const INITIAL_STATE = []

export const reducer = handleActions(
  {
    [ADD_EPISODE]: (state, { payload }) => {
      const inList = state.some(({ id }) => id === prop('id', payload))

      return inList ? state : [...state, payload]
    },
    [SET_EPISODES]: (_, { payload }) => payload
  },
  INITIAL_STATE
)

const id = prop('id')
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

const episode = {
  id,
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
  contributors
}

export const selectors = {
  episodes: map(createObject(episode))
}
