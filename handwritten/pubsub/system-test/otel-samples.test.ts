// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {Message, PubSub, Subscription, Topic} from '../src';
import * as assert from 'assert';
import {describe, it, after, before} from 'mocha';
import {TestResources} from './testResources';
import {NodeTracerProvider} from '@opentelemetry/sdk-trace-node';
import {SimpleSpanProcessor, InMemorySpanExporter} from '@opentelemetry/sdk-trace-base';

describe('OpenTelemetry Samples System Tests', () => {
  const pubsub = new PubSub({enableOpenTelemetryTracing: true});
  const resources = new TestResources('ps-sys-otel');

  let topicName: string;
  let subName: string;
  let topic: Topic;
  let subscription: Subscription;
  let processor: SimpleSpanProcessor;
  let provider: NodeTracerProvider;
  let exporter: InMemorySpanExporter;

  before(async () => {
    topicName = resources.generateName('ot');
    subName = resources.generateName('ot');
    topic = (await pubsub.createTopic(topicName))[0];
    subscription = (await topic.createSubscription(subName))[0];

    exporter = new InMemorySpanExporter();

    // Build a tracer provider and a span processor to do
    // something with the spans we're generating.
    provider = new NodeTracerProvider();
    processor = new SimpleSpanProcessor(exporter);
    provider.addSpanProcessor(processor);
    provider.register();
  });

  after(async () => {
    // Don't interfere with other tests.
    provider.shutdown();

    const [subscriptions] = await pubsub.getSubscriptions();
    await Promise.all(
      resources.filterForCleanup(subscriptions).map(x => x.delete?.())
    );

    const [topics] = await pubsub.getTopics();
    await Promise.all(
      resources.filterForCleanup(topics).map((x: any) => x.delete?.())
    );
  });

  it('should publish and listen with OpenTelemetry tracing', async () => {
    const data = 'Hello, world!';
    const dataBuffer = Buffer.from(data);

    const messageId = await topic.publishMessage({data: dataBuffer});
    assert.ok(messageId);

    const message = await new Promise<Message>((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error('Timeout waiting for OTel message')), 15000);
      subscription.once('message', (m: Message) => {
        clearTimeout(timeout);
        m.ack();
        resolve(m);
      });
    });

    assert.strictEqual(message.data.toString(), data);

    await processor.forceFlush();
    const spans = exporter.getFinishedSpans();
    assert.ok(spans.length > 0, 'Should have generated spans');
  });
});
