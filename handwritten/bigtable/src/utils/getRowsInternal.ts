// Copyright 2025 Google LLC
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

import {
  GetRowsCallback,
  GetRowsOptions,
  GetRowsResponse,
  TabularApiSurface,
} from '../tabular-api-surface';
import {createReadStreamInternal} from './createReadStreamInternal';
import {Row} from '../row';
import {OperationMetricsCollector} from '../client-side-metrics/operation-metrics-collector';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const concat = require('concat-stream');

/**
 * Get {@link Row} objects for the rows currently in your table.
 *
 * This method is not recommended for large datasets as it will buffer all rows
 * before returning the results. Instead we recommend using the streaming API
 * via {@link Table#createReadStream}.
 *
 * @param {TabularApiSurface} table The table instance to get rows from.
 * @param metricsCollector
 * @param {object} [optionsOrCallback] Configuration object. See
 *     {@link Table#createReadStream} for a complete list of options.
 * @param {object} [optionsOrCallback.gaxOptions] Request configuration options, outlined
 *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
 * @param {function} cb The callback function.
 * @param {?error} cb.err An error returned while making this request.
 * @param {Row[]} cb.rows List of Row objects.
 *
 * @returns {Promise<GetRowsResponse>|void} Returns a promise that resolves with the rows if no callback is provided, otherwise calls the callback with the rows.
 *
 * @example <caption>include:samples/api-reference-doc-snippets/table.js</caption>
 * region_tag:bigtable_api_get_rows
 */
export function getRowsInternal(
  table: TabularApiSurface,
  metricsCollector: OperationMetricsCollector,
  optionsOrCallback?: GetRowsOptions | GetRowsCallback,
  cb?: GetRowsCallback,
): void | Promise<GetRowsResponse> {
  const callback =
    typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
  const options =
    typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
  createReadStreamInternal(table, metricsCollector, options)
    .on('error', callback)
    .pipe(
      concat((rows: Row[]) => {
        callback(null, rows);
      }),
    );
}
