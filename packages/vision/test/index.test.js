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

var assert = require('assert');

var Vision = require('../');


describe('Vision', () => {
  describe('v1', () => {
    it('returns a v1 GAPIC augmented with helpers', () => {
      var vision = Vision.v1();

      // Assert that the GAPIC v1 methods are present on the object.
      assert(vision.batchAnnotateImages instanceof Function);

      // Assert that the manual single-image helper method is present
      // on the object.
      assert(vision.annotateImage instanceof Function);

      // Assert that some of the expected single-feature helper methods
      // are present on the object.
      assert(vision.faceDetection instanceof Function);
      assert(vision.logoDetection instanceof Function);
    });
  });
});
