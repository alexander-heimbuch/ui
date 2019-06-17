import { createApp } from './app'
import * as actions from './store/actions'

const { app, router, store } = createApp('client')

router.onReady(() => {
  app.$mount('#app')
  store.dispatch(actions.ready())
})

// service worker
if ('https:' === location.protocol && navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js')
}
