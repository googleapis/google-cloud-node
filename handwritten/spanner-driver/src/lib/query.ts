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

import {EventEmitter} from 'events';
import {ITypeOverrides, QueryConfig} from './types.js';

/**
 * Node callback function signature receiving `(err, result)`.
 *
 * @template T - Result object type.
 */
export type QueryCallback<T> = (err: Error | null, result?: T) => void;

/**
 * Query class representing a SQL statement execution.
 *
 * Extends `EventEmitter` to support streaming row events (`.on('row', cb)`, `.on('end', cb)`),
 * while implementing the Thenable interface (`then`, `catch`, `finally`) to support `async`/`await`.
 *
 * @template T - Query result return type (defaults to `QueryResult`).
 */
export class Query<T = unknown> extends EventEmitter {
  /** SQL statement string text. */
  public text?: string;

  /** Positional parameter value array. */
  public values?: unknown[];

  /** Optional Node callback function attached to this query execution. */
  public callback?: QueryCallback<T>;

  /** Result row formatting mode (`'object'` or `'array'`). */
  public rowMode?: 'array' | 'object';

  /** Optional custom type parser override registry. */
  public types?: ITypeOverrides;

  /** Internal promise backing Thenable async/await integration. */
  private promise!: Promise<T>;
  private promiseResolver?: {
    resolve: (value: T | PromiseLike<T>) => void;
    reject: (reason?: unknown) => void;
  };

  /**
   * Instantiates a new Query instance.
   *
   * @param text - SQL query string, `QueryConfig` object, or existing `Query` instance.
   * @param values - Positional parameter array or callback function.
   * @param callback - Callback function receiving `(err, result)`.
   */
  constructor(
    text: string | QueryConfig | Query<T>,
    values?: unknown[] | QueryCallback<T>,
    callback?: QueryCallback<T>,
  ) {
    super();

    this.promise = new Promise<T>((resolve, reject) => {
      this.promiseResolver = {resolve, reject};
    });
    // Suppress unhandled rejection warnings on default un-awaited promise
    this.promise.catch(() => {});

    if (text instanceof Query) {
      this.text = text.text;
      this.values = Array.isArray(values) ? values : text.values;
      this.rowMode = text.rowMode;
      this.types = text.types;
      this.callback =
        typeof values === 'function' ? values : callback || text.callback;
      return;
    }

    if (typeof text === 'object' && text !== null) {
      this.text = text.text;
      this.values = Array.isArray(values) ? values : text.values;
      this.rowMode = text.rowMode;
      this.types = text.types;
      this.callback = typeof values === 'function' ? values : callback;
    } else {
      this.text = text;
      if (typeof values === 'function') {
        this.callback = values;
        this.values = undefined;
      } else {
        this.values = values;
        this.callback = callback;
      }
    }
  }

  /**
   * Implements the thenable `.then()` method enabling `await` integration.
   *
   * @param onFulfilled - Handler called when query promise resolves successfully.
   * @param onRejected - Handler called when query promise is rejected.
   * @returns Promise resolving to handler return value.
   */
  public then<TResult1 = T, TResult2 = never>(
    onFulfilled?:
      | ((value: T) => TResult1 | PromiseLike<TResult1>)
      | undefined
      | null,
    onRejected?:
      | ((reason: unknown) => TResult2 | PromiseLike<TResult2>)
      | undefined
      | null,
  ): Promise<TResult1 | TResult2> {
    return this.promise.then(onFulfilled, onRejected);
  }

  /**
   * Implements the `.catch()` method enabling error handling on awaited queries.
   *
   * @param onRejected - Handler called when query promise is rejected.
   * @returns Promise resolving to handler return value.
   */
  public catch<TResult = never>(
    onRejected?:
      | ((reason: unknown) => TResult | PromiseLike<TResult>)
      | undefined
      | null,
  ): Promise<T | TResult> {
    return this.promise.catch(onRejected);
  }

  /**
   * Implements the `.finally()` method called when query execution finishes.
   *
   * @param onFinally - Cleanup callback invoked on completion.
   * @returns Promise resolving when query finishes.
   */
  public finally(onFinally?: (() => void) | undefined | null): Promise<T> {
    return this.promise.finally(onFinally);
  }

  /**
   * Resolves the internal query promise with a result value.
   *
   * @param value - Result value resolving the query promise.
   */
  public resolve(value: T): void {
    if (this.promiseResolver) {
      const resolver = this.promiseResolver;
      this.promiseResolver = undefined;
      resolver.resolve(value);
    }
  }

  /**
   * Rejects the internal query promise with an error.
   *
   * @param reason - Error or rejection reason.
   */
  public reject(reason: unknown): void {
    if (this.promiseResolver) {
      const resolver = this.promiseResolver;
      this.promiseResolver = undefined;
      resolver.reject(reason);
    }
  }

  /**
   * Binds internal Promise backing Thenable operations.
   *
   * @param promise - Internal execution Promise.
   */
  public setPromise(promise: Promise<T>): void {
    if (this.promiseResolver) {
      const resolver = this.promiseResolver;
      this.promiseResolver = undefined;
      promise.then(resolver.resolve, resolver.reject);
    } else {
      this.promise = promise;
    }
  }
}
