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
var proxyquire = require('proxyquire');

function FakeGrpcServiceObject() {
  this.calledWith_ = arguments;
}

describe('Snapshot', function() {
  var Snapshot;

  var SNAPSHOT_NAME = 'a';
  var PROJECT_ID = 'grape-spaceship-123';

  var PUBSUB = {
    projectId: PROJECT_ID
  };

  var SUBSCRIPTION = {
    parent: PUBSUB,
    createSnapshot: function() {},
    seek: function() {}
  };

  before(function() {
    Snapshot = proxyquire('../src/snapshot.js', {
      '@google-cloud/common-grpc': {
        ServiceObject: FakeGrpcServiceObject
      }
    });
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

    describe('name', function() {
      it('should create and cache the full name', function() {
        Snapshot.formatName_ = function(projectId, name) {
          assert.strictEqual(projectId, PROJECT_ID);
          assert.strictEqual(name, SNAPSHOT_NAME);
          return FULL_SNAPSHOT_NAME;
        };

        var snapshot = new Snapshot(PUBSUB, SNAPSHOT_NAME);
        assert.strictEqual(snapshot.name, FULL_SNAPSHOT_NAME);
      });

      it('should pull the projectId from subscription parent', function() {
        Snapshot.formatName_ = function(projectId, name) {
          assert.strictEqual(projectId, PROJECT_ID);
          assert.strictEqual(name, SNAPSHOT_NAME);
          return FULL_SNAPSHOT_NAME;
        };

        var snapshot = new Snapshot(SUBSCRIPTION, SNAPSHOT_NAME);
        assert.strictEqual(snapshot.name, FULL_SNAPSHOT_NAME);
      });
    });

    it('should inherit from GrpcServiceObject', function() {
      var snapshot = new Snapshot(PUBSUB, SNAPSHOT_NAME);
      var calledWith = snapshot.calledWith_[0];

      assert(snapshot instanceof FakeGrpcServiceObject);
      assert.strictEqual(calledWith.parent, PUBSUB);
      assert.strictEqual(calledWith.id, FULL_SNAPSHOT_NAME);
      assert.deepEqual(calledWith.methods, {
        delete: {
          protoOpts: {
            service: 'Subscriber',
            method: 'deleteSnapshot'
          },
          reqOpts: {
            snapshot: FULL_SNAPSHOT_NAME
          }
        }
      });
    });

    describe('with Subscription parent', function() {
      it('should include the create method', function(done) {
        SUBSCRIPTION.createSnapshot = function(callback) {
          callback(); // The done function
        };

        var snapshot = new Snapshot(SUBSCRIPTION, SNAPSHOT_NAME);
        var calledWith = snapshot.calledWith_[0];

        assert(calledWith.methods.create);
        calledWith.createMethod(done);
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
});
