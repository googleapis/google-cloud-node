/**
 * Copyright 2017, Google, Inc.
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

const {PubSub} = require('@google-cloud/pubsub');
const {assert} = require('chai');
const execa = require('execa');
const uuid = require('uuid');

describe('quickstart', () => {
  const projectId = process.env.GCLOUD_PROJECT;
  const pubsub = new PubSub({projectId});
  const topicName = `nodejs-docs-samples-test-${uuid.v4()}`;

  after(async () => {
    await pubsub.topic(topicName).delete();
  });

  it('should run the quickstart', async () => {
    const {stdout} = await execa.shell(
      `node quickstart ${projectId} ${topicName}`
    );
    assert.match(stdout, /^Topic .* created.$/);
  });
});
