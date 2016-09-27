// Copyright 2015-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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
  after((done) => {
    pubsub.subscription(subscriptionName).delete(() => {
      // Ignore any error
      pubsub.topic(topicName).delete(() => {
        // Ignore any error
        done();
      });
    });
  });

  it(`should create a topic`, (done) => {
    const output = run(`${cmd} create ${topicName}`, cwd);
    assert.equal(output, `Topic ${fullTopicName} created.`);
    pubsub.topic(topicName).exists((err, exists) => {
      assert.ifError(err);
      assert.equal(exists, true);
      done();
    });
  });

  it(`should list topics`, (done) => {
    // Listing is eventually consistent. Give the indexes time to update.
    setTimeout(() => {
      const output = run(`${cmd} list`, cwd);
      assert.notEqual(output.indexOf(`Topics:`), -1);
      assert.notEqual(output.indexOf(fullTopicName), -1);
      done();
    }, 5000);
  });

  it(`should publish a simple message`, (done) => {
    pubsub.topic(topicName).subscribe(subscriptionName, (err, subscription) => {
      assert.ifError(err);
      run(`${cmd} publish ${topicName} "${message.data}"`, cwd);
      subscription.pull((err, messages) => {
        assert.ifError(err);
        console.log(JSON.stringify(messages, null, 2));
        assert.equal(messages[0].data, message.data);
        done();
      });
    });
  });

  it(`should publish a JSON message`, (done) => {
    pubsub.topic(topicName).subscribe(subscriptionName, { reuseExisting: true }, (err, subscription) => {
      assert.ifError(err);
      run(`${cmd} publish ${topicName} '${JSON.stringify(message)}'`, cwd);
      subscription.pull((err, messages) => {
        assert.ifError(err);
        console.log(JSON.stringify(messages, null, 2));
        assert.deepEqual(messages[0].data, message);
        done();
      });
    });
  });

  it(`should set the IAM policy for a topic`, (done) => {
    run(`${cmd} set-policy ${topicName}`, cwd);
    pubsub.topic(topicName).iam.getPolicy((err, policy) => {
      assert.ifError(err);
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
      done();
    });
  });

  it(`should get the IAM policy for a topic`, (done) => {
    pubsub.topic(topicName).iam.getPolicy((err, policy) => {
      assert.ifError(err);
      const output = run(`${cmd} get-policy ${topicName}`, cwd);
      assert.equal(output, `Policy for topic: ${JSON.stringify(policy.bindings)}.`);
      done();
    });
  });

  it(`should test permissions for a topic`, () => {
    const output = run(`${cmd} test-permissions ${topicName}`, cwd);
    assert.notEqual(output.indexOf(`Tested permissions for topic`), -1);
  });

  it(`should delete a topic`, (done) => {
    const output = run(`${cmd} delete ${topicName}`, cwd);
    assert.equal(output, `Topic ${fullTopicName} deleted.`);
    pubsub.topic(topicName).exists((err, exists) => {
      assert.ifError(err);
      assert.equal(exists, false);
      done();
    });
  });
});
