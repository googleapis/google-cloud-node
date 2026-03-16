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

import * as assert from 'assert';
import {describe, it} from 'mocha';

import {PubsubMessage} from '../../src/publisher';
import * as pm from '../../src/publisher/pubsub-message';

describe('PubsubMessage', () => {
  it('should calculate properly for blank messages', () => {
    const blank: PubsubMessage = {};
    const size = pm.calculateMessageSize(blank);
    assert.strictEqual(size, 0);
    assert.strictEqual(blank.calculatedSize, size);
  });

  it('should calculate properly for a data only message', () => {
    const dataOnly: PubsubMessage = {data: Buffer.from('test')};
    const size = pm.calculateMessageSize(dataOnly);
    assert.strictEqual(size, 4);
    assert.strictEqual(dataOnly.calculatedSize, size);
  });

  it('should calculate properly for an attr only message', () => {
    const attrOnly: PubsubMessage = {
      attributes: {
        foo: 'bar',
      },
    };
    const size = pm.calculateMessageSize(attrOnly);
    assert.strictEqual(size, 6);
    assert.strictEqual(attrOnly.calculatedSize, size);
  });

  it('should calculate properly for a both message', () => {
    const both: PubsubMessage = {
      data: Buffer.from('test'),
      attributes: {
        foo: 'bar',
        baz: 'quux',
      },
    };
    const size = pm.calculateMessageSize(both);
    assert.strictEqual(size, 17);
    assert.strictEqual(both.calculatedSize, size);
  });

  // This isn't really part of the spec, but it might happen.
  it('should handle undefined attributes', () => {
    const weird: PubsubMessage = {
      attributes: {
        foo: undefined as unknown as string,
      },
    };
    const size = pm.calculateMessageSize(weird);
    assert.strictEqual(size, 3);
    assert.strictEqual(weird.calculatedSize, size);
  });
});
