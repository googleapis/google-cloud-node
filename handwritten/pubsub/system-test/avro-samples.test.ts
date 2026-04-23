import {Message, PubSub, Schema} from '../src';
import * as assert from 'assert';
import {describe, it, after, before} from 'mocha';
import {TestResources} from './testResources';
import * as avro from 'avro-js';
import * as fs from 'fs';

describe('Avro Samples System Tests', () => {
  const pubsub = new PubSub();
  const resources = new TestResources('ps-sys-avro');

  let topicName: string;
  let subName: string;
  let schemaId: string;

  before(async () => {
    topicName = resources.generateName('topic');
    subName = resources.generateName('sub');
    schemaId = resources.generateName('schema');

    const definition = fs.readFileSync('system-test/fixtures/provinces.avsc').toString();
    await pubsub.createSchema(schemaId, 'AVRO', definition);
    await pubsub.createTopic({
      name: topicName,
      schemaSettings: {
        schema: await pubsub.schema(schemaId).getName(),
        encoding: 'BINARY',
      },
    });

    const [topic] = await pubsub.topic(topicName).get();
    await topic.createSubscription(subName);
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

  it('should publish and listen for avro records', async () => {
    const definition = fs.readFileSync('system-test/fixtures/provinces.avsc').toString();
    const [topic] = await pubsub.topic(topicName).get();
    const [subscription] = await pubsub.subscription(subName).get();

    const type = avro.parse(definition);

    const province = {
      name: 'Ontario',
      post_abbr: 'ON',
    };

    const dataBuffer = type.toBuffer(province);
    const messageId = await topic.publish(dataBuffer);
    assert.ok(messageId);

    const message = await new Promise<Message>((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error('Timeout waiting for Avro record')), 15000);
      subscription.once('message', (m: Message) => {
        clearTimeout(timeout);
        m.ack();
        resolve(m);
      });
    });

    const schemaMetadata = Schema.metadataFromMessage(message.attributes);
    assert.strictEqual(schemaMetadata.encoding, 'BINARY');

    const result = type.fromBuffer(message.data) as any;
    assert.strictEqual(result.name, 'Ontario');
    assert.strictEqual(result.post_abbr, 'ON');
  });

  it('should listen for avro records with revisions', async () => {
    const definition = fs.readFileSync('system-test/fixtures/provinces.avsc').toString();

    const schemaClient = await pubsub.getSchemaClient();

    const [topic] = await pubsub.topic(topicName).get();
    const [subscription] = await pubsub.subscription(subName).get();

    const type = avro.parse(definition);
    const province = {
      name: 'Ontario',
      post_abbr: 'ON',
    };

    const dataBuffer = type.toBuffer(province);
    await topic.publish(dataBuffer);

    const message = await new Promise<Message>((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error('Timeout waiting for Avro revision')), 15000);
      subscription.once('message', (m: Message) => {
        clearTimeout(timeout);
        m.ack();
        resolve(m);
      });
    });

    const schemaMetadata = Schema.metadataFromMessage(message.attributes);
    const revision = schemaMetadata.revision!;
    assert.ok(revision);

    const [fetchedSchema] = await schemaClient.getSchema({
      name: `${schemaMetadata.name}@${schemaMetadata.revision}`,
    });

    const reader = avro.parse(fetchedSchema.definition!);
    const result = reader.fromBuffer(message.data) as any;

    assert.strictEqual(result.name, 'Ontario');
    assert.strictEqual(result.post_abbr, 'ON');
  });
});
