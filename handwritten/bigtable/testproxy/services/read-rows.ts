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
import {GoogleError} from 'google-gax';

import {google} from '../protos/protos';
type IReadRowsRequest = google.bigtable.testproxy.IReadRowsRequest;
type IReadRowsRequestV2 = google.bigtable.v2.IReadRowsRequest;
type IRowsResult = google.bigtable.testproxy.IRowsResult;
type IRowRange = google.bigtable.v2.IRowRange;

import {
  ClientImplMaker,
  getRowResponse,
  getTableInfo,
  normalizeCallback,
} from './utils';
import {GetRowsOptions} from '../../src';

const getRowsOptions = (readRowsRequest: IReadRowsRequestV2) => {
  const getRowsRequest: GetRowsOptions = {};

  if (readRowsRequest.rows) {
    const {rowRanges} = readRowsRequest.rows;
    if (rowRanges) {
      getRowsRequest.ranges = rowRanges.map(
        ({startKeyClosed, endKeyClosed}: IRowRange) => ({
          start: {inclusive: true, value: String(startKeyClosed)},
          end: {inclusive: true, value: String(endKeyClosed)},
        }),
      );
    }

    const {rowKeys} = readRowsRequest.rows;
    if (rowKeys) {
      getRowsRequest.keys = rowKeys.map(String);
    }
  }

  const {rowsLimit} = readRowsRequest;
  if (rowsLimit && rowsLimit !== '0') {
    getRowsRequest.limit = parseInt(rowsLimit as string, 10);
  }
  return getRowsRequest;
};

const getReadRowsRequest = (request: IReadRowsRequest) => {
  const readRowsRequest = request ? request.request : undefined;
  if (!readRowsRequest || !readRowsRequest.tableName) {
    throw Object.assign(new Error('table_name must be provided in request.'), {
      code: grpc.status.INVALID_ARGUMENT,
    });
  }
  return readRowsRequest;
};

export const readRows: ClientImplMaker<IReadRowsRequest, IRowsResult> = ({
  clientMap,
}) =>
  normalizeCallback(async rawRequest => {
    const request = rawRequest.request;
    const {clientId} = request;
    const readRowsRequest = getReadRowsRequest(request);
    const {tableName} = readRowsRequest;
    const bigtable = clientMap.get(clientId!);
    const table = getTableInfo(bigtable, tableName || '');
    const rowsOptions = getRowsOptions(readRowsRequest);
    try {
      const [rows] = await table.getRows(rowsOptions);
      return {
        status: {code: grpc.status.OK, details: []},
        rows: rows.map(getRowResponse),
      };
    } catch (e) {
      const error = e as GoogleError;
      return {
        status: {
          // This might be zero/undefined if it's a disconnected client error.
          code: error.code || grpc.status.FAILED_PRECONDITION,
          // e.details must be in an empty array for the test runner to return the status. This is tracked in b/383096533.
          details: [],
          message: error.message,
        },
      };
    }
  });
