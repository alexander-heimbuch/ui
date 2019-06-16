import 'cross-fetch/polyfill'
import { createApp } from './app'
import { FETCH_DONE, FETCH_FAILED } from './store/types'

const isDev = process.env.NODE_ENV !== 'production'

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
export default context => {
  return new Promise((resolve, reject) => {
    const s = isDev && Date.now()
    const { app, router, store } = createApp()

    const { url } = context
    const { fullPath } = router.resolve(url).route

    if (fullPath !== url) {
      return reject({ url: fullPath })
    }

    // set router's location
    router.push(url)

    // wait until router has resolved possible async hooks
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      // no matched routes
      if (!matchedComponents.length) {
        return reject({ code: 404 })
      }

      const done = store.subscribe(() => {
        const state = store.getState()
        if (state.action.type !== FETCH_DONE && state.action.type !== FETCH_FAILED) {
          return
        }

        context.state = store.getState()

        if (state.action.type === FETCH_DONE) {
          resolve(app)
        }

        if (state.action.type === FETCH_FAILED) {
          reject()
        }

        done()
      })
    }, reject)
  })
}
