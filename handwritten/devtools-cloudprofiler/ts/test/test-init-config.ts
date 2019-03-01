/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as assert from 'assert';
import * as gcpMetadata from 'gcp-metadata';
import {heap as heapProfiler} from 'pprof';
import * as sinon from 'sinon';

import {createProfiler, nodeVersionOkay} from '../src/index';
import {Profiler} from '../src/profiler';

describe('nodeVersionOkay', () => {
  it('should accept alpha versions', () => {
    assert.strictEqual(true, nodeVersionOkay('v11.0.0-alpha.1'));
  });
  it('should accept beta versions', () => {
    assert.strictEqual(true, nodeVersionOkay('v8.9.10-beta.2'));
  });
  it('should accept nightly versions', () => {
    assert.strictEqual(true, nodeVersionOkay('v11.0.0-nightly2018000000'));
  });
  it('should accept pre-release versions', () => {
    assert.strictEqual(true, nodeVersionOkay('v11.0.0-pre'));
  });
  it('should accept v6.12.3', () => {
    assert.strictEqual(true, nodeVersionOkay('v6.12.3'));
  });
  it('should not accept v6.12.2', () => {
    assert.strictEqual(false, nodeVersionOkay('v6.12.2'));
  });
  it('should accept v8.9.4', () => {
    assert.strictEqual(true, nodeVersionOkay('v8.9.4'));
  });
  it('should not accept v8.9.3', () => {
    assert.strictEqual(false, nodeVersionOkay('v8.9.3'));
  });
  it('should accept v10.4.1', () => {
    assert.strictEqual(true, nodeVersionOkay('v10.4.1'));
  });
  it('should not accept v10.4.0', () => {
    assert.strictEqual(false, nodeVersionOkay('v10.4.0'));
  });
  it('should accept node 7', () => {
    assert.strictEqual(true, nodeVersionOkay('v7.7.7'));
  });
  it('should accept node 9', () => {
    assert.strictEqual(true, nodeVersionOkay('v9.9.9'));
  });
});

describe('createProfiler', () => {
  let savedEnv: NodeJS.ProcessEnv;
  let metadataStub: sinon.SinonStub|undefined;
  let startStub: sinon.SinonStub;

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
    baseApiUrl: 'https://cloudprofiler.googleapis.com/v2',
  };
  const sourceMapSearchPath: string[] = [];
  const disableSourceMapParams = {
    sourceMapSearchPath: ['path'],
    disableSourceMaps: true,
  };
  let defaultConfig: {};

  before(async () => {
    process.env = {};
    defaultConfig = internalConfigParams || {};
    startStub = sinon.stub(heapProfiler, 'start');
    savedEnv = process.env;
  });

  beforeEach(() => {
    process.env = {};
  });

  afterEach(() => {
    if (metadataStub) {
      metadataStub.restore();
    }
    heapProfiler.stop();
    startStub.reset();
  });

  after(() => {
    process.env = savedEnv;
    startStub.restore();
  });

  it('should not modify specified fields when not on GCE', async () => {
    metadataStub = sinon.stub(gcpMetadata, 'instance')
                       .throwsException('cannot access metadata');

    const config = Object.assign(
        {
          logLevel: 2,
          serviceContext: {version: 'fake-version', service: 'fake-service'},
          disableHeap: true,
          disableTime: true,
          instance: 'instance',
          zone: 'zone',
          projectId: 'fake-projectId'
        },
        disableSourceMapParams);

    const profiler: Profiler = await createProfiler(config);
    const expConfig = Object.assign({}, defaultConfig, config);
    assert.deepEqual(profiler.config, expConfig);
  });

  it('should not modify specified fields when on GCE', async () => {
    metadataStub = sinon.stub(gcpMetadata, 'instance');
    metadataStub.withArgs('name')
        .resolves({data: 'gce-instance'})
        .withArgs('zone')
        .resolves({data: 'projects/123456789012/zones/gce-zone'});

    const config = Object.assign(
        {
          logLevel: 2,
          serviceContext: {version: 'fake-version', service: 'fake-service'},
          disableHeap: true,
          disableTime: true,
          instance: 'instance',
          zone: 'zone',
          projectId: 'fake-projectId'
        },
        disableSourceMapParams);
    const profiler: Profiler = await createProfiler(config);
    const expConfig = Object.assign({}, defaultConfig, config);
    assert.deepEqual(profiler.config, expConfig);
  });

  it('should get zone and instance from GCE', async () => {
    metadataStub = sinon.stub(gcpMetadata, 'instance');
    metadataStub.withArgs('name')
        .resolves({data: 'gce-instance'})
        .withArgs('zone')
        .resolves({data: 'projects/123456789012/zones/gce-zone'});
    const config = Object.assign(
        {
          projectId: 'projectId',
          logLevel: 2,
          serviceContext: {version: '', service: 'fake-service'},
          disableHeap: true,
          disableTime: true,
        },
        disableSourceMapParams);
    const expConfigParams = {
      logLevel: 2,
      serviceContext: {version: '', service: 'fake-service'},
      disableHeap: true,
      disableTime: true,
      instance: 'gce-instance',
      zone: 'gce-zone',
      projectId: 'projectId'
    };
    const profiler: Profiler = await createProfiler(config);
    const expConfig = Object.assign(
        {}, defaultConfig, disableSourceMapParams, expConfigParams);
    assert.deepEqual(profiler.config, expConfig);
  });

  it('should not reject when not on GCE and no zone and instance found',
     async () => {
       metadataStub = sinon.stub(gcpMetadata, 'instance');
       metadataStub.throwsException('cannot access metadata');
       const config = Object.assign(
           {
             projectId: 'fake-projectId',
             serviceContext: {service: 'fake-service'}
           },
           disableSourceMapParams);
       const expConfigParams = {
         logLevel: 2,
         serviceContext: {service: 'fake-service'},
         disableHeap: false,
         disableTime: false,
         projectId: 'fake-projectId',
       };
       const profiler: Profiler = await createProfiler(config);
       const expConfig = Object.assign(
           {}, defaultConfig, disableSourceMapParams, expConfigParams);
       assert.deepEqual(profiler.config, expConfig);
     });

  it('should reject when no service specified', async () => {
    metadataStub = sinon.stub(gcpMetadata, 'instance');
    metadataStub.throwsException('cannot access metadata');
    const config = Object.assign(
        {
          logLevel: 2,
          serviceContext: {version: ''},
          disableHeap: true,
          disableTime: true,
        },
        disableSourceMapParams);
    createProfiler(config)
        .then(() => {
          assert.fail('expected error because no service in config');
        })
        .catch((e: Error) => {
          assert.strictEqual(
              e.message,
              'Could not start profiler: Error: Service must be specified in the configuration');
        });
  });

  it('should reject when no service does not match service regular expression',
     async () => {
       metadataStub = sinon.stub(gcpMetadata, 'instance');
       metadataStub.throwsException('cannot access metadata');
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
             e.message,
             'Service serviceName does not match regular expression "/^[a-z]([-a-z0-9_.]{0,253}[a-z0-9])?$/"');
       }
     });

  it('should get have no projectId when no projectId given', async () => {
    metadataStub = sinon.stub(gcpMetadata, 'instance');
    metadataStub.throwsException('cannot access metadata');

    const config = Object.assign(
        {
          logLevel: 2,
          serviceContext: {version: '', service: 'fake-service'},
          disableHeap: true,
          disableTime: true,
          instance: 'instance',
          zone: 'zone'
        },
        disableSourceMapParams);
    const profiler: Profiler = await createProfiler(config);
    const expConfig =
        Object.assign({}, config, disableSourceMapParams, defaultConfig);
    assert.deepEqual(profiler.config, expConfig);
  });

  it('should set sourceMapSearchPaths when specified in the config',
     async () => {
       metadataStub = sinon.stub(gcpMetadata, 'instance');
       metadataStub.throwsException('cannot access metadata');

       const config = Object.assign(
           {
             logLevel: 2,
             serviceContext: {version: '', service: 'fake-service'},
             disableHeap: true,
             disableTime: true,
             instance: 'instance',
             zone: 'zone',
             sourceMapSearchPath: ['path'],
           },
           disableSourceMapParams);
       const profiler: Profiler = await createProfiler(config);
       const expConfig =
           Object.assign({}, config, disableSourceMapParams, defaultConfig);
       assert.deepEqual(profiler.config, expConfig);
     });

  it('should reject when sourceMapSearchPaths is empty array and source map support is enabled',
     async () => {
       metadataStub = sinon.stub(gcpMetadata, 'instance');
       metadataStub.throwsException('cannot access metadata');

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
             e.message,
             'serviceMapSearchPath is an empty array. Use disableSourceMaps ' +
                 'to disable source map support instead.');
       }
     });

  it('should set baseApiUrl to non-default value', async () => {
    metadataStub = sinon.stub(gcpMetadata, 'instance');
    metadataStub.throwsException('cannot access metadata');

    const config = Object.assign(
        {
          serviceContext: {version: '', service: 'fake-service'},
          baseApiUrl: 'https://test-cloudprofiler.sandbox.googleapis.com/v2'
        },
        disableSourceMapParams);
    const expConfigParams = {
      serviceContext: {version: '', service: 'fake-service'},
      disableHeap: false,
      disableTime: false,
      logLevel: 2,
      baseApiUrl: 'https://test-cloudprofiler.sandbox.googleapis.com/v2'
    };
    const expConfig = Object.assign(
        {}, defaultConfig, disableSourceMapParams, expConfigParams);
    const profiler: Profiler = await createProfiler(config);
    assert.deepEqual(profiler.config, expConfig);
  });

  it('should get values from from environment variable when not specified in config or environment variables',
     async () => {
       process.env.GCLOUD_PROJECT = 'process-projectId';
       process.env.GCLOUD_PROFILER_LOGLEVEL = '4';
       process.env.GAE_SERVICE = 'process-service';
       process.env.GAE_VERSION = 'process-version';
       process.env.GCLOUD_PROFILER_CONFIG =
           './ts/test/fixtures/test-config.json';
       metadataStub = sinon.stub(gcpMetadata, 'instance');
       metadataStub.withArgs('name')
           .resolves({data: 'gce-instance'})
           .withArgs('zone')
           .resolves({data: 'projects/123456789012/zones/gce-zone'});
       const config = disableSourceMapParams;
       const expConfigParams = {
         projectId: 'process-projectId',
         logLevel: 4,
         serviceContext:
             {version: 'process-version', service: 'process-service'},
         disableHeap: true,
         disableTime: true,
         instance: 'env_config_instance',
         zone: 'env_config_zone'
       };
       const profiler: Profiler = await createProfiler(config);
       const expConfig =
           Object.assign({}, config, defaultConfig, expConfigParams);
       assert.deepEqual(profiler.config, expConfig);
     });

  it('should not get values from from environment variable when values specified in config',
     async () => {
       process.env.GCLOUD_PROJECT = 'process-projectId';
       process.env.GCLOUD_PROFILER_LOGLEVEL = '4';
       process.env.GAE_SERVICE = 'process-service';
       process.env.GAE_VERSION = 'process-version';
       process.env.GCLOUD_PROFILER_CONFIG =
           './ts/test/fixtures/test-config.json';
       metadataStub = sinon.stub(gcpMetadata, 'instance');
       metadataStub.withArgs('name')
           .resolves({data: 'gce-instance'})
           .withArgs('zone')
           .resolves({data: 'projects/123456789012/zones/gce-zone'});

       const config = Object.assign(
           {
             projectId: 'config-projectId',
             logLevel: 1,
             serviceContext:
                 {version: 'config-version', service: 'config-service'},
             disableHeap: false,
             disableTime: false,
             instance: 'instance',
             zone: 'zone'
           },
           disableSourceMapParams);
       const profiler: Profiler = await createProfiler(config);
       const expConfig = Object.assign({}, config, defaultConfig);
       assert.deepEqual(profiler.config, expConfig);
     });

  it('should get values from from environment config when not specified in config or other environment variables',
     async () => {
       metadataStub = sinon.stub(gcpMetadata, 'instance');
       metadataStub.throwsException('cannot access metadata');
       process.env.GCLOUD_PROFILER_CONFIG =
           './ts/test/fixtures/test-config.json';

       const expConfigParams = {
         logLevel: 3,
         serviceContext:
             {version: 'env_config_version', service: 'env_config_service'},
         disableHeap: true,
         disableTime: true,
         instance: 'env_config_instance',
         zone: 'env_config_zone',
         projectId: 'env_config_fake-projectId'
       };

       const config = disableSourceMapParams;
       const profiler: Profiler = await createProfiler(config);
       const expConfig =
           Object.assign({}, config, defaultConfig, expConfigParams);
       assert.deepEqual(profiler.config, expConfig);
     });
  it('should start heap profiler when disableHeap is not set', async () => {
    const config = Object.assign(
        {
          projectId: 'config-projectId',
          serviceContext: {service: 'config-service'},
          instance: 'envConfig-instance',
          zone: 'envConfig-zone',
        },
        disableSourceMapParams);
    const profiler: Profiler = await createProfiler(config);
    assert.ok(
        startStub.calledWith(1024 * 512, 64),
        'expected heap profiler to be started');
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
        disableSourceMapParams);
    const profiler: Profiler = await createProfiler(config);
    assert.ok(!startStub.called, 'expected heap profiler to not be started');
  });
});
