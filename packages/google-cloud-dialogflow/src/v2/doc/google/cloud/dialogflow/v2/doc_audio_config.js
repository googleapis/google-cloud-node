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
 * Hints for the speech recognizer to help with recognition in a specific
 * conversation state.
 *
 * @property {string[]} phrases
 *   Optional. A list of strings containing words and phrases that the speech
 *   recognizer should recognize with higher likelihood.
 *
 *   This list can be used to:
 *   * improve accuracy for words and phrases you expect the user to say,
 *     e.g. typical commands for your Dialogflow agent
 *   * add additional words to the speech recognizer vocabulary
 *   * ...
 *
 *   See the [Cloud Speech
 *   documentation](https://cloud.google.com/speech-to-text/quotas) for usage
 *   limits.
 *
 * @property {number} boost
 *   Optional. Boost for this context compared to other contexts:
 *   * If the boost is positive, Dialogflow will increase the probability that
 *     the phrases in this context are recognized over similar sounding phrases.
 *   * If the boost is unspecified or non-positive, Dialogflow will not apply
 *     any boost.
 *
 *   Dialogflow recommends that you use boosts in the range (0, 20] and that you
 *   find a value that fits your use case with binary search.
 *
 * @typedef SpeechContext
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.SpeechContext definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/audio_config.proto}
 */
const SpeechContext = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Information for a word recognized by the speech recognizer.
 *
 * @property {string} word
 *   The word this info is for.
 *
 * @property {Object} startOffset
 *   Time offset relative to the beginning of the audio that corresponds to the
 *   start of the spoken word. This is an experimental feature and the accuracy
 *   of the time offset can vary.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {Object} endOffset
 *   Time offset relative to the beginning of the audio that corresponds to the
 *   end of the spoken word. This is an experimental feature and the accuracy of
 *   the time offset can vary.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {number} confidence
 *   The Speech confidence between 0.0 and 1.0 for this word. A higher number
 *   indicates an estimated greater likelihood that the recognized word is
 *   correct. The default of 0.0 is a sentinel value indicating that confidence
 *   was not set.
 *
 *   This field is not guaranteed to be fully stable over time for the same
 *   audio input. Users should also not rely on it to always be provided.
 *
 * @typedef SpeechWordInfo
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.SpeechWordInfo definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/audio_config.proto}
 */
const SpeechWordInfo = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Instructs the speech recognizer how to process the audio content.
 *
 * @property {number} audioEncoding
 *   Required. Audio encoding of the audio content to process.
 *
 *   The number should be among the values of [AudioEncoding]{@link google.cloud.dialogflow.v2.AudioEncoding}
 *
 * @property {number} sampleRateHertz
 *   Required. Sample rate (in Hertz) of the audio content sent in the query.
 *   Refer to
 *   [Cloud Speech API
 *   documentation](https://cloud.google.com/speech-to-text/docs/basics) for
 *   more details.
 *
 * @property {string} languageCode
 *   Required. The language of the supplied audio. Dialogflow does not do
 *   translations. See [Language
 *   Support](https://cloud.google.com/dialogflow/docs/reference/language)
 *   for a list of the currently supported language codes. Note that queries in
 *   the same session do not necessarily need to specify the same language.
 *
 * @property {boolean} enableWordInfo
 *   Optional. If `true`, Dialogflow returns SpeechWordInfo in
 *   StreamingRecognitionResult with information about the recognized speech
 *   words, e.g. start and end time offsets. If false or unspecified, Speech
 *   doesn't return any word-level information.
 *
 * @property {string[]} phraseHints
 *   Optional. A list of strings containing words and phrases that the speech
 *   recognizer should recognize with higher likelihood.
 *
 *   See [the Cloud Speech
 *   documentation](https://cloud.google.com/speech-to-text/docs/basics#phrase-hints)
 *   for more details.
 *
 *   This field is deprecated. Please use [speech_contexts]() instead. If you
 *   specify both [phrase_hints]() and [speech_contexts](), Dialogflow will
 *   treat the [phrase_hints]() as a single additional [SpeechContext]().
 *
 * @property {Object[]} speechContexts
 *   Optional. Context information to assist speech recognition.
 *
 *   See [the Cloud Speech
 *   documentation](https://cloud.google.com/speech-to-text/docs/basics#phrase-hints)
 *   for more details.
 *
 *   This object should have the same structure as [SpeechContext]{@link google.cloud.dialogflow.v2.SpeechContext}
 *
 * @property {string} model
 *   Optional. Which Speech model to select for the given request. Select the
 *   model best suited to your domain to get best results. If a model is not
 *   explicitly specified, then we auto-select a model based on the parameters
 *   in the InputAudioConfig.
 *   If enhanced speech model is enabled for the agent and an enhanced
 *   version of the specified model for the language does not exist, then the
 *   speech is recognized using the standard version of the specified model.
 *   Refer to
 *   [Cloud Speech API
 *   documentation](https://cloud.google.com/speech-to-text/docs/basics#select-model)
 *   for more details.
 *
 * @property {number} modelVariant
 *   Optional. Which variant of the Speech model to use.
 *
 *   The number should be among the values of [SpeechModelVariant]{@link google.cloud.dialogflow.v2.SpeechModelVariant}
 *
 * @property {boolean} singleUtterance
 *   Optional. If `false` (default), recognition does not cease until the
 *   client closes the stream.
 *   If `true`, the recognizer will detect a single spoken utterance in input
 *   audio. Recognition ceases when it detects the audio's voice has
 *   stopped or paused. In this case, once a detected intent is received, the
 *   client should close the stream and start a new request with a new stream as
 *   needed.
 *   Note: This setting is relevant only for streaming methods.
 *   Note: When specified, InputAudioConfig.single_utterance takes precedence
 *   over StreamingDetectIntentRequest.single_utterance.
 *
 * @typedef InputAudioConfig
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.InputAudioConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/audio_config.proto}
 */
const InputAudioConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Description of which voice to use for speech synthesis.
 *
 * @property {string} name
 *   Optional. The name of the voice. If not set, the service will choose a
 *   voice based on the other parameters such as language_code and
 *   ssml_gender.
 *
 * @property {number} ssmlGender
 *   Optional. The preferred gender of the voice. If not set, the service will
 *   choose a voice based on the other parameters such as language_code and
 *   name. Note that this is only a preference, not requirement. If a
 *   voice of the appropriate gender is not available, the synthesizer should
 *   substitute a voice with a different gender rather than failing the request.
 *
 *   The number should be among the values of [SsmlVoiceGender]{@link google.cloud.dialogflow.v2.SsmlVoiceGender}
 *
 * @typedef VoiceSelectionParams
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.VoiceSelectionParams definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/audio_config.proto}
 */
const VoiceSelectionParams = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Configuration of how speech should be synthesized.
 *
 * @property {number} speakingRate
 *   Optional. Speaking rate/speed, in the range [0.25, 4.0]. 1.0 is the normal
 *   native speed supported by the specific voice. 2.0 is twice as fast, and
 *   0.5 is half as fast. If unset(0.0), defaults to the native 1.0 speed. Any
 *   other values < 0.25 or > 4.0 will return an error.
 *
 * @property {number} pitch
 *   Optional. Speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20
 *   semitones from the original pitch. -20 means decrease 20 semitones from the
 *   original pitch.
 *
 * @property {number} volumeGainDb
 *   Optional. Volume gain (in dB) of the normal native volume supported by the
 *   specific voice, in the range [-96.0, 16.0]. If unset, or set to a value of
 *   0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB)
 *   will play at approximately half the amplitude of the normal native signal
 *   amplitude. A value of +6.0 (dB) will play at approximately twice the
 *   amplitude of the normal native signal amplitude. We strongly recommend not
 *   to exceed +10 (dB) as there's usually no effective increase in loudness for
 *   any value greater than that.
 *
 * @property {string[]} effectsProfileId
 *   Optional. An identifier which selects 'audio effects' profiles that are
 *   applied on (post synthesized) text to speech. Effects are applied on top of
 *   each other in the order they are given.
 *
 * @property {Object} voice
 *   Optional. The desired voice of the synthesized audio.
 *
 *   This object should have the same structure as [VoiceSelectionParams]{@link google.cloud.dialogflow.v2.VoiceSelectionParams}
 *
 * @typedef SynthesizeSpeechConfig
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.SynthesizeSpeechConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/audio_config.proto}
 */
const SynthesizeSpeechConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Instructs the speech synthesizer on how to generate the output audio content.
 *
 * @property {number} audioEncoding
 *   Required. Audio encoding of the synthesized audio content.
 *
 *   The number should be among the values of [OutputAudioEncoding]{@link google.cloud.dialogflow.v2.OutputAudioEncoding}
 *
 * @property {number} sampleRateHertz
 *   Optional. The synthesis sample rate (in hertz) for this audio. If not
 *   provided, then the synthesizer will use the default sample rate based on
 *   the audio encoding. If this is different from the voice's natural sample
 *   rate, then the synthesizer will honor this request by converting to the
 *   desired sample rate (which might result in worse audio quality).
 *
 * @property {Object} synthesizeSpeechConfig
 *   Optional. Configuration of how speech should be synthesized.
 *
 *   This object should have the same structure as [SynthesizeSpeechConfig]{@link google.cloud.dialogflow.v2.SynthesizeSpeechConfig}
 *
 * @typedef OutputAudioConfig
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.OutputAudioConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/audio_config.proto}
 */
const OutputAudioConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Audio encoding of the audio content sent in the conversational query request.
 * Refer to the
 * [Cloud Speech API
 * documentation](https://cloud.google.com/speech-to-text/docs/basics) for more
 * details.
 *
 * @enum {number}
 * @memberof google.cloud.dialogflow.v2
 */
const AudioEncoding = {

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

/**
 * Audio encoding of the output audio format in Text-To-Speech.
 *
 * @enum {number}
 * @memberof google.cloud.dialogflow.v2
 */
const OutputAudioEncoding = {

  /**
   * Not specified.
   */
  OUTPUT_AUDIO_ENCODING_UNSPECIFIED: 0,

  /**
   * Uncompressed 16-bit signed little-endian samples (Linear PCM).
   * Audio content returned as LINEAR16 also contains a WAV header.
   */
  OUTPUT_AUDIO_ENCODING_LINEAR_16: 1,

  /**
   * MP3 audio at 32kbps.
   */
  OUTPUT_AUDIO_ENCODING_MP3: 2,

  /**
   * Opus encoded audio wrapped in an ogg container. The result will be a
   * file which can be played natively on Android, and in browsers (at least
   * Chrome and Firefox). The quality of the encoding is considerably higher
   * than MP3 while using approximately the same bitrate.
   */
  OUTPUT_AUDIO_ENCODING_OGG_OPUS: 3
};

/**
 * Variant of the specified Speech model to use.
 *
 * See the [Cloud Speech
 * documentation](https://cloud.google.com/speech-to-text/docs/enhanced-models)
 * for which models have different variants. For example, the "phone_call" model
 * has both a standard and an enhanced variant. When you use an enhanced model,
 * you will generally receive higher quality results than for a standard model.
 *
 * @enum {number}
 * @memberof google.cloud.dialogflow.v2
 */
const SpeechModelVariant = {

  /**
   * No model variant specified. In this case Dialogflow defaults to
   * USE_BEST_AVAILABLE.
   */
  SPEECH_MODEL_VARIANT_UNSPECIFIED: 0,

  /**
   * Use the best available variant of the Speech
   * model that the caller is eligible for.
   *
   * Please see the [Dialogflow
   * docs](https://cloud.google.com/dialogflow/docs/data-logging) for
   * how to make your project eligible for enhanced models.
   */
  USE_BEST_AVAILABLE: 1,

  /**
   * Use standard model variant even if an enhanced model is available.  See the
   * [Cloud Speech
   * documentation](https://cloud.google.com/speech-to-text/docs/enhanced-models)
   * for details about enhanced models.
   */
  USE_STANDARD: 2,

  /**
   * Use an enhanced model variant:
   *
   * * If an enhanced variant does not exist for the given
   *   model and request language, Dialogflow falls
   *   back to the standard variant.
   *
   *   The [Cloud Speech
   *   documentation](https://cloud.google.com/speech-to-text/docs/enhanced-models)
   *   describes which models have enhanced variants.
   *
   * * If the API caller isn't eligible for enhanced models, Dialogflow returns
   *   an error. Please see the [Dialogflow
   *   docs](https://cloud.google.com/dialogflow/docs/data-logging)
   *   for how to make your project eligible.
   */
  USE_ENHANCED: 3
};

/**
 * Gender of the voice as described in
 * [SSML voice element](https://www.w3.org/TR/speech-synthesis11/#edef_voice).
 *
 * @enum {number}
 * @memberof google.cloud.dialogflow.v2
 */
const SsmlVoiceGender = {

  /**
   * An unspecified gender, which means that the client doesn't care which
   * gender the selected voice will have.
   */
  SSML_VOICE_GENDER_UNSPECIFIED: 0,

  /**
   * A male voice.
   */
  SSML_VOICE_GENDER_MALE: 1,

  /**
   * A female voice.
   */
  SSML_VOICE_GENDER_FEMALE: 2,

  /**
   * A gender-neutral voice.
   */
  SSML_VOICE_GENDER_NEUTRAL: 3
};