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

import * as assert from 'assert';
import {describe, it} from 'mocha';
import * as index from '../src/apiIndex';
import {ServiceOptions, GoogleConfigurable} from '../src';

describe(__filename, () => {
  it('should get api with just the version as options', () => {
    const context = {} as GoogleConfigurable;
    const version = 'v1';
    const versions = {
      [version]: class Client {
        constructor(options: ServiceOptions, ctx: {}) {
          assert.deepStrictEqual(options, {});
          assert.strictEqual(context, ctx);
        }
      },
    };
    const api = index.getAPI('test', version, versions, context);
    assert.ok(api);
  });
  it('should get api with full options', () => {
    const context = {} as GoogleConfigurable;
    const version = 'v1';
    const versions = {
      [version]: class Client {
        constructor(options: ServiceOptions, ctx: {}) {
          assert.deepStrictEqual(options, {});
          assert.strictEqual(context, ctx);
        }
      },
    };
    const api = index.getAPI('test', {version}, versions, context);
    assert.ok(api);
  });
  it('should throw if pass no options or version', () => {
    assert.throws(() => {
      index.getAPI('test', undefined!, {});
    }, /Accepts only string or object/);
  });
  it('should throw with a suitable error if instantiation fails', () => {
    const versions = {
      v1: class Client {
        constructor() {
          throw new Error('boop');
        }
      },
    };
    assert.throws(() => {
      index.getAPI('test', 'v1', versions);
    }, /Unable to load endpoint/);
  });
});
