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
var fs = require('fs');
var uuid = require('node-uuid');

var Dataset = require('../src/dataset.js');
var env = require('../../../system-test/env.js');
var Job = require('../src/job.js');
var Table = require('../src/table.js');

var bigquery = require('../')(env);
var storage = require('@google-cloud/storage')(env);

describe('BigQuery', function() {
  var GCLOUD_TESTS_PREFIX = 'gcloud_test_';

  var dataset = bigquery.dataset(generateName('dataset'));
  var table = dataset.table(generateName('table'));
  var bucket = storage.bucket(generateName('bucket'));

  var query = 'SELECT url FROM [publicdata:samples.github_nested] LIMIT 100';

  before(function(done) {
    async.series([
      // Remove buckets created for the tests.
      deleteBuckets,

      // Remove datasets created for the tests.
      deleteDatasets,

      // Create the test dataset.
      dataset.create.bind(dataset),

      // Create the test table.
      table.create.bind(table, {
        schema: 'id:integer,breed,name,dob:timestamp,around:boolean'
      }),

      // Create a Bucket.
      bucket.create.bind(bucket)
    ], done);
  });

  after(function(done) {
    async.parallel([
      // Remove buckets created for the tests.
      deleteBuckets,

      // Remove datasets created for the tests.
      deleteDatasets
    ], done);
  });

  it('should get a list of datasets', function(done) {
    bigquery.getDatasets(function(err, datasets) {
      assert(datasets.length > 0);
      assert(datasets[0] instanceof Dataset);
      done();
    });
  });

  it('should allow limiting API calls', function(done) {
    var maxApiCalls = 1;
    var numRequestsMade = 0;

    var bigquery = require('../')(env);

    bigquery.interceptors.push({
      request: function(reqOpts) {
        numRequestsMade++;
        return reqOpts;
      }
    });

    bigquery.getDatasets({ maxApiCalls: maxApiCalls }, function(err) {
      assert.ifError(err);
      assert.strictEqual(numRequestsMade, 1);
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

  it('should cancel a job', function(done) {
    var query = 'SELECT url FROM [publicdata:samples.github_nested] LIMIT 10';

    bigquery.startQuery(query, function(err, job) {
      assert.ifError(err);

      job.cancel(function(err) {
        assert.ifError(err);

        job
          .on('error', done)
          .on('complete', function() {
            done();
          });
      });
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

    it('should create a Table with a nested schema', function(done) {
      var table = dataset.table(generateName('table'));

      table.create({
        schema: {
          fields: [
            {
              name: 'id',
              type: 'INTEGER'
            },
            {
              name: 'details',
              fields: [
                {
                  name: 'nested_id',
                  type: 'INTEGER'
                }
              ]
            }
          ]
        }
      }, function(err) {
        assert.ifError(err);

        table.getMetadata(function(err, metadata) {
          assert.ifError(err);

          assert.deepEqual(metadata.schema, {
            fields: [
              {
                name: 'id',
                type: 'INTEGER'
              },
              {
                name: 'details',
                type: 'RECORD',
                fields: [
                  {
                    name: 'nested_id',
                    type: 'INTEGER'
                  }
                ]
              }
            ]
          });

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
          { name: 'dob', type: 'TIMESTAMP' },
          { name: 'around', type: 'BOOLEAN' }
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

    describe('importing & exporting', function() {
      var file = bucket.file('kitten-test-data-backup.json');

      before(function(done) {
        fs.createReadStream(TEST_DATA_JSON_PATH)
          .pipe(file.createWriteStream())
          .on('error', done)
          .on('finish', done);
      });

      after(function(done) {
        file.delete(done);
      });

      it('should import data from a file in your bucket', function(done) {
        table.import(file, function(err, job) {
          assert.ifError(err);

          job
            .on('error', done)
            .on('complete', function() {
              done();
            });
        });
      });

      it('should convert values to their schema types', function(done) {
        var now = new Date();

        var data = {
          name: 'dave',
          breed: 'british shorthair',
          id: 99,
          dob: now.toJSON(),
          around: true
        };

        table.insert(data, function(err, insertErrors) {
          assert.ifError(err);

          if (insertErrors.length > 0) {
            done(insertErrors[0].errors[0]);
            return;
          }

          function query(callback) {
            var row;

            table.query('SELECT * FROM ' + table.id + ' WHERE id = ' + data.id)
              .on('error', callback)
              .once('data', function(row_) { row = row_; })
              .on('end', function() {
                if (!row) {
                  callback(new Error('Query returned 0 results.'));
                  return;
                }

                assert.strictEqual(row.name, data.name);
                assert.strictEqual(row.breed, data.breed);
                assert.strictEqual(row.id, data.id);
                assert.deepEqual(row.dob, now);
                callback();
              });
          }

          async.retry({ times: 3, interval: 2000 }, query, done);
        });
      });

      it('should export data to a file in your bucket', function(done) {
        var file = bucket.file('kitten-test-data-backup.json');

        table.export(file, function(err, job) {
          assert.ifError(err);

          job
            .on('error', done)
            .on('complete', function() {
              done();
            });
        });
      });
    });
  });

  function generateName(resourceType) {
    return (GCLOUD_TESTS_PREFIX + resourceType + '_' + uuid.v1())
      .replace(/-/g, '_');
  }

  function deleteBuckets(callback) {
    function deleteBucket(bucket, callback) {
      bucket.getFiles(function(err, files) {
        if (err) {
          callback(err);
          return;
        }

        async.each(files, function(file, next) {
          file.delete(next);
        }, function(err) {
          if (err) {
            callback(err);
            return;
          }

          bucket.delete(callback);
        });
      });
    }

    storage.getBuckets({
      prefix: GCLOUD_TESTS_PREFIX
    }, function(err, buckets) {
      if (err) {
        callback(err);
        return;
      }

      async.each(buckets, deleteBucket, callback);
    });
  }

  function deleteDatasets(callback) {
    bigquery.getDatasets({
      prefix: GCLOUD_TESTS_PREFIX
    }, function(err, datasets) {
      if (err) {
        callback(err);
        return;
      }

      async.each(datasets, function(dataset, next) {
        dataset.delete({ force: true }, next);
      }, callback);
    });
  }
});
