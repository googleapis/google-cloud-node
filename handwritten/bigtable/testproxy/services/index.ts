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

import {bulkMutateRows} from './bulk-mutate-rows';
import {checkAndMutateRow} from './check-and-mutate-row';
import {ClientMap} from './utils/client-map';
import {closeClient} from './close-client';
import {createClient} from './create-client';
import {mutateRow} from './mutate-row';
import {readModifyWriteRow} from './read-modify-write-row';
import {readRow} from './read-row';
import {readRows} from './read-rows';
import {removeClient} from './remove-client';
import {sampleRowKeys} from './sample-row-keys';
import {executeQuery} from './execute-query';

import {google} from '../protos/protos';
import {handleUnaryCall} from '@grpc/grpc-js';
type CloudBigtableV2TestProxy =
  google.bigtable.testproxy.CloudBigtableV2TestProxy;

export {CloudBigtableV2TestProxy};

export interface ServiceImplementations {
  // We don't really care about the specific return types here.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: handleUnaryCall<any, any>;
}

export function getServicesImplementation(): ServiceImplementations {
  const clientMap = new ClientMap();

  return {
    bulkMutateRows: bulkMutateRows({clientMap}),
    checkAndMutateRow: checkAndMutateRow({clientMap}),
    createClient: createClient({clientMap}),
    closeClient: closeClient({clientMap}),
    mutateRow: mutateRow({clientMap}),
    readModifyWriteRow: readModifyWriteRow({clientMap}),
    readRow: readRow({clientMap}),
    readRows: readRows({clientMap}),
    removeClient: removeClient({clientMap}),
    sampleRowKeys: sampleRowKeys({clientMap}),
    executeQuery: executeQuery({clientMap}),
  };
}
