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
import {RequestCallback, RequestConfig} from '../src/pubsub';
import * as tracing from '../src/telemetry-tracing';
import {waitForMessages} from './common';

interface TopicWithSubscription {
  readonly topic: Topic;
  readonly subscription: Subscription;
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
    for (let i = 0; i < 5; i++) {
      await topic.publishMessage({data: Buffer.from(`warmup-${i}`)});
    }
    assert.strictEqual(topic.publisher.tokenBucket?.getTokenBalance(), 1.0);

    const originalRequest = topic.request.bind(topic);
    let primarySignal: AbortSignal | undefined;
    let hedgedAttemptSent = false;
    let stalledPrimaryIntercepted = false;

    topic.request = <T, R = void>(
      config: RequestConfig,
      callback: RequestCallback<T, R>,
    ) => {
      if (config.method === 'publish' && !stalledPrimaryIntercepted) {
        stalledPrimaryIntercepted = true;
        primarySignal = config.gaxOpts?.signal;
        const abortHandler = () => {
          clearTimeout(stallTimer);
          callback(createCancelledError());
        };
        const stallTimer = setTimeout(() => {
          primarySignal?.removeEventListener('abort', abortHandler);
          originalRequest(config, callback);
        }, 2500);
        primarySignal?.addEventListener('abort', abortHandler, {once: true});
        return;
      }

      if (config.method === 'publish' && config.gaxOpts?.retry === null) {
        hedgedAttemptSent = true;
      }
      originalRequest(config, callback);
    };

    try {
      const hedgedPayload = 'live-hedged-winner';
      const messageId = await topic.publishMessage({
        data: Buffer.from(hedgedPayload),
      });
      assert.ok(messageId);
      assert.strictEqual(hedgedAttemptSent, true);
      assert.strictEqual(primarySignal?.aborted, true);
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
      topic.request = originalRequest;
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

    for (let i = 0; i < 5; i++) {
      await topic.publishMessage({data: Buffer.from(`warmup-primary-${i}`)});
    }
    assert.strictEqual(topic.publisher.tokenBucket?.getTokenBalance(), 1.0);

    const originalRequest = topic.request.bind(topic);
    let hedgedSignal: AbortSignal | undefined;
    let delayedPrimaryIntercepted = false;

    topic.request = <T, R = void>(
      config: RequestConfig,
      callback: RequestCallback<T, R>,
    ) => {
      if (config.method === 'publish' && !delayedPrimaryIntercepted) {
        delayedPrimaryIntercepted = true;
        // Delay primary by 250ms (> 150ms hedgeDelay) before forwarding to live Pub/Sub
        setTimeout(() => {
          originalRequest(config, callback);
        }, 250);
        return;
      }

      if (config.method === 'publish' && config.gaxOpts?.retry === null) {
        hedgedSignal = config.gaxOpts?.signal;
        const abortHandler = () => {
          clearTimeout(hedgedTimer);
          callback(createCancelledError());
        };
        const hedgedTimer = setTimeout(() => {
          hedgedSignal?.removeEventListener('abort', abortHandler);
          originalRequest(config, callback);
        }, 2500);
        hedgedSignal?.addEventListener('abort', abortHandler, {once: true});
        return;
      }

      originalRequest(config, callback);
    };

    try {
      const payload = 'primary-wins-after-hedge';
      const messageId = await topic.publishMessage({
        data: Buffer.from(payload),
      });
      assert.ok(messageId);
      assert.strictEqual(hedgedSignal?.aborted, true);
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
      topic.request = originalRequest;
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
    await topic.publishMessage({data: Buffer.from('partial-warmup-1')});
    await topic.publishMessage({data: Buffer.from('partial-warmup-2')});
    assert.strictEqual(topic.publisher.tokenBucket?.getTokenBalance(), 0.4);

    const originalRequest = topic.request.bind(topic);
    let hedgedAttemptSent = false;
    let delayedPrimaryIntercepted = false;

    topic.request = <T, R = void>(
      config: RequestConfig,
      callback: RequestCallback<T, R>,
    ) => {
      if (config.method === 'publish' && config.gaxOpts?.retry === null) {
        hedgedAttemptSent = true;
      }
      if (config.method === 'publish' && !delayedPrimaryIntercepted) {
        delayedPrimaryIntercepted = true;
        setTimeout(() => {
          originalRequest(config, callback);
        }, 300);
        return;
      }
      originalRequest(config, callback);
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
      topic.request = originalRequest;
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

      for (let i = 0; i < 5; i++) {
        await topic.publishMessage({data: Buffer.from(`otel-warmup-${i}`)});
      }
      await processor.forceFlush();
      exporter.reset();

      const originalRequest = topic.request.bind(topic);
      let stalledPrimaryIntercepted = false;

      topic.request = <T, R = void>(
        config: RequestConfig,
        callback: RequestCallback<T, R>,
      ) => {
        if (config.method === 'publish' && !stalledPrimaryIntercepted) {
          stalledPrimaryIntercepted = true;
          const signal = config.gaxOpts?.signal;
          const abortHandler = () => {
            clearTimeout(stallTimer);
            callback(createCancelledError());
          };
          const stallTimer = setTimeout(() => {
            signal?.removeEventListener('abort', abortHandler);
            originalRequest(config, callback);
          }, 2500);
          signal?.addEventListener('abort', abortHandler, {once: true});
          return;
        }
        originalRequest(config, callback);
      };

      try {
        const messageId = await topic.publishMessage({
          data: Buffer.from('otel-hedged-message'),
        });
        assert.ok(messageId);
      } finally {
        topic.request = originalRequest;
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
