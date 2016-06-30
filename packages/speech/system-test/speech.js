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
          config: {
            encoding: 'LINEAR16',
            sampleRate: 16000
          },
          audio: {
            content: audioFile
          }
        }, function(err, response, apiResponse) {
          assert.ifError(err);
          assert(Array.isArray(response.results));
          assert(response.results.length > 0);
          assert(apiResponse);
          assert(apiResponse.results);
          done();
        });
      });
    });
    it('recognizes speech from remote GCS audio file', function(done) {
      speech.recognize({
        config: {
          encoding: 'LINEAR16',
          sampleRate: 16000
        },
        audio: {
          uri: AUDIO_FILES.bridge.gcsUri
        }
      }, function(err, response, apiResponse) {
        assert.ifError(err);
        assert(Array.isArray(response.results));
        assert(response.results.length > 0);
        assert(apiResponse);
        assert(apiResponse.results);
        done();
      });
    });
  });

  describe('detect', function() {
    it('recognizes speech from raw audio', function(done) {
      speech.detect(AUDIO_FILES.bridge.path, {
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
      speech.detect(AUDIO_FILES.bridge.gcsUri, {
        encoding: 'LINEAR16',
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
    it('recognizes speech from remote audio file', function(done) {
      speech.detect(AUDIO_FILES.bridge.httpUri, {
        encoding: 'LINEAR16',
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
  });

  describe('createRecognizeJob', function() {
    it('recognizes speech from raw audio', function(done) {
      fs.readFile(AUDIO_FILES.bridge.path, function(err, audioFile) {
        assert.ifError(err);
        speech.createRecognizeJob({
          config: {
            encoding: 'LINEAR16',
            sampleRate: 16000
          },
          audio: {
            content: audioFile
          }
        }, function(err, operation, apiResponse) {
          assert.ifError(err);
          assert(operation.name);
          assert(apiResponse.name);
          operation
            .on('error', done)
            .on('complete', function(_operation, apiResponse) {
              assert.strictEqual(_operation, operation);
              assert(Array.isArray(_operation.response.results));
              assert(_operation.response.results.length > 0);
              assert(_operation.response.results[0].alternatives[0].transcript);
              assert(_operation.response.results[0].alternatives[0].confidence);
              assert(apiResponse.response);
              assert(apiResponse.response.typeUrl);
              assert(apiResponse.response.value);
              done();
            });
        });
      });
    });
    it('recognizes speech from remote GCS audio file', function(done) {
      speech.createRecognizeJob({
        config: {
          encoding: 'LINEAR16',
          sampleRate: 16000
        },
        audio: {
          uri: AUDIO_FILES.bridge.gcsUri
        }
      }, function(err, operation, apiResponse) {
        assert.ifError(err);
        assert(operation.name);
        assert(apiResponse.name);
        operation
          .on('error', done)
          .on('complete', function(_operation, apiResponse) {
            assert.strictEqual(_operation, operation);
            assert(Array.isArray(_operation.response.results));
            assert(_operation.response.results.length > 0);
            assert(_operation.response.results[0].alternatives[0].transcript);
            assert(_operation.response.results[0].alternatives[0].confidence);
            assert(apiResponse.response);
            assert(apiResponse.response.typeUrl);
            assert(apiResponse.response.value);
            done();
          });
      });
    });
  });

  describe('createDetectJob', function() {
    it('recognizes speech from raw audio', function(done) {
      speech.createDetectJob(AUDIO_FILES.bridge.path, {
        // encoding should be automatically detected
        sampleRate: 16000
      }, function(err, operation, apiResponse) {
        assert.ifError(err);
        assert(operation.name);
        assert(apiResponse.name);
        operation
          .on('error', done)
          .on('complete', function(_operation, apiResponse) {
            assert.strictEqual(_operation, operation);
            assert(Array.isArray(_operation.response.results));
            assert(_operation.response.results.length > 0);
            assert(_operation.response.results[0].alternatives[0].transcript);
            assert(_operation.response.results[0].alternatives[0].confidence);
            assert(apiResponse.response);
            assert(apiResponse.response.typeUrl);
            assert(apiResponse.response.value);
            done();
          });
      });
    });
    it('recognizes speech from remote GCS audio file', function(done) {
      speech.createDetectJob(AUDIO_FILES.bridge.gcsUri, {
        encoding: 'LINEAR16',
        sampleRate: 16000
      }, function(err, operation, apiResponse) {
        assert.ifError(err);
        assert(operation.name);
        assert(apiResponse.name);
        operation
          .on('error', done)
          .on('complete', function(_operation, apiResponse) {
            assert.strictEqual(_operation, operation);
            assert(Array.isArray(_operation.response.results));
            assert(_operation.response.results.length > 0);
            assert(_operation.response.results[0].alternatives[0].transcript);
            assert(_operation.response.results[0].alternatives[0].confidence);
            assert(apiResponse.response);
            assert(apiResponse.response.typeUrl);
            assert(apiResponse.response.value);
            done();
          });
      });
    });
    it('recognizes speech from remote audio file', function(done) {
      speech.createDetectJob(AUDIO_FILES.bridge.httpUri, {
        encoding: 'LINEAR16',
        sampleRate: 16000
      }, function(err, operation, apiResponse) {
        assert.ifError(err);
        assert(operation.name);
        assert(apiResponse.name);
        operation
          .on('error', done)
          .on('complete', function(_operation, apiResponse) {
            assert.strictEqual(_operation, operation);
            assert(Array.isArray(_operation.response.results));
            assert(_operation.response.results.length > 0);
            assert(_operation.response.results[0].alternatives[0].transcript);
            assert(_operation.response.results[0].alternatives[0].confidence);
            assert(apiResponse.response);
            assert(apiResponse.response.typeUrl);
            assert(apiResponse.response.value);
            done();
          });
      });
    });
  });

  describe('createRecognizeStream', function() {
    it('recognizes speech from raw audio', function(done) {
      var through = require('through2');
      var toRecognizeRequest = through.obj(function(chunk, encoding, done) {
        done(null, {
          audioContent: chunk
        });
      });

      var recognizeStream = speech.createRecognizeStream({
        streamingConfig: {
          config: {
            encoding: 'LINEAR16',
            sampleRate: 16000
          },
          interimResults: false,
          singleUtterance: false
        }
      });

      recognizeStream.on('response', function(chunk) {
        assert(chunk);
        assert(chunk.code === 200);
      });

      var count = 0;

      function checkIsDone() {
        count++;
        if (count === 3) {
          done();
        }
      }

      recognizeStream.on('data', function(chunk) {
        var expected = 'how old is the Brooklyn Bridge';
        assert(chunk);
        var endpointerType = chunk.endpointerType;
        if (endpointerType === Speech.START_OF_SPEECH) {
          assert.strictEqual(chunk.results.length, 0);
        } else if (endpointerType === Speech.END_OF_AUDIO) {
          assert.strictEqual(chunk.results.length, 0);
        } else if (endpointerType === Speech.ENDPOINTER_EVENT_UNSPECIFIED) {
          assert(chunk.results);
          assert.strictEqual(chunk.results.length, 1);
          assert(chunk.results[0].alternatives);
          assert.strictEqual(chunk.results[0].alternatives.length, 1);
          assert.strictEqual(
            chunk.results[0].alternatives[0].transcript, expected
          );
        }
        checkIsDone();
      });

      fs.createReadStream(AUDIO_FILES.bridge.path)
        .pipe(toRecognizeRequest)
        .pipe(recognizeStream);
    });
  });

  describe('createDetectStream', function() {
    it('recognizes speech from raw audio', function(done) {
      var recognizeStream = speech.createDetectStream({
        config: {
          encoding: 'LINEAR16',
          sampleRate: 16000
        },
        interimResults: false,
        singleUtterance: false
      });

      recognizeStream.on('response', function(chunk) {
        assert(chunk);
        assert.strictEqual(chunk.code, 200);
      });

      var count = 0;

      function checkIsDone() {
        count++;
        if (count === 3) {
          done();
        }
      }

      recognizeStream.on('data', function(chunk) {
        var expected = 'how old is the Brooklyn Bridge';
        assert(chunk);
        var endpointerType = chunk.endpointerType;
        if (endpointerType === Speech.START_OF_SPEECH) {
          assert.strictEqual(chunk.results.length, 0);
        } else if (endpointerType === Speech.END_OF_AUDIO) {
          assert.strictEqual(chunk.results.length, 0);
        } else if (endpointerType === Speech.ENDPOINTER_EVENT_UNSPECIFIED) {
          assert(chunk.results);
          assert.strictEqual(chunk.results.length, 1);
          assert(chunk.results[0].alternatives);
          assert.strictEqual(chunk.results[0].alternatives.length, 1);
          assert.strictEqual(
            chunk.results[0].alternatives[0].transcript, expected
          );
        }
        checkIsDone();
      });

      fs.createReadStream(AUDIO_FILES.bridge.path)
        .pipe(recognizeStream);
    });
  });
});
