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
var path = require('path');
var nock = require('nock');
var http = require('http');
var express = require('express');
var Errors = require('../..');

var originalHandlers = process.listeners('uncaughtException');

function reattachOriginalListeners() {
  for (var i = 0; i < originalHandlers.length; i++) {
    process.on('uncaughtException', originalHandlers[i]);
  }
}

var oldg, olde;

describe('Testing use of runtime configurations', function() {
  before(function() {
    nock.cleanAll();
    nock.disableNetConnect();
    process.removeAllListeners('uncaughtException');
    oldg = process.env.GCLOUD_PROJECT;
    olde = process.env.NODE_ENV;
    delete process.env.GCLOUD_PROJECT;
    process.env.NODE_ENV = 'production';
  });
  after(function() {
    nock.enableNetConnect();
    process.env.GCLOUD_PROJECT = oldg;
    process.env.NODE_ENV = olde;
  });
  afterEach(function() {
    nock.cleanAll();
    process.removeAllListeners('uncaughtException');
  });
  it('Should use the keyFilename field of the config object', function(done) {
    this.timeout(25000);
    var credentials = require('../fixtures/gcloud-credentials.json');
    var config = {
      keyFilename: path.join('test', 'fixtures', 'gcloud-credentials.json'),
      reportUncaughtExceptions: false,
      projectId: '0'
    };
    nock('https://accounts.google.com/o/oauth2')
      .post('/token', function(body) {
        assert.strictEqual(body.client_id, credentials.client_id);
        assert.strictEqual(body.client_secret, credentials.client_secret);
        assert.strictEqual(body.refresh_token, credentials.refresh_token);
        done();
        return true;
      }).times(1).reply(200, {
        refresh_token: 'hello',
        access_token: 'goodbye',
        expiry_date: new Date(9999, 1, 1)
      });
    var agent = new Errors(config);
    agent.report(new Error('a b c'));
  });
  describe(
    'use of the credentials field of the config object',
    function() {
      before(function() {
        process.env.GCLOUD_PROJECT = '0';
      });
      after(function() {
        delete process.env.GCLOUD_PROJECT;
        nock.cleanAll();
      });
      it('Should use the credentials field of the object', function(done) {
        var config = {
          credentials: require('../fixtures/gcloud-credentials.json'),
          reportUncaughtExceptions: false
        };
        var agent = new Errors(config);
        var app = express();
        app.use('/', function() {
          throw '0';
        });
        app.use(agent.express);
        var server = app.listen(3000, function() {
          nock.enableNetConnect('localhost');
          var scope = nock('https://accounts.google.com/o/oauth2')
            .intercept('/token', 'POST', function(body) {
              assert.strictEqual(body.client_id,
                config.credentials.client_id);
              assert.strictEqual(body.client_secret,
                config.credentials.client_secret);
              assert.strictEqual(body.refresh_token,
                config.credentials.refresh_token);
              return true;
            }).reply(200, {
              refresh_token: 'hello',
              access_token: 'goodbye',
              expiry_date: new Date(9999, 1, 1)
            });

          // Since we have to get an auth token -- this gets intercepted second
          nock('https://clouderrorreporting.googleapis.com/v1beta1/projects/0')
            .post('/events:report', function() {
              assert(scope.isDone());
              nock.cleanAll();
              server.close();
              reattachOriginalListeners();
              done();
              return true;
            }).reply(200);

          http.get({port: 3000, path: '/'}, function(res) {});
        });
      });
    }
 );
  it('Should ignore credentials if keyFilename is provided', function(done) {
    var correctCredentials = require('../fixtures/gcloud-credentials.json');
    var config = {
      keyFilename: path.join('test', 'fixtures', 'gcloud-credentials.json'),
      projectId: '0',
      credentials: {
        client_id: 'a',
        client_secret: 'b',
        refresh_token: 'c',
        type: 'authorized_user'
      },
      reportUncaughtExceptions: true
    };
    ['client_id', 'client_secret', 'refresh_token'].forEach(function(field) {
      assert(correctCredentials.hasOwnProperty(field));
      assert(config.credentials.hasOwnProperty(field));
      assert.notEqual(config.credentials[field],
        correctCredentials[field]);
    });
    var agent = new Errors(config);
    var app = express();
    app.use('/', function() {
      throw '0';
    });
    app.use(agent.express);
    var server = app.listen(3000, function() {
      nock.disableNetConnect();
      nock.enableNetConnect('localhost');
      var scope = nock('https://accounts.google.com/o/oauth2')
        .intercept('/token', 'POST', function(body) {
          assert.strictEqual(body.client_id, correctCredentials.client_id);
          assert.strictEqual(body.client_secret,
            correctCredentials.client_secret);
          assert.strictEqual(body.refresh_token,
            correctCredentials.refresh_token);
          return true;
        }).reply(200, {
          refresh_token: 'hello',
          access_token: 'goodbye',
          expiry_date: new Date(9999, 1, 1)
        });

      // Since we have to get an auth token, this always gets intercepted second
      nock('https://clouderrorreporting.googleapis.com/v1beta1/projects/0')
        .post('/events:report', function() {
          assert(scope.isDone());
          nock.cleanAll();
          server.close();
          reattachOriginalListeners();
          done();
          return true;
        }).reply(200);

      http.get({port: 3000, path: '/'}, function(res) {});
    });
  });
});
