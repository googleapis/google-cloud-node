// Copyright 2017, Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Note: this file is purely for documentation. Any contents are not expected
// to be loaded as the JS file.

/**
 * The request to detect user's intent.
 *
 * @property {string} session
 *   Required. The name of the session this query is sent to. Format:
 *   `projects/<Project ID>/agent/sessions/<Session ID>`.
 *   It's up to the API caller to choose an appropriate session ID. It can be
 *   a random number or some type of user identifier (preferably hashed).
 *   The length of the session ID must not exceed 36 bytes.
 *
 * @property {Object} queryParams
 *   Optional. The parameters of this query.
 *
 *   This object should have the same structure as [QueryParameters]{@link google.cloud.dialogflow.v2beta1.QueryParameters}
 *
 * @property {Object} queryInput
 *   Required. The input specification. It can be set to:
 *
 *   1.  an audio config
 *       which instructs the speech recognizer how to process the speech audio,
 *
 *   2.  a conversational query in the form of text, or
 *
 *   3.  an event that specifies which intent to trigger.
 *
 *   This object should have the same structure as [QueryInput]{@link google.cloud.dialogflow.v2beta1.QueryInput}
 *
 * @property {string} inputAudio
 *   Optional. The natural language speech audio to be processed. This field
 *   should be populated iff `query_input` is set to an input audio config.
 *   A single request can contain up to 1 minute of speech audio data.
 *
 * @typedef DetectIntentRequest
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.DetectIntentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/session.proto}
 */
var DetectIntentRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The message returned from the DetectIntent method.
 *
 * @property {string} responseId
 *   The unique identifier of the response. It can be used to
 *   locate a response in the training example set or for reporting issues.
 *
 * @property {Object} queryResult
 *   The results of the conversational query or event processing.
 *
 *   This object should have the same structure as [QueryResult]{@link google.cloud.dialogflow.v2beta1.QueryResult}
 *
 * @property {Object} webhookStatus
 *   Specifies the status of the webhook request. `webhook_status`
 *   is never populated in webhook requests.
 *
 *   This object should have the same structure as [Status]{@link google.rpc.Status}
 *
 * @typedef DetectIntentResponse
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.DetectIntentResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/session.proto}
 */
var DetectIntentResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Represents the parameters of the conversational query.
 *
 * @property {string} timeZone
 *   Optional. The time zone of this conversational query from the
 *   [time zone database](https://www.iana.org/time-zones), e.g.,
 *   America/New_York, Europe/Paris. If not provided, the time zone specified in
 *   agent settings is used.
 *
 * @property {Object} geoLocation
 *   Optional. The geo location of this conversational query.
 *
 *   This object should have the same structure as [LatLng]{@link google.type.LatLng}
 *
 * @property {Object[]} contexts
 *   Optional. The collection of contexts to be activated before this query is
 *   executed.
 *
 *   This object should have the same structure as [Context]{@link google.cloud.dialogflow.v2beta1.Context}
 *
 * @property {boolean} resetContexts
 *   Optional. Specifies whether to delete all contexts in the current session
 *   before the new ones are activated.
 *
 * @property {Object[]} sessionEntityTypes
 *   Optional. The collection of session entity types to replace or extend
 *   developer entities with for this query only. The entity synonyms apply
 *   to all languages.
 *
 *   This object should have the same structure as [SessionEntityType]{@link google.cloud.dialogflow.v2beta1.SessionEntityType}
 *
 * @property {Object} payload
 *   Optional. This field can be used to pass custom data into the webhook
 *   associated with the agent. Arbitrary JSON objects are supported.
 *
 *   This object should have the same structure as [Struct]{@link google.protobuf.Struct}
 *
 * @typedef QueryParameters
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.QueryParameters definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/session.proto}
 */
var QueryParameters = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Represents the query input. It can contain either:
 *
 * 1.  an audio config which
 *     instructs the speech recognizer how to process the speech audio,
 *
 * 2.  a conversational query in the form of text, or
 *
 * 3.  an event that specifies which intent to trigger.
 *
 * @property {Object} audioConfig
 *   Instructs the speech recognizer how to process the speech audio.
 *
 *   This object should have the same structure as [InputAudioConfig]{@link google.cloud.dialogflow.v2beta1.InputAudioConfig}
 *
 * @property {Object} text
 *   The natural language text to be processed.
 *
 *   This object should have the same structure as [TextInput]{@link google.cloud.dialogflow.v2beta1.TextInput}
 *
 * @property {Object} event
 *   The event to be processed.
 *
 *   This object should have the same structure as [EventInput]{@link google.cloud.dialogflow.v2beta1.EventInput}
 *
 * @typedef QueryInput
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.QueryInput definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/session.proto}
 */
var QueryInput = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Represents the result of conversational query or event processing.
 *
 * @property {string} queryText
 *   The original conversational query text:
 *   - If natural language text was provided as input, `query_text` contains
 *     a copy of the input.
 *   - If natural language speech audio was provided as input, `query_text`
 *     contains the speech recognition result. If speech recognizer produced
 *     multiple alternatives, a particular one is picked.
 *   - If an event was provided as input, `query_text` is not set.
 *
 * @property {number} speechRecognitionConfidence
 *   The confidence estimate between 0.0 and 1.0. A higher number
 *   indicates an estimated greater likelihood that the recognized words are
 *   correct. The default of 0.0 is a sentinel value indicating that confidence
 *   was not set. This field is populated if natural speech audio was provided
 *   as input.
 *
 * @property {string} action
 *   The action name from the matched intent.
 *
 * @property {Object} parameters
 *   The collection of extracted parameters.
 *
 *   This object should have the same structure as [Struct]{@link google.protobuf.Struct}
 *
 * @property {boolean} allRequiredParamsPresent
 *   This field is set to:
 *   - `false` if the matched intent has required parameters and not all of
 *      the required parameter values have been collected.
 *   - `true` if all required parameter values have been collected, or if the
 *      matched intent doesn't contain any required parameters.
 *
 * @property {string} fulfillmentText
 *   The text to be pronounced to the user or shown on the screen.
 *
 * @property {Object[]} fulfillmentMessages
 *   The collection of rich messages to present to the user.
 *
 *   This object should have the same structure as [Message]{@link google.cloud.dialogflow.v2beta1.Message}
 *
 * @property {string} webhookSource
 *   If the query was fulfilled by a webhook call, this field is set to the
 *   value of the `source` field returned in the webhook response.
 *
 * @property {Object} webhookPayload
 *   If the query was fulfilled by a webhook call, this field is set to the
 *   value of the `payload` field returned in the webhook response.
 *
 *   This object should have the same structure as [Struct]{@link google.protobuf.Struct}
 *
 * @property {Object[]} outputContexts
 *   The collection of output contexts. If applicable,
 *   `output_contexts.parameters` contains entries with name
 *   `<parameter name>.original` containing the original parameter values
 *   before the query.
 *
 *   This object should have the same structure as [Context]{@link google.cloud.dialogflow.v2beta1.Context}
 *
 * @property {Object} intent
 *   The intent that matched the conversational query. Some, not
 *   all fields are filled in this message, including but not limited to:
 *   `name`, `display_name` and `webhook_state`.
 *
 *   This object should have the same structure as [Intent]{@link google.cloud.dialogflow.v2beta1.Intent}
 *
 * @property {number} intentDetectionConfidence
 *   The intent detection confidence. Values range from 0.0
 *   (completely uncertain) to 1.0 (completely certain).
 *
 * @property {Object} diagnosticInfo
 *   The free-form diagnostic info. For example, this field
 *   could contain webhook call latency.
 *
 *   This object should have the same structure as [Struct]{@link google.protobuf.Struct}
 *
 * @typedef QueryResult
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.QueryResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/session.proto}
 */
var QueryResult = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The top-level message sent by the client to the
 * `StreamingDetectIntent` method.
 *
 * Multiple request messages should be sent in order:
 *
 * 1.  The first message must contain `session`, `query_input` plus optionally
 *     `query_params` and/or `single_utterance`. The message must not contain
 *     `input_audio`.
 *
 * 2.  If `query_input` was set to a streaming input audio config,
 *     all subsequent messages must contain only `input_audio`.
 *     Otherwise, finish the request stream.
 *
 * @property {string} session
 *   Required. The name of the session the query is sent to.
 *   Format of the session name:
 *   `projects/<Project ID>/agent/sessions/<Session ID>`.
 *   It’s up to the API caller to choose an appropriate <Session ID>. It can be
 *   a random number or some type of user identifier (preferably hashed).
 *   The length of the session ID must not exceed 36 characters.
 *
 * @property {Object} queryParams
 *   Optional. The parameters of this query.
 *
 *   This object should have the same structure as [QueryParameters]{@link google.cloud.dialogflow.v2beta1.QueryParameters}
 *
 * @property {Object} queryInput
 *   Required. The input specification. It can be set to:
 *
 *   1.  an audio config which instructs the speech recognizer how to process
 *       the speech audio,
 *
 *   2.  a conversational query in the form of text, or
 *
 *   3.  an event that specifies which intent to trigger.
 *
 *   This object should have the same structure as [QueryInput]{@link google.cloud.dialogflow.v2beta1.QueryInput}
 *
 * @property {boolean} singleUtterance
 *   Optional. If `true`, the recognizer will detect a single spoken utterance
 *   in input audio. When it detects that the user has paused or stopped
 *   speaking, it will cease recognition. This setting is ignored when
 *   `query_input` is a piece of text or an event.
 *
 * @property {string} inputAudio
 *   Optional. The input audio content to be recognized. Must be sent if
 *   `query_input` was set to a streaming input audio config. The complete audio
 *   over all streaming messages must not exceed 1 minute.
 *
 * @typedef StreamingDetectIntentRequest
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.StreamingDetectIntentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/session.proto}
 */
var StreamingDetectIntentRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The top-level message returned from the
 * `StreamingDetectIntent` method.
 *
 * Multiple response messages can be returned in order:
 *
 * 1.  If the input was set to streaming audio, the first one or more messages
 *     contain `recognition_result`. Each `recognition_result` represents a more
 *     complete transcript of what the user said. The last `recognition_result`
 *     has `is_final` set to `true`.
 *
 * 2.  The next message contains `response_id`, `query_result`
 *     and optionally `webhook_status` if a WebHook was called.
 *
 * @property {string} responseId
 *   The unique identifier of the response. It can be used to
 *   locate a response in the training example set or for reporting issues.
 *
 * @property {Object} recognitionResult
 *   The result of speech recognition.
 *
 *   This object should have the same structure as [StreamingRecognitionResult]{@link google.cloud.dialogflow.v2beta1.StreamingRecognitionResult}
 *
 * @property {Object} queryResult
 *   The result of the conversational query or event processing.
 *
 *   This object should have the same structure as [QueryResult]{@link google.cloud.dialogflow.v2beta1.QueryResult}
 *
 * @property {Object} webhookStatus
 *   Specifies the status of the webhook request.
 *
 *   This object should have the same structure as [Status]{@link google.rpc.Status}
 *
 * @typedef StreamingDetectIntentResponse
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.StreamingDetectIntentResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/session.proto}
 */
var StreamingDetectIntentResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Contains a speech recognition result corresponding to a portion of the audio
 * that is currently being processed or an indication that this is the end
 * of the single requested utterance.
 *
 * Example:
 *
 * 1.  transcript: "tube"
 *
 * 2.  transcript: "to be a"
 *
 * 3.  transcript: "to be"
 *
 * 4.  transcript: "to be or not to be"
 *     is_final: true
 *
 * 5.  transcript: " that's"
 *
 * 6.  transcript: " that is"
 *
 * 7.  recognition_event_type: `RECOGNITION_EVENT_END_OF_SINGLE_UTTERANCE`
 *
 * 8.  transcript: " that is the question"
 *     is_final: true
 *
 * Only two of the responses contain final results (#4 and #8 indicated by
 * `is_final: true`). Concatenating these generates the full transcript: "to be
 * or not to be that is the question".
 *
 * In each response we populate:
 *
 * *  for `MESSAGE_TYPE_TRANSCRIPT`: `transcript` and possibly `is_final`.
 *
 * *  for `MESSAGE_TYPE_END_OF_SINGLE_UTTERANCE`: only `event_type`.
 *
 * @property {number} messageType
 *   Type of the result message.
 *
 *   The number should be among the values of [MessageType]{@link google.cloud.dialogflow.v2beta1.MessageType}
 *
 * @property {string} transcript
 *   Transcript text representing the words that the user spoke.
 *   Populated if and only if `event_type` = `RECOGNITION_EVENT_TRANSCRIPT`.
 *
 * @property {boolean} isFinal
 *   If `false`, the `StreamingRecognitionResult` represents an
 *   interim result that may change. If `true`, the recognizer will not return
 *   any further hypotheses about this piece of the audio. May only be populated
 *   for `event_type` = `RECOGNITION_EVENT_TRANSCRIPT`.
 *
 * @typedef StreamingRecognitionResult
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.StreamingRecognitionResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/session.proto}
 */
var StreamingRecognitionResult = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Type of the response message.
   *
   * @enum {number}
   * @memberof google.cloud.dialogflow.v2beta1
   */
  MessageType: {

    /**
     * Not specified. Should never be used.
     */
    MESSAGE_TYPE_UNSPECIFIED: 0,

    /**
     * Message contains a (possibly partial) transcript.
     */
    TRANSCRIPT: 1,

    /**
     * Event indicates that the server has detected the end of the user's speech
     * utterance and expects no additional speech. Therefore, the server will
     * not process additional audio (although it may subsequently return
     * additional results). The client should stop sending additional audio
     * data, half-close the gRPC connection, and wait for any additional results
     * until the server closes the gRPC connection. This message is only sent if
     * `single_utterance` was set to `true`, and is not used otherwise.
     */
    END_OF_SINGLE_UTTERANCE: 2
  }
};

/**
 * Instructs the speech recognizer how to process the audio content.
 *
 * @property {number} audioEncoding
 *   Required. Audio encoding of the audio content to process.
 *
 *   The number should be among the values of [AudioEncoding]{@link google.cloud.dialogflow.v2beta1.AudioEncoding}
 *
 * @property {number} sampleRateHertz
 *   Required. Sample rate (in Hertz) of the audio content sent in the query.
 *   Refer to [Cloud Speech API documentation](https://cloud.google.com/speech/docs/basics) for more
 *   details.
 *
 * @property {string} languageCode
 *   Required. The language of the supplied audio. Dialogflow does not do
 *   translations. See [Language Support](https://docs.api.ai/docs/languages)
 *   for a list of the currently supported language codes.
 *   Note that queries in the same session do not necessarily need to specify
 *   the same language.
 *
 * @property {string[]} phraseHints
 *   Optional. The collection of phrase hints which are used to boost accuracy
 *   of speech recognition.
 *   Refer to [Cloud Speech API documentation](https://cloud.google.com/speech/docs/basics#phrase-hints)
 *   for more details.
 *
 * @typedef InputAudioConfig
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.InputAudioConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/session.proto}
 */
var InputAudioConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Represents the natural language text to be processed.
 *
 * @property {string} text
 *   Required. The UTF-8 encoded natural language text to be processed.
 *   Text length must not exceed 256 bytes.
 *
 * @property {string} languageCode
 *   Required. The language of this conversational query.
 *   Note that queries in the same session do not necessarily need to specify
 *   the same language.
 *
 * @typedef TextInput
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.TextInput definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/session.proto}
 */
var TextInput = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Events allow for matching intents by event name instead of the natural
 * language input. For instance, input `<event: { name: “welcome_event”,
 * parameters: { name: “Sam” } }>` can trigger a personalized welcome response.
 * The parameter `name` may be used by the agent in the response:
 * `“Hello #welcome_event.name! What can I do for you today?”`.
 *
 * @property {string} name
 *   Required. The unique identifier of the event.
 *
 * @property {Object} parameters
 *   Optional. The collection of parameters associated with the event.
 *
 *   This object should have the same structure as [Struct]{@link google.protobuf.Struct}
 *
 * @typedef EventInput
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.EventInput definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/session.proto}
 */
var EventInput = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Audio encoding of the audio content sent in the conversational query request.
 * Refer to the [Cloud Speech API documentation](https://cloud.google.com/speech/docs/basics) for more
 * details.
 *
 * @enum {number}
 * @memberof google.cloud.dialogflow.v2beta1
 */
var AudioEncoding = {

  /**
   * Not specified.
   */
  AUDIO_ENCODING_UNSPECIFIED: 0,

  /**
   * Uncompressed 16-bit signed little-endian samples (Linear PCM).
   */
  AUDIO_ENCODING_LINEAR_16: 1,

  /**
   * [`FLAC`](https://xiph.org/flac/documentation.html) (Free Lossless Audio
   * Codec) is the recommended encoding because it is lossless (therefore
   * recognition is not compromised) and requires only about half the
   * bandwidth of `LINEAR16`. `FLAC` stream encoding supports 16-bit and
   * 24-bit samples, however, not all fields in `STREAMINFO` are supported.
   */
  AUDIO_ENCODING_FLAC: 2,

  /**
   * 8-bit samples that compand 14-bit audio samples using G.711 PCMU/mu-law.
   */
  AUDIO_ENCODING_MULAW: 3,

  /**
   * Adaptive Multi-Rate Narrowband codec. `sample_rate_hertz` must be 8000.
   */
  AUDIO_ENCODING_AMR: 4,

  /**
   * Adaptive Multi-Rate Wideband codec. `sample_rate_hertz` must be 16000.
   */
  AUDIO_ENCODING_AMR_WB: 5,

  /**
   * Opus encoded audio frames in Ogg container
   * ([OggOpus](https://wiki.xiph.org/OggOpus)).
   * `sample_rate_hertz` must be 16000.
   */
  AUDIO_ENCODING_OGG_OPUS: 6,

  /**
   * Although the use of lossy encodings is not recommended, if a very low
   * bitrate encoding is required, `OGG_OPUS` is highly preferred over
   * Speex encoding. The [Speex](https://speex.org/) encoding supported by
   * Dialogflow API has a header byte in each block, as in MIME type
   * `audio/x-speex-with-header-byte`.
   * It is a variant of the RTP Speex encoding defined in
   * [RFC 5574](https://tools.ietf.org/html/rfc5574).
   * The stream is a sequence of blocks, one block per RTP packet. Each block
   * starts with a byte containing the length of the block, in bytes, followed
   * by one or more frames of Speex data, padded to an integral number of
   * bytes (octets) as specified in RFC 5574. In other words, each RTP header
   * is replaced with a single byte containing the block length. Only Speex
   * wideband is supported. `sample_rate_hertz` must be 16000.
   */
  AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE: 7
};