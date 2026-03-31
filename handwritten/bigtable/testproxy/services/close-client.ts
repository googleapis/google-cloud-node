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

import {google} from '../protos/protos';
import {ClientImplMaker, normalizeCallback} from './utils';
import {closeBigtableClient} from './utils/bigtable-client';
type ICloseClientRequest = google.bigtable.testproxy.ICloseClientRequest;
type ICloseClientResponse = google.bigtable.testproxy.ICloseClientResponse;

import {log} from './utils/log';

export const closeClient: ClientImplMaker<
  ICloseClientRequest,
  ICloseClientResponse
> = ({clientMap}) =>
  normalizeCallback(async rawRequest => {
    const request = rawRequest.request;
    const {clientId} = request;
    const bigtable = clientMap.get(clientId!);

    log.info(
      'close client %s (%s)',
      clientId,
      bigtable ? 'exists' : "doesn't exist",
    );

    if (bigtable) {
      // closeBigtableClient closes the BigtableClient, but not the Bigtable
      // object itself. We need to close the Bigtable object as well.
      await closeBigtableClient(bigtable);
      await bigtable.close();
      log.info('client %s closed', clientId);
    }
    return {};
  });
