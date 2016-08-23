/*!
 * Copyright 2016 Google Inc. All Rights Reserved.
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
var path = require('path');
var uuid = require('node-uuid');

var env = require('../../../system-test/env.js');
var Speech = require('../');
var storage = require('@google-cloud/storage')(env);

var FILENAMES = ['bridge', 'spain', 'quit'];
var AUDIO_FILES = {};
var BUCKET_NAME = 'gcloud-test-bucket-temp-' + uuid.v1();

FILENAMES.forEach(function(filename) {
  var name = filename + '.raw';

  AUDIO_FILES[filename] = {
    name: name,
    path: path.join(__dirname, 'data/' + name),
    gcsUri: 'gs://' + BUCKET_NAME + '/' + name,
    httpUri: 'https://storage.googleapis.com/' +
      BUCKET_NAME + '/' + name
  };
});

describe('Speech', function() {
  var speech;
  var bucket = storage.bucket(BUCKET_NAME);

  var OPTIONS = {
    encoding: 'LINEAR16',
    sampleRate: 16000
  };

  before(function(done) {
    async.waterfall([
      function(next) {
        bucket.create(next);
      },

      function(zone, apiResponse, next) {
        async.map(FILENAMES, function(filename, onComplete) {
          fs.readFile(AUDIO_FILES[filename].path, onComplete);
        }, next);
      },

      function(files, next) {
        FILENAMES.forEach(function(filename, i) {
          AUDIO_FILES[filename].content = files[i];
        });

        async.map(FILENAMES, function(filename, onComplete) {
          var file = bucket.file(AUDIO_FILES[filename].name);

          file.save(AUDIO_FILES[filename].content, function(err) {
            onComplete(err, file);
          });
        }, next);
      },

      function(files, next) {
        async.map(files, function(file, onComplete) {
          file.makePublic(onComplete);
        }, next);
      }
    ], done);
  });

  beforeEach(function() {
    speech = new Speech(env);
  });

  after(function(done) {
    bucket.getFiles(function(err, files) {
      if (err) {
        done(err);
        return;
      }

      async.map(files, function(file, onComplete) {
        file.delete(onComplete);
      }, function(err) {
        if (err) {
          done(err);
          return;
        }

        bucket.delete(done);
      });
    });
  });

  describe('recognize', function() {
    it('recognizes speech from raw audio', function(done) {
      fs.readFile(AUDIO_FILES.bridge.path, function(err, audioFile) {
        assert.ifError(err);

        speech.recognize({
          content: audioFile
        }, OPTIONS, function(err, response, apiResponse) {
          assert.ifError(err);

          assert(Array.isArray(response.results));
          assert(response.results.length > 0);

          assert(apiResponse);
          assert(apiResponse.results);
          done();
        });
      });
    });

    it('recognizes speech from local file', function(done) {
      speech.recognize(AUDIO_FILES.bridge.path, {
        // encoding should be automatically detected
        sampleRate: 16000
      }, function(err, response, apiResponse) {
        assert.ifError(err);
        assert(Array.isArray(response.results));
        assert(response.results.length > 0);
        assert(Array.isArray(apiResponse.results));
        assert(apiResponse.results.length > 0);
        done();
      });
    });

    it('recognizes speech from remote GCS audio file', function(done) {
      var uri = AUDIO_FILES.bridge.gcsUri;

      speech.recognize(uri, OPTIONS, function(err, response, apiResponse) {
        assert.ifError(err);
        assert(Array.isArray(response.results));
        assert(response.results.length > 0);
        assert(Array.isArray(apiResponse.results));
        assert(apiResponse.results.length > 0);
        done();
      });
    });

    it('recognizes speech from remote audio file', function(done) {
      var uri = AUDIO_FILES.bridge.httpUri;

      speech.recognize(uri, OPTIONS, function(err, response, apiResponse) {
        assert.ifError(err);

        assert(Array.isArray(response.results));
        assert(response.results.length > 0);

        assert(Array.isArray(apiResponse.results));
        assert(apiResponse.results.length > 0);

        done();
      });
    });
  });

  describe('startRecognition', function() {
    it('recognizes speech from raw audio', function(done) {
      fs.readFile(AUDIO_FILES.bridge.path, function(err, audioFile) {
        assert.ifError(err);

        speech.startRecognition({
          content: audioFile
        }, OPTIONS, function(err, operation) {
          assert.ifError(err);

          operation
            .on('error', done)
            .on('complete', function() {
              assert(Array.isArray(this.response.results));

              assert(this.response.results.length > 0);
              assert(this.response.results[0].alternatives[0].transcript);
              assert(this.response.results[0].alternatives[0].confidence);

              done();
            });
        });
      });
    });

    it('recognizes speech from local file', function(done) {
      var options = {
        // encoding should be automatically detected
        sampleRate: 16000
      };

      var path = AUDIO_FILES.bridge.path;

      speech.startRecognition(path, options, function(err, operation) {
        assert.ifError(err);

        operation
          .on('error', done)
          .on('complete', function() {
            assert(Array.isArray(this.response.results));

            assert(this.response.results.length > 0);
            assert(this.response.results[0].alternatives[0].transcript);
            assert(this.response.results[0].alternatives[0].confidence);

            done();
          });
      });
    });

    it('recognizes speech from remote GCS audio file', function(done) {
      var uri = AUDIO_FILES.bridge.gcsUri;

      speech.startRecognition(uri, OPTIONS, function(err, operation) {
        assert.ifError(err);

        operation
          .on('error', done)
          .on('complete', function() {
            assert(Array.isArray(this.response.results));

            assert(this.response.results.length > 0);
            assert(this.response.results[0].alternatives[0].transcript);
            assert(this.response.results[0].alternatives[0].confidence);

            done();
          });
      });
    });

    it('recognizes speech from remote audio file', function(done) {
      var uri = AUDIO_FILES.bridge.httpUri;

      speech.startRecognition(uri, OPTIONS, function(err, operation) {
        assert.ifError(err);

        operation
          .on('error', done)
          .on('complete', function() {
            assert(Array.isArray(this.response.results));

            assert(this.response.results.length > 0);
            assert(this.response.results[0].alternatives[0].transcript);
            assert(this.response.results[0].alternatives[0].confidence);

            done();
          });
      });
    });
  });

  describe('createRecognizeStream', function() {
    it('recognizes speech from raw audio', function(done) {
      var correctDetectionsEmitted = 0;
      var responseEmitted = false;

      fs.createReadStream(AUDIO_FILES.bridge.path)
        .on('error', done)
        .pipe(speech.createRecognizeStream({
          config: OPTIONS,
          interimResults: false,
          singleUtterance: false
        }))
        .on('error', done)
        .on('response', function() {
          responseEmitted = true;
        })
        .on('data', function(data) {
          switch (data.endpointerType) {
            case Speech.endpointerTypes.START_OF_SPEECH: {
              if (data.results.length === 0) {
                correctDetectionsEmitted++;
              }
              return;
            }

            case Speech.endpointerTypes.END_OF_AUDIO: {
              if (data.results.length === 0) {
                correctDetectionsEmitted++;
              }
              return;
            }

            case Speech.endpointerTypes.ENDPOINTER_EVENT_UNSPECIFIED: {
              var expected = 'how old is the Brooklyn Bridge';

              try {
                var results = data.results[0].alternatives[0].transcript;

                if (results === expected) {
                  correctDetectionsEmitted++;
                }
              } catch (e) {
                done(e);
                return;
              }
            }
          }
        })
        .on('end', function() {
          setTimeout(function() {
            assert.strictEqual(responseEmitted, true);
            assert.strictEqual(correctDetectionsEmitted, 3);
            done();
          }, 0);
        });
    });
  });
});
