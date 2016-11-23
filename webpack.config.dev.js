const { join } = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')

const JsConfig = (entry, output) => {
  return {
    entry: entry,
    output: {
      path: output,
      filename: 'index.js',
      publicPath: '/js/'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    ],
    devtool: 'source-map',
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
      ],
      preLoaders: [
        {
          test: /\.js$/,
          loader: 'source-map-loader'
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
    let output = join(__dirname, 'docs')
    configs.push(JsConfig(entry, output))
  }
  {
    let entry = join(__dirname, 'ui/js/entries/book.tsx')
    let output = join(__dirname, 'docs/the_epistle_of_barnabas')
    configs.push(JsConfig(entry, output))
  }
  {
    let entry = join(__dirname, 'ui/js/entries/article.tsx')
    let output = join(__dirname, 'docs/the_epistle_of_barnabas/chapter_1')
    configs.push(JsConfig(entry, output))
  }
  return configs
}

const CssConfig = () => {
  return {
    entry: join(__dirname, 'ui/scss/index.scss'),
    output: {
      path: join(__dirname, 'docs/css'),
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
