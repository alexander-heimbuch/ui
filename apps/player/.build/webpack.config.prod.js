const path = require('path')
const { entry, output, resolve, rules, plugins, optimization } = require('@podlove/build')
const componentAssets = path.resolve('./node_modules/@podlove/components/dist')

module.exports = {
  mode: 'production',

  entry: {
    player: './player.js',
    bootstrap: './bootstrap.js'
  },

  output: output(),

  optimization: optimization(),

  resolve: resolve({
    styles: './src/styles',
    store: './src/store',
    directives: './src/directives',
    '@podlove/components': componentAssets
  }),

  module: {
    rules: [
      rules.vue(),
      rules.javascript(),
      rules.images(),
      rules.style.config(rules.style.test.scss, [
        rules.style.loader.minify(),
        rules.style.loader.css(),
        rules.style.loader.postcss({
          plugins: [
            rules.style.postcss.plugins.clean,
            rules.style.postcss.plugins.autoprefixer
          ]
        }),
        rules.style.loader.sass()
      ]),
      rules.pug()
    ]
  },

  plugins: [
    plugins.vue(),
    plugins.css(),
    plugins.minifyCss(),
    plugins.version(),
    plugins.base('.'),
    plugins.env('production')
  ]
}
