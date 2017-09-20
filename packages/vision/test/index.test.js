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
var proxyquire = require('proxyquire');

var Vision = require('../');
var v1 = require('../src/v1');
const VERSION = require('../package.json').version;

function FakeImageAnnotatorClient() {
  this.calledWith_ = arguments;
  return this;
}

function FakeV1() {
  this.calledWith_ = arguments;
  return {
    imageAnnotatorClient: FakeImageAnnotatorClient
  };
}

describe('Vision', () => {

  var MockedVision;
  var PROJECT_ID = 'some-project-id';

  before(function() {
    MockedVision = proxyquire('../', {
      './v1': FakeV1
    });
  });

  describe('v1', () => {
    it('should set up the default api connection details', function() {
      var options = { projectId: PROJECT_ID };
      var vision = new MockedVision.v1(options);
      var calledWith = vision.calledWith_[0];
      assert.strictEqual(calledWith.servicePath, v1.SERVICE_ADDRESS);
      assert.strictEqual(calledWith.port, v1.DEFAULT_SERVICE_PORT);
      assert.strictEqual(calledWith.projectId, options.projectId);
      assert.strictEqual(calledWith.libName, 'gccl');
      assert.strictEqual(calledWith.libVersion, VERSION);
      assert.strictEqual(calledWith.sslCreds, undefined);
    });
    it('should set up custom api connection details', function() {
      var options = {
        projectId: PROJECT_ID,
        servicePath: 'some.custom',
        port: 6666
      };
      var vision = new MockedVision.v1(options);
      var calledWith = vision.calledWith_[0];
      assert.strictEqual(calledWith.servicePath, 'some.custom');
      assert.strictEqual(calledWith.port, 6666);
      assert(calledWith.sslCreds.constructor
        .toString().includes('ChannelCredentials'));
    });
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
      assert(vision.landmarkDetection instanceof Function);
      assert(vision.logoDetection instanceof Function);
      assert(vision.labelDetection instanceof Function);
      assert(vision.textDetection instanceof Function);
      assert(vision.documentTextDetection instanceof Function);
      assert(vision.safeSearchDetection instanceof Function);
      assert(vision.imageProperties instanceof Function);
      assert(vision.cropHints instanceof Function);
      assert(vision.webDetection instanceof Function);
    });
  });
});
