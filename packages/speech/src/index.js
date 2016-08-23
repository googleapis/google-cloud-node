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

var common = require('@google-cloud/common');
var extend = require('extend');
var format = require('string-format-obj');
var fs = require('fs');
var googleProtoFiles = require('google-proto-files');
var is = require('is');
var pumpify = require('pumpify');
var request = require('request');
var Storage = require('@google-cloud/storage');
var streamEvents = require('stream-events');
var through = require('through2');
var util = require('util');

/**
 * @type {module:speech/operation}
 * @private
 */
var Operation = require('./operation.js');

var PKG = require('../package.json');

var ENDPOINTER_EVENT_UNSPECIFIED = 'ENDPOINTER_EVENT_UNSPECIFIED';
var START_OF_SPEECH = 'START_OF_SPEECH';
var END_OF_SPEECH = 'END_OF_SPEECH';
var END_OF_AUDIO = 'END_OF_AUDIO';
var END_OF_UTTERANCE = 'END_OF_UTTERANCE';

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
 *
 * @example
 * var gcloud = require('google-cloud')({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var speech = gcloud.speech();
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

Speech.endpointerTypes = {
  ENDPOINTER_EVENT_UNSPECIFIED: ENDPOINTER_EVENT_UNSPECIFIED,
  START_OF_SPEECH: START_OF_SPEECH,
  END_OF_SPEECH: END_OF_SPEECH,
  END_OF_AUDIO: END_OF_AUDIO,
  END_OF_UTTERANCE: END_OF_UTTERANCE
};

/**
 * Perform synchronous speech-recognition: receive results after all audio has
 * been sent and processed.
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
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object[]} callback.syncRecognizeResponse - `SyncRecognizeResponse`
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
 * function callback(err, result, apiResponse) {
 *   // result = {
 *   //   results: [
 *   //     {
 *   //       alternatives: [
 *   //         {
 *   //           transcript: "...",
 *   //           confidence: 0.88
 *   //         }
 *   //       ]
 *   //     }
 *   //   ]
 *   // }
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
 */
Speech.prototype.recognize = function(file, config, callback) {
  var self = this;

  var protoOpts = {
    service: 'Speech',
    method: 'syncRecognize'
  };

  Speech.findFile_(file, function(err, foundFile) {
    if (err) {
      callback(err);
      return;
    }

    var reqOpts = {
      audio: foundFile,
      config: extend({
        encoding: Speech.detectEncoding_(file)
      }, config)
    };

    self.request(protoOpts, reqOpts, function(err, apiResponse) {
      if (err) {
        callback(err, null, apiResponse);
        return;
      }

      var response = new self.protos.Speech.SyncRecognizeResponse(apiResponse);

      callback(null, response, apiResponse);
    });
  });
};

/**
 * Perform asynchronous speech-recognition: receive results via the
 * `google.longrunning.Operations` interface.
 *
 * This method sends audio to the Speech API, which immediately responds with an
 * operation object. You can then poll the job for a result by attaching to the
 * operation object a listener for the "complete" event. This is useful if
 * you're willing to do the work in the background and be notified when things
 * are all done. You can also poll the job manually with
 * {module:speech/operation#get}.
 *
 * @resource [`AsyncRecognize` API Reference]{@link https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.Speech.AsyncRecognize}
 * @resource [`AsyncRecognizeRequest` API Reference]{@link https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.AsyncRecognizeRequest}
 *
 * @param {string|object|module:storage/file} file - The source file to run the
 *     detection on. It can be either a local file path, a remote file URL, a
 *     Cloud Storage URI, a Cloud Storage File object, or a
 *     [`RecognitionAudio`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionAudio)
 *     object.
 * @param {object} options - A
 *     `RecognitionConfig` object. See [`RecognitionConfig`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig).
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:speech/operation} callback.operation - `Operation` object. See
 *     [`Operation`](https://cloud.google.com/speech/reference/rpc/google.longrunning#google.longrunning.Operation).
 * @param {object} callback.apiResponse - Raw API response.
 *
 * @example
 * var options = {
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
 *     .on('complete', function(operation, apiResponse) {
 *       // operation = {
 *       //   response: {
 *       //     results: [
 *       //       {
 *       //         alternatives: [
 *       //           {
 *       //             transcript: "...",
 *       //             confidence: 0.88
 *       //           }
 *       //         ]
 *       //       }
 *       //     ]
 *       //   }
 *       // }
 *     });
 * }
 *
 * //-
 * // <h3>Run speech detection over a local file</h3>
 * //-
 * speech.startRecognition('./bridge.raw', options, callback);
 *
 * //-
 * // <h3>Run speech detection over a file in Cloud Storage</h3>
 * //-
 * var file = 'gs://your-bucket-name/bridge.raw';
 * speech.startRecognition(file, options, callback);
 *
 * //-
 * // <h3>Run speech detection over raw file contents</h3>
 * //-
 * speech.startRecognition({
 *   content: fs.readFileSync('./bridge.raw')
 * }, options, callback);
 *
 * //-
 * // <h3>Run speech detection over a remote file</h3>
 * //
 * // *Note: This is not an officially supported feature of the Speech API. Our
 * // library will make a request to the URL given, and send that upstream.*
 * //-
 * var file = 'https://example.com/files/bridge.raw';
 *
 * speech.startRecognition(file, options, callback);
 */
Speech.prototype.startRecognition = function(file, options, callback) {
  var self = this;

  var protoOpts = {
    service: 'Speech',
    method: 'asyncRecognize'
  };

  Speech.findFile_(file, function(err, foundFile) {
    if (err) {
      callback(err);
      return;
    }

    var reqOpts = {
      audio: foundFile,
      config: extend({
        encoding: Speech.detectEncoding_(file)
      }, options)
    };

    self.request(protoOpts, reqOpts, function(err, apiResponse) {
      if (err) {
        callback(err, null, apiResponse);
        return;
      }

      var operation = self.operation(apiResponse.name);
      operation.extendWithMetadata_(apiResponse);

      callback(null, operation, apiResponse);
    });
  });
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
 * var recognizeStream = speech.createRecognizeStream(request)
 *   .on('data', function(speechRecognitionAlternatives) {
 *     console.log(speechRecognitionAlternatives);
 *   });
 *
 * fs.createReadStream('./system-test/data/bridge.raw', { end: false })
 *   .pipe(recognizeStream);
 *
 * fs.createReadStream('./system-test/data/spain.raw', { end: false })
 *   .pipe(recognizeStream);
 */
Speech.prototype.createRecognizeStream = function(config) {
  var self = this;

  var protoOpts = {
    service: 'Speech',
    method: 'streamingRecognize'
  };

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
      requestStream
    ]);
  });

  return recognizeStream;
};

/**
 * Create an Operation object. See {module:speech/createRecognizeJob} to create
 * an operation.
 *
 * @throws {Error} If a name is not provided.
 *
 * @param {string} name - The name of the operation.
 * @returns {module:speech/operation}
 *
 * @example
 * var operation = speech.operation('68850831366825');
 *
 * operation.get(function(err) {});
 */
Speech.prototype.operation = function(name) {
  if (!name) {
    throw new Error('A name must be specified for an operation.');
  }

  return new Operation(this, name);
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
 * Guesses the AudioEncoding from the file's extension.
 *
 * @param {string} filename - The name of the file.
 * @returns {string} The audio encoding.
 * @private
 * @resource https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#audioencoding
 */
Speech.detectEncoding_ = function(filename) {
  if (!is.string(filename)) {
    return;
  }

  var parts = filename.split('.');
  var ext = parts[parts.length - 1].toLowerCase();

  switch (ext) {
    case 'raw': {
      return 'LINEAR16';
    }
    case 'amr': {
      return 'AMR';
    }
    case 'awb': {
      return 'AMR_WB';
    }
    case 'flac': {
      return 'FLAC';
    }
    case 'au':
    case 'wav': {
      return 'MULAW';
    }
  }
};

Speech.Operation = Operation;

module.exports = Speech;
