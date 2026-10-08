// Copyright 2023 Google LLC
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

import * as fs from 'fs';
import {Gaxios, GaxiosOptions} from 'gaxios';
import * as os from 'os';
import path = require('path');
import type {Readable} from 'stream';

const WELL_KNOWN_CERTIFICATE_CONFIG_FILE = 'certificate_config.json';
const CLOUDSDK_CONFIG_DIRECTORY = 'gcloud';

/**
 * A utility for converting snake_case to camelCase.
 *
 * For, for example `my_snake_string` becomes `mySnakeString`.
 */
export type SnakeToCamel<S> = S extends `${infer FirstWord}_${infer Remainder}`
  ? `${FirstWord}${Capitalize<SnakeToCamel<Remainder>>}`
  : S;

/**
 * A utility for converting an type's keys from snake_case
 * to camelCase, if the keys are strings.
 *
 * For example:
 *
 * ```ts
 * {
 *   my_snake_string: boolean;
 *   myCamelString: string;
 *   my_snake_obj: {
 *     my_snake_obj_string: string;
 *   };
 * }
 * ```
 *
 * becomes:
 *
 * ```ts
 * {
 *   mySnakeString: boolean;
 *   myCamelString: string;
 *   mySnakeObj: {
 *     mySnakeObjString: string;
 *   }
 * }
 * ```
 *
 * @remarks
 *
 * The generated documentation for the camelCase'd properties won't be available
 * until {@link https://github.com/microsoft/TypeScript/issues/50715} has been
 * resolved.
 */
export type SnakeToCamelObject<T> = {
  [K in keyof T as SnakeToCamel<K>]: T[K] extends {}
    ? SnakeToCamelObject<T[K]>
    : T[K];
};

/**
 * A utility for adding camelCase versions of a type's snake_case keys, if the
 * keys are strings, preserving any existing keys.
 *
 * For example:
 *
 * ```ts
 * {
 *   my_snake_boolean: boolean;
 *   myCamelString: string;
 *   my_snake_obj: {
 *     my_snake_obj_string: string;
 *   };
 * }
 * ```
 *
 * becomes:
 *
 * ```ts
 * {
 *   my_snake_boolean: boolean;
 *   mySnakeBoolean: boolean;
 *   myCamelString: string;
 *   my_snake_obj: {
 *     my_snake_obj_string: string;
 *   };
 *   mySnakeObj: {
 *     mySnakeObjString: string;
 *   }
 * }
 * ```
 * @remarks
 *
 * The generated documentation for the camelCase'd properties won't be available
 * until {@link https://github.com/microsoft/TypeScript/issues/50715} has been
 * resolved.
 *
 * Tracking: {@link https://github.com/googleapis/google-auth-library-nodejs/issues/1686}
 */
export type OriginalAndCamel<T> = {
  [K in keyof T as K | SnakeToCamel<K>]: T[K] extends {}
    ? OriginalAndCamel<T[K]>
    : T[K];
};

/**
 * Returns the camel case of a provided string.
 *
 * @remarks
 *
 * Match any `_` and not `_` pair, then return the uppercase of the not `_`
 * character.
 *
 * @param str the string to convert
 * @returns the camelCase'd string
 */
export function snakeToCamel<T extends string>(str: T): SnakeToCamel<T> {
  return str.replace(/([_][^_])/g, match =>
    match.slice(1).toUpperCase(),
  ) as SnakeToCamel<T>;
}

/**
 * Get the value of `obj[key]` or `obj[camelCaseKey]`, with a preference
 * for original, non-camelCase key.
 *
 * @param obj object to lookup a value in
 * @returns a `get` function for getting `obj[key || snakeKey]`, if available
 */
export function originalOrCamelOptions<T extends {}>(obj?: T) {
  /**
   *
   * @param key an index of object, preferably snake_case
   * @returns the value `obj[key || snakeKey]`, if available
   */
  function get<K extends keyof OriginalAndCamel<T> & string>(key: K) {
    const o = (obj || {}) as OriginalAndCamel<T>;
    return o[key] ?? o[snakeToCamel(key) as K];
  }

  return {get};
}

export interface LRUCacheOptions {
  /**
   * The maximum number of items to cache.
   */
  capacity: number;
  /**
   * An optional max age for items in milliseconds.
   */
  maxAge?: number;
}

/**
 * A simple LRU cache utility.
 * Not meant for external usage.
 *
 * @experimental
 */
export class LRUCache<T> {
  readonly capacity: number;

  /**
   * Maps are in order. Thus, the older item is the first item.
   *
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map}
   */
  #cache = new Map<string, {lastAccessed: number; value: T}>();
  maxAge?: number;

  constructor(options: LRUCacheOptions) {
    this.capacity = options.capacity;
    this.maxAge = options.maxAge;
  }

  /**
   * Moves the key to the end of the cache.
   *
   * @param key the key to move
   * @param value the value of the key
   */
  #moveToEnd(key: string, value: T) {
    this.#cache.delete(key);
    this.#cache.set(key, {
      value,
      lastAccessed: Date.now(),
    });
  }

  /**
   * Add an item to the cache.
   *
   * @param key the key to upsert
   * @param value the value of the key
   */
  set(key: string, value: T) {
    this.#moveToEnd(key, value);
    this.#evict();
  }

  /**
   * Get an item from the cache.
   *
   * @param key the key to retrieve
   */
  get(key: string): T | undefined {
    const item = this.#cache.get(key);
    if (!item) return;

    this.#moveToEnd(key, item.value);
    this.#evict();

    return item.value;
  }

  /**
   * Maintain the cache based on capacity and TTL.
   */
  #evict() {
    const cutoffDate = this.maxAge ? Date.now() - this.maxAge : 0;

    /**
     * Because we know Maps are in order, this item is both the
     * last item in the list (capacity) and oldest (maxAge).
     */
    let oldestItem = this.#cache.entries().next();

    while (
      !oldestItem.done &&
      (this.#cache.size > this.capacity || // too many
        oldestItem.value[1].lastAccessed < cutoffDate) // too old
    ) {
      this.#cache.delete(oldestItem.value[0]);
      oldestItem = this.#cache.entries().next();
    }
  }
}

// Given and object remove fields where value is undefined.
export function removeUndefinedValuesInObject(object: {
  [key: string]: unknown;
}): {
  [key: string]: unknown;
} {
  Object.entries(object).forEach(([key, value]) => {
    if (value === undefined || value === 'undefined') {
      delete object[key];
    }
  });
  return object;
}

/**
 * Helper to check if a path points to a valid file.
 */
export async function isValidFile(filePath: string): Promise<boolean> {
  try {
    const stats = await fs.promises.lstat(filePath);
    return stats.isFile();
  } catch (e) {
    return false;
  }
}

/**
 * Determines the well-known gcloud location for the certificate config file.
 * @returns The platform-specific path to the configuration file.
 * @internal
 */
export function getWellKnownCertificateConfigFileLocation(): string {
  const configDir =
    process.env.CLOUDSDK_CONFIG ||
    (_isWindows()
      ? path.join(process.env.APPDATA || '', CLOUDSDK_CONFIG_DIRECTORY)
      : path.join(
          process.env.HOME || '',
          '.config',
          CLOUDSDK_CONFIG_DIRECTORY,
        ));

  return path.join(configDir, WELL_KNOWN_CERTIFICATE_CONFIG_FILE);
}

/**
 * Checks if the current operating system is Windows.
 * @returns True if the OS is Windows, false otherwise.
 * @internal
 */
function _isWindows(): boolean {
  return os.platform().startsWith('win');
}

/**
 * Ensures that Gaxios v7 uses a Bun-compatible fetch implementation when
 * running under the Bun runtime. Can be removed once upgraded to Gaxios v8+.
 * @internal
 */
export function ensureBunGaxiosFetch(GaxiosClass: typeof Gaxios): void {
  if (
    (globalThis as {window?: unknown}).window ||
    !('Bun' in globalThis) ||
    typeof GaxiosClass !== 'function'
  ) {
    return;
  }
  const ctor = GaxiosClass as typeof Gaxios & {
    __bunPatched?: boolean;
    __bunOrigAdapter?: (this: Gaxios, config: GaxiosOptions) => unknown;
  };
  if (ctor.__bunPatched) {
    return;
  }
  const proto = GaxiosClass.prototype as unknown as {
    _defaultAdapter?: (this: Gaxios, config: GaxiosOptions) => unknown;
  };
  const origAdapter = ctor.__bunOrigAdapter || proto._defaultAdapter;
  if (typeof origAdapter !== 'function') {
    return;
  }
  ctor.__bunOrigAdapter = origAdapter;
  ctor.__bunPatched = true;

  let bunFetchImpl: typeof fetch | undefined;
  let streamMod:
    | {
        PassThrough: typeof import('stream').PassThrough;
        Readable: typeof import('stream').Readable;
      }
    | undefined;
  const getBunFetch = (): typeof fetch => {
    if (bunFetchImpl) {
      return bunFetchImpl;
    }
    bunFetchImpl = async (input, init) => {
      streamMod ||= await import('stream');
      const {PassThrough, Readable} = streamMod;

      let fetchInit = init as
        | (Omit<RequestInit, 'body'> & {
            body?: unknown;
            agent?: {proxy?: URL};
            proxy?: string;
            cert?: string;
            key?: string;
            tls?: {cert: string; key: string};
            fetchImplementation?: unknown;
          })
        | undefined;
      if (fetchInit) {
        fetchInit = {...fetchInit};
        delete fetchInit.fetchImplementation;
        if (fetchInit.agent?.proxy) {
          fetchInit.proxy = fetchInit.agent.proxy.toString();
        } else {
          delete fetchInit.proxy;
        }
        if (fetchInit.cert && fetchInit.key) {
          fetchInit.tls = {cert: fetchInit.cert, key: fetchInit.key};
        }
        if (
          fetchInit.body &&
          typeof fetchInit.body === 'object' &&
          typeof (fetchInit.body as Readable).pipe === 'function' &&
          typeof Readable.toWeb === 'function' &&
          (typeof ReadableStream === 'undefined' ||
            !(fetchInit.body instanceof ReadableStream))
        ) {
          let stream: Readable;
          if (
            fetchInit.body instanceof Readable &&
            !fetchInit.body.readableObjectMode
          ) {
            stream = fetchInit.body;
          } else {
            const passThrough = new PassThrough();
            const src = fetchInit.body as Readable;
            if (typeof src.on === 'function') {
              src.on('error', err => passThrough.destroy(err));
            }
            stream = src.pipe(passThrough);
          }
          fetchInit.body = Readable.toWeb(
            stream,
          ) as unknown as RequestInit['body'];
        }
      }

      let res: Response;
      try {
        res = await globalThis.fetch(
          input,
          fetchInit as RequestInit | undefined,
        );
      } catch (err) {
        const errorObj = err as {
          message?: string;
          name?: string;
          code?: string;
        };
        const msg = String(errorObj?.message || err || '');
        if (errorObj?.name === 'TimeoutError' || /timed out/i.test(msg)) {
          throw Object.assign(
            new Error('The operation was aborted due to timeout'),
            {name: 'AbortError', type: 'aborted', code: 'ETIMEDOUT'},
          );
        }
        if (
          errorObj?.name === 'AbortError' ||
          /aborted/i.test(msg) ||
          init?.signal?.aborted
        ) {
          throw Object.assign(new Error('The user aborted a request.'), {
            name: 'AbortError',
            type: 'aborted',
          });
        }
        if (!(err instanceof Error) && err && typeof err === 'object') {
          throw Object.assign(
            new Error(errorObj.message || errorObj.code || 'Error'),
            err,
          );
        }
        throw err;
      }
      if (
        res?.body &&
        typeof Readable.fromWeb === 'function' &&
        !(res.body instanceof Readable)
      ) {
        let nodeStream: Readable | undefined;
        const rawBody =
          res.body as unknown as import('stream/web').ReadableStream;
        const origText = res.text.bind(res);
        const origJson = res.json.bind(res);
        const origArrayBuffer = res.arrayBuffer.bind(res);
        const origBlob = res.blob.bind(res);
        const readBuffer = async () => {
          const chunks: Buffer[] = [];
          for await (const chunk of nodeStream!) {
            chunks.push(
              Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk as Uint8Array),
            );
          }
          return Buffer.concat(chunks);
        };
        Object.defineProperty(res, 'body', {
          get() {
            nodeStream ||= Readable.fromWeb(rawBody);
            return nodeStream;
          },
          configurable: true,
          enumerable: true,
        });
        Object.assign(res, {
          text: async () => {
            if (!nodeStream) return origText();
            return (await readBuffer()).toString('utf8');
          },
          json: async () => {
            if (!nodeStream) return origJson();
            return JSON.parse(await res.text());
          },
          arrayBuffer: async () => {
            if (!nodeStream) return origArrayBuffer();
            const buf = await readBuffer();
            return buf.buffer.slice(
              buf.byteOffset,
              buf.byteOffset + buf.byteLength,
            );
          },
          blob: async () => {
            if (!nodeStream) return origBlob();
            const buf = await readBuffer();
            const contentType = res.headers?.get?.('content-type') ?? '';
            return new Blob(
              [buf],
              contentType ? {type: contentType} : undefined,
            );
          },
        });
      }
      return res;
    };
    return bunFetchImpl;
  };

  proto._defaultAdapter = function (this: Gaxios, config: GaxiosOptions) {
    if (
      'Bun' in globalThis &&
      config &&
      !config.fetchImplementation &&
      !this.defaults?.fetchImplementation &&
      !(globalThis as {window?: unknown}).window
    ) {
      config.fetchImplementation = getBunFetch();
      try {
        return origAdapter.call(this, config);
      } finally {
        delete config.fetchImplementation;
      }
    }
    return origAdapter.call(this, config);
  };
}

ensureBunGaxiosFetch(Gaxios);
