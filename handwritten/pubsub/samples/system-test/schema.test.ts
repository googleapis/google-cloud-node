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
  ISchema,
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
import * as path from 'path';
import * as defer from 'p-defer';
import {TestResources} from './testResources';
import {commandFor} from './common';

// Tests run as Node 12.
// eslint-disable-next-line node/no-unsupported-features/node-builtins
import {promises as fs} from 'fs';

const execSync = (cmd: string) => cp.execSync(cmd, {encoding: 'utf-8'});

describe('schema', () => {
  const projectId = process.env.GCLOUD_PROJECT;
  const pubsub = new PubSub({projectId});

  const resources = new TestResources('schema');

  function getTopicId(testName: string): string {
    return resources.generateName(testName);
  }

  function getSubId(testName: string): string {
    return resources.generateName(testName);
  }

  function getSchemaId(testName: string): string {
    return resources.generateName(testName);
  }

  function fullSchemaName(base: string) {
    return `projects/${projectId}/schemas/${base}`;
  }

  async function cleanAllSchemas() {
    const schemas: ISchema[] = [];
    for await (const s of pubsub.listSchemas()) {
      schemas.push(s);
    }
    const proms = resources.filterForCleanup(schemas).map(async s => {
      await pubsub.schema(s.name!).delete!();
    });

    /*
    // In case we need another forceful clean-up pass in the future,
    // when changing ID formats.
    const now = Date.now();
    for (const s of schemas) {
      if (s.name!.includes('/schema-')) {
        const ts = (s.revisionCreateTime!.seconds! as number) * 1000;
        if (now - ts >= 2 * 1000 * 60 * 60) {
          proms.push(pubsub.schema(s.name!).delete!());
        }
      }
    }
    */

    await Promise.all(proms);
  }

  async function cleanAllTopics() {
    const [topics] = await pubsub.getTopics();
    await Promise.all(
      resources.filterForCleanup(topics).map(t => t.delete?.())
    );
  }

  async function cleanAllSubs() {
    const [subscriptions] = await pubsub.getSubscriptions();
    await Promise.all(
      resources.filterForCleanup(subscriptions).map(s => s.delete?.())
    );
  }

  after(async () => {
    await cleanAllSubs();
    await cleanAllTopics();
    await cleanAllSchemas();
  });

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
    const schemaId = getSchemaId('create_avro');
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
  });

  it('should create a proto schema', async () => {
    const schemaId = getSchemaId('create_proto');
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
  });

  it('should create a topic with a schema', async () => {
    const id = 'create_topic';
    const schema = await createSchema(id, 'proto');
    const topicId = getTopicId(id);
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
    const schema = await createSchema('delete', 'proto');

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
  });

  it('should get a schema', async () => {
    const schema = await createSchema('get', 'proto');

    const output = execSync(`${commandFor('getSchema')} ${schema.id}`);
    assert.include(output, schema.id);
    assert.include(output, 'info:');
    assert.include(output, 'PROTO');
  });

  it('should listen for avro records', async () => {
    const id = 'listen_avro';
    const schema = await createSchema(id, 'avro');
    const topic = await createTopicWithSchema(id, schema.id, Encodings.Json);
    const sub = await createSub(id, topic.name);

    topic.publishMessage({
      data: Buffer.from(
        JSON.stringify({
          name: 'Alberta',
          post_abbr: 'AB',
        })
      ),
    });
    await topic.flush();

    const output = execSync(
      `${commandFor('listenForAvroRecords')} ${sub.name} 10`
    );
    assert.include(output, 'Received message');
    assert.include(output, 'Alberta');
    assert.include(output, 'AB');
  });

  it('should listen for protobuf messages', async () => {
    const id = 'listen_proto';
    const schema = await createSchema(id, 'proto');
    const topic = await createTopicWithSchema(id, schema.id, Encodings.Json);
    const sub = await createSub(id, topic.name);

    topic.publishMessage({
      data: Buffer.from(
        JSON.stringify({
          name: 'Quebec',
          post_abbr: 'QC',
        })
      ),
    });
    await topic.flush();

    const output = execSync(
      `${commandFor('listenForProtobufMessages')} ${sub.name} 10`
    );
    assert.include(output, 'Received message');
    assert.include(output, 'Quebec');
    assert.include(output, 'QC');
  });

  it('should list schemas', async () => {
    const schema = await createSchema('list', 'avro');
    const output = execSync(`${commandFor('listSchemas')}`);
    assert.include(output, schema.id);
  });

  it('should publish avro records', async () => {
    const id = 'pub_avro';
    const schema = await createSchema(id, 'avro');
    const topic = await createTopicWithSchema(id, schema.id, Encodings.Binary);
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
  });

  it('should publish protobuf messages', async () => {
    const id = 'pub_proto';
    const schema = await createSchema(id, 'proto');
    const topic = await createTopicWithSchema(id, schema.id, Encodings.Binary);
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
  });
});
