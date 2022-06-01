// Copyright 2017 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as assert from 'assert';
import {describe, it, before, beforeEach, afterEach, after} from 'mocha';
import * as gcpMetadata from 'gcp-metadata';
import {heap as heapProfiler} from 'pprof';
import * as sinon from 'sinon';

import {createProfiler, nodeVersionOkay} from '../src/index';
import {Profiler} from '../src/profiler';
import * as packageJson from '../package.json';

describe('nodeVersionOkay', () => {
  const version = parseInt(packageJson.engines.node.replace('>=', ''));
  it('should accept alpha versions', () => {
    assert.strictEqual(true, nodeVersionOkay(`v${version}.0.0-alpha.1`));
  });
  it('should accept beta versions', () => {
    assert.strictEqual(true, nodeVersionOkay(`v${version}.9.10-beta.2`));
  });
  it('should accept nightly versions', () => {
    assert.strictEqual(
      true,
      nodeVersionOkay(`v${version}.0.0-nightly2018000000`)
    );
  });
  it('should accept pre-release versions', () => {
    assert.strictEqual(true, nodeVersionOkay(`v${version}.0.0-pre`));
  });
  it('should accept v12.4.1', () => {
    assert.strictEqual(true, nodeVersionOkay(`v${version}.4.1`));
  });
  it('should not accept v11.4.0', () => {
    assert.strictEqual(false, nodeVersionOkay(`v${version - 1}.4.0`));
  });
});

describe('createProfiler', () => {
  let savedEnv: NodeJS.ProcessEnv;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let instanceMetadataStub: sinon.SinonStub<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let projectMetadataStub: sinon.SinonStub<any>;
  let startStub: sinon.SinonStub<[number, number], void>;

  const internalConfigParams = {
    timeIntervalMicros: 1000,
    heapIntervalBytes: 512 * 1024,
    heapMaxStackDepth: 64,
    ignoreHeapSamplesPath: '@google-cloud/profiler',
    initialBackoffMillis: 1000 * 60,
    backoffCapMillis: 60 * 60 * 1000,
    backoffMultiplier: 1.3,
    serverBackoffCapMillis: 2147483647,
    localProfilingPeriodMillis: 1000,
    localTimeDurationMillis: 1000,
    localLogPeriodMillis: 10000,
    apiEndpoint: 'cloudprofiler.googleapis.com',
  };
  const disableSourceMapParams = {
    sourceMapSearchPath: ['path'],
    disableSourceMaps: true,
  };
  let defaultConfig: {};

  before(() => {
    process.env = {};
    defaultConfig = internalConfigParams || {};
    startStub = sinon.stub(heapProfiler, 'start');
    savedEnv = process.env;
  });

  beforeEach(() => {
    process.env = {};
  });

  afterEach(() => {
    if (instanceMetadataStub) {
      instanceMetadataStub.restore();
    }
    if (projectMetadataStub) {
      projectMetadataStub.restore();
    }
    heapProfiler.stop();
    startStub.reset();
  });

  after(() => {
    process.env = savedEnv;
    startStub.restore();
  });

  it('should not modify specified fields when not on GCE', async () => {
    instanceMetadataStub = sinon.stub(gcpMetadata, 'instance');
    instanceMetadataStub.throwsException('cannot access metadata');
    projectMetadataStub = sinon.stub(gcpMetadata, 'project');
    projectMetadataStub.throwsException('cannot access metadata');

    const config = Object.assign(
      {
        logLevel: 2,
        serviceContext: {version: 'fake-version', service: 'fake-service'},
        disableHeap: true,
        disableTime: true,
        instance: 'instance',
        zone: 'zone',
        projectId: 'fake-projectId',
      },
      disableSourceMapParams
    );

    const profiler: Profiler = await createProfiler(config);
    const expConfig = Object.assign({}, defaultConfig, config);
    assert.deepStrictEqual(profiler.config, expConfig);
  });

  it('should not modify specified fields when on metadata', async () => {
    instanceMetadataStub = sinon.stub(gcpMetadata, 'instance');
    instanceMetadataStub
      .withArgs('name')
      .resolves('gce-instance')
      .withArgs('zone')
      .resolves('projects/123456789012/zones/gce-zone');
    projectMetadataStub = sinon.stub(gcpMetadata, 'project');
    projectMetadataStub.withArgs('project-id').resolves('gce-project');

    const config = Object.assign(
      {
        logLevel: 2,
        serviceContext: {version: 'fake-version', service: 'fake-service'},
        disableHeap: true,
        disableTime: true,
        instance: 'instance',
        zone: 'zone',
        projectId: 'fake-projectId',
      },
      disableSourceMapParams
    );
    const profiler: Profiler = await createProfiler(config);
    const expConfig = Object.assign({}, defaultConfig, config);
    assert.deepStrictEqual(profiler.config, expConfig);
  });

  it('should get project ID, zone and instance from metadata', async () => {
    instanceMetadataStub = sinon.stub(gcpMetadata, 'instance');
    instanceMetadataStub
      .withArgs('name')
      .resolves('gce-instance')
      .withArgs('zone')
      .resolves('projects/123456789012/zones/gce-zone');
    projectMetadataStub = sinon.stub(gcpMetadata, 'project');
    projectMetadataStub.withArgs('project-id').resolves('gce-project');
    const config = Object.assign(
      {
        logLevel: 2,
        serviceContext: {version: '', service: 'fake-service'},
        disableHeap: true,
        disableTime: true,
      },
      disableSourceMapParams
    );
    const expConfigParams = {
      projectId: 'gce-project',
      logLevel: 2,
      serviceContext: {version: '', service: 'fake-service'},
      disableHeap: true,
      disableTime: true,
      instance: 'gce-instance',
      zone: 'gce-zone',
    };
    const profiler: Profiler = await createProfiler(config);
    const expConfig = Object.assign(
      {},
      defaultConfig,
      disableSourceMapParams,
      expConfigParams
    );
    assert.deepStrictEqual(profiler.config, expConfig);
  });

  it('should not reject when not on GCE and no zone and instance found', async () => {
    instanceMetadataStub = sinon.stub(gcpMetadata, 'instance');
    instanceMetadataStub.throwsException('cannot access metadata');
    projectMetadataStub = sinon.stub(gcpMetadata, 'project');
    projectMetadataStub.throwsException('cannot access metadata');
    const config = Object.assign(
      {
        projectId: 'fake-projectId',
        serviceContext: {service: 'fake-service'},
      },
      disableSourceMapParams
    );
    const expConfigParams = {
      logLevel: 2,
      serviceContext: {service: 'fake-service'},
      disableHeap: false,
      disableTime: false,
      projectId: 'fake-projectId',
    };
    const profiler: Profiler = await createProfiler(config);
    const expConfig = Object.assign(
      {},
      defaultConfig,
      disableSourceMapParams,
      expConfigParams
    );
    assert.deepStrictEqual(profiler.config, expConfig);
  });

  it('should reject when no service specified', async () => {
    instanceMetadataStub = sinon.stub(gcpMetadata, 'instance');
    instanceMetadataStub.throwsException('cannot access metadata');
    projectMetadataStub = sinon.stub(gcpMetadata, 'project');
    projectMetadataStub.throwsException('cannot access metadata');
    const config = Object.assign(
      {
        logLevel: 2,
        serviceContext: {version: ''},
        disableHeap: true,
        disableTime: true,
      },
      disableSourceMapParams
    );
    await createProfiler(config)
      .then(() => {
        assert.fail('expected error because no service in config');
      })
      .catch((e: Error) => {
        assert.strictEqual(
          e.message,
          'Service must be specified in the configuration'
        );
      });
  });

  it('should reject when no service does not match service regular expression', async () => {
    instanceMetadataStub = sinon.stub(gcpMetadata, 'instance');
    instanceMetadataStub.throwsException('cannot access metadata');
    projectMetadataStub = sinon.stub(gcpMetadata, 'project');
    projectMetadataStub.throwsException('cannot access metadata');
    const config = {
      logLevel: 2,
      serviceContext: {service: 'serviceName', version: ''},
      disableHeap: true,
      disableTime: true,
    };
    try {
      await createProfiler(config);
      assert.fail('expected an error because invalid service was specified');
    } catch (e) {
      assert.strictEqual(
        (e as Error).message,
        'Service serviceName does not match regular expression "/^[a-z0-9]([-a-z0-9_.]{0,253}[a-z0-9])?$/"'
      );
    }
  });

  it('should reject when no projectId given', async () => {
    instanceMetadataStub = sinon.stub(gcpMetadata, 'instance');
    instanceMetadataStub.throwsException('cannot access metadata');
    projectMetadataStub = sinon.stub(gcpMetadata, 'project');
    projectMetadataStub.throwsException('cannot access metadata');
    const config = Object.assign(
      {
        logLevel: 2,
        serviceContext: {version: '', service: 'fake-service'},
        disableHeap: true,
        disableTime: true,
        instance: 'instance',
        zone: 'zone',
      },
      disableSourceMapParams
    );
    try {
      await createProfiler(config);
      assert.fail('expected an error because invalid service was specified');
    } catch (e) {
      assert.strictEqual(
        (e as Error).message,
        'Project ID must be specified in the configuration'
      );
    }
  });

  it('should set sourceMapSearchPaths when specified in the config', async () => {
    instanceMetadataStub = sinon.stub(gcpMetadata, 'instance');
    instanceMetadataStub.throwsException('cannot access metadata');
    projectMetadataStub = sinon.stub(gcpMetadata, 'project');
    projectMetadataStub.throwsException('cannot access metadata');
    const config = Object.assign(
      {
        projectId: 'project',
        logLevel: 2,
        serviceContext: {version: '', service: 'fake-service'},
        disableHeap: true,
        disableTime: true,
        instance: 'instance',
        zone: 'zone',
        sourceMapSearchPath: ['path'],
      },
      disableSourceMapParams
    );
    const profiler: Profiler = await createProfiler(config);
    const expConfig = Object.assign(
      {},
      config,
      disableSourceMapParams,
      defaultConfig
    );
    assert.deepStrictEqual(profiler.config, expConfig);
  });

  it('should reject when sourceMapSearchPaths is empty array and source map support is enabled', async () => {
    instanceMetadataStub = sinon.stub(gcpMetadata, 'instance');
    instanceMetadataStub.throwsException('cannot access metadata');
    projectMetadataStub = sinon.stub(gcpMetadata, 'project');
    projectMetadataStub.throwsException('cannot access metadata');
    const config = {
      serviceContext: {version: '', service: 'fake-service'},
      instance: 'instance',
      zone: 'zone',
      sourceMapSearchPath: [],
      disableSourceMaps: false,
    };

    try {
      await createProfiler(config);
      assert.fail('expected an error because invalid service was specified');
    } catch (e) {
      assert.strictEqual(
        (e as Error).message,
        'serviceMapSearchPath is an empty array. Use disableSourceMaps ' +
          'to disable source map support instead.'
      );
    }
  });

  it('should set apiEndpoint to non-default value', async () => {
    instanceMetadataStub = sinon.stub(gcpMetadata, 'instance');
    instanceMetadataStub.throwsException('cannot access metadata');
    projectMetadataStub = sinon.stub(gcpMetadata, 'project');
    projectMetadataStub.throwsException('cannot access metadata');

    const config = Object.assign(
      {
        projectId: 'project',
        apiEndpoint: 'test-cloudprofiler.sandbox.googleapis.com',
        serviceContext: {version: '', service: 'fake-service'},
      },
      disableSourceMapParams
    );
    const expConfigParams = {
      projectId: 'project',
      serviceContext: {version: '', service: 'fake-service'},
      disableHeap: false,
      disableTime: false,
      logLevel: 2,
      apiEndpoint: 'test-cloudprofiler.sandbox.googleapis.com',
    };
    const expConfig = Object.assign(
      {},
      defaultConfig,
      disableSourceMapParams,
      expConfigParams
    );
    const profiler: Profiler = await createProfiler(config);
    assert.deepStrictEqual(profiler.config, expConfig);
  });

  it('should get values from environment variable when not specified in config or environment variables', async () => {
    process.env.GCLOUD_PROJECT = 'process-projectId';
    process.env.GCLOUD_PROFILER_LOGLEVEL = '4';
    process.env.GAE_SERVICE = 'process-service';
    process.env.GAE_VERSION = 'process-version';
    process.env.GCLOUD_PROFILER_CONFIG = './test/fixtures/test-config.json';
    instanceMetadataStub = sinon.stub(gcpMetadata, 'instance');
    instanceMetadataStub
      .withArgs('name')
      .resolves('gce-instance')
      .withArgs('zone')
      .resolves('projects/123456789012/zones/gce-zone');
    projectMetadataStub = sinon.stub(gcpMetadata, 'project');
    projectMetadataStub.withArgs('project-id').resolves('gce-project');

    const config = disableSourceMapParams;
    const expConfigParams = {
      projectId: 'process-projectId',
      logLevel: 4,
      serviceContext: {
        version: 'process-version',
        service: 'process-service',
      },
      disableHeap: true,
      disableTime: true,
      instance: 'env_config_instance',
      zone: 'env_config_zone',
    };
    const profiler: Profiler = await createProfiler(config);
    const expConfig = Object.assign({}, config, defaultConfig, expConfigParams);
    assert.deepStrictEqual(profiler.config, expConfig);
  });

  it('should get values from Knative environment variables when values not specified in config or other environment variables', async () => {
    process.env.K_SERVICE = 'k-service';
    process.env.K_REVISION = 'k-version';
    instanceMetadataStub = sinon.stub(gcpMetadata, 'instance');
    instanceMetadataStub.throwsException('cannot access metadata');
    projectMetadataStub = sinon.stub(gcpMetadata, 'project');
    projectMetadataStub.throwsException('cannot access metadata');
    const config = Object.assign(
      {projectId: 'project'},
      disableSourceMapParams
    );
    const expConfigParams = {
      serviceContext: {version: 'k-version', service: 'k-service'},
      disableHeap: false,
      disableTime: false,
      logLevel: 2,
    };
    const profiler: Profiler = await createProfiler(config);
    const expConfig = Object.assign({}, config, defaultConfig, expConfigParams);
    assert.deepStrictEqual(profiler.config, expConfig);
  });

  it('should get values from GAE environment variables when both GAE and Knative environment variables are specified', async () => {
    process.env.GAE_SERVICE = 'process-service';
    process.env.GAE_VERSION = 'process-version';
    process.env.K_SERVICE = 'k-service';
    process.env.K_REVISION = 'k-version';
    instanceMetadataStub = sinon.stub(gcpMetadata, 'instance');
    instanceMetadataStub.throwsException('cannot access metadata');
    projectMetadataStub = sinon.stub(gcpMetadata, 'project');
    projectMetadataStub.throwsException('cannot access metadata');
    const config = Object.assign(
      {projectId: 'project'},
      disableSourceMapParams
    );
    const expConfigParams = {
      serviceContext: {
        version: 'process-version',
        service: 'process-service',
      },
      disableHeap: false,
      disableTime: false,
      logLevel: 2,
    };
    const profiler: Profiler = await createProfiler(config);
    const expConfig = Object.assign({}, config, defaultConfig, expConfigParams);
    assert.deepStrictEqual(profiler.config, expConfig);
  });

  it('should not get values from from environment variable when values specified in config', async () => {
    process.env.GCLOUD_PROJECT = 'process-projectId';
    process.env.GCLOUD_PROFILER_LOGLEVEL = '4';
    process.env.GAE_SERVICE = 'process-service';
    process.env.GAE_VERSION = 'process-version';
    process.env.GCLOUD_PROFILER_CONFIG = './test/fixtures/test-config.json';
    instanceMetadataStub = sinon.stub(gcpMetadata, 'instance');
    instanceMetadataStub
      .withArgs('name')
      .resolves('gce-instance')
      .withArgs('zone')
      .resolves('projects/123456789012/zones/gce-zone');
    projectMetadataStub = sinon.stub(gcpMetadata, 'project');
    projectMetadataStub.withArgs('project-id').resolves('gce-project');

    const config = Object.assign(
      {
        projectId: 'config-projectId',
        logLevel: 1,
        serviceContext: {
          version: 'config-version',
          service: 'config-service',
        },
        disableHeap: false,
        disableTime: false,
        instance: 'instance',
        zone: 'zone',
      },
      disableSourceMapParams
    );
    const profiler: Profiler = await createProfiler(config);
    const expConfig = Object.assign({}, config, defaultConfig);
    assert.deepStrictEqual(profiler.config, expConfig);
  });

  it('should get values from from environment config when not specified in config or other environment variables', async () => {
    instanceMetadataStub = sinon.stub(gcpMetadata, 'instance');
    instanceMetadataStub.throwsException('cannot access metadata');
    projectMetadataStub = sinon.stub(gcpMetadata, 'project');
    projectMetadataStub.throwsException('cannot access metadata');

    process.env.GCLOUD_PROFILER_CONFIG = './test/fixtures/test-config.json';

    const expConfigParams = {
      logLevel: 3,
      serviceContext: {
        version: 'env_config_version',
        service: 'env_config_service',
      },
      disableHeap: true,
      disableTime: true,
      instance: 'env_config_instance',
      zone: 'env_config_zone',
      projectId: 'env_config_fake-projectId',
    };

    const config = disableSourceMapParams;
    const profiler: Profiler = await createProfiler(config);
    const expConfig = Object.assign({}, config, defaultConfig, expConfigParams);
    assert.deepStrictEqual(profiler.config, expConfig);
  });
  it('should start heap profiler when disableHeap is not set', async () => {
    const config = Object.assign(
      {
        projectId: 'config-projectId',
        serviceContext: {service: 'config-service'},
        instance: 'envConfig-instance',
        zone: 'envConfig-zone',
      },
      disableSourceMapParams
    );
    await createProfiler(config);
    assert.ok(
      startStub.calledWith(1024 * 512, 64),
      'expected heap profiler to be started'
    );
  });
  it('should start not heap profiler when disableHeap is true', async () => {
    const config = Object.assign(
      {
        projectId: 'config-projectId',
        serviceContext: {service: 'config-service'},
        disableHeap: true,
        instance: 'envConfig-instance',
        zone: 'envConfig-zone',
      },
      disableSourceMapParams
    );
    await createProfiler(config);
    assert.ok(!startStub.called, 'expected heap profiler to not be started');
  });
});
