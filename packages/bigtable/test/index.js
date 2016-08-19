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
var extend = require('extend');
var googleProtoFiles = require('google-proto-files');
var nodeutil = require('util');
var proxyquire = require('proxyquire');
var sinon = require('sinon').sandbox.create();

var GrpcService = require('@google-cloud/common').GrpcService;
var PKG = require('../package.json');
var Table = require('../src/table.js');
var util = require('@google-cloud/common').util;

var fakeUtil = extend({}, util);

function FakeGrpcService() {
  this.calledWith_ = arguments;
  GrpcService.apply(this, arguments);
}

nodeutil.inherits(FakeGrpcService, GrpcService);

function FakeTable() {
  this.calledWith_ = arguments;
  Table.apply(this, arguments);
}

function FakeFamily() {}

describe('Bigtable', function() {
  var PROJECT_ID = 'test-project';
  var ZONE = 'test-zone';
  var CLUSTER = 'test-cluster';

  var Bigtable;
  var bigtable;

  before(function() {
    Bigtable = proxyquire('../', {
      '@google-cloud/common': {
        GrpcService: FakeGrpcService,
        util: fakeUtil
      },
      './family.js': FakeFamily,
      './table.js': FakeTable
    });
  });

  afterEach(function() {
    sinon.restore();
  });

  beforeEach(function() {
    bigtable = new Bigtable({
      projectId: PROJECT_ID,
      zone: ZONE,
      cluster: CLUSTER
    });
  });

  describe('instantiation', function() {
    it('should normalize the arguments', function() {
      var normalizeArguments = fakeUtil.normalizeArguments;
      var normalizeArgumentsCalled = false;
      var fakeOptions = {
        projectId: PROJECT_ID,
        zone: ZONE,
        cluster: CLUSTER
      };
      var fakeContext = {};

      fakeUtil.normalizeArguments = function(context, options) {
        normalizeArgumentsCalled = true;
        assert.strictEqual(context, fakeContext);
        assert.strictEqual(options, fakeOptions);
        return options;
      };

      Bigtable.call(fakeContext, fakeOptions);
      assert(normalizeArgumentsCalled);

      fakeUtil.normalizeArguments = normalizeArguments;
    });

    it('should inherit from GrpcService', function() {
      assert(bigtable instanceof GrpcService);

      var calledWith = bigtable.calledWith_[0];

      assert.strictEqual(calledWith.baseUrl, 'bigtable.googleapis.com');
      assert.strictEqual(calledWith.service, 'bigtable');
      assert.strictEqual(calledWith.apiVersion, 'v2');

      assert.deepEqual(calledWith.protoServices, {
        Bigtable: googleProtoFiles('bigtable/v2/bigtable.proto'),
        BigtableTableAdmin: {
          baseUrl: 'bigtableadmin.googleapis.com',
          path: googleProtoFiles(
            'bigtable/admin/v2/bigtable_table_admin.proto'),
          service: 'bigtable.admin'
        },
        BigtableInstanceAdmin: {
          baseUrl: 'bigtableadmin.googleapis.com',
          path: googleProtoFiles(
            'bigtable/admin/v2/bigtable_instance_admin.proto'
          ),
          service: 'bigtable.admin'
        },
        Operations: {
          baseUrl: 'bigtableadmin.googleapis.com',
          path: googleProtoFiles('longrunning/operations.proto'),
          service: 'longrunning',
          apiVersion: 'v1'
        }
      });

      assert.deepEqual(calledWith.scopes, [
        'https://www.googleapis.com/auth/bigtable.admin',
        'https://www.googleapis.com/auth/bigtable.data',
        'https://www.googleapis.com/auth/cloud-platform'
      ]);

      assert.strictEqual(calledWith.userAgent, PKG.name + '/' + PKG.version);
    });
  });

});
