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

import {TabularApiSurface} from './tabular-api-surface';
import {CallOptions} from 'google-gax';
import {
  CreateRulesCallback,
  CreateRulesResponse,
  FilterCallback,
  FilterConfig,
  FilterResponse,
  IncrementCallback,
  IncrementResponse,
  Rule,
} from './row';
import {RowDataUtils, RowProperties} from './row-data-utils';
import {RawFilter} from './filter';
import {Family} from './chunktransformer';
import {Instance} from './instance';
import {promisifyAll} from '@google-cloud/promisify';

interface FilterInformation {
  filter: RawFilter;
  rowId: string;
}

interface CreateRulesInformation {
  rules: Rule | Rule[];
  rowId: string;
}

interface IncrementInformation {
  column: string;
  rowId: string;
}

/**
 * The AuthorizedView class is a class that is available to the user that
 * contains methods the user can call to work with authorized views.
 *
 * @class
 * @param {Table} table The table that the authorized view exists on.
 * @param {string} id Unique identifier of the authorized view.
 *
 */
export class AuthorizedView extends TabularApiSurface {
  private readonly rowData: {[id: string]: {[index: string]: Family}};

  constructor(instance: Instance, tableName: string, viewName: string) {
    super(instance, tableName, viewName);
    this.rowData = {};
  }

  createRules(
    createRulesInfo: CreateRulesInformation,
    options?: CallOptions,
  ): Promise<CreateRulesResponse>;
  createRules(
    createRulesInfo: CreateRulesInformation,
    options: CallOptions,
    callback: CreateRulesCallback,
  ): void;
  createRules(
    createRulesInfo: CreateRulesInformation,
    callback: CreateRulesCallback,
  ): void;
  /**
   * Update a row with rules specifying how the row's contents are to be
   * transformed into writes. Rules are applied in order, meaning that earlier
   * rules will affect the results of later ones.
   *
   * @throws {error} If no rules are provided.
   *
   * @param {CreateRulesInformation} createRulesInfo The rules to apply to a row
   *    along with the row id of the row to update.
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
    createRulesInfo: CreateRulesInformation,
    optionsOrCallback?: CallOptions | CreateRulesCallback,
    cb?: CreateRulesCallback,
  ): void | Promise<CreateRulesResponse> {
    this.initializeRow(createRulesInfo.rowId);
    RowDataUtils.createRulesUtil(
      createRulesInfo.rules,
      this.generateProperties(createRulesInfo.rowId),
      optionsOrCallback,
      cb,
    );
  }

  /**
   * Mutates a row atomically based on the output of a filter. Depending on
   * whether or not any results are yielded, either the `onMatch` or `onNoMatch`
   * callback will be executed.
   *
   * @param {FilterInformation} filter Filter to be applied to the contents of
   * the row along with the row id of the affected row.
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
    filterInfo: FilterInformation,
    config?: FilterConfig,
  ): Promise<FilterResponse>;
  filter(
    filterInfo: FilterInformation,
    config: FilterConfig,
    callback: FilterCallback,
  ): void;
  filter(filterInfo: FilterInformation, callback: FilterCallback): void;
  filter(
    filterInfo: FilterInformation,
    configOrCallback?: FilterConfig | FilterCallback,
    cb?: FilterCallback,
  ): void | Promise<FilterResponse> {
    this.initializeRow(filterInfo.rowId);
    RowDataUtils.filterUtil(
      filterInfo.filter,
      this.generateProperties(filterInfo.rowId),
      configOrCallback,
      cb,
    );
  }

  /**
   * Generates request properties necessary for making an rpc call for an
   * authorized view.
   *
   * @param {string} id The row id to generate the properties for.
   * @private
   */
  private generateProperties(id: string): RowProperties {
    return {
      requestData: {
        data: this.rowData[id],
        id,
        table: this,
        bigtable: this.bigtable,
      },
      reqOpts: {
        authorizedViewName: this.name + '/authorizedViews/' + this.viewName,
      },
    };
  }

  increment(
    columnInfo: IncrementInformation,
    value?: number,
  ): Promise<IncrementResponse>;
  increment(
    columnInfo: IncrementInformation,
    value: number,
    options?: CallOptions,
  ): Promise<IncrementResponse>;
  increment(
    columnInfo: IncrementInformation,
    options?: CallOptions,
  ): Promise<IncrementResponse>;
  increment(
    columnInfo: IncrementInformation,
    value: number,
    options: CallOptions,
    callback: IncrementCallback,
  ): void;
  increment(
    columnInfo: IncrementInformation,
    value: number,
    callback: IncrementCallback,
  ): void;
  increment(
    columnInfo: IncrementInformation,
    options: CallOptions,
    callback: IncrementCallback,
  ): void;
  increment(
    columnInfo: IncrementInformation,
    callback: IncrementCallback,
  ): void;
  /**
   * Increment a specific column within the row. If the column does not
   * exist, it is automatically initialized to 0 before being incremented.
   *
   * @param {IncrementInformation} columnInfo The column we are incrementing a
   * value in along with the row id of the affected row.
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
    columnInfo: IncrementInformation,
    valueOrOptionsOrCallback?: number | CallOptions | IncrementCallback,
    optionsOrCallback?: CallOptions | IncrementCallback,
    cb?: IncrementCallback,
  ): void | Promise<IncrementResponse> {
    this.initializeRow(columnInfo.rowId);
    RowDataUtils.incrementUtils(
      columnInfo.column,
      this.generateProperties(columnInfo.rowId),
      valueOrOptionsOrCallback,
      optionsOrCallback,
      cb,
    );
  }

  /**
   * Sets the row data for a particular row to an empty object
   *
   * @param {string} id An string with the key of the row to initialize.
   * @private
   */
  private initializeRow(id: string) {
    if (!this.rowData[id]) {
      this.rowData[id] = {};
    }
  }
}

promisifyAll(AuthorizedView, {
  exclude: ['initializeRow', 'generateProperties'],
});
