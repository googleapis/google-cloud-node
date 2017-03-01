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
var uncaughtSetup = require('../../src/interfaces/uncaught.js');
var nock = require('nock');
var createLogger = require('../../src/logger.js');
var isString = require('is').string;
var Configuration = require('../fixtures/configuration.js');
var RequestHandler = require('../../src/google-apis/auth-client.js');
var originalHandlers = process.listeners('uncaughtException');
var UNCAUGHT  = 'uncaughtException';
var client;

function reattachOriginalListeners ( ) {
  for (var i = 0; i < originalHandlers.length; i++) {
    process.on(UNCAUGHT, originalHandlers[i]);
  }
}
var env = {
  NODE_ENV: process.env.NODE_ENV
};
function setEnv () {
  process.env.NODE_ENV = 'production';
}
function restoreEnv () {
  process.env.NODE_ENV = env.NODE_ENV;
}

describe('Uncaught Exception exit behaviour', function() {
   before(function() {
    process.removeAllListeners(UNCAUGHT);
    if (!isString(process.env.GCLOUD_PROJECT)) {
      // The gcloud project id (GCLOUD_PROJECT) was not set as an env variable
      this.skip();
      process.exit(1);
    } else if (!isString(process.env.GOOGLE_APPLICATION_CREDENTIALS)) {
      // The app credentials (GOOGLE_APPLICATION_CREDENTIALS) was not set as an env variable
      this.skip();
      process.exit(1);
    }
    setEnv();
  });
  after(function() {
    nock.cleanAll();
    nock.enableNetConnect();
    reattachOriginalListeners();
    restoreEnv();
  });
  it('Should attempt to report the uncaught exception', function(done) {
    var id = 'xyz';
    nock(
      'http://metadata.google.internal/computeMetadata/v1/project'
    ).get('/project-id').times(1).reply(200, id);
    nock('https://accounts.google.com:443/o/oauth2')
      .post('/token').query(function() {return true;}).reply(200, {
        refresh_token: 'hello',
        access_token: 'goodbye',
        expiry_date: new Date(9999, 1, 1)
      });
    this.timeout(2000);
    nock(
      'https://clouderrorreporting.googleapis.com/v1beta1/projects/'+id
    ).post('/events:report').once().reply(200, function() {
      done();
      return {success: true};
    });
    var cfg = new Configuration(
      {reportUncaughtExceptions: true, projectId: 'xyz'});
    cfg.lacksCredentials = function() {
      return false;
    };
    client = new RequestHandler(cfg, createLogger({logLevel: 4}));
    uncaughtSetup(client, cfg);
    setTimeout(function() {
      throw new Error('This error was supposed to be thrown');
    }, 10);
  });
});
