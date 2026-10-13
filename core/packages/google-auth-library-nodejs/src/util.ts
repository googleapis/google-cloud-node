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
import * as os from 'os';
import path = require('path');

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
