// Copyright 2022 Google LLC
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

import {assert} from 'chai';
import {describe, it, beforeEach} from 'mocha';
import {TestResources} from './testResources';

describe('testResources (unit)', () => {
  const fixedId = 'fixed';
  const fixedTime = Date.now();
  const fakeTokenMaker = {
    uuid: () => fixedId,
    timestamp: () => fixedTime,
  };

  const suiteId = 'someSuite';
  let testResources!: TestResources;

  beforeEach(() => {
    testResources = new TestResources(suiteId, fakeTokenMaker);
  });

  it('has predictable prefixes', () => {
    const prefix = testResources.getPrefix('testId');
    assert.strictEqual(prefix, `${suiteId}-${fixedTime}-testId`);

    const normalizedPrefix = testResources.getPrefix('test-id-dashes');
    assert.strictEqual(
      normalizedPrefix,
      `${suiteId}-${fixedTime}-test_id_dashes`
    );

    const suitePrefix = testResources.getPrefix();
    assert.strictEqual(suitePrefix, `${suiteId}-${fixedTime}`);
  });

  it('generates names', () => {
    const prefix = testResources.getPrefix('testId');
    const name = testResources.generateName('testId');
    assert.strictEqual(name, `${prefix}-${fixedId}`);
  });

  it('filters for cleanup', () => {
    const resources = [
      {
        // Not related
        name: 'ooga',
      },
      {
        // For current test run
        name: `${suiteId}-${fixedTime}-bob-98719284791`,
      },
      {
        // For previous test run, but not very old
        name: `${suiteId}-${fixedTime - 100}-bob-124897912`,
      },
      {
        // For previous test run, but old
        name: `${suiteId}-${fixedTime - 3000 * 60 * 60}-bob-57823975`,
      },
    ];
    const filtered = testResources.filterForCleanup(resources);
    assert.strictEqual(filtered.length, 2);
    assert.strictEqual(
      1,
      filtered.filter(r => r.name?.includes('bob-9871')).length
    );
    assert.strictEqual(
      1,
      filtered.filter(r => r.name?.includes('bob-5782')).length
    );
  });
});
