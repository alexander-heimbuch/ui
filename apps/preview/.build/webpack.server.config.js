const path = require('path')
const { resolve, plugins } = require('@podlove/build')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(base, {
  target: 'node',
  devtool: '#source-map',
  entry: './src/entry-server.js',
  output: {
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  },
  resolve: resolve({
    'create-api': './create-api-server.js'
  }),
  // https://webpack.js.org/configuration/externals/#externals
  // https://github.com/liady/webpack-node-externals
  externals:
    nodeExternals({
      modulesDir: path.resolve(__dirname, 'node_modules'),
      whitelist: /\.css$/
    }),
  plugins: [
    plugins.env({
      'process.env.NODE_ENV': process.env.NODE_ENV || 'development',
      'process.env.VUE_ENV': 'server'
    }),
    new VueSSRServerPlugin()
  ]
})
