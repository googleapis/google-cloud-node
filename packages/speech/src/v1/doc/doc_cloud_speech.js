/*
 * Copyright 2017, Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * Note: this file is purely for documentation. Any contents are not expected
 * to be loaded as the JS file.
 */

/**
 * The top-level message sent by the client for the `Recognize` method.
 *
 * @property {Object} config
 *   *Required* Provides information to the recognizer that specifies how to
 *   process the request.
 *
 *   This object should have the same structure as [RecognitionConfig]{@link RecognitionConfig}
 *
 * @property {Object} audio
 *   *Required* The audio data to be recognized.
 *
 *   This object should have the same structure as [RecognitionAudio]{@link RecognitionAudio}
 *
 * @class
 * @see [google.cloud.speech.v1.RecognizeRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/speech/v1/cloud_speech.proto}
 */
var RecognizeRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The top-level message sent by the client for the `LongRunningRecognize`
 * method.
 *
 * @property {Object} config
 *   *Required* Provides information to the recognizer that specifies how to
 *   process the request.
 *
 *   This object should have the same structure as [RecognitionConfig]{@link RecognitionConfig}
 *
 * @property {Object} audio
 *   *Required* The audio data to be recognized.
 *
 *   This object should have the same structure as [RecognitionAudio]{@link RecognitionAudio}
 *
 * @class
 * @see [google.cloud.speech.v1.LongRunningRecognizeRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/speech/v1/cloud_speech.proto}
 */
var LongRunningRecognizeRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The top-level message sent by the client for the `StreamingRecognize` method.
 * Multiple `StreamingRecognizeRequest` messages are sent. The first message
 * must contain a `streaming_config` message and must not contain `audio` data.
 * All subsequent messages must contain `audio` data and must not contain a
 * `streaming_config` message.
 *
 * @property {Object} streamingConfig
 *   Provides information to the recognizer that specifies how to process the
 *   request. The first `StreamingRecognizeRequest` message must contain a
 *   `streaming_config`  message.
 *
 *   This object should have the same structure as [StreamingRecognitionConfig]{@link StreamingRecognitionConfig}
 *
 * @property {string} audioContent
 *   The audio data to be recognized. Sequential chunks of audio data are sent
 *   in sequential `StreamingRecognizeRequest` messages. The first
 *   `StreamingRecognizeRequest` message must not contain `audio_content` data
 *   and all subsequent `StreamingRecognizeRequest` messages must contain
 *   `audio_content` data. The audio bytes must be encoded as specified in
 *   `RecognitionConfig`. Note: as with all bytes fields, protobuffers use a
 *   pure binary representation (not base64). See
 *   [audio limits](https://cloud.google.com/speech/limits#content).
 *
 * @class
 * @see [google.cloud.speech.v1.StreamingRecognizeRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/speech/v1/cloud_speech.proto}
 */
var StreamingRecognizeRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Provides information to the recognizer that specifies how to process the
 * request.
 *
 * @property {Object} config
 *   *Required* Provides information to the recognizer that specifies how to
 *   process the request.
 *
 *   This object should have the same structure as [RecognitionConfig]{@link RecognitionConfig}
 *
 * @property {boolean} singleUtterance
 *   *Optional* If `false` or omitted, the recognizer will perform continuous
 *   recognition (continuing to wait for and process audio even if the user
 *   pauses speaking) until the client closes the input stream (gRPC API) or
 *   until the maximum time limit has been reached. May return multiple
 *   `StreamingRecognitionResult`s with the `is_final` flag set to `true`.
 *
 *   If `true`, the recognizer will detect a single spoken utterance. When it
 *   detects that the user has paused or stopped speaking, it will return an
 *   `END_OF_SINGLE_UTTERANCE` event and cease recognition. It will return no
 *   more than one `StreamingRecognitionResult` with the `is_final` flag set to
 *   `true`.
 *
 * @property {boolean} interimResults
 *   *Optional* If `true`, interim results (tentative hypotheses) may be
 *   returned as they become available (these interim results are indicated with
 *   the `is_final=false` flag).
 *   If `false` or omitted, only `is_final=true` result(s) are returned.
 *
 * @class
 * @see [google.cloud.speech.v1.StreamingRecognitionConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/speech/v1/cloud_speech.proto}
 */
var StreamingRecognitionConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Provides information to the recognizer that specifies how to process the
 * request.
 *
 * @property {number} encoding
 *   *Required* Encoding of audio data sent in all `RecognitionAudio` messages.
 *
 *   The number should be among the values of [AudioEncoding]{@link AudioEncoding}
 *
 * @property {number} sampleRateHertz
 *   *Required* Sample rate in Hertz of the audio data sent in all
 *   `RecognitionAudio` messages. Valid values are: 8000-48000.
 *   16000 is optimal. For best results, set the sampling rate of the audio
 *   source to 16000 Hz. If that's not possible, use the native sample rate of
 *   the audio source (instead of re-sampling).
 *
 * @property {string} languageCode
 *   *Required* The language of the supplied audio as a
 *   [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag.
 *   Example: "en-US".
 *   See [Language Support](https://cloud.google.com/speech/docs/languages)
 *   for a list of the currently supported language codes.
 *
 * @property {number} maxAlternatives
 *   *Optional* Maximum number of recognition hypotheses to be returned.
 *   Specifically, the maximum number of `SpeechRecognitionAlternative` messages
 *   within each `SpeechRecognitionResult`.
 *   The server may return fewer than `max_alternatives`.
 *   Valid values are `0`-`30`. A value of `0` or `1` will return a maximum of
 *   one. If omitted, will return a maximum of one.
 *
 * @property {boolean} profanityFilter
 *   *Optional* If set to `true`, the server will attempt to filter out
 *   profanities, replacing all but the initial character in each filtered word
 *   with asterisks, e.g. "f***". If set to `false` or omitted, profanities
 *   won't be filtered out.
 *
 * @property {Object[]} speechContexts
 *   *Optional* A means to provide context to assist the speech recognition.
 *
 *   This object should have the same structure as [SpeechContext]{@link SpeechContext}
 *
 * @class
 * @see [google.cloud.speech.v1.RecognitionConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/speech/v1/cloud_speech.proto}
 */
var RecognitionConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Audio encoding of the data sent in the audio message. All encodings support
   * only 1 channel (mono) audio. Only `FLAC` includes a header that describes
   * the bytes of audio that follow the header. The other encodings are raw
   * audio bytes with no header.
   *
   * For best results, the audio source should be captured and transmitted using
   * a lossless encoding (`FLAC` or `LINEAR16`). Recognition accuracy may be
   * reduced if lossy codecs, which include the other codecs listed in
   * this section, are used to capture or transmit the audio, particularly if
   * background noise is present.
   *
   * @enum {number}
   */
  AudioEncoding: {

    /**
     * Not specified. Will return result {@link google.rpc.Code.INVALID_ARGUMENT}.
     */
    ENCODING_UNSPECIFIED: 0,

    /**
     * Uncompressed 16-bit signed little-endian samples (Linear PCM).
     */
    LINEAR16: 1,

    /**
     * [`FLAC`](https://xiph.org/flac/documentation.html) (Free Lossless Audio
     * Codec) is the recommended encoding because it is
     * lossless--therefore recognition is not compromised--and
     * requires only about half the bandwidth of `LINEAR16`. `FLAC` stream
     * encoding supports 16-bit and 24-bit samples, however, not all fields in
     * `STREAMINFO` are supported.
     */
    FLAC: 2,

    /**
     * 8-bit samples that compand 14-bit audio samples using G.711 PCMU/mu-law.
     */
    MULAW: 3,

    /**
     * Adaptive Multi-Rate Narrowband codec. `sample_rate_hertz` must be 8000.
     */
    AMR: 4,

    /**
     * Adaptive Multi-Rate Wideband codec. `sample_rate_hertz` must be 16000.
     */
    AMR_WB: 5,

    /**
     * Opus encoded audio frames in Ogg container
     * ([OggOpus](https://wiki.xiph.org/OggOpus)).
     * `sample_rate_hertz` must be 16000.
     */
    OGG_OPUS: 6,

    /**
     * Although the use of lossy encodings is not recommended, if a very low
     * bitrate encoding is required, `OGG_OPUS` is highly preferred over
     * Speex encoding. The [Speex](https://speex.org/)  encoding supported by
     * Cloud Speech API has a header byte in each block, as in MIME type
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
    SPEEX_WITH_HEADER_BYTE: 7
  }
};

/**
 * Provides "hints" to the speech recognizer to favor specific words and phrases
 * in the results.
 *
 * @property {string[]} phrases
 *   *Optional* A list of strings containing words and phrases "hints" so that
 *   the speech recognition is more likely to recognize them. This can be used
 *   to improve the accuracy for specific words and phrases, for example, if
 *   specific commands are typically spoken by the user. This can also be used
 *   to add additional words to the vocabulary of the recognizer. See
 *   [usage limits](https://cloud.google.com/speech/limits#content).
 *
 * @class
 * @see [google.cloud.speech.v1.SpeechContext definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/speech/v1/cloud_speech.proto}
 */
var SpeechContext = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Contains audio data in the encoding specified in the `RecognitionConfig`.
 * Either `content` or `uri` must be supplied. Supplying both or neither
 * returns {@link google.rpc.Code.INVALID_ARGUMENT}. See
 * [audio limits](https://cloud.google.com/speech/limits#content).
 *
 * @property {string} content
 *   The audio data bytes encoded as specified in
 *   `RecognitionConfig`. Note: as with all bytes fields, protobuffers use a
 *   pure binary representation, whereas JSON representations use base64.
 *
 * @property {string} uri
 *   URI that points to a file that contains audio data bytes as specified in
 *   `RecognitionConfig`. Currently, only Google Cloud Storage URIs are
 *   supported, which must be specified in the following format:
 *   `gs://bucket_name/object_name` (other URI formats return
 *   {@link google.rpc.Code.INVALID_ARGUMENT}). For more information, see
 *   [Request URIs](https://cloud.google.com/storage/docs/reference-uris).
 *
 * @class
 * @see [google.cloud.speech.v1.RecognitionAudio definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/speech/v1/cloud_speech.proto}
 */
var RecognitionAudio = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The only message returned to the client by the `Recognize` method. It
 * contains the result as zero or more sequential `SpeechRecognitionResult`
 * messages.
 *
 * @property {Object[]} results
 *   *Output-only* Sequential list of transcription results corresponding to
 *   sequential portions of audio.
 *
 *   This object should have the same structure as [SpeechRecognitionResult]{@link SpeechRecognitionResult}
 *
 * @class
 * @see [google.cloud.speech.v1.RecognizeResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/speech/v1/cloud_speech.proto}
 */
var RecognizeResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The only message returned to the client by the `LongRunningRecognize` method.
 * It contains the result as zero or more sequential `SpeechRecognitionResult`
 * messages. It is included in the `result.response` field of the `Operation`
 * returned by the `GetOperation` call of the `google::longrunning::Operations`
 * service.
 *
 * @property {Object[]} results
 *   *Output-only* Sequential list of transcription results corresponding to
 *   sequential portions of audio.
 *
 *   This object should have the same structure as [SpeechRecognitionResult]{@link SpeechRecognitionResult}
 *
 * @class
 * @see [google.cloud.speech.v1.LongRunningRecognizeResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/speech/v1/cloud_speech.proto}
 */
var LongRunningRecognizeResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Describes the progress of a long-running `LongRunningRecognize` call. It is
 * included in the `metadata` field of the `Operation` returned by the
 * `GetOperation` call of the `google::longrunning::Operations` service.
 *
 * @property {number} progressPercent
 *   Approximate percentage of audio processed thus far. Guaranteed to be 100
 *   when the audio is fully processed and the results are available.
 *
 * @property {Object} startTime
 *   Time when the request was received.
 *
 *   This object should have the same structure as [google.protobuf.Timestamp]{@link external:"google.protobuf.Timestamp"}
 *
 * @property {Object} lastUpdateTime
 *   Time of the most recent processing update.
 *
 *   This object should have the same structure as [google.protobuf.Timestamp]{@link external:"google.protobuf.Timestamp"}
 *
 * @class
 * @see [google.cloud.speech.v1.LongRunningRecognizeMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/speech/v1/cloud_speech.proto}
 */
var LongRunningRecognizeMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * `StreamingRecognizeResponse` is the only message returned to the client by
 * `StreamingRecognize`. A series of one or more `StreamingRecognizeResponse`
 * messages are streamed back to the client.
 *
 * Here's an example of a series of ten `StreamingRecognizeResponse`s that might
 * be returned while processing audio:
 *
 * 1. results { alternatives { transcript: "tube" } stability: 0.01 }
 *
 * 2. results { alternatives { transcript: "to be a" } stability: 0.01 }
 *
 * 3. results { alternatives { transcript: "to be" } stability: 0.9 }
 *    results { alternatives { transcript: " or not to be" } stability: 0.01 }
 *
 * 4. results { alternatives { transcript: "to be or not to be"
 *                             confidence: 0.92 }
 *              alternatives { transcript: "to bee or not to bee" }
 *              is_final: true }
 *
 * 5. results { alternatives { transcript: " that's" } stability: 0.01 }
 *
 * 6. results { alternatives { transcript: " that is" } stability: 0.9 }
 *    results { alternatives { transcript: " the question" } stability: 0.01 }
 *
 * 7. speech_event_type: END_OF_SINGLE_UTTERANCE
 *
 * 8. results { alternatives { transcript: " that is the question"
 *                             confidence: 0.98 }
 *              alternatives { transcript: " that was the question" }
 *              is_final: true }
 *
 * Notes:
 *
 * - Only two of the above responses #4 and #8 contain final results; they are
 *   indicated by `is_final: true`. Concatenating these together generates the
 *   full transcript: "to be or not to be that is the question".
 *
 * - The others contain interim `results`. #3 and #6 contain two interim
 *   `results`: the first portion has a high stability and is less likely to
 *   change; the second portion has a low stability and is very likely to
 *   change. A UI designer might choose to show only high stability `results`.
 *
 * - The specific `stability` and `confidence` values shown above are only for
 *   illustrative purposes. Actual values may vary.
 *
 * - In each response, only one of these fields will be set:
 *     `error`,
 *     `speech_event_type`, or
 *     one or more (repeated) `results`.
 *
 * @property {Object} error
 *   *Output-only* If set, returns a {@link google.rpc.Status} message that
 *   specifies the error for the operation.
 *
 *   This object should have the same structure as [google.rpc.Status]{@link external:"google.rpc.Status"}
 *
 * @property {Object[]} results
 *   *Output-only* This repeated list contains zero or more results that
 *   correspond to consecutive portions of the audio currently being processed.
 *   It contains zero or one `is_final=true` result (the newly settled portion),
 *   followed by zero or more `is_final=false` results.
 *
 *   This object should have the same structure as [StreamingRecognitionResult]{@link StreamingRecognitionResult}
 *
 * @property {number} speechEventType
 *   *Output-only* Indicates the type of speech event.
 *
 *   The number should be among the values of [SpeechEventType]{@link SpeechEventType}
 *
 * @class
 * @see [google.cloud.speech.v1.StreamingRecognizeResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/speech/v1/cloud_speech.proto}
 */
var StreamingRecognizeResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Indicates the type of speech event.
   *
   * @enum {number}
   */
  SpeechEventType: {

    /**
     * No speech event specified.
     */
    SPEECH_EVENT_UNSPECIFIED: 0,

    /**
     * This event indicates that the server has detected the end of the user's
     * speech utterance and expects no additional speech. Therefore, the server
     * will not process additional audio (although it may subsequently return
     * additional results). The client should stop sending additional audio
     * data, half-close the gRPC connection, and wait for any additional results
     * until the server closes the gRPC connection. This event is only sent if
     * `single_utterance` was set to `true`, and is not used otherwise.
     */
    END_OF_SINGLE_UTTERANCE: 1
  }
};

/**
 * A streaming speech recognition result corresponding to a portion of the audio
 * that is currently being processed.
 *
 * @property {Object[]} alternatives
 *   *Output-only* May contain one or more recognition hypotheses (up to the
 *   maximum specified in `max_alternatives`).
 *
 *   This object should have the same structure as [SpeechRecognitionAlternative]{@link SpeechRecognitionAlternative}
 *
 * @property {boolean} isFinal
 *   *Output-only* If `false`, this `StreamingRecognitionResult` represents an
 *   interim result that may change. If `true`, this is the final time the
 *   speech service will return this particular `StreamingRecognitionResult`,
 *   the recognizer will not return any further hypotheses for this portion of
 *   the transcript and corresponding audio.
 *
 * @property {number} stability
 *   *Output-only* An estimate of the likelihood that the recognizer will not
 *   change its guess about this interim result. Values range from 0.0
 *   (completely unstable) to 1.0 (completely stable).
 *   This field is only provided for interim results (`is_final=false`).
 *   The default of 0.0 is a sentinel value indicating `stability` was not set.
 *
 * @class
 * @see [google.cloud.speech.v1.StreamingRecognitionResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/speech/v1/cloud_speech.proto}
 */
var StreamingRecognitionResult = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A speech recognition result corresponding to a portion of the audio.
 *
 * @property {Object[]} alternatives
 *   *Output-only* May contain one or more recognition hypotheses (up to the
 *   maximum specified in `max_alternatives`).
 *
 *   This object should have the same structure as [SpeechRecognitionAlternative]{@link SpeechRecognitionAlternative}
 *
 * @class
 * @see [google.cloud.speech.v1.SpeechRecognitionResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/speech/v1/cloud_speech.proto}
 */
var SpeechRecognitionResult = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Alternative hypotheses (a.k.a. n-best list).
 *
 * @property {string} transcript
 *   *Output-only* Transcript text representing the words that the user spoke.
 *
 * @property {number} confidence
 *   *Output-only* The confidence estimate between 0.0 and 1.0. A higher number
 *   indicates an estimated greater likelihood that the recognized words are
 *   correct. This field is typically provided only for the top hypothesis, and
 *   only for `is_final=true` results. Clients should not rely on the
 *   `confidence` field as it is not guaranteed to be accurate, or even set, in
 *   any of the results.
 *   The default of 0.0 is a sentinel value indicating `confidence` was not set.
 *
 * @class
 * @see [google.cloud.speech.v1.SpeechRecognitionAlternative definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/speech/v1/cloud_speech.proto}
 */
var SpeechRecognitionAlternative = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};