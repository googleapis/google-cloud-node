/**
 * Copyright 2018, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// [START tts_quickstart]
const fs = require('fs');

// Imports the Google Cloud client library
const textToSpeech = require('@google-cloud/text-to-speech');

// Creates a client
const client = new textToSpeech.TextToSpeechClient();

// The text to synthesize
const text = 'Hello, world!';

// Construct the request
const request = {
  input: {text: text},
  // Select the language and SSML Voice Gender (optional)
  voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
  // Select the type of audio encoding
  audioConfig: {audioEncoding: 'MP3'},
};

// Performs the Text-to-Speech request
client.synthesizeSpeech(request, (err, response) => {
  if (err) {
    console.error('ERROR:', err);
    return;
  }

  // Write the binary audio content to a local file
  fs.writeFile('output.mp3', response.audioContent, 'binary', err => {
    if (err) {
      console.error('ERROR:', err);
      return;
    }
    console.log('Audio content written to file: output.mp3');
  });
});
// [END tts_quickstart]
