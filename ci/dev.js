#!/usr/bin/env node
/**
 * Start webpack-dev-server.
 */
const co = require('co')
const webpack = require('webpack')
const DevServer = require('webpack-dev-server')
const config = require('../webpack.config.dev')

const PORT = 3000
const HOST = '192.168.0.7'

co(function * () {
  const compiler = webpack(config)
  let server = new DevServer(compiler, {
    contentBase: 'docs',
    hot: true,
    historyApiFallback: false,
    compress: false,
    staticOptions: {},

    proxy: {
      // 本番が github.io のサブディレクトリなので
      '/christianity-classics': {
        target: `http://${HOST}:${PORT}`,
        pathRewrite: {'^/christianity-classics' : ''}
      }
    },

    // webpack-dev-middleware options
    quiet: false,
    noInfo: true,
    publicPath: '/',
    stats: { colors: true }
  })

  server.listen(PORT, HOST, function (err) {
    err ? console.error(err)
        : console.log(`webpack-dev-server listening at http://${HOST}:${PORT}`)
  })
})
