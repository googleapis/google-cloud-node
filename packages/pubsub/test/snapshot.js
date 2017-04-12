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
var GrpcServiceObject = require('@google-cloud/common-grpc').ServiceObject;
var proxyquire = require('proxyquire');
var util = require('util');

function FakeGrpcServiceObject() {
  this.calledWith_ = arguments;
  GrpcServiceObject.apply(this, arguments);
}

util.inherits(FakeGrpcServiceObject, GrpcServiceObject);

describe('Snapshot', function() {
  var Snapshot;
  var snapshot;

  var SNAPSHOT_NAME = 'a';
  var PROJECT_ID = 'grape-spaceship-123';

  var PUBSUB = {
    projectId: PROJECT_ID
  };

  var fakeCreateSnapshotReturn = 'a/b/c/d';
  var SUBSCRIPTION = {
    parent: PUBSUB,
    createSnapshot: function() {
      return fakeCreateSnapshotReturn;
    }
  };

  before(function() {
    Snapshot = proxyquire('../src/snapshot.js', {
      '@google-cloud/common-grpc': {
        ServiceObject: FakeGrpcServiceObject
      }
    });
  });

  beforeEach(function() {
    snapshot = new Snapshot(PUBSUB, SNAPSHOT_NAME);
  });

  describe('initialization', function() {
    var FULL_SNAPSHOT_NAME = 'a/b/c/d';
    var formatName_;

    before(function() {
      formatName_ = Snapshot.formatName_;

      Snapshot.formatName_ = function(projectId, name) {
        assert.strictEqual(projectId, PROJECT_ID);
        assert.strictEqual(name, SNAPSHOT_NAME);
        return FULL_SNAPSHOT_NAME;
      };
    });

    after(function() {
      Snapshot.formatName_ = formatName_;
    });

    it('should create and cache the full name', function() {
      assert.strictEqual(snapshot.name, FULL_SNAPSHOT_NAME);
    });

    it('should inherit from GrpcServiceObject', function() {
      assert(snapshot instanceof FakeGrpcServiceObject);

      var calledWith = snapshot.calledWith_[0];

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
      beforeEach(function() {
        snapshot = new Snapshot(SUBSCRIPTION, SNAPSHOT_NAME);
      });

      it('should pull the projectId from pubsub', function() {
        assert.strictEqual(snapshot.name, FULL_SNAPSHOT_NAME);
      });

      it('should include the create method', function() {
        var calledWith = snapshot.calledWith_[0];

        assert(calledWith.methods.create);

        var createMethodReturn = calledWith.createMethod();
        assert.strictEqual(createMethodReturn, fakeCreateSnapshotReturn);
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
