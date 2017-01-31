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
var format = require('string-format-obj');
var nodeutil = require('util');
var proxyquire = require('proxyquire');
var util = require('@google-cloud/common').util;

var common = require('@google-cloud/common');
var commonGrpc = require('@google-cloud/common-grpc');

var promisified = false;
var fakeUtil = extend({}, common.util, {
  promisifyAll: function(Class) {
    if (Class.name === 'Family') {
      promisified = true;
    }
  }
});

var GrpcServiceObject = commonGrpc.ServiceObject;

function FakeGrpcServiceObject() {
  this.calledWith_ = arguments;
  GrpcServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeGrpcServiceObject, GrpcServiceObject);

describe('Bigtable/Family', function() {
  var FAMILY_NAME = 'family-test';
  var TABLE = {
    id: 'my-table',
    getFamilies: util.noop,
    createFamily: util.noop
  };

  var FAMILY_ID = format('{t}/columnFamilies/{f}', {
    t: TABLE.id,
    f: FAMILY_NAME
  });

  var Family;
  var family;
  var FamilyError;

  before(function() {
    Family = proxyquire('../src/family.js', {
      '@google-cloud/common': {
        util: fakeUtil
      },
      '@google-cloud/common-grpc': {
        ServiceObject: FakeGrpcServiceObject
      }
    });
    FamilyError = Family.FamilyError;
  });

  beforeEach(function() {
    family = new Family(TABLE, FAMILY_NAME);
  });

  describe('instantiation', function() {
    it('should inherit from GrpcServiceObject', function() {
      var config = family.calledWith_[0];

      assert(family instanceof FakeGrpcServiceObject);
      assert.strictEqual(config.parent, TABLE);
      assert.strictEqual(config.id, FAMILY_ID);
      assert.deepEqual(config.methods, {
        create: true,
        exists: true,
        get: true,
        delete: {
          protoOpts: {
            service: 'BigtableTableAdmin',
            method: 'modifyColumnFamilies'
          },
          reqOpts: {
            name: TABLE.id,
            modifications: [{
              drop: true,
              id: FAMILY_NAME
            }]
          }
        }
      });
      assert.strictEqual(typeof config.createMethod, 'function');
      assert.strictEqual(family.familyName, FAMILY_NAME);
    });

    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should call Table#createFamily for the create method', function(done) {
      var fakeOptions = {};

      TABLE.createFamily = function(name, options, callback) {
        assert.strictEqual(name, FAMILY_NAME);
        assert.strictEqual(options, fakeOptions);
        callback(null, family); // done
      };

      family.create(fakeOptions, done);
    });

    it('should extract the family name', function() {
      var family = new Family(TABLE, FAMILY_ID);
      assert.strictEqual(family.familyName, FAMILY_NAME);
    });
  });

  describe('formatName_', function() {
    it('should format the column family name', function() {
      var formatted = Family.formatName_(TABLE.id, FAMILY_NAME);

      assert.strictEqual(formatted, FAMILY_ID);
    });

    it('should not re-format the name', function() {
      var formatted = Family.formatName_(TABLE.id, FAMILY_ID);

      assert.strictEqual(formatted, FAMILY_ID);
    });
  });

  describe('formatRule_', function() {
    it('should capture the max age option', function() {
      var originalRule = {
        age: 10
      };

      var rule = Family.formatRule_(originalRule);

      assert.deepEqual(rule, {
        maxAge: originalRule.age
      });
    });

    it('should capture the max number of versions option', function() {
      var originalRule = {
        versions: 10
      };

      var rule = Family.formatRule_(originalRule);

      assert.deepEqual(rule, {
        maxNumVersions: originalRule.versions
      });
    });

    it('should create a union rule', function() {
      var originalRule = {
        age: 10,
        union: true
      };

      var rule = Family.formatRule_(originalRule);

      assert.deepEqual(rule, {
        union: {
          rules: [{
            maxAge: originalRule.age
          }]
        }
      });
    });

    it('should create an intersecting rule', function() {
      var originalRule = {
        versions: 2,
        intersection: true
      };

      var rule = Family.formatRule_(originalRule);

      assert.deepEqual(rule, {
        intersection: {
          rules: [{
            maxNumVersions: originalRule.versions
          }]
        }
      });
    });
  });

  describe('getMetadata', function() {
    it('should return an error to the callback', function(done) {
      var err = new Error('err');
      var response = {};

      family.parent.getFamilies = function(callback) {
        callback(err, null, response);
      };

      family.getMetadata(function(err_, metadata, apiResponse) {
        assert.strictEqual(err, err_);
        assert.strictEqual(response, apiResponse);
        done();
      });
    });

    it('should update the metadata', function(done) {
      var FAMILY = new Family(TABLE, FAMILY_NAME);
      var response = {
        families: {}
      };

      FAMILY.metadata = {
        a: 'a',
        b: 'b'
      };

      family.parent.getFamilies = function(callback) {
        callback(null, [FAMILY], response);
      };

      family.getMetadata(function(err, metadata, apiResponse) {
        assert.ifError(err);
        assert.strictEqual(FAMILY.metadata, metadata);
        assert.strictEqual(apiResponse, response);
        done();
      });
    });

    it('should throw a custom error', function(done) {
      var response = {};

      family.parent.getFamilies = function(callback) {
        callback(null, [], response);
      };

      family.getMetadata(function(err, metadata, apiResponse) {
        assert(err instanceof FamilyError);
        assert.strictEqual(metadata, null);
        assert.strictEqual(apiResponse, response);
        done();
      });
    });
  });

  describe('setMetadata', function() {
    it('should provide the proper request options', function(done) {
      family.request = function(protoOpts, reqOpts) {
        assert.deepEqual(protoOpts, {
          service: 'BigtableTableAdmin',
          method: 'modifyColumnFamilies'
        });

        assert.strictEqual(reqOpts.name, TABLE.id);
        assert.deepEqual(reqOpts.modifications, [{
          id: FAMILY_NAME,
          update: {}
        }]);
        done();
      };

      family.setMetadata({}, assert.ifError);
    });

    it('should respect the gc rule option', function(done) {
      var formatRule = Family.formatRule_;

      var formattedRule = {
        a: 'a',
        b: 'b'
      };

      var metadata = {
        rule: {
          c: 'c',
          d: 'd'
        }
      };

      Family.formatRule_ = function(rule) {
        assert.strictEqual(rule, metadata.rule);
        return formattedRule;
      };

      family.request = function(p, reqOpts) {
        assert.deepEqual(reqOpts, {
          name: TABLE.id,
          modifications: [{
            id: family.familyName,
            update: {
              gcRule: formattedRule
            }
          }]
        });
        Family.formatRule_ = formatRule;
        done();
      };

      family.setMetadata(metadata, assert.ifError);
    });

    it('should return an error to the callback', function(done) {
      var error = new Error('err');
      var response = {};

      family.request = function(protoOpts, reqOpts, callback) {
        callback(error, response);
      };

      family.setMetadata({}, function(err, metadata, apiResponse) {
        assert.strictEqual(err, error);
        assert.strictEqual(metadata, null);
        assert.strictEqual(apiResponse, response);
        done();
      });
    });

    it('should update the metadata property', function(done) {
      var fakeMetadata = {};
      var response = {
        columnFamilies: {
          'family-test': fakeMetadata
        }
      };

      family.request = function(protoOpts, reqOpts, callback) {
        callback(null, response);
      };

      family.setMetadata({}, function(err, metadata, apiResponse) {
        assert.ifError(err);
        assert.strictEqual(metadata, fakeMetadata);
        assert.strictEqual(family.metadata, fakeMetadata);
        assert.strictEqual(apiResponse, response);
        done();
      });
    });
  });

  describe('FamilyError', function() {
    it('should set the code and message', function() {
      var err = new FamilyError(FAMILY_NAME);

      assert.strictEqual(err.code, 404);
      assert.strictEqual(err.message,
        'Column family not found: ' + FAMILY_NAME + '.');
    });
  });
});
