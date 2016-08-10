// Copyright 2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var proxyquire = require('proxyquire');

describe('pubsub:iam', function () {
  it('should run the sample', function (done) {
    proxyquire('../iam', {}).main(function (err, results) {
      assert.ifError(err);
      assert(results.length === 8);
      // Got topic and apiResponse
      assert(results[0].length === 2);
      // Got policy and apiResponse
      assert(results[1].length === 2);
      // Got permissions and apiResponse
      assert(results[2].length === 2);
      // Got subscription and apiResponse
      assert(results[3].length === 2);
      // Got policy and apiResponse
      assert(results[4].length === 2);
      // Got permissions and apiResponse
      assert(results[5].length === 2);
      // Got empty apiResponse
      assert.deepEqual(results[6], {});
      // Got empty apiResponse
      assert.deepEqual(results[7], {});
      assert(console.log.calledWith('Created topic messageCenter2'));
      assert(console.log.calledWith('Got permissions for messageCenter2'));
      assert(console.log.calledWith('Subscribed to messageCenter2'));
      assert(console.log.calledWith('Got permissions for newMessages2'));
      assert(console.log.calledWith('Deleted subscription newMessages2'));
      assert(console.log.calledWith('Deleted topic messageCenter2'));
      done();
    });
  });
});
