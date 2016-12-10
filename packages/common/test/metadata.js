/**
 * Copyright 2015 Google Inc. All Rights Reserved.
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
var path = require('path');
var proxyquire = require('proxyquire');

describe('common/metadata', function() {
  var metadata;

  before(function() {
    var util = require('../src/util');
    var origMakeRequest = util.makeRequest;
    // Monkeypatch makeRequest to not auto-retry on failure.
    util.makeRequest = function(reqOpts, config, callback) {
      if (typeof config === 'function') {
        callback = config;
        config = {};
      }
      config.autoRetry = false;
      origMakeRequest(reqOpts, config, callback);
    };

    metadata = require('../src/metadata', {
      './util.js': util
    });
    nock.disableNetConnect();
  });

  after(function() {
    nock.enableNetConnect();
  });

  describe('getProjectId', function() {
    it('should be able to get project id from metadata service',
      function(done) {
        var scope = nock('http://metadata.google.internal')
                      .get('/computeMetadata/v1/project/project-id')
                      .reply(200, 'a-stub-project-id');
        metadata.getProjectId(function(err, projectId) {
          assert.ok(!err);
          assert.strictEqual(projectId, 'a-stub-project-id');
          scope.done();
          done();
        });
      });
    
    it('should be able handle 500\'s from the service',
      function(done) {
        var scope = nock('http://metadata.google.internal')
                      .get('/computeMetadata/v1/project/project-id')
                      .reply(500, {error: true})
                      .persist();
        metadata.getProjectId(function(err, projectId) {
          assert.strictEqual(typeof err, 'object');
          assert.ok(err instanceof Error);
          assert.strictEqual(err.message, 'Error during request.');
          assert.strictEqual(projectId, null);
          scope.done();
          nock.cleanAll();
          done();
        });
      });

    it('should accept an optional headers parameter', function(done) {
      var scope =
        nock('http://metadata.google.internal', {
            reqheaders: {'Flux': 'Capacitor'}
          })
          .get('/computeMetadata/v1/project/project-id')
          .reply(200, 'a-stub-project-id');
      metadata.getProjectId({'Flux': 'Capacitor'}, function(err, project) {
        assert.ok(!err);
        assert.strictEqual(project, 'a-stub-project-id');
        scope.done();
        done();
      });
    });

    it('Should callback with ENOTFOUND', function (done) {
      var oldEnv = process.env.GCLOUD_PROJECT;
      process.env.GCLOUD_PROJECT = './this-should-not-exist.json';
      var scope = nock('http://metadata.google.internal')
        .get('/computeMetadata/v1/project/project-id')
        .once()
        .replyWithError({'message': 'Not Found', code: 'ENOTFOUND'});
      metadata.getProjectId(function (e, result) {
        assert.ok(e instanceof Error, 'e should be an instance of Error');
        assert.deepEqual(result, null);
        process.env.GCLOUD_PROJECT = oldEnv;
        scope.done();
        done();
      });
    });
  });

  describe('getInstanceId - valid cases', function() {
    var STUB_ID = 'a-stub-instance-id';
    it(
      'Should be able to get the instance id without additional headers supplied',
      function (done) {
        var mock = nock('http://metadata.google.internal/computeMetadata/v1')
          .get('/instance/id')
          .once()
          .reply(200, STUB_ID);
        metadata.getInstanceId(function (err, id) {
          assert.deepEqual(err, null, 'Error should be null');
          assert.deepEqual(STUB_ID, id, 'The id should be the stub id');
          mock.done();
          done();
        });
      }
    );
    it(
      'Should be able to get the instance id with additional headers supplied',
      function (done) {
        var mock = nock('http://metadata.google.internal/computeMetadata/v1',
          {reqHeaders: {'x-custom-header': 'true'}})
          .get('/instance/id')
          .once()
          .reply(200, STUB_ID);
        metadata.getInstanceId({'x-custom-header': 'true'}, function (err, id) {
          assert.deepEqual(err, null, 'Error should be null');
          assert.deepEqual(STUB_ID, id, 'The id should be the stub id');
          mock.done();
          done();
        });
      }
    );
  });

  describe('getHostname - valid cases', function() {
    var STUB_HOSTNAME = 'a-stub-hostname';
    it(
      'Should be able to get the hostname without additional headers supplied',
      function (done) {
        var mock = nock('http://metadata.google.internal/computeMetadata/v1')
          .get('/instance/hostname')
          .once()
          .reply(200, STUB_HOSTNAME);
        metadata.getHostname(function (err, id) {
          assert.deepEqual(err, null, 'Error should be null');
          assert.deepEqual(STUB_HOSTNAME, id,
            'The hostname should be the stub hostname');
          mock.done();
          done();
        });
      }
    );
    it(
      'Should be able to get the hostname with additional headers supplied',
      function (done) {
        var mock = nock('http://metadata.google.internal/computeMetadata/v1',
          {reqHeaders: {'x-custom-header': 'true'}})
          .get('/instance/hostname')
          .once()
          .reply(200, STUB_HOSTNAME);
        metadata.getHostname({'x-custom-header': 'true'}, function (err, id) {
          assert.deepEqual(err, null, 'Error should be null');
          assert.deepEqual(STUB_HOSTNAME, id,
            'The hostname should be the stub hostname');
          mock.done();
          done();
        });
      }
    );
  });
});
