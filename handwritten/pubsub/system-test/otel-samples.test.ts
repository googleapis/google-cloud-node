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
import * as tracing from '../src/telemetry-tracing';
import * as assert from 'assert';
import {describe, it, after, before} from 'mocha';
import {TestResources} from 'google-test-utils';
import {trace} from '@opentelemetry/api';
import {NodeTracerProvider} from '@opentelemetry/sdk-trace-node';
import {SimpleSpanProcessor, InMemorySpanExporter} from '@opentelemetry/sdk-trace-base';
import {waitForMessage} from './common';

describe('OpenTelemetry Samples System Tests', () => {
  let pubsub: PubSub;
  const resources = new TestResources('ps-sys-otel');

  let topicName: string;
  let subName: string;
  let topic: Topic;
  let subscription: Subscription;
  let processor: SimpleSpanProcessor;
  let provider: NodeTracerProvider;
  let exporter: InMemorySpanExporter;

  before(async () => {
    trace.disable();
    tracing.setGloballyEnabled(true);

    exporter = new InMemorySpanExporter();
    processor = new SimpleSpanProcessor(exporter);
    provider = new NodeTracerProvider({
      spanProcessors: [processor],
    });
    provider.register();

    pubsub = new PubSub({enableOpenTelemetryTracing: true});
    topicName = resources.generateName('ot');
    subName = resources.generateName('ot');
    topic = (await pubsub.createTopic(topicName))[0];
    subscription = (await topic.createSubscription(subName))[0];
  });

  after(async () => {
    // Don't interfere with other tests.
    tracing.setGloballyEnabled(false);
    await provider.shutdown();
    trace.disable();

    const [subscriptions] = await pubsub.getSubscriptions();
    await Promise.all(
      resources.filterForCleanup(subscriptions).map(x => x.delete?.())
    );

    const [topics] = await pubsub.getTopics();
    await Promise.all(
      resources.filterForCleanup(topics).map((x: any) => x.delete?.())
    );

    await pubsub?.close();
  });

  it('should publish and listen with OpenTelemetry tracing', async () => {
    const data = 'Hello, world!';
    const dataBuffer = Buffer.from(data);

    const messageId = await topic.publishMessage({data: dataBuffer});
    assert.ok(messageId);

    const message = await waitForMessage(subscription, {
      timeoutMs: 15000,
      timeoutErrorMessage: 'Timeout waiting for OTel message',
    });

    assert.strictEqual(message.data.toString(), data);

    await processor.forceFlush();
    const spans = exporter.getFinishedSpans();
    assert.ok(spans.length > 0, 'Should have generated spans');
  });
});
