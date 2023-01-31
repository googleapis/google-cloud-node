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

describe('ImageAnnotatorSmokeTest', () => {
  it('successfully makes a call to the service', done => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const vision = require('../src');

    const client = new vision.v1p2beta1.ImageAnnotatorClient({
      // optional auth parameters.
    });

    const gcsImageUri = 'gs://gapic-toolkit/President_Barack_Obama.jpg';
    const source = {
      gcsImageUri,
    };
    const image = {
      source,
    };
    const type = 'FACE_DETECTION';
    const featuresElement = {
      type,
    };
    const features = [featuresElement];
    const requestsElement = {
      image,
      features,
    };
    const requests = [requestsElement];
    client
      .batchAnnotateImages({requests})
      .then((responses: {[index: number]: string}) => {
        const response = responses[0];
        console.log(response);
      })
      .then(done)
      .catch(done);
  });
});
