/**
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
var extend = require('extend');
var fs = require('fs');
var googleProtoFiles = require('google-proto-files');
var proxyquire = require('proxyquire');
var through = require('through2');
var tmp = require('tmp');

var util = require('@google-cloud/common').util;

var promisified = false;
var fakeUtil = extend({}, util, {
  promisifyAll: function(Class, options) {
    if (Class.name !== 'Speech') {
      return;
    }

    promisified = true;
    assert.deepEqual(options.exclude, ['operation']);
  }
});

function FakeGrpcOperation() {
  this.calledWith_ = arguments;
}

function FakeGrpcService() {
  this.calledWith_ = arguments;
}

var fakeV1Beta1Override;
function fakeV1Beta1() {
  if (fakeV1Beta1Override) {
    return fakeV1Beta1Override.apply(null, arguments);
  }

  return {
    speechClient: util.noop
  };
}

var requestOverride = null;
var fakeRequest = function() {
  return (requestOverride || util.noop).apply(this, arguments);
};

describe('Speech', function() {
  var OPTIONS = {
    projectId: 'project-id'
  };

  var Speech;
  var speech;

  var originalStaticMembers;

  before(function() {
    Speech = proxyquire('../', {
      '@google-cloud/common': {
        GrpcOperation: FakeGrpcOperation,
        GrpcService: FakeGrpcService,
        util: fakeUtil
      },
      request: fakeRequest,
      './v1beta1': fakeV1Beta1
    });

    originalStaticMembers = Object.keys(Speech).reduce(function(statics, key) {
      statics[key] = Speech[key];
      return statics;
    }, {});
  });

  beforeEach(function() {
    fakeV1Beta1Override = null;
    requestOverride = null;

    speech = new Speech(OPTIONS);

    extend(Speech, originalStaticMembers);
  });

  describe('instantiation', function() {
    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should normalize the arguments', function() {
      var normalizeArguments = fakeUtil.normalizeArguments;
      var normalizeArgumentsCalled = false;
      var fakeOptions = { projectId: OPTIONS.projectId };
      var fakeContext = {};

      fakeUtil.normalizeArguments = function(context, options) {
        normalizeArgumentsCalled = true;
        assert.strictEqual(context, fakeContext);
        assert.strictEqual(options, fakeOptions);
        return options;
      };

      Speech.call(fakeContext, fakeOptions);
      assert(normalizeArgumentsCalled);

      fakeUtil.normalizeArguments = normalizeArguments;
    });

    it('should create a gax api client', function() {
      var expectedSpeechService = {};

      fakeV1Beta1Override = function(options) {
        assert.strictEqual(options, OPTIONS);

        return {
          speechClient: function(options) {
            assert.strictEqual(options, OPTIONS);
            return expectedSpeechService;
          }
        };
      };

      var speech = new Speech(OPTIONS);

      assert.deepEqual(speech.api, {
        Speech: expectedSpeechService
      });
    });

    it('should inherit from GrpcService', function() {
      assert(speech instanceof FakeGrpcService);

      var calledWith = speech.calledWith_[0];

      assert.deepEqual(calledWith, {
        baseUrl: 'speech.googleapis.com',
        projectIdRequired: false,
        service: 'speech',
        protoServices: {
          Speech: {
            path: googleProtoFiles.speech.v1beta1,
            service: 'cloud.speech',
            apiVersion: 'v1beta1'
          },
          Operations: {
            path: googleProtoFiles('longrunning', 'operations.proto'),
            service: 'longrunning'
          }
        },
        scopes: [
          'https://www.googleapis.com/auth/cloud-platform'
        ],
        packageJson: require('../package.json')
      });
    });
  });

  describe('endpointerTypes', function() {
    var ENDPOINTER_TYPES = {
      END_OF_AUDIO: 'END_OF_AUDIO',
      END_OF_SPEECH: 'END_OF_SPEECH',
      END_OF_UTTERANCE: 'END_OF_UTTERANCE',
      ENDPOINTER_EVENT_UNSPECIFIED: 'ENDPOINTER_EVENT_UNSPECIFIED',
      START_OF_SPEECH: 'START_OF_SPEECH'
    };

    it('should export static endpointerTypes', function() {
      assert.deepEqual(Speech.endpointerTypes, ENDPOINTER_TYPES);
    });

    it('should export instance endpointerTypes', function() {
      assert.deepEqual(speech.endpointerTypes, ENDPOINTER_TYPES);
    });
  });

  describe('detectEncoding_', function() {
    it('should detect encoding', function() {
      assert.equal(Speech.detectEncoding_('foo.raw'), 'LINEAR16');
      assert.equal(Speech.detectEncoding_('foo.amr'), 'AMR');
      assert.equal(Speech.detectEncoding_('foo.awb'), 'AMR_WB');
      assert.equal(Speech.detectEncoding_('foo.flac'), 'FLAC');
      assert.equal(Speech.detectEncoding_('foo.fLAc'), 'FLAC');
      assert.equal(Speech.detectEncoding_('foo.wav'), 'MULAW');
      assert.equal(Speech.detectEncoding_('foo.au'), 'MULAW');
    });

    it('should throw if a supported encoding is not detected', function() {
      assert.throws(function() {
        Speech.detectEncoding_('blah.mp3');
      }, /Encoding could not be determined for file: blah\.mp3/);
    });

    it('should return nothing if the argument is not a string', function() {
      assert.strictEqual(Speech.detectEncoding_({}), undefined);
    });
  });

  describe('findFile_', function() {
    it('should convert a File object', function(done) {
      var file = {
        bucket: {
          name: 'bucket-name'
        },
        name: 'file-name'
      };

      var isCustomTypeCalled = false;
      var isCustomType = fakeUtil.isCustomType;

      fakeUtil.isCustomType = function(obj, module) {
        isCustomTypeCalled = true;
        fakeUtil.isCustomType = isCustomType;
        assert.strictEqual(obj, file);
        assert.strictEqual(module, 'storage/file');
        return true;
      };

      Speech.findFile_(file, function(err, foundFile) {
        assert.ifError(err);

        assert.deepEqual(foundFile, {
          uri: 'gs://' + file.bucket.name + '/' + file.name
        });

        assert.strictEqual(isCustomTypeCalled, true);

        done();
      });
    });

    it('should detect a gs:// path', function(done) {
      var file = 'gs://your-bucket-name/audio.raw';

      Speech.findFile_(file, function(err, foundFile) {
        assert.ifError(err);

        assert.deepEqual(foundFile, {
          uri: file
        });

        done();
      });
    });

    it('should get a file from a URL', function(done) {
      var fileUri = 'http://www.google.com/audio.raw';
      var body = 'body';

      requestOverride = function(reqOpts, callback) {
        assert.strictEqual(reqOpts.uri, fileUri);
        assert.strictEqual(reqOpts.encoding, null);

        var response = {
          body: new Buffer(body)
        };

        callback(null, response, response.body);
      };

      Speech.findFile_(fileUri, function(err, foundFile) {
        assert.ifError(err);
        assert.deepEqual(foundFile, {
          content: new Buffer(body)
        });
        done();
      });
    });

    it('should return an error from reading a URL', function(done) {
      var fileUri = 'http://www.google.com/audio.raw';
      var error = new Error('Error.');

      requestOverride = function(options, callback) {
        callback(error);
      };

      Speech.findFile_(fileUri, function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should validate RecognitionAudio object', function(done) {
      var file = {};

      Speech.findFile_(file, function(err) {
        assert.strictEqual(
          err.message,
          'RecognitionAudio requires a "content" or "uri" property.'
        );

        done();
      });
    });

    it('should accept RecognitionAudio object', function(done) {
      var file = {
        content: 'aGk='
      };

      Speech.findFile_(file, function(err, foundFile) {
        assert.ifError(err);
        assert.strictEqual(foundFile, file);
        done();
      });
    });

    it('should read from a file path', function(done) {
      tmp.setGracefulCleanup();

      tmp.file(function tempFileCreated_(err, tmpFilePath) {
        assert.ifError(err);

        var contents = 'abcdef';

        function writeFile(callback) {
          fs.writeFile(tmpFilePath, contents, callback);
        }

        function convertFile(callback) {
          Speech.findFile_(tmpFilePath, callback);
        }

        async.waterfall([writeFile, convertFile], function(err, foundFile) {
          assert.ifError(err);

          assert.deepEqual(foundFile, {
            content: new Buffer(contents)
          });

          done();
        });
      });
    });

    it('should return an error when file cannot be found', function(done) {
      Speech.findFile_('./not-real-file.raw', function(err) {
        assert.strictEqual(err.code, 'ENOENT');
        done();
      });
    });
  });

  describe('formatResults_', function() {
    describe('SpeechRecognitionResult', function() {
      var SPEECH_RECOGNITION = {
        original: [
          {
            alternatives: [
              {
                transcript: 'Result 1a',
                confidence: 0.70,
                stability: 0.1
              },
              {
                transcript: 'Result 1b',
                confidence: 0.60,
                stability: 0.1
              }
            ]
          },
          {
            alternatives: [
              {
                transcript: 'Result 2a',
                confidence: 0.90,
                stability: 0.1
              },
              {
                transcript: 'Result 2b',
                confidence: 0.80,
                stability: 0.1
              }
            ]
          }
        ],

        expectedDefault: 'Result 1a Result 2a',

        expectedVerbose: [
          {
            transcript: 'Result 1a',
            confidence: 70,
            stability: 10,
            alternatives: [
              {
                transcript: 'Result 1b',
                confidence: 60,
                stability: 10,
              }
            ]
          },
          {
            transcript: 'Result 2a',
            confidence: 90,
            stability: 10,
            alternatives: [
              {
                transcript: 'Result 2b',
                confidence: 80,
                stability: 10
              }
            ]
          }
        ]
      };

      it('should simplify the results', function() {
        assert.deepEqual(
          Speech.formatResults_(SPEECH_RECOGNITION.original),
          SPEECH_RECOGNITION.expectedDefault
        );
      });

      it('should simplify the results in verbose mode', function() {
        assert.deepEqual(
          Speech.formatResults_(SPEECH_RECOGNITION.original, true),
          SPEECH_RECOGNITION.expectedVerbose
        );
      });
    });
  });

  describe('createRecognizeStream', function() {
    var CONFIG = {};
    var stream;
    var requestStream;

    beforeEach(function() {
      stream = speech.createRecognizeStream(CONFIG);

      stream.setPipeline = util.noop;

      speech.api.Speech = {
        streamingRecognize: function() {
          requestStream = through.obj();
          return requestStream;
        }
      };
    });

    it('should make the correct request once writing started', function(done) {
      speech.api.Speech = {
        streamingRecognize: function() {
          setImmediate(done);
          return through.obj();
        }
      };

      stream.emit('writing');
    });

    it('should emit the response event on the user stream', function(done) {
      var response = {};

      stream.on('response', function(response_) {
        assert.strictEqual(response_, response);
        done();
      });

      speech.api.Speech = {
        streamingRecognize: function() {
          var requestStream = through.obj();

          setImmediate(function() {
            requestStream.emit('response', response);
          });

          return requestStream;
        }
      };

      stream.emit('writing');
    });

    it('should send the initial write to the request stream', function(done) {
      speech.api.Speech = {
        streamingRecognize: function() {
          var requestStream = through.obj();

          requestStream.once('data', function(data) {
            assert.deepEqual(data, {
              streamingConfig: CONFIG
            });
            done();
          });

          return requestStream;
        }
      };

      stream.emit('writing');
    });

    it('should format the incoming data into a duplex stream', function(done) {
      stream.setPipeline = function(streams) {
        var formatStream = streams[0];
        assert.strictEqual(streams[1], requestStream);

        var chunk = {};
        formatStream.once('data', function(data) {
          assert.deepEqual(data, {
            audioContent: chunk
          });
          done();
        });

        formatStream.end(chunk);
      };

      stream.emit('writing');
    });

    it('should format the results from the API', function(done) {
      stream.setPipeline = function(streams) {
        var formatStream = streams[2];

        var streamingRecognizeResponse = {
          results: []
        };

        var formattedResults = [];

        Speech.formatResults_ = function(results, verboseMode) {
          assert.strictEqual(results, streamingRecognizeResponse.results);
          assert.strictEqual(verboseMode, false);
          return formattedResults;
        };

        formatStream.once('data', function(data) {
          assert.strictEqual(data, streamingRecognizeResponse);
          assert.deepEqual(data.results, formattedResults);
          done();
        });

        formatStream.end(streamingRecognizeResponse);
      };

      stream.emit('writing');
    });

    it('should format results from the API in verbose mode', function(done) {
      var stream = speech.createRecognizeStream({
        verbose: true
      });

      speech.requestWritableStream = function() {
        return through.obj();
      };

      stream.setPipeline = function(streams) {
        var formatStream = streams[2];

        Speech.formatResults_ = function(results, verboseMode) {
          assert.strictEqual(verboseMode, true);
          done();
        };

        formatStream.end({});
      };

      stream.emit('writing');
    });

    it('should delete verbose option from request object', function(done) {
      var stream = speech.createRecognizeStream({
        verbose: true
      });

      speech.api.Speech = {
        streamingRecognize: function() {
          var stream = through.obj();

          stream.on('data', function(data) {
            assert.deepEqual(data, {
              streamingConfig: {} // No `verbose` property.
            });
            done();
          });

          return stream;
        }
      };

      stream.emit('writing');
    });
  });

  describe('operation', function() {
    var NAME = 'op-name';

    it('should throw if a name is not provided', function() {
      assert.throws(function() {
        speech.operation();
      }, /A name must be specified for an operation\./);
    });

    it('should return an Operation object', function() {
      var operation = speech.operation(NAME);
      assert(operation instanceof FakeGrpcOperation);
      assert.strictEqual(operation.calledWith_[0], speech);
      assert.strictEqual(operation.calledWith_[1], NAME);
    });
  });

  describe('recognize', function() {
    var FILE = {};
    var FOUND_FILE = {};
    var CONFIG = { a: 'b' };
    var DETECTED_ENCODING = 'LINEAR16';

    beforeEach(function() {
      Speech.detectEncoding_ = function() {
        return DETECTED_ENCODING;
      };

      Speech.findFile_ = function(files, callback) {
        callback(null, FOUND_FILE);
      };

      speech.api.Speech = {
        syncRecognize: util.noop
      };
    });

    it('should find the files', function(done) {
      Speech.findFile_ = function(file) {
        assert.strictEqual(file, FILE);
        done();
      };

      speech.recognize(FILE, CONFIG, assert.ifError);
    });

    it('should make the correct request', function(done) {
      speech.api.Speech = {
        syncRecognize: function(reqOpts) {
          var expectedConfig = extend({}, CONFIG, {
            encoding: DETECTED_ENCODING
          });

          assert.deepEqual(reqOpts.config, expectedConfig);
          assert.strictEqual(reqOpts.audio, FOUND_FILE);

          done();
        }
      };

      speech.recognize(FILE, CONFIG, assert.ifError);
    });

    it('should respect the provided encoding', function(done) {
      var config = {
        encoding: 'LINEAR32'
      };

      Speech.detectEncoding_ = function() {
        done(); // Will cause test to fail.
      };

      speech.api.Speech = {
        syncRecognize: function(reqOpts) {
          assert.strictEqual(reqOpts.config.encoding, config.encoding);
          done();
        }
      };

      speech.recognize(FILE, config, assert.ifError);
    });

    it('should guess the encoding if it is not specified', function(done) {
      var expectedEncoding = 'LINEAR16';

      Speech.detectEncoding_ = function(file) {
        assert.strictEqual(file, FILE);
        return expectedEncoding;
      };

      speech.api.Speech = {
        syncRecognize: function(reqOpts) {
          assert.strictEqual(reqOpts.config.encoding, expectedEncoding);
          done();
        }
      };

      speech.recognize(FILE, {}, assert.ifError);
    });

    it('should return an error from findFile_', function(done) {
      var error = new Error('Error.');

      Speech.findFile_ = function(files, callback) {
        callback(error);
      };

      speech.recognize(FILE, CONFIG, function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = {};

      beforeEach(function() {
        speech.api.Speech = {
          syncRecognize: function(reqOpts, callback) {
            callback(error, apiResponse);
          }
        };
      });

      it('should return the error & API response', function(done) {
        speech.recognize(FILE, CONFIG, function(err, results, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(results, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {
        results: []
      };
      var decodedResponse = {
        results: []
      };
      var formattedResults = [];

      beforeEach(function() {
        speech.protos = {
          Speech: {
            SyncRecognizeResponse: function() {
              return decodedResponse;
            }
          }
        };

        Speech.formatResults_ = function() {
          return formattedResults;
        };

        speech.api.Speech = {
          syncRecognize: function(reqOpts, callback) {
            callback(null, apiResponse);
          }
        };
      });

      it('should return the detections & API response', function(done) {
        speech.protos = {
          Speech: {
            SyncRecognizeResponse: function(response) {
              assert.strictEqual(response, apiResponse);
              return decodedResponse;
            }
          }
        };

        Speech.formatResults_ = function(results, verboseMode) {
          assert.strictEqual(results, decodedResponse.results);
          assert.strictEqual(verboseMode, false);
          return formattedResults;
        };

        speech.recognize(FILE, CONFIG, function(err, results, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(results, formattedResults);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should return the detections in verbose mode', function(done) {
        Speech.formatResults_ = function(results, verboseMode) {
          assert.strictEqual(verboseMode, true);
          done();
        };

        var config = extend({}, CONFIG, {
          verbose: true
        });

        speech.recognize(FILE, config, assert.ifError);
      });

      it('should return the detections in verbose mode', function(done) {
        Speech.formatResults_ = function(results, verboseMode) {
          assert.strictEqual(verboseMode, true);
          done();
        };

        var config = extend({}, CONFIG, {
          verbose: true
        });

        speech.recognize(FILE, config, assert.ifError);
      });

      it('should delete verbose option from request object', function(done) {
        speech.api.Speech = {
          syncRecognize: function(reqOpts) {
            assert.strictEqual(reqOpts.config.verbose, undefined);
            done();
          }
        };

        var config = extend({}, CONFIG, {
          verbose: true
        });

        speech.recognize(FILE, config, assert.ifError);
      });
    });
  });

  describe('startRecognition', function() {
    var FILE = {};
    var FOUND_FILE = {};
    var CONFIG = { a: 'b' };
    var DETECTED_ENCODING = 'LINEAR16';

    beforeEach(function() {
      Speech.detectEncoding_ = function() {
        return DETECTED_ENCODING;
      };

      Speech.findFile_ = function(files, callback) {
        callback(null, FOUND_FILE);
      };

      speech.api.Speech = {
        asyncRecognize: util.noop
      };
    });

    it('should find the files', function(done) {
      Speech.findFile_ = function(file) {
        assert.strictEqual(file, FILE);
        done();
      };

      speech.startRecognition(FILE, CONFIG, assert.ifError);
    });

    it('should make the correct request', function(done) {
      speech.api.Speech = {
        asyncRecognize: function(reqOpts) {
          var expectedConfig = extend({}, CONFIG, {
            encoding: DETECTED_ENCODING
          });

          assert.deepEqual(reqOpts.config, expectedConfig);
          assert.strictEqual(reqOpts.audio, FOUND_FILE);

          done();
        }
      };

      speech.startRecognition(FILE, CONFIG, assert.ifError);
    });

    it('should respect the provided encoding', function(done) {
      var config = {
        encoding: 'LINEAR32'
      };

      Speech.detectEncoding_ = function() {
        done(); // Will cause test to fail.
      };

      speech.api.Speech = {
        asyncRecognize: function(reqOpts) {
          assert.strictEqual(reqOpts.config.encoding, config.encoding);
          done();
        }
      };

      speech.startRecognition(FILE, config, assert.ifError);
    });

    it('should guess the encoding if it is not specified', function(done) {
      var expectedEncoding = 'LINEAR16';

      Speech.detectEncoding_ = function(file) {
        assert.strictEqual(file, FILE);
        return expectedEncoding;
      };

      speech.api.Speech = {
        asyncRecognize: function(reqOpts) {
          assert.strictEqual(reqOpts.config.encoding, expectedEncoding);
          done();
        }
      };

      speech.startRecognition(FILE, {}, assert.ifError);
    });

    it('should return an error from findFile_', function(done) {
      var error = new Error('Error.');

      Speech.findFile_ = function(files, callback) {
        callback(error);
      };

      speech.startRecognition(FILE, CONFIG, function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = {};

      beforeEach(function() {
        speech.api.Speech = {
          asyncRecognize: function(reqOpts, callback) {
            callback(error, apiResponse);
          }
        };
      });

      it('should return the error & API response', function(done) {
        speech.startRecognition(FILE, CONFIG, function(err, op, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(op, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {
        name: 'operation-name',
        response: {
          value: 'value string to be decoded'
        }
      };

      var decodedResponse = {
        results: []
      };

      beforeEach(function() {
        speech.protos = {
          Speech: {
            AsyncRecognizeResponse: {
              decode: function() {
                return decodedResponse;
              }
            }
          }
        };

        Speech.formatResults_ = util.noop;

        speech.operation = function() {
          return through.obj();
        };

        speech.api.Speech = {
          asyncRecognize: function(reqOpts, callback) {
            callback(null, apiResponse);
          }
        };
      });

      it('should return an operation & API response', function(done) {
        var fakeOperation = through.obj();

        speech.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return fakeOperation;
        };

        speech.startRecognition(FILE, CONFIG, function(err, op, apiResponse_) {
          assert.ifError(err);

          assert.strictEqual(op, fakeOperation);
          assert.strictEqual(op.metadata, apiResponse);

          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });
      });

      it('should format the results', function(done) {
        var fakeOperation = through.obj();
        speech.operation = function() {
          return fakeOperation;
        };

        speech.protos = {
          Speech: {
            AsyncRecognizeResponse: {
              decode: function(value) {
                assert.strictEqual(value, apiResponse.response.value);
                return decodedResponse;
              }
            }
          }
        };

        var formattedResults = [];
        Speech.formatResults_ = function(results, verboseMode) {
          assert.strictEqual(results, decodedResponse.results);
          assert.strictEqual(verboseMode, false);
          return formattedResults;
        };

        speech.startRecognition(FILE, CONFIG, function(err, op) {
          assert.ifError(err);

          op.on('complete', function(results) {
            assert.strictEqual(results, formattedResults);
            done();
          });

          op.emit('complete', apiResponse);
        });
      });

      it('should format results in verbose mode', function(done) {
        Speech.formatResults_ = function(results, verboseMode) {
          assert.strictEqual(verboseMode, true);
          done();
        };

        var config = extend({}, CONFIG, {
          verbose: true
        });

        speech.startRecognition(FILE, config, function(err, op) {
          assert.ifError(err);
          op.emit('complete', apiResponse);
        });
      });

      it('should delete verbose option from request object', function(done) {
        speech.api.Speech = {
          asyncRecognize: function(reqOpts) {
            assert.strictEqual(reqOpts.config.verbose, undefined);
            done();
          }
        };

        var config = extend({}, CONFIG, {
          verbose: true
        });

        speech.startRecognition(FILE, config, assert.ifError);
      });
    });
  });
});
