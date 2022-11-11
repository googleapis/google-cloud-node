// Copyright 2018 Google LLC
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

import * as assert from 'assert';
import {describe, it} from 'mocha';
import {CloudSchedulerClient} from '../src';

describe('typescript system test', () => {
  it('should list available jobs', async () => {
    const location = 'us-central1';
    const client = new CloudSchedulerClient();
    const projectId = await client.getProjectId();
    const parent = client.locationPath(projectId, location);
    const [result] = await client.listJobs({parent});
    assert.ok(result);
  });
});
