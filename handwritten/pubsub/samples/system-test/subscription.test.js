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

describe('pubsub:subscription', function () {
  it('should run the sample', function (done) {
    proxyquire('../subscription', {}).main(function (err, results) {
      assert(!err);
      assert(results.length === 8);
      // Got topic and apiResponse
      assert(results[0].length === 2);
      // Got subscription and apiResponse
      assert(results[1].length === 2);
      // Got array of topics
      assert(Array.isArray(results[2]));
      // Got array of subscriptions
      assert(Array.isArray(results[3]));
      // Got messageIds and apiResponse
      assert(results[4].length === 2);
      // Got array of messages
      assert(Array.isArray(results[5]));
      // Got empty apiResponse
      assert.deepEqual(results[6], {});
      // Got empty apiResponse
      assert.deepEqual(results[7], {});
      assert(console.log.calledWith('Created topic messageCenter'));
      assert(console.log.calledWith('Subscribed to messageCenter'));
      assert(console.log.calledWith('Published 1 messages'));
      assert(console.log.calledWith('received message: Hello, world!'));
      assert(console.log.calledWith('Pulled 1 messages'));
      assert(console.log.calledWith('Deleted subscription newMessages'));
      assert(console.log.calledWith('Deleted topic messageCenter'));
      done();
    });
  });
});
