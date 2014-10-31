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
var Dataset = require('../../lib/bigquery/dataset');
var Job = require('../../lib/bigquery/job');
var Stream = require('stream').Stream;
var Table = require('../../lib/bigquery/table');
var util = require('../../lib/common/util');

var BigQuery = require('sandboxed-module')
  .require('../../lib/bigquery', {
    requires: {
      './dataset': Dataset,
      './job': Job,
      './table': FakeTable
    }
  });

var mergeSchemaWithRows_Cached = Table.mergeSchemaWithRows_;
var mergeSchemaWithRows_Override;

function FakeTable(a, b) {
  Table.call(this, a, b);
}

FakeTable.mergeSchemaWithRows_ = function() {
  var args = [].slice.apply(arguments);
  return (mergeSchemaWithRows_Override || mergeSchemaWithRows_Cached)
    .apply(null, args);
};

describe('BigQuery', function() {
  var JOB_ID = JOB_ID;
  var PROJECT_ID = 'test-project';
  var bq;

  beforeEach(function() {
    bq = new BigQuery({ projectId: PROJECT_ID });
  });

  describe('createDataset', function() {
    var DATASET_ID = 'kittens';

    it('should create a dataset', function(done) {
      bq.makeReq_ = function(method, path, query, body) {
        assert.equal(method, 'POST');
        assert.equal(path, '/datasets');
        assert.strictEqual(query, null);
        assert.deepEqual(body, {
          datasetReference: {
            datasetId: DATASET_ID
          }
        });
        done();
      };
      bq.createDataset(DATASET_ID, assert.ifError);
    });

    it('should return an error to the callback', function(done) {
      var error = new Error('Error.');
      bq.makeReq_ = function(method, path, query, body, callback) {
        callback(error);
      };
      bq.createDataset(DATASET_ID, function(err) {
        assert.equal(err, error);
        done();
      });
    });

    it('should return a Dataset object', function(done) {
      bq.makeReq_ = function(method, path, query, body, callback) {
        callback(null, {});
      };
      bq.createDataset(DATASET_ID, function(err, dataset) {
        assert.ifError(err);
        assert(dataset instanceof Dataset);
        done();
      });
    });

    it('should assign metadata to the Dataset object', function(done) {
      var metadata = { a: 'b', c: 'd' };
      bq.makeReq_ = function(method, path, query, body, callback) {
        callback(null, metadata);
      };
      bq.createDataset(DATASET_ID, function(err, dataset) {
        assert.ifError(err);
        assert.deepEqual(dataset.metadata, metadata);
        done();
      });
    });
  });

  describe('dataset', function() {
    var DATASET_ID = 'dataset-id';

    it('returns a Dataset instance', function() {
      var ds = bq.dataset(DATASET_ID);
      assert(ds instanceof Dataset);
    });

    it('should scope the correct dataset', function() {
      var ds = bq.dataset(DATASET_ID);
      assert.equal(ds.id, DATASET_ID);
      assert.deepEqual(ds.bigQuery, bq);
    });
  });

  describe('getDatasets', function() {
    it('should get datasets from the api', function(done) {
      bq.makeReq_ = function(method, path, query, body) {
        assert.equal(method, 'GET');
        assert.equal(path, '/datasets');
        assert.deepEqual(query, {});
        assert.strictEqual(body, null);
        done();
      };
      bq.getDatasets(assert.ifError);
    });

    it('should accept query', function(done) {
      var queryObject = { all: true, maxResults: 8, pageToken: 'token' };
      bq.makeReq_ = function(method, path, query) {
        assert.deepEqual(query, queryObject);
        done();
      };
      bq.getDatasets(queryObject, assert.ifError);
    });

    it('should return error to callback', function(done) {
      var error = new Error('Error.');
      bq.makeReq_ = function(method, path, query, body, callback) {
        callback(error);
      };
      bq.getDatasets(function(err) {
        assert.equal(err, error);
        done();
      });
    });

    it('should return Dataset objects', function(done) {
      bq.makeReq_ = function(method, path, query, body, callback) {
        callback(null, {
          datasets: [{ datasetReference: { datasetId: 'datasetName' } }]
        });
      };
      bq.getDatasets(function(err, datasets) {
        assert.ifError(err);
        assert(datasets[0] instanceof Dataset);
        done();
      });
    });

    it('should assign metadata to the Dataset objects', function(done) {
      var datasetObjects = [
        {
          a: 'b',
          c: 'd',
          datasetReference: {
            datasetId: 'datasetName'
          }
        }
      ];
      bq.makeReq_ = function(method, path, query, body, callback) {
        callback(null, { datasets: datasetObjects });
      };
      bq.getDatasets(function(err, datasets) {
        assert.ifError(err);
        assert(datasets[0].metadata, datasetObjects[0]);
        done();
      });
    });

    it('should return token if more results exist', function(done) {
      var token = 'token';
      bq.makeReq_ = function(method, path, query, body, callback) {
        callback(null, { nextPageToken: token });
      };
      bq.getDatasets(function(err, datasets, nextQuery) {
        assert.deepEqual(nextQuery, {
          pageToken: token
        });
        done();
      });
    });
  });

  describe('getJobs', function() {
    it('should get jobs from the api', function(done) {
      bq.makeReq_ = function(method, path, query, body) {
        assert.equal(method, 'GET');
        assert.equal(path, '/jobs');
        assert.deepEqual(query, {});
        assert.strictEqual(body, null);
        done();
      };
      bq.getJobs(assert.ifError);
    });

    it('should accept query', function(done) {
      var queryObject = {
        allUsers: true,
        maxResults: 8,
        pageToken: 'token',
        projection: 'full',
        stateFilter: 'done'
      };
      bq.makeReq_ = function(method, path, query) {
        assert.deepEqual(query, queryObject);
        done();
      };
      bq.getJobs(queryObject, assert.ifError);
    });

    it('should return error to callback', function(done) {
      var error = new Error('Error.');
      bq.makeReq_ = function(method, path, query, body, callback) {
        callback(error);
      };
      bq.getJobs(function(err) {
        assert.equal(err, error);
        done();
      });
    });

    it('should return Job objects', function(done) {
      bq.makeReq_ = function(method, path, query, body, callback) {
        callback(null, { jobs: [{ id: JOB_ID }] });
      };
      bq.getJobs(function(err, jobs) {
        assert.ifError(err);
        assert(jobs[0] instanceof Job);
        done();
      });
    });

    it('should assign metadata to the Job objects', function(done) {
      var jobObjects = [{ a: 'b', c: 'd', id: JOB_ID }];
      bq.makeReq_ = function(method, path, query, body, callback) {
        callback(null, { jobs: jobObjects });
      };
      bq.getJobs(function(err, jobs) {
        assert.ifError(err);
        assert(jobs[0].metadata, jobObjects[0]);
        done();
      });
    });

    it('should return token if more results exist', function(done) {
      var token = 'token';
      bq.makeReq_ = function(method, path, query, body, callback) {
        callback(null, { nextPageToken: token });
      };
      bq.getJobs(function(err, jobs, nextQuery) {
        assert.deepEqual(nextQuery, {
          pageToken: token
        });
        done();
      });
    });
  });

  describe('job', function() {
    it('should return a Job instance', function() {
      var job = bq.job(JOB_ID);
      assert(job instanceof Job);
    });

    it('should scope the correct job', function() {
      var job = bq.job(JOB_ID);
      assert.equal(job.id, JOB_ID);
      assert.deepEqual(job.bigQuery, bq);
    });
  });

  describe('query', function() {
    var QUERY_STRING = 'SELECT * FROM [dataset.table]';

    it('should accept a string for a query', function(done) {
      bq.makeReq_ = function(method, path, query, body) {
        assert.equal(body.query, QUERY_STRING);
        done();
      };

      bq.query(QUERY_STRING, assert.ifError);
    });

    it('should pass along query options', function(done) {
      var options = {
        query: QUERY_STRING,
        a: 'b',
        c: 'd'
      };

      bq.makeReq_ = function(method, path, query, body) {
        assert.equal(body.query, QUERY_STRING);
        assert.equal(body.a, 'b');
        assert.equal(body.c, 'd');
        done();
      };

      bq.query(options, assert.ifError);
    });

    it('should get the results of a job if one is provided', function(done) {
      bq.makeReq_ = function(method, path) {
        assert.equal(method, 'GET');
        assert.equal(path, '/queries/' + JOB_ID);
        done();
      };

      bq.query({ job: bq.job(JOB_ID) }, assert.ifError);
    });

    it('should be a stream if a callback is omitted', function() {
      assert(bq.query() instanceof Stream);
    });

    it('should run the query after being read from', function(done) {
      bq.makeReq_ = function() {
        done();
      };

      var stream = bq.query();
      stream.emit('reading');
    });

    describe('job is incomplete', function() {
      var options = {};

      beforeEach(function() {
        bq.makeReq_ = function(method, path, query, body, callback) {
          callback(null, {
            jobComplete: false,
            jobReference: { jobId: JOB_ID }
          });
        };
      });

      it('should populate nextQuery when job is incomplete', function(done) {
        bq.query({}, function(err, rows, nextQuery) {
          assert.ifError(err);
          assert(nextQuery.job instanceof Job);
          assert.equal(nextQuery.job.id, JOB_ID);
          done();
        });
      });

      it('should not modify original options object', function(done) {
        bq.query(options, function(err) {
          assert.ifError(err);
          assert.deepEqual(options, {});
          done();
        });
      });
    });

    describe('more results exist', function() {
      var options = {};
      var pageToken = 'token';

      beforeEach(function() {
        bq.makeReq_ = function(method, path, query, body, callback) {
          callback(null, {
            pageToken: pageToken,
            jobReference: { jobId: JOB_ID }
          });
        };
      });

      it('should populate nextQuery when more results exist', function(done) {
        bq.query(options, function(err, rows, nextQuery) {
          assert.ifError(err);
          assert(nextQuery.job instanceof Job);
          assert.equal(nextQuery.job.id, JOB_ID);
          assert.equal(nextQuery.pageToken, pageToken);
          done();
        });
      });

      it('should not modify original options object', function(done) {
        bq.query(options, function(err) {
          assert.ifError(err);
          assert.deepEqual(options, {});
          done();
        });
      });
    });

    it('should merge the schema with rows', function(done) {
      var rows = [{ row: 'a' }, { row: 'b' }, { row: 'c' }];
      var schema = [{ fields: [] }];

      mergeSchemaWithRows_Override = function(s, r) {
        mergeSchemaWithRows_Override = null;
        assert.deepEqual(s, schema);
        assert.deepEqual(r, rows);
        done();
      };

      bq.makeReq_ = function(method, path, query, body, callback) {
        callback(null, {
          jobReference: { jobId: JOB_ID },
          rows: rows,
          schema: schema
        });
      };

      bq.query({}, assert.ifError);
    });

    describe('errors', function() {
      var error = new Error('Error.');

      beforeEach(function() {
        bq.makeReq_ = function(method, path, query, body, callback) {
          callback(error);
        };
      });

      describe('serial', function() {
        it('should pass errors to the callback', function(done) {
          bq.query({}, function(err) {
            assert.equal(err, error);
            done();
          });
        });
      });

      describe('streams', function() {
        it('should emit errors', function(done) {
          bq.query()
            .once('error', function(err) {
              assert.equal(err, error);
              done();
            })
            .emit('reading');
        });

        it('should end the stream', function(done) {
          bq.query()
            .once('error', util.noop)
            .once('finish', done)
            .emit('reading');
        });
      });
    });

    describe('results', function() {
      var ROWS = [{ a: 'b' }, { c: 'd' }];

      beforeEach(function() {
        bq.makeReq_ = function(method, path, query, body, callback) {
          callback(null, {
            jobReference: { jobId: JOB_ID },
            rows: [],
            schema: {}
          });
        };

        mergeSchemaWithRows_Override = function() {
          mergeSchemaWithRows_Override = null;
          return ROWS;
        };
      });

      describe('serial', function() {
        it('should return rows to callback', function(done) {
          bq.query({}, function(err, rows) {
            assert.deepEqual(rows, ROWS);
            done();
          });
        });
      });

      describe('streams', function() {
        it('should emit rows to stream', function(done) {
          var rowsEmitted = 0;
          bq.query()
            .on('data', function(row) {
              assert.deepEqual(row, ROWS[rowsEmitted]);
              rowsEmitted++;
            })
            .on('end', function() {
              assert.equal(rowsEmitted, ROWS.length);
              done();
            });
        });

        it('should call .query() with nextQuery automatically', function(done) {
          var queryCalled = 0;
          var pageToken = 'token';

          bq.makeReq_ = function(method, path, query, body, callback) {
            callback(null, {
              jobReference: { jobId: JOB_ID },
              pageToken: pageToken
            });
          };

          var query = bq.query;
          bq.query = function(options) {
            queryCalled++;

            if (queryCalled === 1) {
              return query.apply(bq, [].slice.call(arguments));
            } else {
              assert.deepEqual(options.pageToken, pageToken);
              done();
            }
          };

          bq.query().emit('reading');
        });

        it('should end the stream if there is no nextQuery', function(done) {
          bq.query().on('finish', done).emit('reading');
        });
      });
    });
  });

  describe('startQuery', function() {
    it('should throw if a query is not provided', function() {
      assert.throws(function() {
        bq.startQuery();
      }, /SQL query string is required/);

      assert.throws(function() {
        bq.startQuery({ noQuery: 'here' });
      }, /SQL query string is required/);
    });

    describe('with destination', function() {
      var dataset;
      var TABLE_ID = 'table-id';

      beforeEach(function() {
        dataset = {
          bigQuery: bq,
          id: 'dataset-id'
        };
      });

      it('should throw if a destination table is not provided', function() {
        assert.throws(function() {
          bq.startQuery({
            query: 'query',
            destination: 'not a table'
          });
        }, /Destination must be a Table/);
      });

      it('should assign destination table to request body', function(done) {
        bq.makeReq_ = function(method, path, query, body) {
          assert.deepEqual(body.configuration.query.destinationTable, {
            datasetId: dataset.id,
            projectId: dataset.bigQuery.projectId,
            tableId: TABLE_ID
          });

          done();
        };

        bq.startQuery({
          query: 'query',
          destination: new FakeTable(dataset, TABLE_ID)
        });
      });

      it('should delete `destination` prop from request body', function(done) {
        bq.makeReq_ = function(method, path, query, body) {
          assert.strictEqual(body.configuration.query.destination, undefined);
          done();
        };

        bq.startQuery({
          query: 'query',
          destination: new FakeTable(dataset, TABLE_ID)
        });
      });
    });

    it('should pass options to the request body', function(done) {
      var options = { a: 'b', c: 'd', query: 'query' };

      bq.makeReq_ = function(method, path, query, body) {
        assert.deepEqual(body.configuration.query, options);
        done();
      };

      bq.startQuery(options);
    });

    it('should make the correct api request', function(done) {
      bq.makeReq_ = function(method, path, query, body) {
        assert.equal(method, 'POST');
        assert.equal(path, '/jobs');
        assert.strictEqual(query, null);
        assert.deepEqual(body.configuration.query, { query: 'query' });
        done();
      };

      bq.startQuery('query');
    });

    it('should execute the callback with error', function(done) {
      var error = new Error('Error.');

      bq.makeReq_ = function(method, path, query, body, callback) {
        callback(error);
      };

      bq.startQuery('query', function(err) {
        assert.equal(err, error);
        done();
      });
    });

    it('should execute the callback with Job', function(done) {
      var jobsResource = { jobReference: { jobId: JOB_ID }, a: 'b', c: 'd' };

      bq.makeReq_ = function(method, path, query, body, callback) {
        callback(null, jobsResource);
      };

      bq.startQuery('query', function(err, job) {
        assert.ifError(err);
        assert(job instanceof Job);
        assert.equal(job.id, JOB_ID);
        assert.deepEqual(job.metadata, jobsResource);
        done();
      });
    });
  });

  describe('makeReq_', function() {
    var method = 'POST';
    var path = '/path';
    var query = { a: 'b', c: { d: 'e' } };
    var body = { hi: 'there' };

    it('should make correct request', function(done) {
      bq.connection_.req = function(request) {
        var basePath = 'https://www.googleapis.com/bigquery/v2/projects/';
        assert.equal(request.method, method);
        assert.equal(request.uri, basePath + bq.projectId + path);
        assert.deepEqual(request.qs, query);
        assert.deepEqual(request.json, body);
        done();
      };
      bq.makeReq_(method, path, query, body, assert.ifError);
    });

    it('should execute callback', function(done) {
      bq.connection_.req = function(request, callback) {
        callback();
      };
      bq.makeReq_(method, path, query, body, done);
    });
  });
});
