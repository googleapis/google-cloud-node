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

import {Rule} from '../../../../src/row';
import {Bytes, Mutation} from '../../../../src/mutation';
import arrify = require('arrify');
import * as protos from '../../../protos/protos';

type RMRWRequest = protos.google.bigtable.v2.IReadModifyWriteRowRequest;

interface RMWRRequestData {
  reqOpts: {
    tableName?: string;
    authorizedViewName?: string;
  };
  id: string;
  rules: Rule | Rule[];
  appProfileId?: string;
}

/**
 * This function will create a request that can be passed into the
 * readModifyWriteRequest method in the Gapic layer.
 *
 * @param {RMWRRequestData} request The readModifyWrite request information
 * that will be used to build the readModifyWrite request that will be sent to
 * the Gapic layer.
 * @returns {RMRWRequest} A request that can be passed into the
 * readModifyWriteRow method in the Gapic layer.
 */
export function getRMWRRequest(request: RMWRRequestData): RMRWRequest {
  const {reqOpts, id, rules, appProfileId} = request;
  if (!rules || (rules as Rule[]).length === 0) {
    throw new Error('At least one rule must be provided.');
  }

  const requestRules = arrify(rules).map(rule => {
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

  return Object.assign(
    {
      rowKey: Mutation.convertToBytes(id),
      rules: requestRules,
    },
    reqOpts,
    appProfileId ? {appProfileId} : null,
  );
}

/**
 * This function will translate a request that is appropriate for the
 * readModifyWriteRow method in the Gapic layer into a request for the
 * handwritten layer that calls the readModifyWriteRow method under the hood.
 *
 * @param {RMWRRequest} request The request that is in a format that can be
 * passed into the readModifyWriteRow Gapic layer method
 * @return {RMWRRequestData} A readModifyWriteRow request that can be passed
 * into getRMWRRequest and return the original `request` parameter.
 */
export function getRMWRRequestInverse(request: RMRWRequest): RMWRRequestData {
  const rules: Rule[] = [];
  if (request.rules) {
    for (const rule of request.rules) {
      const ruleData: Rule = {
        column: `${rule.familyName}:${Mutation.convertFromBytes(rule.columnQualifier as Bytes)}`,
      };

      if (rule.appendValue) {
        ruleData.append = Mutation.convertFromBytes(
          rule.appendValue as Bytes,
        ) as string;
      }

      if (rule.incrementAmount) {
        ruleData.increment = rule.incrementAmount as number;
      }

      rules.push(ruleData);
    }
  }

  const tableName = request.tableName as string;
  const authorizedViewName = request.authorizedViewName as string;
  const appProfileId = request.appProfileId as string;
  return Object.assign(
    {
      reqOpts: Object.assign(
        {},
        tableName ? {tableName} : null,
        authorizedViewName ? {authorizedViewName} : null,
      ),
      id: Mutation.convertFromBytes(request.rowKey as Bytes) as string,
      rules: rules,
    },
    appProfileId ? {appProfileId} : null,
  );
}
