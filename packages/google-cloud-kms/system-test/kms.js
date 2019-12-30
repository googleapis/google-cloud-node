// Copyright 2019 Google LLC
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

const kms = require('../src');
const assert = require('assert');
const {describe, it} = require('mocha');

const client = new kms.v1.KeyManagementServiceClient();

describe('KMS system tests', () => {
  it('should list global key rings', async () => {
    const projectId = await client.getProjectId();
    const parent = client.locationPath(projectId, 'global');

    const [keyRings] = await client.listKeyRings({parent});
    assert(keyRings);
    assert(Array.isArray(keyRings));
  });
});
