// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Use `npm run webpack` to produce Webpack bundle for this library.

const path = require('path');
const webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      '../../package.json': path.resolve(__dirname, 'package.json'),
    },
    fallback: {
      crypto: false,
      child_process: false,
      fs: false,
      http2: false,
      https: false,
      buffer: 'browserify',
      process: false,
      os: false,
      path: false,
      stream: 'stream-browserify',
      url: false,
      util: false,
      zlib: false,
    },
  },
  module: {
    rules: [
      {
        test: /node_modules\/https-proxy-agent\//,
        use: 'null-loader',
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'production',
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
};
