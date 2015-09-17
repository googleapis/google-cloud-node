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
var async = require('async');
var Dataset = require('../lib/bigquery/dataset');
var Table = require('../lib/bigquery/table');
var env = require('./env');
var fs = require('fs');
var Job = require('../lib/bigquery/job');
var uuid = require('node-uuid');

var gcloud = require('../lib')(env);
var bigquery = gcloud.bigquery();
var storage = gcloud.storage();

describe('BigQuery', function() {
  var DATASET_ID = ('gcloud_test_dataset_temp' + uuid.v1()).replace(/-/g, '_');
  var dataset;
  var TABLE_ID = 'myKittens';
  var table;
  var BUCKET_NAME = 'gcloud-test-bucket-temp-' + uuid.v1();
  var bucket;

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

      // Create a Bucket.
      function(next) {
        storage.createBucket(BUCKET_NAME, function(err, b) {
          if (err) {
            next(err);
            return;
          }

          bucket = b;
          next();
        });
      }
    ], done);
  });

  after(function(done) {
    async.parallel([
      // Delete the bucket we used.
      function(next) {
        bucket.getFiles(function(err, files) {
          if (err) {
            next(err);
            return;
          }

          async.map(files, function(file, onComplete) {
            file.delete(onComplete);
          }, function(err) {
            if (err) {
              next(err);
              return;
            }

            bucket.delete(next);
          });
        });
      },

      // Delete the test dataset.
      function(next) {
        dataset.delete({ force: true }, next);
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

  it('should list datasets as a stream', function(done) {
    var datasetEmitted = false;

    bigquery.getDatasets()
      .on('error', done)
      .on('data', function(dataset) {
        datasetEmitted = dataset instanceof Dataset;
      })
      .on('end', function() {
        assert.strictEqual(datasetEmitted, true);
        done();
      });
  });

  it('should run a query job, then get results', function(done) {
    bigquery.startQuery(query, function(err, job) {
      assert.ifError(err);
      assert(job instanceof Job);

      job.getQueryResults(function(err, rows) {
        assert.ifError(err);
        assert.equal(rows.length, 100);
        assert.equal(typeof rows[0].url, 'string');
        done();
      });
    });
  });

  it('should get query results as a stream', function(done) {
    bigquery.startQuery(query, function(err, job) {
      assert.ifError(err);

      var rowsEmitted = [];

      job.getQueryResults()
        .on('error', done)
        .on('data', function(row) {
          rowsEmitted.push(row);
        })
        .on('end', function() {
          assert.equal(rowsEmitted.length, 100);
          assert.equal(typeof rowsEmitted[0].url, 'string');
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
      .on('end', function() {
        assert.equal(rowsEmitted, 100);
        done();
      });
  });

  it('should query', function(done) {
    bigquery.query(query, function(err, rows) {
      assert.ifError(err);
      assert.equal(rows.length, 100);
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

  it('should list jobs as a stream', function(done) {
    var jobEmitted = false;

    bigquery.getJobs()
      .on('error', done)
      .on('data', function(job) {
        jobEmitted = job instanceof Job;
      })
      .on('end', function() {
        assert.strictEqual(jobEmitted, true);
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

    it('should get tables', function(done) {
      dataset.getTables(function(err, tables) {
        assert.ifError(err);
        assert(tables[0] instanceof Table);
        done();
      });
    });

    it('should get tables as a stream', function(done) {
      var tableEmitted = false;

      dataset.getTables()
        .on('error', done)
        .on('data', function(table) {
          tableEmitted = table instanceof Table;
        })
        .on('end', function() {
          assert.strictEqual(tableEmitted, true);
          done();
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

    it('should get the rows in a table', function(done) {
      table.getRows(function(err, rows) {
        assert.ifError(err);
        assert(Array.isArray(rows));
        done();
      });
    });

    it('should get the rows in a table via stream', function(done) {
      table.getRows()
        .on('error', done)
        .on('data', function() {})
        .on('end', done);
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
