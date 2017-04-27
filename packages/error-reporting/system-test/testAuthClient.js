/**
 * Copyright 2016 Google Inc. All Rights Reserved.
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
var nock = require('nock');
var RequestHandler = require('../src/google-apis/auth-client.js');
var ErrorsApiTransport = require('../utils/errors-api-transport.js');
var ErrorMessage = require('../src/classes/error-message.js');
var Configuration = require('../test/fixtures/configuration.js');
var createLogger = require('../src/logger.js');
var is = require('is');
var isObject = is.object;
var isString = is.string;
var isEmpty = is.empty;
var forEach = require('lodash.foreach');
var assign = require('lodash.assign');
var pick = require('lodash.pick');
var omitBy = require('lodash.omitby');

const ERR_TOKEN = '_@google_STACKDRIVER_INTEGRATION_TEST_ERROR__';
const TIMEOUT = 20000;

const envKeys = ['GOOGLE_APPLICATION_CREDENTIALS', 'GCLOUD_PROJECT',
    'NODE_ENV'];

class InstancedEnv {
  constructor(injectedEnv) {
    assign(this, injectedEnv);
    this.injectedEnv = injectedEnv;
    this._originalEnv = this._captureProcessProperties();
  }

  _captureProcessProperties() {
    return omitBy(pick(process.env, envKeys), value => !isString(value));
  }

  sterilizeProcess() {
    forEach(envKeys, (v, k) => delete process.env[k]);
    return this;
  }

  setProjectId() {
    assign(process.env, {
      GCLOUD_PROJECT: this.injectedEnv.projectId
    });
    return this;
  }

  setProjectNumber() {
    assign(process.env, {
      GCLOUD_PROJECT: this.injectedEnv.projectNumber
    });
    return this;
  }

  setKeyFilename() {
    assign(process.env, {
      GOOGLE_APPLICATION_CREDENTIALS: this.injectedEnv.keyFilename
    });
    return this;
  }

  setProduction() {
    assign(process.env, {
      NODE_ENV: 'production'
    });
    return this;
  }

  restoreProcessToOriginalState() {
    assign(process.env, this._originalEnv);
    return this;
  }

  injected() {
    return assign({}, this.injectedEnv);
  }
}

const env = new InstancedEnv(require('../../../system-test/env.js'));

function shouldRun() {
  var shouldRun = true;
  if (!isString(env.injected().projectId)) {
    console.log('The project id (projectId) was not set in the env');
    shouldRun = false;
  }

  if (!isString(env.injected().apiKey)) {
    console.log('The api key (apiKey) was not set as an env variable');
    shouldRun = false;
  }

  if (!isString(env.injected().projectNumber)) {
    console.log('The project number (projectNumber) was not set in the env');
    shouldRun = false;
  }

  if (!isString(env.injected().keyFilename)) {
    console.log('The key filename (keyFilename) was not set in the env');
    shouldRun = false;
  }

  return shouldRun;
}

if (!shouldRun()) {
  console.log('Skipping error-reporting system tests');
  process.exit(1);
}

describe('Request/Response lifecycle mocking', function() {
  var sampleError = new Error(ERR_TOKEN);
  var errorMessage = new ErrorMessage().setMessage(sampleError);
  var fakeService, client, logger;
  before(function() {
    env.sterilizeProcess();
  });

  beforeEach(function() {
    env.setProjectId().setKeyFilename().setProduction();
    fakeService = nock(
      'https://clouderrorreporting.googleapis.com./v1beta1/projects/' +
      process.env.GCLOUD_PROJECT
    ).persist().post('/events:report');
    logger = createLogger({logLevel: 5});
    client = new RequestHandler(
      new Configuration({ignoreEnvironmentCheck: true}, logger), logger);
  });

  afterEach(function() {
    env.sterilizeProcess();
    nock.cleanAll();
  });

  after(function() {
    env.restoreProcessToOriginalState();
  });

  it('Should fail when receiving non-retryable errors', function(done) {
    this.timeout(5000);
    client.sendError({}, function(err, response,
      /* jshint unused:false */ body) {
      assert(err instanceof Error);
      assert.strictEqual(err.message.toLowerCase(),
        'message cannot be empty.');
      assert(isObject(response));
      assert.strictEqual(response.statusCode, 400);
      done();
    });
  });

  it('Should retry when receiving retryable errors', function(done) {
    this.timeout(25000);
    var tries = 0;
    var intendedTries = 4;
    fakeService.reply(429, function() {
      tries += 1;
      console.log('Mock Server Received Request:', tries + '/' +
        intendedTries);
      return {error: 'Please try again later'};
    });
    client.sendError(errorMessage, function(err, response,
      /* jshint unused:false */ body) {
      assert.strictEqual(tries, intendedTries);
      done();
    });
  });

  it('Should provide the key as a query string on outgoing requests when ' +
    'using an API key', function(done) {
      env.sterilizeProcess().setProjectId().setProduction();
      var key = env.apiKey;
      var client = new RequestHandler(new Configuration(
        {key: key, ignoreEnvironmentCheck: true},
        createLogger({logLevel: 5})));
      fakeService.query({key: key}).reply(200, function(uri) {
        assert(uri.indexOf('key=' + key) > -1);
        return {};
      });
      client.sendError(errorMessage, function() {
        done();
      });
    }
  );

  it('Should still execute the request with a callback-less invocation',
    function(done) {
    fakeService.reply(200, function() {
      done();
    });
    client.sendError(errorMessage);
  });
});

describe('Client creation', function() {
  var sampleError = new Error(ERR_TOKEN);
  var errorMessage = new ErrorMessage().setMessage(sampleError.stack);
  after(function() {
    env.sterilizeProcess();
  });

  it('Should not throw on initialization when using only project id as a ' +
    'runtime argument', function(done) {
    env.sterilizeProcess().setKeyFilename();
    var logger = createLogger({logLevel: 5});
    var cfg = new Configuration({projectId: env.injected().projectId,
      ignoreEnvironmentCheck: true}, logger);
    this.timeout(10000);
    assert.doesNotThrow(function() {
      (new RequestHandler(cfg, logger)).sendError(errorMessage,
        function(err, response, body) {
          assert.strictEqual(err, null);
          assert.strictEqual(response.statusCode, 200);
          assert(isObject(body) && isEmpty(body));
          done();
        }
      );
    });
  });

  it('Should not throw on initialization when using only project id as an ' +
    'env variable', function(done) {
    env.sterilizeProcess().setProjectId().setKeyFilename();
    var logger = createLogger({logLevel: 5});
    var cfg = new Configuration({ignoreEnvironmentCheck: true}, logger);
    this.timeout(10000);
    assert.doesNotThrow(function() {
      (new RequestHandler(cfg, logger)).sendError(errorMessage,
        function(err, response, body) {
          assert.strictEqual(err, null);
          assert.strictEqual(response.statusCode, 200);
          assert(isObject(body) && isEmpty(body));
          done();
        }
      );
    });
  });

  it('Should not throw on initialization when using only project number as ' +
    'a runtime argument', function(done) {
    env.sterilizeProcess().setKeyFilename();
    var logger = createLogger({logLevel: 5});
    var cfg = new Configuration({
      projectId: parseInt(env.injected().projectNumber),
      ignoreEnvironmentCheck: true
    }, logger);
    this.timeout(10000);
    assert.doesNotThrow(function() {
      (new RequestHandler(cfg, logger)).sendError(errorMessage,
        function(err, response, body) {
          assert.strictEqual(err, null);
          assert.strictEqual(response.statusCode, 200);
          assert(isObject(body) && isEmpty(body));
          done();
        }
      );
    });
  });

  it('Should not throw on initialization when using only project number as ' +
    'an env variable', function(done) {
    env.sterilizeProcess().setKeyFilename().setProjectNumber();
    var logger = createLogger({logLevel: 5});
    var cfg = new Configuration({ignoreEnvironmentCheck: true}, logger);
    this.timeout(10000);
    assert.doesNotThrow(function() {
      (new RequestHandler(cfg, logger)).sendError(errorMessage,
        function(err, response, body) {
          assert.strictEqual(err, null);
          assert.strictEqual(response.statusCode, 200);
          assert(isObject(body) && isEmpty(body));
          done();
        }
      );
    });
  });
});

describe('Expected Behavior', function() {
  var ERROR_STRING = [
    'Stackdriver error reporting client has not been configured to send',
    'errors, please check the NODE_ENV environment variable and make',
    'sure it is set to "production" or set the ignoreEnvironmentCheck',
    'property to true in the runtime configuration object'
  ].join(' ');

  var er = new Error(ERR_TOKEN);
  var em = new ErrorMessage().setMessage(er.stack);

  after(function() {
    env.sterilizeProcess();
  });

  it('Should callback with an error with a configuration to not report errors',
    function(done) {
    env.sterilizeProcess().setKeyFilename().setProjectId();
    process.env.NODE_ENV = 'null';
    var logger = createLogger({logLevel: 5});
    var client = new RequestHandler(new Configuration(undefined, logger),
      logger);
    client.sendError({}, function(err, response,
      /* jshint unused:false */ body) {
      assert(err instanceof Error);
      assert.strictEqual(err.message, ERROR_STRING);
      assert.strictEqual(response, null);
      done();
    });
  });

  it('Should succeed in its request given a valid project id', function(done) {
    env.sterilizeProcess();
    var logger = createLogger({logLevel: 5});
    var cfg = new Configuration({
      projectId: env.injected().projectId,
      ignoreEnvironmentCheck: true
    }, logger);
    var client = new RequestHandler(cfg, logger);

    client.sendError(em, function(err, response, body) {
      assert.strictEqual(err, null);
      assert(isObject(body));
      assert(isEmpty(body));
      assert.strictEqual(response.statusCode, 200);
      done();
    });
  });

  it('Should succeed in its request given a valid project number',
    function(done) {
    env.sterilizeProcess();
    var logger = createLogger({logLevel: 5});
    var cfg = new Configuration({
      projectId: parseInt(env.injected().projectNumber),
      ignoreEnvironmentCheck: true
    }, logger);
    var client = new RequestHandler(cfg, logger);
    client.sendError(em, function(err, response, body) {
      assert.strictEqual(err, null);
      assert(isObject(body));
      assert(isEmpty(body));
      assert.strictEqual(response.statusCode, 200);
      done();
    });
  });
});

describe('error-reporting', function() {
  const TIMESTAMP = Date.now();
  const BASE_NAME = 'error-reporting-system-test';
  function buildName(suffix) {
    return [TIMESTAMP, BASE_NAME, suffix].join('_');
  }

  const SERVICE_NAME = buildName('service-name');
  const SERVICE_VERSION = buildName('service-version');

  var errors;
  var transport;
  before(function() {
    errors = require('../src/index.js')({
      ignoreEnvironmentCheck: true,
      serviceContext: {
        service: SERVICE_NAME,
        version: SERVICE_VERSION
      }
    });
    transport = new ErrorsApiTransport(errors._config, errors._logger);
  });

  after(function(done) {
    transport.deleteAllEvents(function(err) {
      assert.ifError(err);
      done();
    });
  });

  it('Should correctly publish errors', function(done) {
    this.timeout(TIMEOUT * 2);
    var errorId = buildName('message');
    errors.report(new Error(errorId), function(err, response, body) {
      assert.ifError(err);
      assert(isObject(response));
      assert.deepEqual(body, {});

      setTimeout(function() {
        transport.getAllGroups(function(err, groups) {
          assert.ifError(err);
          assert.ok(groups);

          var matchedErrors = groups.filter(function(errItem) {
            return errItem && errItem.representative &&
              errItem.representative.message.startsWith('Error: ' + errorId);
          });

          // The error should have been reported exactly once
          assert.strictEqual(matchedErrors.length, 1);
          var errItem = matchedErrors[0];
          assert.ok(errItem);
          assert.equal(errItem.count, 1);
          var rep = errItem.representative;
          assert.ok(rep);
          var context = rep.serviceContext;
          assert.ok(context);
          assert.strictEqual(context.service, SERVICE_NAME);
          assert.strictEqual(context.version, SERVICE_VERSION);
          done();
        });
      }, TIMEOUT);
    });
  });
});
