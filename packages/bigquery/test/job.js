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

var arrify = require('arrify');
var assert = require('assert');
var is = require('is');
var proxyquire = require('proxyquire');

var util = require('@google-cloud/common').util;

function FakeOperation() {
  this.calledWith_ = arguments;
  this.interceptors = [];
  this.id = this.calledWith_[0].id;
}

var promisified = false;
var utilOverrides = {
  promisifyAll: function(Class) {
    if (Class.name === 'Job') {
      promisified = true;
    }
  }
};

var extended = false;
var fakePaginator = {
  extend: function(Class, methods) {
    if (Class.name !== 'Job') {
      return;
    }

    methods = arrify(methods);
    assert.deepEqual(methods, ['getQueryResults']);
    extended = true;
  },
  streamify: function(methodName) {
    return methodName;
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
        Operation: FakeOperation,
        paginator: fakePaginator,
        util: fakeUtil
      }
    });
  });

  beforeEach(function() {
    utilOverrides = {};
    job = new Job(BIGQUERY, JOB_ID);
  });

  describe('initialization', function() {
    it('should paginate all the things', function() {
      assert(extended);
    });

    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should assign this.bigQuery', function() {
      assert.deepEqual(job.bigQuery, BIGQUERY);
    });

    it('should inherit from Operation', function() {
      assert(job instanceof FakeOperation);

      var calledWith = job.calledWith_[0];

      assert.strictEqual(calledWith.parent, BIGQUERY);
      assert.strictEqual(calledWith.baseUrl, '/jobs');
      assert.strictEqual(calledWith.id, JOB_ID);
      assert.deepEqual(calledWith.methods, {
        exists: true,
        get: true,
        getMetadata: true,
        setMetadata: true
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
    var pageToken = 'token';
    var options = {
      a: 'a',
      b: 'b'
    };

    var RESPONSE = {
      pageToken: pageToken,
      jobReference: { jobId: JOB_ID }
    };

    beforeEach(function() {
      BIGQUERY.request = function(reqOpts, callback) {
        callback(null, RESPONSE);
      };

      BIGQUERY.mergeSchemaWithRows_ = function(schema, rows) {
        return rows;
      };
    });

    it('should make the correct request', function(done) {
      var options = {};

      BIGQUERY.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/queries/' + JOB_ID);
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      job.getQueryResults(options, assert.ifError);
    });

    it('should optionally accept options', function(done) {
      BIGQUERY.request = function(reqOpts) {
        assert.deepEqual(reqOpts.qs, {});
        done();
      };

      job.getQueryResults(assert.ifError);
    });

    it('should return any errors to the callback', function(done) {
      var error = new Error('err');
      var response = {};

      BIGQUERY.request = function(reqOpts, callback) {
        callback(error, response);
      };

      job.getQueryResults(function(err, rows, nextQuery, resp) {
        assert.strictEqual(err, error);
        assert.strictEqual(rows, null);
        assert.strictEqual(nextQuery, null);
        assert.strictEqual(resp, response);
        done();
      });
    });

    it('should return the rows and response to the callback', function(done) {
      job.getQueryResults(function(err, rows, nextQuery, resp) {
        assert.ifError(err);
        assert.deepEqual(rows, []);
        assert.strictEqual(resp, RESPONSE);
        done();
      });
    });

    it('should merge the rows with the schema', function(done) {
      var response = {
        schema: {},
        rows: []
      };

      var mergedRows = [];

      BIGQUERY.request = function(reqOpts, callback) {
        callback(null, response);
      };

      BIGQUERY.mergeSchemaWithRows_ = function(schema, rows) {
        assert.strictEqual(schema, response.schema);
        assert.strictEqual(rows, response.rows);
        return mergedRows;
      };

      job.getQueryResults(function(err, rows) {
        assert.ifError(err);
        assert.strictEqual(rows, mergedRows);
        done();
      });
    });

    it('should return the query when the job is not complete', function(done) {
      BIGQUERY.request = function(reqOpts, callback) {
        callback(null, {
          jobComplete: false
        });
      };

      job.getQueryResults(options, function(err, rows, nextQuery) {
        assert.ifError(err);
        assert.deepEqual(nextQuery, options);
        assert.notStrictEqual(nextQuery, options);
        done();
      });
    });

    it('should populate nextQuery when more results exist', function(done) {
      job.getQueryResults(options, function(err, rows, nextQuery) {
        assert.ifError(err);
        assert.equal(nextQuery.pageToken, pageToken);
        done();
      });
    });
  });

  describe('getQueryResultsStream', function() {
    it('should have streamified getQueryResults', function() {
      assert.strictEqual(job.getQueryResultsStream, 'getQueryResults');
    });
  });

  describe('poll_', function() {
    it('should call getMetadata', function(done) {
      job.getMetadata = function() {
        done();
      };

      job.poll_(assert.ifError);
    });

    describe('API error', function() {
      var error = new Error('Error.');

      beforeEach(function() {
        job.getMetadata = function(callback) {
          callback(error);
        };
      });

      it('should return an error', function(done) {
        job.poll_(function(err) {
          assert.strictEqual(err, error);
          done();
        });
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

      it('should detect and return an error from the response', function(done) {
        utilOverrides.ApiError = function(body) {
          assert.strictEqual(body, apiResponse.status);

          return error;
        };

        job.poll_(function(err) {
          assert.strictEqual(err, error);
          done();
        });
      });
    });

    describe('job pending', function() {
      var apiResponse = {
        status: {
          state: 'PENDING'
        }
      };

      beforeEach(function() {
        job.getMetadata = function(callback) {
          callback(null, apiResponse, apiResponse);
        };
      });

      it('should execute callback', function(done) {
        job.poll_(function(err, metadata) {
          assert.ifError(err);
          assert.strictEqual(metadata, undefined);
          done();
        });
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
        job.poll_(function(err, metadata) {
          assert.ifError(err);
          assert.strictEqual(metadata, apiResponse);
          done();
        });
      });
    });
  });
});
