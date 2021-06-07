// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {
  Encodings,
  Message,
  PubSub,
  Schema,
  SchemaEncoding,
  SchemaTypes,
  Subscription,
  Topic,
} from '@google-cloud/pubsub';
import {assert} from 'chai';
import {describe, it, afterEach} from 'mocha';
import * as cp from 'child_process';
import * as uuid from 'uuid';
import * as path from 'path';
import * as defer from 'p-defer';

// Tests run as Node 12.
// eslint-disable-next-line node/no-unsupported-features/node-builtins
import {promises as fs} from 'fs';

const execSync = (cmd: string) => cp.execSync(cmd, {encoding: 'utf-8'});

describe('schema', () => {
  const projectId = process.env.GCLOUD_PROJECT;
  const pubsub = new PubSub({projectId});
  const runId = uuid.v4();
  console.log(`Topics runId: ${runId}`);
  const topicIdStem = `schema-top-${runId}`;
  const subscriptionIdStem = `schema-sub-${runId}`;
  const schemaIdStem = `schema-${runId}`;

  // Schemas have a delay between deletion and actual deletion, so
  // we have to make unique schema names. It's simplest to do it for topics
  // and subscriptions too.
  let curTopic = 1;
  function getTopicId(): string {
    return topicIdStem + curTopic++;
  }

  let curSub = 1;
  function getSubId(): string {
    return subscriptionIdStem + curSub++;
  }

  let curSchema = 1;
  function getSchemaId(): string {
    return schemaIdStem + curSchema++;
  }

  function fullSchemaName(base: string) {
    return `projects/${projectId}/schemas/${base}`;
  }

  const commandFor = (action: string) => `node ${action}.js`;

  async function cleanSchemas() {
    const schemas = [];
    for await (const s of pubsub.listSchemas()) {
      schemas.push(pubsub.schema(s.name!).delete());
    }
    await Promise.all(schemas);
  }

  async function cleanTopics() {
    const [topics] = await pubsub.getTopics();
    await Promise.all(
      topics.filter(x => x.name.endsWith(runId)).map(x => x.delete())
    );
  }

  async function cleanSubs() {
    const [subscriptions] = await pubsub.getSubscriptions();
    await Promise.all(
      subscriptions.filter(x => x.name.endsWith(runId)).map(x => x.delete())
    );
  }

  afterEach(async () => {
    await cleanSubs();
    await cleanTopics();
    await cleanSchemas();
  });

  function fixturePath(fixture: string): string {
    return path.join(__dirname, '..', '..', 'system-test', 'fixtures', fixture);
  }

  async function createSchema(type: 'avro' | 'proto'): Promise<Schema> {
    const suffix = type === 'avro' ? 'avsc' : 'proto';
    const encoding =
      type === 'avro' ? SchemaTypes.Avro : SchemaTypes.ProtocolBuffer;
    const def = (
      await fs.readFile(fixturePath(`provinces.${suffix}`))
    ).toString();
    const schemaId = getSchemaId();
    const schema = await pubsub.createSchema(schemaId, encoding, def);
    assert.ok(schema);

    return schema;
  }

  async function createTopicWithSchema(
    schemaName: string,
    encodingType: SchemaEncoding
  ): Promise<Topic> {
    const topicId = getTopicId();
    const [topic] = await pubsub.createTopic({
      name: topicId,
      schemaSettings: {
        schema: fullSchemaName(schemaName),
        encoding: encodingType,
      },
    });
    assert.ok(topic);

    return topic;
  }

  async function createSub(topicName: string): Promise<Subscription> {
    const subId = getSubId();
    const [sub] = await pubsub.createSubscription(topicName, subId);
    assert.ok(sub);

    return sub;
  }

  it('should create an avro schema', async () => {
    const schemaId = getSchemaId();
    const output = execSync(
      `${commandFor('createAvroSchema')} ${schemaId} ${fixturePath(
        'provinces.avsc'
      )}`
    );
    assert.include(output, schemaId);
    assert.include(output, 'created.');

    let found = false;
    for await (const s of pubsub.listSchemas()) {
      if (s.name?.endsWith(schemaId)) {
        found = true;
        break;
      }
    }

    assert.ok(found, 'created schema was not found');
  });

  it('should create a proto schema', async () => {
    const schemaId = getSchemaId();
    const output = execSync(
      `${commandFor('createProtoSchema')} ${schemaId} ${fixturePath(
        'provinces.proto'
      )}`
    );
    assert.include(output, schemaId);
    assert.include(output, 'created.');

    let found = false;
    for await (const s of pubsub.listSchemas()) {
      if (s.name?.endsWith(schemaId)) {
        found = true;
        break;
      }
    }

    assert.ok(found, 'created schema was not found');
  });

  it('should create a topic with a schema', async () => {
    const schema = await createSchema('proto');
    const topicId = getTopicId();
    const output = execSync(
      `${commandFor('createTopicWithSchema')} ${topicId} ${schema.id} BINARY`
    );
    assert.include(output, topicId);
    assert.include(output, schema.id);
    assert.include(output, 'created with');

    const [topic] = await pubsub.topic(topicId).get();
    assert.include(topic.metadata?.schemaSettings?.schema, schema.id);
  });

  it('should delete a schema', async () => {
    const schema = await createSchema('proto');

    const output = execSync(`${commandFor('deleteSchema')} ${schema.id}`);
    assert.include(output, schema.id);
    assert.include(output, 'deleted.');

    try {
      const got = await pubsub.schema(schema.id).get();
      assert.isNotOk(got, "schema hadn't been deleted");
    } catch (e) {
      // This is expected.
    }
  });

  it('should get a schema', async () => {
    const schema = await createSchema('proto');

    const output = execSync(`${commandFor('getSchema')} ${schema.id}`);
    assert.include(output, schema.id);
    assert.include(output, 'info:');
    assert.include(output, 'PROTO');
  });

  it('should listen for avro records', async () => {
    const schema = await createSchema('avro');
    const topic = await createTopicWithSchema(schema.id, Encodings.Json);
    const sub = await createSub(topic.name);

    topic.publish(
      Buffer.from(
        JSON.stringify({
          name: 'Alberta',
          post_abbr: 'AB',
        })
      )
    );
    await topic.flush();

    const output = execSync(
      `${commandFor('listenForAvroRecords')} ${sub.name} 3`
    );
    assert.include(output, 'Received message');
    assert.include(output, 'Alberta');
    assert.include(output, 'AB');
  });

  it('should listen for protobuf messages', async () => {
    const schema = await createSchema('proto');
    const topic = await createTopicWithSchema(schema.id, Encodings.Json);
    const sub = await createSub(topic.name);

    topic.publish(
      Buffer.from(
        JSON.stringify({
          name: 'Quebec',
          post_abbr: 'QC',
        })
      )
    );
    await topic.flush();

    const output = execSync(
      `${commandFor('listenForProtobufMessages')} ${sub.name} 3`
    );
    assert.include(output, 'Received message');
    assert.include(output, 'Quebec');
    assert.include(output, 'QC');
  });

  it('should list schemas', async () => {
    const schema = await createSchema('avro');
    const output = execSync(`${commandFor('listSchemas')}`);
    assert.include(output, schema.id);
  });

  it('should publish avro records', async () => {
    const schema = await createSchema('avro');
    const topic = await createTopicWithSchema(schema.id, Encodings.Binary);
    const sub = await createSub(topic.name);
    const deferred = defer();
    sub.on('message', deferred.resolve);
    sub.on('error', deferred.reject);

    const output = execSync(
      `${commandFor('publishAvroRecords')} ${topic.name}`
    );
    assert.include(output, 'published.');

    const result = (await deferred.promise) as Message;
    assert.include(result.data.toString(), 'Ontario');

    sub.close();
  });

  it('should publish protobuf messages', async () => {
    const schema = await createSchema('proto');
    const topic = await createTopicWithSchema(schema.id, Encodings.Binary);
    const sub = await createSub(topic.name);
    const deferred = defer();
    sub.on('message', deferred.resolve);
    sub.on('error', deferred.reject);

    const output = execSync(
      `${commandFor('publishProtobufMessages')} ${topic.name}`
    );
    assert.include(output, 'published.');

    const result = (await deferred.promise) as Message;
    assert.include(result.data.toString(), 'Ontario');

    sub.close();
  });
});
