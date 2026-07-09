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

import {Message, PubSub, Schema} from '../src';
import * as assert from 'assert';
import {describe, it, after, before} from 'mocha';
import {TestResources} from './testResources';
import * as avro from 'avro-js';
import * as fs from 'fs';

describe('Avro Samples System Tests', () => {
  const pubsub = new PubSub();
  const resources = new TestResources('ps-sys-avro');

  let schemaId: string;

  before(async () => {
    schemaId = resources.generateName('schema');

    const definition = fs.readFileSync('system-test/fixtures/provinces.avsc').toString();
    await pubsub.createSchema(schemaId, 'AVRO', definition);
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

  async function publishAndListen(encoding: 'BINARY' | 'JSON') {
    const topicName = resources.generateName(`topic-${encoding}`);
    const subName = resources.generateName(`sub-${encoding}`);

    const definition = fs.readFileSync('system-test/fixtures/provinces.avsc').toString();
    const [topic] = await pubsub.createTopic({
      name: topicName,
      schemaSettings: {
        schema: await pubsub.schema(schemaId).getName(),
        encoding,
      }
    });
    const [subscription] = await pubsub.subscription(subName).get();

    const type = avro.parse(definition);

    const province = {
      name: 'Ontario',
      post_abbr: 'ON',
    };

    const dataBuffer = type.toBuffer(province);
    const messageId = await topic.publishMessage({data: dataBuffer});
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
    assert.strictEqual(schemaMetadata.encoding, encoding);

    const result = type.fromBuffer(message.data) as any;
    assert.strictEqual(result.name, 'Ontario');
    assert.strictEqual(result.post_abbr, 'ON');
  }

  it('should publish and listen for avro records (binary encoding)', async () => {
    publishAndListen('BINARY');
  });

  it('should publish and listen for avro records (json encoding)', async () => {
    publishAndListen('JSON');
  });

  it('should listen for avro records with revisions', async () => {
    const definition = fs.readFileSync('system-test/fixtures/provinces.avsc').toString();

    const schemaClient = await pubsub.getSchemaClient();

    const topicName = resources.generateName(`topic-rev`);
    const subName = resources.generateName(`sub-rev`);
    const [topic] = await pubsub.createTopic(topicName);
    const [subscription] = await pubsub.createSubscription(topicName, subName);

    const type = avro.parse(definition);
    const province = {
      name: 'Ontario',
      post_abbr: 'ON',
    };

    const dataBuffer = type.toBuffer(province);
    await topic.publishMessage({data: dataBuffer});

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
