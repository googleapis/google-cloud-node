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
var PKG = require('../package.json');

var fakeUtil = extend({}, util);

function FakeGrpcService() {
  this.calledWith_ = arguments;
}

function FakeFile() {
  this.calledWith_ = arguments;
}

function FakeOperation() {
  this.calledWith_ = arguments;
}

var requestOverride = null;
var fakeRequest = function() {
  return (requestOverride || util.noop).apply(this, arguments);
};

describe('Speech', function() {
  var PROJECT_ID = 'project-id';

  var Speech;
  var speech;

  before(function() {
    Speech = proxyquire('../', {
      '@google-cloud/storage': {
        File: FakeFile
      },
      '@google-cloud/common': {
        GrpcService: FakeGrpcService,
        util: fakeUtil
      },
      request: fakeRequest,
      './operation.js': FakeOperation
    });
  });

  beforeEach(function() {
    requestOverride = null;

    speech = new Speech({
      projectId: PROJECT_ID
    });
  });

  describe('instantiation', function() {
    it('should normalize the arguments', function() {
      var normalizeArguments = fakeUtil.normalizeArguments;
      var normalizeArgumentsCalled = false;
      var fakeOptions = { projectId: PROJECT_ID };
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
        userAgent: PKG.name + '/' + PKG.version
      });
    });
  });

  describe('recognize', function() {
    var detectEncoding_;
    var findFile_;

    var FILE = {};
    var FOUND_FILE = {};
    var CONFIG = { a: 'b' };
    var DETECTED_ENCODING = 'LINEAR16';

    before(function() {
      detectEncoding_ = Speech.detectEncoding_;
      findFile_ = Speech.findFile_;
    });

    beforeEach(function() {
      Speech.detectEncoding_ = function() {
        return DETECTED_ENCODING;
      };

      Speech.findFile_ = function(files, callback) {
        callback(null, FOUND_FILE);
      };
    });

    after(function() {
      Speech.detectEncoding_ = detectEncoding_;
      Speech.findFile_ = findFile_;
    });

    it('should find the files', function(done) {
      Speech.findFile_ = function(file) {
        assert.strictEqual(file, FILE);
        done();
      };

      speech.recognize(FILE, CONFIG, assert.ifError);
    });

    it('should make the correct request', function(done) {
      speech.request = function(protoOpts, reqOpts) {
        assert.deepEqual(protoOpts, {
          service: 'Speech',
          method: 'syncRecognize'
        });

        assert.deepEqual(reqOpts, {
          config: extend({}, CONFIG, { encoding: DETECTED_ENCODING }),
          audio: FOUND_FILE
        });

        done();
      };

      speech.recognize(FILE, CONFIG, assert.ifError);
    });

    it('should respect the provided encoding', function(done) {
      var config = {
        encoding: 'LINEAR32'
      };

      Speech.detectEncoding_ = function(file) {
        assert.strictEqual(file, FILE);
        return DETECTED_ENCODING;
      };

      speech.request = function(protoOpts, reqOpts) {
        assert.strictEqual(reqOpts.config.encoding, config.encoding);
        done();
      };

      speech.recognize(FILE, config, assert.ifError);
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
        speech.request = function(protoOpts, reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should return the error & API response', function(done) {
        speech.recognize(FILE, CONFIG, function(err, response, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(response, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {};
      var expectedResponse = {};

      beforeEach(function() {
        speech.protos = {
          Speech: {
            SyncRecognizeResponse: function(response) {
              assert.strictEqual(response, apiResponse);
              return expectedResponse;
            }
          }
        };

        speech.request = function(protoOpts, reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should return the detections & API response', function(done) {
        speech.recognize(FILE, CONFIG, function(err, response, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(response, expectedResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });
  });

  describe('startRecognition', function() {
    var detectEncoding_;
    var findFile_;

    var FILE = {};
    var FOUND_FILE = {};
    var CONFIG = { a: 'b' };
    var DETECTED_ENCODING = 'LINEAR16';

    before(function() {
      detectEncoding_ = Speech.detectEncoding_;
      findFile_ = Speech.findFile_;
    });

    beforeEach(function() {
      Speech.detectEncoding_ = function() {
        return DETECTED_ENCODING;
      };

      Speech.findFile_ = function(files, callback) {
        callback(null, FOUND_FILE);
      };
    });

    after(function() {
      Speech.detectEncoding_ = detectEncoding_;
      Speech.findFile_ = findFile_;
    });

    it('should find the files', function(done) {
      Speech.findFile_ = function(file) {
        assert.strictEqual(file, FILE);
        done();
      };

      speech.startRecognition(FILE, CONFIG, assert.ifError);
    });

    it('should make the correct request', function(done) {
      speech.request = function(protoOpts, reqOpts) {
        assert.deepEqual(protoOpts, {
          service: 'Speech',
          method: 'asyncRecognize'
        });

        assert.deepEqual(reqOpts, {
          config: extend({}, CONFIG, { encoding: DETECTED_ENCODING }),
          audio: FOUND_FILE
        });

        done();
      };

      speech.startRecognition(FILE, CONFIG, assert.ifError);
    });

    it('should respect the provided encoding', function(done) {
      var config = {
        encoding: 'LINEAR32'
      };

      Speech.detectEncoding_ = function(file) {
        assert.strictEqual(file, FILE);
        return DETECTED_ENCODING;
      };

      speech.request = function(protoOpts, reqOpts) {
        assert.strictEqual(reqOpts.config.encoding, config.encoding);
        done();
      };

      speech.startRecognition(FILE, config, assert.ifError);
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
        speech.request = function(protoOpts, reqOpts, callback) {
          callback(error, apiResponse);
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
        name: 'operation-name'
      };

      beforeEach(function() {
        speech.request = function(protoOpts, reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should extend the operation with metadata', function(done) {
        var fakeOperation = {
          extendWithMetadata_: function(metadata) {
            assert.strictEqual(metadata, apiResponse);
            done();
          }
        };

        speech.operation = function() {
          return fakeOperation;
        };

        speech.startRecognition(FILE, CONFIG, assert.ifError);
      });

      it('should return an operation & API response', function(done) {
        var fakeOperation = {
          extendWithMetadata_: util.noop
        };

        speech.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return fakeOperation;
        };

        speech.startRecognition(FILE, CONFIG, function(err, op, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(op, fakeOperation);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
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

      speech.requestWritableStream = function() {
        requestStream = through.obj();
        return requestStream;
      };
    });

    it('should make the correct request once writing started', function(done) {
      speech.requestWritableStream = function(protoOpts) {
        assert.deepEqual(protoOpts, {
          service: 'Speech',
          method: 'streamingRecognize'
        });

        setImmediate(done);

        return through.obj();
      };

      stream.emit('writing');
    });

    it('should emit the response event on the user stream', function(done) {
      var response = {};

      stream.on('response', function(response_) {
        assert.strictEqual(response_, response);
        done();
      });

      speech.requestWritableStream = function() {
        var requestStream = through.obj();

        setImmediate(function() {
          requestStream.emit('response', response);
        });

        return requestStream;
      };

      stream.emit('writing');
    });

    it('should send the initial write to the request stream', function(done) {
      speech.requestWritableStream = function() {
        var requestStream = through.obj();

        requestStream.once('data', function(data) {
          assert.deepEqual(data, {
            streamingConfig: CONFIG
          });
          done();
        });

        return requestStream;
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
      assert(operation instanceof FakeOperation);
      assert.strictEqual(operation.calledWith_[0], speech);
      assert.strictEqual(operation.calledWith_[1], NAME);
    });
  });

  describe('findFile_', function() {
    it('should convert a File object', function(done) {
      var file = new FakeFile();
      file.bucket = {
        name: 'bucket-name'
      };
      file.name = 'file-name';

      Speech.findFile_(file, function(err, foundFile) {
        assert.ifError(err);

        assert.deepEqual(foundFile, {
          uri: 'gs://' + file.bucket.name + '/' + file.name
        });

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

  describe('detectEncoding_', function() {
    it('should detect encoding', function() {
      assert.equal(Speech.detectEncoding_(), undefined);
      assert.equal(Speech.detectEncoding_(''), undefined);
      assert.equal(Speech.detectEncoding_('foo'), undefined);
      assert.equal(Speech.detectEncoding_('foo.'), undefined);
      assert.equal(Speech.detectEncoding_('foo.bar'), undefined);
      assert.equal(Speech.detectEncoding_('foo.bar.bar'), undefined);
      assert.equal(Speech.detectEncoding_('foo.raw'), 'LINEAR16');
      assert.equal(Speech.detectEncoding_('foo.amr'), 'AMR');
      assert.equal(Speech.detectEncoding_('foo.awb'), 'AMR_WB');
      assert.equal(Speech.detectEncoding_('foo.flac'), 'FLAC');
      assert.equal(Speech.detectEncoding_('foo.fLAc'), 'FLAC');
      assert.equal(Speech.detectEncoding_('foo.wav'), 'MULAW');
      assert.equal(Speech.detectEncoding_('foo.au'), 'MULAW');
    });
  });
});
