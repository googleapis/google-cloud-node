/*
 * Copyright 2017, Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
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
var v1beta1 = require('../src/v1beta1');

function FakeVideoIntelligenceServiceClient() {
  this.calledWith_ = arguments;
  return this;
}

function FakeV1Beta1() {
  this.calledWith_ = arguments;
  return {
    videoIntelligenceServiceClient: FakeVideoIntelligenceServiceClient
  };
}

describe('Video Intelligence', function() {
  var VideoIntelligence;
  var PROJECT_ID = 'some-project-id';

  before(function() {
    VideoIntelligence = proxyquire('../', {
      './v1beta1': FakeV1Beta1
    });
  });

  describe('instantiation v1beta1', function() {
    it('should set up the default api connection details', function() {
      var options = { projectId: PROJECT_ID };
      var videoIntelligence = new VideoIntelligence(options);
      var calledWith = videoIntelligence.calledWith_[0];
      assert.strictEqual(calledWith.servicePath, v1beta1.SERVICE_ADDRESS);
      assert.strictEqual(calledWith.port, v1beta1.DEFAULT_SERVICE_PORT);
      assert.strictEqual(calledWith.projectId, options.projectId);
      assert.strictEqual(calledWith.libName, 'gccl');
      assert.strictEqual(calledWith.libVersion, '0.1.1');
      assert.strictEqual(calledWith.sslCreds, undefined);
    });
    it('should set up custom api connection details', function() {
      var options = {
        projectId: PROJECT_ID,
        servicePath: 'some.custom',
        port: 6666
      };
      var videoIntelligence = new VideoIntelligence(options);
      var calledWith = videoIntelligence.calledWith_[0];
      assert.strictEqual(calledWith.servicePath, 'some.custom');
      assert.strictEqual(calledWith.port, 6666);
      assert(calledWith.sslCreds.constructor
        .toString().includes('ChannelCredentials'));
    });
  });
});