const path = require('path')

const { output, resolve, devServer, rules, plugins } = require('@podlove/build')

const version = require('../package').version
const playerAssets = path.resolve('./node_modules/@podlove/player/dist')
const subscribeButtonAssets = path.resolve('./node_modules/@podlove/subscribe-button/dist')

module.exports = {
  mode: 'development',

  entry: {
    embed: './src/embed.js',
    share: './src/share.js',
    'extensions/external-events': './src/extensions/external-events.js'
  },
  output: output(),

  resolve: resolve({
    '@podlove/player': playerAssets
  }),

  optimization: { namedModules: true, namedChunks: true, splitChunks: { cacheGroups: { default: false } } },

  devtool: 'source-map',
  devServer: devServer({ port: 9000, contentBase: './dist' }),

  module: {
    rules: [
      rules.javascript({ include: ['localstorage', 'query-string', 'split-on-first', 'strict-uri-encode'] }),
      rules.style.config(rules.style.test.scss, [
        rules.style.loader.css(),
        rules.style.loader.postcss({
          plugins: [
            rules.style.postcss.plugins.clean,
            rules.style.postcss.plugins.autoprefixer
          ]
        }),
        rules.style.loader.sass()
      ]),
      rules.mustache(),
      rules.html()
    ]
  },

  plugins: [
    plugins.hmr(),
    plugins.html({
      filename: 'index.html',
      template: './example/example.html',
      exclude: ['share']
    }),
    plugins.html({
      files: {
        styles: ['styles'],
        scripts: ['vendor', 'styles', 'runtime', 'bootstrap']
      },
      filename: 'share.html',
      template: '!!mustache-loader!./src/player/share.mustache',
      exclude: ['embed', 'extensions/external-events'],
      base: `${version}/player/`
    }),
    plugins.env({
      MODE: 'development',
      BASE: '/',
      PLAYER_SCRIPTS: ['vendor', 'styles', 'runtime', 'bootstrap'],
      BUTTON_SCRIPTS: ['vendor', 'styles', 'runtime', 'list'],
      PLAYER_STYLES: ['styles'],
      BUTTON_STYLES: ['styles']
    }),
    plugins.copy([
      {
        from: playerAssets,
        to: `${version}/player/`
      },
      {
        from: subscribeButtonAssets,
        to: `${version}/button/`
      },
      {
        from: './example/episode.json'
      },
      {
        from: './example/config.json'
      },
      {
        from: './example/transcripts.json'
      },
      {
        from: './example/chapters.json'
      },
      {
        from: './example/example.jpg'
      },
      {
        from: './example/playlist.json'
      },
      { from: './example/episodes', to: 'episodes' },
      { from: './example/fonts', to: 'fonts' },
      { from: './example/test', to: 'test' }
    ])
  ]
}
