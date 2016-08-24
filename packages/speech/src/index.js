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

/*!
 * @module speech
 */

'use strict';

var arrify = require('arrify');
var common = require('@google-cloud/common');
var eventsIntercept = require('events-intercept');
var extend = require('extend');
var flatten = require('lodash.flatten');
var format = require('string-format-obj');
var fs = require('fs');
var googleProtoFiles = require('google-proto-files');
var is = require('is');
var path = require('path');
var prop = require('propprop');
var pumpify = require('pumpify');
var request = require('request');
var Storage = require('@google-cloud/storage');
var streamEvents = require('stream-events');
var through = require('through2');
var util = require('util');

var PKG = require('../package.json');

/**
 * The [Cloud Speech API](https://cloud.google.com/speech/docs) enables easy
 * integration of Google speech recognition technologies into developer
 * applications. Send audio and receive a text transcription from the Cloud
 * Speech API service.
 *
 * @constructor
 * @alias module:speech
 *
 * @classdesc
 * <p class="notice">
 *   **This is a Beta release of the Cloud Speech API.** This feature is not
 *   covered by any SLA or deprecation policy and may be subject to backward-
 *   incompatible changes.
 * </p>
 *
 * To learn more about the Speech API, see the
 * [Getting Started guide](https://cloud.google.com/speech/docs/getting-started).
 *
 * @resource [Getting Started]{@link https://cloud.google.com/speech/docs/getting-started}
 * @resource [Speech Best Practices]{@link https://cloud.google.com/speech/docs/best-practices}
 *
 * @param {object} options - [Configuration object](#/docs).
 */
function Speech(options) {
  if (!(this instanceof Speech)) {
    options = common.util.normalizeArguments(this, options);
    return new Speech(options);
  }

  var config = {
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
  };

  common.GrpcService.call(this, config, options);
}

util.inherits(Speech, common.GrpcService);

/**
 * The endpointer types that the Speech API will return while processing a
 * {module:speech#createRecognizeStream} request. You can track the progress of
 * audio recognition by comparing the `data.endpointerType` property with these
 * values.
 *
 *   - `Speech.endpointerTypes.ENDPOINTER_EVENT_UNSPECIFIED`: No endpointer
 *     event specified.
 *   - `Speech.endpointerTypes.START_OF_SPEECH`: Speech has been detected in the
 *     audio stream.
 *   - `Speech.endpointerTypes.END_OF_SPEECH`: Speech has ceased to be detected
 *     in the audio stream.
 *   - `Speech.endpointerTypes.END_OF_AUDIO`: The end of the audio stream has
 *     been reached and it is being processed.
 *   - `Speech.endpointerTypes.END_OF_UTTERANCE`: This event is only sent when
 *     `config.singleUtterance` passed to {module:speech#createRecognizeStream}
 *     is `true`. It indicates that the server has detected the end of the
 *     user's speech utterance and expects no additional speech. Therefore, the
 *     server will not process additional audio. The client should stop sending
 *     additional audio data.
 *
 * @type {object}
 */
Speech.endpointerTypes =
Speech.prototype.endpointerTypes = {
  END_OF_AUDIO: 'END_OF_AUDIO',
  END_OF_SPEECH: 'END_OF_SPEECH',
  END_OF_UTTERANCE: 'END_OF_UTTERANCE',
  ENDPOINTER_EVENT_UNSPECIFIED: 'ENDPOINTER_EVENT_UNSPECIFIED',
  START_OF_SPEECH: 'START_OF_SPEECH'
};

/**
 * Guess the audio encoding from the file's extension.
 *
 * @resource [AudioEncoding API Documentation]{@link https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#audioencoding}
 * @private
 *
 * @param {string} filename - The name of the file.
 * @returns {string} The audio encoding.
 */
Speech.detectEncoding_ = function(filename) {
  if (!is.string(filename)) {
    return;
  }

  switch (path.extname(filename).toLowerCase()) {
    case '.raw': {
      return 'LINEAR16';
    }
    case '.amr': {
      return 'AMR';
    }
    case '.awb': {
      return 'AMR_WB';
    }
    case '.flac': {
      return 'FLAC';
    }
    case '.au':
    case '.wav': {
      return 'MULAW';
    }
  }
};

/**
 * Determine the type of file the user is asking to be processed. If a
 * {module:storage/file}, convert to its "gs://{bucket}/{file}" URL. If a remote
 * URL, read the contents. If a file path, load the file.
 *
 * @private
 */
Speech.findFile_ = function(file, callback) {
  if (file instanceof Storage.File) {
    // File is an instance of module:storage/file.
    callback(null, {
      uri: format('gs://{bucketName}/{fileName}', {
        bucketName: file.bucket.name,
        fileName: file.name
      })
    });
    return;
  }

  if (is.string(file) && file.indexOf('gs://') === 0) {
    // File is a Google Cloud Storage URI.
    callback(null, {
      uri: file
    });
    return;
  }

  if (/^http/.test(file)) {
    // File is a URL.
    request({
      uri: file,
      encoding: null
    }, function(err, resp, body) {
      if (err) {
        callback(err);
        return;
      }

      callback(null, {
        content: body
      });
    });
    return;
  }

  if (is.object(file)) {
    // This might be a RecognitionAudio object.
    if (!file.content && !file.uri) {
      var errorMsg = 'RecognitionAudio requires a "content" or "uri" property.';
      callback(new Error(errorMsg));
    } else {
      callback(null, file);
    }
    return;
  }

  // File exists on disk.
  fs.readFile(file, function(err, contents) {
    if (err) {
      callback(err);
      return;
    }

    callback(null, {
      content: contents
    });
  });
};

/**
 * Simplify the transcription results from the API.
 *
 * @resource [`SpeechRecognitionResult` API Documentation]{@link https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.SpeechRecognitionResult}
 * @resource [`StreamingRecognitionResult` API Documentation]{@link https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.StreamingRecognitionResult}
 *
 * @private
 *
 * @param {object} results - A `SpeechRecognitionResult` or
 *     `StreamingRecognitionResult` object.
 * @param {boolean} verbose - Whether to use verbose mode.
 * @return {object} - The simplified results.
 */
Speech.formatResults_ = function(results, verboseMode) {
  results = flatten(arrify(results).map(prop('alternatives')));

  if (verboseMode) {
    results = results.map(function(result) {
      if (is.defined(result.confidence)) {
        result.confidence *= 100;
      }

      if (is.defined(result.stability)) {
        result.stability *= 100;
      }

      return result;
    });
  } else {
    results = results.map(prop('transcript'));
  }

  return results;
};

/**
 * Perform bidirectional streaming speech-recognition: receive results while
 * sending audio.
 *
 * @resource [`StreamingRecognize` API Reference]{@link https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.Speech.StreamingRecognize}
 * @resource [`StreamingRecognizeRequest` API Reference]{@link https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.StreamingRecognizeRequest}
 *
 * @param {object} config - A `StreamingRecognitionConfig` object. See
 *     [`StreamingRecognitionConfig`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.StreamingRecognitionConfig).
 * @param {boolean=} config.verbose - Enable verbose mode for a more detailed
 *     response. See the examples below. Default: `false`.
 *
 * @example
 * var fs = require('fs');
 *
 * //-
 * // See <a href="https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.StreamingRecognitionConfig">
 * // `RecognizeRequest`</a>.
 * //-
 * var request = {
 *   config: {
 *     encoding: 'LINEAR16',
 *     sampleRate: 16000
 *   },
 *   singleUtterance: false,
 *   interimResults: false
 * };
 *
 * fs.createReadStream('./system-test/data/bridge.raw')
 *   .on('error', console.error)
 *   .pipe(speech.createRecognizeStream(request))
 *   .on('error', console.error)
 *   .on('data', function(data) {
 *     // The first "data" event emitted might look like:
 *     //   data = {
 *     //     endpointerType: Speech.endpointerTypes.START_OF_SPEECH,
 *     //     results: [],
 *     //     ...
 *     //   }
 *
 *     // A later "data" event emitted might look like:
 *     //   data = {
 *     //     endpointerType: Speech.endpointerTypes.END_OF_AUDIO,
 *     //     results: [],
 *     //     ...
 *     //   }
 *
 *     // A final "data" event emitted might look like:
 *     //   data = {
 *     //     endpointerType: Speech.endpointerTypes.END_OF_AUDIO,
 *     //     results: [
 *     //       "how old is the Brooklyn Bridge"
 *     //     ],
 *     //     ...
 *     //   }
 *   });
 *
 * //-
 * // <h3>Enable verbose mode for more detailed results.</h3>
 * //-
 * var request = {
 *   config: {
 *     encoding: 'LINEAR16',
 *     sampleRate: 16000
 *   },
 *   singleUtterance: false,
 *   interimResults: false,
 *   verbose: true
 * };
 *
 * fs.createReadStream('./system-test/data/bridge.raw')
 *   .on('error', console.error)
 *   .pipe(speech.createRecognizeStream(request))
 *   .on('error', console.error)
 *   .on('data', function(data) {
 *     // The first "data" event emitted might look like:
 *     //   data = {
 *     //     endpointerType: Speech.endpointerTypes.START_OF_SPEECH,
 *     //     results: [],
 *     //     ...
 *     //   }
 *
 *     // A later "data" event emitted might look like:
 *     //   data = {
 *     //     endpointerType: Speech.endpointerTypes.END_OF_AUDIO,
 *     //     results: [],
 *     //     ...
 *     //   }
 *
 *     // A final "data" event emitted might look like:
 *     //   data = {
 *     //     endpointerType: Speech.endpointerTypes.END_OF_AUDIO,
 *     //     results: [
 *     //       {
 *     //         transcript: "how old is the Brooklyn Bridge",
 *     //         confidence: 88.15
 *     //       }
 *     //     ],
 *     //     ...
 *     //   }
 *   });
 */
Speech.prototype.createRecognizeStream = function(config) {
  var self = this;

  var protoOpts = {
    service: 'Speech',
    method: 'streamingRecognize'
  };

  var verboseMode = config.verbose === true;
  delete config.verbose;

  var recognizeStream = streamEvents(pumpify.obj());

  recognizeStream.once('writing', function() {
    var requestStream = self.requestWritableStream(protoOpts);

    requestStream.on('response', function(response) {
      recognizeStream.emit('response', response);
    });

    requestStream.write({
      streamingConfig: config
    });

    this.setPipeline([
      // Format the user's input.
      through.obj(function(obj, _, next) {
        next(null, {
          audioContent: obj
        });
      }),

      requestStream,

      // Format the results.
      through.obj(function(obj, _, next) {
        obj.results = Speech.formatResults_(obj.results, verboseMode);
        next(null, obj);
      })
    ]);
  });

  return recognizeStream;
};

/*! Developer Documentation
 *
 * @returns {module:common/grpcOperation}
 */
/**
 * Get a reference to an existing operation.
 *
 * @throws {Error} If a name is not provided.
 *
 * @param {string} name - The name of the operation.
 *
 * @example
 * var operation = speech.operation('68850831366825');
 */
Speech.prototype.operation = function(name) {
  if (!name) {
    throw new Error('A name must be specified for an operation.');
  }

  return new common.GrpcOperation(this, name);
};

/**
 * Perform synchronous speech recognition and receive results after all audio
 * has been sent and processed. This is ideal for files 1 MB or below. For
 * larger files, you will need to use {module:speech#startRecognition} or
 * {module:speech#createRecognizeStream}.
 *
 * @resource [`SyncRecognize` API Reference]{@link https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.Speech.SyncRecognize}
 * @resource [`SyncRecognizeRequest` API Reference]{@link https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.SyncRecognizeRequest}
 *
 * @param {string|object|module:storage/file} file - The source file to run the
 *     detection on. It can be either a local file path, a remote file URL, a
 *     Cloud Storage URI, a Cloud Storage File object, or a
 *     [`RecognitionAudio`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionAudio)
 *     object.
 * @param {object} config - A `RecognitionConfig` object. See
 *     [`RecognitionConfig`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig).
 * @param {boolean=} config.verbose - Enable verbose mode for a more detailed
 *     response. See the examples below. Default: `false`.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object[]} callback.results - `SyncRecognizeResponse`
 *     objects. See
 *     [`SyncRecognizeResponse`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#syncrecognizeresponse).
 * @param {object} callback.apiResponse - Raw API response. See
 *     [`SyncRecognizeResponse`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#syncrecognizeresponse).
 *
 * @example
 * var config = {
 *   encoding: 'LINEAR16',
 *   sampleRate: 16000
 * };
 *
 * function callback(err, results, apiResponse) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // results = [
 *   //   "how old is the Brooklyn Bridge"
 *   // ]
 * }
 *
 * //-
 * // <h3>Run speech detection over a local file</h3>
 * //-
 * speech.recognize('./bridge.raw', config, callback);
 *
 * //-
 * // <h3>Run speech recognition over a file in Cloud Storage</h3>
 * //-
 * speech.recognize('gs://your-bucket-name/bridge.raw', config, callback);
 *
 * //-
 * // <h3>Run speech recognition over raw file contents</h3>
 * //-
 * speech.recognize({
 *   content: fs.readFileSync('./bridge.raw')
 * }, config, callback);
 *
 * //-
 * // <h3>Run speech recognition over a remote file</h3>
 * //
 * // *Note: This is not an officially supported feature of the Speech API.
 * // google-cloud will make a request to the URL given and send the file
 * // contents to the upstream API.*
 * //-
 * speech.recognize('https://example.com/files/bridge.raw', config, callback);
 *
 * //-
 * // <h3>Enable verbose mode for more detailed results.</h3>
 * //-
 * var config = {
 *   encoding: 'LINEAR16',
 *   sampleRate: 16000,
 *   verbose: true
 * };
 *
 * speech.recognize('./bridge.raw', config, function(err, results) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // results = [
 *   //   {
 *   //     transcript: "how old is the Brooklyn Bridge",
 *   //     confidence: 88.15
 *   //   }
 *   // ]
 * });
 */
Speech.prototype.recognize = function(file, config, callback) {
  var self = this;

  var protoOpts = {
    service: 'Speech',
    method: 'syncRecognize'
  };

  config = extend({
    encoding: Speech.detectEncoding_(file)
  }, config);

  var verboseMode = config.verbose === true;
  delete config.verbose;

  Speech.findFile_(file, function(err, foundFile) {
    if (err) {
      callback(err);
      return;
    }

    var reqOpts = {
      audio: foundFile,
      config: config
    };

    self.request(protoOpts, reqOpts, function(err, apiResponse) {
      if (err) {
        callback(err, null, apiResponse);
        return;
      }

      var response = new self.protos.Speech.SyncRecognizeResponse(apiResponse);
      var results = Speech.formatResults_(response.results, verboseMode);

      callback(null, results, apiResponse);
    });
  });
};

/**
 * Perform asynchronous speech recognition.
 *
 * This method sends audio to the Speech API, which immediately responds with an
 * Operation object. You can then poll the operation for a result by registering
 * a listener for the "complete" event. See the examples below.
 *
 * @resource [`AsyncRecognize` API Reference]{@link https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.Speech.AsyncRecognize}
 * @resource [`AsyncRecognizeRequest` API Reference]{@link https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.AsyncRecognizeRequest}
 * @resource [`AsyncRecognizeResponse` API Reference]{@link https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.AsyncRecognizeResponse}
 *
 * @param {string|object|module:storage/file} file - The source file to run the
 *     detection on. It can be either a local file path, a remote file URL, a
 *     Cloud Storage URI, a Cloud Storage File object, or a
 *     [`RecognitionAudio`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionAudio)
 *     object.
 * @param {object} config - A `RecognitionConfig` object. See
 *     [`RecognitionConfig`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig).
 * @param {boolean=} config.verbose - Enable verbose mode for a more detailed
 *     response. See the examples below. Default: `false`.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:speech/operation} callback.operation - `Operation` object. See
 *     [`Operation`](https://cloud.google.com/speech/reference/rpc/google.longrunning#google.longrunning.Operation).
 * @param {object} callback.apiResponse - Raw API response.
 *
 * @example
 * var config = {
 *   encoding: 'LINEAR16',
 *   sampleRate: 16000
 * };
 *
 * function callback(err, operation, apiResponse) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   operation
 *     .on('error', function(err) {})
 *     .on('complete', function(results) {
 *       // results = [
 *       //   "how old is the Brooklyn Bridge"
 *       // ]
 *     });
 * }
 *
 * //-
 * // <h3>Run speech detection over a local file</h3>
 * //-
 * speech.startRecognition('./bridge.raw', config, callback);
 *
 * //-
 * // <h3>Run speech detection over a file in Cloud Storage</h3>
 * //-
 * var file = 'gs://your-bucket-name/bridge.raw';
 * speech.startRecognition(file, config, callback);
 *
 * //-
 * // <h3>Run speech detection over raw file contents</h3>
 * //-
 * speech.startRecognition({
 *   content: fs.readFileSync('./bridge.raw')
 * }, config, callback);
 *
 * //-
 * // <h3>Run speech detection over a remote file</h3>
 * //
 * // *Note: This is not an officially supported feature of the Speech API. Our
 * // library will make a request to the URL given, and send that upstream.*
 * //-
 * var file = 'https://example.com/files/bridge.raw';
 *
 * speech.startRecognition(file, config, callback);
 *
 * //-
 * // <h3>Enable verbose mode for more detailed results.</h3>
 * //-
 * var config = {
 *   encoding: 'LINEAR16',
 *   sampleRate: 16000,
 *   verbose: true
 * };
 *
 * speech.startRecognition('./bridge.raw', config, function(err, operation) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   operation
 *     .on('error', function(err) {})
 *     .on('complete', function(results) {
 *       // results = [
 *       //   {
 *       //     transcript: "how old is the Brooklyn Bridge",
 *       //     confidence: 88.15
 *       //   }
 *       // ]
 *     });
 * });
 */
Speech.prototype.startRecognition = function(file, config, callback) {
  var self = this;

  var protoOpts = {
    service: 'Speech',
    method: 'asyncRecognize'
  };

  config = extend({
    encoding: Speech.detectEncoding_(file)
  }, config);

  var verboseMode = config.verbose === true;
  delete config.verbose;

  Speech.findFile_(file, function(err, foundFile) {
    if (err) {
      callback(err);
      return;
    }

    var reqOpts = {
      audio: foundFile,
      config: config
    };

    self.request(protoOpts, reqOpts, function(err, apiResponse) {
      if (err) {
        callback(err, null, apiResponse);
        return;
      }

      var operation = self.operation(apiResponse.name);
      operation.metadata = apiResponse;

      // Intercept the "complete" event to decode and format the results of the
      // operation for the user.
      eventsIntercept.patch(operation);
      operation.intercept('complete', function(metadata, callback) {
        var response = metadata.response;

        if (response && is.string(response.value)) {
          var value = response.value;
          response = self.protos.Speech.AsyncRecognizeResponse.decode(value);
        }

        callback(null, Speech.formatResults_(response.results, verboseMode));
      });

      callback(null, operation, apiResponse);
    });
  });
};

module.exports = Speech;
