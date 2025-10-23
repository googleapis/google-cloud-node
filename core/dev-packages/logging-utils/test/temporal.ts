// Copyright 2022-2024 Google LLC
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
import {Duration} from '../src/temporal';
import * as assert from 'assert';

describe('temporal', () => {
  describe('Duration', () => {
    it('can be created from millis', () => {
      const duration = Duration.from({millis: 1234});
      assert.strictEqual(duration.totalOf('second'), 1.234);
    });
    it('can be created from seconds', () => {
      const duration = Duration.from({seconds: 1.234});
      assert.strictEqual(duration.totalOf('millisecond'), 1234);
    });
    it('can be created from minutes', () => {
      const duration = Duration.from({minutes: 30});
      assert.strictEqual(duration.totalOf('hour'), 0.5);
    });
    it('can be created from hours', () => {
      const duration = Duration.from({hours: 1.5});
      assert.strictEqual(duration.totalOf('minute'), 90);
    });
  });
});
