/*!
 * Copyright 2015 Google Inc. All Rights Reserved.
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
var BigQuery = require('@google-cloud/bigquery');
var exec = require('methmeth');
var extend = require('extend');
var format = require('string-format-obj');
var is = require('is');
var prop = require('propprop');
var PubSub = require('@google-cloud/pubsub');
var Storage = require('@google-cloud/storage');
var uuid = require('uuid');

var env = require('../../../system-test/env.js');
var Logging = require('../');

describe('Logging', function() {
  var TESTS_PREFIX = 'gcloud-logging-test';
  var WRITE_CONSISTENCY_DELAY_MS = 60000;

  var logging = new Logging(env);
  var bigQuery = new BigQuery(env);
  var pubsub = new PubSub(env);
  var storage = new Storage(env);

  // Create the possible destinations for sinks that we will create.
  var bucket = storage.bucket(generateName());
  var dataset = bigQuery.dataset(generateName().replace(/-/g, '_'));
  var topic = pubsub.topic(generateName());

  before(function(done) {
    async.parallel([
      bucket.create.bind(bucket),
      dataset.create.bind(dataset),
      topic.create.bind(topic)
    ], done);
  });

  after(function(done) {
    async.parallel([
      deleteBuckets,
      deleteDatasets,
      deleteTopics,
      deleteSinks
    ], done);

    function deleteBuckets(callback) {
      storage.getBuckets({
        prefix: TESTS_PREFIX
      }, function(err, buckets) {
        if (err) {
          done(err);
          return;
        }

        function deleteBucket(bucket, callback) {
          bucket.deleteFiles(function(err) {
            if (err) {
              callback(err);
              return;
            }

            bucket.delete(callback);
          });
        }

        async.each(buckets, deleteBucket, callback);
      });
    }

    function deleteDatasets(callback) {
      getAndDelete(bigQuery.getDatasets.bind(bigQuery), callback);
    }

    function deleteTopics(callback) {
      getAndDelete(pubsub.getTopics.bind(pubsub), callback);
    }

    function deleteSinks(callback) {
      getAndDelete(logging.getSinks.bind(logging), callback);
    }

    function getAndDelete(method, callback) {
      method(function(err, objects) {
        if (err) {
          callback(err);
          return;
        }

        objects = objects.filter(function(object) {
          return object.id.indexOf(TESTS_PREFIX) === 0;
        });

        async.each(objects, exec('delete'), callback);
      });
    }
  });

  describe('sinks', function() {
    it('should create a sink with a Bucket destination', function(done) {
      var sink = logging.sink(generateName());

      sink.create({
        destination: bucket
      }, function(err, sink, apiResponse) {
        assert.ifError(err);

        var destination = 'storage.googleapis.com/' + bucket.name;
        assert.strictEqual(apiResponse.destination, destination);

        done();
      });
    });

    it('should create a sink with a Dataset destination', function(done) {
      var sink = logging.sink(generateName());

      sink.create({
        destination: dataset
      }, function(err, sink, apiResponse) {
        assert.ifError(err);

        var destination = format('{baseUrl}/projects/{pId}/datasets/{dId}', {
          baseUrl: 'bigquery.googleapis.com',
          pId: dataset.parent.projectId,
          dId: dataset.id
        });

        assert.strictEqual(apiResponse.destination, destination);

        done();
      });
    });

    it('should create a sink with a Topic destination', function(done) {
      var sink = logging.sink(generateName());

      sink.create({
        destination: topic
      }, function(err, sink, apiResponse) {
        assert.ifError(err);

        var destination = 'pubsub.googleapis.com/' + topic.name;
        assert.strictEqual(apiResponse.destination, destination);

        done();
      });
    });

    describe('metadata', function() {
      var sink = logging.sink(generateName());
      var FILTER = 'severity = ALERT';

      before(function(done) {
        sink.create({
          destination: topic
        }, done);
      });

      it('should set metadata', function(done) {
        var metadata = {
          filter: FILTER
        };

        sink.setMetadata(metadata, function(err, apiResponse) {
          assert.ifError(err);
          assert.strictEqual(apiResponse.filter, FILTER);
          done();
        });
      });

      it('should set a filter', function(done) {
        sink.setFilter(FILTER, function(err, apiResponse) {
          assert.ifError(err);
          assert.strictEqual(apiResponse.filter, FILTER);
          done();
        });
      });
    });

    describe('listing sinks', function() {
      var sink = logging.sink(generateName());

      before(function(done) {
        sink.create({
          destination: topic
        }, done);
      });

      it('should list sinks', function(done) {
        logging.getSinks(function(err, sinks) {
          assert.ifError(err);
          assert(sinks.length > 0);
          done();
        });
      });

      it('should list sinks as a stream', function(done) {
        logging.getSinksStream({ pageSize: 1 })
          .on('error', done)
          .once('data', function() {
            this.end();
            done();
          });
      });

      it('should get metadata', function(done) {
        logging.getSinksStream({ pageSize: 1 })
          .on('error', done)
          .once('data', function(sink) {
            sink.getMetadata(function(err, metadata) {
              assert.ifError(err);
              assert.strictEqual(is.object(metadata), true);
              done();
            });
          });
      });
    });
  });

  describe('logs', function() {
    var log = logging.log('syslog');

    var logEntries = [
      // string data
      log.entry('log entry 1'),

      // object data
      log.entry({ delegate: 'my_username' }),

      // various data types
      log.entry({
        nonValue: null,
        boolValue: true,
        arrayValue: [ 1, 2, 3 ]
      }),

      // nested object data
      log.entry({
        nested: {
          delegate: 'my_username'
        }
      })
    ];

    var options = {
      resource: {
        type: 'gce_instance',
        labels: {
          zone: 'global',
          instance_id: '3'
        }
      }
    };

    it('should list log entries', function(done) {
      logging.getEntries({ pageSize: 1 }, function(err, entries) {
        assert.ifError(err);
        assert.strictEqual(entries.length, 1);
        done();
      });
    });

    it('should list log entries as a stream', function(done) {
      logging.getEntriesStream({ pageSize: 1 })
        .on('error', done)
        .once('data', function() {
          this.end();
          done();
        });
    });

    describe('log-specific entries', function() {
      before(function(done) {
        log.write(logEntries, options, done);
      });

      it('should list log entries', function(done) {
        log.getEntries({ pageSize: 1 }, function(err, entries) {
          assert.ifError(err);
          assert.strictEqual(entries.length, 1);
          done();
        });
      });

      it('should list log entries as a stream', function(done) {
        log.getEntriesStream({ pageSize: 1 })
          .on('error', done)
          .once('data', function() {
            this.end();
            done();
          });
      });
    });

    it('should write a single entry to a log', function(done) {
      log.write(logEntries[0], options, done);
    });

    it('should write multiple entries to a log', function(done) {
      log.write(logEntries, options, function(err) {
        assert.ifError(err);

        setTimeout(function() {
          log.getEntries({
            pageSize: logEntries.length
          }, function(err, entries) {
            assert.ifError(err);

            assert.deepEqual(entries.map(prop('data')).reverse(), [
              'log entry 1',
              {
                delegate: 'my_username'
              },
              {
                nonValue: null,
                boolValue: true,
                arrayValue: [ 1, 2, 3 ]
              },
              {
                nested: {
                  delegate: 'my_username'
                }
              }
            ]);

            done();
          });
        }, WRITE_CONSISTENCY_DELAY_MS);
      });
    });

    it('should preserve order of entries', function(done) {
      var entry1 = log.entry('1');

      setTimeout(function() {
        var entry3 = log.entry('3');
        var entry2 = log.entry({ timestamp: entry3.metadata.timestamp }, '2');

        // Re-arrange to confirm the timestamp is sent and honored.
        log.write([entry2, entry3, entry1], options, function(err) {
          assert.ifError(err);

          setTimeout(function() {
            log.getEntries({ pageSize: 3 }, function(err, entries) {
              assert.ifError(err);
              assert.deepEqual(entries.map(prop('data')), [ '3', '2', '1' ]);
              done();
            });
          }, WRITE_CONSISTENCY_DELAY_MS);
        });
      }, 1000);
    });

    it('should preserve order for sequential write calls', function(done) {
      var messages =  ['1', '2', '3', '4', '5'];

      messages.forEach(function(message) {
        log.write(log.entry(message));
      });

      setTimeout(function() {
        log.getEntries({ pageSize: messages.length }, function(err, entries) {
          assert.ifError(err);
          assert.deepEqual(entries.reverse().map(prop('data')), messages);
          done();
        });
      }, WRITE_CONSISTENCY_DELAY_MS);
    });

    it('should write an entry with primitive values', function(done) {
      var logEntry = log.entry({
        when: new Date(),
        matchUser: /username: (.+)/,
        matchUserError: new Error('No user found.'),
        shouldNotBeSaved: undefined
      });

      log.write(logEntry, options, function(err) {
        assert.ifError(err);

        setTimeout(function() {
          log.getEntries({ pageSize: 1 }, function(err, entries) {
            assert.ifError(err);

            var entry = entries[0];

            assert.deepEqual(entry.data, {
              when: logEntry.data.when.toString(),
              matchUser: logEntry.data.matchUser.toString(),
              matchUserError: logEntry.data.matchUserError.toString()
            });

            done();
          });
        }, WRITE_CONSISTENCY_DELAY_MS);
      });
    });

    it('should write a log with metadata', function(done) {
      var metadata = extend({}, options, {
        severity: 'DEBUG'
      });

      var data = {
        embeddedData: true
      };

      var logEntry = log.entry(metadata, data);

      log.write(logEntry, function(err) {
        assert.ifError(err);

        setTimeout(function() {
          log.getEntries({ pageSize: 1 }, function(err, entries) {
            assert.ifError(err);

            var entry = entries[0];

            assert.strictEqual(entry.metadata.severity, metadata.severity);
            assert.deepEqual(entry.data, data);

            done();
          });
        }, WRITE_CONSISTENCY_DELAY_MS);
      });
    });

    it('should set the default resource', function(done) {
      var text = 'entry-text';
      var entry = log.entry(text);

      log.write(entry, function(err) {
        assert.ifError(err);

        setTimeout(function() {
          log.getEntries({ pageSize: 1 }, function(err, entries) {
            assert.ifError(err);

            var entry = entries[0];

            assert.strictEqual(entry.data, text);
            assert.deepEqual(entry.metadata.resource, {
              type: 'global',
              labels: {
                project_id: logging.projectId
              }
            });

            done();
          });
        }, WRITE_CONSISTENCY_DELAY_MS);
      });
    });

    it('should write to a log with alert helper', function(done) {
      log.alert(logEntries, options, done);
    });

    it('should write to a log with critical helper', function(done) {
      log.critical(logEntries, options, done);
    });

    it('should write to a log with debug helper', function(done) {
      log.debug(logEntries, options, done);
    });

    it('should write to a log with emergency helper', function(done) {
      log.emergency(logEntries, options, done);
    });

    it('should write to a log with error helper', function(done) {
      log.error(logEntries, options, done);
    });

    it('should write to a log with info helper', function(done) {
      log.info(logEntries, options, done);
    });

    it('should write to a log with notice helper', function(done) {
      log.notice(logEntries, options, done);
    });

    it('should write to a log with warning helper', function(done) {
      log.warning(logEntries, options, done);
    });
  });

  function generateName() {
    return TESTS_PREFIX + uuid.v1();
  }
});
