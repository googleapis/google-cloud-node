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

import {ServerWritableStream} from '@grpc/grpc-js';
import {protos} from '../../src';

/**
 * This file contains the parameters for the readRowsService.
 */

interface SharedReadRowsParameters {
  chunkSize: number; // The size of each chunk that the server pushes back
  valueSize: number; // An upper bound on the amount of data included in the chunks
}

export type DebugLog = (message: string) => void;

export interface ReadRowsServiceParameters extends SharedReadRowsParameters {
  deadlineExceededError?: boolean; // Send deadline exceeded transient error
  errorAfterChunkNo?: number; // The chunk that the error should come after
  keyFrom?: number; // The key the data coming from the service will start from
  keyTo?: number; // The key the data coming from the service will end at
  chunksPerResponse: number; // The total number of chunks the server should send
  debugLog: DebugLog;
  hook?: (request: protos.google.bigtable.v2.IReadRowsRequest) => void;
}

export interface ChunkGeneratorParameters extends SharedReadRowsParameters {
  keyFrom: number; // The first row in the generated chunks will start with this key
  keyTo: number; // The last row in the generated chunks will start with this key
}

export type ReadRowsWritableStream = ServerWritableStream<
  protos.google.bigtable.v2.IReadRowsRequest,
  protos.google.bigtable.v2.IReadRowsResponse
>;
