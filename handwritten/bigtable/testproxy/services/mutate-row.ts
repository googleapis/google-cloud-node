// Copyright 2022-2026 Google LLC
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
type IMutateRowRequest = google.bigtable.testproxy.IMutateRowRequest;
type IMutateRowResult = google.bigtable.testproxy.IMutateRowResult;

import {ClientImplMaker, normalizeCallback} from './utils';
import {getBigtableClient} from './utils/bigtable-client';

export const mutateRow: ClientImplMaker<
  IMutateRowRequest,
  IMutateRowResult
> = ({clientMap}) =>
  normalizeCallback(async rawRequest => {
    const {request} = rawRequest;
    const {request: mutateRequest} = request;
    const {mutations, tableName, rowKey} = mutateRequest!;
    const {clientId} = request;
    const bigtable = clientMap.get(clientId!);
    const appProfileId = bigtable.appProfileId;
    const client = getBigtableClient(bigtable);

    try {
      await client.mutateRow({
        appProfileId,
        mutations,
        tableName,
        rowKey,
      });

      return {
        status: {code: grpc.status.OK, details: []},
      };
    } catch (e) {
      const error = e as GoogleError;
      return {
        status: {
          code: error.code ? error.code : grpc.status.UNKNOWN,
          message: error.message,
          details: [],
        },
      };
    }
  });
