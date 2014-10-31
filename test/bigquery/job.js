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

/*global describe, it, beforeEach */

'use strict';

var assert = require('assert');
var Job = require('../../lib/bigquery/job');
var util = require('../../lib/common/util');

describe('BigQuery/Job', function() {
  var BIGQUERY = {
    projectId: 'test-project',
    makeReq_: util.noop
  };
  var JOB_ID = 'job_XYrk_3z';
  var job;

  beforeEach(function() {
    job = new Job(BIGQUERY, JOB_ID);
  });

  describe('initialization', function() {
    it('should assign this.bigQuery', function() {
      assert.deepEqual(job.bigQuery, BIGQUERY);
    });

    it('should assign the given id', function() {
      assert.equal(job.id, JOB_ID);
    });

    it('should assign empty metadata object', function() {
      assert.equal(JSON.stringify(job.metadata), '{}');
    });
  });

  describe('getMetadata', function() {
    it('should get metadata from api', function(done) {
      job.bigQuery.makeReq_ = function(method, path, query, body) {
        assert.equal(method, 'GET');
        assert.equal(path, '/jobs/' + job.id);
        assert.strictEqual(query, null);
        assert.strictEqual(body, null);
        done();
      };
      job.getMetadata(assert.ifError);
    });

    it('should execute callback with error', function(done) {
      var error = new Error('Error.');
      job.bigQuery.makeReq_ = function(method, path, query, body, callback) {
        callback(error);
      };
      job.getMetadata(function(err) {
        assert.equal(err, error);
        done();
      });
    });

    describe('metadata', function() {
      var METADATA = { a: 'b', c: 'd' };

      beforeEach(function() {
        job.bigQuery.makeReq_ = function(method, path, query, body, callback) {
          callback(null, METADATA);
        };
      });

      it('should update metadata on Dataset object', function(done) {
        job.getMetadata(function(err) {
          assert.ifError(err);
          assert.deepEqual(job.metadata, METADATA);
          done();
        });
      });

      it('should execute callback with metadata', function(done) {
        job.getMetadata(function(err, metadata) {
          assert.ifError(err);
          assert.deepEqual(metadata, METADATA);
          done();
        });
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
