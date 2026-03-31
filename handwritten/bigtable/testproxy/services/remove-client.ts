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

import {ClientImplMaker, normalizeCallback} from './utils';

import {google} from '../protos/protos';
import {deleteBigtableClient} from './utils/bigtable-client';
type IRemoveClientRequest = google.bigtable.testproxy.IRemoveClientRequest;
type IRemoveClientResponse = google.bigtable.testproxy.IRemoveClientResponse;

export const removeClient: ClientImplMaker<
  IRemoveClientRequest,
  IRemoveClientResponse
> = ({clientMap}) =>
  normalizeCallback(async rawRequest => {
    const request = rawRequest.request;
    const {clientId} = request;
    const bigtable = clientMap.get(clientId!);

    if (bigtable) {
      await deleteBigtableClient(bigtable);
      await bigtable.close();
      clientMap.delete(clientId!);
    }
    return {};
  });
