/**
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
var Storage = require('@google-cloud/storage');
var uuid = require('uuid');

var env = require('../../../system-test/env.js');
var Prediction = require('../');

describe('Prediction', function() {
  var TESTS_PREFIX = 'gcloud-test-prediction-';

  var prediction = new Prediction(env);
  var storage = new Storage(env);

  var bucket = storage.bucket(generateName());
  var file = bucket.file('language_id.txt');

  before(function(done) {
    bucket.create(function(err) {
      if (err) {
        done(err);
        return;
      }

      bucket.upload(require.resolve('./data/language_id.txt'), done);
    });
  });

  after(function(done) {
    storage.getBuckets({
      prefix: TESTS_PREFIX
    }, function(err, buckets) {
      if (err) {
        done(err);
        return;
      }

      function deleteBucket(bucket, callback) {
        // After files are deleted, eventual consistency may require a bit of a
        // delay to ensure that the bucket recognizes that the files don't exist
        // anymore.
        var CONSISTENCY_DELAY_MS = 250;

        bucket.deleteFiles(function(err) {
          if (err) {
            callback(err);
            return;
          }

          setTimeout(function() {
            bucket.delete(function() {
              // Ignoring this error:
              // https://github.com/GoogleCloudPlatform/google-cloud-node/issues/968
              // if (err) {
              //   callback(err);
              //   return;
              // }
              callback();
            });
          }, CONSISTENCY_DELAY_MS);
        });
      }

      async.eachLimit(buckets, 10, deleteBucket, done);
    });
  });

  describe('trained models', function() {
    it('should create an empty model', function(done) {
      var model = prediction.model(generateName());

      model.create(function(err) {
        assert.ifError(err);
        model.delete(done);
      });
    });

    it('should create a model from a file', function(done) {
      var model = prediction.model(generateName());

      model.create({
        data: file
      }, function(err) {
        assert.ifError(err);
        model.delete(done);
      });
    });

    it('should get metadata about a model', function(done) {
      var model = prediction.model(generateName());

      model.create(function(err, model) {
        assert.ifError(err);

        model.getMetadata(function(err, metadata) {
          assert.ifError(err);
          assert.strictEqual(metadata.id, model.id);
          model.delete(done);
        });
      });
    });

    describe('listing', function() {
      var model = prediction.model(generateName());

      before(function(done) {
        model.create(done);
      });

      after(function(done) {
        model.delete(done);
      });

      it('should return models with a callback', function(done) {
        prediction.getModels({ maxResults: 1 }, function(err, models) {
          assert.ifError(err);
          assert.strictEqual(models.length, 1);
          done();
        });
      });

      it('should return models in stream mode', function(done) {
        prediction.getModelsStream({ maxResults: 1 })
          .on('error', done)
          .once('data', function() {
            done();
          });
      });
    });

    describe('training', function() {
      it('should train a model with direct input', function(done) {
        prediction.createModel(generateName(), function(err, model) {
          assert.ifError(err);

          model.train('english', 'Stephen says hi!', function(err) {
            assert.ifError(err);

            model.getMetadata(function(err, metadata) {
              assert.ifError(err);
              assert.strictEqual(metadata.trainingStatus, 'RUNNING');
              model.delete(done);
            });
          });
        });
      });

      it('should train a model from a stream', function(done) {
        prediction.createModel(generateName(), function(err, model) {
          assert.ifError(err);

          var writeStream = model.createWriteStream('english');

          writeStream.on('error', done);
          writeStream.on('finish', function() {
            model.getMetadata(function(err, metadata) {
              assert.ifError(err);
              assert.strictEqual(metadata.trainingStatus, 'RUNNING');
              model.delete(done);
            });
          });

          writeStream.write('Stephen');
          writeStream.write('says');
          writeStream.write('hi!');

          writeStream.end();
        });
      });
    });

    describe('querying', function() {
      var model = prediction.model(generateName());

      before(function(done) {
        model.create({
          data: file
        }, function(err) {
          if (err) {
            done(err);
            return;
          }

          function isModelTrained(callback) {
            model.getMetadata(function(err, metadata) {
              if (err) {
                callback(err);
                return;
              }

              if (metadata.trainingStatus === 'RUNNING') {
                callback(new Error('Model still training.'));
                return;
              }

              callback();
            });
          }

          async.retry({ times: 12, interval: 10000 }, isModelTrained, done);
        });
      });

      after(function(done) {
        model.delete(done);
      });

      it('should return results', function(done) {
        model.query('hello', function(err, results) {
          assert.ifError(err);
          assert.strictEqual(results.winner, 'English');
          assert.strictEqual(results.scores[0].score, 1);
          done();
        });
      });

      it('should return analysis', function(done) {
        model.analyze(done);
      });
    });
  });

  function generateName() {
    return TESTS_PREFIX + uuid.v1();
  }
});
