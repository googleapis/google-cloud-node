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

  var query = 'SELECT url FROM `publicdata.samples.github_nested` LIMIT 100';

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

  it('should honor the job prefix option', function(done) {
    var options = {
      query: query,
      jobPrefix: 'hi-im-a-prefix'
    };

    bigquery.startQuery(options, function(err, job) {
      assert.ifError(err);
      assert.strictEqual(job.id.indexOf(options.jobPrefix), 0);

      job.getQueryResults(function(err, rows) {
        assert.ifError(err);
        assert.strictEqual(rows.length, 100);
        assert.strictEqual(typeof rows[0].url, 'string');
        done();
      });
    });
  });

  it('should honor the dryRun option', function(done) {
    var options = {
      query: query,
      dryRun: true
    };

    bigquery.startQuery(options, function(err, job) {
      assert.ifError(err);
      assert(job.metadata.statistics);
      done();
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
    bigquery.query(query, {
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

    it('should use etags for locking', function(done) {
      dataset.getMetadata(function(err) {
        assert.ifError(err);

        var etag = dataset.metadata.etag;

        dataset.setMetadata({
          etag: etag,
          description: 'another description'
        }, function(err) {
          assert.ifError(err);
          // the etag should be updated
          assert.notStrictEqual(etag, dataset.metadata.etag);
          done();
        });
      });
    });

    it('should error out for bad etags', function(done) {
      dataset.setMetadata({
        etag: 'a-fake-etag',
        description: 'oh no!'
      }, function(err) {
        assert.strictEqual(err.code, 412); // precondition failed
        done();
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

    describe('copying', function() {
      var TABLES = {
        1: {
          data: {
            tableId: 1
          }
        },

        2: {}
      };

      var SCHEMA = 'tableId:integer';

      before(function(done) {
        TABLES[1].table = dataset.table(generateName('table'));
        TABLES[2].table = dataset.table(generateName('table'));

        async.each(TABLES, function(tableObject, next) {
          var tableInstance = tableObject.table;

          tableInstance.create({
            schema: SCHEMA
          }, next);
        }, function(err) {
          if (err) {
            done(err);
            return;
          }

          var table1Instance = TABLES[1].table;
          table1Instance.insert(TABLES[1].data, done);
        });
      });

      it('should start copying data from current table', function(done) {
        var table1 = TABLES[1];
        var table1Instance = table1.table;

        var table2 = TABLES[2];
        var table2Instance = table2.table;

        table1Instance.startCopy(table2Instance, function(err, job) {
          assert.ifError(err);

          job
            .on('error', done)
            .on('complete', function() {
              // Data may take up to 90 minutes to be copied*, so we cannot test
              // to see that anything but the request was successful.
              // *https://cloud.google.com/bigquery/streaming-data-into-bigquery
              done();
            });
        });
      });

      it('should copy data from current table', function(done) {
        var table1 = TABLES[1];
        var table1Instance = table1.table;

        var table2 = TABLES[2];
        var table2Instance = table2.table;

        table1Instance.copy(table2Instance, function(err, resp) {
          assert.ifError(err);
          assert.strictEqual(resp.status.state, 'DONE');
          done();
        });
      });

      it('should start copying data from another table', function(done) {
        var table1 = TABLES[1];
        var table1Instance = table1.table;

        var table2 = TABLES[2];
        var table2Instance = table2.table;

        table2Instance.startCopyFrom(table1Instance, function(err, job) {
          assert.ifError(err);

          job
            .on('error', done)
            .on('complete', function() {
              // Data may take up to 90 minutes to be copied*, so we cannot test
              // to see that anything but the request was successful.
              // *https://cloud.google.com/bigquery/streaming-data-into-bigquery
              done();
            });
        });
      });

      it('should copy data from another table', function(done) {
        var table1 = TABLES[1];
        var table1Instance = table1.table;

        var table2 = TABLES[2];
        var table2Instance = table2.table;

        table2Instance.copyFrom(table1Instance, function(err, resp) {
          assert.ifError(err);
          assert.strictEqual(resp.status.state, 'DONE');
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

      it('should start to import data from a storage file', function(done) {
        table.startImport(file, function(err, job) {
          assert.ifError(err);

          job
            .on('error', done)
            .on('complete', function() {
              done();
            });
        });
      });

      it('should import data from a storage file', function(done) {
        table.import(file, function(err, resp) {
          assert.ifError(err);
          assert.strictEqual(resp.status.state, 'DONE');
          done();
        });
      });

      it('should import data from a file via promises', function() {
        return table.import(file)
          .then(function(results) {
            var metadata = results[0];
            assert.strictEqual(metadata.status.state, 'DONE');
          });
      });

      it('should return partial errors', function(done) {
        var data = {
          name: 'dave'
        };

        var improperData = {
          name: true
        };

        table.insert([data, improperData], function(err) {
          assert.strictEqual(err.name, 'PartialFailureError');

          assert.deepEqual(err.errors[0], {
            errors: [
              {
                message: 'Conversion from bool to string is unsupported.',
                reason: 'invalid'
              }
            ],
            row: improperData
          });

          assert.deepEqual(err.errors[1], {
            errors: [
              {
                message: '',
                reason: 'stopped'
              }
            ],
            row: data
          });

          done();
        });
      });

      it('should create tables upon insert', function() {
        var table = dataset.table(generateName('does-not-exist'));

        var row = {
          name: 'stephen'
        };

        var options = {
          autoCreate: true,
          schema: SCHEMA
        };

        return table.insert(row, options)
          .then(function() {
            // getting rows immediately after insert
            // results in an empty array
            return new Promise(function(resolve) {
              setTimeout(resolve, 2500);
            });
          })
          .then(function() {
            return table.getRows();
          })
          .then(function(data) {
            var rows = data[0];

            assert.strictEqual(rows.length, 1);
            assert.strictEqual(rows[0].name, row.name);
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

          it('should work with structs', function(done) {
            bigquery.query({
              query: 'SELECT ? obj',
              params: [
                {
                  b: true,
                  arr: [2,3,4],
                  d: bigquery.date('2016-12-7'),
                  f: 3.14,
                  nested: {
                    a: 3
                  }
                }
              ]
            }, function(err, rows) {
              assert.ifError(err);
              assert.equal(rows.length, 1);
              done();
            });
          });

          it('should work with TIMESTAMP types', function(done) {
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

          it('should work with DATE types', function(done) {
            bigquery.query({
              query: 'SELECT ? date',
              params: [
                bigquery.date('2016-12-7')
              ]
            }, function(err, rows) {
              assert.ifError(err);
              assert.equal(rows.length, 1);
              done();
            });
          });

          it('should work with DATETIME types', function(done) {
            bigquery.query({
              query: 'SELECT ? datetime',
              params: [
                bigquery.datetime('2016-12-7 14:00:00')
              ]
            }, function(err, rows) {
              assert.ifError(err);
              assert.equal(rows.length, 1);
              done();
            });
          });

          it('should work with TIME types', function(done) {
            bigquery.query({
              query: 'SELECT ? time',
              params: [
                bigquery.time('14:00:00')
              ]
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

          it('should work with structs', function(done) {
            bigquery.query({
              query: 'SELECT @obj obj',
              params: {
                obj: {
                  b: true,
                  arr: [2,3,4],
                  d: bigquery.date('2016-12-7'),
                  f: 3.14,
                  nested: {
                    a: 3
                  }
                }
              }
            }, function(err, rows) {
              assert.ifError(err);
              assert.equal(rows.length, 1);
              done();
            });
          });

          it('should work with TIMESTAMP types', function(done) {
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

          it('should work with DATE types', function(done) {
            bigquery.query({
              query: 'SELECT @date date',
              params: {
                date: bigquery.date('2016-12-7')
              }
            }, function(err, rows) {
              assert.ifError(err);
              assert.equal(rows.length, 1);
              done();
            });
          });

          it('should work with DATETIME types', function(done) {
            bigquery.query({
              query: 'SELECT @datetime datetime',
              params: {
                datetime: bigquery.datetime('2016-12-7 14:00:00')
              }
            }, function(err, rows) {
              assert.ifError(err);
              assert.equal(rows.length, 1);
              done();
            });
          });

          it('should work with TIME types', function(done) {
            bigquery.query({
              query: 'SELECT @time time',
              params: {
                time: bigquery.time('14:00:00')
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

      it('should start export data to a storage file', function(done) {
        var file = bucket.file('kitten-test-data-backup.json');

        table.startExport(file, function(err, job) {
          assert.ifError(err);

          job
            .on('error', done)
            .on('complete', function() {
              done();
            });
        });
      });

      it('should export data to a storage file', function(done) {
        var file = bucket.file('kitten-test-data-backup.json');

        table.export(file, function(err, resp) {
          assert.ifError(err);
          assert.strictEqual(resp.status.state, 'DONE');
          done();
        });
      });
    });
  });

  describe('Provided Tests', function() {
    var table = dataset.table(generateName('table'));
    var schema = require('./data/schema.json');
    var testData = require('./data/schema-test-data.json');

    var EXPECTED_ROWS = {
      Bilbo: {
        Name: 'Bilbo',
        Age: 111,
        Weight: 67.2,
        IsMagic: false,
        Spells: [],
        TeaTime: bigquery.time('10:00:00'),
        NextVacation: bigquery.date('2017-09-22'),
        FavoriteTime: bigquery.datetime('2031-04-01T05:09:27')
      },

      Gandalf: {
        Name: 'Gandalf',
        Age: 1000,
        Weight: 198.6,
        IsMagic: true,
        Spells: [
          {
            Name: 'Skydragon',
            LastUsed: bigquery.timestamp('2015-10-31T23:59:56.000Z'),
            DiscoveredBy: 'Firebreather',
            Properties: [
              {
                Name: 'Flying',
                Power: 1
              },
              {
                Name: 'Creature',
                Power: 1
              },
              {
                Name: 'Explodey',
                Power: 11
              }
            ],
            Icon: new Buffer(testData[1].Spells[0].Icon, 'base64')
          }
        ],
        TeaTime: bigquery.time('15:00:00'),
        NextVacation: bigquery.date('2666-06-06'),
        FavoriteTime: bigquery.datetime('2001-12-19T23:59:59')
      },

      Sabrina: {
        Name: 'Sabrina',
        Age: 17,
        Weight: 128.3,
        IsMagic: true,
        Spells: [
          {
            Name: 'Talking cats',
            LastUsed: bigquery.timestamp('2017-02-14T12:07:23.000Z'),
            DiscoveredBy: 'Salem',
            Properties: [
              {
                Name: 'Makes you look crazy',
                Power: 1
              }
            ],
            Icon: new Buffer(testData[2].Spells[0].Icon, 'base64')
          }
        ],
        TeaTime: bigquery.time('12:00:00'),
        NextVacation: bigquery.date('2017-03-14'),
        FavoriteTime: bigquery.datetime('2000-10-31T23:27:46')
      }
    };

    before(function(done) {
      async.series([
        function(next) {
          table.create({
            schema: schema
          }, next);
        },

        function(next) {
          table.insert(testData, next);
        },

        function(next) {
          setTimeout(next, 15000);
        }
      ], done);
    });

    after(function(done) {
      table.delete(done);
    });

    it('should convert rows back correctly', function(done) {
      table.getRows(function(err, rows) {
        assert.ifError(err);

        if (rows.length === 0) {
          done(new Error('Rows not returned from the API.'));
          return;
        }

        rows.forEach(function(row) {
          var expectedRow = EXPECTED_ROWS[row.Name];
          assert.deepEqual(row, expectedRow);
        });

        done();
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
