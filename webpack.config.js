const path = require('path');

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
    react: 'react',
    React: 'React',
    'react-dom': 'react-dom',
  },
  devServer: {
    contentBase: __dirname,
  },
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["react-hot-loader/babel"]
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
          },
        }],
      }, {
        test: /\.(js|jsx|tsx)$/i,
        include: /node_modules\/react-dom/,
        use: ['react-hot-loader/webpack'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
};
