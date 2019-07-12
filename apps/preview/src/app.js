import Vue from 'vue'
import VueI18n from 'vue-i18n'

import App from './App.vue'
import { createStore } from './store'
import { createRouter } from './router'
import { routeChanged } from './store/actions'
import translations from './lang'

Vue.use(VueI18n)

// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export function createApp(env = 'server') {
  // create store and router instances
  const store = createStore(env)
  const router = createRouter(env)

  const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: translations
  })

  // sync the router with the vuex store.
  // this registers `store.state.route`

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    i18n,
    router,
    render: h => h(App)
  })

  // Sync router with store
  router.beforeEach((to, _, next) => {
    store.dispatch(routeChanged(to))
    next()
  })

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return { app, router, store }
}
