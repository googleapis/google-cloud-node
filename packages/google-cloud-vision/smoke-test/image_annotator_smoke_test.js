// Copyright 2020 Google LLC
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

'use strict';

const {describe, it} = require('mocha');

describe('ImageAnnotatorSmokeTest', () => {
  it('successfully makes a call to the service', done => {
    // eslint-disable-next-line node/no-missing-require
    const vision = require('@google-cloud/vision');

    const client = new vision.v1p3beta1.ImageAnnotatorClient({
      // optional auth parameters.
    });

    const gcsImageUri =
      'gs://cloud-samples-data/vision/face_detection/celebrity_recognition/sergey.jpg';
    const source = {
      gcsImageUri: gcsImageUri,
    };
    const image = {
      source: source,
    };
    const type = 'FACE_DETECTION';
    const featuresElement = {
      type: type,
    };
    const features = [featuresElement];
    const requestsElement = {
      image: image,
      features: features,
    };
    const requests = [requestsElement];
    client
      .batchAnnotateImages({requests: requests})
      .then(responses => {
        const response = responses[0];
        console.log(response);
      })
      .then(done)
      .catch(done);
  });
});
