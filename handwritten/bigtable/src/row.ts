// Copyright 2016 Google LLC
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
import {RawFilter} from './filter';
import {Mutation, ConvertFromBytesUserOptions, Bytes, Data} from './mutation';
import {Bigtable} from '.';
import {
  Table,
  Entry,
  MutateCallback,
  MutateResponse,
  MutateOptions,
  PartialFailureError,
} from './table';
import {Chunk} from './chunktransformer';
import {CallOptions} from 'google-gax';
import {ServiceError} from 'google-gax';
import {google} from '../protos/protos';
import {RowDataUtils, RowProperties} from './row-data-utils';
import {GetRowsOptions, TabularApiSurface} from './tabular-api-surface';
import {getRowsInternal} from './utils/getRowsInternal';
import {
  MethodName,
  StreamingState,
} from './client-side-metrics/client-side-metrics-attributes';
import {mutateInternal} from './utils/mutateInternal';

export interface Rule {
  column: string;
  append?: string; // append is optional since `increment` doesn't supply it for instance.
  increment?: number;
}
export interface CreateRowOptions {
  gaxOptions?: CallOptions;
  entry?: Entry;
}
export interface FormatFamiliesOptions {
  decode?: boolean;
}
export interface Family {
  name: string;
  columns: Array<{
    qualifier?: Bytes;
    cells: Array<{
      value?: Bytes;
      timestampMicros?: number;
      labels?: string[];
    }>;
  }>;
}
export interface FilterConfigOption {
  method?: string;
  data?: Data;
  key?: string;
}
export interface FilterConfig {
  gaxOptions?: CallOptions;
  onMatch?: FilterConfigOption[];
  onNoMatch?: FilterConfigOption[];
}
export interface GetRowOptions {
  /**
   *  If set to `false` it will not decode Buffer values returned from Bigtable.
   */
  decode?: boolean;
  /**
   * Request configuration options, outlined here:
   * https://googleapis.github.io/gax-nodejs/CallSettings.html.
   */
  gaxOptions?: CallOptions;

  filter?: {};
}
export type RowExistsCallback = (
  err: ServiceError | null,
  exists?: boolean,
) => void;
export type RowExistsResponse = [boolean];
export type CreateRulesCallback = (
  err: ServiceError | null,
  apiResponse?: google.bigtable.v2.IReadModifyWriteRowResponse,
) => void;
export type CreateRulesResponse = [
  google.bigtable.v2.IReadModifyWriteRowResponse,
];
export type CreateRowCallback = (
  err: ServiceError | PartialFailureError | null,
  row?: Row | null,
  apiResponse?: google.protobuf.Empty,
) => void;
export type CreateRowResponse = [Row, google.protobuf.Empty];
export type GetRowMetadataCallback = (
  err: RowError | null,
  apiResponse?: google.bigtable.v2.ReadRowsResponse,
) => void;
export type GetRowMetadataResponse = [google.bigtable.v2.ReadRowsResponse];
export type GetRowCallback<T = Row> = (
  err: RowError | null,
  row?: T,
  apiResponse?: {},
) => void;
export type GetRowResponse<T = Row> = [T, {}];
export type FilterCallback = (
  err: ServiceError | null,
  matched?: boolean | null,
  apiResponse?: google.bigtable.v2.ICheckAndMutateRowResponse,
) => void;
export type FilterResponse = [
  boolean | null,
  google.bigtable.v2.ICheckAndMutateRowResponse,
];
export type IncrementCallback = (
  err: ServiceError | null,
  value?: number | null,
  apiResponse?: google.bigtable.v2.IReadModifyWriteRowResponse,
) => void;
export type IncrementResponse = [
  number | null,
  google.bigtable.v2.IReadModifyWriteRowResponse,
];

/**
 * @private
 */
export class RowError extends Error {
  code: number;
  constructor(row: string) {
    super();
    this.name = 'RowError';
    this.message = `Unknown row: ${row}.`;
    this.code = 404;
  }
}

/**
 * getProperties returns the properties needed to make a request for a table.
 *
 * @param {Row} row The row to make a request for.
 */
function getProperties(row: Row): RowProperties {
  return {
    reqOpts: {tableName: row.table.name},
    requestData: row,
  };
}

/**
 * Create a Row object to interact with your table rows.
 *
 * @class
 * @param {Table} table The row's parent Table instance.
 * @param {string} key The key for this row.
 *
 * @example
 * ```
 * const {Bigtable} = require('@google-cloud/bigtable');
 * const bigtable = new Bigtable();
 * const instance = bigtable.instance('my-instance');
 * const table = instance.table('prezzy');
 * const row = table.row('gwashington');
 * ```
 */
export class Row {
  bigtable: Bigtable;
  table: TabularApiSurface;
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  key?: string;
  metadata?: {};
  constructor(table: TabularApiSurface, key: string) {
    this.bigtable = table.bigtable;
    this.table = table;
    this.id = key;
    this.data = {};
  }

  /**
   * Formats the row chunks into friendly format. Chunks contain 3 properties:
   *
   * `rowContents` The row contents, this essentially is all data pertaining
   *     to a single family.
   *
   * `commitRow` This is a boolean telling us the all previous chunks for this
   *     row are ok to consume.
   *
   * `resetRow` This is a boolean telling us that all the previous chunks are to
   *     be discarded.
   *
   * @private
   *
   * @param {chunk[]} chunks The list of chunks.
   * @param {object} [options] Formatting options.
   *
   * @example
   * ```
   * Row.formatChunks_(chunks);
   * // {
   * //   follows: {
   * //     gwashington: [
   * //       {
   * //         value: 2
   * //       }
   * //     ]
   * //   }
   * // }
   * ```
   */
  static formatChunks_(chunks: Chunk[], options?: ConvertFromBytesUserOptions) {
    const rows: Row[] = [];
    let familyName: string | null;
    let qualifierName: string | null;

    options = options || {};

    chunks.reduce((row, chunk) => {
      let family: {[index: string]: []};
      let qualifier: Array<{}>;

      row.data = row.data || {};

      if (chunk.rowKey) {
        row.key = Mutation.convertFromBytes(chunk.rowKey, {
          userOptions: options,
        }) as string;
      }

      if (chunk.familyName) {
        familyName = chunk.familyName.value;
      }

      if (familyName) {
        family = row.data[familyName] = row.data[familyName] || {};
      }

      if (chunk.qualifier) {
        qualifierName = Mutation.convertFromBytes(
          chunk.qualifier.value as string,
          {
            userOptions: options,
          },
        ) as string;
      }

      if (family! && qualifierName) {
        qualifier = family![qualifierName] = family![qualifierName] || [];
      }

      if (qualifier! && chunk.value) {
        qualifier!.push({
          value: Mutation.convertFromBytes(chunk.value, {userOptions: options}),
          labels: chunk.labels,
          timestamp: chunk.timestampMicros,
          size: chunk.valueSize,
        });
      }

      if (chunk.commitRow) {
        rows.push(row);
      }

      if (chunk.commitRow || chunk.resetRow) {
        familyName = qualifierName = null;
        return {};
      }

      return row;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }, {} as any);

    return rows;
  }

  /**
   * Formats a rowContents object into friendly format.
   *
   * @private
   *
   * @param {object[]} families The row families.
   * @param {object} [options] Formatting options.
   *
   * @example
   * ```
   * const families = [
   *   {
   *     name: 'follows',
   *     columns: [
   *       {
   *         qualifier: 'gwashington',
   *         cells: [
   *           {
   *             value: 2
   *           }
   *         ]
   *       }
   *     ]
   *   }
   * ];
   *
   * Row.formatFamilies_(families);
   * // {
   * //   follows: {
   * //     gwashington: [
   * //       {
   * //         value: 2
   * //       }
   * //     ]
   * //   }
   * // }
   * ```
   */
  static formatFamilies_(
    families: google.bigtable.v2.IFamily[],
    options?: FormatFamiliesOptions,
  ) {
    return RowDataUtils.formatFamilies_Util(families, options);
  }

  create(options?: CreateRowOptions): Promise<CreateRowResponse>;
  create(options: CreateRowOptions, callback: CreateRowCallback): void;
  create(callback: CreateRowCallback): void;
  /**
   * Create a new row in your table.
   *
   * @param {object} [options] Configuration object.
   * @param {object} [options.entry] An entry. See {@link Table#insert}.
   * @param {object} [options.gaxOptions] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {Row} callback.row The newly created row object.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/row.js</caption>
   * region_tag:bigtable_api_create_row
   */
  create(
    optionsOrCallback?: CreateRowOptions | CreateRowCallback,
    cb?: CreateRowCallback,
  ): void | Promise<CreateRowResponse> {
    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    const entry = {
      key: this.id,
      data: options.entry,
      method: Mutation.methods.INSERT,
    } as {} as Entry;
    this.data = {};
    this.table.mutate(
      entry,
      options.gaxOptions as MutateOptions,
      (err, apiResponse) => {
        if (err) {
          callback(err, null, apiResponse);
          return;
        }
        callback(null, this, apiResponse);
      },
    );
  }

  createRules(
    rules: Rule | Rule[],
    options?: CallOptions,
  ): Promise<CreateRulesResponse>;
  createRules(
    rules: Rule | Rule[],
    options: CallOptions,
    callback: CreateRulesCallback,
  ): void;
  createRules(rules: Rule | Rule[], callback: CreateRulesCallback): void;
  /**
   * Update a row with rules specifying how the row's contents are to be
   * transformed into writes. Rules are applied in order, meaning that earlier
   * rules will affect the results of later ones.
   *
   * @throws {error} If no rules are provided.
   *
   * @param {object|object[]} rules The rules to apply to this row.
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/row.js</caption>
   * region_tag:bigtable_api_create_rules
   */
  createRules(
    rules: Rule | Rule[],
    optionsOrCallback?: CallOptions | CreateRulesCallback,
    cb?: CreateRulesCallback,
  ): void | Promise<CreateRulesResponse> {
    RowDataUtils.createRulesUtil(
      rules,
      getProperties(this),
      optionsOrCallback,
      cb,
    );
  }

  delete(options?: CallOptions): Promise<MutateResponse>;
  delete(options: CallOptions, callback: MutateCallback): void;
  delete(callback: MutateCallback): void;
  /**
   * Deletes all cells in the row.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/row.js</caption>
   * region_tag:bigtable_api_delete_all_cells
   */
  delete(
    optionsOrCallback?: CallOptions | MutateCallback,
    cb?: MutateCallback,
  ): void | Promise<MutateResponse> {
    const gaxOptions =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    const mutation = {
      key: this.id,
      method: Mutation.methods.DELETE,
    } as {} as Entry;
    this.data = {};
    this.table.mutate(mutation, gaxOptions as {} as MutateOptions, callback);
  }

  deleteCells(
    columns: string[],
    options?: CallOptions,
  ): Promise<MutateResponse>;
  deleteCells(
    columns: string[],
    options: CallOptions,
    callback: MutateCallback,
  ): void;
  deleteCells(columns: string[], callback: MutateCallback): void;
  /**
   * Delete specified cells from the row. See {@link Table#mutate}.
   *
   * @param {string[]} columns Column names for the cells to be deleted.
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/row.js</caption>
   * region_tag:bigtable_api_delete_particular_cells
   */
  deleteCells(
    columns: string[],
    optionsOrCallback?: CallOptions | MutateCallback,
    cb?: MutateCallback,
  ): void | Promise<MutateResponse> {
    const gaxOptions =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    const mutation = {
      key: this.id,
      data: arrify(columns),
      method: Mutation.methods.DELETE,
    } as {} as Entry;
    this.data = {};
    this.table.mutate(mutation, gaxOptions as MutateOptions, callback);
  }

  exists(options?: CallOptions): Promise<RowExistsResponse>;
  exists(options: CallOptions, callback: RowExistsCallback): void;
  exists(callback: RowExistsCallback): void;
  /**
   * Check if the table row exists.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {boolean} callback.exists Whether the row exists or not.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/row.js</caption>
   * region_tag:bigtable_api_row_exists
   */
  exists(
    optionsOrCallback?: CallOptions | RowExistsCallback,
    cb?: RowExistsCallback,
  ): void | Promise<RowExistsResponse> {
    const gaxOptions =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    const options = Object.assign(
      {
        filter: [
          {
            row: {
              cellLimit: 1,
            },
          },
          {
            value: {
              strip: true,
            },
          },
        ],
      },
      gaxOptions,
    );
    this.getMetadata(options as GetRowOptions, err => {
      if (err) {
        if (err instanceof RowError) {
          callback(null, false);
          return;
        }
        callback(err);
        return;
      }
      callback(null, true);
    });
  }

  filter(filter: RawFilter, config?: FilterConfig): Promise<FilterResponse>;
  filter(
    filter: RawFilter,
    config: FilterConfig,
    callback: FilterCallback,
  ): void;
  filter(filter: RawFilter, callback: FilterCallback): void;
  /**
   * Mutates a row atomically based on the output of a filter. Depending on
   * whether or not any results are yielded, either the `onMatch` or `onNoMatch`
   * callback will be executed.
   *
   * @param {Filter} filter Filter to be applied to the contents of the row.
   * @param {object} config Configuration object.
   * @param {?object[]} config.onMatch A list of entries to be ran if a match is
   *     found.
   * @param {object[]} [config.onNoMatch] A list of entries to be ran if no
   *     matches are found.
   * @param {object} [config.gaxOptions] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {boolean} callback.matched Whether a match was found or not.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/row.js</caption>
   * region_tag:bigtable_api_row_filter
   */
  filter(
    filter: RawFilter,
    configOrCallback?: FilterConfig | FilterCallback,
    cb?: FilterCallback,
  ): void | Promise<FilterResponse> {
    RowDataUtils.filterUtil(filter, getProperties(this), configOrCallback, cb);
  }

  get(options?: GetRowOptions): Promise<GetRowResponse<Row>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get<T = any>(
    columns: string[],
    options?: GetRowOptions,
  ): Promise<GetRowResponse<T>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get<T = any>(
    columns: string[],
    options: GetRowOptions,
    callback: GetRowCallback<T>,
  ): void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get<T = any>(columns: string[], callback: GetRowCallback<T>): void;
  get(callback: GetRowCallback<Row>): void;
  get(options: GetRowOptions, callback: GetRowCallback<Row>): void;
  /**
   * Get the row data. See {@link Table#getRows}.
   *
   * @param {string[]} [columns] List of specific columns to retrieve.
   * @param {object} [options] Configuration object.
   * @param {boolean} [options.decode=true] If set to `false` it will not decode Buffer
   *     values returned from Bigtable.
   * @param {object} [options.gaxOptions] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {Row} callback.row The updated Row object.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/row.js</caption>
   * region_tag:bigtable_api_get_row
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get<T = any | Row>(
    columnsOrOptionsOrCallback?: string[] | GetRowOptions | GetRowCallback<T>,
    optionsOrCallback?: GetRowOptions | GetRowCallback<T>,
    cb?: GetRowCallback<T>,
  ): void | Promise<GetRowResponse> {
    let columns = Array.isArray(columnsOrOptionsOrCallback)
      ? columnsOrOptionsOrCallback
      : [];
    const options =
      typeof columnsOrOptionsOrCallback === 'object' &&
      !Array.isArray(columnsOrOptionsOrCallback)
        ? columnsOrOptionsOrCallback
        : typeof optionsOrCallback === 'object'
          ? optionsOrCallback
          : {};
    const callback =
      typeof columnsOrOptionsOrCallback === 'function'
        ? columnsOrOptionsOrCallback
        : typeof optionsOrCallback === 'function'
          ? optionsOrCallback
          : cb!;

    let filter;
    columns = arrify(columns);

    // if there is column filter
    if (columns.length) {
      const filters = columns.map(Mutation.parseColumnName).map(column => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const colmFilters: any = [{family: column.family}];
        if (column.qualifier) {
          colmFilters.push({column: column.qualifier});
        }
        return colmFilters;
      });

      // if there is more then one filter, make it type inteleave filter
      if (filters.length > 1) {
        filter = [
          {
            interleave: filters,
          },
        ];
      } else {
        filter = filters[0];
      }
    }

    // if there is also a second option.filter append to filter array
    if (options.filter) {
      filter = arrify(filter).concat(options.filter);
    }

    const getRowsOptions: GetRowsOptions = Object.assign({}, options, {
      keys: [this.id],
      filter,
      limit: 1,
    });

    const metricsCollector =
      this.table.bigtable._metricsConfigManager.createOperation(
        MethodName.READ_ROW,
        StreamingState.UNARY,
        this.table,
      );
    void getRowsInternal(
      this.table,
      metricsCollector,
      getRowsOptions,
      (err, rows) => {
        if (err) {
          callback(err);
          return;
        }

        const row = rows![0];

        if (!row) {
          const e = new RowError(this.id);
          callback(e);
          return;
        }

        this.data = row.data;

        // If the user specifies column names, we'll return back the row data
        // we received. Otherwise, we'll return the row "this" in a typical
        // GrpcServiceObject#get fashion.
        if (columns.length > 0) {
          callback(null, row.data);
        } else {
          (callback as {} as GetRowCallback<Row>)(null, this);
        }
      },
    );
  }

  getMetadata(options?: GetRowOptions): Promise<GetRowMetadataResponse>;
  getMetadata(options: GetRowOptions, callback: GetRowMetadataCallback): void;
  getMetadata(callback: GetRowMetadataCallback): void;
  /**
   * Get the row's metadata.
   *
   * @param {object} [options] Configuration object.
   * @param {boolean} [options.decode=true] If set to `false` it will not decode
   *     Buffer values returned from Bigtable.
   * @param {object} [options.gaxOptions] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {object} callback.metadata The row's metadata.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/row.js</caption>
   * region_tag:bigtable_api_get_row_meta
   */
  getMetadata(
    optionsOrCallback?: GetRowOptions | GetRowMetadataCallback,
    cb?: GetRowMetadataCallback,
  ): void | Promise<GetRowMetadataResponse> {
    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    this.get(options, (err, row) => {
      if (err) {
        callback(err);
        return;
      }
      callback(null, row!.metadata as google.bigtable.v2.ReadRowsResponse);
    });
  }

  increment(column: string, value?: number): Promise<IncrementResponse>;
  increment(
    column: string,
    value: number,
    options?: CallOptions,
  ): Promise<IncrementResponse>;
  increment(column: string, options?: CallOptions): Promise<IncrementResponse>;
  increment(
    column: string,
    value: number,
    options: CallOptions,
    callback: IncrementCallback,
  ): void;
  increment(column: string, value: number, callback: IncrementCallback): void;
  increment(
    column: string,
    options: CallOptions,
    callback: IncrementCallback,
  ): void;
  increment(column: string, callback: IncrementCallback): void;
  /**
   * Increment a specific column within the row. If the column does not
   * exist, it is automatically initialized to 0 before being incremented.
   *
   * @param {string} column The column we are incrementing a value in.
   * @param {number} [value] The amount to increment by, defaults to 1.
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {number} callback.value The updated value of the column.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/row.js</caption>
   * region_tag:bigtable_api_row_increment
   */
  increment(
    column: string,
    valueOrOptionsOrCallback?: number | CallOptions | IncrementCallback,
    optionsOrCallback?: CallOptions | IncrementCallback,
    cb?: IncrementCallback,
  ): void | Promise<IncrementResponse> {
    RowDataUtils.incrementUtils(
      column,
      getProperties(this),
      valueOrOptionsOrCallback,
      optionsOrCallback,
      cb,
    );
  }

  save(entry: Entry, options?: CallOptions): Promise<MutateResponse>;
  save(entry: Entry, options: CallOptions, callback: MutateCallback): void;
  save(entry: Entry, callback: MutateCallback): void;
  /**
   * Update the row cells.
   *
   * @param {object} key An entry object to be inserted into the row. See
   *     {@link Table#insert}.
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/row.js</caption>
   * region_tag:bigtable_api_row_save
   */
  save(
    entry: Entry,
    optionsOrCallback?: CallOptions | MutateCallback,
    cb?: MutateCallback,
  ): void | Promise<MutateResponse> {
    const gaxOptions =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    const mutation = {
      key: this.id,
      data: entry,
      method: Mutation.methods.INSERT,
    } as {} as Entry;
    this.data = {};
    const metricsCollector =
      this.bigtable._metricsConfigManager.createOperation(
        MethodName.MUTATE_ROW,
        StreamingState.UNARY,
        this.table,
      );
    mutateInternal(
      this.table,
      metricsCollector,
      mutation,
      gaxOptions as {} as MutateOptions,
      callback,
    );
  }
}

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(Row);
