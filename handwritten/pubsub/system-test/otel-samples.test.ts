import {Message, PubSub} from '../src';
import * as assert from 'assert';
import {describe, it, after, before} from 'mocha';
import {TestResources} from './testResources';
import {BasicTracerProvider, SimpleSpanProcessor, InMemorySpanExporter} from '@opentelemetry/sdk-trace-base';
import {Resource} from '@opentelemetry/resources';
import {SEMRESATTRS_SERVICE_NAME} from '@opentelemetry/semantic-conventions';

describe('OpenTelemetry Samples System Tests', () => {
  const pubsub = new PubSub({enableOpenTelemetryTracing: true});
  const resources = new TestResources('ps-sys-otel');
  const exporter = new InMemorySpanExporter();

  let topicName: string;
  let subName: string;
  let provider: BasicTracerProvider;
  let processor: SimpleSpanProcessor;

  before(async () => {
    topicName = resources.generateName('topic');
    subName = resources.generateName('sub');

    provider = new BasicTracerProvider();
    processor = new SimpleSpanProcessor(exporter);
    provider.addSpanProcessor(processor);
    provider.register();
  });

  after(async () => {
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
    const [topic] = await pubsub.createTopic(topicName);
    const [subscription] = await topic.createSubscription(subName);

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
