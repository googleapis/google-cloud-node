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

import * as v1 from './v1';

const SpeechClient = v1.SpeechClient;
type SpeechClient = v1.SpeechClient;
export {v1, SpeechClient};
// For compatibility with JavaScript libraries we need to provide this default export:
// tslint:disable-next-line no-default-export
export default {v1, SpeechClient};

/* Usage test */
import {RecognitionAudio, RecognitionConfig_AudioEncoding, RecognizeRequest} from './gen/google/cloud/speech/v1/cloud_speech_pb';
import { PartialMessage } from '@bufbuild/protobuf';

async function useProtobufEsObjects(client: SpeechClient) {
  const gcsUri: string = 'gs://cloud-samples-data/speech/brooklyn_bridge.raw';
  const audio: PartialMessage<RecognitionAudio> = { // note: completely different oneof representation
    audioSource: {
      case: 'uri',
      value: gcsUri,    
    },
  };
  const config = {
    encoding: RecognitionConfig_AudioEncoding.LINEAR16, // note: enum value as string is not accepted
    sampleRateHertz: 16000,
    languageCode: 'en-US',
  };
  const request: PartialMessage<RecognizeRequest> = {
    config,
    audio,
  };
  const [response] = await client.recognize(request);
  console.log(JSON.stringify(response, null, '  '));
}

async function useJsonRepresentation(client: SpeechClient) {
  const gcsUri = 'gs://cloud-samples-data/speech/brooklyn_bridge.raw';
  const audio = {
    uri: gcsUri,
  };
  const config = {
    encoding: 'LINEAR16',
    sampleRateHertz: 16000,
    languageCode: 'en-US',
  };
  const request = {
    audio: audio,
    config: config,
  };
  const requestObject = RecognizeRequest.fromJson(request);
  const [response] = await client.recognize(requestObject);
  console.log(JSON.stringify(response, null, '  '));
}

async function main() {
  const client = new SpeechClient();
  await useProtobufEsObjects(client);
  await useJsonRepresentation(client);
}

if (require.main === module) {
  main();
}
