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

'use strict';


/**
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
   *   [StreamingRecognizeRequest]{@link StreamingRecognizeRequest}-like
   *   objects for the write() method, and will emit objects representing
   *   [StreamingRecognizeResponse]{@link StreamingRecognizeResponse} on the
   *   'data' event asynchronously.
   *
   * @example
   *
   * var client = speechV1.speechClient();
   * var stream = client.streamingRecognize({
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

    var stream = this._streamingRecognize(options);

    // Write the initial configuration to the stream, then return it.
    stream.write({streamingConfig: config});
    return stream;
  };

  // Done; return the dictionary of methods.
  return methods;
};
