// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const gapicConfig = require('./text_to_speech_client_config');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * Service that implements Google Cloud Text-to-Speech API.
 *
 * @class
 * @memberof v1beta1
 */
class TextToSpeechClient {
  /**
   * Construct an instance of TextToSpeechClient.
   *
   * @param {object} [options] - The configuration object. See the subsequent
   *   parameters for more details.
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {function} [options.promise] - Custom promise module to use instead
   *     of native Promises.
   * @param {string} [options.servicePath] - The domain name of the
   *     API remote host.
   */
  constructor(opts) {
    this._descriptors = {};

    // Ensure that options include the service address and port.
    opts = Object.assign(
      {
        clientConfig: {},
        port: this.constructor.port,
        servicePath: this.constructor.servicePath,
      },
      opts
    );

    // Create a `gaxGrpc` object, with any grpc-specific options
    // sent to the client.
    opts.scopes = this.constructor.scopes;
    var gaxGrpc = gax.grpc(opts);

    // Save the auth object to the client, for use by other methods.
    this.auth = gaxGrpc.auth;

    // Determine the client header string.
    var clientHeader = [
      `gl-node/${process.version}`,
      `grpc/${gaxGrpc.grpcVersion}`,
      `gax/${gax.version}`,
      `gapic/${VERSION}`,
    ];
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }

    // Load the applicable protos.
    var protos = merge(
      {},
      gaxGrpc.loadProto(
        path.join(__dirname, '..', '..', 'protos'),
        'google/cloud/texttospeech/v1beta1/cloud_tts.proto'
      )
    );

    // Put together the default options sent with requests.
    var defaults = gaxGrpc.constructSettings(
      'google.cloud.texttospeech.v1beta1.TextToSpeech',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.texttospeech.v1beta1.TextToSpeech.
    var textToSpeechStub = gaxGrpc.createStub(
      protos.google.cloud.texttospeech.v1beta1.TextToSpeech,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    var textToSpeechStubMethods = ['listVoices', 'synthesizeSpeech'];
    for (let methodName of textToSpeechStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        textToSpeechStub.then(
          stub =>
            function() {
              var args = Array.prototype.slice.call(arguments, 0);
              return stub[methodName].apply(stub, args);
            }
        ),
        defaults[methodName],
        null
      );
    }
  }

  /**
   * The DNS address for this API service.
   */
  static get servicePath() {
    return 'texttospeech.googleapis.com';
  }

  /**
   * The port for this API service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   */
  static get scopes() {
    return ['https://www.googleapis.com/auth/cloud-platform'];
  }

  /**
   * Return the project ID used by this class.
   * @param {function(Error, string)} callback - the callback to
   *   be called with the current project Id.
   */
  getProjectId(callback) {
    return this.auth.getProjectId(callback);
  }

  // -------------------
  // -- Service calls --
  // -------------------

  /**
   * Returns a list of Voice
   * supported for synthesis.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} [request.languageCode]
   *   Optional (but recommended)
   *   [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. If
   *   specified, the ListVoices call will only return voices that can be used to
   *   synthesize this language_code. E.g. when specifying "en-NZ", you will get
   *   supported "en-*" voices; when specifying "no", you will get supported
   *   "no-*" (Norwegian) and "nb-*" (Norwegian Bokmal) voices; specifying "zh"
   *   will also get supported "cmn-*" voices; specifying "zh-hk" will also get
   *   supported "yue-*" voices.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ListVoicesResponse]{@link google.cloud.texttospeech.v1beta1.ListVoicesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ListVoicesResponse]{@link google.cloud.texttospeech.v1beta1.ListVoicesResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const textToSpeech = require('text-to-speech.v1beta1');
   *
   * var client = new textToSpeech.v1beta1.TextToSpeechClient({
   *   // optional auth parameters.
   * });
   *
   *
   * client.listVoices({})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listVoices(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listVoices(request, options, callback);
  }

  /**
   * Synthesizes speech synchronously: receive results after all text input
   * has been processed.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.input
   *   Required. The Synthesizer requires either plain text or SSML as input.
   *
   *   This object should have the same structure as [SynthesisInput]{@link google.cloud.texttospeech.v1beta1.SynthesisInput}
   * @param {Object} request.voice
   *   Required. The desired voice of the synthesized audio.
   *
   *   This object should have the same structure as [VoiceSelectionParams]{@link google.cloud.texttospeech.v1beta1.VoiceSelectionParams}
   * @param {Object} request.audioConfig
   *   Required. The configuration of the synthesized audio.
   *
   *   This object should have the same structure as [AudioConfig]{@link google.cloud.texttospeech.v1beta1.AudioConfig}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [SynthesizeSpeechResponse]{@link google.cloud.texttospeech.v1beta1.SynthesizeSpeechResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [SynthesizeSpeechResponse]{@link google.cloud.texttospeech.v1beta1.SynthesizeSpeechResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const textToSpeech = require('text-to-speech.v1beta1');
   *
   * var client = new textToSpeech.v1beta1.TextToSpeechClient({
   *   // optional auth parameters.
   * });
   *
   * var input = {};
   * var voice = {};
   * var audioConfig = {};
   * var request = {
   *   input: input,
   *   voice: voice,
   *   audioConfig: audioConfig,
   * };
   * client.synthesizeSpeech(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  synthesizeSpeech(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.synthesizeSpeech(request, options, callback);
  }
}

module.exports = TextToSpeechClient;
