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

// Note: this file is purely for documentation. Any contents are not expected
// to be loaded as the JS file.

/**
 * Description of which voice to use for speech synthesis.
 *
 * @property {string} name
 *   Optional. The name of the voice. If not set, the service will choose a
 *   voice based on the other parameters such as language_code and gender.
 *
 * @property {number} ssmlGender
 *   Optional. The preferred gender of the voice. If not set, the service will
 *   choose a voice based on the other parameters such as language_code and
 *   name. Note that this is only a preference, not requirement. If a
 *   voice of the appropriate gender is not available, the synthesizer should
 *   substitute a voice with a different gender rather than failing the request.
 *
 *   The number should be among the values of [SsmlVoiceGender]{@link google.cloud.dialogflow.v2beta1.SsmlVoiceGender}
 *
 * @typedef VoiceSelectionParams
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.VoiceSelectionParams definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/audio_config.proto}
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
 *   This object should have the same structure as [VoiceSelectionParams]{@link google.cloud.dialogflow.v2beta1.VoiceSelectionParams}
 *
 * @typedef SynthesizeSpeechConfig
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/audio_config.proto}
 */
const SynthesizeSpeechConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Instructs the speech synthesizer how to generate the output audio content.
 *
 * @property {number} audioEncoding
 *   Required. Audio encoding of the synthesized audio content.
 *
 *   The number should be among the values of [OutputAudioEncoding]{@link google.cloud.dialogflow.v2beta1.OutputAudioEncoding}
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
 *   This object should have the same structure as [SynthesizeSpeechConfig]{@link google.cloud.dialogflow.v2beta1.SynthesizeSpeechConfig}
 *
 * @typedef OutputAudioConfig
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.OutputAudioConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/audio_config.proto}
 */
const OutputAudioConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Gender of the voice as described in
 * [SSML voice element](https://www.w3.org/TR/speech-synthesis11/#edef_voice).
 *
 * @enum {number}
 * @memberof google.cloud.dialogflow.v2beta1
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

/**
 * Audio encoding of the output audio format in Text-To-Speech.
 *
 * @enum {number}
 * @memberof google.cloud.dialogflow.v2beta1
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
   * MP3 audio.
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