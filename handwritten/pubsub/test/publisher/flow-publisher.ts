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
import {describe, it, beforeEach, afterEach} from 'mocha';
import * as sinon from 'sinon';
import * as defer from 'p-defer';

import {
  Publisher,
  flowControlDefaults,
  PublishOptions,
  PubsubMessage,
} from '../../src/publisher';
import {FlowControl} from '../../src/publisher/flow-control';
import * as fp from '../../src/publisher/flow-publisher';
import * as tracing from '../../src/telemetry-tracing';

class FakePublisher {
  flowControl!: FlowControl;
  async publishMessage() {}
  setOptions(options: PublishOptions) {
    this.flowControl.setOptions(options.flowControlOptions!);
  }
}

describe('Flow control publisher', () => {
  let publisher: Publisher;
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    publisher = new FakePublisher() as unknown as Publisher;
    publisher.flowControl = new FlowControl(flowControlDefaults);
  });

  afterEach(() => {
    sandbox.restore();
    tracing.setGloballyEnabled(false);
  });

  it('should create a flow span if a parent exists', async () => {
    tracing.setGloballyEnabled(true);

    const fcp = new fp.FlowControlledPublisher(publisher);
    const message = {
      data: Buffer.from('foo'),
      parentSpan: tracing.PubsubSpans.createPublisherSpan(
        {},
        'projects/foo/topics/topic',
        'tests',
      ),
    };
    await fcp.publish(message as unknown as PubsubMessage);
    assert.strictEqual(!!message.parentSpan, true);
  });

  it('should not create a flow span if no parent exists', async () => {
    const fcp = new fp.FlowControlledPublisher(publisher);
    const message = {data: Buffer.from('foo'), parentSpan: undefined};
    await fcp.publish(message as unknown as PubsubMessage);
    assert.strictEqual(!message.parentSpan, true);
  });

  it('should get no promise if there is flow control space left', async () => {
    publisher.setOptions({
      flowControlOptions: {
        maxOutstandingMessages: 1,
      },
    });

    const addStub = sandbox.stub(publisher, 'publishMessage').resolves('');

    const fcp = new fp.FlowControlledPublisher(publisher);
    const publishResult = fcp.publish({data: Buffer.from('foo')});

    assert.strictEqual(addStub.called, true);
    assert.strictEqual(publishResult, null);
  });

  it('should get a promise when there is no flow control space left', async () => {
    publisher.setOptions({
      flowControlOptions: {
        maxOutstandingMessages: 1,
      },
    });

    const deferred = defer<string>();
    const addStub = sandbox
      .stub(publisher, 'publishMessage')
      .returns(deferred.promise as unknown as void);

    const fcp = new fp.FlowControlledPublisher(publisher);
    const firstResult = fcp.publish({data: Buffer.from('foo')});
    assert.strictEqual(addStub.calledOnce, true);
    assert.strictEqual(firstResult, null);

    const secondResult = fcp.publish({data: Buffer.from('bar')});
    assert.ok(secondResult);
    assert.strictEqual(addStub.calledOnce, true);
    publisher.flowControl.sent(3, 1);
    await secondResult;
    assert.strictEqual(addStub.calledTwice, true);
  });

  it('should still call sent() on send errors', async () => {
    const pubStub = sandbox.stub(publisher, 'publishMessage').rejects();
    const sentStub = sandbox.stub(publisher.flowControl, 'sent');

    const fcp = new fp.FlowControlledPublisher(publisher);
    await fcp.publish({data: Buffer.from('foo')});

    assert.strictEqual(pubStub.called, true);
    assert.strictEqual(sentStub.called, true);
  });

  it('should send messages immediately when publishNow is called', () => {
    const pubStub = sandbox.stub(publisher, 'publishMessage').resolves('');
    const addStub = sandbox.stub(publisher.flowControl, 'addToCount');

    const fcp = new fp.FlowControlledPublisher(publisher);
    fcp.publishNow({data: Buffer.from('foo')});

    assert.strictEqual(pubStub.calledOnce, true);
    assert.deepStrictEqual(addStub.args[0], [3, 1]);
  });

  it('should calculate the message size if needed, in wait mode', async () => {
    sandbox.stub(publisher, 'publishMessage').resolves();
    const fcp = new fp.FlowControlledPublisher(publisher);
    const message: PubsubMessage = {data: Buffer.from('test!')};
    await fcp.publish(message);

    assert.strictEqual(message.calculatedSize, 5);
  });

  it('should calculate the message size if needed, in now mode', () => {
    sandbox.stub(publisher, 'publishMessage').resolves();
    const fcp = new fp.FlowControlledPublisher(publisher);
    const message: PubsubMessage = {data: Buffer.from('test!')};
    fcp.publishNow(message);

    assert.strictEqual(message.calculatedSize, 5);
  });
});
