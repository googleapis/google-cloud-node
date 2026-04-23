import {Message, PubSub, Schema} from '../src';
import * as assert from 'assert';
import {describe, it, after, before} from 'mocha';
import {TestResources} from './testResources';
import * as protobuf from 'protobufjs';
import * as fs from 'fs';

describe('Protobuf Samples System Tests', () => {
  const pubsub = new PubSub();
  const resources = new TestResources('ps-sys-proto');

  let topicName: string;
  let subName: string;
  let schemaId: string;

  before(async () => {
    topicName = resources.generateName('topic');
    subName = resources.generateName('sub');
    schemaId = resources.generateName('schema');
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

    const schemas: any[] = [];
    for await (const s of pubsub.listSchemas()) {
      schemas.push(pubsub.schema(s.name!));
    }
    await Promise.all(
      resources.filterForCleanup(schemas).map(x => x.delete?.())
    );
  });

  it('should publish and listen for protobuf messages', async () => {
    const definition = fs.readFileSync('system-test/fixtures/provinces.proto').toString();

    await pubsub.createSchema(schemaId, 'PROTOCOL_BUFFER', definition);
    const [topic] = await pubsub.createTopic({
      name: topicName,
      schemaSettings: {
        schema: await pubsub.schema(schemaId).getName(),
        encoding: 'BINARY',
      },
    });

    const [subscription] = await topic.createSubscription(subName);

    const root = await protobuf.load('system-test/fixtures/provinces.proto');
    const Province = root.lookupType('utilities.Province');
    const province = {
      name: 'Ontario',
      post_abbr: 'ON',
    };

    const messageObj = Province.create(province);
    (messageObj as any).post_abbr = 'ON';
    const dataBuffer = Buffer.from(Province.encode(messageObj).finish());

    const messageId = await topic.publishMessage({data: dataBuffer});
    assert.ok(messageId);

    const message = await new Promise<Message>((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error('Timeout waiting for Proto message')), 15000);
      subscription.once('message', (m: Message) => {
        clearTimeout(timeout);
        m.ack();
        resolve(m);
      });
    });

    const schemaMetadata = Schema.metadataFromMessage(message.attributes);
    assert.strictEqual(schemaMetadata.encoding, 'BINARY');

    const result = Province.decode(message.data) as any;
    assert.strictEqual(result.name, 'Ontario');
    assert.strictEqual(result.postAbbr || result.post_abbr, 'ON');
  });
});
