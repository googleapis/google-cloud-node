// Copyright 2020 Google LLC
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

async function main(
  projectId,
  location,
  agentId,
  audioFileName,
  encoding,
  sampleRateHertz,
  languageCode
) {
  // [START dialogflow_cx_quickstart]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const projectId = 'my-project';
  // const location = 'global';
  // const agentId = 'my-agent';
  // const audioFileName = '/path/to/audio.raw';
  // const encoding = 'AUDIO_ENCODING_LINEAR_16';
  // const sampleRateHertz = 16000;
  // const languageCode = 'en'

  // Imports the Google Cloud Some API library
  const {SessionsClient} = require('@google-cloud/dialogflow-cx');
  /**
   * Example for regional endpoint:
   *   const location = 'us-central1'
   *   const client = new SessionsClient({apiEndpoint: 'us-central1-dialogflow.googleapis.com'})
   */
  const client = new SessionsClient();

  const fs = require('fs');
  const util = require('util');
  // Assumes uuid module has been installed from npm,
  // npm i uuid:
  const {v4} = require('uuid');

  async function detectIntentAudio() {
    const sessionId = v4();
    const sessionPath = client.projectLocationAgentSessionPath(
      projectId,
      location,
      agentId,
      sessionId
    );

    // Read the content of the audio file and send it as part of the request.
    const readFile = util.promisify(fs.readFile);
    const inputAudio = await readFile(audioFileName);

    const request = {
      session: sessionPath,
      queryInput: {
        audio: {
          config: {
            audioEncoding: encoding,
            sampleRateHertz: sampleRateHertz,
          },
          audio: inputAudio,
        },
        languageCode,
      },
    };
    const [response] = await client.detectIntent(request);
    console.log(`User Query: ${response.queryResult.transcript}`);
    for (const message of response.queryResult.responseMessages) {
      if (message.text) {
        console.log(`Agent Response: ${message.text.text}`);
      }
    }
    if (response.queryResult.match.intent) {
      console.log(
        `Matched Intent: ${response.queryResult.match.intent.displayName}`
      );
    }
    console.log(
      `Current Page: ${response.queryResult.currentPage.displayName}`
    );
  }

  detectIntentAudio();
  // [END dialogflow_cx_quickstart]
}

main(...process.argv.slice(2));
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
