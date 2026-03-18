// Copyright 2022 Google LLC
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
import {
  Duration,
  atLeast as durationAtLeast,
  atMost as durationAtMost,
} from '../src/temporal';
import * as assert from 'assert';

describe('temporal', () => {
  describe('Duration', () => {
    it('can be created from millis', () => {
      const duration = Duration.from({milliseconds: 1234});
      assert.strictEqual(duration.seconds, 1.234);
    });

    it('can be created from seconds', () => {
      const duration = Duration.from({seconds: 1.234});
      assert.strictEqual(duration.milliseconds, 1234);
    });

    it('can be created from minutes', () => {
      const duration = Duration.from({minutes: 30});
      assert.strictEqual(duration.total('hour'), 0.5);
    });

    it('can be created from hours', () => {
      const duration = Duration.from({hours: 1.5});
      assert.strictEqual(duration.total('minute'), 90);
    });

    it('can be created from a Duration', () => {
      const duration = Duration.from({seconds: 5});
      const second = Duration.from(duration);
      assert.strictEqual(duration.milliseconds, second.milliseconds);
    });

    it('adds durations', () => {
      const duration = Duration.from({seconds: 10});
      const second = duration.add({milliseconds: 1000});
      assert.strictEqual(second.seconds, 11);
    });

    it('subtracts durations', () => {
      const duration = Duration.from({seconds: 10});
      const second = duration.subtract({seconds: 5});
      assert.strictEqual(second.milliseconds, 5000);
    });

    it('compares durations', () => {
      const duration = Duration.from({seconds: 10});
      const less = Duration.from({seconds: 5});
      const more = Duration.from({seconds: 15});

      const minus = Duration.compare(duration, more);
      assert.strictEqual(minus, -1);

      const plus = Duration.compare(duration, less);
      assert.strictEqual(plus, 1);

      const equal = Duration.compare(duration, duration);
      assert.strictEqual(equal, 0);
    });

    it('has working helper functions', () => {
      const duration = Duration.from({seconds: 10});

      const atLeast1 = durationAtLeast(duration, Duration.from({seconds: 5}));
      assert.strictEqual(atLeast1.seconds, 10);

      const atLeast2 = durationAtLeast(duration, Duration.from({seconds: 15}));
      assert.strictEqual(atLeast2.seconds, 15);

      const atMost1 = durationAtMost(duration, Duration.from({seconds: 5}));
      assert.strictEqual(atMost1.seconds, 5);

      const atMost2 = durationAtMost(duration, Duration.from({seconds: 15}));
      assert.strictEqual(atMost2.seconds, 10);
    });
  });
});
