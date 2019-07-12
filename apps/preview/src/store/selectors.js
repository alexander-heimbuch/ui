import { prop, compose, sort } from 'ramda'
import { composeObject, createObject } from '@podlove/utils/helper'
import { selectors as progressSelectors } from './reducers/progressbar'
import { selectors as episodeSelectors } from './reducers/episodes'
import { selectors as routerSelectors } from './reducers/router'

const slices = {
  progressbar: prop('progressbar'),
  episodes: prop('episodes'),
  router: prop('router')
}

export const episodes = compose(
  episodeSelectors.episodes,
  slices.episodes
)
export const progressbar = composeObject(slices.progressbar, progressSelectors)
export const router = composeObject(slices.router, routerSelectors)
export const episode = createObject(episodeSelectors.episode)

export const latestEpisodes = compose(
  sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime()),
  episodes
)

export const currentEpisode = state => {
  const { id } = router.params(state)
  return episodes(state).find(episode => prop('id', episode) === id)
}
