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

var path = require('path');
var assert = require('assert');
var nock = require('nock');
var nocks = require('./nocks.js');
var extend = require('extend');
var config = require('../src/agent/config.js');
var Debuglet = require('../src/agent/debuglet.js');

var envProject = process.env.GCLOUD_PROJECT;

nock.disableNetConnect();

describe('test-options-credentials', function() {
  var debuglet = null;

  beforeEach(function() {
    delete process.env.GCLOUD_PROJECT;
    assert.equal(debuglet, null);
  });

  afterEach(function() {
    assert.ok(debuglet);
    debuglet.stop();
    debuglet = null;
    process.env.GCLOUD_PROJECT = envProject;
  });

  it('should use the keyFilename field of the options object', function(done) {
    var credentials = require('./fixtures/gcloud-credentials.json');
    var options = extend({}, {
      projectId: 'fake-project',
      keyFilename: path.join('test', 'fixtures', 'gcloud-credentials.json')
    });
    var debug = require('..')(options);
    var scope = nocks.oauth2(function(body) {
      assert.equal(body.client_id, credentials.client_id);
      assert.equal(body.client_secret, credentials.client_secret);
      assert.equal(body.refresh_token, credentials.refresh_token);
      return true;
    });
    // Since we have to get an auth token, this always gets intercepted second.
    nocks.register(function() {
      scope.done();
      setImmediate(done);
      return true;
    });
    debuglet = new Debuglet(debug, config);
    debuglet.start();
  });

  it('should use the credentials field of the options object', function(done) {
    var options = extend({}, {
      projectId: 'fake-project',
      credentials: require('./fixtures/gcloud-credentials.json')
    });
    var debug = require('..')(options);
    var scope = nocks.oauth2(function(body) {
      assert.equal(body.client_id, options.credentials.client_id);
      assert.equal(body.client_secret, options.credentials.client_secret);
      assert.equal(body.refresh_token, options.credentials.refresh_token);
      return true;
    });
    // Since we have to get an auth token, this always gets intercepted second.
    nocks.register(function() {
      scope.done();
      setImmediate(done);
      return true;
    });
    debuglet = new Debuglet(debug, config);
    debuglet.start();
  });

  it('should ignore keyFilename if credentials is provided', function(done) {
    var fileCredentials = require('./fixtures/gcloud-credentials.json');
    var credentials = {
      client_id: 'a',
      client_secret: 'b',
      refresh_token: 'c',
      type: 'authorized_user'
    };
    var options = extend({}, {
      projectId: 'fake-project',
      keyFilename: path.join('test', 'fixtures', 'gcloud-credentials.json'),
      credentials: credentials
    });
    var debug = require('..')(options);
    var scope = nocks.oauth2(function(body) {
      assert.equal(body.client_id, credentials.client_id);
      assert.equal(body.client_secret, credentials.client_secret);
      assert.equal(body.refresh_token, credentials.refresh_token);
      return true;
    });
    // Since we have to get an auth token, this always gets intercepted second.
    nocks.register(function() {
      scope.done();
      setImmediate(done);
      return true;
    });
    ['client_id', 'client_secret', 'refresh_token'].forEach(function(field) {
      assert(fileCredentials.hasOwnProperty(field));
      assert(options.credentials.hasOwnProperty(field));
      assert.notEqual(options.credentials[field], fileCredentials[field]);
    });
    debuglet = new Debuglet(debug, config);
    debuglet.start();
  });
});
