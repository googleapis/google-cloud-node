/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-restricted-properties */

import {describe, it} from 'mocha';

// Helper to make a type itselt (T) and optionally union that with (T['skip'])
type tOrSkipT<T> = T | (T extends {skip: unknown} ? T['skip'] : T);

declare module 'mocha' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  interface TestFunction {
    skipEnterprise: tOrSkipT<TestFunction>;
    skipEmulator: tOrSkipT<TestFunction>;
    skipClassic: tOrSkipT<TestFunction>;
  }

  interface PendingTestFunction {
    skipEnterprise: tOrSkipT<PendingTestFunction>;
    skipEmulator: tOrSkipT<PendingTestFunction>;
    skipClassic: tOrSkipT<PendingTestFunction>;
  }

  interface SuiteFunction {
    skipEnterprise: tOrSkipT<SuiteFunction>;
    skipEmulator: tOrSkipT<SuiteFunction>;
    skipClassic: tOrSkipT<SuiteFunction>;
  }

  interface PendingSuiteFunction {
    skipEnterprise: tOrSkipT<PendingSuiteFunction>;
    skipEmulator: tOrSkipT<PendingSuiteFunction>;
    skipClassic: tOrSkipT<PendingSuiteFunction>;
  }
}

// Define helpers
export function mixinSkipImplementations(obj: unknown): void {
  Object.defineProperty(obj, 'skipEnterprise', {
    get(): unknown {
      if (this === it.skip) {
        return this;
      }
      if (this === describe.skip) {
        return this;
      }
      if (process.env.RUN_ENTERPRISE_TESTS) {
        return this.skip;
      }
      return this;
    },
  });

  Object.defineProperty(obj, 'skipEmulator', {
    get(): unknown {
      if (this === it.skip) {
        return this;
      }
      if (this === describe.skip) {
        return this;
      }
      if (process.env.FIRESTORE_EMULATOR_HOST) {
        return this.skip;
      }
      return this;
    },
  });

  Object.defineProperty(obj, 'skipClassic', {
    get(): unknown {
      if (this === it.skip) {
        return this;
      }
      if (this === describe.skip) {
        return this;
      }
      if (!process.env.RUN_ENTERPRISE_TESTS) {
        return this.skip;
      }
      return this;
    },
  });
}

// TODO add mocha functions that must be extended
[global.it, global.describe, it, it.skip, describe, describe.skip].forEach(
  mixinSkipImplementations,
);
