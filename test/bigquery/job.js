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
var mockery = require('mockery-next');
var is = require('is');
var nodeutil = require('util');

var ServiceObject = require('../../lib/common/service-object.js');
var util = require('../../lib/common/util.js');

function FakeServiceObject() {
  this.calledWith_ = arguments;
  ServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeServiceObject, ServiceObject);

describe('BigQuery/Job', function() {
  var BIGQUERY = {
    projectId: 'my-project'
  };
  var JOB_ID = 'job_XYrk_3z';
  var Job;
  var job;

  before(function() {
    mockery.registerMock(
      '../../lib/common/service-object.js',
      FakeServiceObject
    );
    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });

    Job = require('../../lib/bigquery/job.js');
  });

  after(function() {
    mockery.deregisterAll();
    mockery.disable();
  });

  beforeEach(function() {
    job = new Job(BIGQUERY, JOB_ID);
  });

  describe('initialization', function() {
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

    it('should return the result of the call to bq.query', function(done) {
      job.bigQuery.query = function() {
        return {
          done: done
        };
      };

      job.getQueryResults().done();
    });
  });
});
