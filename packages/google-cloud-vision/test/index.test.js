/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const assert = require('assert');

const vision = require('../');

describe('Vision', () => {
  const CREDENTIALS = Object.freeze({
    credentials: {client_email: 'bogus', private_key: 'bogus'},
    projectId: 'bogus',
  });

  describe('v1', () => {
    it('returns a v1 GAPIC augmented with helpers', () => {
      const client = new vision.v1.ImageAnnotatorClient(CREDENTIALS);

      // Assert that the GAPIC v1 methods are present on the object.
      assert(client.batchAnnotateImages instanceof Function);

      // Assert that the manual single-image helper method is present
      // on the object.
      assert(client.annotateImage instanceof Function);

      // Assert that some of the expected single-feature helper methods
      // are present on the object.
      assert(client.faceDetection instanceof Function);
      assert(client.landmarkDetection instanceof Function);
      assert(client.logoDetection instanceof Function);
      assert(client.labelDetection instanceof Function);
      assert(client.textDetection instanceof Function);
      assert(client.documentTextDetection instanceof Function);
      assert(client.safeSearchDetection instanceof Function);
      assert(client.imageProperties instanceof Function);
      assert(client.cropHints instanceof Function);
      assert(client.webDetection instanceof Function);
    });
  });
});
