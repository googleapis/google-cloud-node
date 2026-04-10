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

import {OperationMetricsCollector} from './client-side-metrics/operation-metrics-collector';

const dotProp = require('dot-prop');
import {Filter, RawFilter} from './filter';
import {
  CreateRulesCallback,
  FilterCallback,
  FilterConfig,
  FilterConfigOption,
  FormatFamiliesOptions,
  IncrementCallback,
  Rule,
} from './row';
import {Family} from './chunktransformer';
import {Bytes, Mutation} from './mutation';
import {google} from '../protos/protos';
import {TabularApiSurface} from './tabular-api-surface';
import arrify = require('arrify');
import {Bigtable} from './index';
import {CallOptions} from 'google-gax';
import {
  MethodName,
  StreamingState,
} from './client-side-metrics/client-side-metrics-attributes';
import {createMetricsUnaryInterceptorProvider} from './client-side-metrics/metric-interceptor';

interface TabularApiSurfaceRequest {
  tableName?: string;
  authorizedViewName?: string;
}

export interface RowProperties {
  requestData: {
    data?: {[index: string]: Family};
    id: string;
    table: TabularApiSurface;
    bigtable: Bigtable;
  };
  reqOpts: TabularApiSurfaceRequest;
}

/**
 * RowDataUtils is a class containing functionality needed by the Row and
 * AuthorizedView classes. Its static methods need to be contained in a class
 * so that they can be mocked out using the sinon library as is conventional
 * throughout the rest of the client library.
 */
class RowDataUtils {
  /**
   * Called by `filter` methods for fulfilling table and authorized view requests.
   *
   * @param {Filter} filter Filter to be applied to the contents of the row.
   * @param {RowProperties} properties Properties containing data for the request.
   * @param {object} configOrCallback Configuration object.
   * @param {function} cb The callback function.
   *
   */
  static filterUtil(
    filter: RawFilter,
    properties: RowProperties,
    configOrCallback?: FilterConfig | FilterCallback,
    cb?: FilterCallback,
  ) {
    const config = typeof configOrCallback === 'object' ? configOrCallback : {};
    const callback =
      typeof configOrCallback === 'function' ? configOrCallback : cb!;
    const reqOpts = Object.assign(
      {
        appProfileId: properties.requestData.bigtable.appProfileId,
        rowKey: Mutation.convertToBytes(properties.requestData.id),
        predicateFilter: Filter.parse(filter),
        trueMutations: createFlatMutationsList(config.onMatch!),
        falseMutations: createFlatMutationsList(config.onNoMatch!),
      },
      properties.reqOpts,
    );
    properties.requestData.data = {};
    // 1. Create a metrics collector.
    const metricsCollector = new OperationMetricsCollector(
      properties.requestData.table,
      MethodName.CHECK_AND_MUTATE_ROW,
      StreamingState.UNARY,
      (
        properties.requestData.table as any
      ).bigtable._metricsConfigManager!.metricsHandlers,
    );
    // 2. Tell the metrics collector an attempt has been started.
    metricsCollector.onOperationStart();
    // 3. Make a unary call with gax options that include interceptors. The
    // interceptors are built from a method that hooks them up to the
    // metrics collector
    properties.requestData.bigtable.request<google.bigtable.v2.ICheckAndMutateRowResponse>(
      {
        client: 'BigtableClient',
        method: 'checkAndMutateRow',
        reqOpts,
        gaxOpts: createMetricsUnaryInterceptorProvider(
          config.gaxOptions ?? {},
          metricsCollector,
        ),
      },
      (err, apiResponse) => {
        metricsCollector.onOperationComplete(err ? err.code : 0);
        if (err) {
          callback(err, null, apiResponse);
          return;
        }

        callback(null, apiResponse!.predicateMatched, apiResponse);
      },
    );

    function createFlatMutationsList(entries: FilterConfigOption[]) {
      const e2 = arrify(entries).map(
        entry => Mutation.parse(entry as Mutation).mutations!,
      );
      return e2.reduce((a, b) => a.concat(b), []);
    }
  }

  static formatFamilies_Util(
    families: google.bigtable.v2.IFamily[],
    options?: FormatFamiliesOptions,
  ) {
    const data = {} as {[index: string]: {}};
    options = options || {};
    families.forEach(family => {
      const familyData = (data[family.name!] = {}) as {
        [index: string]: {};
      };
      family.columns!.forEach(column => {
        const qualifier = Mutation.convertFromBytes(
          column.qualifier as string,
        ) as string;
        familyData[qualifier] = column.cells!.map(cell => {
          let value = cell.value;
          if (options!.decode !== false) {
            value = Mutation.convertFromBytes(value as Bytes, {
              isPossibleNumber: true,
            }) as string;
          }
          return {
            value,
            timestamp: cell.timestampMicros,
            labels: cell.labels,
          };
        });
      });
    });
    return data;
  }

  /**
   * Called by `createRules` methods for fulfilling table and authorized
   * view requests.
   *
   * @param {object|object[]} rules The rules to apply to this row.
   * @param {RowProperties} properties Properties containing data for the request.
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   *
   */
  static createRulesUtil(
    rules: Rule | Rule[],
    properties: RowProperties,
    optionsOrCallback?: CallOptions | CreateRulesCallback,
    cb?: CreateRulesCallback,
  ) {
    const gaxOptions =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;

    if (!rules || (rules as Rule[]).length === 0) {
      throw new Error('At least one rule must be provided.');
    }

    rules = arrify(rules).map(rule => {
      const column = Mutation.parseColumnName((rule as Rule).column);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const ruleData: any = {
        familyName: column.family,
        columnQualifier: Mutation.convertToBytes(column.qualifier!),
      };

      if ((rule as Rule).append) {
        ruleData.appendValue = Mutation.convertToBytes((rule as Rule).append);
      }

      if ((rule as Rule).increment) {
        ruleData.incrementAmount = (rule as Rule).increment;
      }

      return ruleData;
    });

    const reqOpts = Object.assign(
      {
        appProfileId: properties.requestData.bigtable.appProfileId,
        rowKey: Mutation.convertToBytes(properties.requestData.id),
        rules,
      },
      properties.reqOpts,
    );
    properties.requestData.data = {};
    // 1. Create a metrics collector.
    const metricsCollector = new OperationMetricsCollector(
      properties.requestData.table,
      MethodName.READ_MODIFY_WRITE_ROW,
      StreamingState.UNARY,
      (
        properties.requestData.table as any
      ).bigtable._metricsConfigManager!.metricsHandlers,
    );
    // 2. Tell the metrics collector an attempt has been started.
    metricsCollector.onOperationStart();
    // 3. Make a unary call with gax options that include interceptors. The
    // interceptors are built from a method that hooks them up to the
    // metrics collector
    properties.requestData.bigtable.request<google.bigtable.v2.IReadModifyWriteRowResponse>(
      {
        client: 'BigtableClient',
        method: 'readModifyWriteRow',
        reqOpts,
        gaxOpts: createMetricsUnaryInterceptorProvider(
          gaxOptions,
          metricsCollector,
        ),
      },
      (err, ...args) => {
        metricsCollector.onOperationComplete(err ? err.code : 0);
        callback(err, ...args);
      },
    );
  }

  /**
   * @param {string} column The column we are incrementing a value in.
   * @param {RowProperties} properties Properties containing data for the request.
   * @param {number} [valueOrOptionsOrCallback] The amount to increment by, defaults to 1.
   * @param {object} [optionsOrCallback] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} cb The callback function.
   */
  static incrementUtils(
    column: string,
    properties: RowProperties,
    valueOrOptionsOrCallback?: number | CallOptions | IncrementCallback,
    optionsOrCallback?: CallOptions | IncrementCallback,
    cb?: IncrementCallback,
  ) {
    const value =
      typeof valueOrOptionsOrCallback === 'number'
        ? valueOrOptionsOrCallback
        : 1;
    const gaxOptions =
      typeof valueOrOptionsOrCallback === 'object'
        ? valueOrOptionsOrCallback
        : typeof optionsOrCallback === 'object'
          ? optionsOrCallback
          : {};
    const callback =
      typeof valueOrOptionsOrCallback === 'function'
        ? valueOrOptionsOrCallback
        : typeof optionsOrCallback === 'function'
          ? optionsOrCallback
          : cb!;

    const reqOpts = {
      column,
      increment: value,
    } as Rule;

    this.createRulesUtil(reqOpts, properties, gaxOptions, (err, resp) => {
      if (err) {
        callback(err, null, resp);
        return;
      }
      const data = this.formatFamilies_Util(resp!.row!.families!);
      const value = dotProp.get(data, column.replace(':', '.'))[0].value;

      callback(null, value, resp);
    });
  }
}

export {RowDataUtils};
