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

import * as proxyquire from 'proxyquire';
import {ClientOptions, grpc} from 'google-gax';
import * as assert from 'assert';
import {MetricServiceClient} from '@google-cloud/monitoring';

describe('Bigtable/MetricServiceClientCredentials', () => {
  it('should pass the credentials and universe domain to the exporter', done => {
    const clientOptions = {
      metricsEnabled: true,
      sslCreds: grpc.credentials.createInsecure(),
      universeDomain: 'some-universe-domain.com',
    };
    class FakeExporter {
      constructor(options: ClientOptions) {
        try {
          assert.deepStrictEqual(options, clientOptions);
          done();
        } catch (e) {
          done(e);
        }
      }
    }
    const FakeCGPMetricsHandler = proxyquire(
      '../src/client-side-metrics/gcp-metrics-handler.js',
      {
        './exporter': {
          CloudMonitoringExporter: FakeExporter,
        },
      },
    ).GCPMetricsHandler;
    const FakeBigtable = proxyquire('../src/index.js', {
      './client-side-metrics/gcp-metrics-handler': {
        GCPMetricsHandler: FakeCGPMetricsHandler,
      },
    }).Bigtable;
    new FakeBigtable(clientOptions);
  });
  it('should use second project for the metric service client', async () => {
    const SECOND_PROJECT_ID = 'second-project-id';
    const clientOptions = {metricsEnabled: true, projectId: SECOND_PROJECT_ID};
    let savedOptions: ClientOptions = {};
    class FakeExporter {
      constructor(options: ClientOptions) {
        savedOptions = options;
      }
    }
    const FakeCGPMetricsHandler = proxyquire(
      '../src/client-side-metrics/gcp-metrics-handler.js',
      {
        './exporter': {
          CloudMonitoringExporter: FakeExporter,
        },
      },
    ).GCPMetricsHandler;
    const FakeBigtable = proxyquire('../src/index.js', {
      './client-side-metrics/gcp-metrics-handler': {
        GCPMetricsHandler: FakeCGPMetricsHandler,
      },
    }).Bigtable;
    new FakeBigtable(clientOptions);
    // savedOptions are the options passed down to the exporter
    // we want to ensure that when the second project id is provided to the
    // fake client that this sends savedOptions to the exporter that then
    // fetches the right projectId when the saved options are provided to the
    // MetricsServiceClient as this is required to save the metrics to the right
    // project.
    const client = new MetricServiceClient(savedOptions);
    const projectIdUsed = await client.getProjectId();
    assert.strictEqual(projectIdUsed, SECOND_PROJECT_ID);
  });
  it('should pass the credentials and universe domain to the metric service client', done => {
    const clientOptions = {
      metricsEnabled: true,
      sslCreds: grpc.credentials.createInsecure(),
      universeDomain: 'some-universe-domain.com',
    };
    class FakeMetricServiceClient {
      constructor(options: ClientOptions) {
        try {
          assert.deepStrictEqual(options, clientOptions);
          done();
        } catch (e) {
          done(e);
        }
      }
    }
    const FakeExporter = proxyquire('../src/client-side-metrics/exporter.js', {
      '@google-cloud/monitoring': {
        MetricServiceClient: FakeMetricServiceClient,
      },
    }).CloudMonitoringExporter;
    const FakeCGPMetricsHandler = proxyquire(
      '../src/client-side-metrics/gcp-metrics-handler.js',
      {
        './exporter': {
          CloudMonitoringExporter: FakeExporter,
        },
      },
    ).GCPMetricsHandler;
    const FakeBigtable = proxyquire('../src/index.js', {
      './client-side-metrics/gcp-metrics-handler': {
        GCPMetricsHandler: FakeCGPMetricsHandler,
      },
    }).Bigtable;
    new FakeBigtable(clientOptions);
  });
});
