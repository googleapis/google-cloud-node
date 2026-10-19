// Copyright 2026 Google LLC
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

import * as Module from 'module';
import * as path from 'path';

delete require.cache[require.resolve(__filename)];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Stubs = Record<string, any>;
const mod = Module as unknown as {
  prototype: {require: NodeRequire};
  _resolveFilename: (request: string, parent: NodeModule) => string;
};
const {hasOwnProperty} = Object.prototype;
const isObj = (o: unknown) =>
  Boolean(o && (typeof o === 'object' || typeof o === 'function'));
const hasOwn = (o: unknown, k: string) => isObj(o) && hasOwnProperty.call(o, k);
const isGlobal = (s: unknown) =>
  hasOwn(s, '@global') || hasOwn(s, '@runtimeGlobal');
const resolveFrom = (base: string, req: string) => {
  try {
    return require.resolve(req, {paths: [path.dirname(base)]});
  } catch {
    return req[0] === '.' ? path.resolve(path.dirname(base), req) : req;
  }
};

const parent = module.parent || module;
let skipCallThru = false;
let keepCache = true;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function proxyquire<T = any>(request: string, stubs: Stubs = {}): T {
  const sut = mod._resolveFilename(request, parent);
  const resolved: Stubs = {};
  let global = false;
  for (const [k, v] of Object.entries(stubs)) {
    if (isGlobal(v)) global = true;
    resolved[resolveFrom(sut, k)] = v;
  }
  const cache = require.cache;
  const keys = global
    ? Object.keys(cache).filter(id => !id.endsWith('.node'))
    : [sut];
  const saved = keys.map(id => [id, cache[id]] as const);
  for (const id of keys) delete cache[id];
  const prev = mod.prototype.require;
  const req = function (this: NodeModule, id: string) {
    const isSut = this?.filename === sut;
    if (this?.filename && (isSut || global)) {
      const hit = (isSut || !id.startsWith('.')) && hasOwn(stubs, id);
      const rId = hit ? '' : resolveFrom(this.filename, id);
      if (hit || hasOwn(resolved, rId)) {
        const stub = hit ? stubs[id] : resolved[rId];
        if (isSut || isGlobal(stub)) {
          if (stub === null) {
            const e = new Error(`Cannot find module '${id}'`);
            throw Object.assign(e, {code: 'MODULE_NOT_FOUND'});
          }
          const skip = hasOwn(stub, '@noCallThru')
            ? stub['@noCallThru']
            : skipCallThru;
          if (!skip && stub && ['object', 'function'].includes(typeof stub)) {
            try {
              const real = prev.call(this, id);
              if (real && ['object', 'function'].includes(typeof real)) {
                return new Proxy(stub, {
                  get(target, prop) {
                    if (prop in target) {
                      return Reflect.get(target, prop);
                    }
                    return Reflect.get(real, prop);
                  },
                  has(target, prop) {
                    return prop in target || prop in real;
                  },
                  ownKeys(target) {
                    return Array.from(
                      new Set([
                        ...Reflect.ownKeys(target),
                        ...Reflect.ownKeys(real),
                      ]),
                    );
                  },
                  getOwnPropertyDescriptor(target, prop) {
                    const desc =
                      Reflect.getOwnPropertyDescriptor(target, prop) ||
                      Reflect.getOwnPropertyDescriptor(real, prop);
                    return desc ? {...desc, configurable: true} : undefined;
                  },
                });
              }
            } catch {
              // ignore
            }
          }
          return stub;
        }
      }
    }
    return prev.call(this, id);
  };
  mod.prototype.require = Object.assign(req, prev);
  try {
    return prev.call(parent, request);
  } finally {
    mod.prototype.require = prev;
    for (const id of global ? Object.keys(cache) : [sut]) {
      if (!id.endsWith('.node')) delete cache[id];
    }
    for (const [id, m] of saved) {
      if (m && (keepCache || id !== sut)) cache[id] = m;
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace proxyquire {
  export const load = proxyquire;
  export const noCallThru = () => ((skipCallThru = true), proxyquire);
  export const callThru = () => ((skipCallThru = false), proxyquire);
  export const noPreserveCache = () => ((keepCache = false), proxyquire);
  export const preserveCache = () => ((keepCache = true), proxyquire);
}

export = proxyquire;
