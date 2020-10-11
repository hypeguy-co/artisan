const path = require('path');
const DuplicatePackageChecker = require("duplicate-package-checker-webpack-plugin");

module.exports = {
  entry: {
    index: __dirname + '/src/index.js'
  },
  output: {
    path: __dirname + '/dist/',
    filename: 'index.js',
    library: 'index',
    libraryTarget: 'commonjs2',
    umdNamedDefine: true 
  },
  externals: {
    react: 'commonjs react',
    React: 'commonjs react',
    'react-dom': 'commonjs react-dom',
  },
  // plugins: [new DuplicatePackageChecker()],
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    // alias: {
    //   react: path.resolve('./node_modules/react'),
    //   'react-dom': path.resolve('./node_modules/react-dom')
    // }
  }
};
