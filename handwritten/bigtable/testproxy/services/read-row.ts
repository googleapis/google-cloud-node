// Copyright 2022 Google LLC
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

import * as grpc from '@grpc/grpc-js';

import {google} from '../protos/protos';
type IReadRowRequest = google.bigtable.testproxy.IReadRowRequest;
type IRowResult = google.bigtable.testproxy.IRowResult;

import {
  ClientImplMaker,
  normalizeCallback,
  getRowResponse,
  getTableInfo,
} from './utils';
import {GoogleError} from 'google-gax';

export const readRow: ClientImplMaker<IReadRowRequest, IRowResult> = ({
  clientMap,
}) =>
  normalizeCallback(async rawRequest => {
    const {clientId, rowKey, tableName} = rawRequest.request;
    const columns = {};

    try {
      const bigtable = clientMap.get(clientId!);
      const table = getTableInfo(bigtable, tableName!);
      const row = table.row(rowKey!);

      const res = await row.get(columns);
      const firstRow = getRowResponse(res[0]);

      return {
        status: {code: grpc.status.OK, details: []},
        row: firstRow,
      };
    } catch (e) {
      const error = e as GoogleError;
      return {
        status: {
          code: error.code || grpc.status.FAILED_PRECONDITION,
          // e.details must be in an empty array for the test runner to return the status. This is tracked in b/383096533.
          details: [],
          message: error.message,
        },
      };
    }
  });
