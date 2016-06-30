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
var async = require('async');
var common = require('@google-cloud/common');
var concat = require('concat-stream');
var extend = require('extend');
var format = require('string-format-obj');
var googleProtoFiles = require('google-proto-files');
var fs = require('fs');
var is = require('is');
var nodeutil = require('util');
var request = require('request');
var through = require('through2');
var duplexify = require('duplexify');
var PKG = require('../package.json');

/**
 * @type {module:storage/file}
 * @private
 */
var File = require('@google-cloud/storage').File;

/**
 * @type {module:common/grpc-service}
 * @private
 */
var GrpcService = common.GrpcService;

/**
 * @type {module:speech/operation}
 * @private
 */
var Operation = require('./operation.js');

/**
 * @type {module:common/util}
 * @private
 */
var util = common.util;

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
    options = util.normalizeArguments(this, options);
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
        service: 'longrunning',
        apiVersion: undefined
      }
    },
    scopes: [
      'https://www.googleapis.com/auth/cloud-platform'
    ],
    userAgent: PKG.name + '/' + PKG.version
  };

  GrpcService.call(this, config, options);
}

nodeutil.inherits(Speech, GrpcService);

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
 * This is an advanced API method that requires a raw
 * [`SyncRecognizeRequest`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.SyncRecognizeRequest)
 * object. If that doesn't sound like what you're looking for,
 * you'll probably appreciate {module:speech#syncDetect}.
 *
 * @resource [`SyncRecognize` API Reference]{@link https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.Speech.SyncRecognize}
 * @resource [`SyncRecognizeRequest` API Reference]{@link https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.SyncRecognizeRequest}
 *
 * @param {object} options - A `SyncRecognizeRequest` object. See
 *     [`SyncRecognizeRequest`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.SyncRecognizeRequest).
 * @param {object} options.config - A `RecognitionConfig` object. See
 *     [`RecognitionConfig`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig).
 * @param {string} options.config.encoding - Encoding of audio data sent in all `RecognitionAudio` messages. See
 *     [`RecognitionConfig.encoding`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {number} options.config.sampleRate - Sample rate in Hertz of the audio data sent in all RecognitionAudio messages. See
 *     [`RecognitionConfig.sampleRate`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {string=} options.config.languageCode - The language of the supplied
 *     audio as a BCP-47 language tag. Example: "en-GB" https://www.rfc-editor.org/rfc/bcp/bcp47.txt
 *     If omitted, defaults to "en-US". See
 *     [`RecognitionConfig.languageCode`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {number=} options.config.maxAlternatives - Default: `1`. See
 *     [`RecognitionConfig.maxAlternatives`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {boolean=} options.config.profanityFilter - Default: `false`. See
 *     [`RecognitionConfig.profanityFilter`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {string[]=} options.config.speechContext - Default: `[]`. See
 *     [`RecognitionConfig.speechContext`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {object} options.audio - A `RecognitionAudio` object. See
 *     [`RecognitionAudio`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionAudio).
 * @param {buffer} options.audio.content - The audio data bytes encoded as specified in `RecognitionConfig`.
 * @param {string} options.audio.uri - URI that points to a file that contains
 *     audio data bytes as specified in `RecognitionConfig`. Currently, only
 *     Google Cloud Storage URIs are supported, which must be specified in the
 *     following format: `gs://bucket_name/object_name`.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object[]} callback.results - Array of speech recognition results. See
 *     [`SpeechRecognitionResult`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.SpeechRecognitionResult).
 * @param {object} callback.apiResponse - Raw API response. See
 *     [`SyncRecognizeResponse`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#syncrecognizeresponse).
 *
 * @example
 * //-
 * // <h3>Send raw audio</h3>
 * //-
 * var fs = require('fs');
 *
 * fs.readFile('./system-test/data/bridge.raw', function (err, rawAudio) {
 *   // See the link in the parameters for `SyncRecognizeRequest`.
 *   var syncRecognizeRequest = {
 *     config: {
 *       encoding: 'LINEAR16',
 *       sampleRate: 16000
 *     },
 *     audio: {
 *       content: rawAudio
 *     }
 *   };
 *
 *   speech.recognize(
 *     syncRecognizeRequest,
 *     function(err, results, apiResponse) {
 *       console.log(results);
 *       console.log(results === apiResponse.results); // true
 *     }
 *   );
 * });
 *
 * //-
 * // <h3>Specify URI to audio file</h3>
 * //-
 * // See the link in the parameters for `SyncRecognizeRequest`.
 * var syncRecognizeRequest = {
 *   config: {
 *     encoding: 'LINEAR16',
 *     sampleRate: 16000
 *   },
 *   audio: {
 *     uri: 'gs://your-bucket-name/bridge.raw'
 *   }
 * };
 *
 * speech.recognize(
 *   syncRecognizeRequest,
 *   function(err, results, apiResponse) {
 *     console.log(results);
 *     console.log(results === apiResponse.results); // true
 *   }
 * );
 */
Speech.prototype.recognize = function(reqOpts, callback) {
  var self = this;
  var protoOpts = {
    service: 'Speech',
    method: 'syncRecognize'
  };

  this.request(protoOpts, reqOpts, function(err, apiResponse) {
    if (err) {
      callback(err, null, apiResponse);
      return;
    }
    var response = new self.protos.Speech.SyncRecognizeResponse(apiResponse);
    callback(null, response, apiResponse);
  });
};

/**
 * Perform synchronous speech-recognition: receive results after all audio has
 * been sent and processed.
 *
 * This is a simpler version of {module:speech#recognize}. Just provide a file
 * URI and your audio config and {module:speech#detect} does the rest.
 *
 * <h4>API simplifications</h4>
 *
 * This method returns a simplified response. For the response in the original
 * format, review the `apiResponse` argument your callback receives.
 *
 * @param {string|module:storage/file} file - The source file to run the
 *     detection on. It can be either a local file path, a remote file URL, a
 *     Cloud Storage URI, or a Cloud Storage File object.
 * @param {object} options - A `RecognitionConfig` object. See
 *     [`RecognitionConfig`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig).
 * @param {string} options.encoding - Encoding of audio data sent in all `RecognitionAudio` messages. See
 *     [`RecognitionConfig.encoding`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {number} options.sampleRate - Sample rate in Hertz of the audio data sent in all RecognitionAudio messages. See
 *     [`RecognitionConfig.sampleRate`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {string=} options.languageCode - The language of the supplied
 *     audio as a BCP-47 language tag. Example: "en-GB" https://www.rfc-editor.org/rfc/bcp/bcp47.txt
 *     If omitted, defaults to "en-US". See
 *     [`RecognitionConfig.languageCode`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {number=} options.maxAlternatives - Default: `1`. See
 *     [`RecognitionConfig.maxAlternatives`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {boolean=} options.profanityFilter - Default: `false`. See
 *     [`RecognitionConfig.profanityFilter`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {string[]=} options.speechContext - Default: `[]`. See
 *     [`RecognitionConfig.speechContext`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object[]} callback.syncRecognizeResponse -
 *     `SyncRecognizeResponse` objects. See
 *     [`SyncRecognizeResponse`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#syncrecognizeresponse).
 * @param {object} callback.apiResponse - Raw API response. See
 *     [`SyncRecognizeResponse`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#syncrecognizeresponse).
 *
 * @example
 * //-
 * // <h3>Run speech detection over a local file</h3>
 * //-
 * speech.detect('./bridge.raw', {
 *   encoding: 'LINEAR16',
 *   sampleRate: 16000
 * }, function(err, result, apiResponse) {
 *   //   result = {
 *   //     results: [
 *   //       {
 *   //         alternatives: [
 *   //           {
 *   //             transcript: "...",
 *   //             confidence: 0.88
 *   //           }
 *   //         ]
 *   //       }
 *   //     ]
 *   //   }
 * });
 *
 * //-
 * // <h3>Run speech detection over a file in Cloud Storage</h3>
 * //-
 * var file = 'gs://your-bucket-name/bridge.raw';
 * speech.detect(file, {
 *   encoding: 'LINEAR16',
 *   sampleRate: 16000
 * }, function(err, result, apiResponse) {});
 *
 * //-
 * // <h3>Run speech detection over a remote file</h3>
 * //
 * // *Note: This is not an officially supported feature of the Speech API.
 * // google-cloud will make a request to the URL given and send the file
 * // contents to the upstream API.*
 * //-
 * var file = 'https://your-domain.com/files/bridge.raw';
 * speech.detect(file, {
 *   encoding: 'LINEAR16',
 *   sampleRate: 16000
 * }, function(err, result, apiResponse) {});
 */
Speech.prototype.detect = function(file, config, callback) {
  var self = this;

  Speech.findFiles_(file, function(err, files) {
    if (err) {
      callback(err);
      return;
    }

    var reqOpts = {
      config: extend({
        encoding: Speech.detectEncoding_(file)
      }, config),
      audio: files[0]
    };

    self.recognize(reqOpts, callback);
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
 * This is an advanced API method that requires a raw
 * [`AsyncRecognizeRequest`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.AsyncRecognizeRequest)
 * object. If that doesn't sound like what you're looking for,
 * you'll probably appreciate {module:speech#createDetectJob}.
 *
 * @resource [`AsyncRecognize` API Reference]{@link https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.Speech.AsyncRecognize}
 * @resource [`AsyncRecognizeRequest` API Reference]{@link https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.AsyncRecognizeRequest}
 *
 * @param {object} options - A `AsyncRecognizeRequest` object. See
 *     [`AsyncRecognizeRequest`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.AsyncRecognizeRequest).
 * @param {object} options.config - A `RecognitionConfig` object. See
 *     [`RecognitionConfig`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig).
 * @param {string} options.config.encoding - Encoding of audio data sent in all `RecognitionAudio` messages. See
 *     [`RecognitionConfig.encoding`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {number} options.config.sampleRate - Sample rate in Hertz of the audio data sent in all RecognitionAudio messages. See
 *     [`RecognitionConfig.sampleRate`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {string=} options.config.languageCode - The language of the supplied
 *     audio as a BCP-47 language tag. Example: "en-GB" https://www.rfc-editor.org/rfc/bcp/bcp47.txt
 *     If omitted, defaults to "en-US". See
 *     [`RecognitionConfig.languageCode`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {number=} options.config.maxAlternatives - Default: `1`. See
 *     [`RecognitionConfig.maxAlternatives`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {boolean=} options.config.profanityFilter - Default: `false`. See
 *     [`RecognitionConfig.profanityFilter`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {string[]=} options.config.speechContext - Default: `[]`. See
 *     [`RecognitionConfig.speechContext`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {object} options.audio - A `RecognitionAudio` object. See
 *     [`RecognitionAudio`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionAudio).
 * @param {buffer} options.audio.content - The audio data bytes encoded as specified in `RecognitionConfig`.
 * @param {string} options.audio.uri - URI that points to a file that contains
 *     audio data bytes as specified in `RecognitionConfig`. Currently, only
 *     Google Cloud Storage URIs are supported, which must be specified in the
 *     following format: `gs://bucket_name/object_name`.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:speech/operation} callback.operation - `Operation` object. See
 *     [`Operation`](https://cloud.google.com/speech/reference/rpc/google.longrunning#google.longrunning.Operation).
 * @param {object} callback.apiResponse - Raw API response.
 *
 * @example
 * //-
 * // <h3>Send raw audio</h3>
 * //-
 * var fs = require('fs');
 *
 * fs.readFile('./system-test/data/bridge.raw', function (err, rawAudio) {
 *   // See the link in the parameters for `AsyncRecognizeRequest`.
 *   var asyncRecognizeRequest = {
 *     config: {
 *       encoding: 'LINEAR16',
 *       sampleRate: 16000
 *     },
 *     audio: {
 *       content: rawAudio
 *     }
 *   };
 *
 *   speech.createRecognizeJob(
 *     asyncRecognizeRequest,
 *     function(err, operation, apiResponse) {
 *       console.log(operation);
 *     }
 *   );
 * });
 *
 * //-
 * // <h3>Specify URI to audio file</h3>
 * //-
 * // See the link in the parameters for `AsyncRecognizeRequest`.
 * var asyncRecognizeRequest = {
 *   config: {
 *     encoding: 'LINEAR16',
 *     sampleRate: 16000
 *   },
 *   audio: {
 *     uri: 'gs://your-bucket-name/bridge.raw'
 *   }
 * };
 *
 * speech.createRecognizeJob(
 *   asyncRecognizeRequest,
 *   function(err, operation, apiResponse) {
 *     console.log(operation);
 *   }
 * );
 */
Speech.prototype.createRecognizeJob = function(reqOpts, callback) {
  var self = this;
  var protoOpts = {
    service: 'Speech',
    method: 'asyncRecognize'
  };

  this.request(protoOpts, reqOpts, function(err, apiResponse) {
    if (err) {
      callback(err, null, apiResponse);
      return;
    }
    callback(null, self.operation(apiResponse), apiResponse);
  });
};

/**
 * Asynchronously detect speech from an audio file.
 *
 * This is a simpler version of {module:speech#createRecognizeJob}. Just provide
 * a file URI and your audio config and {module:speech#createDetectJob} does the
 * rest.
 *
 * This method sends audio to the Speech API, which immediately responds with an
 * operation object. You can then poll the job for a result by attaching to the
 * operation object a listener for the "complete" event. This is useful if
 * you're willing to do the work in the background and be notified when things
 * are all done. You can also poll the job manually with
 * {module:speech/operation#get}.
 *
 * @param {string|module:storage/file} file - The source file to run the
 *     detection on. It can be either a local file path, a remote file URL, a
 *     Cloud Storage URI, or a Cloud Storage File object.
 * @param {object} options - A
 *     `RecognitionConfig` object. See [`RecognitionConfig`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig).
 * @param {string} options.encoding - Encoding of audio data sent in all `RecognitionAudio` messages. See
 *     [`RecognitionConfig.encoding`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {number} options.sampleRate - Sample rate in Hertz of the audio data sent in all RecognitionAudio messages. See
 *     [`RecognitionConfig.sampleRate`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {string=} options.languageCode - The language of the supplied
 *     audio as a BCP-47 language tag. Example: "en-GB" https://www.rfc-editor.org/rfc/bcp/bcp47.txt
 *     If omitted, defaults to "en-US". See
 *     [`RecognitionConfig.languageCode`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {number=} options.maxAlternatives - Default: `1`. See
 *     [`RecognitionConfig.maxAlternatives`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {boolean=} options.profanityFilter - Default: `false`. See
 *     [`RecognitionConfig.profanityFilter`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {string[]=} options.speechContext - Default: `[]`. See
 *     [`RecognitionConfig.speechContext`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:speech/operation} callback.operation - `Operation` object. See
 *     [`Operation`](https://cloud.google.com/speech/reference/rpc/google.longrunning#google.longrunning.Operation).
 * @param {object} callback.apiResponse - Raw API response.
 *
 * @example
 * //-
 * // <h3>Run speech detection over a local file</h3>
 * //-
 * speech.createDetectJob('./bridge.raw', {
 *   encoding: 'LINEAR16',
 *   sampleRate: 16000
 * }, function(err, operation, apiResponse) {
 *   operation.on('complete', function(err, operation, apiResponse) {
 *     // operation = {
 *     //   response: {
 *     //     results: [
 *     //       {
 *     //         alternatives: [
 *     //           {
 *     //             transcript: "...",
 *     //             confidence: 0.88
 *     //           }
 *     //         ]
 *     //       }
 *     //     ]
 *     //   }
 *     // }
 *   });
 * });
 *
 * //-
 * // <h3>Run speech detection over a remote file</h3>
 * //
 * // *Note: This is not an officially supported feature of the Speech API. Our
 * // library will make a request to the URL given, and send that upstream.*
 * //-
 * var file = 'https://your-domain.com/files/bridge.raw';
 * speech.createDetectJob(file, {
 *   encoding: 'LINEAR16',
 *   sampleRate: 16000
 * }, function(err, operation, apiResponse) {});
 *
 * //-
 * // <h3>Run speech detection over a file in Cloud Storage</h3>
 * //-
 * var file = 'gs://your-bucket-name/bridge.raw';
 * speech.createDetectJob(file, {
 *   encoding: 'LINEAR16',
 *   sampleRate: 16000
 * }, function(err, operation, apiResponse) {
 *   operation.on('complete', function(err, operation, apiResponse) {
 *     // operation = {
 *     //   response: {
 *     //     results: [
 *     //       {
 *     //         alternatives: [
 *     //           {
 *     //             transcript: "...",
 *     //             confidence: 0.88
 *     //           }
 *     //         ]
 *     //       }
 *     //     ]
 *     //   }
 *     // }
 *   });
 * });
 */
Speech.prototype.createDetectJob = function(file, config, callback) {
  var self = this;

  Speech.findFiles_(file, function(err, files) {
    if (err) {
      callback(err);
      return;
    }

    var reqOpts = {
      config: extend({
        encoding: Speech.detectEncoding_(file)
      }, config),
      audio: files[0]
    };

    self.createRecognizeJob(reqOpts, callback);
  });
};

/**
 * Perform bidirectional streaming speech-recognition: receive results while
 * sending audio.
 *
 * This is an advanced API method that requires raw
 * [`StreamingRecognizeRequest`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.StreamingRecognizeRequest)
 * objects. If that doesn't sound like what you're looking for, you'll probably
 * appreciate {module:speech#streamingDetect}.
 *
 * @resource [`StreamingRecognize` API Reference]{@link https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.Speech.StreamingRecognize}
 * @resource [`StreamingRecognizeRequest` API Reference]{@link https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.StreamingRecognizeRequest}
 *
 * @param {object} options - A `StreamingRecognizeRequest` object. See
 *     [`StreamingRecognizeRequest`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.StreamingRecognizeRequest).
 * @param {object} options.streamingConfig - A `StreamingRecognitionConfig` object. See
 *     [`StreamingRecognitionConfig`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.StreamingRecognitionConfig).
 * @param {object} options.streamingConfig.config - A `RecognitionConfig` object. See
 *     [`RecognitionConfig`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig).
 * @param {string} options.streamingConfig.config.encoding - Encoding of audio data sent in all `RecognitionAudio` messages. See
 *     [`RecognitionConfig.encoding`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {number} options.streamingConfig.config.sampleRate - Sample rate in Hertz of the audio data sent in all RecognitionAudio messages. See
 *     [`RecognitionConfig.sampleRate`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {string=} options.streamingConfig.config.languageCode - The language of the supplied
 *     audio as a BCP-47 language tag. Example: "en-GB" https://www.rfc-editor.org/rfc/bcp/bcp47.txt
 *     If omitted, defaults to "en-US". See
 *     [`RecognitionConfig.languageCode`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {number=} options.streamingConfig.config.maxAlternatives - Default: `1`. See
 *     [`RecognitionConfig.maxAlternatives`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {boolean=} options.streamingConfig.config.profanityFilter - Default: `false`. See
 *     [`RecognitionConfig.profanityFilter`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {string[]=} options.streamingConfig.config.speechContext - Default: `[]`. See
 *     [`RecognitionConfig.speechContext`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {boolean=} options.streamingConfig.singleUtterance - Default: `false`. See
 *     [`StreamingRecognitionConfig.singleUtterance`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.StreamingRecognitionConfig.FIELDS).
 * @param {boolean=} options.streamingConfig.interimResults - Default: `false`. See
 *     [`StreamingRecognitionConfig.interimResults`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.StreamingRecognitionConfig.FIELDS).
 * @returns {object} Readable and writable stream.
 *
 * @example
 * var fs = require('fs');
 * var through = require('through2');
 * var toRecognizeRequest = through.obj(function(chunk, encoding, done) {
 *   done(null, {
 *     audioContent: chunk
 *   });
 * });
 *
 * // See the link in the parameters for `StreamingRecognizeRequest`.
 * var streamingRecognizeRequest = {
 *   streamingConfig: {
 *     config: {
 *       encoding: 'LINEAR16',
 *       sampleRate: 16000
 *     },
 *     singleUtterance: false,
 *     interimResults: false
 *   }
 * };
 *
 * var recognizeStream = speech.createRecognizeStream(streamingRecognizeRequest)
 *   .on('data', function (apiResponse) {
 *     console.log(apiResponse);
 *   });
 *
 * // See the link for `RecognitionAudio`.
 * fs.createReadStream('./system-test/data/bridge.raw')
 *   .pipe(toRecognizeRequest)
 *   .pipe(recognizeStream);
 * fs.createReadStream('./system-test/data/spain.raw')
 *   .pipe(toRecognizeRequest)
 *   .pipe(recognizeStream);
 */
Speech.prototype.createRecognizeStream = function(reqOpts) {
  var protoOpts = {
    service: 'Speech',
    method: 'streamingRecognize'
  };

  var stream = this.requestWritableStream(protoOpts);
  stream.write(reqOpts);
  return stream;
};

/**
 * Perform bidirectional streaming speech-recognition: receive results while
 * sending audio.
 *
 * <h4>API simplifications</h4>
 *
 * This method returns a simplified response. For the response in the original
 * format, review the `apiResponse` argument your callback receives.
 *
 * @resource [`StreamingRecognize` API Reference]{@link https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.Speech.StreamingRecognize}
 * @resource [`StreamingRecognizeRequest` API Reference]{@link https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.StreamingRecognizeRequest}
 *
 * @param {object} options - A `StreamingRecognitionConfig` object. See
 *     [`StreamingRecognitionConfig`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.StreamingRecognitionConfig).
 * @param {object} options.config - A `RecognitionConfig` object. See
 *     [`RecognitionConfig`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig).
 * @param {string} options.config.encoding - Encoding of audio data sent in all `RecognitionAudio` messages. See
 *     [`RecognitionConfig.encoding`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {number} options.config.sampleRate - Sample rate in Hertz of the audio data sent in all `RecognitionAudio` messages. See
 *     [`RecognitionConfig.sampleRate`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {string=} options.config.languageCode - The language of the supplied
 *     audio as a BCP-47 language tag. Example: "en-GB" https://www.rfc-editor.org/rfc/bcp/bcp47.txt
 *     If omitted, defaults to "en-US". See
 *     [`RecognitionConfig.languageCode`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {number=} options.config.maxAlternatives - Default: `1`. See
 *     [`RecognitionConfig.maxAlternatives`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {boolean=} options.config.profanityFilter - Default: `false`. See
 *     [`RecognitionConfig.profanityFilter`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {string[]=} options.config.speechContext - Default: `[]`. See
 *     [`RecognitionConfig.speechContext`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig.FIELDS).
 * @param {boolean=} options.singleUtterance - Default: `false`. See
 *     [`StreamingRecognitionConfig.singleUtterance`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.StreamingRecognitionConfig.FIELDS).
 * @param {boolean=} options.interimResults - Default: `false`. See
 *     [`StreamingRecognitionConfig.interimResults`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.StreamingRecognitionConfig.FIELDS).
 * @returns {object} Readable and writable stream.
 *
 * @example
 * var fs = require('fs');
 *
 * // See the link in the parameters for `RecognizeRequest`.
 * var streamingConfig = {
 *   config: {
 *     encoding: 'LINEAR16',
 *     sampleRate: 16000
 *   },
 *   singleUtterance: false,
 *   interimResults: false
 * };
 *
 * var recognizeStream = speech.createDetectStream(streamingConfig)
 *   .on('data', function (speechRecognitionAlternatives) {
 *     console.log(speechRecognitionAlternatives);
 *   });
 *
 * fs.createReadStream('./system-test/data/bridge.raw', { end: false })
 *   .pipe(recognizeStream);
 * fs.createReadStream('./system-test/data/spain.raw', { end: false })
 *   .pipe(recognizeStream);
 */
Speech.prototype.createDetectStream = function(reqOpts) {
  // Transform stream to turn user data into RecognizeRequest objects
  var toRecognizeRequestStream = through.obj(function(chunk, encoding, done) {
    done(null, {
      audioContent: chunk
    });
  });
  // Transform stream to simplify the results
  var toResponseStream = through.obj(
    function(chunk, encoding, done) {
      done(null, chunk);
    }
  );

  // The GRPC stream
  var recognizeStream = this.createRecognizeStream({
    streamingConfig: reqOpts
  });

  // The simplified user stream
  var detectStream = duplexify.obj(
    toRecognizeRequestStream,
    toResponseStream
  );

  // Forward metadata to the user stream
  recognizeStream.on('response', function(chunk) {
    detectStream.emit('response', chunk);
  });

  // Transform user data into RecognizeRequest objects
  toRecognizeRequestStream.pipe(recognizeStream);

  // Transform recognition results to a simpler form
  recognizeStream.pipe(toResponseStream);

  return detectStream;
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
Speech.prototype.operation = function(options) {
  if (is.string(options)) {
    options = {
      name: options
    };
  }
  if (!options || !options.name) {
    throw new Error('A name must be specified for an operation.');
  }
  var operation = new Operation(this, options);
  if (operation.response && is.string(operation.response.value)) {
    var decode = this.protos.Speech.AsyncRecognizeResponse.decode;
    operation.response = decode(operation.response.value);
  }
  return operation;
};

/**
 * Determine the type of file the user is asking to be processed. If a
 * {module:storage/file}, convert to its "gs://{bucket}/{file}" URL. If a remote
 * URL, read the contents. If a file path, load the file.
 *
 * @private
 */
Speech.findFiles_ = function(files, callback) {
  var MAX_PARALLEL_LIMIT = 5;
  files = arrify(files);

  function findFile(file, callback) {
    if (file instanceof File) {
      callback(null, {
        uri: format('gs://{bucketName}/{fileName}', {
          bucketName: file.bucket.name,
          fileName: file.name
        })
      });

      return;
    }

    if (is.string(file) && file.indexOf('gs://') === 0) {
      callback(null, {
        uri: file
      });

      return;
    }

    // File is a URL.
    if (/^http/.test(file)) {
      request({
        method: 'GET',
        uri: file
      })
        .on('error', function(err) {
          callback(err);
        })
        .pipe(concat(function(data) {
          callback(null, { content: data });
        }));

      return;
    }

    // File exists on disk.
    fs.readFile(file, function(err, contents) {
      if (err) {
        callback(err);
        return;
      }

      callback(null, { content: contents });
    });
  }

  async.mapLimit(files, MAX_PARALLEL_LIMIT, findFile, callback);
};

/**
 * Guesses the AudioEncoding from the file's extension.
 *
 * @param {string} filename - The name of the file.
 * @returns {string} The audio encoding.
 * @private
 * @see https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#audioencoding
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
