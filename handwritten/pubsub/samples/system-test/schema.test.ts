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
import {describe, it, after} from 'mocha';
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
  console.log(`Schema runId: ${runId}`);
  const topicIdStem = `schema-top-${runId}-`;
  const subscriptionIdStem = `schema-sub-${runId}-`;
  const schemaIdStem = `schema-${runId}-`;

  // Schemas have a delay between deletion and actual deletion, so
  // we have to make unique schema names. It's simplest to do it for topics
  // and subscriptions too.
  let curId = 1;
  function getTopicId(testName: string): string {
    return `${topicIdStem}${testName}${curId++}`;
  }

  function getSubId(testName: string): string {
    return `${subscriptionIdStem}${testName}${curId++}`;
  }

  function getSchemaId(testName: string): string {
    return `${schemaIdStem}${testName}${curId++}`;
  }

  function fullSchemaName(base: string) {
    return `projects/${projectId}/schemas/${base}`;
  }

  const commandFor = (action: string) => `node ${action}.js`;

  async function cleanAllSchemas(prefix: string) {
    const schemas = [];
    for await (const s of pubsub.listSchemas()) {
      if (s.name?.startsWith(prefix)) {
        schemas.push(pubsub.schema(s.name!).delete());
      }
    }
    await Promise.all(schemas);
  }

  async function cleanAllTopics(prefix: string) {
    const [topics] = await pubsub.getTopics();
    await Promise.all(
      topics.filter(x => x.name.startsWith(prefix)).map(x => x.delete())
    );
  }

  async function cleanAllSubs(prefix: string) {
    const [subscriptions] = await pubsub.getSubscriptions();
    await Promise.all(
      subscriptions.filter(x => x.name.startsWith(prefix)).map(x => x.delete())
    );
  }

  // This is to make sure we didn't miss something from per-test cleanup.
  after(async () => {
    await cleanAllSubs(subscriptionIdStem);
    await cleanAllTopics(topicIdStem);
    await cleanAllSchemas(schemaIdStem);
  });

  // Each test should call this to clean its own resources.
  async function cleanMine(testName: string) {
    await cleanAllSubs(`${subscriptionIdStem}${testName}`);
    await cleanAllTopics(`${topicIdStem}${testName}`);
    await cleanAllSchemas(`${schemaIdStem}${testName}`);
  }

  function fixturePath(fixture: string): string {
    return path.join(__dirname, '..', '..', 'system-test', 'fixtures', fixture);
  }

  async function createSchema(
    testName: string,
    type: 'avro' | 'proto'
  ): Promise<Schema> {
    const suffix = type === 'avro' ? 'avsc' : 'proto';
    const encoding =
      type === 'avro' ? SchemaTypes.Avro : SchemaTypes.ProtocolBuffer;
    const def = (
      await fs.readFile(fixturePath(`provinces.${suffix}`))
    ).toString();
    const schemaId = getSchemaId(testName);
    const schema = await pubsub.createSchema(schemaId, encoding, def);
    assert.ok(schema);

    return schema;
  }

  async function createTopicWithSchema(
    testName: string,
    schemaName: string,
    encodingType: SchemaEncoding
  ): Promise<Topic> {
    const topicId = getTopicId(testName);
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

  async function createSub(
    testName: string,
    topicName: string
  ): Promise<Subscription> {
    const subId = getSubId(testName);
    const [sub] = await pubsub.createSubscription(topicName, subId);
    assert.ok(sub);

    return sub;
  }

  it('should create an avro schema', async () => {
    const id = 'create-avro';
    try {
      const schemaId = getSchemaId(id);
      const output = execSync(
        `${commandFor('createAvroSchema')} ${schemaId} ${fixturePath(
          'provinces.avsc'
        )}`
      );
      assert.include(output, schemaId);
      assert.include(output, 'created.');

      let found = false;
      for await (const s of pubsub.listSchemas()) {
        if (s.name && s.name.indexOf(schemaId) >= 0) {
          found = true;
          break;
        }
      }

      assert.ok(found, 'created schema was not found');
    } finally {
      await cleanMine(id);
    }
  });

  it('should create a proto schema', async () => {
    const id = 'create-proto';
    try {
      const schemaId = getSchemaId(id);
      const output = execSync(
        `${commandFor('createProtoSchema')} ${schemaId} ${fixturePath(
          'provinces.proto'
        )}`
      );
      assert.include(output, schemaId);
      assert.include(output, 'created.');

      let found = false;
      for await (const s of pubsub.listSchemas()) {
        if (s.name && s.name.indexOf(schemaId) >= 0) {
          found = true;
          break;
        }
      }

      assert.ok(found, 'created schema was not found');
    } finally {
      await cleanMine(id);
    }
  });

  it('should create a topic with a schema', async () => {
    const id = 'create-topic';
    try {
      const schema = await createSchema('topic-schema', 'proto');
      const topicId = getTopicId(id);
      const output = execSync(
        `${commandFor('createTopicWithSchema')} ${topicId} ${schema.id} BINARY`
      );
      assert.include(output, topicId);
      assert.include(output, schema.id);
      assert.include(output, 'created with');

      const [topic] = await pubsub.topic(topicId).get();
      assert.include(topic.metadata?.schemaSettings?.schema, schema.id);
    } finally {
      await cleanMine(id);
    }
  });

  it('should delete a schema', async () => {
    const id = 'delete-schema';
    try {
      const schema = await createSchema(id, 'proto');

      const output = execSync(`${commandFor('deleteSchema')} ${schema.id}`);
      assert.include(output, schema.id);
      assert.include(output, 'deleted.');

      // Because of caching delays, this can't be deterministic without a big wait.
      /*try {
        const got = await pubsub.schema(schema.id).get();
        assert.isNotOk(got, "schema hadn't been deleted");
      } catch (e) {
        // This is expected.
      }*/
    } finally {
      await cleanMine(id);
    }
  });

  it('should get a schema', async () => {
    const id = 'get-schema';
    try {
      const schema = await createSchema(id, 'proto');

      const output = execSync(`${commandFor('getSchema')} ${schema.id}`);
      assert.include(output, schema.id);
      assert.include(output, 'info:');
      assert.include(output, 'PROTO');
    } finally {
      await cleanMine(id);
    }
  });

  it('should listen for avro records', async () => {
    const id = 'listen-avro';
    try {
      const schema = await createSchema(id, 'avro');
      const topic = await createTopicWithSchema(id, schema.id, Encodings.Json);
      const sub = await createSub(id, topic.name);

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
    } finally {
      await cleanMine(id);
    }
  });

  it('should listen for protobuf messages', async () => {
    const id = 'listen-proto';
    try {
      const schema = await createSchema(id, 'proto');
      const topic = await createTopicWithSchema(id, schema.id, Encodings.Json);
      const sub = await createSub(id, topic.name);

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
    } finally {
      await cleanMine(id);
    }
  });

  it('should list schemas', async () => {
    const id = 'list';
    try {
      const schema = await createSchema(id, 'avro');
      const output = execSync(`${commandFor('listSchemas')}`);
      assert.include(output, schema.id);
    } finally {
      await cleanMine(id);
    }
  });

  it('should publish avro records', async () => {
    const id = 'pub-avro';
    try {
      const schema = await createSchema(id, 'avro');
      const topic = await createTopicWithSchema(
        id,
        schema.id,
        Encodings.Binary
      );
      const sub = await createSub(id, topic.name);
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
    } finally {
      await cleanMine(id);
    }
  });

  it('should publish protobuf messages', async () => {
    const id = 'pub-proto';
    try {
      const schema = await createSchema(id, 'proto');
      const topic = await createTopicWithSchema(
        id,
        schema.id,
        Encodings.Binary
      );
      const sub = await createSub(id, topic.name);
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
    } finally {
      await cleanMine(id);
    }
  });
});
