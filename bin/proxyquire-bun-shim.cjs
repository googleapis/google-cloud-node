// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// A drop-in `proxyquire` replacement for the Bun runtime, built on the two
// seams Bun supports (`Module.prototype.require` dispatch + `require.cache`),
// loaded when running unit tests with `--proxyquire-shim` under Bun so no test
// files need to change. Completely inert when running under Node.js (`typeof Bun === 'undefined'`).
'use strict';

const Module = require('module');
const path = require('path');

if (
  typeof Bun !== 'undefined' &&
  !globalThis.__GOOGLE_CLOUD_BUN_PROXYQUIRE_SHIM__
) {
  const enableProxyquireShim =
    process.env.BUN_ENABLE_PROXYQUIRE_SHIM === 'true' ||
    process.env.BUN_PROXYQUIRE_SHIM === 'true';

  if (enableProxyquireShim) {
    globalThis.__GOOGLE_CLOUD_BUN_PROXYQUIRE_SHIM__ = true;

    const origRequire = Module.prototype.require;
    const hasOwn = (o, k) =>
      o !== null &&
      typeof o === 'object' &&
      Object.prototype.hasOwnProperty.call(o, k);
    const frames = [];

    // Mirror of proxyquire's Proxyquire.prototype._resolveModule: resolve
    // `request` from `baseFile`'s directory; on failure keep bare specifiers as
    // they are and fall back to a plain path.resolve for relative ones.
    function resolveFrom(baseFile, request) {
      try {
        return require.resolve(request, {paths: [path.dirname(baseFile)]});
      } catch {
        if (request[0] !== '.') return request;
        return path.resolve(path.dirname(baseFile), request);
      }
    }

    function isGlobalStub(stub) {
      return hasOwn(stub, '@global') || hasOwn(stub, '@runtimeGlobal');
    }

    function applyStub(self, id, stub, noCallThru) {
      if (stub === null) {
        const e = new Error("Cannot find module '" + id + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }
      const skip = hasOwn(stub, '@noCallThru') ? stub['@noCallThru'] : noCallThru;
      if (!skip) {
        let real;
        try {
          real = origRequire.call(self, id);
        } catch {
          real = undefined;
        }
        if (real && (typeof real === 'object' || typeof real === 'function')) {
          for (const k of Object.keys(real)) {
            if (!(k in stub)) stub[k] = real[k];
          }
        }
      }
      return stub;
    }

    // proxyquire's _disableModuleCache: drop just the SUT, restore afterwards.
    function disableModuleCache(id) {
      const cache = require.cache;
      const saved = cache[id];
      delete cache[id];
      return function restore(preserve) {
        delete cache[id];
        if (saved && preserve) cache[id] = saved;
      };
    }

    // proxyquire's _disableGlobalCache: empty the entire cache so that an
    // already-loaded intermediate is re-executed and its require() calls can be
    // intercepted. Native (.node) modules are kept.
    function disableGlobalCache(sut) {
      const cache = require.cache;
      const saved = Object.create(null);
      for (const id of Object.keys(cache)) {
        if (/\.node$/.test(id)) continue;
        saved[id] = cache[id];
        delete cache[id];
      }
      return function restore(preserve) {
        for (const id of Object.keys(cache)) {
          if (/\.node$/.test(id)) continue;
          delete cache[id];
        }
        if (preserve) {
          for (const id of Object.keys(saved)) cache[id] = saved[id];
        } else {
          for (const id of Object.keys(saved)) {
            if (id !== sut) cache[id] = saved[id];
          }
        }
      };
    }

    Module.prototype.require = function (id) {
      if (id === 'proxyquire') {
        return makeProxyquire(this);
      }
      const fr = frames[frames.length - 1];
      if (fr && this && this.filename) {
        const isSut = this.filename === fr.sut;
        if (isSut || fr.containsGlobal) {
          let found = false;
          let stub;
          if (Object.prototype.hasOwnProperty.call(fr.stubs, id)) {
            found = true;
            stub = fr.stubs[id];
          } else {
            const resolved = resolveFrom(this.filename, id);
            if (Object.prototype.hasOwnProperty.call(fr.resolved, resolved)) {
              found = true;
              stub = fr.resolved[resolved];
            }
          }
          if (found && (isSut || isGlobalStub(stub))) {
            return applyStub(this, id, stub, fr.noCallThru);
          }
        }
      }
      return origRequire.apply(this, arguments);
    };

    function makeProxyquire(parent) {
      let noCallThru = false;
      let preserveCache = true;
      const fn = function (request, stubs) {
        const sut = Module._resolveFilename(request, parent);
        stubs = stubs || {};
        const resolved = {};
        let containsGlobal = false;
        for (const k of Object.keys(stubs)) {
          if (isGlobalStub(stubs[k])) containsGlobal = true;
          resolved[resolveFrom(sut, k)] = stubs[k];
        }
        const restore = containsGlobal
          ? disableGlobalCache(sut)
          : disableModuleCache(sut);
        frames.push({sut, stubs, resolved, noCallThru, containsGlobal});
        try {
          return origRequire.call(parent, request);
        } finally {
          frames.pop();
          restore(preserveCache);
        }
      };
      fn.load = fn;
      fn.noCallThru = function () {
        noCallThru = true;
        return fn;
      };
      fn.callThru = function () {
        noCallThru = false;
        return fn;
      };
      fn.noPreserveCache = function () {
        preserveCache = false;
        return fn;
      };
      fn.preserveCache = function () {
        preserveCache = true;
        return fn;
      };
      return fn;
    }
  }
}
