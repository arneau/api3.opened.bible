var path = require('path')

var config = {
  entry: './app/graphiql.jsx',
  output: {
    path: path.resolve('graphiql'),
    filename: 'graphiql.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'react'
          ]
        }
      }
    ]
  }
}

module.exports = config
