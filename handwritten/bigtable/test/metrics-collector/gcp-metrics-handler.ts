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

import {describe} from 'mocha';
import {ResourceMetrics} from '@opentelemetry/sdk-metrics';
import {
  ExportResult,
  metricsToRequest,
} from '../../src/client-side-metrics/exporter';
import {MetricExporter} from '@google-cloud/opentelemetry-cloud-monitoring-exporter';
import {expectedRequestsHandled} from '../../test-common/metrics-handler-fixture';
import {
  OnAttemptCompleteData,
  OnOperationCompleteData,
} from '../../src/client-side-metrics/metrics-handler';
import {
  expectedOtelExportConvertedValue,
  expectedOtelExportInput,
} from '../../test-common/expected-otel-export-input';
import * as assert from 'assert';
import {replaceTimestamps} from '../../test-common/replace-timestamps';
import * as proxyquire from 'proxyquire';

/**
 * Cleans a ResourceMetrics object by replacing client UUIDs with a placeholder.
 *
 * This function creates a deep copy of the input ResourceMetrics object and
 * then iterates through its metrics, replacing any existing client_uid attribute
 * in the data points with the string 'fake-uuid'.  This is primarily used in
 * testing to ensure consistent metric output by removing the variability of
 * randomly generated client UUIDs.
 *
 * @param {ResourceMetrics} metrics The ResourceMetrics object to clean.
 * @returns {ResourceMetrics} A new ResourceMetrics object with client UUIDs replaced by 'fake-uuid'.
 */
function cleanMetrics(metrics: ResourceMetrics): ResourceMetrics {
  const newMetrics = JSON.parse(JSON.stringify(metrics)); // Deep copy to avoid modifying the original object

  newMetrics.scopeMetrics.forEach((scopeMetric: any) => {
    scopeMetric.metrics.forEach((metric: any) => {
      if (metric.dataPoints) {
        metric.dataPoints.forEach((dataPoint: any) => {
          if (dataPoint.attributes && dataPoint.attributes.client_uid) {
            dataPoint.attributes.client_uid = 'fake-uuid';
          }
        });
      }
    });
  });

  return newMetrics;
}

describe('Bigtable/GCPMetricsHandler', () => {
  it('Should export a value ready for sending to the CloudMonitoringExporter', function (done) {
    this.timeout(600000);
    (async () => {
      /*
      We need to create a timeout here because if we don't then mocha shuts down
      the test as it is sleeping before the GCPMetricsHandler has a chance to
      export the data.
       */
      const timeout = setTimeout(() => {}, 120000);
      /*
      The exporter is called every x seconds, but we only want to test the value
      it receives once. Since done cannot be called multiple times in mocha,
      exporter ensures we only test the value export receives one time.
      */
      let exported = false;

      class TestExporter extends MetricExporter {
        constructor() {
          super();
        }

        export(
          metrics: ResourceMetrics,
          resultCallback: (result: ExportResult) => void,
        ): void {
          if (!exported) {
            exported = true;
            try {
              metrics = cleanMetrics(metrics);
              replaceTimestamps(
                metrics as unknown as typeof expectedOtelExportInput,
                [123, 789],
                [456, 789],
              );
              const parsedExportInput: ResourceMetrics = JSON.parse(
                JSON.stringify(metrics),
              );
              assert.deepStrictEqual(
                parsedExportInput.scopeMetrics[0].metrics.length,
                expectedOtelExportInput.scopeMetrics[0].metrics.length,
              );
              for (
                let index = 0;
                index < parsedExportInput.scopeMetrics[0].metrics.length;
                index++
              ) {
                // We need to compare pointwise because mocha truncates to an 8192 character limit.
                assert.deepStrictEqual(
                  parsedExportInput.scopeMetrics[0].metrics[index],
                  expectedOtelExportInput.scopeMetrics[0].metrics[index],
                );
              }
              assert.deepStrictEqual(
                JSON.parse(JSON.stringify(metrics)),
                expectedOtelExportInput,
              );
              const convertedRequest = metricsToRequest(parsedExportInput);
              assert.deepStrictEqual(
                convertedRequest.timeSeries.length,
                expectedOtelExportConvertedValue.timeSeries.length,
              );
              for (
                let index = 0;
                index < convertedRequest.timeSeries.length;
                index++
              ) {
                // We need to compare pointwise because mocha truncates to an 8192 character limit.
                assert.deepStrictEqual(
                  convertedRequest.timeSeries[index],
                  expectedOtelExportConvertedValue.timeSeries[index],
                );
              }
              clearTimeout(timeout);
              resultCallback({code: 0});
              done();
            } catch (e) {
              done(e);
            }
          } else {
            // The test suite will not complete if unanswered callbacks
            // remain on subsequent export calls.
            resultCallback({code: 0});
          }
        }
      }
      const stubs = {
        './exporter': {
          CloudMonitoringExporter: TestExporter,
        },
      };
      const FakeMetricsHandler = proxyquire(
        '../../src/client-side-metrics/gcp-metrics-handler.js',
        stubs,
      ).GCPMetricsHandler;

      const handler = new FakeMetricsHandler('my-project');

      for (const request of expectedRequestsHandled) {
        if (request.attemptLatency) {
          handler.onAttemptComplete(request as OnAttemptCompleteData);
        } else {
          handler.onOperationComplete(request as OnOperationCompleteData);
        }
      }
    })().catch(err => {
      throw err;
    });
  });
});
