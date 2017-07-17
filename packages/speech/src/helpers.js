/*!
 * Copyright 2017 Google Inc. All Rights Reserved.
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
 * @module speech/helpers
 */

'use strict';

var pumpify = require('pumpify');
var streamEvents = require('stream-events');
var through = require('through2');

/*!
 * Return a dictionary-like object with helpers to augment the Speech
 * GAPIC.
 *
 * @return {Object} - An object with keys and functions which are placed
 *   onto the pure GAPIC.
 */
module.exports = () => {
  var methods = {};

  /**
   * Performs bidirectional streaming speech recognition: receive results while
   * sending audio. This method is only available via the gRPC API (not REST).
   *
   * @param {Object} config
   *   The configuration for the stream. This is appropriately wrapped and
   *   sent as the first argument. It should be an object conforming to the
   *   [StreamingRecognitionConfig]{@link StreamingRecognitionConfig}
   *   structure.
   * @param {Object=} options
   *   Optional parameters. You can override the default settings for this
   *   call, e.g, timeout, retries, paginations, etc. See
   *   [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions}
   *   for the details.
   * @returns {Stream}
   *   An object stream which is both readable and writable. It accepts
   *   raw audio for the write() method, and will emit objects representing
   *   [StreamingRecognizeResponse]{@link StreamingRecognizeResponse} on the
   *   'data' event asynchronously.
   *
   * @example
   *
   * var stream = speech.streamingRecognize({
   *   config: {
   *     encoding: 'LINEAR16',
   *     languageCode: 'en-us',
   *     sampleRateHertz: 44100,
   *   },
   * }).on('data', function(response) {
   *   // doThingsWith(response);
   * });
   * var request = {};
   * // Write request objects.
   * stream.write(request);
   */
  methods.streamingRecognize = function(config, options) {
    if (options === undefined) {
      options = {};
    }

    var requestStream = this._streamingRecognize(options);

    // Format the audio content as input request for pipeline
    var recognizeStream = streamEvents(pumpify.obj());

    // Attach the events to the request stream, but only do so
    // when the first write (of data) comes in.
    //
    // This also means that the sending of the initial request (with the
    // config) is delayed until we get the first burst of data.
    recognizeStream.once('writing', () => {
      requestStream.on('error', err => {
        recognizeStream.destroy(err);
      });

      // Responses must be explicitly forwarded.
      requestStream.on('response', response => {
        recognizeStream.emit('response', response);
      });

      // Write the initial configuration to the stream.
      requestStream.write({
        streamingConfig: config
      });

      // Set up appropriate piping between the stream returned by
      // the underlying API method and the one that we return.
      recognizeStream.setPipeline([
        // Format the user's input.
        // This entails that the user sends raw audio; it is wrapped in
        // the appropriate request structure.
        through.obj((obj, _, next) => {
          next(null, {
            audioContent: obj
          });
        }),
        requestStream,
        through.obj()
      ]);
    });

    return recognizeStream;
  };

  return methods;
};
