// Copyright 2020 Google LLC
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

// Note: this file is purely for documentation. Any contents are not expected
// to be loaded as the JS file.

/**
 * ============================================================================
 * Requests and responses for custom methods.
 * The request to detect user's intent.
 *
 * @property {string} session
 *   Required. The name of the session this query is sent to. Format:
 *   `projects/<Project ID>/agent/sessions/<Session ID>`. It's up to the API
 *   caller to choose an appropriate session ID. It can be a random number or
 *   some type of user identifier (preferably hashed). The length of the session
 *   ID must not exceed 36 bytes.
 *
 * @property {Object} queryParams
 *   Optional. The parameters of this query.
 *
 *   This object should have the same structure as [QueryParameters]{@link google.cloud.dialogflow.v2.QueryParameters}
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
 *   This object should have the same structure as [QueryInput]{@link google.cloud.dialogflow.v2.QueryInput}
 *
 * @property {Object} outputAudioConfig
 *   Optional. Instructs the speech synthesizer how to generate the output
 *   audio. If this field is not set and agent-level speech synthesizer is not
 *   configured, no output audio is generated.
 *
 *   This object should have the same structure as [OutputAudioConfig]{@link google.cloud.dialogflow.v2.OutputAudioConfig}
 *
 * @property {Buffer} inputAudio
 *   Optional. The natural language speech audio to be processed. This field
 *   should be populated iff `query_input` is set to an input audio config.
 *   A single request can contain up to 1 minute of speech audio data.
 *
 * @typedef DetectIntentRequest
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.DetectIntentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/session.proto}
 */
const DetectIntentRequest = {
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
 *   The selected results of the conversational query or event processing.
 *   See `alternative_query_results` for additional potential results.
 *
 *   This object should have the same structure as [QueryResult]{@link google.cloud.dialogflow.v2.QueryResult}
 *
 * @property {Object} webhookStatus
 *   Specifies the status of the webhook request.
 *
 *   This object should have the same structure as [Status]{@link google.rpc.Status}
 *
 * @property {Buffer} outputAudio
 *   The audio data bytes encoded as specified in the request.
 *   Note: The output audio is generated based on the values of default platform
 *   text responses found in the `query_result.fulfillment_messages` field. If
 *   multiple default text responses exist, they will be concatenated when
 *   generating audio. If no default platform text responses exist, the
 *   generated audio content will be empty.
 *
 * @property {Object} outputAudioConfig
 *   The config used by the speech synthesizer to generate the output audio.
 *
 *   This object should have the same structure as [OutputAudioConfig]{@link google.cloud.dialogflow.v2.OutputAudioConfig}
 *
 * @typedef DetectIntentResponse
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.DetectIntentResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/session.proto}
 */
const DetectIntentResponse = {
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
 *   This object should have the same structure as [Context]{@link google.cloud.dialogflow.v2.Context}
 *
 * @property {boolean} resetContexts
 *   Optional. Specifies whether to delete all contexts in the current session
 *   before the new ones are activated.
 *
 * @property {Object[]} sessionEntityTypes
 *   Optional. Additional session entity types to replace or extend developer
 *   entity types with. The entity synonyms apply to all languages and persist
 *   for the session of this query.
 *
 *   This object should have the same structure as [SessionEntityType]{@link google.cloud.dialogflow.v2.SessionEntityType}
 *
 * @property {Object} payload
 *   Optional. This field can be used to pass custom data into the webhook
 *   associated with the agent. Arbitrary JSON objects are supported.
 *
 *   This object should have the same structure as [Struct]{@link google.protobuf.Struct}
 *
 * @property {Object} sentimentAnalysisRequestConfig
 *   Optional. Configures the type of sentiment analysis to perform. If not
 *   provided, sentiment analysis is not performed.
 *
 *   This object should have the same structure as [SentimentAnalysisRequestConfig]{@link google.cloud.dialogflow.v2.SentimentAnalysisRequestConfig}
 *
 * @typedef QueryParameters
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.QueryParameters definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/session.proto}
 */
const QueryParameters = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Represents the query input. It can contain either:
 *
 * 1.  An audio config which
 *     instructs the speech recognizer how to process the speech audio.
 *
 * 2.  A conversational query in the form of text,.
 *
 * 3.  An event that specifies which intent to trigger.
 *
 * @property {Object} audioConfig
 *   Instructs the speech recognizer how to process the speech audio.
 *
 *   This object should have the same structure as [InputAudioConfig]{@link google.cloud.dialogflow.v2.InputAudioConfig}
 *
 * @property {Object} text
 *   The natural language text to be processed.
 *
 *   This object should have the same structure as [TextInput]{@link google.cloud.dialogflow.v2.TextInput}
 *
 * @property {Object} event
 *   The event to be processed.
 *
 *   This object should have the same structure as [EventInput]{@link google.cloud.dialogflow.v2.EventInput}
 *
 * @typedef QueryInput
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.QueryInput definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/session.proto}
 */
const QueryInput = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Represents the result of conversational query or event processing.
 *
 * @property {string} queryText
 *   The original conversational query text:
 *
 *   - If natural language text was provided as input, `query_text` contains
 *     a copy of the input.
 *   - If natural language speech audio was provided as input, `query_text`
 *     contains the speech recognition result. If speech recognizer produced
 *     multiple alternatives, a particular one is picked.
 *   - If automatic spell correction is enabled, `query_text` will contain the
 *     corrected user input.
 *
 * @property {string} languageCode
 *   The language that was triggered during intent detection.
 *   See [Language
 *   Support](https://cloud.google.com/dialogflow/docs/reference/language)
 *   for a list of the currently supported language codes.
 *
 * @property {number} speechRecognitionConfidence
 *   The Speech recognition confidence between 0.0 and 1.0. A higher number
 *   indicates an estimated greater likelihood that the recognized words are
 *   correct. The default of 0.0 is a sentinel value indicating that confidence
 *   was not set.
 *
 *   This field is not guaranteed to be accurate or set. In particular this
 *   field isn't set for StreamingDetectIntent since the streaming endpoint has
 *   separate confidence estimates per portion of the audio in
 *   StreamingRecognitionResult.
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
 *
 *   - `false` if the matched intent has required parameters and not all of
 *      the required parameter values have been collected.
 *   - `true` if all required parameter values have been collected, or if the
 *      matched intent doesn't contain any required parameters.
 *
 * @property {string} fulfillmentText
 *   The text to be pronounced to the user or shown on the screen.
 *   Note: This is a legacy field, `fulfillment_messages` should be preferred.
 *
 * @property {Object[]} fulfillmentMessages
 *   The collection of rich messages to present to the user.
 *
 *   This object should have the same structure as [Message]{@link google.cloud.dialogflow.v2.Message}
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
 *   This object should have the same structure as [Context]{@link google.cloud.dialogflow.v2.Context}
 *
 * @property {Object} intent
 *   The intent that matched the conversational query. Some, not
 *   all fields are filled in this message, including but not limited to:
 *   `name`, `display_name`, `end_interaction` and `is_fallback`.
 *
 *   This object should have the same structure as [Intent]{@link google.cloud.dialogflow.v2.Intent}
 *
 * @property {number} intentDetectionConfidence
 *   The intent detection confidence. Values range from 0.0
 *   (completely uncertain) to 1.0 (completely certain).
 *   This value is for informational purpose only and is only used to
 *   help match the best intent within the classification threshold.
 *   This value may change for the same end-user expression at any time due to a
 *   model retraining or change in implementation.
 *   If there are `multiple knowledge_answers` messages, this value is set to
 *   the greatest `knowledgeAnswers.match_confidence` value in the list.
 *
 * @property {Object} diagnosticInfo
 *   Free-form diagnostic information for the associated detect intent request.
 *   The fields of this data can change without notice, so you should not write
 *   code that depends on its structure.
 *   The data may contain:
 *
 *   - webhook call latency
 *   - webhook errors
 *
 *   This object should have the same structure as [Struct]{@link google.protobuf.Struct}
 *
 * @property {Object} sentimentAnalysisResult
 *   The sentiment analysis result, which depends on the
 *   `sentiment_analysis_request_config` specified in the request.
 *
 *   This object should have the same structure as [SentimentAnalysisResult]{@link google.cloud.dialogflow.v2.SentimentAnalysisResult}
 *
 * @typedef QueryResult
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.QueryResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/session.proto}
 */
const QueryResult = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The top-level message sent by the client to the
 * Sessions.StreamingDetectIntent method.
 *
 * Multiple request messages should be sent in order:
 *
 * 1.  The first message must contain
 * session,
 *     query_input plus optionally
 *     query_params. If the client
 *     wants to receive an audio response, it should also contain
 *     output_audio_config.
 *     The message must not contain
 *     input_audio.
 * 2.  If query_input was set to
 *     query_input.audio_config, all subsequent
 *     messages must contain
 *     input_audio to continue with
 *     Speech recognition.
 *     If you decide to rather detect an intent from text input after you
 *     already started Speech recognition, please send a message with
 *     query_input.text.
 *
 *     However, note that:
 *
 *     * Dialogflow will bill you for the audio duration so far.
 *     * Dialogflow discards all Speech recognition results in favor of the
 *       input text.
 *     * Dialogflow will use the language code from the first message.
 *
 * After you sent all input, you must half-close or abort the request stream.
 *
 * @property {string} session
 *   Required. The name of the session the query is sent to.
 *   Format of the session name:
 *   `projects/<Project ID>/agent/sessions/<Session ID>`. It's up to the API
 *   caller to choose an appropriate `Session ID`. It can be a random number or
 *   some type of user identifier (preferably hashed). The length of the session
 *   ID must not exceed 36 characters.
 *
 * @property {Object} queryParams
 *   Optional. The parameters of this query.
 *
 *   This object should have the same structure as [QueryParameters]{@link google.cloud.dialogflow.v2.QueryParameters}
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
 *   This object should have the same structure as [QueryInput]{@link google.cloud.dialogflow.v2.QueryInput}
 *
 * @property {boolean} singleUtterance
 *   Optional. Please use InputAudioConfig.single_utterance instead.
 *   If `false` (default), recognition does not cease until
 *   the client closes the stream. If `true`, the recognizer will detect a
 *   single spoken utterance in input audio. Recognition ceases when it detects
 *   the audio's voice has stopped or paused. In this case, once a detected
 *   intent is received, the client should close the stream and start a new
 *   request with a new stream as needed.
 *   This setting is ignored when `query_input` is a piece of text or an event.
 *
 * @property {Object} outputAudioConfig
 *   Optional. Instructs the speech synthesizer how to generate the output
 *   audio. If this field is not set and agent-level speech synthesizer is not
 *   configured, no output audio is generated.
 *
 *   This object should have the same structure as [OutputAudioConfig]{@link google.cloud.dialogflow.v2.OutputAudioConfig}
 *
 * @property {Buffer} inputAudio
 *   Optional. The input audio content to be recognized. Must be sent if
 *   `query_input` was set to a streaming input audio config. The complete audio
 *   over all streaming messages must not exceed 1 minute.
 *
 * @typedef StreamingDetectIntentRequest
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.StreamingDetectIntentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/session.proto}
 */
const StreamingDetectIntentRequest = {
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
 *   This object should have the same structure as [StreamingRecognitionResult]{@link google.cloud.dialogflow.v2.StreamingRecognitionResult}
 *
 * @property {Object} queryResult
 *   The result of the conversational query or event processing.
 *
 *   This object should have the same structure as [QueryResult]{@link google.cloud.dialogflow.v2.QueryResult}
 *
 * @property {Object} webhookStatus
 *   Specifies the status of the webhook request.
 *
 *   This object should have the same structure as [Status]{@link google.rpc.Status}
 *
 * @property {Buffer} outputAudio
 *   The audio data bytes encoded as specified in the request.
 *   Note: The output audio is generated based on the values of default platform
 *   text responses found in the `query_result.fulfillment_messages` field. If
 *   multiple default text responses exist, they will be concatenated when
 *   generating audio. If no default platform text responses exist, the
 *   generated audio content will be empty.
 *
 * @property {Object} outputAudioConfig
 *   The config used by the speech synthesizer to generate the output audio.
 *
 *   This object should have the same structure as [OutputAudioConfig]{@link google.cloud.dialogflow.v2.OutputAudioConfig}
 *
 * @typedef StreamingDetectIntentResponse
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.StreamingDetectIntentResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/session.proto}
 */
const StreamingDetectIntentResponse = {
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
 * 7.  message_type: `END_OF_SINGLE_UTTERANCE`
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
 * *  for `TRANSCRIPT`: `transcript` and possibly `is_final`.
 *
 * *  for `END_OF_SINGLE_UTTERANCE`: only `message_type`.
 *
 * @property {number} messageType
 *   Type of the result message.
 *
 *   The number should be among the values of [MessageType]{@link google.cloud.dialogflow.v2.MessageType}
 *
 * @property {string} transcript
 *   Transcript text representing the words that the user spoke.
 *   Populated if and only if `message_type` = `TRANSCRIPT`.
 *
 * @property {boolean} isFinal
 *   If `false`, the `StreamingRecognitionResult` represents an
 *   interim result that may change. If `true`, the recognizer will not return
 *   any further hypotheses about this piece of the audio. May only be populated
 *   for `message_type` = `TRANSCRIPT`.
 *
 * @property {number} confidence
 *   The Speech confidence between 0.0 and 1.0 for the current portion of audio.
 *   A higher number indicates an estimated greater likelihood that the
 *   recognized words are correct. The default of 0.0 is a sentinel value
 *   indicating that confidence was not set.
 *
 *   This field is typically only provided if `is_final` is true and you should
 *   not rely on it being accurate or even set.
 *
 * @property {Object[]} speechWordInfo
 *   Word-specific information for the words recognized by Speech in
 *   transcript. Populated if and only if `message_type` = `TRANSCRIPT` and
 *   [InputAudioConfig.enable_word_info] is set.
 *
 *   This object should have the same structure as [SpeechWordInfo]{@link google.cloud.dialogflow.v2.SpeechWordInfo}
 *
 * @property {Object} speechEndOffset
 *   Time offset of the end of this Speech recognition result relative to the
 *   beginning of the audio. Only populated for `message_type` = `TRANSCRIPT`.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @typedef StreamingRecognitionResult
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.StreamingRecognitionResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/session.proto}
 */
const StreamingRecognitionResult = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Type of the response message.
   *
   * @enum {number}
   * @memberof google.cloud.dialogflow.v2
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
     * utterance and expects no additional inputs.
     * Therefore, the server will not process additional audio (although it may subsequently return additional results). The
     * client should stop sending additional audio data, half-close the gRPC
     * connection, and wait for any additional results until the server closes
     * the gRPC connection. This message is only sent if `single_utterance` was
     * set to `true`, and is not used otherwise.
     */
    END_OF_SINGLE_UTTERANCE: 2
  }
};

/**
 * Represents the natural language text to be processed.
 *
 * @property {string} text
 *   Required. The UTF-8 encoded natural language text to be processed.
 *   Text length must not exceed 256 characters.
 *
 * @property {string} languageCode
 *   Required. The language of this conversational query. See [Language
 *   Support](https://cloud.google.com/dialogflow/docs/reference/language)
 *   for a list of the currently supported language codes. Note that queries in
 *   the same session do not necessarily need to specify the same language.
 *
 * @typedef TextInput
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.TextInput definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/session.proto}
 */
const TextInput = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Events allow for matching intents by event name instead of the natural
 * language input. For instance, input `<event: { name: "welcome_event",
 * parameters: { name: "Sam" } }>` can trigger a personalized welcome response.
 * The parameter `name` may be used by the agent in the response:
 * `"Hello #welcome_event.name! What can I do for you today?"`.
 *
 * @property {string} name
 *   Required. The unique identifier of the event.
 *
 * @property {Object} parameters
 *   Optional. The collection of parameters associated with the event.
 *
 *   This object should have the same structure as [Struct]{@link google.protobuf.Struct}
 *
 * @property {string} languageCode
 *   Required. The language of this query. See [Language
 *   Support](https://cloud.google.com/dialogflow/docs/reference/language)
 *   for a list of the currently supported language codes. Note that queries in
 *   the same session do not necessarily need to specify the same language.
 *
 * @typedef EventInput
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.EventInput definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/session.proto}
 */
const EventInput = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Configures the types of sentiment analysis to perform.
 *
 * @property {boolean} analyzeQueryTextSentiment
 *   Optional. Instructs the service to perform sentiment analysis on
 *   `query_text`. If not provided, sentiment analysis is not performed on
 *   `query_text`.
 *
 * @typedef SentimentAnalysisRequestConfig
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.SentimentAnalysisRequestConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/session.proto}
 */
const SentimentAnalysisRequestConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The result of sentiment analysis as configured by
 * `sentiment_analysis_request_config`.
 *
 * @property {Object} queryTextSentiment
 *   The sentiment analysis result for `query_text`.
 *
 *   This object should have the same structure as [Sentiment]{@link google.cloud.dialogflow.v2.Sentiment}
 *
 * @typedef SentimentAnalysisResult
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.SentimentAnalysisResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/session.proto}
 */
const SentimentAnalysisResult = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The sentiment, such as positive/negative feeling or association, for a unit
 * of analysis, such as the query text.
 *
 * @property {number} score
 *   Sentiment score between -1.0 (negative sentiment) and 1.0 (positive
 *   sentiment).
 *
 * @property {number} magnitude
 *   A non-negative number in the [0, +inf) range, which represents the absolute
 *   magnitude of sentiment, regardless of score (positive or negative).
 *
 * @typedef Sentiment
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.Sentiment definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/session.proto}
 */
const Sentiment = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};