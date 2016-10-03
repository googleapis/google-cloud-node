/**
 * Copyright 2016, Google, Inc.
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

// [START translate_quickstart]
// Imports the Google Cloud client library
const Translate = require('@google-cloud/translate');

// Your Translate API key
const apiKey = 'YOUR_API_KEY';

// Instantiates a client
const translateClient = Translate({
  key: apiKey
});

// The text to translate
const text = 'Hello, world!';
// The target language
const target = 'ru';

// Translates some text into Russian
translateClient.translate(text, target, (err, translation) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Text: ${text}`);
  console.log(`Translation: ${translation}`);
});
// [END translate_quickstart]
