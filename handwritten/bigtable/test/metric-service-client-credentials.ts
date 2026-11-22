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

import {proxyquire} from 'google-test-utils';
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

  it('should propagate nested BigtableClient.universeDomain and GOOGLE_CLOUD_UNIVERSE_DOMAIN without calling legacy MetricExporter', () => {
    let legacyExporterConstructed = false;
    const capturedClientOptions: ClientOptions[] = [];
    class FakeMetricServiceClient {
      constructor(options: ClientOptions) {
        capturedClientOptions.push(options);
      }
      async close() {}
    }
    class UnusedLegacyExporter {
      constructor() {
        legacyExporterConstructed = true;
      }
    }
    const FakeExporter = proxyquire('../src/client-side-metrics/exporter.js', {
      '@google-cloud/monitoring': {
        MetricServiceClient: FakeMetricServiceClient,
      },
      '@google-cloud/opentelemetry-cloud-monitoring-exporter': {
        MetricExporter: UnusedLegacyExporter,
      },
    }).CloudMonitoringExporter;
    const sdkMetrics = require('@opentelemetry/sdk-metrics');
    class NoopMetricReader extends sdkMetrics.MetricReader {
      protected async onForceFlush(): Promise<void> {}
      protected async onShutdown(): Promise<void> {}
    }
    const FakeGCPMetricsHandler = proxyquire(
      '../src/client-side-metrics/gcp-metrics-handler.js',
      {
        './exporter': {CloudMonitoringExporter: FakeExporter},
        '@opentelemetry/sdk-metrics': {
          ...sdkMetrics,
          PeriodicExportingMetricReader: NoopMetricReader,
        },
      },
    ).GCPMetricsHandler;
    const FakeBigtable = proxyquire('../src/index.js', {
      './client-side-metrics/gcp-metrics-handler': {
        GCPMetricsHandler: FakeGCPMetricsHandler,
      },
    }).Bigtable;

    const nestedCreds = {
      client_email: 'bt@nested-proj.iam.gserviceaccount.com',
      private_key: 'fake-key',
    };
    const callerOpts = {
      apiEndpoint: 'localhost:8086',
      universeDomain: undefined as string | undefined,
      projectId: undefined as string | undefined,
      credentials: undefined as typeof nestedCreds | undefined,
      BigtableClient: {
        universeDomain: 'my-universe.example.com',
        projectId: 'nested-proj',
        credentials: nestedCreds,
      },
    };
    const bt = new FakeBigtable(callerOpts);
    assert.strictEqual(bt.universeDomain, 'my-universe.example.com');
    assert.strictEqual(bt.projectId, 'nested-proj');
    assert.strictEqual(bt.options.BigtableClient.projectId, 'nested-proj');
    assert.strictEqual(bt.options.BigtableClient.credentials, nestedCreds);
    assert.strictEqual(legacyExporterConstructed, false);
    assert.strictEqual(capturedClientOptions.length, 1);
    assert.strictEqual(
      capturedClientOptions[0].universeDomain,
      'my-universe.example.com',
    );
    assert.strictEqual(capturedClientOptions[0].projectId, 'nested-proj');
    assert.strictEqual(capturedClientOptions[0].credentials, nestedCreds);
    assert.strictEqual(capturedClientOptions[0].apiEndpoint, undefined);
    assert.strictEqual(callerOpts.apiEndpoint, 'localhost:8086');

    const savedEnv = process.env.GOOGLE_CLOUD_UNIVERSE_DOMAIN;
    const savedEmulator = process.env.BIGTABLE_EMULATOR_HOST;
    try {
      process.env.GOOGLE_CLOUD_UNIVERSE_DOMAIN = 'env-universe.example.com';
      const envBt = new FakeBigtable({metricsEnabled: true});
      assert.strictEqual(envBt.universeDomain, 'env-universe.example.com');
      assert.strictEqual(
        capturedClientOptions[1]?.universeDomain,
        'env-universe.example.com',
      );

      for (const emptyEnv of ['', '   ']) {
        process.env.GOOGLE_CLOUD_UNIVERSE_DOMAIN = emptyEnv;
        const emptyEnvBt = new FakeBigtable({metricsEnabled: true});
        assert.strictEqual(emptyEnvBt.universeDomain, 'googleapis.com');
        assert.strictEqual(
          capturedClientOptions[capturedClientOptions.length - 1]
            ?.universeDomain,
          'googleapis.com',
        );
      }

      delete process.env.GOOGLE_CLOUD_UNIVERSE_DOMAIN;
      for (const universeDomain of ['', '   ']) {
        assert.throws(
          () => new FakeBigtable({universeDomain}),
          /The universe domain cannot be an empty string/,
        );
        assert.throws(
          () => new FakeBigtable({universe_domain: universeDomain}),
          /The universe domain cannot be an empty string/,
        );
        assert.throws(
          () => new FakeBigtable({BigtableClient: {universeDomain}}),
          /The universe domain cannot be an empty string/,
        );
      }
      assert.throws(
        () =>
          new FakeBigtable({
            universeDomain: 'a.example.com',
            universe_domain: 'b.example.com',
          }),
        /Please set either universe_domain or universeDomain, but not both/,
      );

      const countBeforeEmulator = capturedClientOptions.length;
      process.env.BIGTABLE_EMULATOR_HOST = 'localhost:8086';
      const emulatorBt = new FakeBigtable({});
      assert.strictEqual(
        emulatorBt._metricsConfigManager.metricsHandlers.length,
        0,
      );
      assert.strictEqual(capturedClientOptions.length, countBeforeEmulator);

      const emulatorMetricsBt = new FakeBigtable({
        metricsEnabled: true,
        universeDomain: 'my-universe.example.com',
      });
      assert.strictEqual(
        emulatorMetricsBt._metricsConfigManager.metricsHandlers.length,
        1,
      );
      assert.strictEqual(
        capturedClientOptions[capturedClientOptions.length - 1]?.universeDomain,
        'my-universe.example.com',
      );
    } finally {
      if (savedEnv !== undefined) {
        process.env.GOOGLE_CLOUD_UNIVERSE_DOMAIN = savedEnv;
      } else {
        delete process.env.GOOGLE_CLOUD_UNIVERSE_DOMAIN;
      }
      if (savedEmulator !== undefined) {
        process.env.BIGTABLE_EMULATOR_HOST = savedEmulator;
      } else {
        delete process.env.BIGTABLE_EMULATOR_HOST;
      }
    }

    const {
      CloudMonitoringExporter: RealExporter,
    } = require('../src/client-side-metrics/exporter.js');
    const sharedClientOpts: Record<string, unknown> = {};
    const sharedArgs = {
      projectId: 'p',
      universeDomain: 'my-universe.example.com',
      clientOptions: sharedClientOpts,
      credentials: nestedCreds,
    };
    const realBt = new FakeBigtable(sharedArgs);
    const realExporter = new RealExporter(sharedArgs);
    assert.strictEqual(sharedClientOpts.universeDomain, undefined);
    assert.strictEqual(
      realBt.auth.clientOptions?.universeDomain,
      'my-universe.example.com',
    );
    assert.strictEqual(
      realExporter.client.auth.clientOptions?.universeDomain,
      'my-universe.example.com',
    );
    assert.throws(
      () => new RealExporter({universeDomain: ''}),
      /The universe domain cannot be an empty string/,
    );
    try {
      process.env.GOOGLE_CLOUD_UNIVERSE_DOMAIN = '';
      const emptyEnvExporter = new RealExporter({});
      assert.strictEqual(
        emptyEnvExporter.client.universeDomain,
        'googleapis.com',
      );
    } finally {
      if (savedEnv !== undefined) {
        process.env.GOOGLE_CLOUD_UNIVERSE_DOMAIN = savedEnv;
      } else {
        delete process.env.GOOGLE_CLOUD_UNIVERSE_DOMAIN;
      }
    }
  });
});
