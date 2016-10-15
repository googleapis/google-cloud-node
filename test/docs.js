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

var assert = require('assert');
var async = require('async');
var createErrorClass = require('create-error-class');
var extend = require('extend');
var format = require('string-format-obj');
var fs = require('fs');
var glob = require('glob');
var mitm = require('mitm');
var overviews = require('../scripts/docs/config').OVERVIEW;
var path = require('path');
var prop = require('propprop');
var url = require('url');
var urlExists = require('url-exists');
var urlRegex = require('url-regex')();
var vm = require('vm');

function noop() {}
var rootFile = 'index.json';

var DocsError = createErrorClass('DocsError', function(err, code) {
  var lineCol = err.stack.match('assert-code\.vm:(.+)');
  lineCol.line = lineCol[1];

  var lines = code
    .split('\n')
    .filter(function(line, index) {
      return index < lineCol.line && line;
    })
    .join('\n');

  this.message = '\n' + lines + '\n\n' + err.message;
  this.stack = err.stack;
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

var modules;

if (process.env.TEST_MODULE) {
  modules = [process.env.TEST_MODULE];
} else {
  modules = fs.readdirSync('docs/json');
}

describe('Documentation Tests', function() {
  var BROKEN_LINKS = [];

  describe('Examples', function() {
    var MITM;

    var sandbox = {
      require: function() {
        return require.apply(null, arguments);
      },
      process: extend(true, {}, process),
      console: FakeConsole,
      Buffer: Buffer,
      Date: Date,
      Array: Array
    };

    before(function() {
      // Set a global to indicate to any interested function inside of gcloud
      // that this is a sandbox environment.
      global.GCLOUD_SANDBOX_ENV = true;

      // Turn off the network so that API calls aren't actually made.
      MITM = mitm();
    });

    after(function() {
      delete global.GCLOUD_SANDBOX_ENV;

      // Re-enable the network.
      MITM.disable();
    });

    modules.forEach(function(mod) {
      describe(mod + ' documentation', function() {
        var docFiles = getDocs(mod);
        var moduleInstantationCode = createInstantiationCode(mod);

        docFiles.forEach(function(docFile) {
          docFile.methods
            .filter(function(method) {
              return method.examples && method.examples.length;
            })
            .forEach(function(method) {
              var name = [docFile.name, method.name].join('#');
              var snippet = createSnippet(mod, moduleInstantationCode, method);

              it('should run ' + name + ' examples', function(done) {
                var urls = snippet.match(urlRegex);

                if (urls) {
                  BROKEN_LINKS = BROKEN_LINKS.concat(urls.map(function(url) {
                    return {
                      name: name,
                      url: url
                    };
                  }));
                }

                runCodeInSandbox(snippet, sandbox, done);
              });
            });
        });
      });
    });
  });

  describe('Link Validity', function() {
    function checkUrl(brokenLink, callback) {
      if (brokenLink.url.indexOf('example.com') > -1) {
        callback(null, true);
        return;
      }

      var parsedUrl = url.parse(brokenLink.url);

      if (!parsedUrl.protocol) {
        parsedUrl.protocol = 'http:';
      }

      urlExists(url.format(parsedUrl), callback);
    }

    it('should validate all URLs', function(done) {
      this.timeout(0);

      async.filter(BROKEN_LINKS, checkUrl, function(err, invalidLinks) {
        assert.ifError(err);

        if (invalidLinks.length > 0) {
          var invalidLink = invalidLinks[0];
          throw new Error([
            invalidLink.url + ' from ' + invalidLink.method + ' doesn\'t exist'
          ].join(''));
        }

        done();
      });
    });
  });
});

function getDocs(mod) {
  return glob
    .sync('docs/json/' + mod + '/master/*.json', {
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

  return format('var {instanceName} = require(\'{path}\')({config});', {
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
      /require\('(@google-cloud\/[^']*)/g,
      'require(\'../packages/' + mod + '/node_modules/$1'
    )
    .replace('require(\'express\')', FakeExpress.toString())
    .replace('require(\'level\')', FakeLevel.toString())
    .replace('require(\'fs\')', '(' + FakeFs.toString() + '())');
}

function runCodeInSandbox(code, sandbox, callback) {
  vm.createContext(sandbox);

  try {
    vm.runInNewContext(code, sandbox, {
      filename: 'assert-code.vm',
      timeout: 5000
    });
    callback();
  } catch (err) {
    callback(new DocsError(err, code));
  }
}
