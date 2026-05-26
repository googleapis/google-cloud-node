// Copyright 2014 Google LLC
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

import * as assert from 'assert';
import {describe, it} from 'mocha';
import * as stream from 'stream';
import {replaceProjectIdToken} from '../src';

describe('projectId placeholder', () => {
  const PROJECT_ID = 'project-id';

  it('should replace any {{projectId}} it finds', () => {
    assert.deepStrictEqual(
      replaceProjectIdToken(
        {
          here: 'A {{projectId}} Z',
          nested: {
            here: 'A {{projectId}} Z',
            nested: {
              here: 'A {{projectId}} Z',
            },
          },
          array: [
            {
              here: 'A {{projectId}} Z',
              nested: {
                here: 'A {{projectId}} Z',
              },
              nestedArray: [
                {
                  here: 'A {{projectId}} Z',
                  nested: {
                    here: 'A {{projectId}} Z',
                  },
                },
              ],
            },
          ],
          simpleArray: ['A {{projectId}} Z'],
        },
        PROJECT_ID,
      ),
      {
        here: 'A ' + PROJECT_ID + ' Z',
        nested: {
          here: 'A ' + PROJECT_ID + ' Z',
          nested: {
            here: 'A ' + PROJECT_ID + ' Z',
          },
        },
        array: [
          {
            here: 'A ' + PROJECT_ID + ' Z',
            nested: {
              here: 'A ' + PROJECT_ID + ' Z',
            },
            nestedArray: [
              {
                here: 'A ' + PROJECT_ID + ' Z',
                nested: {
                  here: 'A ' + PROJECT_ID + ' Z',
                },
              },
            ],
          },
        ],
        simpleArray: ['A ' + PROJECT_ID + ' Z'],
      },
    );
  });

  it('should replace more than one {{projectId}}', () => {
    assert.deepStrictEqual(
      replaceProjectIdToken(
        {
          here: 'A {{projectId}} M {{projectId}} Z',
        },
        PROJECT_ID,
      ),
      {
        here: 'A ' + PROJECT_ID + ' M ' + PROJECT_ID + ' Z',
      },
    );
  });

  it('should throw if it needs a projectId and cannot find it', () => {
    assert.throws(() => {
      (replaceProjectIdToken as Function)({
        here: '{{projectId}}',
      });
    }, /Sorry, we cannot connect/);
  });

  it('should return object containing a buffer as-is', () => {
    const bufferContainingObject = {
      prop1: 'A {{projectId}} Z',
      buf: Buffer.from('test'),
    };

    const replaced = replaceProjectIdToken(bufferContainingObject, PROJECT_ID);
    assert.deepStrictEqual(
      {
        prop1: `A ${PROJECT_ID} Z`,
        buf: Buffer.from('test'),
      },
      replaced,
    );
  });

  it('should return values without placeholder as-is', () => {
    assert.strictEqual(
      replaceProjectIdToken('no-placeholder', PROJECT_ID),
      'no-placeholder',
    );
    assert.strictEqual(replaceProjectIdToken(123, PROJECT_ID), 123);
    assert.strictEqual(replaceProjectIdToken(true, PROJECT_ID), true);
    assert.strictEqual(replaceProjectIdToken(null, PROJECT_ID), null);
    assert.strictEqual(replaceProjectIdToken(undefined, PROJECT_ID), undefined);

    const array = [1, 2, 3];
    assert.strictEqual(replaceProjectIdToken(array, PROJECT_ID), array);

    const object = {a: 1, b: 2};
    assert.strictEqual(replaceProjectIdToken(object, PROJECT_ID), object);
  });

  it('should handle frozen arrays and objects without placeholders correctly without throwing', () => {
    const frozenArray = Object.freeze(['no-placeholder', 123, true]);
    const replacedArray = replaceProjectIdToken(frozenArray, PROJECT_ID);
    assert.strictEqual(frozenArray, replacedArray);

    const frozenObject = Object.freeze({
      prop: 'no-placeholder',
      other: 123,
    });
    const replacedObject = replaceProjectIdToken(frozenObject, PROJECT_ID);
    assert.strictEqual(frozenObject, replacedObject);
  });

  it('should not inject projectId into stream', () => {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    const transform = new stream.Transform() as any;
    transform.prop = 'A {{projectId}} Z';

    const replaced = replaceProjectIdToken(transform, PROJECT_ID);
    assert.deepStrictEqual(transform.prop, replaced.prop);
  });
});
