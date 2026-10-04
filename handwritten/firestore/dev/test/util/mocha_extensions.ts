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

interface VitestTaskNode {
  type?: string;
  mode?: string;
  tasks?: VitestTaskNode[];
}

function resetDescendantSuiteSkipModes(suite: VitestTaskNode): void {
  if (!suite.tasks) {
    return;
  }
  for (const child of suite.tasks) {
    if (child.type === 'suite') {
      if (child.mode === 'skip') {
        child.mode = 'run';
      }
      resetDescendantSuiteSkipModes(child);
    }
  }
}

function normalizeNestedSkipCollector(res: unknown): unknown {
  const collector = res as
    | {
        mode?: string;
        collect?: (file: unknown) => Promise<VitestTaskNode>;
      }
    | undefined;
  if (collector?.mode === 'skip' && typeof collector.collect === 'function') {
    const origCollect = collector.collect;
    collector.collect = async function (this: unknown, file: unknown) {
      const suite = await origCollect.call(this, file);
      resetDescendantSuiteSkipModes(suite);
      return suite;
    };
  }
  return res;
}

function wrapSkipFn(
  skipFn: ((...args: unknown[]) => unknown) & Record<string, unknown>,
): ((...args: unknown[]) => unknown) & Record<string, unknown> {
  if (skipFn.__wrappedNestedSkip) {
    return skipFn;
  }
  const wrapped = function (this: unknown, ...args: unknown[]) {
    return normalizeNestedSkipCollector(skipFn.apply(this, args));
  } as unknown as ((...args: unknown[]) => unknown) & Record<string, unknown>;
  Object.assign(wrapped, skipFn);
  wrapped.__isSkip = true;
  wrapped.__wrappedNestedSkip = true;
  mixinSkipImplementations(wrapped);
  return wrapped;
}

function getSkip(target: {skip?: unknown}): unknown {
  const skipFn = target.skip as
    (((...args: unknown[]) => unknown) & Record<string, unknown>) | undefined;
  if (skipFn && typeof skipFn === 'function') {
    return wrapSkipFn(skipFn);
  }
  return skipFn;
}

// Define helpers
export function mixinSkipImplementations(obj: unknown): void {
  if (!obj || Object.getOwnPropertyDescriptor(obj, 'skipEmulator')) {
    return;
  }

  Object.defineProperty(obj, 'skipEnterprise', {
    get(): unknown {
      if (
        (this as {__isSkip?: boolean}).__isSkip ||
        this === globalThis.it?.skip ||
        this === globalThis.describe?.skip
      ) {
        return this;
      }
      if (process.env.RUN_ENTERPRISE_TESTS) {
        return getSkip(this);
      }
      return this;
    },
  });

  Object.defineProperty(obj, 'skipEmulator', {
    get(): unknown {
      if (
        (this as {__isSkip?: boolean}).__isSkip ||
        this === globalThis.it?.skip ||
        this === globalThis.describe?.skip
      ) {
        return this;
      }
      if (process.env.FIRESTORE_EMULATOR_HOST) {
        return getSkip(this);
      }
      return this;
    },
  });

  Object.defineProperty(obj, 'skipClassic', {
    get(): unknown {
      if (
        (this as {__isSkip?: boolean}).__isSkip ||
        this === globalThis.it?.skip ||
        this === globalThis.describe?.skip
      ) {
        return this;
      }
      if (!process.env.RUN_ENTERPRISE_TESTS) {
        return getSkip(this);
      }
      return this;
    },
  });
}

[
  globalThis.it,
  globalThis.it?.skip,
  globalThis.describe,
  globalThis.describe?.skip,
].forEach(mixinSkipImplementations);

// Export modified it and describe.
const it = globalThis.it;
const describe = globalThis.describe;
export {it, describe};
