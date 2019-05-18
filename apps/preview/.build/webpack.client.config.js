const { plugins, resolve } = require('@podlove/build');
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')

const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

const config = merge(base, {
  entry: {
    app: './src/entry-client.js'
  },
  resolve: resolve({
    'create-api': './create-api-client.js'
  }),
  plugins: [
    plugins.env({
      'process.env.NODE_ENV': process.env.NODE_ENV || 'development',
      'process.env.VUE_ENV': 'client'
    }),

    // extract webpack runtime & manifest to avoid vendor chunk hash changing
    // on every build.
    new VueSSRClientPlugin()
  ]
})

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    // auto generate service worker
    plugins.serviceWorkerCache({
      cacheId: 'vue-hn',
      filename: 'service-worker.js',
      minify: true,
      dontCacheBustUrlsMatching: /./,
      staticFileGlobsIgnorePatterns: [/\.map$/, /\.json$/],
      runtimeCaching: [
        {
          urlPattern: '/',
          handler: 'networkFirst'
        },
        {
          urlPattern: /\/(top|new|show|ask|jobs)/,
          handler: 'networkFirst'
        },
        {
          urlPattern: '/item/:id',
          handler: 'networkFirst'
        },
        {
          urlPattern: '/user/:id',
          handler: 'networkFirst'
        }
      ]
    })
  )
}

module.exports = config
