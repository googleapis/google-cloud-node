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
var common = require('@google-cloud/common');
var extend = require('extend');
var proxyquire = require('proxyquire');

var promisified = false;
var fakeUtil = extend({}, common.util, {
  promisifyAll: function(Class) {
    if (Class.name === 'Snapshot') {
      promisified = true;
    }
  }
});

describe('Snapshot', function() {
  var Snapshot;
  var snapshot;

  var SNAPSHOT_NAME = 'a';
  var PROJECT_ID = 'grape-spaceship-123';

  var PUBSUB = {
    projectId: PROJECT_ID
  };

  var SUBSCRIPTION = {
    pubsub: PUBSUB,
    projectId: PROJECT_ID,
    api: {},
    createSnapshot: function() {},
    seek: function() {}
  };

  before(function() {
    Snapshot = proxyquire('../src/snapshot.js', {
      '@google-cloud/common': {
        util: fakeUtil
      }
    });
  });

  beforeEach(function() {
    fakeUtil.noop = function() {};
    snapshot = new Snapshot(SUBSCRIPTION, SNAPSHOT_NAME);
  });

  describe('initialization', function() {
    var FULL_SNAPSHOT_NAME = 'a/b/c/d';
    var formatName_;

    before(function() {
      formatName_ = Snapshot.formatName_;
      Snapshot.formatName_ = function() {
        return FULL_SNAPSHOT_NAME;
      };
    });

    after(function() {
      Snapshot.formatName_ = formatName_;
    });

    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should localize the parent', function() {
      assert.strictEqual(snapshot.parent, SUBSCRIPTION);
    });

    describe('name', function() {
      it('should create and cache the full name', function() {
        Snapshot.formatName_ = function(projectId, name) {
          assert.strictEqual(projectId, PROJECT_ID);
          assert.strictEqual(name, SNAPSHOT_NAME);
          return FULL_SNAPSHOT_NAME;
        };

        var snapshot = new Snapshot(SUBSCRIPTION, SNAPSHOT_NAME);
        assert.strictEqual(snapshot.name, FULL_SNAPSHOT_NAME);
      });

      it('should pull the projectId from parent object', function() {
        Snapshot.formatName_ = function(projectId, name) {
          assert.strictEqual(projectId, PROJECT_ID);
          assert.strictEqual(name, SNAPSHOT_NAME);
          return FULL_SNAPSHOT_NAME;
        };

        var snapshot = new Snapshot(SUBSCRIPTION, SNAPSHOT_NAME);
        assert.strictEqual(snapshot.name, FULL_SNAPSHOT_NAME);
      });
    });

    describe('with Subscription parent', function() {
      it('should include the create method', function(done) {
        SUBSCRIPTION.createSnapshot = function(name, callback) {
          assert.strictEqual(name, SNAPSHOT_NAME);
          callback(); // The done function
        };

        var snapshot = new Snapshot(SUBSCRIPTION, SNAPSHOT_NAME);
        snapshot.create(done);
      });

      it('should create a seek method', function(done) {
        SUBSCRIPTION.seek = function(name, callback) {
          assert.strictEqual(name, SNAPSHOT_NAME);
          callback(); // The done function
        };

        var snapshot = new Snapshot(SUBSCRIPTION, SNAPSHOT_NAME);
        snapshot.seek(done);
      });
    });

    describe('with PubSub parent', function() {
      var snapshot;

      beforeEach(function() {
        snapshot = new Snapshot(PUBSUB, SNAPSHOT_NAME);
      });

      it('should not include the create method', function() {
        assert.strictEqual(snapshot.create, undefined);
      });

      it('should not include a seek method', function() {
        assert.strictEqual(snapshot.seek, undefined);
      });
    });
  });

  describe('formatName_', function() {
    var EXPECTED = 'projects/' + PROJECT_ID + '/snapshots/' + SNAPSHOT_NAME;

    it('should format the name', function() {
      var name = Snapshot.formatName_(PROJECT_ID, SNAPSHOT_NAME);

      assert.strictEqual(name, EXPECTED);
    });

    it('should not re-format the name', function() {
      var name = Snapshot.formatName_(PROJECT_ID, EXPECTED);

      assert.strictEqual(name, EXPECTED);
    });
  });

  describe('delete', function() {
    it('should make the correct request', function(done) {
      snapshot.parent.request = function(config, callback) {
        assert.strictEqual(config.client, 'subscriberClient');
        assert.strictEqual(config.method, 'deleteSnapshot');
        assert.deepEqual(config.reqOpts, { snapshot: snapshot.name });
        callback(); // the done fn
      };

      snapshot.delete(done);
    });

    it('should optionally accept a callback', function(done) {
      fakeUtil.noop = done;

      snapshot.parent.request = function(config, callback) {
        callback(); // the done fn
      };

      snapshot.delete();
    });
  });
});
