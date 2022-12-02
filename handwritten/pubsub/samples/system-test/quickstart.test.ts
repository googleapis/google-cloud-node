// Copyright 2017 Google LLC
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

import {PubSub} from '@google-cloud/pubsub';
import {assert} from 'chai';
import {describe, it, after} from 'mocha';
import {execSync, commandFor} from './common';
import {TestResources} from './testResources';

describe('quickstart', () => {
  const projectId = process.env.GCLOUD_PROJECT;
  const pubsub = new PubSub({projectId});

  const resources = new TestResources('quickstart');
  const topicName = resources.generateName('qs');
  const subName = resources.generateName('qs');

  after(async () => {
    const [subscriptions] = await pubsub.getSubscriptions();
    await Promise.all(
      resources.filterForCleanup(subscriptions).map(x => x.delete?.())
    );

    const [topics] = await pubsub.getTopics();
    await Promise.all(
      resources.filterForCleanup(topics).map(x => x.delete?.())
    );
  });

  it('should run the quickstart', async () => {
    const stdout = execSync(
      `${commandFor('quickstart')} ${projectId} ${topicName} ${subName}`
    );
    assert.match(stdout, /^Topic .* created./);
    assert.match(stdout, /Received message.*Test/);
    assert.notMatch(stdout, /Received error/);
  });
});
