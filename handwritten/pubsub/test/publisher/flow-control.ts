/*!
 * Copyright 2021 Google LLC
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

import * as assert from 'assert';
import {describe, it} from 'mocha';

import * as fc from '../../src/publisher/flow-control';

describe('Flow Controller', () => {
  const optionsDefault: fc.FlowControlOptions = {
    maxOutstandingMessages: 5,
    maxOutstandingBytes: 100,
  };

  it('does basic bookkeeping correctly', async () => {
    const flow = new fc.FlowControl(optionsDefault);
    await flow.willSend(10, 1);
    assert.strictEqual(flow.currentByteCount, 10);
    assert.strictEqual(flow.currentMessageCount, 1);
  });

  // This is an internal detail we really don't want to expose even inside
  // the library, so this function will get it for us in one place.
  function requestQueue(flow: fc.FlowControl) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (flow as any).requests;
  }

  it('queues up a promise when bytes are exceeded', async () => {
    const flow = new fc.FlowControl(optionsDefault);
    const promise = flow.willSend(1000, 1);
    const requests = requestQueue(flow);
    assert.strictEqual(requests.length, 1);
    requests[0].resolve();
    await promise;
  });

  it('queues up a promise when messages are exceeded', async () => {
    const flow = new fc.FlowControl(optionsDefault);
    const promise = flow.willSend(10, 100);
    const requests = requestQueue(flow);
    assert.strictEqual(requests.length, 1);
    requests[0].resolve();
    await promise;
  });

  it('releases a publisher when space is freed', async () => {
    const flow = new fc.FlowControl(optionsDefault);
    const promise = flow.willSend(1000, 1);
    const requests = requestQueue(flow);
    assert.strictEqual(requests.length, 1);
    flow.sent(990, 1);
    assert.strictEqual(requests.length, 0);
    await promise;
  });

  it('releases a publisher only when enough space is freed', async () => {
    const flow = new fc.FlowControl(optionsDefault);
    const promise = flow.willSend(1000, 2);
    const requests = requestQueue(flow);
    assert.strictEqual(requests.length, 1);
    flow.sent(800, 1);
    assert.strictEqual(requests.length, 1);
    flow.sent(150, 1);
    assert.strictEqual(requests.length, 0);
    await promise;
  });

  it('calculates with wouldExceed correctly', () => {
    const flowPause = new fc.FlowControl(optionsDefault);
    assert.strictEqual(flowPause.wouldExceed(10000, 1), true);
    assert.strictEqual(flowPause.wouldExceed(1, 1000), true);
    assert.strictEqual(flowPause.wouldExceed(10000, 1000), true);
    assert.strictEqual(flowPause.wouldExceed(5, 1), false);
  });

  it('sets options after the fact', () => {
    const flowPause = new fc.FlowControl(optionsDefault);
    const newOptions = {
      maxOutstandingMessages: 100,
    };
    flowPause.setOptions(newOptions);
    assert.strictEqual(flowPause.options.maxOutstandingMessages, 100);
  });

  it('does not allow nonsensical option values', () => {
    const flowPause = new fc.FlowControl(optionsDefault);
    const newOptions = {
      maxOutstandingBytes: 0,
      maxOutstandingMessages: 0,
    };
    assert.throws(() => flowPause.setOptions(newOptions));
  });
});
