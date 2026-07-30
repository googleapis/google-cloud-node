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
import {QueryConfig} from './types.js';

/**
 * Standard callback function signature for query execution.
 *
 * @template T - Type of query result data returned on success.
 */
export type QueryCallback<T = unknown> = (
  err: Error | null,
  result?: T,
) => void;

/**
 * Query subclass extending EventEmitter and implementing the Thenable interface.
 * Supports async/await, Node callbacks, and streaming row events matching node-postgres (`pg.Query`).
 *
 * @template T - Shape of query result returned on promise resolution.
 */
export class Query<T = unknown> extends EventEmitter {
  /** SQL statement query string text. */
  public text: string;

  /** Optional array of query parameter values ($1, $2, etc.). */
  public values?: unknown[];

  /** Optional Node callback function attached to this query execution. */
  public callback?: QueryCallback<T>;

  /** Result row formatting mode (`'object'` or `'array'`). */
  public rowMode?: 'array' | 'object';

  /** Optional custom type parser override registry. */
  public types?: unknown;

  /** Internal promise backing Thenable async/await integration. */
  private promise!: Promise<T>;

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

    if (text instanceof Query) {
      this.text = text.text;
      this.values = text.values;
      this.callback = text.callback;
      this.rowMode = text.rowMode;
      this.types = text.types;
      return;
    }

    if (typeof text === 'object') {
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
   * Implements the thenable `.catch()` method for error handling.
   *
   * @param onRejected - Error handler callback.
   * @returns Promise resolving to error handler result.
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
   * Implements the thenable `.finally()` method.
   *
   * @param onFinally - Cleanup callback invoked regardless of query outcome.
   * @returns Promise settling when cleanup completes.
   */
  public finally(onFinally?: (() => void) | undefined | null): Promise<T> {
    return this.promise.finally(onFinally);
  }

  /**
   * Internal setter linking query execution task to thenable promise.
   *
   * @param promise - Backing promise managing execution resolution/rejection.
   */
  public setPromise(promise: Promise<T>): void {
    this.promise = promise;
  }
}
