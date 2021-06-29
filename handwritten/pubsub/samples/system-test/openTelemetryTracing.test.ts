// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {PubSub} from '@google-cloud/pubsub';
import {assert} from 'chai';
import {describe, it, before, after} from 'mocha';
import {execSync} from './common';
import * as uuid from 'uuid';

describe('openTelemetry', () => {
  const projectId = process.env.GCLOUD_PROJECT;
  const pubsub = new PubSub({projectId});
  const topicName = `nodejs-docs-samples-test-${uuid.v4()}`;
  const subName = `nodejs-docs-samples-test-${uuid.v4()}`;

  before(async () => {
    await pubsub.createTopic(topicName);
    await pubsub.topic(topicName).createSubscription(subName);
  });

  after(async () => {
    await pubsub.subscription(subName).delete();
    await pubsub.topic(topicName).delete();
  });

  it('should run the openTelemetryTracing sample', async () => {
    const stdout = execSync(
      `node openTelemetryTracing ${topicName} ${subName}`
    );
    assert.match(stdout, /Message .* published./);
    assert.match(stdout, /Message .* received/);
    assert.notMatch(stdout, /Received error/);
  });
});
