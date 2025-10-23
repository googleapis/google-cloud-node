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
  entry: './src/index.ts',
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      '../../package.json': path.resolve(__dirname, 'package.json'),
    },
    fallback: {
      buffer: 'browserify',
      child_process: false,
      crypto: false,
      fs: false,
      http: false,
      http2: false,
      https: false,
      net: false,
      os: false,
      path: false,
      process: false,
      stream: 'stream-browserify',
      'stream/web': false,
      url: false,
      util: false,
      worker_threads: false,
      zlib: false,
    },
  },
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, 'dist'),
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
    // webpack 5 doesn't know what to do with `node:` imports
    new webpack.NormalModuleReplacementPlugin(/node:/, resource => {
      resource.request = resource.request.replace(/^node:/, '');
    }),
  ],
};
