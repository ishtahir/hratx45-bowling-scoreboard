const path = require('path');

const DIST_FOLDER = path.resolve(__dirname, 'public');
const ENTRY_FILE = './client/index.jsx';

const config = {
  entry: ENTRY_FILE,
  output: {
    filename: 'bundle.js',
    path: DIST_FOLDER
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules',
        use: ['babel-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};

if (process.env.NODE_ENV === 'development') {
  config['mode'] = 'development';
  config['watch'] = true;
  config['devServer'] = {
    contentBase: DIST_FOLDER,
    compress: true,
    port: 9000
  };
} else if (process.env.NODE_ENV === 'production') {
  config['mode'] = 'production';
}

module.exports = config;
