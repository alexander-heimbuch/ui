import { compose, prop } from 'ramda'
import { composeObject } from '@podlove/utils/helper'
import { selectors as progressbarSlices } from './reducers/progressbar'
import { selectors as episodeSlices } from './reducers/episodes'

const slices = {
  progressbar: prop('progressbar'),
  episodes: prop('episodes')
}

export const episodes = composeObject(slices.episodes, episodeSlices)
export const progressbar = composeObject(slices.progressbar, progressbarSlices)
