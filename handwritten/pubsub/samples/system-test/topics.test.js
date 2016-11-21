/**
 * Copyright 2016, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const pubsub = require(`@google-cloud/pubsub`)();
const uuid = require(`node-uuid`);
const path = require(`path`);
const run = require(`../../utils`).run;

const cwd = path.join(__dirname, `..`);
const topicName = `nodejs-docs-samples-test-${uuid.v4()}`;
const subscriptionName = `nodejs-docs-samples-test-${uuid.v4()}`;
const projectId = process.env.GCLOUD_PROJECT;
const fullTopicName = `projects/${projectId}/topics/${topicName}`;
const message = { data: `Hello, world!` };
const cmd = `node topics.js`;

describe(`pubsub:topics`, () => {
  after(() => {
    return pubsub.subscription(subscriptionName).delete()
      .then(() => pubsub.topic(topicName).delete(), () => {})
      .catch(() => {});
  });

  it(`should create a topic`, () => {
    const output = run(`${cmd} create ${topicName}`, cwd);
    assert.equal(output, `Topic ${fullTopicName} created.`);
    return pubsub.topic(topicName).exists()
      .then((results) => {
        const exists = results[0];
        assert.equal(exists, true);
      });
  });

  it(`should list topics`, (done) => {
    // Listing is eventually consistent. Give the indexes time to update.
    setTimeout(() => {
      const output = run(`${cmd} list`, cwd);
      assert.equal(output.includes(`Topics:`), true);
      assert.equal(output.includes(fullTopicName), true);
      done();
    }, 5000);
  });

  it(`should publish a simple message`, () => {
    return pubsub.topic(topicName).subscribe(subscriptionName)
      .then((results) => {
        const subscription = results[0];
        run(`${cmd} publish ${topicName} "${message.data}"`, cwd);
        return subscription.pull();
      })
      .then((results) => {
        const messages = results[0];
        assert.equal(messages[0].data, message.data);
      });
  });

  it(`should publish a JSON message`, () => {
    return pubsub.topic(topicName).subscribe(subscriptionName, { reuseExisting: true })
      .then((results) => {
        const subscription = results[0];
        run(`${cmd} publish ${topicName} '${JSON.stringify(message)}'`, cwd);
        return subscription.pull();
      })
      .then((results) => {
        const messages = results[0];
        assert.deepEqual(messages[0].data, message);
      });
  });

  it(`should publish ordered messages`, () => {
    const topics = require(`../topics`);
    let subscription;

    return pubsub.topic(topicName).subscribe(subscriptionName, { reuseExisting: true })
      .then((results) => {
        subscription = results[0];
        return topics.publishOrderedMessage(topicName, message.data);
      })
      .then(() => subscription.pull())
      .then((results) => {
        const messages = results[0];
        assert.equal(messages[0].data, message.data);
        assert.equal(messages[0].attributes.counterId, '1');
        return topics.publishOrderedMessage(topicName, message.data);
      })
      .then(() => subscription.pull())
      .then((results) => {
        const messages = results[0];
        assert.equal(messages[0].data, message.data);
        assert.equal(messages[0].attributes.counterId, '2');
        return topics.publishOrderedMessage(topicName, message.data);
      });
  });

  it(`should set the IAM policy for a topic`, () => {
    run(`${cmd} set-policy ${topicName}`, cwd);

    return pubsub.topic(topicName).iam.getPolicy()
      .then((results) => {
        const policy = results[0];
        assert.deepEqual(policy.bindings, [
          {
            role: `roles/pubsub.editor`,
            members: [`group:cloud-logs@google.com`]
          },
          {
            role: `roles/pubsub.viewer`,
            members: [`allUsers`]
          }
        ]);
      });
  });

  it(`should get the IAM policy for a topic`, () => {
    return pubsub.topic(topicName).iam.getPolicy()
      .then((results) => {
        const policy = results[0];
        const output = run(`${cmd} get-policy ${topicName}`, cwd);
        assert.equal(output, `Policy for topic: ${JSON.stringify(policy.bindings)}.`);
      });
  });

  it(`should test permissions for a topic`, () => {
    const output = run(`${cmd} test-permissions ${topicName}`, cwd);
    assert.equal(output.includes(`Tested permissions for topic`), true);
  });

  it(`should delete a topic`, () => {
    const output = run(`${cmd} delete ${topicName}`, cwd);
    assert.equal(output, `Topic ${fullTopicName} deleted.`);
    return pubsub.topic(topicName).exists()
      .then((results) => {
        const exists = results[0];
        assert.equal(exists, false);
      });
  });
});
