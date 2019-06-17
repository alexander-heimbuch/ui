import { compose, prop } from 'ramda'
import * as progressbar from './reducers/progressbar'

const progressbarSlice = prop('progressbar')

export const progressbarVisible = compose(progressbar.visible, progressbarSlice)
export const progressbarProgress = compose(progressbar.progress, progressbarSlice)
export const progressbarFailed = compose(progressbar.failed, progressbarSlice)
