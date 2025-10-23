/**
 * Copyright 2020 Google LLC
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

// Karma configuration
// Use `npm run browser-test` in the main google-gax package to run browser tests with Karma.

const path = require('path');
// eslint-disable-next-line n/no-missing-require
const isDocker = require('is-docker')();
const webpackConfig = require('./webpack.config.js');
webpackConfig.performance = {hints: false};
delete webpackConfig.entry;
// eslint-disable-next-line n/no-missing-require
process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function (config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'child-process'],
    files: ['./test/*.ts'],

    client: {
      childProcess: {
        path: path.relative(
          process.cwd(),
          // eslint-disable-next-line n/no-missing-require
          require.resolve('showcase-server/build/src/index.js'),
        ),
        args: [],
        options: {},
      },
    },

    // list of files / patterns to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './test/*.ts': ['webpack', 'sourcemap'],
    },

    webpack: webpackConfig,
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeCustom'],
    customLaunchers: {
      ChromeCustom: {
        base: 'ChromeHeadless',
        // We must disable the Chrome sandbox when running Chrome inside Docker (Chrome's sandbox needs
        // more permissions than Docker allows by default)
        flags: isDocker
          ? ['--no-sandbox', '--disable-web-security']
          : ['--disable-web-security'],
      },
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
    // list of files / patterns to load in the browser
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
    // set correct MIME type when serving .ts files (already compiled to JavaScript):
    mime: {
      'text/javascript': ['ts'],
    },
    browserDisconnectTimeout: 60000, // Increase to 60 seconds (or more)
    browserNoActivityTimeout: 60000,
    mode: 'development',
  });
};
