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

import {ClientImplMaker, getTableInfo, normalizeCallback} from './utils';
import {createFlatMutationsListWithFnInverse} from './utils/request/createFlatMutationsList';
import {mutationParseInverse} from './utils/request/mutateInverse';
import {google} from '../protos/protos';
import {RawFilter} from '../../src';
import {GoogleError} from 'google-gax';
type ICheckAndMutateRowRequest =
  google.bigtable.testproxy.ICheckAndMutateRowRequest;
type ICheckAndMutateRowResult =
  google.bigtable.testproxy.ICheckAndMutateRowResult;

/**
 * Transforms mutations from the gRPC layer format to the handwritten layer format.
 * This function takes an array of gRPC layer mutations (google.bigtable.v2.IMutation[]) and converts
 * them back to the format used by the handwritten layer.  It essentially reverses the transformation
 * performed by Mutation.parse.  It's used internally by the test proxy for checkAndMutateRow.
 *
 * @param {google.bigtable.v2.IMutation[]} gapicLayerMutations An array of mutations in the gRPC layer format.
 * @returns {FilterConfigOption[]} An array of mutations in the handwritten layer format.
 */
function handwrittenLayerMutations(
  gapicLayerMutations: google.bigtable.v2.IMutation[],
) {
  return gapicLayerMutations
    .map(mutation =>
      createFlatMutationsListWithFnInverse(
        [
          {
            mutations: [mutation],
          },
        ],
        mutationParseInverse,
        1,
      ),
    )
    .flat();
}

/**
 * Converts a byte array (or string) back to a string.  This is the inverse of
 * Mutation.convertToBytes.
 *
 * @param {Bytes} bytes The byte array or string to convert.
 * @returns {string} The converted string.
 */
function convertFromBytes(bytes: Buffer | string | Uint8Array): string {
  if (Buffer.isBuffer(bytes)) {
    return bytes.toString();
  } else if (typeof bytes === 'string') {
    return bytes;
  } else if (bytes instanceof Uint8Array) {
    return Buffer.from(bytes).toString();
  } else {
    throw new Error('Invalid input type. Must be Buffer or string.');
  }
}

export const checkAndMutateRow: ClientImplMaker<
  ICheckAndMutateRowRequest,
  ICheckAndMutateRowResult
> = ({clientMap}) =>
  normalizeCallback(async rawRequest => {
    const {request} = rawRequest;
    const {clientId, request: checkAndMutateRowRequest} = request;
    const {appProfileId, falseMutations, rowKey, tableName, trueMutations} =
      checkAndMutateRowRequest!;
    const onMatch = handwrittenLayerMutations(trueMutations!);
    const onNoMatch = handwrittenLayerMutations(falseMutations!);
    const id = convertFromBytes(rowKey!);
    const bigtable = clientMap.get(clientId!)!;
    bigtable.appProfileId =
      appProfileId === '' ? bigtable.appProfileId! : appProfileId!;
    const table = getTableInfo(bigtable, tableName!);
    const row = table.row(id);
    const filter: RawFilter[] = [];
    const filterConfig = {onMatch, onNoMatch};
    try {
      const [, result] = await row.filter(filter, filterConfig);
      return {
        status: {code: grpc.status.OK, details: []},
        result,
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
