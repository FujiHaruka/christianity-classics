const { join } = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')

process.env.NODE_ENV = 'production'

const JsConfig = (entry, output, filename) => {
  return {
    entry: entry,
    output: {
      path: output,
      filename: filename,
      publicPath: '/js/'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin()
    ],
    module: {
      loaders: [
        {
          test: /\.ts(x?)$/,
          loader: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        }
      ]
    },
    resolve: {
      extensions: [ '', '.js', '.jsx', '.ts', '.tsx', '.json' ]
    },
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    }
  }
}

const JsConfigs = () => {
  let configs = []
  {
    let entry = join(__dirname, 'ui/js/entries/top.tsx')
    let output = join(__dirname, 'public')
    let filename = 'index.js'
    configs.push(JsConfig(entry, output, filename))
  }
  {
    let entry = join(__dirname, 'ui/js/entries/book.tsx')
    let output = join(__dirname, 'tmp')
    let filename = 'book.js'
    configs.push(JsConfig(entry, output, filename))
  }
  {
    let entry = join(__dirname, 'ui/js/entries/article.tsx')
    let output = join(__dirname, 'tmp')
    let filename = 'article.js'
    configs.push(JsConfig(entry, output, filename))
  }
  return configs
}

const CssConfig = () => {
  return {
    entry: join(__dirname, 'ui/scss/index.scss'),
    output: {
      path: join(__dirname, 'public/css'),
      filename: 'index.css',
      publicPath: '/css/'
    },
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style-loader', [ 'css-loader', 'postcss-loader', 'sass-loader' ])
        }
      ]
    },
    sassLoader: {
      // importer: jsonImporter
    },
    postcss () {
      return [ autoprefixer ]
    },
    plugins: [
      new ExtractTextPlugin('index.css')
    ]
  }
}

module.exports = [ CssConfig() ].concat(JsConfigs())
