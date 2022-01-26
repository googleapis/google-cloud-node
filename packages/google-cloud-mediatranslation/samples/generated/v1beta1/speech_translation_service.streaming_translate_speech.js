// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main() {
  // [START mediatranslation_v1beta1_generated_SpeechTranslationService_StreamingTranslateSpeech_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Provides information to the recognizer that specifies how to process the
   *  request. The first `StreamingTranslateSpeechRequest` message must contain
   *  a `streaming_config` message.
   */
  // const streamingConfig = {}
  /**
   *  The audio data to be translated. Sequential chunks of audio data are sent
   *  in sequential `StreamingTranslateSpeechRequest` messages. The first
   *  `StreamingTranslateSpeechRequest` message must not contain
   *  `audio_content` data and all subsequent `StreamingTranslateSpeechRequest`
   *  messages must contain `audio_content` data. The audio bytes must be
   *  encoded as specified in `StreamingTranslateSpeechConfig`. Note: as with
   *  all bytes fields, protobuffers use a pure binary representation (not
   *  base64).
   */
  // const audioContent = 'Buffer.from('string')'

  // Imports the Mediatranslation library
  const {SpeechTranslationServiceClient} = require('@google-cloud/media-translation').v1beta1;

  // Instantiates a client
  const mediatranslationClient = new SpeechTranslationServiceClient();

  async function callStreamingTranslateSpeech() {
    // Construct request
    const request = {
    };

    // Run request
    const stream = await mediatranslationClient.streamingTranslateSpeech();
    stream.on('data', (response) => { console.log(response) });
    stream.on('error', (err) => { throw(err) });
    stream.on('end', () => { /* API call completed */ });
    stream.write(request);
    stream.end(); 
  }

  callStreamingTranslateSpeech();
  // [END mediatranslation_v1beta1_generated_SpeechTranslationService_StreamingTranslateSpeech_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
