// Copyright 2025-2026 Google LLC
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

import {GoogleError} from 'google-gax';
import * as grpc from '@grpc/grpc-js';
import {
  parseMetadata,
  parseRows,
  parseParameters,
} from './utils/request/createExecuteQueryResponse';
import {ClientImplMaker, normalizeCallback} from './utils';
import {ExecuteQueryOptions} from '../../src/instance';

import {google} from '../protos/protos';
type IExecuteQueryRequest = google.bigtable.testproxy.IExecuteQueryRequest;
type IExecuteQueryResult = google.bigtable.testproxy.IExecuteQueryResult;
type ExecuteQueryParameters = ExecuteQueryOptions['parameters'];

export const executeQuery: ClientImplMaker<
  IExecuteQueryRequest,
  IExecuteQueryResult
> = ({clientMap}) =>
  normalizeCallback(async rawRequest => {
    const {request} = rawRequest;
    const {clientId} = request;
    const queryRequest = request.request!;

    const {instanceName} = queryRequest;
    const bigtable = clientMap.get(clientId!);
    const instance = bigtable.instance(instanceName!);

    try {
      const [parameters, parameterTypes] = await parseParameters(
        // The empty object here is equivalent to `params` in the proto.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        queryRequest.params || ({} as any),
      );
      const [preparedStatement] = await instance.prepareStatement({
        query: queryRequest.query!,
        parameterTypes: parameterTypes,
      });
      const [rows] = await instance.executeQuery({
        preparedStatement,
        parameters: parameters as ExecuteQueryParameters,
        retryOptions: {},
      });

      const parsedMetadata = await parseMetadata(preparedStatement);
      const parsedRows = await parseRows(preparedStatement, rows);

      return {
        status: {code: grpc.status.OK, details: []},
        rows: parsedRows,
        metadata: {columns: parsedMetadata},
      };
    } catch (e) {
      console.error(e); // Log the error for debugging
      const error = e as GoogleError;
      return {
        status: {
          code: error.code || grpc.status.UNKNOWN,
          // e.details must be in an empty array for the test runner to return the status. This is tracked in b/383096533.
          details: [],
          message: error.message,
        },
      };
    }
  });
