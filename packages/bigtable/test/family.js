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
var format = require('string-format-obj');
var nodeutil = require('util');
var proxyquire = require('proxyquire');
var util = require('@google-cloud/common').util;

var GrpcServiceObject = require('@google-cloud/common').GrpcServiceObject;

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
        GrpcServiceObject: FakeGrpcServiceObject
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
            service: 'BigtableTableService',
            method: 'deleteColumnFamily'
          },
          reqOpts: {
            name: FAMILY_ID
          }
        }
      });
      assert.strictEqual(typeof config.createMethod, 'function');
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
      family.request = function(protoOpts, reqOpts, callback) {
        assert.deepEqual(protoOpts, {
          service: 'BigtableTableService',
          method: 'updateColumnFamily'
        });

        assert.strictEqual(reqOpts.name, FAMILY_ID);
        callback();
      };

      family.setMetadata({}, done);
    });

    it('should respect the gc expression option', function(done) {
      var metadata = {
        rule: 'a b c'
      };

      family.request = function(p, reqOpts) {
        assert.strictEqual(reqOpts.gcExpression, metadata.rule);
        done();
      };

      family.setMetadata(metadata, assert.ifError);
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
        assert.strictEqual(reqOpts.gcRule, formattedRule);
        Family.formatRule_ = formatRule;
        done();
      };

      family.setMetadata(metadata, assert.ifError);
    });

    it('should respect the updated name option', function(done) {
      var formatName = Family.formatName_;
      var fakeName = 'a/b/c';

      var metadata = {
        name: 'new-name'
      };

      Family.formatName_ = function(parent, newName) {
        assert.strictEqual(parent, TABLE.id);
        assert.strictEqual(newName, metadata.name);
        return fakeName;
      };

      family.request = function(p, reqOpts) {
        assert.strictEqual(reqOpts.name, fakeName);
        Family.formatName_ = formatName;
        done();
      };

      family.setMetadata(metadata, assert.ifError);
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
