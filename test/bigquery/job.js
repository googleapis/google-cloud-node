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
var mockery = require('mockery');
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
    mockery.registerMock('../common/service-object.js', FakeServiceObject);
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
  });

  describe('cancel', function() {
    it('should pass a cancelJobResponse to the callback', function(done) {
      var cancelJobResponse = {job: JOB_ID, kind: 'kind'};
      job.bigQuery.request = function(reqOpts, cb) {
        cb(null, cancelJobResponse);
      };

      job.cancel(function(err, response) {
        assert.ifError(err);
        assert.deepEqual(response, cancelJobResponse);
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
