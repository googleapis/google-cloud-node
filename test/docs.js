/**
 * Copyright 2014 Google Inc. All Rights Reserved.
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

'use strict';

var format = require('string-format-obj');
var fs = require('fs');
var gcloud = require('../packages/google-cloud');
var glob = require('glob');
var mitm = require('mitm');
var packageOverviewConfigs = require('../scripts/docs/config.js').OVERVIEW;
var prop = require('propprop');
var vm = require('vm');

var util = require('../packages/common').util;

function runCodeInSandbox(code, sandbox) {
  vm.createContext(sandbox);
  try {
    vm.runInNewContext(code, sandbox, {
      filename: 'assert-code.vm',
      timeout: 5000
    });
  } catch(err) {
    // rethrow the error with code for context and resolving issues faster.
    var lineCol = err.stack.match('assert-code\.vm:(.+)');
    lineCol.line = lineCol[1];

    var lines = code.split('\n')
      .filter(function(line, index) {
        if (index < lineCol.line) {
          return line;
        }
      })
      .join('\n');

    err.message = '\n' + lines + '\n\n' + err.message;

    throw err;
  }
}

describe('documentation', function() {
  var tempFile = 'temp-test-file.tmp';
  var MITM;

  before(function(done) {
    // Set a global to indicate to any interested function inside of gcloud that
    // this is a sandbox environment.
    global.GCLOUD_SANDBOX_ENV = true;

    // Turn off the network so that API calls aren't actually made.
    MITM = mitm();

    // Create a temporary file for any examples that try to write to disk.
    fs.writeFile(tempFile, 'test', done);
  });

  after(function(done) {
    delete global.GCLOUD_SANDBOX_ENV;

    // Re-enable the network.
    MITM.disable();

    fs.unlink(tempFile, done);
  });

  var ignore = [
    '**/toc.json',
    '**/types.json'
  ];

  var directories = fs.readdirSync('docs/json');

  directories.forEach(function(directory) {
    // Parse over `index.json` first.
    var docsPath = 'docs/json/' + directory + '/master/*.json';
    var files = glob.sync(docsPath, { ignore: ignore }).sort(function(a, b) {
      if (a.indexOf('index.json') > -1) {
        return -1;
      }

      if (b.indexOf('index.json') > -1) {
        return 1;
      }
    });

    var moduleInstantationCode;

    files.forEach(function(filename) {
      var fileContents = fs.readFileSync(filename, {
        encoding: 'utf8'
      });
      var fileDocBlocks;

      try {
        fileDocBlocks = JSON.parse(fileContents);
      } catch(e) {
        throw new Error([
          'Failed to parse one of the doc files (' + e.message + ')',
          'Filename: ' + filename,
          'File contents: "' + fileContents + '"'
        ].join('\n'));
      }

      var mockConsole = Object.keys(console).reduce(function(console, method) {
        console[method] = util.noop;
        return console;
      }, {});

      var sandbox = {
        'google-cloud': gcloud,
        require: require,
        process: process,
        console: mockConsole,
        Buffer: Buffer,
        Date: Date,
        Array: Array,
        global: global
      };

      // For {module:datastore} docs.
      function FakeExpress() {
        return {
          get: function(route, callback) {
            callback({ query: {} }, {});
          }
        };
      }

      // For {module:vision} docs.
      function FakeLevel() {
        return {
          get: function(key, options, callback) {
            callback(null, 'image.jpg');
          }
        };
      }

      fileDocBlocks.methods.forEach(function(method) {
        var code = method.examples.map(prop('code')).join('\n');
        var lowercaseId = method.id.toLowerCase();

        var pkgConfig = packageOverviewConfigs[lowercaseId];

        if (pkgConfig && !moduleInstantationCode) {
          // Create code to initialize the variable that the class's prototype
          // methods use.
          moduleInstantationCode =
            format('var {instanceName} = require(\'{path}\')({config});', {
              instanceName: pkgConfig.instanceName || lowercaseId,
              path: '../packages/' + lowercaseId,
              config: JSON.stringify({
                // All of the minimum required options our APIs expect.
                projectId: 'grape-spaceship-123',
                cluster: 'cluster',
                zone: 'zone',
                key: 'apiKey'
              })
            });
        }

        if (moduleInstantationCode) {
          code = moduleInstantationCode + code;
        }

        code = code
          .replace(
            /require\('google-cloud'\)/g,
            'require(\'../packages/google-cloud\')'
          )
          .replace(
            /require\('(@google-cloud\/[^']*)/g,
            'require(\'../packages/' + directory + '/node_modules/$1'
          )
          .replace('require(\'express\')', FakeExpress.toString())
          .replace('require(\'level\')', FakeLevel.toString())

          // in:  fs.anyMethod('--any-file-path--
          // out: fs.anymethod('--a-temporary-file--
          .replace(/(fs\.[^(]+\(['"])([^'"]*)/g, '$1' + tempFile);

        var displayName = filename
          .replace('docs/json/master/', '')
          .replace('.json', '.js');

        displayName += '#' + method.id;

        it('should run ' + displayName + ' example without errors', function() {
          runCodeInSandbox(code, sandbox);
        });
      });
    });
  });
});
