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

const assert = require('assert');
const extend = require('extend');
const proxyquire = require('proxyquire');
const {util} = require('@google-cloud/common');
const promisify = require('@google-cloud/promisify');

let promisified = false;
const fakePromisify = extend({}, promisify, {
  promisifyAll: function(Class) {
    if (Class.name === 'Rule') {
      promisified = true;
    }
  },
});

function FakeServiceObject() {
  this.calledWith_ = arguments;
}

describe('Rule', function() {
  let Rule;
  let rule;

  function Compute() {
    this.createRule = util.noop;
    this.operation = util.noop;
  }

  const COMPUTE = new Compute();
  const RULE_NAME = 'rule-name';

  before(function() {
    Rule = proxyquire('../src/rule.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
      },
      '@google-cloud/promisify': fakePromisify,
    });
  });

  beforeEach(function() {
    rule = new Rule(COMPUTE, RULE_NAME);
  });

  describe('instantiation', function() {
    it('should inherit from ServiceObject', function() {
      const computeInstance = new Compute();
      const bindMethod = {};

      extend(computeInstance, {
        createRule: {
          bind: function(context) {
            assert.strictEqual(context, computeInstance);
            return bindMethod;
          },
        },
      });

      const rule = new Rule(computeInstance, RULE_NAME);
      assert(rule instanceof FakeServiceObject);

      const calledWith = rule.calledWith_[0];

      assert.strictEqual(calledWith.parent, computeInstance);
      assert.strictEqual(calledWith.baseUrl, '/global/forwardingRules');
      assert.strictEqual(calledWith.id, RULE_NAME);
      assert.strictEqual(calledWith.createMethod, bindMethod);
      assert.deepStrictEqual(calledWith.methods, {
        create: true,
        exists: true,
        get: true,
        getMetadata: true,
      });
    });

    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should not use global forwarding rules', function() {
      const rule = new Rule({createRule: util.noop}, RULE_NAME);
      assert(rule instanceof FakeServiceObject);

      const calledWith = rule.calledWith_[0];

      assert.strictEqual(calledWith.baseUrl, '/forwardingRules');
    });

    it('should localize the scope', function() {
      assert.strictEqual(rule.scope, COMPUTE);
    });
  });

  describe('delete', function() {
    it('should call ServiceObject.delete', function(done) {
      FakeServiceObject.prototype.delete = function() {
        assert.strictEqual(this, rule);
        done();
      };

      rule.delete();
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        FakeServiceObject.prototype.delete = function(callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error if the request fails', function(done) {
        rule.delete(function(err, operation, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(operation, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          rule.delete();
        });
      });
    });

    describe('success', function() {
      const apiResponse = {
        name: 'op-name',
      };

      beforeEach(function() {
        FakeServiceObject.prototype.delete = function(callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with Operation & Response', function(done) {
        const operation = {};

        rule.scope.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        rule.delete(function(err, operation_, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(operation_, operation);
          assert.strictEqual(operation_.metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          rule.delete();
        });
      });
    });
  });

  describe('setTarget', function() {
    const TARGET = 'target';

    it('should make the correct API request', function(done) {
      rule.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/setTarget');
        assert.deepStrictEqual(reqOpts.json, {target: TARGET});

        done();
      };

      rule.setTarget(TARGET, assert.ifError);
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {};

      beforeEach(function() {
        rule.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error if the request fails', function(done) {
        rule.setTarget(TARGET, function(err, op, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(op, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      const apiResponse = {
        name: 'op-name',
      };

      beforeEach(function() {
        rule.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with operation & response', function(done) {
        const operation = {};

        rule.scope.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        rule.setTarget(TARGET, function(err, op, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(op, operation);
          assert.strictEqual(op.metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          rule.setTarget(TARGET);
        });
      });
    });
  });
});
