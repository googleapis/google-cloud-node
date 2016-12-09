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

var createErrorClass = require('create-error-class');
var format = require('string-format-obj');
var fs = require('fs');
var glob = require('glob');
var jshint = require('jshint').JSHINT;
var mitm = require('mitm');
var multiline = require('multiline');
var overviews = require('../scripts/docs/config').OVERVIEW;
var path = require('path');
var prop = require('propprop');
var vm = require('vm');

var rootFile = 'index.json';
var noop = function() {};

var DocsError = createErrorClass('DocsError', function(err, code) {
  var lineCol = err.stack.match('assert-code\.vm:(.+)');

  if (!lineCol) {
    this.message = err.message;
    return;
  }

  lineCol.line = lineCol[1];

  var lines = code
    .split('\n')
    .filter(function(line, index) {
      return index < lineCol.line && line;
    })
    .join('\n');

  this.message = format('\n{lines}\n\n{message}', {
    lines: lines,
    message: err.message
  });
});

var JSHintError = createErrorClass('JSHintError', function(err) {
  this.message = format('"{evidence}" - {reason}', {
    evidence: err.evidence && err.evidence.trim(),
    reason: err.reason
  });

  this.code = err.code;
});

var FakeConsole = Object.keys(console)
  .reduce(function(console, method) {
    console[method] = noop;
    return console;
  }, {});

// For {module:datastore} docs.
var FakeExpress = function() {
  return {
    get: function(route, callback) {
      callback({ query: {} }, {});
    }
  };
};

// For {module:vision} docs.
var FakeLevel = function() {
  return {
    get: function(key, options, callback) {
      callback(null, 'image.jpg');
    }
  };
};

// For {module:speech} docs.
var FakeFs = function() {
  return {
    writeFile: function(name, contents, callback) {
      callback(null);
    },
    readFile: function(filename, callback) {
      callback(null, new Buffer(''));
    },
    readFileSync: function() {
      return new Buffer('');
    },
    createWriteStream: function() {
      return require('through2')();
    },
    createReadStream: function() {
      return require('through2')();
    }
  };
};

// For {module:google-cloud} docs.
var FakeBluebird = function() {
  return Promise;
};

// For {module:logging-bunyan} docs.
var fakeBunyan = function() {
  return {
    createLogger: function() {}
  };
};

// For {module:logging-winston} docs.
var fakeWinston = function() {
  return {
    add: function() {},
    emerg: function() {}
  };
};

var modules;

if (process.env.TEST_MODULE) {
  modules = [process.env.TEST_MODULE];
} else {
  modules = fs.readdirSync('docs/json');
}

modules.forEach(function(mod) {
  describe(mod + ' documentation', function() {
    var MITM;

    var docFiles = getDocs(mod);
    var moduleInstantationCode = createInstantiationCode(mod);
    var sandbox = {
      require: require,
      process: process,
      console: FakeConsole,
      Buffer: Buffer,
      Date: Date,
      Array: Array,
      global: global
    };

    before(function() {
      // Set a global to indicate to any interested function inside of gcloud
      // that this is a sandbox environment.
      global.GCLOUD_SANDBOX_ENV = true;

      // Turn off the network so that API calls aren't actually made.
      MITM = mitm();
    });

    after(function() {
      // Re-enable the network.
      MITM.disable();
    });

    docFiles.forEach(function(docFile) {
      docFile.methods
        .filter(function(method) {
          return method.examples && method.examples.length;
        })
        .forEach(function(method) {
          var name = [docFile.name, method.name].join('#');
          var snippet = createSnippet(mod, moduleInstantationCode, method);

          it('should run ' + name + ' examples without errors', function() {
            jshint(snippet, {
              // in several snippets we give an example as to how to access
              // a property (like metadata) without doing anything with it
              // e.g. `list[0].metadata`
              expr: true,

              // this allows us to redefine variables, generally it's bad, buuut
              // for copy/paste purposes this is desirable within the docs
              shadow: true
            });

            if (jshint.errors.length) {
              throw new JSHintError(jshint.errors[0]);
            }

            runCodeInSandbox(snippet, sandbox);
          });
        });
    });
  });
});

function getDocs(mod) {
  return glob
    .sync('docs/json/' + mod + '/*/*.json', {
      ignore: [
        '**/toc.json',
        '**/types.json'
      ]
    })
    .sort(function(a, b) {
      if (a.indexOf(rootFile) > -1) {
        return -1;
      }

      if (b.indexOf('index.json') > -1) {
        return 1;
      }
    })
    .map(function(filename) {
      return require(path.resolve(filename));
    });
}

function createInstantiationCode(mod) {
  var config = overviews[mod] || {};

  if (config.skip) {
    return;
  }

  return format(multiline.stripIndent(function() {/*
    var {instanceName} = require('{path}')({config});

    var api = {instanceName}.api;
    if (api) {
      Object.keys(api).forEach(function(apiName) {
        Object.keys(api[apiName]).forEach(function(method) {
          api[apiName][method] = function() {
            return Promise.resolve();
          };
        });
      });
    }
  */}), {
    instanceName: config.instanceName || mod,
    path: '../packages/' + mod,
    config: JSON.stringify({
      // All of the minimum required options our APIs expect.
      projectId: 'grape-spaceship-123',
      key: 'apiKey'
    })
  });
}

function createSnippet(mod, instantiation, method) {
  var examples = method.examples.map(prop('code'));

  examples.unshift(instantiation);

  return examples
    .join('\n')
    .replace(
      /require\('google-cloud'\)/g,
      'require(\'../packages/google-cloud\')'
    )
    .replace(
      'require(\'@google-cloud/logging-bunyan\')',
      'require(\'../packages/logging-bunyan/src/index.js\')'
    )
    .replace(
      'require(\'@google-cloud/logging-winston\')',
      'require(\'../packages/logging-winston/src/index.js\')'
    )
    .replace(
      /require\('(@google-cloud\/[^']*)/g,
      'require(\'../packages/' + mod + '/node_modules/$1'
    )
    .replace(
      'keyFilename: \'/path/to/keyfile.json\'',
      'keyFilename: \'\''
    )
    .replace('require(\'express\')', FakeExpress.toString())
    .replace('require(\'level\')', FakeLevel.toString())
    .replace('require(\'bluebird\')', FakeBluebird.toString())
    .replace('require(\'bunyan\')', '(' + fakeBunyan.toString() + '())')
    .replace('require(\'winston\')', '(' + fakeWinston.toString() + '())')
    .replace('require(\'fs\')', '(' + FakeFs.toString() + '())');
}

function runCodeInSandbox(code, sandbox) {
  vm.createContext(sandbox);

  try {
    vm.runInNewContext(code, sandbox, {
      filename: 'assert-code.vm',
      timeout: 5000
    });
  } catch (err) {
    var docsErr = new DocsError(err, code);
    docsErr.stack = err.stack;
    throw docsErr;
  }
}
