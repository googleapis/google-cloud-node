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
const env = (function(injectedEnv) {
  const envKeys = ['GOOGLE_APPLICATION_CREDENTIALS', 'GCLOUD_PROJECT',
    'NODE_ENV'];
  class InstancedEnv {
    constructor() {
      assign(this, injectedEnv);
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
        GCLOUD_PROJECT: injectedEnv.projectId
      });
      return this;
    }
    setProjectNumber() {
      assign(process.env, {
        GCLOUD_PROJECT: injectedEnv.projectNumber
      });
      return this;
    }
    setKeyFilename() {
      assign(process.env, {
        GOOGLE_APPLICATION_CREDENTIALS: injectedEnv.keyFilename
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
      return assign({}, injectedEnv);
    }
  }
  return new InstancedEnv();
}(require('../../../system-test/env.js')));
const SHOULD_RUN = (function() {
  if (!isString(env.injected().projectId)) {
    return new Error('The project id (projectId) was not set in the env');
  }
  if (!isString(env.injected().apiKey)) {
    return new Error('The api key (apiKey) was not set as an env variable');
  }
  if (!isString(env.injected().projectNumber)) {
    return new Error(
      'The project number (projectNumber) was not set in the env');
  }
  if (!isString(env.injected().keyFilename)) {
    return new Error(
      'The key filename (keyFilename) was not set in the env');
  }
  return true;
}());
const TEST_RUNNER = (function() {
  if (SHOULD_RUN instanceof Error) {
    console.log('Skipping error-reporting system tests:');
    console.log('  ' + SHOULD_RUN.message);
    return describe.skip;
  }
  return describe;
}());

(TEST_RUNNER)('Errors system tests', function() {
  describe('Request/Response lifecycle mocking', function() {
    var sampleError = new Error(ERR_TOKEN);
    var errorMessage = new ErrorMessage().setMessage(sampleError);
    var fakeService, client, logger;
    before(() => env.sterilizeProcess());
    beforeEach(function() {
      env.setProjectId().setKeyFilename().setProduction();
      fakeService = nock(
        'https://clouderrorreporting.googleapis.com/v1beta1/projects/' +
        env.projectId
     ).persist().post('/events:report');
      logger = createLogger({logLevel: 5});
      client = new RequestHandler(
        new Configuration({ignoreEnvironmentCheck: true}, logger), logger);
    });
    afterEach(function() {
      env.sterilizeProcess();
      nock.cleanAll();
    });
    after(() => env.restoreProcessToOriginalState());
    describe('Receiving non-retryable errors', function() {
      it('Should fail', function(done) {
        this.timeout(5000);
        client.sendError({}, function(err, response, body) {
          assert(err instanceof Error);
          assert.strictEqual(err.message.toLowerCase(),
            'message cannot be empty.');
          assert(isObject(response));
          assert.strictEqual(response.statusCode, 400);
          done();
        });
      });
    });
    describe('Receiving retryable errors', function() {
      it('Should retry', function(done) {
        this.timeout(25000);
        var tries = 0;
        var intendedTries = 4;
        fakeService.reply(429, function() {
          tries += 1;
          console.log('Mock Server Received Request:', tries + '/' +
            intendedTries);
          return {error: 'Please try again later'};
        });
        client.sendError(errorMessage, function(err, response, body) {
          assert.strictEqual(tries, intendedTries);
          done();
        });
      });
    });
    describe('Using an API key', function() {
      it('Should provide the key as a query string on outgoing requests',
        function(done) {
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
    });
    describe('Callback-less invocation', function() {
      it('Should still execute the request', function(done) {
        fakeService.reply(200, function() {
          done();
        });
        client.sendError(errorMessage);
      });
    });
  });
  describe('System-live integration testing', function() {
    var sampleError = new Error(ERR_TOKEN);
    var errorMessage = new ErrorMessage().setMessage(sampleError.stack);
    describe('Client creation', function() {
      describe('Using only project id', function() {
        describe('As a runtime argument', function() {
          var cfg, logger;
          before(function() {
            env.sterilizeProcess().setKeyFilename();
            logger = createLogger({logLevel: 5});
            cfg = new Configuration({projectId: env.injected().projectId,
              ignoreEnvironmentCheck: true}, logger);
          });
          after(() => env.sterilizeProcess());
          it('Should not throw on initialization', function(done) {
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
        describe('As an env variable', function() {
          var cfg, logger;
          before(function() {
            env.sterilizeProcess().setProjectId().setKeyFilename();
            logger = createLogger({logLevel: 5});
            cfg = new Configuration({ignoreEnvironmentCheck: true}, logger);
          });
          after(() => env.sterilizeProcess());
          it('Should not throw on initialization', function(done) {
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
      });
      describe('Using only project number', function() {
        describe('As a runtime argument', function() {
          var cfg, logger;
          before(function() {
            env.sterilizeProcess().setKeyFilename();
            logger = createLogger({logLevel: 5});
            cfg = new Configuration({
              projectId: parseInt(env.injected().projectNumber),
              ignoreEnvironmentCheck: true
            }, logger);
          });
          after(() => env.sterilizeProcess());
          it('Should not throw on initialization', function(done) {
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
        describe('As an env variable', function() {
          var cfg, logger;
          before(function() {
            env.sterilizeProcess().setKeyFilename().setProjectNumber();
            logger = createLogger({logLevel: 5});
            cfg = new Configuration({ignoreEnvironmentCheck: true}, logger);
          });
          after(() => env.sterilizeProcess());
          it('Should not throw on initialization', function(done) {
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
      });
    });
    describe('Error behvaiour', function() {
      describe('With a configuration to not report errors', function() {
        var ERROR_STRING = [
          'Stackdriver error reporting client has not been configured to send',
          'errors, please check the NODE_ENV environment variable and make',
          'sure it is set to "production" or set the ignoreEnvironmentCheck',
          'property to true in the runtime configuration object'
        ].join(' ');
        var logger, client;
        before(function() {
          env.sterilizeProcess().setKeyFilename().setProjectId();
          process.env.NODE_ENV = 'null';
          logger = createLogger({logLevel: 5});
          client = new RequestHandler(new Configuration(undefined, logger),
            logger);
        });
        after(() => env.sterilizeProcess());
        it('Should callback with an error', function(done) {
          client.sendError({}, function(err, response, body) {
            assert(err instanceof Error);
            assert.strictEqual(err.message, ERROR_STRING);
            assert.strictEqual(response, null);
            done();
          });
        });
      });
    });
    describe('Success behaviour', function() {
      var er = new Error(ERR_TOKEN);
      var em = new ErrorMessage().setMessage(er.stack);
      describe('Given a valid project id', function() {
        var logger, client, cfg;
        before(function() {
          env.sterilizeProcess();
          logger = createLogger({logLevel: 5});
          cfg = new Configuration({
            projectId: env.injected().projectId,
            ignoreEnvironmentCheck: true
          }, logger);
          client = new RequestHandler(cfg, logger);
        });
        after(() => env.sterilizeProcess());
        it('Should succeed in its request', function(done) {
          client.sendError(em, function(err, response, body) {
            assert.strictEqual(err, null);
            assert(isObject(body));
            assert(isEmpty(body));
            assert.strictEqual(response.statusCode, 200);
            done();
          });
        });
      });
      describe('Given a valid project number', function() {
        var logger, client, cfg;
        before(function() {
          env.sterilizeProcess();
          logger = createLogger({logLevel: 5});
          cfg = new Configuration({
            projectId: parseInt(env.injected().projectNumber),
            ignoreEnvironmentCheck: true
          }, logger);
          client = new RequestHandler(cfg, logger);
        });
        after(() => env.sterilizeProcess());
        it('Should succeed in its request', function(done) {
          client.sendError(em, function(err, response, body) {
            assert.strictEqual(err, null);
            assert(isObject(body));
            assert(isEmpty(body));
            assert.strictEqual(response.statusCode, 200);
            done();
          });
        });
      });
    });
  });
});
