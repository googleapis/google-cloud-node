// Copyright 2025 Google LLC
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

import {describe, it, before, after} from 'mocha';
import {Bigtable} from '../src';
import {ServiceError} from 'google-gax';
import {ClientSideMetricsConfigManager} from '../src/client-side-metrics/metrics-config-manager';
import {TestMetricsHandler} from '../test-common/test-metrics-handler';
import {
  OnAttemptCompleteData,
  OnOperationCompleteData,
} from '../src/client-side-metrics/metrics-handler';
import {OperationMetricsCollector} from '../src/client-side-metrics/operation-metrics-collector';
import {
  MethodName,
  StreamingState,
} from '../src/client-side-metrics/client-side-metrics-attributes';
import * as assert from 'assert';
import {status as GrpcStatus} from '@grpc/grpc-js';
import {createMetricsUnaryInterceptorProvider} from '../src/client-side-metrics/metric-interceptor';

const INSTANCE_ID = 'isolated-rmw-instance';
const TABLE_ID = 'isolated-rmw-table';
const ZONE = 'us-central2-a';
const CLUSTER = 'fake-cluster';
const COLUMN_FAMILY = 'traits';
const COLUMN_FAMILIES = [COLUMN_FAMILY];
const ROW_KEY = 'gwashington';
const COLUMN = 'teeth';

/**
 * Creates a Bigtable instance if it does not already exist.
 *
 * @param bigtable - The Bigtable client.
 * @param instanceId - The ID of the instance to create.
 * @param clusterId - The ID of the initial cluster in the instance.
 * @param locationId - The location (region) for the initial cluster.
 * @returns The created instance object if successful, otherwise logs a message and returns the existing instance.
 */
async function createInstance(
  bigtable: Bigtable,
  instanceId: string,
  clusterId: string,
  locationId: string,
) {
  const instance = bigtable.instance(instanceId);

  const [exists] = await instance.exists();
  if (exists) {
    console.log(`Instance ${instanceId} already exists.`);
    return instance;
  }

  const [i, operation] = await instance.create({
    clusters: [
      {
        id: clusterId,
        location: locationId,
        nodes: 3,
      },
    ],
    labels: {
      time_created: Date.now(),
    },
  });
  await operation.promise();
  console.log(`Created instance ${instanceId}`);
  return i;
}

/**
 * Creates a Bigtable table if it does not already exist.
 *
 * @param bigtable - The Bigtable client.
 * @param instanceId - The ID of the instance containing the table.
 * @param tableId - The ID of the table to create.
 * @param families - An array of column family names to create in the table.
 * @returns A promise that resolves with the created Table object.
 */
async function createTable(
  bigtable: Bigtable,
  instanceId: string,
  tableId: string,
  families: string[],
) {
  const instance = bigtable.instance(instanceId);
  const table = instance.table(tableId);

  const [exists] = await table.exists();
  if (exists) {
    console.log(`Table ${tableId} already exists.`);
    return table;
  }

  const [t] = await table.create({
    families: families,
  });
  const row = table.row(ROW_KEY);
  await row.save({
    [COLUMN_FAMILY]: {
      [COLUMN]: 'shiny',
    },
  });
  console.log(`Created table ${tableId}`);
  return t;
}

/**
 * Creates and returns a TestMetricsHandler instance for testing purposes.
 *
 * @returns A TestMetricsHandler instance with the projectId set to 'test-project-id'.
 */
function getTestMetricsHandler() {
  const testMetricsHandler = new TestMetricsHandler();
  testMetricsHandler.projectId = 'test-project-id';
  return testMetricsHandler;
}

/**
 * Asynchronously retrieves the project ID associated with the Bigtable client.
 *
 * @param bigtable - The Bigtable client instance.
 * @returns A promise that resolves with the project ID as a string.
 * @throws An error if the project ID cannot be retrieved.
 */
async function getProjectIdFromClient(bigtable: Bigtable): Promise<string> {
  return new Promise((resolve, reject) => {
    bigtable.getProjectId_((err, projectId) => {
      if (err) {
        reject(err);
      } else {
        resolve(projectId!);
      }
    });
  });
}

describe('Bigtable/ReadModifyWriteRowInterceptorMetrics', () => {
  let bigtable: Bigtable;
  let testMetricsHandler: TestMetricsHandler;

  before(async () => {
    bigtable = new Bigtable();
    await getProjectIdFromClient(bigtable);
    await createInstance(bigtable, INSTANCE_ID, CLUSTER, ZONE);
    await createTable(bigtable, INSTANCE_ID, TABLE_ID, COLUMN_FAMILIES);
    testMetricsHandler = getTestMetricsHandler();
    bigtable._metricsConfigManager = new ClientSideMetricsConfigManager([
      testMetricsHandler,
    ]);
  });

  after(async () => {
    const instance = bigtable.instance(INSTANCE_ID);
    await instance.delete();
  });

  it('should record and export correct metrics for ReadModifyWriteRow via interceptors', async () => {
    const instance = bigtable.instance(INSTANCE_ID);

    const table = instance.table(TABLE_ID);

    /*
    fakeReadModifyWriteRowMethod is just a fake method on a table that makes a
    call to the readWriteModifyRow grpc endpoint. It demonstrates what a method
    might look like when trying to make a unary call while extracting
    information from the headers and trailers that the server returns so that
    the extracted information can be recorded in client side metrics.
     */
    (table as any).fakeReadModifyWriteRowMethod = async () => {
      // 1. Create a metrics collector.
      const metricsCollector = new OperationMetricsCollector(
        table,
        MethodName.READ_MODIFY_WRITE_ROW,
        StreamingState.UNARY,
        (table as any).bigtable._metricsConfigManager!.metricsHandlers,
      );
      // 2. Tell the metrics collector an attempt has been started.
      metricsCollector.onOperationStart();
      metricsCollector.onAttemptStart();
      // 3. Make a unary call with gax options that include interceptors. The
      // interceptors are built from a method that hooks them up to the
      // metrics collector
      const responseArray = await new Promise((resolve, reject) => {
        bigtable.request(
          {
            client: 'BigtableClient',
            method: 'readModifyWriteRow',
            reqOpts: {
              tableName: table.name,
              rowKey: Buffer.from(ROW_KEY),
              rules: [
                {
                  familyName: COLUMN_FAMILY,
                  columnQualifier: Buffer.from(COLUMN),
                  appendValue: Buffer.from('-wood'),
                },
              ],
              appProfileId: undefined,
            },
            gaxOpts: createMetricsUnaryInterceptorProvider(
              {},
              metricsCollector,
            ),
          },
          (err: ServiceError | null, resp?: any) => {
            if (err) {
              reject(err);
            } else {
              resolve(resp);
            }
          },
        );
      });
      // 4. Tell the metrics collector the attempt is over
      metricsCollector.onAttemptComplete(GrpcStatus.OK);
      metricsCollector.onOperationComplete(GrpcStatus.OK, 0);
      // 5. Return results of method call to the user
      return responseArray;
    };

    await (table as any).fakeReadModifyWriteRowMethod();

    assert.strictEqual(testMetricsHandler.requestsHandled.length, 2);

    const attemptCompleteData = testMetricsHandler.requestsHandled.find(
      m => (m as {attemptLatency?: number}).attemptLatency !== undefined,
    ) as OnAttemptCompleteData | undefined;
    const operationCompleteData = testMetricsHandler.requestsHandled.find(
      m => (m as {operationLatency?: number}).operationLatency !== undefined,
    ) as OnOperationCompleteData | undefined;

    assert.ok(attemptCompleteData, 'OnAttemptCompleteData should be present');
    assert.ok(
      operationCompleteData,
      'OnOperationCompleteData should be present',
    );
    if (!attemptCompleteData || !operationCompleteData) {
      throw new Error('Metrics data is missing'); // Should be caught by asserts above
    }
    assert.strictEqual(
      attemptCompleteData.metricsCollectorData.method,
      MethodName.READ_MODIFY_WRITE_ROW,
    );
    assert.strictEqual(attemptCompleteData.status, 'OK');
    assert.strictEqual(
      attemptCompleteData.metricsCollectorData.table,
      TABLE_ID,
    );
    assert.strictEqual(
      attemptCompleteData.metricsCollectorData.instanceId,
      INSTANCE_ID,
    );
    assert.ok(attemptCompleteData.attemptLatency >= 0);
    assert(attemptCompleteData.serverLatency);
    assert.ok(attemptCompleteData.serverLatency >= 0);
    assert.strictEqual(attemptCompleteData.metricsCollectorData.zone, ZONE);
    assert.strictEqual(
      attemptCompleteData.metricsCollectorData.cluster,
      CLUSTER,
    );
    assert.strictEqual(attemptCompleteData.streaming, StreamingState.UNARY);

    assert.strictEqual(
      operationCompleteData.metricsCollectorData.method,
      MethodName.READ_MODIFY_WRITE_ROW,
    );
    assert.strictEqual(operationCompleteData.status, 'OK');
    assert.strictEqual(
      operationCompleteData.metricsCollectorData.table,
      TABLE_ID,
    );
    assert.strictEqual(
      operationCompleteData.metricsCollectorData.instanceId,
      INSTANCE_ID,
    );
    assert.ok(operationCompleteData.operationLatency >= 0);
    assert.strictEqual(operationCompleteData.retryCount, 0);
    assert.strictEqual(operationCompleteData.metricsCollectorData.zone, ZONE);
    assert.strictEqual(
      operationCompleteData.metricsCollectorData.cluster,
      CLUSTER,
    );
    assert.strictEqual(operationCompleteData.streaming, StreamingState.UNARY);
  });
});
