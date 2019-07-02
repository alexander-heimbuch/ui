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
    rules: [
      rules.javascript(),
      rules.vue(),
      rules.url(),
      rules.style.config(rules.style.test.postcss, [
        rules.style.loader.vue(),
        rules.style.loader.css(),
        rules.style.loader.postcss({
          plugins: [
            rules.style.postcss.plugins.tailwind,
            rules.style.postcss.plugins.autoprefixer
          ]
        })
      ]),
      rules.graphql()
    ]
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
