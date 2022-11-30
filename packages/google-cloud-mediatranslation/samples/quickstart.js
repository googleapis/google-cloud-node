// Copyright 2020, Google LLC.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

/**
 * Translate text from an audio file.
 * @param {string} filename local path to
 * @param {string} encoding the encoding of the audio rate, e.g. Linear16
 * @param {string} sourceLanguage language translating from, as BCP-47 code
 * @param {string} targetLanguage languate translating to, as BCP-47 code
 */
function main(filename, encoding, sourceLanguage, targetLanguage) {
  // [START media_translation_quickstart]
  const fs = require('fs');

  // Imports the CLoud Media Translation client library
  const {
    SpeechTranslationServiceClient,
  } = require('@google-cloud/media-translation');

  // Creates a client
  const client = new SpeechTranslationServiceClient();

  async function quickstart() {
    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const filename = 'Local path to audio file, e.g. /path/to/audio.raw';
    // const encoding = 'Encoding of the audio file, e.g. LINEAR16';
    // const sourceLanguage = 'BCP-47 source language code, e.g. en-US';
    // const targetLanguage = 'BCP-47 target language code, e.g. es-ES';

    const config = {
      audioConfig: {
        audioEncoding: encoding,
        sourceLanguageCode: sourceLanguage,
        targetLanguageCode: targetLanguage,
      },
    };

    // First request needs to have only a streaming config, no data.
    const initialRequest = {
      streamingConfig: config,
      audioContent: null,
    };

    const readStream = fs.createReadStream(filename, {
      highWaterMark: 4096,
      encoding: 'base64',
    });

    const chunks = [];
    readStream
      .on('data', chunk => {
        const request = {
          streamingConfig: config,
          audioContent: chunk.toString(),
        };
        chunks.push(request);
      })
      .on('close', () => {
        // Config-only request should be first in stream of requests
        stream.write(initialRequest);
        for (let i = 0; i < chunks.length; i++) {
          stream.write(chunks[i]);
        }
        stream.end();
      });

    const stream = client.streamingTranslateSpeech().on('data', response => {
      const {result} = response;
      if (result.textTranslationResult.isFinal) {
        console.log(
          `\nFinal translation: ${result.textTranslationResult.translation}`
        );
        console.log(`Final recognition result: ${result.recognitionResult}`);
      } else {
        console.log(
          `\nPartial translation: ${result.textTranslationResult.translation}`
        );
        console.log(`Partial recognition result: ${result.recognitionResult}`);
      }
    });

    // [END media_translation_quickstart]
  }
  quickstart();
}

main(...process.argv.slice(2));
