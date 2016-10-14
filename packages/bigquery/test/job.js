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
var is = require('is');
var nodeutil = require('util');
var proxyquire = require('proxyquire');

var ServiceObject = require('@google-cloud/common').ServiceObject;
var util = require('@google-cloud/common').util;

function FakeServiceObject() {
  this.calledWith_ = arguments;
  ServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeServiceObject, ServiceObject);

var promisified = false;
var utilOverrides = {
  promisifyAll: function(Class) {
    if (Class.name === 'Job') {
      promisified = true;
    }
  }
};

var fakeUtil = Object.keys(util).reduce(function(fakeUtil, methodName) {
  fakeUtil[methodName] = function() {
    var method = utilOverrides[methodName] || util[methodName];
    return method.apply(this, arguments);
  };
  return fakeUtil;
}, {});

describe('BigQuery/Job', function() {
  var BIGQUERY = {
    projectId: 'my-project',
    Promise: Promise
  };
  var JOB_ID = 'job_XYrk_3z';
  var Job;
  var job;

  before(function() {
    Job = proxyquire('../src/job.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
        util: fakeUtil
      }
    });
  });

  beforeEach(function() {
    utilOverrides = {};
    job = new Job(BIGQUERY, JOB_ID);
  });

  describe('initialization', function() {
    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should assign this.bigQuery', function() {
      assert.deepEqual(job.bigQuery, BIGQUERY);
    });

    it('should inherit from ServiceObject', function() {
      assert(job instanceof ServiceObject);

      var calledWith = job.calledWith_[0];

      assert.strictEqual(calledWith.parent, BIGQUERY);
      assert.strictEqual(calledWith.baseUrl, '/jobs');
      assert.strictEqual(calledWith.id, JOB_ID);
      assert.deepEqual(calledWith.methods, {
        exists: true,
        get: true,
        getMetadata: true
      });
    });

    it('should correctly initialize variables', function() {
      assert.strictEqual(job.completeListeners, 0);
      assert.strictEqual(job.hasActiveListeners, false);
    });

    describe('request interceptor', function() {
      it('should assign a request interceptor for /cancel', function() {
        var requestInterceptor = job.interceptors.pop().request;
        assert(is.fn(requestInterceptor));
      });

      it('should transform `projects` -> `project` for /cancel', function() {
        var reqOpts = {
          uri: '/bigquery/v2/projects/projectId/jobs/jobId/cancel'
        };
        var expectedReqOpts = {
          uri: '/bigquery/v2/project/projectId/jobs/jobId/cancel'
        };

        var requestInterceptor = job.interceptors.pop().request;
        assert.deepEqual(requestInterceptor(reqOpts), expectedReqOpts);
      });

      it('should not affect non-cancel requests', function() {
        var reqOpts = {
          uri: '/bigquery/v2/projects/projectId/jobs/jobId/getQueryResults'
        };
        var expectedReqOpts = {
          uri: '/bigquery/v2/projects/projectId/jobs/jobId/getQueryResults'
        };

        var requestInterceptor = job.interceptors.pop().request;
        assert.deepEqual(requestInterceptor(reqOpts), expectedReqOpts);
      });
    });
  });

  describe('cancel', function() {
    it('should make the correct API request', function(done) {
      job.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/cancel');
        done();
      };

      job.cancel(assert.ifError);
    });

    it('should not require a callback', function(done) {
      job.request = function(reqOpts, callback) {
        assert.doesNotThrow(function() {
          callback();
          done();
        });
      };

      job.cancel();
    });

    it('should execute callback with only error & API resp', function(done) {
      var arg1 = {};
      var arg2 = {};
      var arg3 = {};

      job.request = function(reqOpts, callback) {
        callback(arg1, arg2, arg3);
      };

      job.cancel(function(arg1_, arg2_) {
        assert.strictEqual(arguments.length, 2);
        assert.strictEqual(arg1_, arg1);
        assert.strictEqual(arg2_, arg2);
        done();
      });
    });
  });

  describe('getQueryResults', function() {
    var options = {
      a: 'b',
      c: 'd'
    };
    var callback = util.noop;

    it('should accept an options object & callback', function(done) {
      job.bigQuery.query = function(opts, cb) {
        assert.deepEqual(opts, options);
        assert.equal(cb, callback);
        done();
      };

      job.getQueryResults(options, callback);
    });

    it('should accept an options object without a callback', function(done) {
      job.bigQuery.query = function(opts, cb) {
        assert.deepEqual(opts, options);
        assert.equal(cb, undefined);
        done();
      };

      job.getQueryResults(options);
    });

    it('should accept no arguments', function(done) {
      job.bigQuery.query = function(opts, cb) {
        assert.deepEqual(opts, { job: job });
        assert.equal(cb, undefined);
        done();
      };

      job.getQueryResults();
    });

    it('should accept only a callback', function(done) {
      job.bigQuery.query = function(opts, cb) {
        assert.deepEqual(opts, { job: job });
        assert.equal(cb, done);
        cb(); // done()
      };

      job.getQueryResults(done);
    });

    it('should assign job to the options object', function(done) {
      job.bigQuery.query = function(opts) {
        assert.deepEqual(opts.job, job);
        done();
      };

      job.getQueryResults();
    });
  });

  describe('getQueryResultsStream', function() {
    var options = {
      a: 'b',
      c: 'd'
    };
    var callback = util.noop;

    it('should accept an options object', function(done) {
      job.bigQuery.createQueryStream = function(opts) {
        assert.deepEqual(opts, options);
        done();
      };

      job.getQueryResultsStream(options, callback);
    });

    it('should accept no arguments', function(done) {
      job.bigQuery.createQueryStream = function(opts, cb) {
        assert.deepEqual(opts, { job: job });
        assert.equal(cb, undefined);
        done();
      };

      job.getQueryResultsStream();
    });

    it('should assign job to the options object', function(done) {
      job.bigQuery.createQueryStream = function(opts) {
        assert.deepEqual(opts.job, job);
        done();
      };

      job.getQueryResultsStream();
    });

    it('should return the result of the call to bq.query', function(done) {
      job.bigQuery.createQueryStream = function() {
        return {
          done: done
        };
      };

      job.getQueryResultsStream().done();
    });
  });

  describe('promise', function() {
    beforeEach(function() {
      job.startPolling_ = util.noop;
    });

    it('should return an instance of the localized Promise', function() {
      var FakePromise = job.Promise = function() {};
      var promise = job.promise();

      assert(promise instanceof FakePromise);
    });

    it('should reject the promise if an error occurs', function() {
      var error = new Error('err');

      setImmediate(function() {
        job.emit('error', error);
      });

      return job.promise().then(function() {
        throw new Error('Promise should have been rejected.');
      }, function(err) {
        assert.strictEqual(err, error);
      });
    });

    it('should resolve the promise on complete', function() {
      var metadata = {};

      setImmediate(function() {
        job.emit('complete', metadata);
      });

      return job.promise().then(function(data) {
        assert.deepEqual(data, [metadata]);
      });
    });
  });

  describe('listenForEvents_', function() {
    beforeEach(function() {
      job.startPolling_ = util.noop;
    });

    it('should start polling when complete listener is bound', function(done) {
      job.startPolling_ = function() {
        done();
      };

      job.on('complete', util.noop);
    });

    it('should track the number of listeners', function() {
      assert.strictEqual(job.completeListeners, 0);

      job.on('complete', util.noop);
      assert.strictEqual(job.completeListeners, 1);

      job.removeListener('complete', util.noop);
      assert.strictEqual(job.completeListeners, 0);
    });

    it('should only run a single pulling loop', function() {
      var startPollingCallCount = 0;

      job.startPolling_ = function() {
        startPollingCallCount++;
      };

      job.on('complete', util.noop);
      job.on('complete', util.noop);

      assert.strictEqual(startPollingCallCount, 1);
    });

    it('should close when no more message listeners are bound', function() {
      job.on('complete', util.noop);
      job.on('complete', util.noop);
      assert.strictEqual(job.hasActiveListeners, true);

      job.removeListener('complete', util.noop);
      assert.strictEqual(job.hasActiveListeners, true);

      job.removeListener('complete', util.noop);
      assert.strictEqual(job.hasActiveListeners, false);
    });
  });

  describe('startPolling_', function() {
    var listenForEvents_;
    var job;

    before(function() {
      listenForEvents_ = Job.prototype.listenForEvents_;
    });

    after(function() {
      Job.prototype.listenForEvents_ = listenForEvents_;
    });

    beforeEach(function() {
      Job.prototype.listenForEvents_ = util.noop;
      job = new Job(BIGQUERY, JOB_ID);
      job.hasActiveListeners = true;
    });

    afterEach(function() {
      job.hasActiveListeners = false;
    });

    it('should not call getMetadata if no listeners', function(done) {
      job.hasActiveListeners = false;

      job.getMetadata = done; // if called, test will fail.

      job.startPolling_();
      done();
    });

    it('should call getMetadata if listeners are registered', function(done) {
      job.hasActiveListeners = true;

      job.getMetadata = function() {
        done();
      };

      job.startPolling_();
    });

    describe('API error', function() {
      var error = new Error('Error.');
      var apiResponse = {};

      beforeEach(function() {
        job.getMetadata = function(callback) {
          callback(error, null, apiResponse);
        };
      });

      it('should emit the error', function(done) {
        job.on('error', function(err) {
          assert.strictEqual(err, error);
          done();
        });

        job.startPolling_();
      });
    });

    describe('job failure', function() {
      var error = new Error('Error.');
      var apiResponse = {
        status: {
          errors: error
        }
      };

      beforeEach(function() {
        job.getMetadata = function(callback) {
          callback(null, apiResponse, apiResponse);
        };
      });

      it('should detect and emit an error from the response', function(done) {
        utilOverrides.ApiError = function(body) {
          assert.strictEqual(body, apiResponse.status);

          return error;
        };

        job.on('error', function(err) {
          assert.strictEqual(err, error);
          done();
        });

        job.startPolling_();
      });
    });

    describe('job pending', function() {
      var apiResponse = {
        status: {
          state: 'PENDING'
        }
      };
      var setTimeoutCached = global.setTimeout;

      beforeEach(function() {
        job.getMetadata = function(callback) {
          callback(null, apiResponse, apiResponse);
        };
      });

      after(function() {
        global.setTimeout = setTimeoutCached;
      });

      it('should call startPolling_ after 500 ms', function(done) {
        var startPolling_ = job.startPolling_;
        var startPollingCalled = false;

        global.setTimeout = function(fn, timeoutMs) {
          fn(); // should call startPolling_
          assert.strictEqual(timeoutMs, 500);
        };

        job.startPolling_ = function() {
          if (!startPollingCalled) {
            // Call #1.
            startPollingCalled = true;
            startPolling_.apply(this, arguments);
            return;
          }

          // This is from the setTimeout call.
          assert.strictEqual(this, job);
          done();
        };

        job.startPolling_();
      });
    });

    describe('job complete', function() {
      var apiResponse = {
        status: {
          state: 'DONE'
        }
      };

      beforeEach(function() {
        job.getMetadata = function(callback) {
          callback(null, apiResponse, apiResponse);
        };
      });

      it('should emit complete with metadata', function(done) {
        job.on('complete', function(metadata) {
          assert.strictEqual(metadata, apiResponse);
          done();
        });

        job.startPolling_();
      });
    });
  });
});
