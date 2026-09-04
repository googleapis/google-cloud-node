/*!
 * Copyright 2026 Google LLC. All Rights Reserved.
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

import * as assert from 'assert';
import {describe, it} from 'mocha';
import {replaceProjectIdToken} from '../src/helper';
import {Stream} from 'stream';

describe('helper', () => {
  describe('replaceProjectIdToken', () => {
    const projectId = 'my-project-id';

    it('should replace placeholders in simple strings', () => {
      const input = 'projects/{{projectId}}/instances';
      const expected = 'projects/my-project-id/instances';
      assert.strictEqual(replaceProjectIdToken(input, projectId), expected);
    });

    it('should return non-placeholder strings as is', () => {
      const input = 'projects/fixed-project/instances';
      assert.strictEqual(replaceProjectIdToken(input, projectId), input);
    });

    it('should replace placeholders inside arrays', () => {
      const input = ['projects/{{projectId}}', 'fixed-string'];
      const expected = ['projects/my-project-id', 'fixed-string'];
      assert.deepStrictEqual(replaceProjectIdToken(input, projectId), expected);
    });

    it('should replace placeholders recursively in objects', () => {
      const input = {
        resource: 'projects/{{projectId}}/instances',
        config: {
          parent: 'projects/{{projectId}}',
        },
      };
      const expected = {
        resource: 'projects/my-project-id/instances',
        config: {
          parent: 'projects/my-project-id',
        },
      };
      assert.deepStrictEqual(replaceProjectIdToken(input, projectId), expected);
    });

    it('should completely skip recursive traversal for known user data keys', () => {
      const input = {
        session: 'projects/{{projectId}}/sessions',
        sql: 'SELECT * FROM Users WHERE parent = "{{projectId}}"',
        params: {
          id: '{{projectId}}',
          deep: {
            key: 'projects/{{projectId}}',
          },
        },
        mutations: [
          {
            insert: {
              table: 'Users',
              values: ['{{projectId}}'],
            },
          },
        ],
      };
      const expected = {
        session: 'projects/my-project-id/sessions',
        sql: 'SELECT * FROM Users WHERE parent = "{{projectId}}"', // sql key skipped
        params: {
          id: '{{projectId}}', // params key skipped
          deep: {
            key: 'projects/{{projectId}}',
          },
        },
        mutations: [
          // mutations key skipped
          {
            insert: {
              table: 'Users',
              values: ['{{projectId}}'],
            },
          },
        ],
      };
      assert.deepStrictEqual(replaceProjectIdToken(input, projectId), expected);
    });

    it('should return Buffers and Streams as-is', () => {
      const buffer = Buffer.from('test');
      const stream = new Stream();
      assert.strictEqual(replaceProjectIdToken(buffer, projectId), buffer);
      assert.strictEqual(replaceProjectIdToken(stream, projectId), stream);
    });

    it('should not throw when frozen object does not have a placeholder', () => {
      const frozenObj = Object.freeze({
        name: 'projects/fixed-project',
        fixed: 'no-placeholder',
        nested: Object.freeze({
          other: 'fixed-value',
        }),
      });

      assert.doesNotThrow(() => {
        replaceProjectIdToken(frozenObj, projectId);
      });
    });

    it('should throw if a frozen object contains a placeholder because mutation is illegal', () => {
      const frozenObj = Object.freeze({
        name: 'projects/{{projectId}}',
      });

      assert.throws(() => {
        replaceProjectIdToken(frozenObj, projectId);
      }, /Cannot assign to read only property/);
    });

    it('should replace more than one {{projectId}}', () => {
      const input = 'A {{projectId}} M {{projectId}} Z';
      const expected = 'A my-project-id M my-project-id Z';
      assert.strictEqual(replaceProjectIdToken(input, projectId), expected);
    });

    it('should replace any {{projectId}} it finds (nested / complex tree)', () => {
      const input = {
        parent: 'A {{projectId}} Z',
        database: {
          parent: 'A {{projectId}} Z',
          baseConfig: 'projects/{{projectId}}/instanceConfigs/base-1',
          config: {
            name: 'A {{projectId}} Z',
          },
        },
        backup: [
          {
            name: 'A {{projectId}} Z',
            encryptionConfig: {
              kmsKeyName: 'A {{projectId}} Z',
            },
            database: [
              {
                session: 'A {{projectId}} Z',
                parent: {
                  name: 'A {{projectId}} Z',
                },
              },
            ],
          },
        ],
      };
      const expected = {
        parent: 'A my-project-id Z',
        database: {
          parent: 'A my-project-id Z',
          baseConfig: 'projects/my-project-id/instanceConfigs/base-1',
          config: {
            name: 'A my-project-id Z',
          },
        },
        backup: [
          {
            name: 'A my-project-id Z',
            encryptionConfig: {
              kmsKeyName: 'A my-project-id Z',
            },
            database: [
              {
                session: 'A my-project-id Z',
                parent: {
                  name: 'A my-project-id Z',
                },
              },
            ],
          },
        ],
      };
      assert.deepStrictEqual(replaceProjectIdToken(input, projectId), expected);
    });

    it('should not inject projectId into stream properties', () => {
      const transform = new Stream() as any;
      transform.prop = 'A {{projectId}} Z';

      const replaced = replaceProjectIdToken(transform, projectId);
      assert.deepStrictEqual(transform.prop, replaced.prop);
    });

    it('should throw MissingProjectIdError if projectId is falsy or is the placeholder itself', () => {
      const input = 'projects/{{projectId}}/instances';
      assert.throws(() => {
        replaceProjectIdToken(input, '');
      }, /Sorry, we cannot connect to Cloud Services/);

      assert.throws(() => {
        replaceProjectIdToken(input, '{{projectId}}');
      }, /Sorry, we cannot connect to Cloud Services/);
    });
  });
});
