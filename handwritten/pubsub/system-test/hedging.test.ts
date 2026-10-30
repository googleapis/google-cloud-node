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

import * as assert from 'assert';
import {describe, it, before, after} from 'mocha';
import {TestResources} from 'google-test-utils';
import * as gax from 'google-gax';
import {trace} from '@opentelemetry/api';
import {NodeTracerProvider} from '@opentelemetry/sdk-trace-node';
import {
  SimpleSpanProcessor,
  InMemorySpanExporter,
} from '@opentelemetry/sdk-trace-base';

import {
  Duration,
  PubSub,
  PublishOptions,
  Subscription,
  Topic,
} from '../src';
import {google} from '../protos/protos';
import * as tracing from '../src/telemetry-tracing';
import {waitForMessages} from './common';

interface TopicWithSubscription {
  readonly topic: Topic;
  readonly subscription: Subscription;
}

type GrpcPublishCallback = (
  err: gax.grpc.ServiceError | null,
  response?: google.pubsub.v1.IPublishResponse,
) => void;

type GrpcPublishFn = (
  argument: google.pubsub.v1.IPublishRequest,
  metadata: gax.grpc.Metadata,
  options: gax.CallOptions,
  callback: GrpcPublishCallback,
) => {cancel: () => void};

interface PublisherGrpcStub {
  publish: GrpcPublishFn;
}

function createCancelledError(): gax.grpc.ServiceError {
  const statusObject = {
    code: gax.Status.CANCELLED,
    details: 'Call cancelled.',
    metadata: new gax.grpc.Metadata(),
  };
  const err = new Error(statusObject.details);
  return Object.assign(err, statusObject) as gax.grpc.ServiceError;
}

async function getPublisherStub(
  targetPubSub: PubSub,
): Promise<PublisherGrpcStub> {
  const client = await targetPubSub.getClientAsync_({
    client: 'PublisherClient',
  });
  return (
    client as unknown as {initialize(): Promise<PublisherGrpcStub>}
  ).initialize();
}

function decodeTelemetryMetadata(
  metadata: gax.grpc.Metadata,
): google.pubsub.v1.PubsubClientTelemetry | undefined {
  const values = metadata.get('x-goog-pubsub-client-telemetry');
  const b64 = values[0];
  if (typeof b64 !== 'string' || !b64) {
    return undefined;
  }
  return google.pubsub.v1.PubsubClientTelemetry.decode(
    Buffer.from(b64, 'base64'),
  );
}

async function warmUpTokenBucket(
  topic: Topic,
  count = 5,
  prefix = 'warmup',
): Promise<void> {
  for (let i = 0; i < count; i++) {
    await topic.publishMessage({data: Buffer.from(`${prefix}-${i}`)});
  }
}

async function waitForCondition(
  predicate: () => boolean,
  timeoutMs = 5000,
  intervalMs = 25,
): Promise<boolean> {
  const start = Date.now();
  while (!predicate()) {
    if (Date.now() - start > timeoutMs) {
      return false;
    }
    await new Promise(resolve => setTimeout(resolve, intervalMs));
  }
  return true;
}

describe('Publish Hedging System Tests', () => {
  const pubsub = new PubSub();
  const resources = new TestResources('ps-sys-hedge');

  async function createTopicAndSubscription(
    prefix: string,
    publishOptions?: PublishOptions,
  ): Promise<TopicWithSubscription> {
    const topicName = resources.generateName(`top-${prefix}`);
    const subName = resources.generateName(`sub-${prefix}`);
    const [createdTopic] = await pubsub.createTopic(topicName);
    const [subscription] = await createdTopic.createSubscription(subName);
    const topic = publishOptions
      ? pubsub.topic(topicName, publishOptions)
      : createdTopic;
    return {topic, subscription};
  }

  async function cleanupResources(): Promise<void> {
    const [subscriptions] = await pubsub.getSubscriptions();
    await Promise.all(
      resources.filterForCleanup(subscriptions).map(x => x.delete?.()),
    );

    const [topics] = await pubsub.getTopics();
    await Promise.all(
      resources.filterForCleanup(topics).map(x => x.delete?.()),
    );
  }

  before(async () => {
    await cleanupResources();
  });

  after(async () => {
    await cleanupResources();
  });

  it('should publish batches with default hedging settings and refill the token bucket', async () => {
    const {topic, subscription} = await createTopicAndSubscription('default', {
      batching: {maxMessages: 1},
      hedging: {},
    });

    assert.strictEqual(topic.publisher.tokenBucket?.getTokenBalance(), 0);

    const messageCount = 10;
    for (let i = 0; i < messageCount; i++) {
      const messageId = await topic.publishMessage({
        data: Buffer.from(`default-hedging-${i}`),
      });
      assert.ok(messageId);
    }

    assert.strictEqual(topic.publisher.tokenBucket?.getTokenBalance(), 1.0);

    const received = await waitForMessages(subscription, {
      count: messageCount,
      timeoutMs: 20000,
      timeoutErrorMessage:
        'Timeout waiting for default hedging published messages',
      closeWhenDone: true,
    });
    assert.strictEqual(received.length, messageCount);
  });

  it('should publish with custom hedging options and cap token balance at maxTokens', async () => {
    const {topic, subscription} = await createTopicAndSubscription('custom', {
      batching: {maxMessages: 1},
      hedging: {
        hedgeDelay: Duration.from({milliseconds: 200}),
        maxTokens: 1,
        refillRatio: 0.2,
      },
    });

    const messageCount = 8;
    for (let i = 0; i < messageCount; i++) {
      const messageId = await topic.publishMessage({
        data: Buffer.from(`custom-hedging-${i}`),
      });
      assert.ok(messageId);
    }

    // 8 * 0.2 = 1.6, capped at maxTokens = 1.0
    assert.strictEqual(topic.publisher.tokenBucket?.getTokenBalance(), 1.0);

    const received = await waitForMessages(subscription, {
      count: messageCount,
      timeoutMs: 20000,
      timeoutErrorMessage:
        'Timeout waiting for custom hedging published messages',
      closeWhenDone: true,
    });
    assert.strictEqual(received.length, messageCount);
  });

  it('should enable and update hedging dynamically via setPublishOptions', async () => {
    const {topic, subscription} = await createTopicAndSubscription('dynamic', {
      batching: {maxMessages: 1},
    });

    const initialBucket = topic.publisher.tokenBucket;
    assert.strictEqual(initialBucket, undefined);

    const firstId = await topic.publishMessage({
      data: Buffer.from('before-hedging'),
    });
    assert.ok(firstId);

    topic.setPublishOptions({
      batching: {maxMessages: 1},
      hedging: {
        hedgeDelay: Duration.from({milliseconds: 150}),
        maxTokens: 5,
        refillRatio: 0.2,
      },
    });

    assert.strictEqual(topic.publisher.tokenBucket?.getTokenBalance(), 0);

    for (let i = 0; i < 5; i++) {
      const messageId = await topic.publishMessage({
        data: Buffer.from(`after-hedging-${i}`),
      });
      assert.ok(messageId);
    }

    assert.strictEqual(topic.publisher.tokenBucket?.getTokenBalance(), 1.0);

    topic.setPublishOptions({
      batching: {maxMessages: 1},
      hedging: {
        enabled: false,
      },
    });
    assert.strictEqual(topic.publisher.tokenBucket, undefined);

    const received = await waitForMessages(subscription, {
      count: 6,
      timeoutMs: 20000,
      timeoutErrorMessage:
        'Timeout waiting for dynamically hedged published messages',
      closeWhenDone: true,
    });
    assert.strictEqual(received.length, 6);
  });

  it('should win via live hedged attempt and abort stalled primary attempt', async () => {
    const {topic, subscription} = await createTopicAndSubscription(
      'hedge-win',
      {
        batching: {maxMessages: 1},
        hedging: {
          hedgeDelay: Duration.from({milliseconds: 150}),
          maxTokens: 5,
          refillRatio: 0.2,
        },
      },
    );

    // Warm up token bucket to 1.0 token using real live Pub/Sub calls
    await warmUpTokenBucket(topic, 5, 'warmup');
    assert.strictEqual(topic.publisher.tokenBucket?.getTokenBalance(), 1.0);

    const stub = await getPublisherStub(pubsub);
    const originalPublish = stub.publish.bind(stub);
    let primaryCancelledByGax = false;
    let hedgedAttemptSent = false;
    let hedgedTelemetry: google.pubsub.v1.PubsubClientTelemetry | undefined;
    let stalledPrimaryIntercepted = false;
    let stallTimer: NodeJS.Timeout | undefined;

    stub.publish = (argument, metadata, options, callback) => {
      const telemetry = decodeTelemetryMetadata(metadata);
      const attemptCount =
        telemetry?.publishOperation?.hedgedAttemptCount ?? 0;

      if (attemptCount === 0 && !stalledPrimaryIntercepted) {
        stalledPrimaryIntercepted = true;
        stallTimer = setTimeout(() => {
          stallTimer = undefined;
          originalPublish(argument, metadata, options, callback);
        }, 20000);
        return {
          cancel: () => {
            primaryCancelledByGax = true;
            if (stallTimer) {
              clearTimeout(stallTimer);
              stallTimer = undefined;
            }
            callback(createCancelledError());
          },
        };
      }

      if (attemptCount > 0) {
        hedgedAttemptSent = true;
        hedgedTelemetry = telemetry;
      }
      return originalPublish(argument, metadata, options, callback);
    };

    try {
      const hedgedPayload = 'live-hedged-winner';
      const messageId = await topic.publishMessage({
        data: Buffer.from(hedgedPayload),
      });
      assert.ok(messageId);
      assert.strictEqual(hedgedAttemptSent, true);
      assert.strictEqual(
        await waitForCondition(() => primaryCancelledByGax),
        true,
        'Expected stalled primary attempt to be cancelled by GAX',
      );
      assert.strictEqual(
        hedgedTelemetry?.publishOperation?.hedgedAttemptCount,
        1,
      );
      assert.ok(
        Number(
          hedgedTelemetry?.publishOperation?.publishStartTime?.seconds ?? 0,
        ) > 0,
      );
      // 1.0 token consumed (-1.0) and refilled (+0.2) on completion => 0.2
      assert.strictEqual(topic.publisher.tokenBucket?.getTokenBalance(), 0.2);

      const received = await waitForMessages(subscription, {
        count: 6,
        timeoutMs: 20000,
        timeoutErrorMessage: 'Timeout waiting for hedged winner messages',
        closeWhenDone: true,
      });
      const payloads = received.map(m => m.data.toString());
      assert.ok(payloads.includes(hedgedPayload));
    } finally {
      if (stallTimer) {
        clearTimeout(stallTimer);
      }
      stub.publish = originalPublish;
    }
  });

  it('should abort in-flight hedged attempt when primary attempt completes against live service', async () => {
    const {topic, subscription} = await createTopicAndSubscription(
      'primary-win',
      {
        batching: {maxMessages: 1},
        hedging: {
          hedgeDelay: Duration.from({milliseconds: 150}),
          maxTokens: 5,
          refillRatio: 0.2,
        },
      },
    );

    await warmUpTokenBucket(topic, 5, 'warmup-primary');
    assert.strictEqual(topic.publisher.tokenBucket?.getTokenBalance(), 1.0);

    const stub = await getPublisherStub(pubsub);
    const originalPublish = stub.publish.bind(stub);
    let hedgedCancelledByGax = false;
    let delayedPrimaryIntercepted = false;
    let primaryDelayTimer: NodeJS.Timeout | undefined;
    let hedgedTimer: NodeJS.Timeout | undefined;

    stub.publish = (argument, metadata, options, callback) => {
      const telemetry = decodeTelemetryMetadata(metadata);
      const attemptCount =
        telemetry?.publishOperation?.hedgedAttemptCount ?? 0;

      if (attemptCount === 0 && !delayedPrimaryIntercepted) {
        delayedPrimaryIntercepted = true;
        let innerCall: {cancel: () => void} | undefined;
        // Delay primary by 250ms (> 150ms hedgeDelay) before forwarding to live Pub/Sub
        primaryDelayTimer = setTimeout(() => {
          primaryDelayTimer = undefined;
          innerCall = originalPublish(argument, metadata, options, callback);
        }, 250);
        return {
          cancel: () => {
            if (primaryDelayTimer) {
              clearTimeout(primaryDelayTimer);
              primaryDelayTimer = undefined;
              callback(createCancelledError());
            } else {
              innerCall?.cancel();
            }
          },
        };
      }

      if (attemptCount > 0) {
        hedgedTimer = setTimeout(() => {
          hedgedTimer = undefined;
          originalPublish(argument, metadata, options, callback);
        }, 20000);
        return {
          cancel: () => {
            hedgedCancelledByGax = true;
            if (hedgedTimer) {
              clearTimeout(hedgedTimer);
              hedgedTimer = undefined;
            }
            callback(createCancelledError());
          },
        };
      }

      return originalPublish(argument, metadata, options, callback);
    };

    try {
      const payload = 'primary-wins-after-hedge';
      const messageId = await topic.publishMessage({
        data: Buffer.from(payload),
      });
      assert.ok(messageId);
      assert.strictEqual(
        await waitForCondition(() => hedgedCancelledByGax),
        true,
        'Expected in-flight hedged attempt to be cancelled by GAX',
      );
      assert.strictEqual(topic.publisher.tokenBucket?.getTokenBalance(), 0.2);

      const received = await waitForMessages(subscription, {
        count: 6,
        timeoutMs: 20000,
        timeoutErrorMessage: 'Timeout waiting for primary winner messages',
        closeWhenDone: true,
      });
      const payloads = received.map(m => m.data.toString());
      assert.ok(payloads.includes(payload));
    } finally {
      if (primaryDelayTimer) {
        clearTimeout(primaryDelayTimer);
      }
      if (hedgedTimer) {
        clearTimeout(hedgedTimer);
      }
      stub.publish = originalPublish;
    }
  });

  it('should not dispatch a hedged attempt when token bucket balance is below 1.0', async () => {
    const {topic, subscription} = await createTopicAndSubscription(
      'rate-limit',
      {
        batching: {maxMessages: 1},
        hedging: {
          hedgeDelay: Duration.from({milliseconds: 150}),
          maxTokens: 5,
          refillRatio: 0.2,
        },
      },
    );

    // Publish 2 messages => 0.4 tokens (< 1.0 required for hedging)
    await warmUpTokenBucket(topic, 2, 'partial-warmup');
    assert.strictEqual(topic.publisher.tokenBucket?.getTokenBalance(), 0.4);

    const stub = await getPublisherStub(pubsub);
    const originalPublish = stub.publish.bind(stub);
    let hedgedAttemptSent = false;
    let delayedPrimaryIntercepted = false;
    let primaryDelayTimer: NodeJS.Timeout | undefined;

    stub.publish = (argument, metadata, options, callback) => {
      const telemetry = decodeTelemetryMetadata(metadata);
      const attemptCount =
        telemetry?.publishOperation?.hedgedAttemptCount ?? 0;

      if (attemptCount > 0) {
        hedgedAttemptSent = true;
      }
      if (attemptCount === 0 && !delayedPrimaryIntercepted) {
        delayedPrimaryIntercepted = true;
        let innerCall: {cancel: () => void} | undefined;
        primaryDelayTimer = setTimeout(() => {
          primaryDelayTimer = undefined;
          innerCall = originalPublish(argument, metadata, options, callback);
        }, 300);
        return {
          cancel: () => {
            if (primaryDelayTimer) {
              clearTimeout(primaryDelayTimer);
              primaryDelayTimer = undefined;
              callback(createCancelledError());
            } else {
              innerCall?.cancel();
            }
          },
        };
      }
      return originalPublish(argument, metadata, options, callback);
    };

    try {
      const messageId = await topic.publishMessage({
        data: Buffer.from('slow-but-rate-limited'),
      });
      assert.ok(messageId);
      assert.strictEqual(hedgedAttemptSent, false);
      assert.strictEqual(topic.publisher.tokenBucket?.getTokenBalance(), 0.6);

      const received = await waitForMessages(subscription, {
        count: 3,
        timeoutMs: 20000,
        timeoutErrorMessage: 'Timeout waiting for rate-limited messages',
        closeWhenDone: true,
      });
      assert.strictEqual(received.length, 3);
    } finally {
      if (primaryDelayTimer) {
        clearTimeout(primaryDelayTimer);
      }
      stub.publish = originalPublish;
    }
  });

  it('should record OpenTelemetry hedged publish start and end span events on live hedged publish', async () => {
    const exporter = new InMemorySpanExporter();
    const processor = new SimpleSpanProcessor(exporter);
    const provider = new NodeTracerProvider({
      spanProcessors: [processor],
    });
    provider.register();

    const otelPubSub = new PubSub({enableOpenTelemetryTracing: true});
    const topicName = resources.generateName('top-otel-hedge');
    const subName = resources.generateName('sub-otel-hedge');

    try {
      const [createdTopic] = await otelPubSub.createTopic(topicName);
      const [subscription] = await createdTopic.createSubscription(subName);
      const topic = otelPubSub.topic(topicName, {
        batching: {maxMessages: 1},
        hedging: {
          hedgeDelay: Duration.from({milliseconds: 150}),
          maxTokens: 5,
          refillRatio: 0.2,
        },
      });

      await warmUpTokenBucket(topic, 5, 'otel-warmup');
      await processor.forceFlush();
      exporter.reset();

      const stub = await getPublisherStub(otelPubSub);
      const originalPublish = stub.publish.bind(stub);
      let stalledPrimaryIntercepted = false;
      let stallTimer: NodeJS.Timeout | undefined;

      stub.publish = (argument, metadata, options, callback) => {
        const telemetry = decodeTelemetryMetadata(metadata);
        const attemptCount =
          telemetry?.publishOperation?.hedgedAttemptCount ?? 0;

        if (attemptCount === 0 && !stalledPrimaryIntercepted) {
          stalledPrimaryIntercepted = true;
          stallTimer = setTimeout(() => {
            stallTimer = undefined;
            originalPublish(argument, metadata, options, callback);
          }, 20000);
          return {
            cancel: () => {
              if (stallTimer) {
                clearTimeout(stallTimer);
                stallTimer = undefined;
              }
              callback(createCancelledError());
            },
          };
        }
        return originalPublish(argument, metadata, options, callback);
      };

      try {
        const messageId = await topic.publishMessage({
          data: Buffer.from('otel-hedged-message'),
        });
        assert.ok(messageId);
      } finally {
        if (stallTimer) {
          clearTimeout(stallTimer);
        }
        stub.publish = originalPublish;
      }

      const received = await waitForMessages(subscription, {
        count: 6,
        timeoutMs: 20000,
        timeoutErrorMessage: 'Timeout waiting for OTel hedged messages',
        closeWhenDone: true,
      });
      assert.strictEqual(received.length, 6);

      await processor.forceFlush();
      const spans = exporter.getFinishedSpans();
      const eventNames = spans.flatMap(span => span.events.map(ev => ev.name));
      assert.ok(
        eventNames.includes('publish start (hedged)'),
        `Expected 'publish start (hedged)' in span events: ${JSON.stringify(eventNames)}`,
      );
      assert.ok(
        eventNames.includes('publish end (hedged)'),
        `Expected 'publish end (hedged)' in span events: ${JSON.stringify(eventNames)}`,
      );
    } finally {
      tracing.setGloballyEnabled(false);
      await provider.shutdown();
      trace.disable();
      await otelPubSub.close();
    }
  });

  it('should disallow messageOrdering with hedging and reject messages with orderingKey when hedging is enabled', async () => {
    const topicName = resources.generateName('top-order-excl');
    assert.throws(() => {
      pubsub.topic(topicName, {
        messageOrdering: true,
        hedging: {},
      });
    }, /Publish hedging and message ordering cannot be enabled at the same time/);

    const {topic} = await createTopicAndSubscription('order-key', {
      batching: {maxMessages: 1},
      hedging: {
        hedgeDelay: Duration.from({milliseconds: 150}),
        maxTokens: 5,
        refillRatio: 0.2,
      },
    });

    await assert.rejects(
      topic.publishMessage({
        data: Buffer.from('ordered-key-message'),
        orderingKey: 'key-1',
      }),
      /Publish hedging and message ordering cannot be enabled at the same time/,
    );
    assert.strictEqual(topic.publisher.tokenBucket?.getTokenBalance(), 0);
  });
});
