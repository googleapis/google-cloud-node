// Copyright 2026 Google LLC
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

import {TestResources, TokenMaker, Resource, defaultTokenMaker} from '../src';

describe('testResources (unit)', () => {
  const fixedId = 'fixed';
  const fixedTime = Date.now();
  const fakeTokenMaker: TokenMaker = {
    uuid: () => fixedId,
    timestamp: () => fixedTime,
  };

  const suiteId = 'someSuite';
  let testResources: TestResources;

  beforeEach(() => {
    testResources = new TestResources(suiteId, fakeTokenMaker);
  });

  it('has predictable prefixes', () => {
    const prefix = testResources.getPrefix('testId');
    expect(prefix).toBe(`${suiteId}-${fixedTime}-testId`);

    const normalizedPrefix = testResources.getPrefix('test-id-dashes');
    expect(normalizedPrefix).toBe(`${suiteId}-${fixedTime}-test_id_dashes`);

    const suitePrefix = testResources.getPrefix();
    expect(suitePrefix).toBe(`${suiteId}-${fixedTime}`);
  });

  it('generates names', () => {
    const prefix = testResources.getPrefix('testId');
    const name = testResources.generateName('testId');
    expect(name).toBe(`${prefix}-${fixedId}`);
  });

  it('generates BigQuery names', () => {
    const name = testResources.generateBigQueryName('testId');
    expect(name).toBe(`${suiteId}_${fixedTime}_testId_${fixedId}`);
  });

  it('generates Storage names', () => {
    const name = testResources.generateStorageName('testId');
    expect(name).toBe(`${suiteId}_${fixedTime}_testId_${fixedId}`);
  });

  it('filters for test', () => {
    const resources: Resource[] = [
      {name: `${suiteId}-${fixedTime}-testA-123`},
      {name: `${suiteId}-${fixedTime}-testB-456`},
      {name: 'unrelated'},
    ];
    const filtered = testResources.filterForTest('testA', resources);
    expect(filtered).toEqual([{name: `${suiteId}-${fixedTime}-testA-123`}]);
  });

  it('filters for current run', () => {
    const resources: Resource[] = [
      {name: `${suiteId}-${fixedTime}-testA-123`},
      {name: `${suiteId}-${fixedTime - 1000}-testA-456`},
      {name: 'unrelated'},
    ];
    const filtered = testResources.filterForCurrentRun(resources);
    expect(filtered).toEqual([{name: `${suiteId}-${fixedTime}-testA-123`}]);
  });

  it('filters for suite', () => {
    const resources: Resource[] = [
      {name: `${suiteId}-${fixedTime}-testA-123`},
      {name: `${suiteId}-${fixedTime - 1000}-testB-456`},
      {name: 'unrelated'},
    ];
    const filtered = testResources.filterForSuite(resources);
    expect(filtered).toEqual([
      {name: `${suiteId}-${fixedTime}-testA-123`},
      {name: `${suiteId}-${fixedTime - 1000}-testB-456`},
    ]);
  });

  it('filters for cleanup', () => {
    const resources: Resource[] = [
      {
        // Not related
        name: 'ooga',
      },
      {
        // Resource without name
        name: undefined,
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
        // For previous test run, but old (> 2 hours)
        name: `${suiteId}-${fixedTime - 3000 * 60 * 60}-bob-57823975`,
      },
    ];
    const filtered = testResources.filterForCleanup(resources);
    expect(filtered.length).toBe(2);
    expect(filtered.filter(r => r.name?.includes('bob-9871')).length).toBe(1);
    expect(filtered.filter(r => r.name?.includes('bob-5782')).length).toBe(1);
  });

  it('supports default maker', () => {
    const defaultResources = new TestResources('default-suite');
    expect(defaultResources.testSuiteId).toBe('default_suite');
    expect(typeof defaultTokenMaker.uuid()).toBe('string');
    expect(typeof defaultTokenMaker.timestamp()).toBe('number');
  });
});
