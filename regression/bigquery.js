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

/*global describe, it, before */

'use strict';

var assert = require('assert');
var async = require('async');
var Dataset = require('../lib/bigquery/dataset');
var env = require('./env');
var fs = require('fs');
var Job = require('../lib/bigquery/job');

var gcloud = require('../lib')(env);
var bigquery = gcloud.bigquery();
var bucket = gcloud.storage().bucket();

describe('BigQuery', function() {
  var DATASET_ID = 'testDatasetId';
  var dataset;
  var TABLE_ID = 'myKittens';
  var table;

  var query = 'SELECT url FROM [publicdata:samples.github_nested] LIMIT 100';

  before(function(done) {
    async.series([
      function(next) {
        // Delete the test dataset, if it exists.
        bigquery.dataset(DATASET_ID).delete({ force: true }, function() {
          next();
        });
      },

      // Create the test dataset.
      function(next) {
        bigquery.createDataset(DATASET_ID, function(err, ds) {
          if (err) {
            next(err);
            return;
          }

          dataset = ds;
          next();
        });
      },

      // Delete the test table, if it exists.
      function(next) {
        dataset.table(TABLE_ID).delete(function() {
          next();
        });
      },

      // Create the test table.
      function(next) {
        dataset.createTable({
          id: TABLE_ID,
          schema: 'id:integer,breed,name,dob:timestamp'
        }, function(err, t) {
          if (err) {
            next(err);
            return;
          }

          table = t;
          next();
        });
      },

      // Create a Bucket, if necessary.
      function(next) {
        bucket.getMetadata(function(err) {
          if (!err) {
            next();
            return;
          }

          gcloud.storage().createBucket(bucket.name, function(err, b) {
            if (err) {
              next(err);
              return;
            }

            bucket = b;
            next();
          });
        });
      }
    ], done);
  });

  it('should get a list of datasets', function(done) {
    bigquery.getDatasets(function(err, datasets) {
      assert(datasets.length > 0);
      assert(datasets[0] instanceof Dataset);
      done();
    });
  });

  it('should run a query job, then get results', function(done) {
    bigquery.startQuery(query, function(err, job) {
      assert.ifError(err);
      assert(job instanceof Job);

      job.getQueryResults(function(err, rows) {
        assert.equal(rows.length, 100);
        assert.equal(typeof rows[0].url, 'string');
        done();
      });
    });
  });

  it('should query as a stream', function(done) {
    var rowsEmitted = 0;

    bigquery.query(query)
      .on('data', function(row) {
        rowsEmitted++;
        assert.equal(typeof row.url, 'string');
      })
      .on('error', done)
      .on('finish', function() {
        assert.equal(rowsEmitted, 100);
        done();
      });
  });

  it('should allow querying in series', function(done) {
    bigquery.query({
      query: query,
      maxResults: 10
    }, function(err, rows, nextQuery) {
      assert.ifError(err);
      assert.equal(rows.length, 10);
      assert.equal(typeof nextQuery.pageToken, 'string');
      done();
    });
  });

  it('should get a list of jobs', function(done) {
    bigquery.getJobs(function(err, jobs) {
      assert.ifError(err);
      assert(jobs[0] instanceof Job);
      done();
    });
  });

  describe('BigQuery/Dataset', function() {
    it('should set & get metadata', function(done) {
      dataset.setMetadata({
        description: 'yay description'
      }, function(err) {
        assert.ifError(err);

        dataset.getMetadata(function(err, metadata) {
          assert.ifError(err);
          assert.equal(metadata.description, 'yay description');
          done();
        });
      });
    });
  });

  describe('BigQuery/Table', function() {
    var TEST_DATA_JSON_PATH = require.resolve('./data/kitten-test-data.json');

    it('should have created the correct schema', function() {
      assert.deepEqual(table.metadata.schema, {
        fields: [
          { name: 'id', type: 'INTEGER' },
          { name: 'breed', type: 'STRING' },
          { name: 'name', type: 'STRING' },
          { name: 'dob', type: 'TIMESTAMP' }
        ]
      });
    });

    it('should insert rows', function(done) {
      table.insert([
        { name: 'silvano', breed: 'the cat kind', id: 1, dob: Date.now() },
        { name: 'ryan', breed: 'golden retriever?', id: 2, dob: Date.now() },
        { name: 'stephen', breed: 'idkanycatbreeds', id: 3, dob: Date.now() }
      ], done);
    });

    it('should insert rows via stream', function(done) {
      fs.createReadStream(TEST_DATA_JSON_PATH)
        .pipe(table.createWriteStream('json'))
        .on('error', done)
        .on('complete', function() {
          done();
        });
    });

    it('should set & get metadata', function(done) {
      table.setMetadata({
        description: 'catsandstuff'
      }, function(err) {
        assert.ifError(err);

        table.getMetadata(function(err, metadata) {
          assert.ifError(err);
          assert.equal(metadata.description, 'catsandstuff');
          done();
        });
      });
    });

    it('should import data from a file in your bucket', function(done) {
      bucket.upload(TEST_DATA_JSON_PATH, function(err, file) {
        assert.ifError(err);

        table.import(file, function(err, job) {
          assert.ifError(err);
          assert(job instanceof Job);
          done();
        });
      });
    });

    it('should export data to a file in your bucket', function(done) {
      table.export(bucket.file('kitten-test-data-backup.json'), done);
    });
  });
});
