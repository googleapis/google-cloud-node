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

import {describe, it} from 'mocha';
import {Operation} from 'google-gax';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const videoIntelligence = require('../src');

describe('VideoIntelligenceServiceSmokeTest', () => {
  it('successfully makes a call to the service', done => {
    const client =
      new videoIntelligence.v1p1beta1.VideoIntelligenceServiceClient({
        // optional auth parameters.
      });

    const inputUri = 'gs://cloud-samples-data/video/cat.mp4';
    const featuresElement = 'LABEL_DETECTION';
    const features = [featuresElement];
    const request = {
      inputUri,
      features,
    };

    // Handle the operation using the promise pattern.
    client
      .annotateVideo(request)
      .then((responses: Operation[]) => {
        const operation = responses[0];
        const initialApiResponse = responses[1];
        console.log(operation);
        console.log(initialApiResponse);

        // Operation#promise starts polling for the completion of the LRO.
        return operation.promise();
      })
      .then((responses: Operation[]) => {
        // The final result of the operation.
        const result = responses[0];

        // The metadata value of the completed operation.
        const metadata = responses[1];

        // The response of the api call returning the complete operation.
        const finalApiResponse = responses[2];

        console.log(result);
        console.log(metadata);
        console.log(finalApiResponse);
      })
      .then(done)
      .catch(done);
  });

  it('successfully makes a call to the service', done => {
    const client =
      new videoIntelligence.v1p1beta1.VideoIntelligenceServiceClient({
        // optional auth parameters.
      });

    const inputUri = 'gs://cloud-samples-data/video/cat.mp4';
    const featuresElement = 'LABEL_DETECTION';
    const features = [featuresElement];
    const request = {
      inputUri,
      features,
    };

    // Handle the operation using the event emitter pattern.
    client
      .annotateVideo(request)
      .then((responses: Operation[]) => {
        const operation = responses[0];

        // Adding a listener for the "complete" event starts polling for the
        // completion of the operation.
        operation.on('complete', (result: string) => {
          console.log(result);
        });

        // Adding a listener for the "progress" event causes the callback to be
        // called on any change in metadata when the operation is polled.
        operation.on('progress', (metadata: string) => {
          console.log(metadata);
        });

        // Adding a listener for the "error" event handles any errors found during polling.
        operation.on('error', () => {
          // throw(err);
        });
      })
      .then(done)
      .catch(done);
  });
});
