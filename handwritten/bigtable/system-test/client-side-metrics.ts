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

import {after, before, describe, it} from 'mocha';
import * as mocha from 'mocha';
import {
  CloudMonitoringExporter,
  ExportResult,
} from '../src/client-side-metrics/exporter';
import {ResourceMetrics} from '@opentelemetry/sdk-metrics';
import * as assert from 'assert';
import {GCPMetricsHandler} from '../src/client-side-metrics/gcp-metrics-handler';
import * as proxyquire from 'proxyquire';
import {Bigtable, BigtableOptions} from '../src';
import {Row} from '../src/row';
import {
  setupBigtable,
  setupBigtableWithInsert,
} from './client-side-metrics-setup-table';
import {TestMetricsHandler} from '../test-common/test-metrics-handler';
import {
  OnAttemptCompleteData,
  OnOperationCompleteData,
} from '../src/client-side-metrics/metrics-handler';
import {ClientOptions} from 'google-gax';
import {PassThrough} from 'stream';
import {generateChunksFromRequest} from '../test-common/utils/readRowsImpl';
import {TabularApiSurface} from '../src/tabular-api-surface';
import {MetricServiceClient} from '@google-cloud/monitoring';
import {generateId} from './common';

const SECOND_PROJECT_ID = 'cfdb-sdk-node-tests';
const instanceId1 = generateId('instance');
const instanceId2 = generateId('instance');
const tableId1 = 'my-table';
const tableId2 = 'my-table2';
const columnFamilyId = 'cf1';

class FakeHRTime {
  startTime = BigInt(0);

  bigint() {
    this.startTime += BigInt(1000000000);
    return this.startTime;
  }
}

/**
 * Retrieves a mocked Bigtable client without a metrics handler attached.
 *
 * This function is used for testing purposes to create a Bigtable client
 * with mocked dependencies, allowing for controlled simulation of stream
 * behavior and time measurements.  It does not include any metrics
 * handling.
 *
 * @param {BigtableOptions} options Options to configure the Bigtable client.
 * @param {FakeHRTime} hrtime An instance of FakeHRTime to control time.
 * @returns {Bigtable} A mocked Bigtable client.
 */
function getFakeBigtableWithoutHandler(
  options: BigtableOptions,
  hrtime: FakeHRTime,
) {
  const FakeTimedStream = proxyquire('../src/timed-stream.js', {
    'node:process': {
      hrtime,
    },
  }).TimedStream;
  const FakeCreateReadStreamInternal = proxyquire(
    '../src/utils/createReadStreamInternal.js',
    {
      '../timed-stream.js': {
        TimedStream: FakeTimedStream,
      },
    },
  ).createReadStreamInternal;
  const FakeTabularApiSurface = proxyquire('../src/tabular-api-surface.js', {
    './utils/createReadStreamInternal.js': {
      createReadStreamInternal: FakeCreateReadStreamInternal,
    },
  }).TabularApiSurface;
  const FakeTable: TabularApiSurface = proxyquire('../src/table.js', {
    './tabular-api-surface.js': {TabularApiSurface: FakeTabularApiSurface},
  }).Table;
  const FakeInstance = proxyquire('../src/instance.js', {
    './table.js': {Table: FakeTable},
  }).Instance;
  const FakeBigtable = proxyquire('../src/index.js', {
    './instance.js': {Instance: FakeInstance},
  }).Bigtable;
  return new FakeBigtable(options);
}

/**
 * This method retrieves a bigtable client that sends metrics to the metrics
 * handler class. The client also uses metrics collectors that have
 * deterministic timestamps associated with the various latency metrics so that
 * they can be tested.
 *
 * @param projectId
 * @param metricsHandlerClass
 * @param hrtime
 * @param apiEndpoint
 */
function getFakeBigtable(
  projectId: string,
  metricsHandlerClass: typeof GCPMetricsHandler | typeof TestMetricsHandler,
  hrtime: FakeHRTime,
  apiEndpoint?: string,
) {
  const FakeOperationsMetricsCollector = proxyquire(
    '../src/client-side-metrics/operation-metrics-collector.js',
    {
      'node:process': {
        hrtime,
      },
    },
  ).OperationMetricsCollector;
  const FakeClientSideMetricsConfigManager = proxyquire(
    '../src/client-side-metrics/metrics-config-manager.js',
    {
      './operation-metrics-collector.js': {
        OperationMetricsCollector: FakeOperationsMetricsCollector,
      },
    },
  ).ClientSideMetricsConfigManager;
  // Normally the options passed into the client are passed into the metrics
  // handler so when we mock out the metrics handler, it really should have
  // the same options that are passed into the client.
  const options = {
    projectId,
    apiEndpoint,
  };
  const metricHandler = new metricsHandlerClass(options);
  const newClient = getFakeBigtableWithoutHandler(options, hrtime);
  newClient._metricsConfigManager = new FakeClientSideMetricsConfigManager([
    metricHandler,
  ]);
  return newClient;
}

function getHandlerFromExporter(Exporter: typeof CloudMonitoringExporter) {
  return proxyquire('../src/client-side-metrics/gcp-metrics-handler.js', {
    './exporter': {
      CloudMonitoringExporter: Exporter,
    },
  }).GCPMetricsHandler;
}

function readRowsAssertionCheck(
  projectId: string,
  requestsHandled: (OnOperationCompleteData | OnAttemptCompleteData)[] = [],
  method: string,
  streaming: string,
) {
  assert.strictEqual(requestsHandled.length, 4);
  const firstRequest = requestsHandled[0] as any;
  // We would expect these parameters to be different every time so delete
  // them from the comparison after checking they exist.
  assert(firstRequest.attemptLatency);
  assert(firstRequest.serverLatency);
  delete firstRequest.attemptLatency;
  delete firstRequest.serverLatency;
  delete firstRequest.metricsCollectorData.appProfileId;
  assert.deepStrictEqual(firstRequest, {
    connectivityErrorCount: 0,
    streaming,
    status: 'OK',
    client_name: 'nodejs-bigtable',
    metricsCollectorData: {
      instanceId: instanceId1,
      table: 'my-table',
      cluster: 'fake-cluster3',
      zone: 'us-west1-c',
      method,
      projectId,
    },
  });
  const secondRequest = requestsHandled[1] as any;
  // We would expect these parameters to be different every time so delete
  // them from the comparison after checking they exist.
  assert(secondRequest.operationLatency);
  assert(secondRequest.firstResponseLatency);
  assert.strictEqual(secondRequest.applicationLatency, 0);
  delete secondRequest.operationLatency;
  delete secondRequest.firstResponseLatency;
  delete secondRequest.applicationLatency;
  delete secondRequest.metricsCollectorData.appProfileId;
  assert.deepStrictEqual(secondRequest, {
    status: 'OK',
    streaming,
    client_name: 'nodejs-bigtable',
    metricsCollectorData: {
      instanceId: instanceId1,
      cluster: 'fake-cluster3',
      zone: 'us-west1-c',
      method,
      table: 'my-table',
      projectId,
    },
    retryCount: 0,
  });
  // We would expect these parameters to be different every time so delete
  // them from the comparison after checking they exist.
  const thirdRequest = requestsHandled[2] as any;
  assert(thirdRequest.attemptLatency);
  assert(thirdRequest.serverLatency);
  delete thirdRequest.attemptLatency;
  delete thirdRequest.serverLatency;
  delete thirdRequest.metricsCollectorData.appProfileId;
  assert.deepStrictEqual(thirdRequest, {
    connectivityErrorCount: 0,
    streaming,
    status: 'OK',
    client_name: 'nodejs-bigtable',
    metricsCollectorData: {
      instanceId: instanceId1,
      table: 'my-table2',
      cluster: 'fake-cluster3',
      zone: 'us-west1-c',
      method,
      projectId,
    },
  });
  const fourthRequest = requestsHandled[3] as any;
  // We would expect these parameters to be different every time so delete
  // them from the comparison after checking they exist.
  assert(fourthRequest.operationLatency);
  assert(fourthRequest.firstResponseLatency);
  assert.strictEqual(fourthRequest.applicationLatency, 0);
  delete fourthRequest.operationLatency;
  delete fourthRequest.firstResponseLatency;
  delete fourthRequest.applicationLatency;
  delete fourthRequest.metricsCollectorData.appProfileId;
  assert.deepStrictEqual(fourthRequest, {
    status: 'OK',
    streaming,
    client_name: 'nodejs-bigtable',
    metricsCollectorData: {
      instanceId: instanceId1,
      cluster: 'fake-cluster3',
      zone: 'us-west1-c',
      method,
      table: 'my-table2',
      projectId,
    },
    retryCount: 0,
  });
}

function checkMultiRowCall(
  projectId: string,
  requestsHandled: (OnOperationCompleteData | OnAttemptCompleteData)[] = [],
) {
  readRowsAssertionCheck(
    projectId,
    requestsHandled,
    'Bigtable.ReadRows',
    'true',
  );
}

function checkSingleRowCall(
  projectId: string,
  requestsHandled: (OnOperationCompleteData | OnAttemptCompleteData)[] = [],
) {
  readRowsAssertionCheck(
    projectId,
    requestsHandled,
    'Bigtable.ReadRow',
    'false',
  );
}

/**
 * Checks if metrics have been published to Google Cloud Monitoring.
 *
 * This asynchronous function queries Google Cloud Monitoring to verify
 * that the expected metrics from the Bigtable client library have been
 * successfully published. It constructs a `MetricServiceClient` to
 * interact with the Cloud Monitoring API and retrieves time series data
 * for a predefined set of metrics. The test passes if time series data
 * is found for each of the specified metrics within a defined time
 * interval.
 *
 * @param {string} projectId The Google Cloud project ID where metrics are
 *   expected to be published.
 * @throws {Error} If no time series data is found for any of the specified
 *   metrics, indicating that the metrics were not successfully published to
 *   Cloud Monitoring.
 */
async function checkForPublishedMetrics(projectId: string) {
  const monitoringClient = new MetricServiceClient({projectId}); // Correct instantiation
  const now = Math.floor(Date.now() / 1000);
  const filters = [
    'metric.type="bigtable.googleapis.com/client/attempt_latencies"',
    'metric.type="bigtable.googleapis.com/client/operation_latencies"',
    'metric.type="bigtable.googleapis.com/client/retry_count"',
    'metric.type="bigtable.googleapis.com/client/server_latencies"',
    'metric.type="bigtable.googleapis.com/client/first_response_latencies"',
  ];
  for (let i = 0; i < filters.length; i++) {
    const filter = filters[i];
    const [series] = await monitoringClient.listTimeSeries({
      name: `projects/${projectId}`,
      interval: {
        endTime: {
          seconds: now,
          nanos: 0,
        },
        startTime: {
          seconds: now - 1000 * 60 * 60 * 24,
          nanos: 0,
        },
      },
      filter,
    });
    assert(series.length > 0);
  }
}

describe('Bigtable/ClientSideMetrics', () => {
  let defaultProjectId: string;

  before(async () => {
    /*
    For both the default project and the secondary project we need to create
    instances with some data in them so that the tests can collect all the
    metrics they would normally collect in a typical situation and compare
    those metrics against expected results.

    We need tests like "should send the metrics to Google Cloud Monitoring for a
    ReadRows call with a second project" that work with a second project because
    we want to ensure that when a user specifies a second project that the
    metrics actually get written for that other project instead of the default
    project.
     */
    for (const bigtable of [
      new Bigtable(),
      new Bigtable({projectId: SECOND_PROJECT_ID}),
    ]) {
      for (const instanceId of [instanceId1, instanceId2]) {
        await setupBigtableWithInsert(bigtable, columnFamilyId, instanceId, [
          tableId1,
          tableId2,
        ]);
      }
      defaultProjectId = await new Promise((resolve, reject) => {
        bigtable.getProjectId_((err: Error | null, projectId?: string) => {
          if (err) {
            reject(err);
          } else {
            resolve(projectId as string);
          }
        });
      });
    }
  });

  after(async () => {
    for (const bigtable of [
      new Bigtable(),
      new Bigtable({projectId: SECOND_PROJECT_ID}),
    ]) {
      try {
        // If the instance has been deleted already by another source, we don't
        // want this after hook to block the continuous integration pipeline.
        const instance = bigtable.instance(instanceId1);
        await instance.delete({});
      } catch (e) {
        console.warn('The instance has been deleted already');
      }
      try {
        // If the instance has been deleted already by another source, we don't
        // want this after hook to block the continuous integration pipeline.
        const instance = bigtable.instance(instanceId2);
        await instance.delete({});
      } catch (e) {
        console.warn('The instance has been deleted already');
      }
    }
  });

  describe('Bigtable/ClientSideMetricsToGCM', () => {
    // This test suite ensures that for each test all the export calls are
    // successful even when multiple instances and tables are created.
    async function mockBigtable(
      projectId: string,
      done: mocha.Done,
      apiEndpoint?: string,
    ) {
      /*
      The exporter is called every x seconds, but we only want to test the value
      it receives once. Since done cannot be called multiple times in mocha,
      exported variable ensures we only test the value export receives one time.
      */
      let exported = false;
      /*
      We need to create a timeout here because if we don't then mocha shuts down
      the test as it is sleeping before the GCPMetricsHandler has a chance to
      export the data.
      */
      const timeout = setTimeout(() => {
        if (!exported) {
          done(
            new Error(
              'The exporters have not completed yet and the timeout is over',
            ),
          );
        }
      }, 120000);

      class TestExporter extends CloudMonitoringExporter {
        constructor(options: ClientOptions) {
          super(options);
        }

        async export(
          metrics: ResourceMetrics,
          resultCallback: (result: ExportResult) => void,
        ): Promise<void> {
          try {
            await super.export(metrics, (result: ExportResult) => {
              if (!exported) {
                exported = true;
                try {
                  clearTimeout(timeout);
                  // The test passes when the code is 0 because that means the
                  // result from calling export was successful.
                  assert.strictEqual(result.code, 0);
                  resultCallback({code: 0});
                  void checkForPublishedMetrics(projectId)
                    .then(() => {
                      done();
                    })
                    .catch(err => {
                      done(new Error('Metrics have not been published'));
                      done(err);
                    });
                } catch (error) {
                  // The code here isn't 0 so we report the original error to the mocha test runner.
                  done(result);
                  done(error);
                }
              } else {
                resultCallback({code: 0});
              }
            });
          } catch (error) {
            done(error);
          }
        }
      }

      return getFakeBigtable(
        projectId,
        getHandlerFromExporter(TestExporter),
        new FakeHRTime(),
        apiEndpoint,
      );
    }

    it('should send the metrics to Google Cloud Monitoring for a ReadRows call', done => {
      (async () => {
        try {
          const bigtable = await mockBigtable(defaultProjectId, done);
          for (const instanceId of [instanceId1, instanceId2]) {
            await setupBigtable(bigtable, columnFamilyId, instanceId, [
              tableId1,
              tableId2,
            ]);
            const instance = bigtable.instance(instanceId);
            const table = instance.table(tableId1);
            await table.getRows();
            const table2 = instance.table(tableId2);
            await table2.getRows();
          }
        } catch (e) {
          done(new Error('An error occurred while running the script'));
          done(e);
        }
      })().catch(err => {
        throw err;
      });
    });
    it('should send the metrics to Google Cloud Monitoring for a custom endpoint', done => {
      (async () => {
        try {
          const bigtable = await mockBigtable(
            defaultProjectId,
            done,
            'bogus-endpoint',
          );
          const instance = bigtable.instance(instanceId1);
          const table = instance.table(tableId1);
          try {
            // This call will fail because we are trying to hit a bogus endpoint.
            // The idea here is that we just want to record at least one metric
            // so that the exporter gets executed.
            await table.getRows();
          } catch (e: unknown) {
            // Try blocks just need a catch/finally block.
          }
        } catch (e) {
          done(new Error('An error occurred while running the script'));
          done(e);
        }
      })().catch(err => {
        throw err;
      });
    });
    it('should send the metrics to Google Cloud Monitoring for a ReadRows call with a second project', done => {
      (async () => {
        try {
          // This is the second project the test is configured to work with:
          const projectId = SECOND_PROJECT_ID;
          const bigtable = await mockBigtable(projectId, done);
          for (const instanceId of [instanceId1, instanceId2]) {
            await setupBigtable(bigtable, columnFamilyId, instanceId, [
              tableId1,
              tableId2,
            ]);
            const instance = bigtable.instance(instanceId);
            const table = instance.table(tableId1);
            await table.getRows();
            const table2 = instance.table(tableId2);
            await table2.getRows();
          }
        } catch (e) {
          done(new Error('An error occurred while running the script'));
          done(e);
        }
      })().catch(err => {
        throw err;
      });
    });
  });
  describe('Bigtable/ClientSideMetricsToGCMTimeout', () => {
    // This test suite simulates a situation where the user creates multiple
    // clients and ensures that the exporter doesn't produce any errors even
    // when multiple clients are attempting an export.
    async function mockBigtable(
      projectId: string,
      done: mocha.Done,
      onExportSuccess?: () => void,
    ) {
      class TestExporter extends CloudMonitoringExporter {
        constructor(options: ClientOptions) {
          super(options);
        }

        async export(
          metrics: ResourceMetrics,
          resultCallback: (result: ExportResult) => void,
        ): Promise<void> {
          try {
            await super.export(metrics, async (result: ExportResult) => {
              try {
                // The code is expected to be 0 because the
                // result from calling export was successful.
                assert.strictEqual(result.code, 0);
                resultCallback({code: 0});
                if (onExportSuccess) {
                  onExportSuccess();
                }
              } catch (error) {
                // The code here isn't 0 so we report the original error to the
                // mocha test runner.
                // The test fails here because it means that an export was
                // unsuccessful.
                done(result);
                done(error);
                resultCallback({code: 0});
              }
            });
          } catch (error) {
            done(error);
            resultCallback({code: 0});
          }
        }
      }

      /*
      Below we mock out the table so that it sends the metrics to a test exporter
      that will still send the metrics to Google Cloud Monitoring, but then also
      ensure the export was successful and pass the test with code 0 if it is
      successful.
       */
      return getFakeBigtable(
        projectId,
        getHandlerFromExporter(TestExporter),
        new FakeHRTime(),
      );
    }

    it('should send the metrics to Google Cloud Monitoring for a ReadRows call', done => {
      let testFinished = false;
      /*
      We need to create a timeout here because if we don't then mocha shuts down
      the test as it is sleeping before the GCPMetricsHandler has a chance to
      export the data. When the timeout is finished, if there were no export
      errors then the test passes.
      */
      setTimeout(() => {
        testFinished = true;
        done();
      }, 120000);
      (async () => {
        try {
          const bigtable1 = await mockBigtable(defaultProjectId, done);
          const bigtable2 = await mockBigtable(defaultProjectId, done);
          for (const bigtable of [bigtable1, bigtable2]) {
            for (const instanceId of [instanceId1, instanceId2]) {
              await setupBigtable(bigtable, columnFamilyId, instanceId, [
                tableId1,
                tableId2,
              ]);
              const instance = bigtable.instance(instanceId);
              const table = instance.table(tableId1);
              await table.getRows();
              const table2 = instance.table(tableId2);
              await table2.getRows();
            }
          }
        } catch (e) {
          done(new Error('An error occurred while running the script'));
          done(e);
        }
      })().catch(err => {
        throw err;
      });
    });
    it('should send the metrics to Google Cloud Monitoring for a ReadRows call with thirty clients', done => {
      /*
      We need to create a timeout here because if we don't then mocha shuts down
      the test as it is sleeping before the GCPMetricsHandler has a chance to
      export the data. When the timeout is finished, if there were no export
      errors then the test passes.
      */
      const testTimeout = setTimeout(() => {
        done(new Error('The test timed out'));
      }, 480000);
      let testComplete = false;
      const numClients = 30;
      (async () => {
        try {
          const bigtableList = [];
          const completedSet = new Set();
          for (
            let bigtableCount = 0;
            bigtableCount < numClients;
            bigtableCount++
          ) {
            const currentCount = bigtableCount;
            const onExportSuccess = () => {
              completedSet.add(currentCount);
              if (completedSet.size === numClients) {
                // If every client has completed the export then pass the test.
                clearTimeout(testTimeout);
                if (!testComplete) {
                  testComplete = true;
                  done();
                }
              }
            };
            bigtableList.push(
              await mockBigtable(defaultProjectId, done, onExportSuccess),
            );
          }
          for (const bigtable of bigtableList) {
            for (const instanceId of [instanceId1, instanceId2]) {
              await setupBigtable(bigtable, columnFamilyId, instanceId, [
                tableId1,
                tableId2,
              ]);
              const instance = bigtable.instance(instanceId);
              const table = instance.table(tableId1);
              await table.getRows();
              const table2 = instance.table(tableId2);
              await table2.getRows();
            }
          }
        } catch (e) {
          done(e);
          done(new Error('An error occurred while running the script'));
        }
      })().catch(err => {
        throw err;
      });
    });
  });
  describe('Bigtable/ClientSideMetricsToMetricsHandler', () => {
    /**
     * This method is called to do a bunch of basic assertion checks that are
     * expected to pass when a client makes two getRows calls.
     *
     * @param projectId The projectId the request was made with
     * @param requestsHandled The requests handled by the mock metrics handler
     */
    function standardAssertionChecks(
      projectId: string,
      requestsHandled: (OnOperationCompleteData | OnAttemptCompleteData)[],
    ) {
      const firstRequest = requestsHandled[0] as any;
      // We would expect these parameters to be different every time so delete
      // them from the comparison after checking they exist.
      assert(firstRequest.attemptLatency);
      assert(firstRequest.serverLatency);
      delete firstRequest.attemptLatency;
      delete firstRequest.serverLatency;
      delete firstRequest.metricsCollectorData.appProfileId;
      assert.deepStrictEqual(firstRequest, {
        connectivityErrorCount: 0,
        streaming: 'true',
        status: 'OK',
        client_name: 'nodejs-bigtable',
        metricsCollectorData: {
          instanceId: instanceId1,
          table: 'my-table',
          cluster: 'fake-cluster3',
          zone: 'us-west1-c',
          method: 'Bigtable.ReadRows',
          projectId,
        },
      });
      const secondRequest = requestsHandled[1] as any;
      // We would expect these parameters to be different every time so delete
      // them from the comparison after checking they exist.
      assert(secondRequest.operationLatency);
      assert(secondRequest.firstResponseLatency);
      assert.strictEqual(secondRequest.applicationLatency, 0);
      delete secondRequest.operationLatency;
      delete secondRequest.firstResponseLatency;
      delete secondRequest.applicationLatency;
      delete secondRequest.metricsCollectorData.appProfileId;
      assert.deepStrictEqual(secondRequest, {
        status: 'OK',
        streaming: 'true',
        client_name: 'nodejs-bigtable',
        metricsCollectorData: {
          instanceId: instanceId1,
          cluster: 'fake-cluster3',
          zone: 'us-west1-c',
          method: 'Bigtable.ReadRows',
          table: 'my-table',
          projectId,
        },
        retryCount: 0,
      });
      // We would expect these parameters to be different every time so delete
      // them from the comparison after checking they exist.
      const thirdRequest = requestsHandled[2] as any;
      assert(thirdRequest.attemptLatency);
      assert(thirdRequest.serverLatency);
      delete thirdRequest.attemptLatency;
      delete thirdRequest.serverLatency;
      delete thirdRequest.metricsCollectorData.appProfileId;
      assert.deepStrictEqual(thirdRequest, {
        connectivityErrorCount: 0,
        streaming: 'true',
        status: 'OK',
        client_name: 'nodejs-bigtable',
        metricsCollectorData: {
          instanceId: instanceId1,
          table: 'my-table2',
          cluster: 'fake-cluster3',
          zone: 'us-west1-c',
          method: 'Bigtable.ReadRows',
          projectId,
        },
      });
      const fourthRequest = requestsHandled[3] as any;
      // We would expect these parameters to be different every time so delete
      // them from the comparison after checking they exist.
      assert(fourthRequest.operationLatency);
      assert(fourthRequest.firstResponseLatency);
      assert.strictEqual(fourthRequest.applicationLatency, 0);
      delete fourthRequest.operationLatency;
      delete fourthRequest.firstResponseLatency;
      delete fourthRequest.applicationLatency;
      delete fourthRequest.metricsCollectorData.appProfileId;
      assert.deepStrictEqual(fourthRequest, {
        status: 'OK',
        streaming: 'true',
        client_name: 'nodejs-bigtable',
        metricsCollectorData: {
          instanceId: instanceId1,
          cluster: 'fake-cluster3',
          zone: 'us-west1-c',
          method: 'Bigtable.ReadRows',
          table: 'my-table2',
          projectId,
        },
        retryCount: 0,
      });
    }

    /**
     * This method is called to check that the requests handled from the
     * readRows streaming calls have the right application latencies and other
     * appropriate metrics.
     *
     * @param projectId The projectId the request was made with
     * @param requestsHandled The requests handled by the mock metrics handler
     */
    function applicationLatenciesChecksHandlers(
      projectId: string,
      requestsHandled: (OnOperationCompleteData | OnAttemptCompleteData)[],
    ) {
      const compareValue = [
        {
          serverLatency: undefined,
          attemptLatency: 23000,
          connectivityErrorCount: 0,
          streaming: 'true',
          status: 'OK',
          client_name: 'nodejs-bigtable',
          metricsCollectorData: {
            instanceId: instanceId1,
            table: 'my-table',
            cluster: '<unspecified>',
            zone: 'global',
            method: 'Bigtable.ReadRows',
            projectId,
          },
        },
        {
          status: 'OK',
          streaming: 'true',
          metricsCollectorData: {
            instanceId: instanceId1,
            table: 'my-table',
            cluster: '<unspecified>',
            zone: 'global',
            method: 'Bigtable.ReadRows',
            projectId,
          },
          client_name: 'nodejs-bigtable',
          operationLatency: 25000,
          retryCount: 0,
          firstResponseLatency: 2000,
          applicationLatency: 18000, // From the stream for loop
        },
        {
          attemptLatency: 2000,
          serverLatency: undefined,
          connectivityErrorCount: 0,
          streaming: 'true',
          status: 'OK',
          client_name: 'nodejs-bigtable',
          metricsCollectorData: {
            instanceId: instanceId1,
            table: 'my-table2',
            cluster: '<unspecified>',
            zone: 'global',
            method: 'Bigtable.ReadRows',
            projectId,
          },
        },
        {
          status: 'OK',
          streaming: 'true',
          metricsCollectorData: {
            instanceId: instanceId1,
            table: 'my-table2',
            cluster: '<unspecified>',
            zone: 'global',
            method: 'Bigtable.ReadRows',
            projectId,
          },
          client_name: 'nodejs-bigtable',
          operationLatency: 4000,
          retryCount: 0,
          firstResponseLatency: 2000,
          applicationLatency: 0, // This is from the getRows call.
        },
      ];
      assert.deepStrictEqual(requestsHandled, compareValue);
    }

    /**
     * This method is called to check that the requests handled from the
     * readRows streaming calls have the right application latencies and other
     * appropriate metrics.
     *
     * @param projectId The projectId the request was made with
     * @param requestsHandled The requests handled by the mock metrics handler
     */
    function applicationLatenciesChecksIterative(
      projectId: string,
      requestsHandled: (OnOperationCompleteData | OnAttemptCompleteData)[],
    ) {
      const compareValue = [
        {
          serverLatency: undefined,
          attemptLatency: 28000,
          connectivityErrorCount: 0,
          streaming: 'true',
          status: 'OK',
          client_name: 'nodejs-bigtable',
          metricsCollectorData: {
            instanceId: instanceId1,
            table: 'my-table',
            cluster: '<unspecified>',
            zone: 'global',
            method: 'Bigtable.ReadRows',
            projectId,
          },
        },
        {
          status: 'OK',
          streaming: 'true',
          metricsCollectorData: {
            instanceId: instanceId1,
            table: 'my-table',
            cluster: '<unspecified>',
            zone: 'global',
            method: 'Bigtable.ReadRows',
            projectId,
          },
          client_name: 'nodejs-bigtable',
          operationLatency: 30000,
          retryCount: 0,
          firstResponseLatency: 2000,
          applicationLatency: 16000, // From the stream for loop
        },
        {
          attemptLatency: 2000,
          serverLatency: undefined,
          connectivityErrorCount: 0,
          streaming: 'true',
          status: 'OK',
          client_name: 'nodejs-bigtable',
          metricsCollectorData: {
            instanceId: instanceId1,
            table: 'my-table2',
            cluster: '<unspecified>',
            zone: 'global',
            method: 'Bigtable.ReadRows',
            projectId,
          },
        },
        {
          status: 'OK',
          streaming: 'true',
          metricsCollectorData: {
            instanceId: instanceId1,
            table: 'my-table2',
            cluster: '<unspecified>',
            zone: 'global',
            method: 'Bigtable.ReadRows',
            projectId,
          },
          client_name: 'nodejs-bigtable',
          operationLatency: 4000,
          retryCount: 0,
          firstResponseLatency: 2000,
          applicationLatency: 0, // This is from the getRows call.
        },
      ];
      assert.deepStrictEqual(requestsHandled, compareValue);
    }

    async function mockBigtable(
      projectId: string,
      done: mocha.Done,
      checkFn: (
        projectId: string,
        requestsHandled: (OnOperationCompleteData | OnAttemptCompleteData)[],
      ) => void,
      hrtime: FakeHRTime,
    ) {
      let handlerRequestCount = 0;
      class TestGCPMetricsHandler extends TestMetricsHandler {
        projectId = projectId;
        onOperationComplete(data: OnOperationCompleteData) {
          handlerRequestCount++;
          try {
            super.onOperationComplete(data);
            if (handlerRequestCount > 1) {
              assert.strictEqual(this.requestsHandled.length, 4);
              checkFn(projectId, this.requestsHandled);
              done();
            }
          } catch (e) {
            done(e);
          }
        }
      }

      const bigtable = getFakeBigtable(
        projectId,
        TestGCPMetricsHandler,
        hrtime,
      );
      await setupBigtable(bigtable, columnFamilyId, instanceId1, [
        tableId1,
        tableId2,
      ]);
      return bigtable;
    }

    it('should send the metrics to the metrics handler for a ReadRows call', done => {
      (async () => {
        const projectId = defaultProjectId;
        const bigtable = await mockBigtable(
          projectId,
          done,
          standardAssertionChecks,
          new FakeHRTime(),
        );
        const instance = bigtable.instance(instanceId1);
        const table = instance.table(tableId1);
        await table.getRows();
        const table2 = instance.table(tableId2);
        await table2.getRows();
      })().catch(err => {
        throw err;
      });
    });
    it('should pass the projectId to the metrics handler properly', done => {
      (async () => {
        try {
          const projectId = SECOND_PROJECT_ID;
          const bigtable = await mockBigtable(
            projectId,
            done,
            standardAssertionChecks,
            new FakeHRTime(),
          );
          const instance = bigtable.instance(instanceId1);
          const table = instance.table(tableId1);
          await table.getRows();
          const table2 = instance.table(tableId2);
          await table2.getRows();
        } catch (e) {
          done(e);
        }
      })().catch(err => {
        throw err;
      });
    });
    it('should send the metrics to the metrics handler for a single row read', done => {
      (async () => {
        try {
          const projectId = SECOND_PROJECT_ID;
          const bigtable = await mockBigtable(
            projectId,
            done,
            checkSingleRowCall,
            new FakeHRTime(),
          );
          const instance = bigtable.instance(instanceId1);
          const table = instance.table(tableId1);
          const row = new Row(table, 'rowId');
          await row.get();
          const table2 = instance.table(tableId2);
          const row2 = new Row(table2, 'rowId');
          await row2.get();
        } catch (e) {
          done(e);
        }
      })().catch(err => {
        throw err;
      });
    });
    it('should record the right metrics when handling rows through readrows stream', done => {
      (async () => {
        try {
          const hrtime = new FakeHRTime();
          const bigtable = await mockBigtable(
            SECOND_PROJECT_ID,
            done,
            applicationLatenciesChecksHandlers,
            hrtime,
          );
          const instance = bigtable.instance(instanceId1);
          const table = instance.table(tableId1);
          // Mock stream behaviour:
          // @ts-ignore
          table.bigtable.request = () => {
            const chunks = generateChunksFromRequest(
              {},
              {
                chunkSize: 1,
                valueSize: 1,
                errorAfterChunkNo: 2,
                keyFrom: 0,
                keyTo: 3,
                chunksPerResponse: 1,
                debugLog: () => {},
              },
            );
            const data = {
              lastRowKey: chunks[2].rowKey,
              chunks,
            };
            const stream = new PassThrough({
              objectMode: true,
            });

            setImmediate(() => {
              stream.emit('data', data);
              stream.emit('end');
            });

            return stream;
          };
          const stream = table.createReadStream();
          stream.on('data', () => {
            // Simulate an application that takes 5 seconds between row reads.
            hrtime.bigint();
            hrtime.bigint();
            hrtime.bigint();
            hrtime.bigint();
            hrtime.bigint();
          });
          stream.on('end', async () => {
            const table2 = instance.table(tableId2);
            await table2.getRows();
          });
        } catch (e) {
          done(e);
        }
      })().catch(err => {
        throw err;
      });
    });
    it('should record the right metrics when iterating through readrows stream', done => {
      (async () => {
        try {
          const hrtime = new FakeHRTime();
          const bigtable = await mockBigtable(
            SECOND_PROJECT_ID,
            done,
            applicationLatenciesChecksIterative,
            hrtime,
          );
          const instance = bigtable.instance(instanceId1);
          const table = instance.table(tableId1);
          // Mock stream behaviour:
          // @ts-ignore
          table.bigtable.request = () => {
            const chunks = generateChunksFromRequest(
              {},
              {
                chunkSize: 1,
                valueSize: 1,
                errorAfterChunkNo: 2,
                keyFrom: 0,
                keyTo: 3,
                chunksPerResponse: 1,
                debugLog: () => {},
              },
            );
            const data = {
              lastRowKey: chunks[2].rowKey,
              chunks,
            };
            const stream = new PassThrough({
              objectMode: true,
            });

            setImmediate(() => {
              stream.emit('data', data);
              stream.emit('end');
            });

            return stream;
          };
          const stream = table.createReadStream();
          for await (const row of stream) {
            // Simulate an application that takes 5 seconds between row reads.
            hrtime.bigint();
            hrtime.bigint();
            hrtime.bigint();
            hrtime.bigint();
            hrtime.bigint();
          }
          const table2 = instance.table(tableId2);
          await table2.getRows();
        } catch (e) {
          done(e);
        }
      })().catch(err => {
        throw err;
      });
    });
  });
});
