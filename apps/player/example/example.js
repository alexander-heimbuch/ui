import polyfills from  '@podlove/build/polyfills'
import { init } from '@podlove/player-actions/init'

import example from './example.json'
import playlist from './playlist.json'

polyfills().then(() => {
  window.addEventListener(
    'load',
    () => {
      window.PODLOVE_STORE.dispatch(init(Object.assign({}, example, { playlist })))
    },
    false
  )
})

