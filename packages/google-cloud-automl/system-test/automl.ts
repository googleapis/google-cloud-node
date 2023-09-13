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

'use strict';

import * as automl from '../src';
import * as assert from 'assert';
import {describe, it, before} from 'mocha';

const client = new automl.AutoMlClient();
const location = 'us-central1';

describe('automl system tests', () => {
  let projectId: string;
  before(async () => {
    projectId = await client.getProjectId();
  });

  it('should list all datasets', async () => {
    const parent = client.locationPath(projectId, location);
    const [datasets] = await client.listDatasets({parent});
    assert.ok(Array.isArray(datasets));
  });
});
