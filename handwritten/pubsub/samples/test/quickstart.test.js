/**
 * Copyright 2016, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const proxyquire = require(`proxyquire`).noCallThru();

describe(`pubsub:quickstart`, () => {
  let pubsubMock, PubSubMock;
  const error = new Error(`error`);
  const expectedTopicName = `my-new-topic`;

  before(() => {
    pubsubMock = {
      createTopic: sinon.stub().yields(error)
    };
    PubSubMock = sinon.stub().returns(pubsubMock);
  });

  it(`should handle error`, () => {
    proxyquire(`../quickstart`, {
      '@google-cloud/pubsub': PubSubMock
    });

    assert.equal(PubSubMock.calledOnce, true);
    assert.deepEqual(PubSubMock.firstCall.args, [{ projectId: 'YOUR_PROJECT_ID' }]);
    assert.equal(pubsubMock.createTopic.calledOnce, true);
    assert.deepEqual(pubsubMock.createTopic.firstCall.args.slice(0, -1), [expectedTopicName]);
    assert.equal(console.error.calledOnce, true);
    assert.deepEqual(console.error.firstCall.args, [error]);
  });
});
