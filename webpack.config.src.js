const { join } = require('path')
const bookData = require('./helper/book_data')

const SRC_DIR = join(__dirname, 'src/book')

let JsConfig = (entryDir, outputDir) => {
  return {
    entry: join(entryDir, 'index.js'),
    output: {
      path: join(__dirname, outputDir),
      filename: 'src.js',
      libraryTarget: 'var',
      library: 'Src'
    },
    plugins: [],
    module: {
      loaders: [
        {
          test: /\.json$/,
          loader: 'json-loader'
        }
      ]
    },
    resolve: {
      extensions: [ '', '.js', '.json' ]
    }
  }
}

function SrcConfig () {
  let configs = []
  let books = bookData(SRC_DIR)
  {
    let entry = SRC_DIR
    let output = 'public'
    configs.push(JsConfig(entry, output))
  }
  for (let book of books) {
    {
      let entry = join(SRC_DIR, book.directory)
      let output = join('public', book.directory)
      configs.push(JsConfig(entry, output))
    }
    for (let chapter of book.chapters) {
      let entry = join(SRC_DIR, book.directory, chapter.directory)
      let output = join('public', book.directory, chapter.directory)
      configs.push(JsConfig(entry, output))
    }
  }
  return configs
}

module.exports = SrcConfig()
