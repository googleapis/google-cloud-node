/*!
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  formatLogName,
  assignSeverityToEntries,
  snakecaseKeys,
} from '../../src/utils/log-common';
import {describe, it} from 'mocha';
import {Entry} from '../../src';
import * as assert from 'assert';
import * as extend from 'extend';

describe('Log Common', () => {
  describe('assignSeverityToEntries', () => {
    const circular = {} as {circular: {}};
    circular.circular = circular;
    const ENTRIES = [
      {data: {a: 'b'}},
      {data: {c: 'd'}},
      {data: {e: circular}},
    ] as Entry[];
    const SEVERITY = 'severity';

    it('should assign severity to a single entry', () => {
      assert.deepStrictEqual(
        assignSeverityToEntries(ENTRIES[0], SEVERITY)
          .map(x => x.metadata)
          .map(x => x.severity),
        [SEVERITY]
      );
    });

    it('should assign severity property to multiple entries', () => {
      assert.deepStrictEqual(
        assignSeverityToEntries(ENTRIES, SEVERITY)
          .map(x => x.metadata)
          .map(x => x.severity),
        [SEVERITY, SEVERITY, SEVERITY]
      );
    });

    it('should not affect original array', () => {
      const originalEntries = ENTRIES.map(x => extend({}, x));
      assignSeverityToEntries(originalEntries, SEVERITY);
      assert.deepStrictEqual(originalEntries, ENTRIES);
    });
  });

  describe('formatLogName', () => {
    const PROJECT_ID = 'project-id';
    const NAME = 'log-name';

    const EXPECTED = 'projects/' + PROJECT_ID + '/logs/' + NAME;

    it('should properly format the name', () => {
      assert.strictEqual(formatLogName(PROJECT_ID, NAME), EXPECTED);
    });

    it('should encode a name that requires it', () => {
      const name = 'appengine/logs';
      const expectedName = 'projects/' + PROJECT_ID + '/logs/appengine%2Flogs';

      assert.strictEqual(formatLogName(PROJECT_ID, name), expectedName);
    });

    it('should not encode a name that does not require it', () => {
      const name = 'appengine%2Flogs';
      const expectedName = 'projects/' + PROJECT_ID + '/logs/' + name;

      assert.strictEqual(formatLogName(PROJECT_ID, name), expectedName);
    });

    it('should format a name with empty PROJECT_ID', () => {
      const name = 'appengine%2Flogs';
      const expectedName = 'projects//logs/' + name;

      assert.strictEqual(formatLogName('', name), expectedName);
    });
  });

  describe('snakecaseKeys', () => {
    it('should snakecase keys that are in camelcase', () => {
      // Check it should snakecase resource labels, as many sources & docs
      // wrongly instruct users to use camelcase.
      const labels = {
        projectId: 'id',
        fooBarBaz: 'foobar',
        some_other: 'value',
        AnotherOne: 'another',
      };
      const result = snakecaseKeys(labels);
      assert.deepStrictEqual(result, {
        project_id: 'id',
        foo_bar_baz: 'foobar',
        some_other: 'value',
        _another_one: 'another',
      });
    });
  });
});
