import Vue from 'vue'
import { createApp } from './app'

const { app, router } = createApp('client')

router.onReady(() => {

  app.$mount('#app')
})

// service worker
if ('https:' === location.protocol && navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js')
}
