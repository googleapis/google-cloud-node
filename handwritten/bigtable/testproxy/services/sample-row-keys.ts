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
import {ClientImplMaker, normalizeCallback} from './utils';

import {google} from '../protos/protos';
import {log} from './utils/log';
type ISampleRowKeysRequest = google.bigtable.testproxy.ISampleRowKeysRequest;
type ISampleRowKeysResult = google.bigtable.testproxy.ISampleRowKeysResult;

export const sampleRowKeys: ClientImplMaker<
  ISampleRowKeysRequest,
  ISampleRowKeysResult
> = ({clientMap}) =>
  normalizeCallback(async rawRequest => {
    const {request} = rawRequest;
    const {clientId, request: sampleRowKeysRequest} = request;
    const {tableName} = sampleRowKeysRequest!;

    const bigtable = clientMap.get(clientId!);

    const [, , , instanceId, , tableId] = tableName!.split('/');
    const instance = bigtable.instance(instanceId);
    const table = instance.table(tableId);

    try {
      const response = await table.sampleRowKeys();

      log.info('sampleRowKeys response %o', response);
      return {
        status: {code: grpc.status.OK, details: []},
        samples: response[0].map(sample => ({
          rowKey: sample.key,
          offsetBytes: sample.offset,
        })),
      };
    } catch (e) {
      const error = e as GoogleError;

      return {
        status: {
          // This might be zero/undefined if it's a disconnected client error.
          code: error.code || grpc.status.FAILED_PRECONDITION,
          details: [],
        },
      };
    }
  });
