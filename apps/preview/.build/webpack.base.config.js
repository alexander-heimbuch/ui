const { resolve, devServer, rules, plugins } = require('@podlove/build')

const path = require('path')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  mode: isProd ? 'production' : 'development',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].[chunkhash].js'
  },
  resolve: resolve({
    public: path.resolve(__dirname, '../public'),
  }),
  module: {
    rules: [rules.javascript(), rules.vue(), rules.url(), rules.vueStyles({ prod: isProd })]
  },
  plugins: isProd ? [
    plugins.vue(),
    plugins.env({ mode: 'production' })
  ] : [
    plugins.vue(),
    plugins.friendlyErrors(),
    plugins.env({ mode: 'development' })
  ]
}
