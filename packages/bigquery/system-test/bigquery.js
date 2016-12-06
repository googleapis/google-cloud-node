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
var exec = require('methmeth');
var fs = require('fs');
var uuid = require('uuid');

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

  var SCHEMA = [
    {
      name: 'id',
      type: 'INTEGER'
    },
    {
      name: 'breed',
      type: 'STRING'
    },
    {
      name: 'name',
      type: 'STRING'
    },
    {
      name: 'dob',
      type: 'TIMESTAMP'
    },
    {
      name: 'around',
      type: 'BOOLEAN'
    },
    {
      name: 'buffer',
      type: 'BYTES'
    },
    {
      name: 'arrayOfInts',
      type: 'INTEGER',
      mode: 'REPEATED'
    },
    {
      name: 'recordOfRecords',
      type: 'RECORD',
      fields: [
        {
          name: 'records',
          type: 'RECORD',
          mode: 'REPEATED',
          fields: [
            {
              name: 'record',
              type: 'BOOLEAN'
            }
          ]
        }
      ]
    }
  ];

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
        schema: SCHEMA
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

  it('should return a promise', function() {
    return bigquery.getDatasets().then(function(data) {
      var datasets = data[0];

      assert(datasets.length > 0);
      assert(datasets[0] instanceof Dataset);
    });
  });

  it('should allow limiting API calls via promises', function() {
    var maxApiCalls = 1;
    var numRequestsMade = 0;

    var bigquery = require('../')(env);

    bigquery.interceptors.push({
      request: function(reqOpts) {
        numRequestsMade++;
        return reqOpts;
      }
    });

    return bigquery.getDatasets({
      maxApiCalls: maxApiCalls
    }).then(function() {
      assert.strictEqual(numRequestsMade, maxApiCalls);
    });
  });

  it('should allow for manual pagination in promise mode', function() {
    return bigquery.getDatasets({
      autoPaginate: false
    }).then(function(data) {
      var datasets = data[0];
      var nextQuery = data[1];
      var apiResponse = data[2];

      assert(datasets[0] instanceof Dataset);
      assert.strictEqual(nextQuery, null);
      assert(apiResponse);
    });
  });

  it('should list datasets as a stream', function(done) {
    var datasetEmitted = false;

    bigquery.getDatasetsStream()
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
        assert.strictEqual(rows.length, 100);
        assert.strictEqual(typeof rows[0].url, 'string');
        done();
      });
    });
  });

  it('should run a query job as a promise', function() {
    var job;

    return bigquery.startQuery(query)
      .then(function(response) {
        job = response[0];
        return job.promise();
      })
      .then(function() {
        return job.getQueryResults();
      })
      .then(function(response) {
        var rows = response[0];
        assert.strictEqual(rows.length, 100);
        assert.strictEqual(typeof rows[0].url, 'string');
      });
  });

  it('should get query results as a stream', function(done) {
    bigquery.startQuery(query, function(err, job) {
      assert.ifError(err);

      var rowsEmitted = [];

      job.getQueryResultsStream()
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

    bigquery.createQueryStream(query)
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

    bigquery.getJobsStream()
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

      dataset.getTablesStream()
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
      assert.deepEqual(table.metadata.schema.fields, SCHEMA);
    });

    it('should get the rows in a table', function(done) {
      table.getRows(function(err, rows) {
        assert.ifError(err);
        assert(Array.isArray(rows));
        done();
      });
    });

    it('should get the rows in a table via stream', function(done) {
      table.createReadStream()
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

      it('should import data from a file via promises', function() {
        return table.import(file)
          .then(function(results) {
            return results[0].promise();
          })
          .then(function(results) {
            var metadata = results[0];
            assert.strictEqual(metadata.status.state, 'DONE');
          });
      });

      it('should convert values to their schema types', function(done) {
        var data = {
          name: 'dave',
          breed: 'husky',
          id: 99,
          dob: new Date(),
          around: true,
          buffer: new Buffer('test'),
          arrayOfInts: [1, 3, 5],
          recordOfRecords: {
            records: [
              {
                record: true
              }
            ]
          }
        };

        table.insert(data, function(err) {
          assert.ifError(err);

          function query(callback) {
            var query = {
              query: 'SELECT * FROM ' + table.id + ' WHERE id = ' + data.id,
              useLegacySql: false
            };
            var row;

            table.createQueryStream(query)
              .on('error', callback)
              .once('data', function(row_) { row = row_; })
              .on('end', function() {
                if (!row) {
                  callback(new Error('Query returned 0 results.'));
                  return;
                }

                assert.deepEqual(row, data);
                callback();
              });
          }

          async.retry({ times: 3, interval: 2000 }, query, done);
        });
      });

      it('should return partial errors', function(done) {
        var data = {
          name: 'dave',
          breed: 'british husky',
          id: 99,
          dob: new Date(),
          around: true,
          buffer: new Buffer('test'),
          arrayOfInts: [1, 3, 5],
          recordOfRecords: {
            records: [
              {
                record: true
              }
            ]
          }
        };

        var improperData = {
          name: 11
        };

        table.insert([data, improperData], function(err) {
          assert.strictEqual(err.name, 'PartialFailureError');

          assert.deepEqual(err.errors[0], {
            errors: [
              {
                message: 'Conversion from int64 to string is unsupported.',
                reason: 'invalid'
              }
            ],
            row: improperData
          });

          assert.deepEqual(err.errors[1], {
            errors: [
              {
                message: undefined,
                reason: 'stopped'
              }
            ],
            row: data
          });

          done();
        });
      });

      describe('SQL parameters', function() {
        describe('positional', function() {
          it('should work with strings', function(done) {
            bigquery.query({
              query: [
                'SELECT url',
                'FROM `publicdata.samples.github_nested`',
                'WHERE repository.owner = ?',
                'LIMIT 1'
              ].join(' '),
              params: ['google']
            }, function(err, rows) {
              assert.ifError(err);
              assert.equal(rows.length, 1);
              done();
            });
          });

          it('should work with ints', function(done) {
            bigquery.query({
              query: [
                'SELECT url',
                'FROM `publicdata.samples.github_nested`',
                'WHERE repository.forks > ?',
                'LIMIT 1'
              ].join(' '),
              params: [1]
            }, function(err, rows) {
              assert.ifError(err);
              assert.equal(rows.length, 1);
              done();
            });
          });

          it('should work with floats', function(done) {
            bigquery.query({
              query: [
                'SELECT snow_depth',
                'FROM `publicdata.samples.gsod`',
                'WHERE snow_depth >= ?',
                'LIMIT 1'
              ].join(' '),
              params: [12.5]
            }, function(err, rows) {
              assert.ifError(err);
              assert.equal(rows.length, 1);
              done();
            });
          });

          it('should work with booleans', function(done) {
            bigquery.query({
              query: [
                'SELECT url',
                'FROM `publicdata.samples.github_nested`',
                'WHERE public = ?',
                'LIMIT 1'
              ].join(' '),
              params: [true]
            }, function(err, rows) {
              assert.ifError(err);
              assert.equal(rows.length, 1);
              done();
            });
          });

          it('should work with dates', function(done) {
            bigquery.query({
              query: [
                'SELECT subject',
                'FROM `bigquery-public-data.github_repos.commits`',
                'WHERE author.date < ?',
                'LIMIT 1'
              ].join(' '),
              params: [new Date()]
            }, function(err, rows) {
              assert.ifError(err);
              assert.equal(rows.length, 1);
              done();
            });
          });

          it('should work with arrays', function(done) {
            bigquery.query({
              query: 'SELECT * FROM UNNEST (?)',
              params: [
                [
                  25,
                  26,
                  27,
                  28,
                  29
                ]
              ]
            }, function(err, rows) {
              assert.ifError(err);
              assert.equal(rows.length, 5);
              done();
            });
          });

          it.skip('should work with structs', function(done) {
            bigquery.query({
              query: '??',
              params: []
            }, function(err, rows) {
              assert.ifError(err);
              assert.equal(rows.length, 1);
              done();
            });
          });

          it.skip('should work with DATETIME types', function(done) {
            bigquery.query({
              query: '??',
              params: []
            }, function(err, rows) {
              assert.ifError(err);
              assert.equal(rows.length, 1);
              done();
            });
          });

          it.skip('should work with TIME types', function(done) {
            bigquery.query({
              query: '??',
              params: []
            }, function(err, rows) {
              assert.ifError(err);
              assert.equal(rows.length, 1);
              done();
            });
          });

          it('should work with multiple types', function(done) {
            bigquery.query({
              query: [
                'SELECT url FROM `publicdata.samples.github_nested`',
                'WHERE repository.owner = ?',
                'AND repository.forks > ?',
                'AND public = ?',
                'LIMIT 1'
              ].join(' '),
              params: [
                'google',
                1,
                true
              ]
            }, function(err, rows) {
              assert.ifError(err);
              assert.equal(rows.length, 1);
              done();
            });
          });
        });

        describe('named', function() {
          it('should work with strings', function(done) {
            bigquery.query({
              query: [
                'SELECT url FROM `publicdata.samples.github_nested`',
                'WHERE repository.owner = @owner',
                'LIMIT 1'
              ].join(' '),
              params: {
                owner: 'google'
              }
            }, function(err, rows) {
              assert.ifError(err);
              assert.equal(rows.length, 1);
              done();
            });
          });

          it('should work with ints', function(done) {
            bigquery.query({
              query: [
                'SELECT url',
                'FROM `publicdata.samples.github_nested`',
                'WHERE repository.forks > @forks',
                'LIMIT 1'
              ].join(' '),
              params: {
                forks: 1
              }
            }, function(err, rows) {
              assert.ifError(err);
              assert.equal(rows.length, 1);
              done();
            });
          });

          it('should work with floats', function(done) {
            bigquery.query({
              query: [
                'SELECT snow_depth',
                'FROM `publicdata.samples.gsod`',
                'WHERE snow_depth >= @depth',
                'LIMIT 1'
              ].join(' '),
              params: {
                depth: 12.5
              }
            }, function(err, rows) {
              assert.ifError(err);
              assert.equal(rows.length, 1);
              done();
            });
          });

          it('should work with booleans', function(done) {
            bigquery.query({
              query: [
                'SELECT url',
                'FROM `publicdata.samples.github_nested`',
                'WHERE public = @isPublic',
                'LIMIT 1'
              ].join(' '),
              params: {
                isPublic: true
              }
            }, function(err, rows) {
              assert.ifError(err);
              assert.equal(rows.length, 1);
              done();
            });
          });

          it('should work with dates', function(done) {
            bigquery.query({
              query: [
                'SELECT subject',
                'FROM `bigquery-public-data.github_repos.commits`',
                'WHERE author.date < @time',
                'LIMIT 1'
              ].join(' '),
              params: {
                time: new Date()
              }
            }, function(err, rows) {
              assert.ifError(err);
              assert.equal(rows.length, 1);
              done();
            });
          });

          it('should work with arrays', function(done) {
            bigquery.query({
              query: 'SELECT * FROM UNNEST (@nums)',
              params: {
                nums: [
                  25,
                  26,
                  27,
                  28,
                  29
                ]
              }
            }, function(err, rows) {
              assert.ifError(err);
              assert.equal(rows.length, 5);
              done();
            });
          });

          it.skip('should work with structs', function(done) {
            bigquery.query({
              query: '??',
              params: {
                struct: {}
              }
            }, function(err, rows) {
              assert.ifError(err);
              assert.equal(rows.length, 1);
              done();
            });
          });

          it.skip('should work with DATETIME types', function(done) {
            bigquery.query({
              query: '??',
              params: {
                datetime: {}
              }
            }, function(err, rows) {
              assert.ifError(err);
              assert.equal(rows.length, 1);
              done();
            });
          });

          it.skip('should work with TIME types', function(done) {
            bigquery.query({
              query: '??',
              params: {
                time: {}
              }
            }, function(err, rows) {
              assert.ifError(err);
              assert.equal(rows.length, 1);
              done();
            });
          });

          it('should work with multiple types', function(done) {
            bigquery.query({
              query: [
                'SELECT url',
                'FROM `publicdata.samples.github_nested`',
                'WHERE repository.owner = @owner',
                'AND repository.forks > @forks',
                'AND public = @isPublic',
                'LIMIT 1'
              ].join(' '),
              params: {
                owner: 'google',
                forks: 1,
                isPublic: true
              }
            }, function(err, rows) {
              assert.ifError(err);
              assert.equal(rows.length, 1);
              done();
            });
          });
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

        async.each(files, exec('delete'), function(err) {
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

      async.each(datasets, exec('delete', { force: true }), callback);
    });
  }
});
