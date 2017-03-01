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
var RequestHandler = require('../../src/google-apis/auth-client.js');
var ErrorMessage = require('../../src/classes/error-message.js');
var Configuration = require('../fixtures/configuration.js');
var createLogger = require('../../src/logger.js');
var is = require('is');
var isObject = is.object;
var isString = is.string;
var isEmpty = is.empty;
var forEach = require('lodash.foreach');
var assign = require('lodash.assign');
const ERR_TOKEN = '_@google_STACKDRIVER_INTEGRATION_TEST_ERROR__';


describe('Behvaiour acceptance testing', function() {
  before(function() {
    // Before starting the suite make sure we have the proper resources
    if (!isString(process.env.GCLOUD_PROJECT)) {
      console.error(
        'The gcloud project id (GCLOUD_PROJECT) was not set in the env');
      this.skip();
    } else if (!isString(process.env.STUBBED_API_KEY)) {
      console.error(
        'The api key (STUBBED_API_KEY) was not set as an env variable');
      this.skip();
    } else if (!isString(process.env.STUBBED_PROJECT_NUM)) {
      console.error(
        'The project number (STUBBED_PROJECT_NUM) was not set in the env');
      this.skip();
    } else if (process.env.NODE_ENV !== 'production') {
      console.error(
        'The NODE_ENV is not set to production as an env variable. Please ' +
        'set NODE_ENV to production');
      this.skip();
    }
    // In case we are running after unit mocks which were not destroyed properly
    nock.cleanAll();
  });
  describe('Request/Response lifecycle mocking', function() {
    var sampleError = new Error(ERR_TOKEN);
    var errorMessage = new ErrorMessage().setMessage(sampleError);
    var fakeService, client, logger;
    beforeEach(function() {
      fakeService = nock(
        'https://clouderrorreporting.googleapis.com/v1beta1/projects/' +
        process.env.GCLOUD_PROJECT
     ).persist().post('/events:report');
      logger = createLogger({logLevel: 5});
      client = new RequestHandler(
        new Configuration({ignoreEnvironmentCheck: true}, logger), logger);
    });
    afterEach(function() {
      nock.cleanAll();
    });
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
          var key = process.env.STUBBED_API_KEY;
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
    var oldEnv = {
      GCLOUD_PROJECT: process.env.GCLOUD_PROJECT,
      STUBBED_PROJECT_NUM: process.env.STUBBED_PROJECT_NUM,
      NODE_ENV: process.env.NODE_ENV
    };
    function sterilizeEnv() {
      forEach(oldEnv, function(val, key) {
        delete process.env[key];
      });
    }
    function restoreEnv() {
      assign(process.env, oldEnv);
    }
    describe('Client creation', function() {
      describe('Using only project id', function() {
        describe('As a runtime argument', function() {
          var cfg, logger;
          before(function() {
            sterilizeEnv();
            logger = createLogger({logLevel: 5});
            cfg = new Configuration({projectId: oldEnv.GCLOUD_PROJECT,
              ignoreEnvironmentCheck: true}, logger);
          });
          after(restoreEnv);
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
            sterilizeEnv();
            process.env.GCLOUD_PROJECT = oldEnv.GCLOUD_PROJECT;
            logger = createLogger({logLevel: 5});
            cfg = new Configuration({ignoreEnvironmentCheck: true}, logger);
          });
          after(restoreEnv);
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
            sterilizeEnv();
            logger = createLogger({logLevel: 5});
            cfg = new Configuration({
              projectId: parseInt(oldEnv.STUBBED_PROJECT_NUM),
              ignoreEnvironmentCheck: true
            }, logger);
          });
          after(restoreEnv);
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
            sterilizeEnv();
            process.env.GCLOUD_PROJECT = oldEnv.STUBBED_PROJECT_NUM;
            logger = createLogger({logLevel: 5});
            cfg = new Configuration({ignoreEnvironmentCheck: true}, logger);
          });
          after(restoreEnv);
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
          'property to  true in the runtime configuration object'
        ].join(' ');
        var logger, client;
        before(function() {
          delete process.env.NODE_ENV;
          logger = createLogger({logLevel: 5});
          client = new RequestHandler(new Configuration(undefined, logger),
            logger);
        });
        after(function() {
          process.env.NODE_ENV = oldEnv.NODE_ENV;
        });
        it('Should callback with an error', function(done) {
          client.sendError({}, function(err, response, body) {
            assert(err instanceof Error);
            assert.strictEqual(err.message, ERROR_STRING);
            assert.strictEqual(response, null);
            done();
          });
        });
      });
      describe('An invalid env configuration', function() {
        var ERROR_STRING = [
          'Unable to find the project Id for communication with the',
          'Stackdriver Error Reporting service. This app will be unable to',
          'send errors to the reporting service unless a valid project Id',
          'is supplied via runtime configuration or the GCLOUD_PROJECT',
          'environmental variable.'
        ].join(' ');
        var logger, client;
        before(function() {
          delete process.env.GCLOUD_PROJECT;
          logger = createLogger({logLevel: 5});
          client = new RequestHandler(new Configuration(
            {ignoreEnvironmentCheck: true}, logger), logger);
        });
        after(function() {
          process.env.GCLOUD_PROJECT = oldEnv.GCLOUD_PROJECT;
        });
        it('Should callback with an error', function(done) {
          client.sendError(errorMessage, function(err, response, body) {
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
          sterilizeEnv();
          logger = createLogger({logLevel: 5});
          cfg = new Configuration({
            projectId: oldEnv.GCLOUD_PROJECT,
            ignoreEnvironmentCheck: true
          }, logger);
          client = new RequestHandler(cfg, logger);
        });
        after(restoreEnv);
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
          forEach(oldEnv, function(val, key) {
            delete process.env[key];
          });
          logger = createLogger({logLevel: 5});
          cfg = new Configuration({
            projectId: parseInt(oldEnv.STUBBED_PROJECT_NUM),
            ignoreEnvironmentCheck: true
          }, logger);
          client = new RequestHandler(cfg, logger);
        });
        after(function() {
          assign(process.env, oldEnv);
        });
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
