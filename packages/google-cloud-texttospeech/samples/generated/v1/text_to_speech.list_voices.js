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
  // [START texttospeech_v1_generated_TextToSpeech_ListVoices_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Optional. Recommended.
   *  BCP-47 (https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. If
   *  specified, the ListVoices call will only return voices that can be used to
   *  synthesize this language_code. E.g. when specifying `"en-NZ"`, you will get
   *  supported `"en-\*"` voices; when specifying `"no"`, you will get supported
   *  `"no-\*"` (Norwegian) and `"nb-\*"` (Norwegian Bokmal) voices; specifying
   *  `"zh"` will also get supported `"cmn-\*"` voices; specifying `"zh-hk"` will
   *  also get supported `"yue-\*"` voices.
   */
  // const languageCode = 'abc123'

  // Imports the Texttospeech library
  const {TextToSpeechClient} = require('@google-cloud/text-to-speech').v1;

  // Instantiates a client
  const texttospeechClient = new TextToSpeechClient();

  async function callListVoices() {
    // Construct request
    const request = {};

    // Run request
    const response = await texttospeechClient.listVoices(request);
    console.log(response);
  }

  callListVoices();
  // [END texttospeech_v1_generated_TextToSpeech_ListVoices_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
