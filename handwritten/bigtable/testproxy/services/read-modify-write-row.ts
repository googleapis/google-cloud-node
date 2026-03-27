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
type IReadModifyWriteRowRequest =
  google.bigtable.testproxy.IReadModifyWriteRowRequest;
type IRowResult = google.bigtable.testproxy.IRowResult;

import {ClientImplMaker, getTableInfo, normalizeCallback} from './utils';
import {getRMWRRequestInverse} from './utils/request/readModifyWriteRow';

export const readModifyWriteRow: ClientImplMaker<
  IReadModifyWriteRowRequest,
  IRowResult
> = ({clientMap}) =>
  normalizeCallback(async rawRequest => {
    const {request} = rawRequest;
    const {clientId, request: readModifyWriteRow} = request;
    const {appProfileId, tableName} = readModifyWriteRow!;
    const handWrittenRequest = getRMWRRequestInverse(readModifyWriteRow!);
    const bigtable = clientMap.get(clientId!);
    if (appProfileId && appProfileId !== '') {
      bigtable.appProfileId = appProfileId;
    }
    const table = getTableInfo(bigtable, tableName!);
    const row = table.row(handWrittenRequest.id);
    try {
      const [result] = await row.createRules(handWrittenRequest.rules!);
      return {
        status: {code: grpc.status.OK, details: []},
        row: result.row,
      };
    } catch (e) {
      const error = e as GoogleError;
      return {
        status: {
          code: error.code ? error.code : grpc.status.UNKNOWN,
          details: [],
          message: error.message,
        },
      };
    }
  });
