// Copyright 2024 Google LLC
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

function main() {
  // [START apikeys_authenticate_api_key]

  const {
    v1: {LanguageServiceClient},
  } = require('@google-cloud/language');

  /**
   * Authenticates with an API key for Google Language service.
   *
   * @param {string} apiKey An API Key to use
   */
  async function authenticateWithAPIKey(apiKey) {
    const language = new LanguageServiceClient({apiKey});

    // Alternatively:
    // const {GoogleAuth} = require('google-auth-library');
    // const auth = new GoogleAuth({apiKey});
    // const language = new LanguageServiceClient({auth});

    const text = 'Hello, world!';

    const [response] = await language.analyzeSentiment({
      document: {
        content: text,
        type: 'PLAIN_TEXT',
      },
    });

    console.log(`Text: ${text}`);
    console.log(
      `Sentiment: ${response.documentSentiment.score}, ${response.documentSentiment.magnitude}`,
    );
    console.log('Successfully authenticated using the API key');
  }

  authenticateWithAPIKey();
  // [END apikeys_authenticate_api_key]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

main(...process.argv.slice(2));
