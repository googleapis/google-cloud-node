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
import * as protobuf from 'protobufjs';
import * as fs from 'fs';
import {waitForMessage} from './common';

describe('Protobuf Samples System Tests', () => {
  const pubsub = new PubSub();
  const resources = new TestResources('ps-sys-proto');

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
    const topicName = resources.generateName('topic');
    const subName = resources.generateName('sub');
    const schemaId = resources.generateName('schema');
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

    // Make an encoder using the protobufjs library.
    //
    // Since we're providing the test message for a specific schema here, we'll
    // also code in the path to a sample proto definition.
    const root = await protobuf.load('system-test/fixtures/provinces.proto');
    const Province = root.lookupType('utilities.Province');
    const province: ProvinceObject = {
      name: 'Ontario',
      postAbbr: 'ON',
    };

    const message = Province.create(province);
    const dataBuffer = Buffer.from(Province.encode(message).finish());

    const messageId = await topic.publishMessage({data: dataBuffer});
    assert.ok(messageId);

    const received = await waitForMessage(subscription, {
      timeoutMs: 15000,
      timeoutErrorMessage: 'Timeout waiting for Proto message',
    });

    const schemaMetadata = Schema.metadataFromMessage(received.attributes);
    assert.strictEqual(schemaMetadata.encoding, 'BINARY');

    for (let i = 0; i < received.length; i++) {
      const result = Province.decode(received.data) as any;
      assert.strictEqual(result.name, 'Ontario');
      assert.strictEqual(result.postAbbr || result.post_abbr, 'ON');
    }
  });
});
