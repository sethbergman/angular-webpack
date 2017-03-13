var webpack = require('webpack');

var config = {
  context: __dirname + '/app',
  entry: './index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      ON_TEST: process.env.NODE_ENV === 'test'
    })
  ],

  module: {
    loaders: [
      {test: /\.js$/, loader: 'ng-annotate!babel', exclude: /node_modules/},
      {test: /\.html$/, loader: 'raw', exclude: /node_modules/},
      {test: /\.css$/, loader: 'style!css', exclude: /node_modules/},
      {test: /\.styl$/, loader: 'style!css!stylus', exclude: /node_modules/}
    ]
  }
};

if (process.env.NODE_ENV === 'production') {
  config.output.path = __dirname + '/public';
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
  config.devtool = 'source-map';
}

module.exports = config;


// var path = require('path');
// require('./app/index.js');
//
// module.exports = {
//     entry: {
//         test: path.join(__dirname, "index.js")
//     },
//     module: {
//         loaders: [
//             {
//               test: /\.html$/,
//               loader: "../../index.js"
//             }
//         ]
//     },
//     output: {
//         path: __dirname,
//         publicPath: "/",
//         filename: "bundle.js"
//     }
// };
