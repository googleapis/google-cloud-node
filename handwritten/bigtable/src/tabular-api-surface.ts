// Copyright 2024 Google LLC
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

import {promisifyAll} from '@google-cloud/promisify';
import arrify = require('arrify');
import {Instance} from './instance';
import {Mutation} from './mutation';
import {
  Bigtable,
  Entry,
  MutateOptions,
  SampleRowKeysCallback,
  SampleRowsKeysResponse,
} from './index';
import {BoundData, RawFilter} from './filter';
import {Row} from './row';
import {BackoffSettings} from 'google-gax/build/src/gax';
import {google} from '../protos/protos';
import {CallOptions, grpc, ServiceError} from 'google-gax';
import {Transform} from 'stream';
import {GoogleInnerError} from './table';
import {createReadStreamInternal} from './utils/createReadStreamInternal';
import {getRowsInternal} from './utils/getRowsInternal';
import {
  MethodName,
  StreamingState,
} from './client-side-metrics/client-side-metrics-attributes';
import {mutateInternal} from './utils/mutateInternal';

// See protos/google/rpc/code.proto
// (4=DEADLINE_EXCEEDED, 8=RESOURCE_EXHAUSTED, 10=ABORTED, 14=UNAVAILABLE)
export const RETRYABLE_STATUS_CODES = new Set([4, 8, 10, 14]);
// (1=CANCELLED)
export const IGNORED_STATUS_CODES = new Set([1]);

export const DEFAULT_BACKOFF_SETTINGS: BackoffSettings = {
  initialRetryDelayMillis: 10,
  retryDelayMultiplier: 2,
  maxRetryDelayMillis: 60000,
};

export type InsertRowsCallback = (
  err: ServiceError | PartialFailureError | null,
  apiResponse?: google.protobuf.Empty,
) => void;
export type InsertRowsResponse = [google.protobuf.Empty];
export type MutateCallback = (
  err: ServiceError | PartialFailureError | null,
  apiResponse?: google.protobuf.Empty,
) => void;
export type MutateResponse = [google.protobuf.Empty];

export interface GetRowsOptions {
  /**
   * If set to `false` it will not decode Buffer values returned from Bigtable.
   */
  decode?: boolean;

  /**
   * The encoding to use when converting Buffer values to a string.
   */
  encoding?: string;

  /**
   * End value for key range.
   */
  end?: string;

  /**
   * Row filters allow you to both make advanced queries and format how the data is returned.
   */
  filter?: RawFilter;

  /**
   * Request configuration options, outlined here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
   */
  gaxOptions?: CallOptions;

  /**
   * A list of row keys.
   */
  keys?: string[];

  /**
   * Maximum number of rows to be returned.
   */
  limit?: number;

  /**
   * Prefix that the row key must match.
   */
  prefix?: string;

  /**
   * List of prefixes that a row key must match.
   */
  prefixes?: string[];

  /**
   * A list of key ranges.
   */
  ranges?: PrefixRange[];

  /**
   * Start value for key range.
   */
  start?: string;
}

export type GetRowsCallback = (
  err: ServiceError | null,
  rows?: Row[],
  apiResponse?: google.bigtable.v2.ReadRowsResponse,
) => void;
export type GetRowsResponse = [Row[], google.bigtable.v2.ReadRowsResponse];

export interface PrefixRange {
  start?: BoundData | string;
  end?: BoundData | string;
}

export interface PrefixRange {
  start?: BoundData | string;
  end?: BoundData | string;
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const concat = require('concat-stream');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pumpify = require('pumpify');

/**
 * The TabularApiSurface class is a class that contains methods we want to
 * expose on both tables and authorized views. It also contains data that will
 * be used by both Authorized views and Tables for these shared methods.
 *
 * @class
 * @param {Instance} instance Instance Object.
 * @param {string} id Unique identifier of the table.
 *
 */
export class TabularApiSurface {
  bigtable: Bigtable;
  instance: Instance;
  name: string;
  id: string;
  metadata?: google.bigtable.admin.v2.ITable;
  maxRetries?: number;
  // We need viewName to be public because now we need it in Row class
  // We need it in Row class because now we use getRowsInternal instead of getRows
  viewName?: string;

  protected constructor(instance: Instance, id: string, viewName?: string) {
    this.bigtable = instance.bigtable;
    this.instance = instance;
    this.viewName = viewName;

    let name;

    if (id.includes('/')) {
      if (id.startsWith(`${instance.name}/tables/`)) {
        name = id;
      } else {
        throw new Error(`Table id '${id}' is not formatted correctly.
Please use the format 'prezzy' or '${instance.name}/tables/prezzy'.`);
      }
    } else {
      name = `${instance.name}/tables/${id}`;
    }

    this.name = name;
    this.id = name.split('/').pop()!;
  }

  /**
   * Get {@link Row} objects for the rows currently in your table as a
   * readable object stream.
   *
   * @param {boolean} [options.decode=true] If set to `false` it will not decode
   *     Buffer values returned from Bigtable.
   * @param {boolean} [options.encoding] The encoding to use when converting
   *     Buffer values to a string.
   * @param {string} [options.end] End value for key range.
   * @param {Filter} [options.filter] Row filters allow you to
   *     both make advanced queries and format how the data is returned.
   * @param {object} [options.gaxOptions] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {string[]} [options.keys] A list of row keys.
   * @param {number} [options.limit] Maximum number of rows to be returned.
   * @param {string} [options.prefix] Prefix that the row key must match.
   * @param {string[]} [options.prefixes] List of prefixes that a row key must
   *     match.
   * @param {object[]} [options.ranges] A list of key ranges.
   * @param {string} [options.start] Start value for key range.
   * @returns {stream}
   *
   * @example <caption>include:samples/api-reference-doc-snippets/table.js</caption>
   * region_tag:bigtable_api_table_readstream
   * @param opts
   */
  createReadStream(opts?: GetRowsOptions) {
    const metricsCollector =
      this.bigtable._metricsConfigManager.createOperation(
        MethodName.READ_ROWS,
        StreamingState.STREAMING,
        this,
      );
    return createReadStreamInternal(this, metricsCollector, opts);
  }

  getRows(options?: GetRowsOptions): Promise<GetRowsResponse>;
  getRows(options: GetRowsOptions, callback: GetRowsCallback): void;
  getRows(callback: GetRowsCallback): void;
  /**
   * Get {@link Row} objects for the rows currently in your table.
   *
   * This method is not recommended for large datasets as it will buffer all rows
   * before returning the results. Instead we recommend using the streaming API
   * via {@link Table#createReadStream}.
   *
   *     {@link Table#createReadStream} for a complete list of options.
   * @param {object} [options.gaxOptions] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {?error} callback.err An error returned while making this request.
   * @param {Row[]} callback.rows List of Row objects.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/table.js</caption>
   * region_tag:bigtable_api_get_rows
   * @param optionsOrCallback
   * @param cb
   */
  getRows(
    optionsOrCallback?: GetRowsOptions | GetRowsCallback,
    cb?: GetRowsCallback,
  ): void | Promise<GetRowsResponse> {
    const metricsCollector =
      this.bigtable._metricsConfigManager.createOperation(
        MethodName.READ_ROWS,
        StreamingState.STREAMING,
        this,
      );
    return getRowsInternal(this, metricsCollector, optionsOrCallback, cb);
  }

  insert(
    entries: Entry | Entry[],
    gaxOptions?: CallOptions,
  ): Promise<InsertRowsResponse>;
  insert(
    entries: Entry | Entry[],
    gaxOptions: CallOptions,
    callback: InsertRowsCallback,
  ): void;
  insert(entries: Entry | Entry[], callback: InsertRowsCallback): void;
  /**
   * Insert or update rows in your table. It should be noted that gRPC only allows
   * you to send payloads that are less than or equal to 4MB. If you're inserting
   * more than that you may need to send smaller individual requests.
   *
   * @param {object|object[]} entries List of entries to be inserted.
   *     See {@link Table#mutate}.
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this request.
   * @param {object[]} callback.err.errors If present, these represent partial
   *     failures. It's possible for part of your request to be completed
   *     successfully, while the other part was not.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/table.js</caption>
   * region_tag:bigtable_api_insert_rows
   */
  insert(
    entries: Entry | Entry[],
    optionsOrCallback?: CallOptions | InsertRowsCallback,
    cb?: InsertRowsCallback,
  ): void | Promise<InsertRowsResponse> {
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    const gaxOptions =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    entries = arrify<Entry>(entries).map((entry: Entry) => {
      entry.method = Mutation.methods.INSERT;
      return entry;
    });
    return this.mutate(entries, {gaxOptions}, callback);
  }

  mutate(
    entries: Entry | Entry[],
    options?: MutateOptions,
  ): Promise<MutateResponse>;
  mutate(
    entries: Entry | Entry[],
    options: MutateOptions,
    callback: MutateCallback,
  ): void;
  mutate(entries: Entry | Entry[], callback: MutateCallback): void;
  /**
   * Apply a set of changes to be atomically applied to the specified row(s).
   * Mutations are applied in order, meaning that earlier mutations can be masked
   * by later ones.
   *
   * @param {object|object[]} entries List of entities to be inserted or
   *     deleted.
   * @param {object} [options] Configuration object.
   * @param {object} [options.gaxOptions] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
   * @param {boolean} [options.rawMutation] If set to `true` will treat entries
   *     as a raw Mutation object. See {@link Mutation#parse}.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this request.
   * @param {object[]} callback.err.errors If present, these represent partial
   *     failures. It's possible for part of your request to be completed
   *     successfully, while the other part was not.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/table.js</caption>
   * region_tag:bigtable_api_mutate_rows
   */
  mutate(
    entriesRaw: Entry | Entry[],
    optionsOrCallback?: MutateOptions | MutateCallback,
    cb?: MutateCallback,
  ): void | Promise<MutateResponse> {
    const metricsCollector =
      this.bigtable._metricsConfigManager.createOperation(
        MethodName.MUTATE_ROWS,
        StreamingState.STREAMING,
        this,
      );
    mutateInternal(this, metricsCollector, entriesRaw, optionsOrCallback, cb);
  }

  /**
   * Get a reference to a table row.
   *
   * @throws {error} If a key is not provided.
   *
   * @param {string} key The row key.
   * @returns {Row}
   *
   * @example
   * ```
   * const row = table.row('lincoln');
   * ```
   */
  row(key: string): Row {
    if (!key) {
      throw new Error('A row key must be provided.');
    }
    return new Row(this, key);
  }

  sampleRowKeys(gaxOptions?: CallOptions): Promise<SampleRowsKeysResponse>;
  sampleRowKeys(gaxOptions: CallOptions, callback: SampleRowKeysCallback): void;
  sampleRowKeys(callback?: SampleRowKeysCallback): void;
  /**
   * Returns a sample of row keys in the table. The returned row keys will delimit
   * contiguous sections of the table of approximately equal size, which can be
   * used to break up the data for distributed tasks like mapreduces.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} [callback] The callback function.
   * @param {?error} callback.err An error returned while making this request.
   * @param {object[]} callback.keys The list of keys.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/table.js</caption>
   * region_tag:bigtable_api_sample_row_keys
   */
  sampleRowKeys(
    optionsOrCallback?: CallOptions | SampleRowKeysCallback,
    cb?: SampleRowKeysCallback,
  ): void | Promise<SampleRowsKeysResponse> {
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    const gaxOptions =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};

    /*
    The following line of code sets the timeout if it was provided while
    creating the client. This will be used to determine if the client should
    retry on DEADLINE_EXCEEDED errors. Eventually, this will be handled
    downstream in google-gax.
     */
    const timeout = gaxOptions?.timeout;
    const callTimeMillis = new Date().getTime();

    this.sampleRowKeysStream(gaxOptions)
      .on('error', (error: grpc.ServiceError) => {
        if (timeout && timeout > new Date().getTime() - callTimeMillis) {
          error.code = grpc.status.DEADLINE_EXCEEDED;
        }
        callback(error);
      })
      .pipe(
        concat((keys: string[]) => {
          callback(null, keys);
        }),
      );
  }

  /**
   * Returns a sample of row keys in the table as a readable object stream.
   *
   * See {@link Table#sampleRowKeys} for more details.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @returns {stream}
   *
   * @example
   * ```
   * table.sampleRowKeysStream()
   *   .on('error', console.error)
   *   .on('data', function(key) {
   *     // Do something with the `key` object.
   *   });
   *
   * //-
   * // If you anticipate many results, you can end a stream early to prevent
   * // unnecessary processing.
   * //-
   * table.sampleRowKeysStream()
   *   .on('data', function(key) {
   *     this.end();
   *   });
   * ```
   */
  sampleRowKeysStream(gaxOptions?: CallOptions) {
    // If the viewName is provided then request will be made for an
    // authorized view. Otherwise, the request is made for a table.
    const reqOpts = (
      this.viewName
        ? {
            authorizedViewName: `${this.name}/authorizedViews/${this.viewName}`,
            appProfileId: this.bigtable.appProfileId,
          }
        : {
            tableName: this.name,
            appProfileId: this.bigtable.appProfileId,
          }
    ) as google.bigtable.v2.IReadRowsRequest;

    const rowKeysStream = new Transform({
      transform(key, enc, next) {
        next(null, {
          key: key.rowKey,
          offset: key.offsetBytes,
        });
      },
      objectMode: true,
    });
    const metricsCollector =
      this.bigtable._metricsConfigManager.createOperation(
        MethodName.SAMPLE_ROW_KEYS,
        StreamingState.STREAMING,
        this,
      );
    metricsCollector.onOperationStart();
    metricsCollector.onAttemptStart();
    const requestStream = this.bigtable.request({
      client: 'BigtableClient',
      method: 'sampleRowKeys',
      reqOpts,
      gaxOpts: Object.assign({}, gaxOptions),
    });
    if (!requestStream) {
      throw new Error(
        'Failed to create request stream -- is the client already closed?',
      );
    }
    metricsCollector.wrapRequest(requestStream);
    const stream = pumpify.obj([requestStream, rowKeysStream]);
    stream.on('end', () => {
      metricsCollector.onOperationComplete(0);
    });
    stream.on('error', (err: ServiceError) => {
      metricsCollector.onOperationComplete(err.code);
    });
    return stream;
  }
}

export function getNextDelay(
  numConsecutiveErrors: number,
  config: BackoffSettings,
) {
  // 0 - 100 ms jitter
  const jitter = Math.floor(Math.random() * 100);
  const calculatedNextRetryDelay =
    config.initialRetryDelayMillis *
      Math.pow(config.retryDelayMultiplier, numConsecutiveErrors) +
    jitter;

  return Math.min(calculatedNextRetryDelay, config.maxRetryDelayMillis);
}

export function populateAttemptHeader(attempt: number, gaxOpts?: CallOptions) {
  gaxOpts = gaxOpts || {};
  gaxOpts.otherArgs = gaxOpts.otherArgs || {};
  gaxOpts.otherArgs.headers = gaxOpts.otherArgs.headers || {};
  gaxOpts.otherArgs.headers['bigtable-attempt'] = attempt;
  return gaxOpts;
}

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(TabularApiSurface, {
  exclude: ['family', 'row'],
});

export class PartialFailureError extends Error {
  errors?: GoogleInnerError[];
  constructor(errors: GoogleInnerError[], rpcError?: ServiceError | null) {
    super();
    this.errors = errors;
    this.name = 'PartialFailureError';
    let messages = errors.map(e => e.message);
    if (messages.length > 1) {
      messages = messages.map((message, i) => `    ${i + 1}. ${message}`);
      messages.unshift(
        'Multiple errors occurred during the request. Please see the `errors` array for complete details.\n',
      );
      messages.push('\n');
    }
    this.message = messages.join('\n');
    if (rpcError) {
      this.message += 'Request failed with: ' + rpcError.message;
    }
  }
}
