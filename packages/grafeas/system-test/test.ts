// Copyright 2020 Google LLC
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
import {describe, it} from 'mocha';
import * as assert from 'assert';
import {GrafeasClient} from '../src';
import {CallOptions} from 'google-gax';

describe('GrafeasSystemTest', async () => {
  it('lists occurrences', async () => {
    const client = new GrafeasClient();
    const projectId = await client.getProjectId();
    const resp = await client.listOccurrences(
      {
        parent: client.projectPath(projectId),
      },

      {pageSize: 1, autoPaginate: false} as CallOptions
    );
    assert.ok(resp.length > 0);
  });
});
