// Copyright 2026 Google LLC
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
import {Bigtable} from '../../../src';
import {ClientSideMetricsConfigManager} from '../../../src/client-side-metrics/metrics-config-manager';
import {IMetricsHandler} from '../../../src/client-side-metrics/metrics-handler';
import {BigtableClient} from '../../../src/v2';

const v2 = Symbol.for('v2');

export function createBigtableClient(bigtable: Bigtable) {
  const handlers: IMetricsHandler[] = [];
  bigtable._metricsConfigManager = new ClientSideMetricsConfigManager(handlers);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const bigtableAny = bigtable as any;

  // We'll store these in the Bigtable object so that we can access them from the
  // test proxy.
  if (bigtableAny[v2]) {
    throw Object.assign(new Error('should not have a BigtableClient already'), {
      code: grpc.status.ALREADY_EXISTS,
    });
  }
  bigtableAny[v2] = new BigtableClient(bigtable.options.BigtableClient);
}

export function getBigtableClient(bigtable: Bigtable): BigtableClient {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (bigtable as any)[v2];
}

export async function closeBigtableClient(bigtable: Bigtable) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const bigtableAny = bigtable as any;

  const bigtableClient = bigtableAny[v2] as BigtableClient;
  await bigtableClient.close();
}

export async function deleteBigtableClient(bigtable: Bigtable) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const bigtableAny = bigtable as any;

  await closeBigtableClient(bigtable);

  delete bigtableAny[v2];
}
