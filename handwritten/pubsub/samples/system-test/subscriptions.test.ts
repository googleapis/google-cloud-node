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

import {
  CreateSubscriptionOptions,
  PubSub,
  Subscription,
  Topic,
} from '@google-cloud/pubsub';
import {assert} from 'chai';
import {describe, it, afterEach} from 'mocha';
import {execSync, commandFor} from './common';
import * as uuid from 'uuid';

describe('subscriptions', () => {
  const projectId = process.env.GCLOUD_PROJECT;
  const pubsub = new PubSub({projectId});
  const runId = uuid.v4();
  const topicNameStem = `stest-topic-${runId}`;
  const subNameStem = `stest-sub-${runId}`;

  let nextTopicId = 0;
  async function createTopic(): Promise<Topic> {
    const id = `${topicNameStem}-${nextTopicId++}`;
    return (await pubsub.createTopic(id))[0];
  }

  let nextSubId = 0;
  async function createSub(
    topic: Topic,
    options?: CreateSubscriptionOptions
  ): Promise<Subscription> {
    const id = `${subNameStem}-${nextSubId++}`;
    return (await topic.createSubscription(id, options))[0];
  }

  function reserveSub(): string {
    const id = `${subNameStem}-${nextSubId++}`;
    return id;
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

  // We want this to be run after each test, because otherwise interrupting the
  // tests anywhere would litter a bunch of topics/subs.
  afterEach(async () => {
    const [subscriptions] = await pubsub.getSubscriptions();
    const runSubs = subscriptions.filter(x => x.name.indexOf(runId) >= 0);
    for (const sub of runSubs) {
      await sub.delete();
    }
    const [topics] = await pubsub.getTopics();
    const runTops = topics.filter(x => x.name.indexOf(runId) >= 0);
    for (const t of runTops) {
      await t.delete();
    }
  });

  it('should create a subscription', async () => {
    const topic = await createTopic();
    const subName = reserveSub();
    const output = execSync(
      `${commandFor('createSubscription')} ${topic.name} ${subName}`
    );
    console.log('create', output);
    assert.include(output, `Subscription ${subName} created.`);
    const [subscriptions] = await pubsub.topic(topic.name).getSubscriptions();
    assert.strictEqual(subscriptions[0].name, fullSubName(subName));
  });

  it('should create a subscription with filtering', async () => {
    const filter = 'attributes.author="unknown"';
    const topic = await createTopic();
    const subName = reserveSub();
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

  it('should create a push subscription', async () => {
    const topic = await createTopic();
    const subName = reserveSub();
    const output = execSync(
      `${commandFor('createPushSubscription')} ${topic.name} ${subName}`
    );
    assert.include(output, `Subscription ${subName} created.`);
    const [subscriptions] = await pubsub.topic(topic.name).getSubscriptions();
    assert(subscriptions.some(s => s.name === fullSubName(subName)));
  });

  it('should modify the config of an existing push subscription', async () => {
    const topic = await createTopic();
    const sub = await createSub(topic);
    const output = execSync(
      `${commandFor('modifyPushConfig')} ${topic.name} ${sub.name}`
    );
    assert.include(
      output,
      `Modified push config for subscription ${sub.name}.`
    );
  });

  it('should get metadata for a subscription', async () => {
    const topic = await createTopic();
    const sub = await createSub(topic);
    const output = execSync(`${commandFor('getSubscription')} ${sub.name}`);
    const expected =
      `Subscription: ${fullSubName(sub.name)}` +
      `\nTopic: ${fullTopicName(topic.name)}` +
      '\nPush config: ' +
      '\nAck deadline: 10s';
    assert.include(output, expected);
  });

  it('should list all subscriptions', async () => {
    const topic = await createTopic();
    const sub1 = await createSub(topic),
      sub2 = await createSub(topic);
    const output = execSync(`${commandFor('listSubscriptions')}`);
    assert.match(output, /Subscriptions:/);
    assert.match(output, new RegExp(fullSubName(sub1.name)));
    assert.match(output, new RegExp(fullSubName(sub2.name)));
  });

  it('should list subscriptions for a topic', async () => {
    const topic = await createTopic();
    const sub1 = await createSub(topic),
      sub2 = await createSub(topic);
    const output = execSync(
      `${commandFor('listTopicSubscriptions')} ${topic.name}`
    );
    assert.match(output, new RegExp(`Subscriptions for ${topic.name}:`));
    assert.match(output, new RegExp(fullSubName(sub1.name)));
    assert.match(output, new RegExp(fullSubName(sub2.name)));
  });

  it('should listen for messages', async () => {
    const topic = await createTopic();
    const sub = await createSub(topic);
    const messageIds = await pubsub
      .topic(topic.name)
      .publish(Buffer.from('Hello, world!'));
    const output = execSync(
      `${commandFor('listenForMessages')} ${sub.name} 10`
    );
    assert.match(output, new RegExp(`Received message ${messageIds}:`));
  });

  it('should listen for messages with custom attributes', async () => {
    const topic = await createTopic();
    const sub = await createSub(topic);
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
    const topic = await createTopic();
    const sub = await createSub(topic);
    await pubsub.topic(topic.name).publish(Buffer.from('Hello, world!'));
    const output = execSync(
      `${commandFor('synchronousPull')} ${projectId} ${sub.name}`
    );
    assert.match(output, /Hello/);
    assert.match(output, /Done./);
  });

  it('should listen for messages synchronously with lease management', async () => {
    const topic = await createTopic();
    const sub = await createSub(topic);
    await pubsub.topic(topic.name).publish(Buffer.from('Hello, world!'));
    const output = execSync(
      `${commandFor('synchronousPullWithLeaseManagement')} ${projectId} ${
        sub.name
      }`
    );
    assert.match(output, /Done./);
  });

  it('should listen to messages with flow control', async () => {
    const topic = await createTopic();
    const sub = await createSub(topic);
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
    const topic = await createTopic();
    const sub = await createSub(topic);
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
    const topic = await createTopic();
    const sub = await createSub(topic);
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
    const topic = await createTopic();
    const sub = await createSub(topic);
    const output = execSync(
      `${commandFor('testSubscriptionPermissions')} ${sub.name}`
    );
    assert.match(output, /Tested permissions for subscription/);
  });

  it('should delete a subscription', async () => {
    const topic = await createTopic();
    const sub = await createSub(topic);
    const output = execSync(`${commandFor('deleteSubscription')} ${sub.name}`);
    assert.include(output, `Subscription ${sub.name} deleted.`);
    const [subscriptions] = await pubsub.getSubscriptions();
    assert.ok(subscriptions);
    assert(subscriptions.every(s => s.name !== fullSubName(sub.name)));
  });

  it('should detach a subscription', async () => {
    const topic = await createTopic();
    const sub = await createSub(topic);
    const output = execSync(`${commandFor('detachSubscription')} ${sub.name}`);
    assert.include(output, "'before' detached status: false");
    assert.include(output, "'after' detached status: true");
    const [subscriptionDetached] = await pubsub
      .subscription(sub.name)
      .detached();
    assert(subscriptionDetached === true);
  });

  it('should create a subscription with dead letter policy.', async () => {
    const topic = await createTopic(),
      topicDeadLetter = await createTopic();
    const subName = reserveSub();
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
    const topic = await createTopic(),
      topicDeadLetter = await createTopic();
    const sub = await createSub(topic, {
      deadLetterPolicy: {
        deadLetterTopic: topicDeadLetter.name,
        maxDeliveryAttempts: 10,
      },
    });

    await topic.publish(Buffer.from('Hello, world!'));
    const output = execSync(
      `${commandFor('synchronousPullWithDeliveryAttempts')} ${projectId} ${
        sub.name
      }`
    );
    assert.match(output, /Hello/);
    assert.match(output, /Delivery Attempt: 1/);
  });

  it('should update a subscription with dead letter policy.', async () => {
    const topic = await createTopic(),
      topicDeadLetter = await createTopic();
    const presub = await createSub(topic);
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
    const topic = await createTopic(),
      topicDeadLetter = await createTopic();
    const presub = await createSub(topic);
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
    const topic = await createTopic();
    const subName = reserveSub();
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
});
