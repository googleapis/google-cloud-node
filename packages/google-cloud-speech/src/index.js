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
var commonGrpc = require('@google-cloud/common-grpc');
var eventsIntercept = require('events-intercept');
var extend = require('extend');
var format = require('string-format-obj');
var fs = require('fs');
var googleProtoFiles = require('google-proto-files');
var is = require('is');
var path = require('path');
var prop = require('propprop');
var pumpify = require('pumpify');
var request = require('request');
var streamEvents = require('stream-events');
var through = require('through2');
var util = require('util');
var v1 = require('./v1');

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

  options = extend({}, options, {
    libName: 'gccl',
    libVersion: require('../package.json').version
  });

  this.api = {
    Speech: v1(options).speechClient(options)
  };

  var config = {
    baseUrl: 'speech.googleapis.com',
    projectIdRequired: false,
    service: 'speech',
    protoServices: {
      Operations: {
        path: googleProtoFiles('longrunning', 'operations.proto'),
        service: 'longrunning'
      }
    },
    scopes: [
      'https://www.googleapis.com/auth/cloud-platform'
    ],
    packageJson: require('../package.json')
  };

  commonGrpc.Service.call(this, config, options);
}

util.inherits(Speech, commonGrpc.Service);

/**
 * The event types that the Speech API will return while processing a
 * {module:speech#createRecognizeStream} request. You can track the progress of
 * audio recognition by comparing the `data.eventType` property with these
 * values.
 *
 *   - `Speech.eventTypes.ENDPOINTER_EVENT_UNSPECIFIED`: No event specified.
 *   - `Speech.eventTypes.END_OF_SINGLE_UTTERANCE`: This event is only sent when
 *     `config.singleUtterance` passed to {module:speech#createRecognizeStream}
 *     is `true`. It indicates that the server has detected the end of the
 *     user's speech utterance and expects no additional speech. Therefore, the
 *     server will not process additional audio. The client should stop sending
 *     additional audio data.
 *
 * @type {object}
 */
Speech.eventTypes =
Speech.prototype.eventTypes = {
  END_OF_SINGLE_UTTERANCE: 'END_OF_SINGLE_UTTERANCE',
  ENDPOINTER_EVENT_UNSPECIFIED: 'ENDPOINTER_EVENT_UNSPECIFIED'
};

/**
 * Guess the audio encoding from the file's extension.
 *
 * @resource [AudioEncoding API Documentation]{@link https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#audioencoding}
 * @private
 *
 * @throws {Error} If an encoding type could not be determined from the file's
 *     extension.
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
    default: {
      throw new Error('Encoding could not be determined for file: ' + filename);
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
  if (global.GCLOUD_SANDBOX_ENV) {
    callback(null, {
      content: new Buffer('')
    });
    return;
  }

  if (common.util.isCustomType(file, 'storage/file')) {
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
    // File is a Cloud Storage URI.
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

  if (Buffer.isBuffer(file)) {
    callback(null, {
      content: file
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
 * @resource [SpeechRecognitionResult API Documentation]{@link https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.SpeechRecognitionResult}
 * @resource [StreamingRecognitionResult API Documentation]{@link https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.StreamingRecognitionResult}
 *
 * @private
 *
 * @param {object} resultSets - A `SpeechRecognitionResult` or
 *     `StreamingRecognitionResult` object.
 * @param {boolean} verbose - Whether to use verbose mode.
 * @return {object} - The simplified results.
 *
 * @example
 * var resultSets = [
 *   {
 *     alternatives: [
 *       {
 *         transcript: 'Result 1a',
 *         confidence: 0.70
 *       },
 *       {
 *         transcript: 'Result 1b',
 *         confidence: 0.60
 *       },
 *       ...
 *     ]
 *   },
 *   {
 *     alternatives: [
 *       {
 *         transcript: 'Result 2a',
 *         confidence: 0.90
 *       },
 *       {
 *         transcript: 'Result 2b',
 *         confidence: 0.80
 *       },
 *       ...
 *     ]
 *   }
 * ];
 *
 * //-
 * // Default output.
 * //-
 * Speech.formatResults_(resultSets);
 * // 'Result 1a Result 2a'
 *
 * //-
 * // Verbose output.
 * //-
 * Speech.formatResults_(resultSets, true);
 * // [
 * //   {
 * //     transcript: 'Result 1a',
 * //     confidence: 70,
 * //     alternatives: [
 * //       {
 * //         transcript: 'Result 1b',
 * //         confidence: 60
 * //       },
 * //       ...
 * //     ]
 * //   },
 * //   {
 * //     transcript: 'Result 2a',
 * //     confidence: 90,
 * //     alternatives: [
 * //       {
 * //         transcript: 'Result 2b',
 * //         confidence: 80
 * //       },
 * //       ...
 * //     ]
 * //   }
 * // ]
 */
Speech.formatResults_ = function(resultSets, verboseMode) {
  function multiplyScores(result) {
    if (is.defined(result.confidence)) {
      result.confidence *= 100;
    }

    if (is.defined(result.stability)) {
      result.stability *= 100;
    }

    return result;
  }

  var verboseResultSets = resultSets
    .map(function(resultSet) {
      resultSet = extend(true, {}, resultSet);

      var mostProbableResult = multiplyScores(resultSet.alternatives.shift());

      resultSet.transcript = mostProbableResult.transcript;

      if (is.defined(mostProbableResult.confidence)) {
        resultSet.confidence = mostProbableResult.confidence;
      }

      if (is.defined(mostProbableResult.stability)) {
        resultSet.stability = mostProbableResult.stability;
      }

      resultSet.alternatives = resultSet.alternatives.map(multiplyScores);

      return resultSet;
    });

  if (!verboseMode) {
    return verboseResultSets.map(prop('transcript')).join(' ');
  }

  return verboseResultSets;
};

/**
 * Perform bidirectional streaming speech-recognition: receive results while
 * sending audio.
 *
 * Each emitted `data` event is a
 * [`StreamingRecognizeResponse`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#streamingrecognizeresponse)
 * object, containing these properties:
 *
 *   - **`eventType`** See {module:speech#eventTypes}.
 *   - **`results`** By default, a combined string of transcripts. When
 *     `config.verbose` is enabled, this is an object including a `transcript`
 *     property, a `confidence` score from `0` - `100`, and an `alternatives`
 *     array consisting of other transcription possibilities.
 *
 * Cloud Speech sets the limits for the audio duration. For more
 * information, see
 * [Content Limits]{@link https://cloud.google.com/speech/limits#content}.
 *
 * @resource [StreamingRecognize API Reference]{@link https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.Speech.StreamingRecognize}
 * @resource [StreamingRecognizeRequest API Reference]{@link https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.StreamingRecognizeRequest}
 * @resource [Content Limits]{@link https://cloud.google.com/speech/limits#content}
 *
 * @param {object} config - A `StreamingRecognitionConfig` object. See
 *     [`StreamingRecognitionConfig`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.StreamingRecognitionConfig).
 * @param {string} config.languageCode - The language of the supplied audio as
*     [BCP-47 language tag](http://bit.ly/1ZHeENX). Example: 'en-US'.
 * @param {number=} config.timeout - In seconds, the amount of time before the
 *     underlying API request times out. The default value, `190`, is sufficient
 *     for audio input of 60 seconds or less. If your input is longer, consider
 *     using a higher timeout value.
 * @param {boolean=} config.verbose - Enable verbose mode for a more detailed
 *     response. See the examples below. Default: `false`.
 *
 * @example
 * var fs = require('fs');
 *
 * //-
 * // See <a href="https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.StreamingRecognizeRequest">
 * // `StreamingRecognizeRequest`</a> for all of the available configuration
 * // options.
 * //-
 * var request = {
 *   config: {
 *     encoding: 'LINEAR16',
 *     languageCode: 'en-US',
 *     sampleRateHertz: 16000
 *   },
 *   singleUtterance: false,
 *   interimResults: false
 * };
 *
 * fs.createReadStream('./bridge.raw')
 *   .on('error', console.error)
 *   .pipe(speech.createRecognizeStream(request))
 *   .on('error', console.error)
 *   .on('data', function(data) {
 *     // data.results = "how old is the Brooklyn Bridge"
 *   });
 *
 * //-
 * // Enable verbose mode for more detailed results.
 * //-
 * var request = {
 *   config: {
 *     encoding: 'LINEAR16',
 *     languageCode: 'en-US',
 *     sampleRateHertz: 16000
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
 *     // data.results = "how old is the Brooklyn Bridge"
 *   });
 */
Speech.prototype.createRecognizeStream = function(config) {
  var self = this;

  if (!config) {
    throw new Error('A recognize request requires a configuration object.');
  }

  // As of Speech v1, a language code is required; throw an exception if we
  // did not receive one.
  //
  // This is expected within a nested config, but in the interest of user
  // sanity, accept it in the outer config object.
  config.config = config.config || {};
  if (config.languageCode) {
    config.config.languageCode = config.languageCode;
    delete config.languageCode;
  }
  if (is.undefined(config.config.languageCode)) {
    throw new Error('A `languageCode` is required in the config object.');
  }

  var verboseMode = config.verbose === true;
  delete config.verbose;

  var gaxOptions = {};

  if (is.number(config.timeout)) {
    gaxOptions.timeout = config.timeout * 1000;
    delete config.timeout;
  }

  var recognizeStream = streamEvents(pumpify.obj());

  recognizeStream.once('writing', function() {
    var requestStream = self.api.Speech.streamingRecognize(gaxOptions);

    requestStream.on('error', function(err) {
      recognizeStream.destroy(err);
    });

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
 * @returns {module:commonGrpc/Operation}
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

  return new commonGrpc.Operation(this, name);
};

/**
 * Perform synchronous speech recognition and receive results after all audio
 * has been sent and processed. This is ideal for files 1 MB or below. For
 * larger files, you will need to use {module:speech#startRecognition} or
 * {module:speech#createRecognizeStream}.
 *
 * @resource [Recognize API Reference]{@link https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.Speech.Recognize}
 * @resource [RecognizeRequest API Reference]{@link https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognizeRequest}
 *
 * @param {string|object|module:storage/file} file - The source file to run the
 *     detection on. It can be either a local file path, a remote file URL, a
 *     Cloud Storage URI, a Cloud Storage File object, or a
 *     [`RecognitionAudio`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionAudio)
 *     object.
 * @param {object} config - A `RecognitionConfig` object. See
 *     [`RecognitionConfig`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1beta1.RecognitionConfig).
 * @param {string} config.languageCode - The language of the supplied audio as
 *     [BCP-47 language tag](http://bit.ly/1ZHeENX). Example: 'en-US'.
 * @param {boolean=} config.verbose - Enable verbose mode for a more detailed
 *     response. See the examples below. Default: `false`.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {string|object[]} callback.results - By default, this will be a string
 *     comprised of all of the transcriptions recognized from the audio. If
 *     `config.verbose` is enabled, this is an object including a `transcript`
 *     property, a `confidence` score from `0` - `100`, and an `alternatives`
 *     array consisting of other transcription possibilities. See the examples
 *     below for more.
 * @param {object} callback.apiResponse - Raw API response. See
 *     [`RecognizeResponse`](https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#recognizeresponse).
 *
 * @example
 * var config = {
 *   encoding: 'LINEAR16',
 *   languageCode: 'en-US',
 *   sampleRateHertz: 16000
 * };
 *
 * function callback(err, transcript, apiResponse) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // transcript = "how old is the Brooklyn Bridge"
 * }
 *
 * //-
 * // Run speech detection over a local file.
 * //-
 * speech.recognize('./bridge.raw', config, callback);
 *
 * //-
 * // Run speech recognition over a file in Cloud Storage.
 * //-
 * speech.recognize('gs://your-bucket-name/bridge.raw', config, callback);
 *
 * //-
 * // Run speech recognition over raw file contents.
 * //-
 * speech.recognize({
 *   content: fs.readFileSync('./bridge.raw')
 * }, config, callback);
 *
 * //-
 * // Run speech recognition over a remote file.
 * //
 * // <em>Note: This is not an officially supported feature of the Speech API.
 * // This library will make a request to the URL given and send the file
 * // contents to the upstream API.</em>
 * //-
 * speech.recognize('https://example.com/files/bridge.raw', config, callback);
 *
 * //-
 * // Enable verbose mode for more detailed results.
 * //-
 * var config = {
 *   encoding: 'LINEAR16',
 *   languageCode: 'en-US',
 *   sampleRateHertz: 16000,
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
 *   //     confidence: 88.15,
 *   //     alternatives: [
 *   //       {
 *   //         transcript: "how old is the Brooklyn brim",
 *   //         confidence: 22.39
 *   //       }
 *   //     ]
 *   //   }
 *   // ]
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * speech.recognize('./bridge.raw', config).then(function(data) {
 *   var results = data[0];
 *   var apiResponse = data[1];
 * });
 */
Speech.prototype.recognize = function(file, config, callback) {
  var self = this;

  if (!is.object(config)) {
    throw new Error('A recognize request requires a configuration object.');
  }

  // As of Speech v1, a language code is required; throw an exception if we
  // did not receive one.
  if (is.undefined(config.languageCode)) {
    throw new Error('A `languageCode` is required in the config object.');
  }

  if (!config.encoding) {
    config.encoding = Speech.detectEncoding_(file);
  }

  var verboseMode = config.verbose === true;
  delete config.verbose;

  Speech.findFile_(file, function(err, foundFile) {
    if (err) {
      callback(err);
      return;
    }

    self.api.Speech.recognize({
      config: config,
      audio: foundFile
    }, function(err, resp) {
      if (err) {
        callback(err, null, resp);
        return;
      }

      var results = Speech.formatResults_(resp.results, verboseMode);

      callback(null, results, resp);
    });
  });
};

/**
 * Perform asynchronous speech recognition.
 *
 * This method sends audio to the Speech API, which immediately responds with an
 * Operation object. Register event handlers for the "error" and "complete"
 * events to see how the operation finishes. Follow along with the examples
 * below.
 *
 * @resource [LongRunningRecognize API Reference]{@link https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1.Speech.LongRunningRecognize}
 * @resource [LongRunningRecognize API Reference]{@link https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1.LongRunningRecognizeRequest}
 * @resource [LongRunningRecognize API Reference]{@link https://cloud.google.com/speech/reference/rpc/google.cloud.speech.v1beta1#google.cloud.speech.v1.LongRunningRecognizeResponse}
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
 * @param {string} config.languageCode - The language of the supplied audio as
 *     [BCP-47 language tag](http://bit.ly/1ZHeENX). Example: 'en-US'.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:speech/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - Raw API response.
 *
 * @example
 * var config = {
 *   encoding: 'LINEAR16',
 *   languageCode: 'en-US',
 *   sampleRateHertz: 16000
 * };
 *
 * function callback(err, operation, apiResponse) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   operation
 *     .on('error', function(err) {})
 *     .on('complete', function(transcript) {
 *       // transcript = "how old is the Brooklyn Bridge"
 *     });
 * }
 *
 * //-
 * // Run speech detection over a local file.
 * //-
 * speech.startRecognition('./bridge.raw', config, callback);
 *
 * //-
 * // Run speech detection over a file in Cloud Storage.
 * //-
 * var file = 'gs://your-bucket-name/bridge.raw';
 * speech.startRecognition(file, config, callback);
 *
 * //-
 * // Run speech detection over raw file contents.
 * //-
 * speech.startRecognition({
 *   content: fs.readFileSync('./bridge.raw')
 * }, config, callback);
 *
 * //-
 * // Run speech detection over a remote file.
 * //
 * // <em>Note: This is not an officially supported feature of the Speech API.
 * // This library will make a request to the URL given and send the file
 * // contents to the upstream API.</em>
 * //-
 * var file = 'https://example.com/files/bridge.raw';
 *
 * speech.startRecognition(file, config, callback);
 *
 * //-
 * // Enable verbose mode for more detailed results.
 * //-
 * var config = {
 *   encoding: 'LINEAR16',
 *   languageCode: 'en-US',
 *   sampleRateHertz: 16000,
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
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * speech.startRecognition('./bridge.raw', config).then(function(data) {
 *   var operation = data[0];
 *   var apiResponse = data[1];
 * });
 */
Speech.prototype.startRecognition = function(file, config, callback) {
  var self = this;

  // As of Speech v1, a language code is required; throw an exception if we
  // did not receive one.
  if (is.undefined(config.languageCode)) {
    throw new Error('A `languageCode` is required in the config object.');
  }

  if (!config.encoding) {
    config.encoding = Speech.detectEncoding_(file);
  }

  var verboseMode = config.verbose === true;
  delete config.verbose;

  Speech.findFile_(file, function(err, foundFile) {
    if (err) {
      callback(err);
      return;
    }

    self.api.Speech.longRunningRecognize({
      config: config,
      audio: foundFile
    }, function(err, operation, resp) {
      if (err) {
        callback(err, null, resp);
        return;
      }

      eventsIntercept.patch(operation);
      operation.intercept('complete', function(result, meta, resp, callback) {
        callback(null, Speech.formatResults_(result.results, verboseMode));
      });

      callback(null, operation, resp);
    });
  });
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Speech, {
  exclude: ['operation']
});

module.exports = Speech;
module.exports.v1 = v1;
