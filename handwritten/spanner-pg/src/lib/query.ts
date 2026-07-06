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
import {QueryConfig} from './client.js';

export class Query extends EventEmitter {
  public text: string;
  public values?: any[];
  public callback?: (err: Error | null, result?: any) => void;
  public rowMode?: 'array';
  private promise!: Promise<any>;

  constructor(
    text: string | QueryConfig | Query,
    values?: any[] | ((err: Error | null, result?: any) => void),
    callback?: (err: Error | null, result?: any) => void,
  ) {
    super();

    if (text instanceof Query) {
      this.text = text.text;
      this.values = text.values;
      this.callback = text.callback;
      this.rowMode = text.rowMode;
      return;
    }

    if (typeof text === 'object') {
      this.text = text.text;
      this.values = text.values;
      this.rowMode = text.rowMode;
      this.callback =
        typeof values === 'function' ? (values as any) : (callback as any);
    } else {
      this.text = text;
      if (typeof values === 'function') {
        this.callback = values as any;
        this.values = undefined;
      } else {
        this.values = values;
        this.callback = callback as any;
      }
    }
  }

  /**
   * Implements the thenable interface to support async/await transparently.
   */
  public then(
    onFulfilled?: (value: any) => any,
    onRejected?: (reason: any) => any,
  ): Promise<any> {
    return this.promise.then(onFulfilled, onRejected);
  }

  /**
   * Internal setter to link the query execution task to the thenable promise.
   */
  public setPromise(promise: Promise<any>): void {
    this.promise = promise;
  }
}
