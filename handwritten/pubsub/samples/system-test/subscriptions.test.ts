// Copyright 2019-2020 Google LLC
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

import {BigQuery} from '@google-cloud/bigquery';
import {
  CreateSubscriptionOptions,
  PubSub,
  Subscription,
  Topic,
} from '@google-cloud/pubsub';
import {assert} from 'chai';
import {describe, it, after} from 'mocha';
import {execSync, commandFor} from './common';
import {TestResources} from './testResources';

describe('subscriptions', () => {
  const projectId = process.env.GCLOUD_PROJECT;
  const pubsub = new PubSub({projectId});

  const resources = new TestResources('subs');

  async function createTopic(testName: string): Promise<Topic> {
    const id = resources.generateName(testName);
    return (await pubsub.createTopic(id))[0];
  }

  async function createSub(
    testName: string,
    topic: Topic,
    options?: CreateSubscriptionOptions
  ): Promise<Subscription> {
    const id = resources.generateName(testName);
    return (await topic.createSubscription(id, options))[0];
  }

  function reserveSub(testName: string): string {
    return resources.generateName(testName);
  }

  function fullTopicName(topicId: string): string {
    if (topicId.startsWith('projects/')) {
      return topicId;
    } else {
      return `projects/${projectId}/topics/${topicId}`;
    }
  }

  function fullSubName(subId: string): string {
    if (subId.startsWith('projects/')) {
      return subId;
    } else {
      return `projects/${projectId}/subscriptions/${subId}`;
    }
  }

  function reserveBigQueryName(testName: string): string {
    return resources.generateBigQueryName(testName);
  }

  function fullBigQueryTableName(datasetId: string, tableId: string): string {
    return `${projectId}.${datasetId}.${tableId}`;
  }

  async function createBigQueryTable(datasetId: string, tableId: string) {
    const bigquery = new BigQuery({
      projectId: projectId,
    });

    const datasetOptions = {
      location: 'US',
    };
    await bigquery.createDataset(datasetId, datasetOptions);

    const schema = [
      {name: 'data', type: 'STRING'},
      {name: 'message_id', type: 'STRING'},
      {name: 'attributes', type: 'STRING'},
      {name: 'subscription_name', type: 'STRING'},
      {name: 'publish_time', type: 'TIMESTAMP'},
    ];
    const tableOptions = {
      location: 'US',
      schema: schema,
    };
    await bigquery.dataset(datasetId).createTable(tableId, tableOptions);
  }

  async function cleanBigQueryDataset(datasetId: string) {
    const bigquery = new BigQuery({
      projectId: projectId,
    });

    const deleteOptions = {
      force: true,
    };

    await bigquery.dataset(datasetId).delete(deleteOptions);
  }

  async function cleanSubs() {
    const [subscriptions] = await pubsub.getSubscriptions();
    await Promise.all(
      resources.filterForCleanup(subscriptions).map(x => x.delete?.())
    );
  }

  async function cleanTopics() {
    const [topics] = await pubsub.getTopics();
    await Promise.all(
      resources.filterForCleanup(topics).map(x => x.delete?.())
    );
  }

  after(async () => {
    await cleanSubs();
    await cleanTopics();
  });

  it('should create a subscription', async () => {
    const testId = 'create_sub';
    const topic = await createTopic(testId);
    const subName = reserveSub(testId);
    const output = execSync(
      `${commandFor('createSubscription')} ${topic.name} ${subName}`
    );
    console.log('create', output);
    assert.include(output, `Subscription ${subName} created.`);
    const [subscriptions] = await pubsub.topic(topic.name).getSubscriptions();
    assert.strictEqual(subscriptions[0].name, fullSubName(subName));
  });

  it('should create a subscription with filtering', async () => {
    const testId = 'sub_w_filter';
    const filter = 'attributes.author="unknown"';
    const topic = await createTopic(testId);
    const subName = reserveSub(testId);
    const output = execSync(
      `${commandFor('createSubscriptionWithFiltering')} ${
        topic.name
      } ${subName} '${filter}'`
    );
    console.log('create filtering', output);
    assert.include(
      output,
      `Created subscription ${subName} with filter ${filter}`
    );
    const [subscriptions] = await pubsub.topic(topic.name).getSubscriptions();
    assert.strictEqual(subscriptions[0].name, fullSubName(subName));
  });

  it('should create a subscription with a retry policy', async () => {
    const testId = 'sub_w_retry';
    const topic = await createTopic(testId);
    const subName = reserveSub(testId);
    const output = execSync(
      `${commandFor('createSubscriptionWithRetryPolicy')} ${
        topic.name
      } ${subName}`
    );
    console.log('create retry policy', output);
    assert.include(output, `Created subscription ${subName} with retry policy`);
    const [subscriptions] = await pubsub.topic(topic.name).getSubscriptions();
    assert.strictEqual(subscriptions[0].name, fullSubName(subName));
  });

  it('should create a push subscription', async () => {
    const testId = 'push_sub';
    const topic = await createTopic(testId);
    const subName = reserveSub(testId);
    const output = execSync(
      `${commandFor('createPushSubscription')} ${topic.name} ${subName}`
    );
    assert.include(output, `Subscription ${subName} created.`);
    const [subscriptions] = await pubsub.topic(topic.name).getSubscriptions();
    assert(subscriptions.some(s => s.name === fullSubName(subName)));
  });

  it('should create a BigQuery subscription', async () => {
    const testId = 'bigquery_sub';
    const topic = await createTopic(testId);
    const subName = reserveSub(testId);
    const datasetId = reserveBigQueryName(testId);
    const tableId = reserveBigQueryName(testId);
    const fullTableName = fullBigQueryTableName(datasetId, tableId);

    await createBigQueryTable(datasetId, tableId);

    const output = execSync(
      `${commandFor('createBigQuerySubscription')} ${
        topic.name
      } ${subName} ${fullTableName}`
    );
    assert.include(output, `Subscription ${subName} created.`);
    const [subscriptions] = await pubsub.topic(topic.name).getSubscriptions();
    assert(subscriptions.some(s => s.name === fullSubName(subName)));

    await cleanBigQueryDataset(datasetId);
  });

  it('should modify the config of an existing push subscription', async () => {
    const testId = 'mod_push';
    const topic = await createTopic(testId);
    const sub = await createSub(testId, topic);
    const output = execSync(
      `${commandFor('modifyPushConfig')} ${topic.name} ${sub.name}`
    );
    assert.include(
      output,
      `Modified push config for subscription ${sub.name}.`
    );
  });

  it('should get metadata for a subscription', async () => {
    const testId = 'get_metadata';
    const topic = await createTopic(testId);
    const sub = await createSub(testId, topic);
    const output = execSync(`${commandFor('getSubscription')} ${sub.name}`);
    const expected =
      `Subscription: ${fullSubName(sub.name)}` +
      `\nTopic: ${fullTopicName(topic.name)}` +
      '\nPush config: ' +
      '\nAck deadline: 10s';
    assert.include(output, expected);
  });

  it('should list all subscriptions', async () => {
    const testId = 'list_subs';
    const topic = await createTopic(testId);
    const sub1 = await createSub(testId, topic),
      sub2 = await createSub(testId, topic);
    const output = execSync(`${commandFor('listSubscriptions')}`);
    assert.match(output, /Subscriptions:/);
    assert.match(output, new RegExp(fullSubName(sub1.name)));
    assert.match(output, new RegExp(fullSubName(sub2.name)));
  });

  it('should list subscriptions for a topic', async () => {
    const testId = 'list_for_topic';
    const topic = await createTopic(testId);
    const sub1 = await createSub(testId, topic),
      sub2 = await createSub(testId, topic);
    const output = execSync(
      `${commandFor('listTopicSubscriptions')} ${topic.name}`
    );
    assert.match(output, new RegExp(`Subscriptions for ${topic.name}:`));
    assert.match(output, new RegExp(fullSubName(sub1.name)));
    assert.match(output, new RegExp(fullSubName(sub2.name)));
  });

  it('should listen for messages', async () => {
    const testId = 'listen_msgs';
    const topic = await createTopic(testId);
    const sub = await createSub(testId, topic);
    const messageIds = await pubsub
      .topic(topic.name)
      .publish(Buffer.from('Hello, world!'));
    const output = execSync(
      `${commandFor('listenForMessages')} ${sub.name} 10`
    );
    assert.match(output, new RegExp(`Received message ${messageIds}:`));
  });

  it('should listen for messages with custom attributes', async () => {
    const testId = 'custom_attrs';
    const topic = await createTopic(testId);
    const sub = await createSub(testId, topic);
    const messageIds = await pubsub
      .topic(topic.name)
      .publish(Buffer.from('Hello, world!'), {attr: 'value'});
    const output = execSync(
      `${commandFor('listenWithCustomAttributes')} ${sub.name} 10`
    );
    assert.match(
      output,
      new RegExp(`Received message: id ${messageIds}.*attr.*value`)
    );
  });

  it('should listen for messages synchronously', async () => {
    const testId = 'listen_sync';
    const topic = await createTopic(testId);
    const sub = await createSub(testId, topic);
    await pubsub
      .topic(topic.name)
      .publishMessage({data: Buffer.from('Hello, world!')});
    const output = execSync(
      `${commandFor('synchronousPull')} ${projectId} ${sub.name}`
    );
    assert.match(output, /Hello/);
    assert.match(output, /Done./);
  });

  it('should listen for messages synchronously with lease management', async () => {
    const testId = 'sync_lease';
    const topic = await createTopic(testId);
    const sub = await createSub(testId, topic);
    await pubsub.topic(topic.name).publish(Buffer.from('Hello, world!'));
    const output = execSync(
      `${commandFor('synchronousPullWithLeaseManagement')} ${projectId} ${
        sub.name
      }`
    );
    assert.match(output, /Done./);
  });

  it('should listen to messages with flow control', async () => {
    const testId = 'listen_flow';
    const topic = await createTopic(testId);
    const sub = await createSub(testId, topic);
    const topicTwo = pubsub.topic(topic.name);
    await topicTwo.subscription(sub.name).get({autoCreate: true});
    await topicTwo.publish(Buffer.from('Hello, world!'));

    const output = execSync(
      `${commandFor('subscribeWithFlowControlSettings')} ${sub.name} 5`
    );
    assert.include(
      output,
      'ready to receive messages at a controlled volume of 5 messages.'
    );
    const [subscriptions] = await pubsub.topic(topic.name).getSubscriptions();
    assert(subscriptions.some(s => s.name === fullSubName(sub.name)));
  });

  it('should listen for error messages', () => {
    assert.throws(
      () => execSync('node listenForErrors nonexistent-subscription'),
      /Resource not found/
    );
  });

  it('should set the IAM policy for a subscription', async () => {
    const testId = 'set_iam';
    const topic = await createTopic(testId);
    const sub = await createSub(testId, topic);
    execSync(`${commandFor('setSubscriptionPolicy')} ${sub.name}`);
    const results = await pubsub.subscription(sub.name).iam.getPolicy();
    const policy = results[0];
    assert.deepStrictEqual(policy.bindings, [
      {
        role: 'roles/pubsub.editor',
        members: ['group:cloud-logs@google.com'],
        condition: null,
      },
      {
        role: 'roles/pubsub.viewer',
        members: ['allUsers'],
        condition: null,
      },
    ]);
  });

  it('should get the IAM policy for a subscription', async () => {
    const testId = 'get_iam';
    const topic = await createTopic(testId);
    const sub = await createSub(testId, topic);
    const results = await sub.iam.getPolicy();
    const output = execSync(
      `${commandFor('getSubscriptionPolicy')} ${sub.name}`
    );
    assert.include(
      output,
      `Policy for subscription: ${JSON.stringify(results[0].bindings)}.`
    );
  });

  it('should test permissions for a subscription', async () => {
    const testId = 'test_perms';
    const topic = await createTopic(testId);
    const sub = await createSub(testId, topic);
    const output = execSync(
      `${commandFor('testSubscriptionPermissions')} ${sub.name}`
    );
    assert.match(output, /Tested permissions for subscription/);
  });

  it('should delete a subscription', async () => {
    const testId = 'del';
    const topic = await createTopic(testId);
    const sub = await createSub(testId, topic);
    const output = execSync(`${commandFor('deleteSubscription')} ${sub.name}`);
    assert.include(output, `Subscription ${sub.name} deleted.`);
    const [subscriptions] = await pubsub.getSubscriptions();
    assert.ok(subscriptions);
    assert(subscriptions.every(s => s.name !== fullSubName(sub.name)));
  });

  it('should detach a subscription', async () => {
    const testId = 'detach';
    const topic = await createTopic(testId);
    const sub = await createSub(testId, topic);
    const output = execSync(`${commandFor('detachSubscription')} ${sub.name}`);
    assert.include(output, "'before' detached status: false");
    assert.include(output, "'after' detached status: true");
    const [subscriptionDetached] = await pubsub
      .subscription(sub.name)
      .detached();
    assert(subscriptionDetached === true);
  });

  it('should create a subscription with dead letter policy.', async () => {
    const testId = 'dead_letter';
    const topic = await createTopic(testId),
      topicDeadLetter = await createTopic(testId);
    const subName = reserveSub(testId);
    const output = execSync(
      `${commandFor('createSubscriptionWithDeadLetterPolicy')} ${
        topic.name
      } ${subName} ${topicDeadLetter.name}`
    );
    assert.include(
      output,
      `Created subscription ${subName} with dead letter topic ${topicDeadLetter.name}.`
    );
    const [subscription] = await pubsub
      .topic(topic.name)
      .subscription(subName)
      .get();
    assert.strictEqual(
      subscription.metadata?.deadLetterPolicy?.maxDeliveryAttempts,
      10
    );
  });

  it('should listen for messages synchronously with delivery attempts.', async () => {
    const testId = 'sync_delivery';
    const topic = await createTopic(testId),
      topicDeadLetter = await createTopic(testId);
    const sub = await createSub(testId, topic, {
      deadLetterPolicy: {
        deadLetterTopic: topicDeadLetter.name,
        maxDeliveryAttempts: 10,
      },
    });

    await topic.publishMessage({data: Buffer.from('Hello, world!')});
    const output = execSync(
      `${commandFor('synchronousPullWithDeliveryAttempts')} ${projectId} ${
        sub.name
      }`
    );
    assert.match(output, /Hello/);
    assert.match(output, /Delivery Attempt: 1/);
  });

  it('should update a subscription with dead letter policy.', async () => {
    const testId = 'update_dead_letter';
    const topic = await createTopic(testId),
      topicDeadLetter = await createTopic(testId);
    const presub = await createSub(testId, topic);
    await presub.setMetadata({
      deadLetterPolicy: {
        deadLetterTopic: topicDeadLetter.name,
        maxDeliveryAttempts: 10,
      },
    });

    execSync(
      `${commandFor('updateDeadLetterPolicy')} ${topic.name} ${presub.name}`
    );

    const [subscription] = await pubsub
      .topic(topic.name)
      .subscription(presub.name)
      .get();
    assert.equal(
      subscription.metadata?.deadLetterPolicy?.maxDeliveryAttempts,
      15
    );
  });

  it('should remove dead letter policy.', async () => {
    const testId = 'rem_dead_letter';
    const topic = await createTopic(testId),
      topicDeadLetter = await createTopic(testId);
    const presub = await createSub(testId, topic);
    await presub.setMetadata({
      deadLetterPolicy: {
        deadLetterTopic: topicDeadLetter.name,
        maxDeliveryAttempts: 10,
      },
    });

    execSync(
      `${commandFor('removeDeadLetterPolicy')} ${topic.name} ${presub.name}`
    );

    const [subscription] = await pubsub
      .topic(topic.name)
      .subscription(presub.name)
      .get();
    assert.isNull(subscription.metadata?.deadLetterPolicy);
  });

  it('should create a subscription with ordering enabled.', async () => {
    const testId = 'create_ord';
    const topic = await createTopic(testId);
    const subName = reserveSub(testId);
    const output = execSync(
      `${commandFor('createSubscriptionWithOrdering')} ${topic.name} ${subName}`
    );
    assert.include(
      output,
      `Created subscription ${subName} with ordering enabled.`
    );
    const [subscription] = await pubsub
      .topic(topic.name)
      .subscription(subName)
      .get();
    assert.strictEqual(subscription.metadata?.enableMessageOrdering, true);
  });

  it('should create an exactly-once delivery sub and listen on it.', async () => {
    const testId = 'eos';
    const topic = await createTopic(testId);
    const subName = reserveSub(testId);
    const output = execSync(
      `${commandFor('createSubscriptionWithExactlyOnceDelivery')} ${
        topic.name
      } ${subName}`
    );
    assert.include(
      output,
      `Created subscription ${subName} with exactly-once delivery.`
    );

    const [subscription] = await pubsub
      .topic(topic.name)
      .subscription(subName)
      .get();
    assert.strictEqual(subscription.metadata?.enableExactlyOnceDelivery, true);

    const message = Buffer.from('test message');
    const messageIds = [
      await topic.publishMessage({
        data: message,
      }),
      await topic.publishMessage({
        data: message,
      }),
    ];

    const output2 = execSync(
      `${commandFor('listenForMessagesWithExactlyOnceDelivery')} ${subName} 15`
    );

    for (const id of messageIds) {
      assert.include(output2, `Ack for message ${id} successful`);
    }
  });
});
