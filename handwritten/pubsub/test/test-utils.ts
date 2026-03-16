// Copyright 2025 Google LLC
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

import {SinonSandbox, SinonFakeTimers} from 'sinon';
import {loggingUtils} from 'google-gax';

type FakeTimersParam = Parameters<SinonSandbox['useFakeTimers']>[0];
interface FakeTimerConfig {
  now?: number;
  toFake?: string[];
}

/**
 * Utilities for unit test code.
 *
 * @private
 */
export class TestUtils {
  /**
   * This helper should be used to enable fake timers for Sinon sandbox.
   *
   * @param sandbox The sandbox
   * @param now An optional date to set for "now"
   * @returns The clock object from useFakeTimers()
   */
  static useFakeTimers(sandbox: SinonSandbox, now?: number): SinonFakeTimers {
    const config: FakeTimerConfig = {
      toFake: [
        'setTimeout',
        'clearTimeout',
        'setInterval',
        'clearInterval',
        'Date',
      ],
    };
    if (now) {
      config.now = now;
    }

    // The types are screwy in useFakeTimers(). I'm just going to pick one.
    return sandbox.useFakeTimers(config as FakeTimersParam);
  }
}

/**
 * Wrapper to hook the output of ad-hoc loggers (loggingUtils.AdhocDebugLogFunction),
 * because the sandbox will patch the wrong instance of the methods.
 *
 * @private
 */
export class FakeLog {
  fields?: loggingUtils.LogFields;
  args?: unknown[];
  called = false;
  log: loggingUtils.AdhocDebugLogFunction;
  listener: (lf: loggingUtils.LogFields, a: unknown[]) => void;

  constructor(log: loggingUtils.AdhocDebugLogFunction) {
    this.log = log;
    this.listener = (lf: loggingUtils.LogFields, a: unknown[]) => {
      this.fields = lf;
      this.args = a;
      this.called = true;
    };
    this.log.on('log', this.listener);
  }

  remove() {
    // This really ought to be properly exposed, but since it's not, we'll
    // do this for now to keep the tests from being leaky.
    const instance = (this.log as loggingUtils.AdhocDebugLogFunction).instance;
    instance.off('log', this.listener);
  }
}
