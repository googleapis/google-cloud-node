/**
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable n/no-missing-require */

const webpack = require('webpack');
module.exports = {
  entry: './build/src/index.js',
  externals: {
    crypto: '{}',
    'node:buffer': '{}',
    'node:fs': '{}',
    'node:http': '{}',
    'node:https': '{}',
    'node:net': '{}',
    'node:path': '{}',
    'node:process': '{}',
    'node:stream': '{}',
    'node:stream/web': '{}',
    'node:url': '{}',
    'node:util': '{}',
    'node:zlib': '{}',
    worker_threads: '{}',
    fs: '{}',
    child_process: '{}',
    tls: '{}',
    net: '{}',
  },
  resolve: {
    alias: {
      process: 'process/browser',
    },
    extensions: ['.ts', '.js', '.json'],
    fallback: {
      fs: 'empty',
      child_process: 'empty',
      // eslint-disable-next-line n/no-extraneous-require
      assert: require.resolve('assert/'),
      util: require.resolve('util'),
      stream: require.resolve('stream-browserify'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      querystring: require.resolve('querystring-es3'),
      url: require.resolve('url/'),
      crypto: require.resolve('crypto'),
      os: require.resolve('os-browserify/browser'),
      path: require.resolve('path-browserify'),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
    new webpack.ProvidePlugin({
      'node-fetch': ['fetch'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /node_modules[\\/]retry-request[\\/]/,
        use: 'null-loader',
      },
      {
        test: /node_modules[\\/]gcp-metadata/,
        use: 'null-loader',
      },
      {
        test: /node_modules[\\/]@grpc[\\/]grpc-js/,
        use: 'null-loader',
      },
      {
        test: /build[\\/]src[\\/]grpc\.js$/,
        use: 'null-loader',
      },
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  cache: false,
  mode: 'development',
};
