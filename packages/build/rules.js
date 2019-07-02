const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const cssClean = require('postcss-clean')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

const { prepend } = require('./utils')

const vue = () => ({
  test: /\.vue$/,
  use: 'vue-loader'
})

const javascript = () => ({
  test: /\.js?$/,
  loader: 'babel-loader',
  exclude: [/node_modules/]
})

const images = prefix => ({
  test: /\.(png|jpg|gif|jpeg|svg)$/,
  loader: 'file-loader',
  options: {
    name: prepend('[name].[ext]?[hash]', prefix)
  }
})

const mustache = () => ({
  test: /\.mustache$/,
  loader: 'mustache-loader?minify'
})

const style = {
  test: {
    scss: /\.scss$/,
    css: /\.css$/,
    postcss: /\.postcss$/
  },
  postcss: {
    plugins: {
      clean: cssClean({
        inline: ['none']
      }),
      autoprefixer,
      tailwind: tailwindcss
    }
  },
  loader: {
    vue: () => ({
      loader: 'vue-style-loader'
    }),
    minify: () => ({
      loader: MiniCssExtractPlugin.loader
    }),
    css: () => ({
      loader: 'css-loader'
    }),
    sass: ({ includePaths = [] } = {}) => ({
      loader: 'sass-loader',
      options: { includePaths }
    }),
    postcss: ({ plugins = [] } = {}) => ({
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        plugins
      }
    })
  },
  config: (test, use = []) => ({
    test,
    use
  })
}

const pug = () => ({
  test: /\.pug$/,
  loader: 'pug-plain-loader'
})

const fonts = prefix => ({
  test: /\.(eot|svg|ttf|woff|woff2)$/,
  loader: 'file-loader',
  options: {
    name: prepend('fonts/[name].[ext]?[hash]', prefix)
  }
})

const url = () => ({
  test: /\.(png|jpg|gif|svg)$/,
  loader: 'url-loader',
  options: {
    limit: 10000,
    name: '[name].[ext]?[hash]'
  }
})

const handlebars = () => ({ test: /\.hbs$/, loader: 'handlebars-loader' })

const graphql = () => ({ test: /\.graphql?$/, loader: 'webpack-graphql-loader' })

module.exports = {
  vue,
  javascript,
  images,
  fonts,
  pug,
  mustache,
  handlebars,
  url,
  graphql,
  style
}
