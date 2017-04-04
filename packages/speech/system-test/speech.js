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
var exec = require('methmeth');
var extend = require('extend');
var fs = require('fs');
var path = require('path');
var uuid = require('uuid');

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
    httpUri: 'https://storage.googleapis.com/' + BUCKET_NAME + '/' + name
  };
});

describe('Speech', function() {
  var speech = new Speech(env);
  var bucket = storage.bucket(BUCKET_NAME);

  var OPTIONS = {
    encoding: 'LINEAR16',
    languageCode: 'en-US',
    sampleRateHertz: 16000
  };

  var OPTIONS_VERBOSE = extend({}, OPTIONS, {
    verbose: true
  });

  var TRANSCRIPTION = 'how old is the Brooklyn Bridge';

  before(function(done) {
    async.waterfall([
      function(next) {
        bucket.create(next);
      },

      function(_, apiResponse, next) {
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
        async.map(files, exec('makePublic'), next);
      }
    ], done);
  });

  after(function(done) {
    bucket.deleteFiles({
      force: true
    }, function(err) {
      if (err) {
        done(err);
        return;
      }

      bucket.delete(done);
    });
  });

  describe('recognize', function() {
    it('recognizes speech from raw audio', function(done) {
      fs.readFile(AUDIO_FILES.bridge.path, function(err, audioFile) {
        assert.ifError(err);

        speech.recognize({
          content: audioFile,
        }, OPTIONS, assertSimplifiedResponse(done));
      });
    });

    it('recognizes speech in verbose mode', function(done) {
      fs.readFile(AUDIO_FILES.bridge.path, function(err, audioFile) {
        assert.ifError(err);

        speech.recognize({
          content: audioFile,
        }, OPTIONS_VERBOSE, assertVerboseResponse(done));
      });
    });

    it('recognizes speech from local file', function(done) {
      speech.recognize(AUDIO_FILES.bridge.path, {
        // encoding should be automatically detected
        languageCode: 'en-US',
        sampleRateHertz: 16000
      }, assertSimplifiedResponse(done));
    });

    it('recognizes speech from remote GCS audio file', function(done) {
      var uri = AUDIO_FILES.bridge.gcsUri;

      speech.recognize(uri, OPTIONS, assertSimplifiedResponse(done));
    });

    it('recognizes speech from remote audio file', function(done) {
      var uri = AUDIO_FILES.bridge.httpUri;

      speech.recognize(uri, OPTIONS, assertSimplifiedResponse(done));
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
            .on('complete', assertSimplifiedResponseOperation(done));
        });
      });
    });

    it('recognizes speech from raw audio in verbose mode', function(done) {
      fs.readFile(AUDIO_FILES.bridge.path, function(err, audioFile) {
        assert.ifError(err);

        speech.startRecognition({
          content: audioFile
        }, OPTIONS_VERBOSE, function(err, operation) {
          assert.ifError(err);

          operation
            .on('error', done)
            .on('complete', assertVerboseResponseOperation(done));
        });
      });
    });

    it('recognizes speech from local file', function(done) {
      var options = {
        // encoding should be automatically detected
        sampleRateHertz: 16000
      };

      var path = AUDIO_FILES.bridge.path;

      speech.startRecognition(path, options, function(err, operation) {
        assert.ifError(err);

        operation
          .on('error', done)
          .on('complete', assertSimplifiedResponseOperation(done));
      });
    });

    it('recognizes speech from remote GCS audio file', function(done) {
      var uri = AUDIO_FILES.bridge.gcsUri;

      speech.startRecognition(uri, OPTIONS, function(err, operation) {
        assert.ifError(err);

        operation
          .on('error', done)
          .on('complete', assertSimplifiedResponseOperation(done));
      });
    });

    it('recognizes speech from remote audio file', function(done) {
      var uri = AUDIO_FILES.bridge.httpUri;

      speech.startRecognition(uri, OPTIONS, function(err, operation) {
        assert.ifError(err);

        operation
          .on('error', done)
          .on('complete', assertSimplifiedResponseOperation(done));
      });
    });

    it('runs operation as a promise', function() {
      var uri = AUDIO_FILES.bridge.httpUri;

      return speech.startRecognition(uri, OPTIONS)
        .then(function(response) {
          var operation = response[0];
          return operation.promise();
        });
    });
  });

  describe('createRecognizeStream', function() {
    it('recognizes speech from raw audio', function(done) {
      var transcribed = false;
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
          if (data.speechEventType === 'SPEECH_EVENT_UNSPECIFIED') {
            if (data.results === TRANSCRIPTION) {
              transcribed = true;
            }
          }
        })
        .on('end', function() {
          setTimeout(function() {
            assert.strictEqual(responseEmitted, true);
            assert.strictEqual(transcribed, true);
            done();
          }, 1500);
        });
    });

    it('recognizes speech from raw audio in verbose mode', function(done) {
      var transcribed = false;
      var responseEmitted = false;

      fs.createReadStream(AUDIO_FILES.bridge.path)
        .on('error', done)
        .pipe(speech.createRecognizeStream({
          config: OPTIONS,
          interimResults: false,
          singleUtterance: false,
          verbose: true
        }))
        .on('error', done)
        .on('response', function() {
          responseEmitted = true;
        })
        .on('data', function(data) {
          if (data.speechEventType === 'SPEECH_EVENT_UNSPECIFIED') {
            if (data.results[0].transcript === TRANSCRIPTION) {
              transcribed = true;
            }
          }
        })
        .on('end', function() {
          setTimeout(function() {
            assert.strictEqual(responseEmitted, true);
            assert.strictEqual(transcribed, true);
            done();
          }, 1500);
        });
    });
  });

  function assertSimplifiedResponse(done) {
    return function(err, transcript) {
      assert.ifError(err);
      assert.strictEqual(transcript, TRANSCRIPTION);
      done();
    };
  }

  function assertVerboseResponse(done) {
    return function(err, results) {
      assert.ifError(err);

      assert(results.length > 0);

      var transcript = results[0].transcript;
      assert.strictEqual(transcript, TRANSCRIPTION);

      done();
    };
  }

  function assertSimplifiedResponseOperation(done) {
    return assertSimplifiedResponse(done).bind(null, null);
  }

  function assertVerboseResponseOperation(done) {
    return assertVerboseResponse(done).bind(null, null);
  }
});
