const path = require('path')
const { output, resolve, devServer, rules, plugins } = require('@podlove/build')
const componentAssets = path.resolve('./node_modules/@podlove/components/dist')

module.exports = [{
  mode: 'development',

  entry: {
    server: './src/server.js'
  },

  output: output(),
  target: 'node',

  resolve: resolve({
    styles: './src/styles',
    store: './src/store',
    directives: './src/directives',
    '@podlove/components': componentAssets
  }),

  devtool: 'inline-source-map',

  module: {
    rules: [rules.vue(), rules.javascript(), rules.images(), rules.vueStyles({ prod: false }), rules.pug()]
  },

  plugins: [
    plugins.vue(),
    plugins.env({ mode: 'development' })
  ]
}]
