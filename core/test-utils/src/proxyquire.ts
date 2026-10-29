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
import {fileURLToPath} from 'url';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ProxyquireStubs = Record<string, any>;

export interface Proxyquire {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <T = any>(request: string, stubs?: ProxyquireStubs): T;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  load<T = any>(request: string, stubs?: ProxyquireStubs): T;
  noCallThru(): Proxyquire;
  callThru(): Proxyquire;
  noPreserveCache(): Proxyquire;
  preserveCache(): Proxyquire;
}

type ModuleConstructor = {
  new (id: string, parent?: NodeModule): NodeModule;
  prototype: {require: NodeRequire};
  _cache?: NodeJS.Dict<NodeModule>;
  _resolveFilename: (request: string, parent: NodeModule) => string;
  _nodeModulePaths: (from: string) => string[];
  createRequire?: (filename: string) => NodeRequire;
};

const rawMod = ((Module as unknown as {Module?: ModuleConstructor}).Module ??
  Module) as unknown as ModuleConstructor;
const {hasOwnProperty} = Object.prototype;
const isDirectMod = hasOwnProperty.call(rawMod.prototype, 'require');
const mod: ModuleConstructor = isDirectMod
  ? rawMod
  : (Object.getPrototypeOf(rawMod) as ModuleConstructor);
const modProto: {require: NodeRequire} = isDirectMod
  ? rawMod.prototype
  : Object.getPrototypeOf(rawMod.prototype);
const isObj = (o: unknown): o is Record<PropertyKey, unknown> =>
  Boolean(o && (typeof o === 'object' || typeof o === 'function'));
const hasOwn = (o: unknown, k: string): boolean =>
  isObj(o) && hasOwnProperty.call(o, k);
const isGlobal = (s: unknown): boolean =>
  hasOwn(s, '@global') || hasOwn(s, '@runtimeGlobal');

const resolveFrom = (base: string, req: string): string => {
  try {
    return require.resolve(req, {paths: [path.dirname(base)]});
  } catch {
    return req[0] === '.' ? path.resolve(path.dirname(base), req) : req;
  }
};

function getCallerFile(): string | undefined {
  const origPrepare = Error.prepareStackTrace;
  try {
    const err = new Error();
    Error.prepareStackTrace = (_, stack) => stack;
    const stack = err.stack as unknown as NodeJS.CallSite[] | undefined;
    if (Array.isArray(stack)) {
      for (const frame of stack) {
        let file = frame.getFileName?.();
        if (file) {
          if (file.startsWith('file://')) {
            try {
              file = fileURLToPath(file);
            } catch {
              // ignore
            }
          }
          if (
            file !== __filename &&
            !file.startsWith('node:') &&
            !file.startsWith('internal/')
          ) {
            return file;
          }
        }
      }
    }
  } finally {
    Error.prepareStackTrace = origPrepare;
  }
  return undefined;
}

function resolveModule(target: NodeModule | string | undefined): NodeModule {
  if (target && typeof target === 'object') {
    return target;
  }
  let filename =
    typeof target === 'string' ? target : (getCallerFile() ?? __filename);
  if (filename.startsWith('file://')) {
    try {
      filename = fileURLToPath(filename);
    } catch {
      // ignore
    }
  }
  const cached = require.cache[filename];
  if (cached) {
    return cached;
  }
  const fallback = new mod(filename);
  fallback.filename = filename;
  fallback.paths = mod._nodeModulePaths(path.dirname(filename));
  return fallback;
}

interface CallerOptions {
  skipCallThru: boolean;
  keepCache: boolean;
}

/**
 * Creates a runtime-agnostic `proxyquire` function compatible with both
 * Node.js and Bun (`JS_RUNTIME=bun`).
 *
 * @param caller Optional calling `NodeModule` or `__filename` used to resolve
 *   relative module paths. When omitted, the caller's filename is detected
 *   automatically from the call stack.
 */
export function createProxyquire(caller?: NodeModule | string): Proxyquire {
  const defaultOpts: CallerOptions = {skipCallThru: false, keepCache: true};
  const callerOpts = new Map<string, CallerOptions>();

  const getOpts = (callerFilename: string): CallerOptions => {
    if (caller !== undefined) {
      return defaultOpts;
    }
    let opts = callerOpts.get(callerFilename);
    if (!opts) {
      opts = {...defaultOpts};
      callerOpts.set(callerFilename, opts);
    }
    return opts;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fn = function proxyquire<T = any>(
    request: string,
    stubs: ProxyquireStubs = {},
  ): T {
    const parent = resolveModule(caller);
    const opts = getOpts(parent.filename);
    const sut = mod._resolveFilename(request, parent);
    const resolved: ProxyquireStubs = {};
    let global = false;
    for (const [k, v] of Object.entries(stubs)) {
      if (isGlobal(v)) global = true;
      resolved[resolveFrom(sut, k)] = v;
    }
    const cache = mod._cache ?? require.cache;
    const keys = global
      ? Object.keys(cache).filter(id => !id.endsWith('.node'))
      : [sut];
    const saved = keys.map(id => [id, cache[id]] as const);
    for (const id of keys) delete cache[id];
    const prev = modProto.require;
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
              ? Boolean(stub['@noCallThru'])
              : opts.skipCallThru;
            if (!skip && isObj(stub)) {
              try {
                const real = prev.call(this, id);
                if (isObj(real)) {
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
                      const targetDesc = Reflect.getOwnPropertyDescriptor(
                        target,
                        prop,
                      );
                      if (targetDesc) {
                        return targetDesc;
                      }
                      const realDesc = Reflect.getOwnPropertyDescriptor(
                        real,
                        prop,
                      );
                      return realDesc
                        ? {...realDesc, configurable: true}
                        : undefined;
                    },
                  });
                }
              } catch {
                // ignore when underlying module cannot be loaded
              }
            }
            return stub;
          }
        }
      }
      return prev.call(this, id);
    };
    modProto.require = Object.assign(req, prev);
    try {
      return typeof parent.require === 'function' && parent instanceof mod
        ? prev.call(parent, request)
        : mod.createRequire
          ? mod.createRequire(parent.filename)(request)
          : prev.call(parent, request);
    } finally {
      modProto.require = prev;
      const savedMap = new Map(saved);
      for (const id of global ? Object.keys(cache) : [sut]) {
        if (!id.endsWith('.node')) {
          const original = savedMap.get(id);
          if (!opts.keepCache || id !== sut || original !== undefined) {
            delete cache[id];
          }
        }
      }
      for (const [id, m] of saved) {
        if (m && (opts.keepCache || id !== sut)) cache[id] = m;
      }
    }
  };

  const updateOpts = (patch: Partial<CallerOptions>): Proxyquire => {
    const parent = resolveModule(caller);
    Object.assign(getOpts(parent.filename), patch);
    return instance;
  };

  const instance: Proxyquire = Object.assign(fn, {
    load: fn,
    noCallThru: () => updateOpts({skipCallThru: true}),
    callThru: () => updateOpts({skipCallThru: false}),
    noPreserveCache: () => updateOpts({keepCache: false}),
    preserveCache: () => updateOpts({keepCache: true}),
  });

  return instance;
}

/**
 * Shared `proxyquire` instance that resolves relative module requests and
 * option flags (`noCallThru`, `noPreserveCache`, etc.) per calling test file.
 */
export const proxyquire: Proxyquire = createProxyquire();
