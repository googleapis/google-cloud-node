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
import {Bigtable, RawFilter} from '../src';
import {Mutation} from '../src/mutation';
import {Row} from '../src/row';
import {
  setupBigtableWithInsert,
  setupBigtable,
} from './client-side-metrics-setup-table';
import {TestMetricsHandler} from '../test-common/test-metrics-handler';
import {
  OnAttemptCompleteData,
  OnOperationCompleteData,
} from '../src/client-side-metrics/metrics-handler';
import {ClientOptions} from 'google-gax';
import {ClientSideMetricsConfigManager} from '../src/client-side-metrics/metrics-config-manager';
import {MetricServiceClient} from '@google-cloud/monitoring';
import {MethodName} from '../src/client-side-metrics/client-side-metrics-attributes';
import {generateId} from './common';

const SECOND_PROJECT_ID = 'cfdb-sdk-node-tests';
const instanceId1 = generateId('instance');
const instanceId2 = generateId('instance');
const tableId1 = 'my-table';
const tableId2 = 'my-table2';
const columnFamilyId = 'cf1';

function getFakeBigtable(
  projectId: string,
  metricsHandlerClass: typeof GCPMetricsHandler | typeof TestMetricsHandler,
  apiEndpoint?: string,
) {
  const metricHandler = new metricsHandlerClass({
    apiEndpoint,
  } as unknown as ClientOptions & {value: string});
  const newClient = new Bigtable({
    projectId,
    apiEndpoint,
  });
  newClient._metricsConfigManager = new ClientSideMetricsConfigManager([
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

function checkFirstResponseLatency(requestHandled: OnOperationCompleteData) {
  assert(
    Object.prototype.hasOwnProperty.call(
      requestHandled,
      'firstResponseLatency',
    ),
  );
  if (
    requestHandled.metricsCollectorData.method === MethodName.READ_ROWS ||
    requestHandled.metricsCollectorData.method === MethodName.READ_ROW
  ) {
    assert(requestHandled.firstResponseLatency);
    assert(requestHandled.firstResponseLatency > 0);
  } else {
    assert.strictEqual(requestHandled.firstResponseLatency, 0);
  }
  delete requestHandled.firstResponseLatency;
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
  checkFirstResponseLatency(secondRequest);
  assert(secondRequest.operationLatency);
  delete secondRequest.operationLatency;
  assert(secondRequest.applicationLatency < 10);
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
  checkFirstResponseLatency(fourthRequest);
  assert(fourthRequest.operationLatency);
  assert(fourthRequest.applicationLatency < 10);
  delete fourthRequest.operationLatency;
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

function checkCheckAndMutateCall(
  projectId: string,
  requestsHandled: (OnOperationCompleteData | OnAttemptCompleteData)[] = [],
) {
  readRowsAssertionCheck(
    projectId,
    requestsHandled,
    'Bigtable.CheckAndMutateRow',
    'false',
  );
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

function checkMutateRowsCall(
  projectId: string,
  requestsHandled: (OnOperationCompleteData | OnAttemptCompleteData)[] = [],
) {
  readRowsAssertionCheck(
    projectId,
    requestsHandled,
    'Bigtable.MutateRows',
    'true',
  );
}

function checkSampleRowKeysCall(
  projectId: string,
  requestsHandled: (OnOperationCompleteData | OnAttemptCompleteData)[] = [],
) {
  readRowsAssertionCheck(
    projectId,
    requestsHandled,
    'Bigtable.SampleRowKeys',
    'true',
  );
}

function checkMutateRowCall(
  projectId: string,
  requestsHandled: (OnOperationCompleteData | OnAttemptCompleteData)[] = [],
) {
  readRowsAssertionCheck(
    projectId,
    requestsHandled,
    'Bigtable.MutateRow',
    'false',
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

function checkReadModifyWriteRowCall(
  projectId: string,
  requestsHandled: (OnOperationCompleteData | OnAttemptCompleteData)[] = [],
) {
  readRowsAssertionCheck(
    projectId,
    requestsHandled,
    'Bigtable.ReadModifyWriteRow',
    'false',
  );
}

const entry = {
  cf1: {
    column: 1,
  },
};

const mutation = {
  key: 'rowId',
  data: entry,
  method: Mutation.methods.INSERT,
};

const filter: RawFilter = {
  family: 'cf1',
  value: 'alincoln',
};

const mutations = [
  {
    method: 'delete',
    data: ['cf1:alincoln'],
  },
];

const rules = [
  {
    column: 'cf1:column',
    append: 'c',
  },
];

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
  const monitoringClient = new MetricServiceClient(); // Correct instantiation
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

describe('Bigtable/ClientSideMetricsAllMethods', () => {
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
                  void checkForPublishedMetrics(projectId).then(() => {
                    done();
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
        apiEndpoint,
      );
    }

    describe('SampleRowKeys', () => {
      it('should send the metrics to Google Cloud Monitoring for a SampleRowKeys call', done => {
        (async () => {
          try {
            const bigtable = await mockBigtable(defaultProjectId, done);
            for (const instanceId of [instanceId1, instanceId2]) {
              await setupBigtableWithInsert(
                bigtable,
                columnFamilyId,
                instanceId,
                [tableId1, tableId2],
              );
              const instance = bigtable.instance(instanceId);
              const table = instance.table(tableId1);
              await table.sampleRowKeys();
              const table2 = instance.table(tableId2);
              await table2.sampleRowKeys();
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
              await table.sampleRowKeys();
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
      it('should send the metrics to Google Cloud Monitoring for a SampleRowKeys call with a second project', done => {
        (async () => {
          try {
            // This is the second project the test is configured to work with:
            const projectId = SECOND_PROJECT_ID;
            const bigtable = await mockBigtable(projectId, done);
            for (const instanceId of [instanceId1, instanceId2]) {
              await setupBigtableWithInsert(
                bigtable,
                columnFamilyId,
                instanceId,
                [tableId1, tableId2],
              );
              const instance = bigtable.instance(instanceId);
              const table = instance.table(tableId1);
              await table.sampleRowKeys();
              const table2 = instance.table(tableId2);
              await table2.sampleRowKeys();
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
    describe('ReadRows', () => {
      it('should send the metrics to Google Cloud Monitoring for a ReadRows call', done => {
        (async () => {
          try {
            const bigtable = await mockBigtable(defaultProjectId, done);
            for (const instanceId of [instanceId1, instanceId2]) {
              await setupBigtableWithInsert(
                bigtable,
                columnFamilyId,
                instanceId,
                [tableId1, tableId2],
              );
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
              await setupBigtableWithInsert(
                bigtable,
                columnFamilyId,
                instanceId,
                [tableId1, tableId2],
              );
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
    describe('ReadModifyWriteRow', () => {
      it('should send the metrics to Google Cloud Monitoring for a ReadModifyWriteRow call', done => {
        (async () => {
          try {
            const bigtable = await mockBigtable(defaultProjectId, done);
            for (const instanceId of [instanceId1, instanceId2]) {
              await setupBigtableWithInsert(
                bigtable,
                columnFamilyId,
                instanceId,
                [tableId1, tableId2],
              );
              const instance = bigtable.instance(instanceId);
              const table = instance.table(tableId1);
              const row = table.row(columnFamilyId);
              await row.createRules(rules);
              const table2 = instance.table(tableId2);
              const row2 = table2.row(columnFamilyId);
              await row2.createRules(rules);
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
              const row = table.row(columnFamilyId);
              await row.createRules(rules);
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
      it('should send the metrics to Google Cloud Monitoring for a ReadModifyWriteRow call with a second project', done => {
        (async () => {
          try {
            // This is the second project the test is configured to work with:
            const projectId = SECOND_PROJECT_ID;
            const bigtable = await mockBigtable(projectId, done);
            for (const instanceId of [instanceId1, instanceId2]) {
              await setupBigtableWithInsert(
                bigtable,
                columnFamilyId,
                instanceId,
                [tableId1, tableId2],
              );
              const instance = bigtable.instance(instanceId);
              const table = instance.table(tableId1);
              const row = table.row(columnFamilyId);
              await row.createRules(rules);
              const table2 = instance.table(tableId2);
              const row2 = table2.row(columnFamilyId);
              await row2.createRules(rules);
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
    describe('MutateRows', () => {
      it('should send the metrics to Google Cloud Monitoring for a MutateRows call', done => {
        (async () => {
          try {
            const bigtable = await mockBigtable(defaultProjectId, done);
            for (const instanceId of [instanceId1, instanceId2]) {
              await setupBigtableWithInsert(
                bigtable,
                columnFamilyId,
                instanceId,
                [tableId1, tableId2],
              );
              const instance = bigtable.instance(instanceId);
              const table = instance.table(tableId1);
              await table.mutate(mutation);
              const table2 = instance.table(tableId2);
              await table2.mutate(mutation);
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
              await table.mutate(mutation);
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
      it('should send the metrics to Google Cloud Monitoring for a MutateRows call with a second project', done => {
        (async () => {
          try {
            // This is the second project the test is configured to work with:
            const projectId = SECOND_PROJECT_ID;
            const bigtable = await mockBigtable(projectId, done);
            for (const instanceId of [instanceId1, instanceId2]) {
              await setupBigtableWithInsert(
                bigtable,
                columnFamilyId,
                instanceId,
                [tableId1, tableId2],
              );
              const instance = bigtable.instance(instanceId);
              const table = instance.table(tableId1);
              await table.mutate(mutation);
              const table2 = instance.table(tableId2);
              await table2.mutate(mutation);
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
    describe('MutateRow', () => {
      it('should send the metrics to Google Cloud Monitoring for a single point MutateRows call', done => {
        (async () => {
          try {
            const bigtable = await mockBigtable(defaultProjectId, done);
            for (const instanceId of [instanceId1, instanceId2]) {
              await setupBigtableWithInsert(
                bigtable,
                columnFamilyId,
                instanceId,
                [tableId1, tableId2],
              );
              const instance = bigtable.instance(instanceId);
              const table = instance.table(tableId1);
              const row = table.row('gwashington');
              await row.save(entry);
              const table2 = instance.table(tableId2);
              const row2 = table2.row('gwashington');
              await row2.save(entry);
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
              const row = table.row('gwashington');
              await row.save(entry);
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
      it('should send the metrics to Google Cloud Monitoring for a MutateRow call with a second project and a single point', done => {
        (async () => {
          try {
            // This is the second project the test is configured to work with:
            const projectId = SECOND_PROJECT_ID;
            const bigtable = await mockBigtable(projectId, done);
            for (const instanceId of [instanceId1, instanceId2]) {
              await setupBigtableWithInsert(
                bigtable,
                columnFamilyId,
                instanceId,
                [tableId1, tableId2],
              );
              const instance = bigtable.instance(instanceId);
              const table = instance.table(tableId1);
              const row = table.row('gwashington');
              await row.save(entry);
              const table2 = instance.table(tableId2);
              const row2 = table2.row('gwashington');
              await row2.save(entry);
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
    describe('CheckAndMutateRow', () => {
      it('should send the metrics to Google Cloud Monitoring for a CheckAndMutateRow call', done => {
        (async () => {
          try {
            const bigtable = await mockBigtable(defaultProjectId, done);
            for (const instanceId of [instanceId1, instanceId2]) {
              await setupBigtableWithInsert(
                bigtable,
                columnFamilyId,
                instanceId,
                [tableId1, tableId2],
              );
              const instance = bigtable.instance(instanceId);
              const table = instance.table(tableId1);
              const row = table.row(columnFamilyId);
              await row.filter(filter, {onMatch: mutations});
              const table2 = instance.table(tableId2);
              const row2 = table2.row(columnFamilyId);
              await row2.filter(filter, {onMatch: mutations});
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
              const row = table.row(columnFamilyId);
              await row.filter(filter, {onMatch: mutations});
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
      it('should send the metrics to Google Cloud Monitoring for a CheckAndMutateRow call with a second project', done => {
        (async () => {
          try {
            // This is the second project the test is configured to work with:
            const projectId = SECOND_PROJECT_ID;
            const bigtable = await mockBigtable(projectId, done);
            for (const instanceId of [instanceId1, instanceId2]) {
              await setupBigtableWithInsert(
                bigtable,
                columnFamilyId,
                instanceId,
                [tableId1, tableId2],
              );
              const instance = bigtable.instance(instanceId);
              const table = instance.table(tableId1);
              const row = table.row(columnFamilyId);
              await row.filter(filter, {onMatch: mutations});
              const table2 = instance.table(tableId2);
              const row2 = table2.row(columnFamilyId);
              await row2.filter(filter, {onMatch: mutations});
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
      return getFakeBigtable(projectId, getHandlerFromExporter(TestExporter));
    }

    describe('SampleRowKeys', () => {
      it('should send the metrics to Google Cloud Monitoring for a SampleRowKeys call', done => {
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
                await setupBigtableWithInsert(
                  bigtable,
                  columnFamilyId,
                  instanceId,
                  [tableId1, tableId2],
                );
                const instance = bigtable.instance(instanceId);
                const table = instance.table(tableId1);
                await table.sampleRowKeys();
                const table2 = instance.table(tableId2);
                await table2.sampleRowKeys();
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
      it('should send the metrics to Google Cloud Monitoring for a SampleRowKeys call with thirty clients', done => {
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
                await setupBigtableWithInsert(
                  bigtable,
                  columnFamilyId,
                  instanceId,
                  [tableId1, tableId2],
                );
                const instance = bigtable.instance(instanceId);
                const table = instance.table(tableId1);
                await table.sampleRowKeys();
                const table2 = instance.table(tableId2);
                await table2.sampleRowKeys();
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
    describe('ReadRows', () => {
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
                await setupBigtableWithInsert(
                  bigtable,
                  columnFamilyId,
                  instanceId,
                  [tableId1, tableId2],
                );
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
                await setupBigtableWithInsert(
                  bigtable,
                  columnFamilyId,
                  instanceId,
                  [tableId1, tableId2],
                );
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
    describe('ReadModifyWriteRow', () => {
      it('should send the metrics to Google Cloud Monitoring for a ReadModifyWriteRow call', done => {
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
                await setupBigtableWithInsert(
                  bigtable,
                  columnFamilyId,
                  instanceId,
                  [tableId1, tableId2],
                );
                const instance = bigtable.instance(instanceId);
                const table = instance.table(tableId1);
                const row = table.row(columnFamilyId);
                await row.createRules(rules);
                const table2 = instance.table(tableId2);
                const row2 = table2.row(columnFamilyId);
                await row2.createRules(rules);
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
      it('should send the metrics to Google Cloud Monitoring for a ReadModifyWriteRow call with thirty clients', done => {
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
                await setupBigtableWithInsert(
                  bigtable,
                  columnFamilyId,
                  instanceId,
                  [tableId1, tableId2],
                );
                const instance = bigtable.instance(instanceId);
                const table = instance.table(tableId1);
                const row = table.row(columnFamilyId);
                await row.createRules(rules);
                const table2 = instance.table(tableId2);
                const row2 = table2.row(columnFamilyId);
                await row2.createRules(rules);
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
    describe('MutateRows', () => {
      it('should send the metrics to Google Cloud Monitoring for a MutateRows call', done => {
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
                await setupBigtableWithInsert(
                  bigtable,
                  columnFamilyId,
                  instanceId,
                  [tableId1, tableId2],
                );
                const instance = bigtable.instance(instanceId);
                const table = instance.table(tableId1);
                await table.mutate(mutation);
                const table2 = instance.table(tableId2);
                await table2.mutate(mutation);
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
      it('should send the metrics to Google Cloud Monitoring for a MutateRows call with thirty clients', done => {
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
                await setupBigtableWithInsert(
                  bigtable,
                  columnFamilyId,
                  instanceId,
                  [tableId1, tableId2],
                );
                const instance = bigtable.instance(instanceId);
                const table = instance.table(tableId1);
                await table.mutate(mutation);
                const table2 = instance.table(tableId2);
                await table2.mutate(mutation);
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
    describe('MutateRow', () => {
      it('should send the metrics to Google Cloud Monitoring for a MutateRows call for a single point', done => {
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
                await setupBigtableWithInsert(
                  bigtable,
                  columnFamilyId,
                  instanceId,
                  [tableId1, tableId2],
                );
                const instance = bigtable.instance(instanceId);
                const table = instance.table(tableId1);
                const row = table.row('gwashington');
                await row.save(entry);
                const table2 = instance.table(tableId2);
                const row2 = table2.row('gwashington');
                await row2.save(entry);
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
      it('should send the metrics to Google Cloud Monitoring for a single MutateRow call with thirty clients', done => {
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
                await setupBigtableWithInsert(
                  bigtable,
                  columnFamilyId,
                  instanceId,
                  [tableId1, tableId2],
                );
                const instance = bigtable.instance(instanceId);
                const table = instance.table(tableId1);
                const row = table.row('gwashington');
                await row.save(entry);
                const table2 = instance.table(tableId2);
                const row2 = table2.row('gwashington');
                await row2.save(entry);
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
    describe('CheckAndMutateRow', () => {
      it('should send the metrics to Google Cloud Monitoring for a CheckAndMutateRow call', done => {
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
                await setupBigtableWithInsert(
                  bigtable,
                  columnFamilyId,
                  instanceId,
                  [tableId1, tableId2],
                );
                const instance = bigtable.instance(instanceId);
                const table = instance.table(tableId1);
                const row = table.row(columnFamilyId);
                await row.filter(filter, {onMatch: mutations});
                const table2 = instance.table(tableId2);
                const row2 = table2.row(columnFamilyId);
                await row2.filter(filter, {onMatch: mutations});
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
      it('should send the metrics to Google Cloud Monitoring for a single CheckAndMutateRow call with thirty clients', done => {
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
                await setupBigtableWithInsert(
                  bigtable,
                  columnFamilyId,
                  instanceId,
                  [tableId1, tableId2],
                );
                const instance = bigtable.instance(instanceId);
                const table = instance.table(tableId1);
                const row = table.row(columnFamilyId);
                await row.filter(filter, {onMatch: mutations});
                const table2 = instance.table(tableId2);
                const row2 = table2.row(columnFamilyId);
                await row2.filter(filter, {onMatch: mutations});
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
  });
  describe('Bigtable/ClientSideMetricsToMetricsHandler', () => {
    async function getFakeBigtableWithHandler(
      projectId: string,
      done: mocha.Done,
      checkFn: (
        projectId: string,
        requestsHandled: (OnOperationCompleteData | OnAttemptCompleteData)[],
      ) => void,
    ) {
      let handlerRequestCount = 0;
      class TestGCPMetricsHandler extends TestMetricsHandler {
        projectId = projectId;
        onOperationComplete(data: OnOperationCompleteData) {
          handlerRequestCount++;
          try {
            super.onOperationComplete(data);
            if (handlerRequestCount > 1) {
              checkFn(projectId, this.requestsHandled);
              done();
            }
          } catch (e) {
            done(e);
          }
        }
      }
      return getFakeBigtable(projectId, TestGCPMetricsHandler);
    }

    /**
     * Returns a bigtable client with a test metrics handler that will check
     * the metrics it receives and pass/fail the test if we get the right
     * metrics. This method doesn't insert data so that extra mutateRows calls
     * don't get made because those extra calls will produce different metrics.
     *
     * @param projectId
     * @param done
     * @param checkFn
     */
    async function mockBigtableWithNoInserts(
      projectId: string,
      done: mocha.Done,
      checkFn: (
        projectId: string,
        requestsHandled: (OnOperationCompleteData | OnAttemptCompleteData)[],
      ) => void,
    ) {
      const bigtable = await getFakeBigtableWithHandler(
        projectId,
        done,
        checkFn,
      );
      await setupBigtable(bigtable, columnFamilyId, instanceId1, [
        tableId1,
        tableId2,
      ]);
      return bigtable;
    }
    describe('SampleRowKeys', () => {
      it('should send the metrics to the metrics handler for a SampleRowKeys call', done => {
        (async () => {
          const bigtable = await mockBigtableWithNoInserts(
            defaultProjectId,
            done,
            checkSampleRowKeysCall,
          );
          const instance = bigtable.instance(instanceId1);
          const table = instance.table(tableId1);
          await table.sampleRowKeys();
          const table2 = instance.table(tableId2);
          await table2.sampleRowKeys();
        })().catch(err => {
          throw err;
        });
      });
      it('should pass the projectId to the metrics handler properly', done => {
        (async () => {
          const bigtable = await mockBigtableWithNoInserts(
            defaultProjectId,
            done,
            checkSampleRowKeysCall,
          );
          const instance = bigtable.instance(instanceId1);
          const table = instance.table(tableId1);
          await table.sampleRowKeys();
          const table2 = instance.table(tableId2);
          await table2.sampleRowKeys();
        })().catch(err => {
          throw err;
        });
      });
    });
    describe('ReadRows', () => {
      it('should send the metrics to the metrics handler for a ReadRows call', done => {
        (async () => {
          const bigtable = await mockBigtableWithNoInserts(
            defaultProjectId,
            done,
            checkMultiRowCall,
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
          const bigtable = await mockBigtableWithNoInserts(
            defaultProjectId,
            done,
            checkMultiRowCall,
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
      it('should send the metrics to the metrics handler for a single row read', done => {
        (async () => {
          try {
            const projectId = SECOND_PROJECT_ID;
            const bigtable = await mockBigtableWithNoInserts(
              projectId,
              done,
              checkSingleRowCall,
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
    });
    describe('ReadModifyWriteRow', () => {
      it('should send the metrics to the metrics handler for a ReadModifyWriteRow call', done => {
        (async () => {
          const bigtable = await mockBigtableWithNoInserts(
            defaultProjectId,
            done,
            checkReadModifyWriteRowCall,
          );
          const instance = bigtable.instance(instanceId1);
          const table = instance.table(tableId1);
          const row = table.row(columnFamilyId);
          await row.createRules(rules);
          const table2 = instance.table(tableId2);
          const row2 = table2.row(columnFamilyId);
          await row2.createRules(rules);
        })().catch(err => {
          throw err;
        });
      });
      it('should pass the projectId to the metrics handler properly', done => {
        (async () => {
          const bigtable = await mockBigtableWithNoInserts(
            defaultProjectId,
            done,
            checkReadModifyWriteRowCall,
          );
          const instance = bigtable.instance(instanceId1);
          const table = instance.table(tableId1);
          const row = table.row(columnFamilyId);
          await row.createRules(rules);
          const table2 = instance.table(tableId2);
          const row2 = table2.row(columnFamilyId);
          await row2.createRules(rules);
        })().catch(err => {
          throw err;
        });
      });
    });
    describe('MutateRows', () => {
      it('should send the metrics to the metrics handler for a MutateRows call', done => {
        (async () => {
          const bigtable = await mockBigtableWithNoInserts(
            defaultProjectId,
            done,
            checkMutateRowsCall,
          );
          const instance = bigtable.instance(instanceId1);
          const table = instance.table(tableId1);
          await table.mutate(mutation);
          const table2 = instance.table(tableId2);
          await table2.mutate(mutation);
        })().catch(err => {
          throw err;
        });
      });
      it('should pass the projectId to the metrics handler properly', done => {
        (async () => {
          const bigtable = await mockBigtableWithNoInserts(
            defaultProjectId,
            done,
            checkMutateRowsCall,
          );
          const instance = bigtable.instance(instanceId1);
          const table = instance.table(tableId1);
          await table.mutate(mutation);
          const table2 = instance.table(tableId2);
          await table2.mutate(mutation);
        })().catch(err => {
          throw err;
        });
      });
    });
    describe('MutateRow', () => {
      it('should send the metrics to the metrics handler for a MutateRows call for a single point', done => {
        (async () => {
          const bigtable = await mockBigtableWithNoInserts(
            defaultProjectId,
            done,
            checkMutateRowCall,
          );
          const instance = bigtable.instance(instanceId1);
          const table = instance.table(tableId1);
          const row = table.row('gwashington');
          await row.save(entry);
          const table2 = instance.table(tableId2);
          const row2 = table2.row('gwashington');
          await row2.save(entry);
        })().catch(err => {
          throw err;
        });
      });
      it('should pass the projectId to the metrics handler properly for a single mutateRow point', done => {
        (async () => {
          const bigtable = await mockBigtableWithNoInserts(
            defaultProjectId,
            done,
            checkMutateRowCall,
          );
          const instance = bigtable.instance(instanceId1);
          const table = instance.table(tableId1);
          const row = table.row('gwashington');
          await row.save(entry);
          const table2 = instance.table(tableId2);
          const row2 = table2.row('gwashington');
          await row2.save(entry);
        })().catch(err => {
          throw err;
        });
      });
    });
    describe('CheckAndMutateRow', () => {
      it('should send the metrics to the metrics handler for a CheckAndMutateRow call for a single point', done => {
        (async () => {
          const bigtable = await mockBigtableWithNoInserts(
            defaultProjectId,
            done,
            checkCheckAndMutateCall,
          );
          const instance = bigtable.instance(instanceId1);
          const table = instance.table(tableId1);
          const row = table.row(columnFamilyId);
          await row.filter(filter, {onMatch: mutations});
          const table2 = instance.table(tableId2);
          const row2 = table2.row(columnFamilyId);
          await row2.filter(filter, {onMatch: mutations});
        })().catch(err => {
          throw err;
        });
      });
    });
  });
});
