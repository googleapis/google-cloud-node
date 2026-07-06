// Copyright 2016 Google LLC
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
import {describe, it, beforeEach, before, after, afterEach} from 'mocha';
import BigNumber from 'bignumber.js';
import * as extend from 'extend';
import {GCPEnv} from 'google-auth-library';
import * as proxyquire from 'proxyquire';

let instanceOverride: {} | null;
const fakeGcpMetadata = {
  instance(path: string) {
    if (instanceOverride) {
      const override = Array.isArray(instanceOverride)
        ? instanceOverride.find(entry => entry.path === path)
        : instanceOverride;

      if (override.path) {
        assert.strictEqual(path, override.path);
      }

      if (override.errorArg) {
        return Promise.reject(override.errorArg);
      }

      if (override.successArg) {
        return Promise.resolve(override.successArg);
      }
    }

    return Promise.resolve('fake-instance-value');
  },
};

const FAKE_READFILE_ERROR_MESSAGE = 'fake readFile error';
const FAKE_READFILE_CONTENTS = 'fake readFile contents';
let readFileShouldError: boolean;
const fakeFS = {
  readFile: (filename: string, encoding: string, callback: Function) => {
    setImmediate(() => {
      if (readFileShouldError) {
        callback(new Error(FAKE_READFILE_ERROR_MESSAGE));
      } else {
        callback(null, FAKE_READFILE_CONTENTS);
      }
    });
  },
};

describe('metadata', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let metadataCached: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let metadata: any;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const ENV_CACHED = extend({}, process.env);

  const INITIAL_ENV: {[key: string]: string | undefined} = {};

  before(() => {
    metadata = proxyquire('../../src/utils/metadata', {
      'gcp-metadata': fakeGcpMetadata,
      fs: fakeFS,
    });

    metadataCached = extend({}, metadata);
  });

  beforeEach(() => {
    extend(metadata, metadataCached);
    instanceOverride = null;
    readFileShouldError = false;
  });

  afterEach(() => {
    extend(process.env, ENV_CACHED);
  });

  describe('getCloudFunctionDescriptor', () => {
    const FUNCTION_NAME = 'function-name';
    const FUNCTION_REGION = 'function-region';

    const K_SERVICE = 'k-service';
    const GOOGLE_CLOUD_REGION = 'google-cloud-region';

    const TARGET_KEYS = [
      'FUNCTION_NAME',
      'FUNCTION_REGION',
      'K_SERVICE',
      'GOOGLE_CLOUD_REGION',
    ];

    before(() => {
      for (const key of TARGET_KEYS) {
        INITIAL_ENV[key] = process.env[key];
      }
    });

    after(() => {
      for (const key of TARGET_KEYS) {
        const val = INITIAL_ENV[key];
        if (val === undefined) {
          delete process.env[key];
        } else {
          process.env[key] = val;
        }
      }
    });

    beforeEach(() => {
      for (const key of TARGET_KEYS) {
        delete process.env[key];
      }
      process.env.FUNCTION_NAME = FUNCTION_NAME;
      process.env.K_SERVICE = K_SERVICE;
    });

    it('should return the correct primary descriptor', async () => {
      process.env.GOOGLE_CLOUD_REGION = GOOGLE_CLOUD_REGION;
      process.env.FUNCTION_REGION = FUNCTION_REGION;
      const descriptor = await metadata.getCloudFunctionDescriptor();
      assert.deepStrictEqual(descriptor, {
        type: 'cloud_function',
        labels: {
          function_name: K_SERVICE,
          region: GOOGLE_CLOUD_REGION,
        },
      });
    });

    it('should return the correct secondary descriptor', async () => {
      process.env.FUNCTION_REGION = FUNCTION_REGION;
      delete process.env['K_SERVICE'];
      const descriptor = await metadata.getCloudFunctionDescriptor();
      assert.deepStrictEqual(descriptor, {
        type: 'cloud_function',
        labels: {
          function_name: FUNCTION_NAME,
          region: FUNCTION_REGION,
        },
      });
    });

    it('should return the correct fallback descriptor', async () => {
      const ZONE_ID = 'us-west2-1';
      const ZONE_FULL = `projects/fake-project/zones/${ZONE_ID}`;
      instanceOverride = {path: 'zone', successArg: ZONE_FULL};
      const descriptor = await metadata.getCloudFunctionDescriptor();
      assert.deepStrictEqual(descriptor, {
        type: 'cloud_function',
        labels: {
          function_name: K_SERVICE,
          region: 'us-west2',
        },
      });
    });
  });

  describe('getCloudRunDescriptor', () => {
    const K_SERVICE = 'hello-world';
    const K_REVISION = 'hello-world.1';
    const K_CONFIGURATION = 'hello-world';

    const TARGET_KEYS = ['K_SERVICE', 'K_REVISION', 'K_CONFIGURATION'];

    before(() => {
      for (const key of TARGET_KEYS) {
        INITIAL_ENV[key] = process.env[key];
      }
    });

    after(() => {
      for (const key of TARGET_KEYS) {
        const val = INITIAL_ENV[key];
        if (val === undefined) {
          delete process.env[key];
        } else {
          process.env[key] = val;
        }
      }
    });

    beforeEach(() => {
      for (const key of TARGET_KEYS) {
        delete process.env[key];
      }
      process.env.K_SERVICE = K_SERVICE;
      process.env.K_REVISION = K_REVISION;
      process.env.K_CONFIGURATION = K_CONFIGURATION;
    });

    it('should return the correct descriptor', async () => {
      const ZONE_ID = 'cyrodiil-anvil-2';
      const ZONE_FULL = `projects/fake-project/zones/${ZONE_ID}`;
      instanceOverride = {path: 'zone', successArg: ZONE_FULL};
      const descriptor = await metadata.getCloudRunDescriptor();
      assert.deepStrictEqual(descriptor, {
        type: 'cloud_run_revision',
        labels: {
          service_name: K_SERVICE,
          revision_name: K_REVISION,
          configuration_name: K_CONFIGURATION,
          location: 'cyrodiil-anvil',
        },
      });
    });
  });

  describe('getGAEDescriptor', () => {
    const GAE_MODULE_NAME = 'gae-module-name';
    const GAE_SERVICE = 'gae-service';
    const GAE_VERSION = 'gae-version';

    beforeEach(() => {
      process.env.GAE_MODULE_NAME = GAE_MODULE_NAME;
      process.env.GAE_SERVICE = GAE_SERVICE;
      process.env.GAE_VERSION = GAE_VERSION;
    });

    it('should return the correct descriptor', async () => {
      const ZONE_ID = 'cyrodiil-anvil-2';
      const ZONE_FULL = `projects/fake-project/zones/${ZONE_ID}`;
      instanceOverride = {path: 'zone', successArg: ZONE_FULL};
      const descriptor = await metadata.getGAEDescriptor();
      assert.deepStrictEqual(descriptor, {
        type: 'gae_app',
        labels: {
          module_id: GAE_SERVICE,
          version_id: GAE_VERSION,
          zone: ZONE_ID,
        },
      });
    });

    it('should use GAE_MODULE_NAME for module_id', async () => {
      delete process.env.GAE_SERVICE;

      const moduleId = (await metadata.getGAEDescriptor()).labels.module_id;
      assert.strictEqual(moduleId, GAE_MODULE_NAME);
    });
  });

  describe('getGKEDescriptor', () => {
    const CLUSTER_NAME = 'gke-cluster-name';

    beforeEach(() => {
      process.env.HOSTNAME = 'node-gke-123';
      process.env.CONTAINER_NAME = 'my-container';
    });

    afterEach(() => {
      delete process.env.HOSTNAME;
      delete process.env.CONTAINER_NAME;
    });

    it('should return the correct descriptor', async () => {
      const ZONE_ID = 'cyrodiil-anvil-2';
      const ZONE_FULL = `projects/fake-project/zones/${ZONE_ID}`;
      instanceOverride = [
        {
          path: 'attributes/cluster-name',
          successArg: CLUSTER_NAME,
        },
        {
          path: 'zone',
          successArg: ZONE_FULL,
        },
      ];
      const descriptor = await metadata.getGKEDescriptor();
      assert.deepStrictEqual(descriptor, {
        type: 'k8s_container',
        labels: {
          cluster_name: CLUSTER_NAME,
          namespace_name: FAKE_READFILE_CONTENTS,
          location: ZONE_ID,
          pod_name: 'node-gke-123',
          container_name: 'my-container',
        },
      });
    });

    it('should throw error on failure to acquire metadata', async () => {
      const FAKE_ERROR = new Error();
      instanceOverride = {
        errorArg: FAKE_ERROR,
      };
      await assert.rejects(
        metadata.getGKEDescriptor(),
        (err: Error) => err === FAKE_ERROR
      );
    });

    it('should not error if reading namespace file fails', async () => {
      readFileShouldError = true;

      await assert.doesNotReject(metadata.getGKEDescriptor(), (err: Error) =>
        err.message.includes(FAKE_READFILE_ERROR_MESSAGE)
      );
    });
  });

  describe('getGlobalDescriptor', () => {
    it('should return the correct descriptor', () => {
      assert.deepStrictEqual(metadata.getGlobalDescriptor(), {
        type: 'global',
      });
    });
  });

  describe('getDefaultResource', () => {
    it('should get the environment from auth client', async () => {
      let called = false;

      const fakeAuth = {
        async getEnv() {
          called = true;
          return null;
        },
      };
      await metadata.getDefaultResource(fakeAuth);
      assert.ok(called);
    });

    describe('environments', () => {
      describe('app engine', () => {
        it('should return correct descriptor', async () => {
          const GAE_MODULE_NAME = 'gae-module-name';
          const GAE_SERVICE = 'gae-service';
          const GAE_VERSION = 'gae-version';
          process.env.GAE_MODULE_NAME = GAE_MODULE_NAME;
          process.env.GAE_SERVICE = GAE_SERVICE;
          process.env.GAE_VERSION = GAE_VERSION;
          const ZONE_ID = 'cyrodiil-anvil-2';
          const ZONE_FULL = `projects/fake-project/zones/${ZONE_ID}`;
          instanceOverride = {path: 'zone', successArg: ZONE_FULL};

          const fakeAuth = {
            async getEnv() {
              return GCPEnv.APP_ENGINE;
            },
          };

          const defaultResource = await metadata.getDefaultResource(fakeAuth);
          assert.deepStrictEqual(defaultResource, {
            type: 'gae_app',
            labels: {
              module_id: GAE_SERVICE,
              version_id: GAE_VERSION,
              zone: ZONE_ID,
            },
          });
        });
      });

      describe('cloud function', () => {
        it('should return correct descriptor', async () => {
          const FUNCTION_NAME = 'function-name';
          const FUNCTION_REGION = 'function-region';
          process.env.FUNCTION_NAME = FUNCTION_NAME;
          process.env.FUNCTION_REGION = FUNCTION_REGION;

          const fakeAuth = {
            async getEnv() {
              return GCPEnv.CLOUD_FUNCTIONS;
            },
          };

          const defaultResource = await metadata.getDefaultResource(fakeAuth);
          assert.deepStrictEqual(defaultResource, {
            type: 'cloud_function',
            labels: {
              function_name: FUNCTION_NAME,
              region: FUNCTION_REGION,
            },
          });
        });
      });

      describe('cloud run', () => {
        after(() => {
          delete process.env['K_CONFIGURATION'];
          delete process.env['K_REVISION'];
          delete process.env['K_SERVICE'];
        });

        it('should return correct descriptor', async () => {
          const K_SERVICE = 'hello-world';
          const K_CONFIGURATION = 'hello-world';
          const K_REVISION = 'hello-world.1';
          const ZONE_ID = 'cyrodiil-anvil-2';
          const ZONE_FULL = `projects/fake-project/zones/${ZONE_ID}`;
          process.env.K_SERVICE = K_SERVICE;
          process.env.K_REVISION = K_REVISION;
          process.env.K_CONFIGURATION = K_CONFIGURATION;
          instanceOverride = [
            {
              path: 'zone',
              successArg: ZONE_FULL,
            },
          ];
          const fakeAuth = {
            async getEnv() {
              return GCPEnv.CLOUD_RUN;
            },
          };

          const defaultResource = await metadata.getDefaultResource(fakeAuth);
          assert.deepStrictEqual(defaultResource, {
            type: 'cloud_run_revision',
            labels: {
              service_name: K_SERVICE,
              revision_name: K_REVISION,
              configuration_name: K_CONFIGURATION,
              location: 'cyrodiil-anvil',
            },
          });
        });
      });

      describe('compute engine', () => {
        it('should return correct descriptor', async () => {
          const INSTANCE_ID = 1234567;
          const ZONE_ID = 'cyrodiil-anvil-2';
          const ZONE_FULL = `projects/fake-project/zones/${ZONE_ID}`;
          instanceOverride = [
            {
              path: 'id',
              successArg: INSTANCE_ID,
            },
            {
              path: 'zone',
              successArg: ZONE_FULL,
            },
          ];

          const fakeAuth = {
            async getEnv() {
              return GCPEnv.COMPUTE_ENGINE;
            },
          };
          const defaultResource = await metadata.getDefaultResource(fakeAuth);
          assert.deepStrictEqual(defaultResource, {
            type: 'gce_instance',
            labels: {
              instance_id: INSTANCE_ID.toString(),
              zone: ZONE_ID,
            },
          });
        });

        it('should deal with instance id being a BigNumber', async () => {
          const INSTANCE_ID_STRING = '3279739563200103600';
          const INSTANCE_ID = new BigNumber(INSTANCE_ID_STRING);
          const ZONE_ID = 'cyrodiil-anvil-2';
          const ZONE_FULL = `projects/fake-project/zones/${ZONE_ID}`;
          instanceOverride = [
            {
              path: 'id',
              successArg: INSTANCE_ID,
            },
            {
              path: 'zone',
              successArg: ZONE_FULL,
            },
          ];

          const fakeAuth = {
            async getEnv() {
              return GCPEnv.COMPUTE_ENGINE;
            },
          };

          const defaultResource = await metadata.getDefaultResource(fakeAuth);
          assert.deepStrictEqual(defaultResource, {
            type: 'gce_instance',
            labels: {
              instance_id: INSTANCE_ID_STRING,
              zone: ZONE_ID,
            },
          });
        });
      });

      describe('container engine', () => {
        it('should return correct descriptor', async () => {
          const CLUSTER_NAME = 'overridden-value';
          const ZONE_ID = 'cyrodiil-anvil-2';
          const ZONE_FULL = `projects/fake-project/zones/${ZONE_ID}`;
          instanceOverride = [
            {
              path: 'attributes/cluster-name',
              successArg: CLUSTER_NAME,
            },
            {
              path: 'zone',
              successArg: ZONE_FULL,
            },
          ];

          const fakeAuth = {
            async getEnv() {
              return GCPEnv.KUBERNETES_ENGINE;
            },
          };
          process.env.HOSTNAME = 'node-gke-123';
          process.env.CONTAINER_NAME = 'my-container';
          const defaultResource = await metadata.getDefaultResource(fakeAuth);
          assert.deepStrictEqual(defaultResource, {
            type: 'k8s_container',
            labels: {
              location: ZONE_ID,
              pod_name: 'node-gke-123',
              cluster_name: CLUSTER_NAME,
              namespace_name: FAKE_READFILE_CONTENTS,
              container_name: 'my-container',
            },
          });
          delete process.env.CONTAINER_NAME;
        });
      });

      describe('global', () => {
        it('should return correct descriptor', async () => {
          const fakeAuth = {
            async getEnv() {
              return GCPEnv.NONE;
            },
          };

          const defaultResource = await metadata.getDefaultResource(fakeAuth);
          assert.deepStrictEqual(defaultResource, {
            type: 'global',
          });
        });
      });
    });
  });

  describe('detectServiceContext', () => {
    it('should return the correct descriptor for App Engine', async () => {
      const GAE_MODULE_NAME = 'gae-module-name';
      const GAE_MODULE_VERSION = 'gae-module-version';
      const GAE_SERVICE = 'gae-service';
      const GAE_VERSION = 'gae-version';
      process.env.GAE_MODULE_NAME = GAE_MODULE_NAME;
      process.env.GAE_MODULE_VERSION = GAE_MODULE_VERSION;
      process.env.GAE_SERVICE = GAE_SERVICE;
      process.env.GAE_VERSION = GAE_VERSION;
      const fakeAuth = {
        async getEnv() {
          return GCPEnv.APP_ENGINE;
        },
      };

      const sc1 = await metadata.detectServiceContext(fakeAuth);
      assert.deepStrictEqual(sc1, {
        service: GAE_SERVICE,
        version: GAE_VERSION,
      });

      delete process.env.GAE_SERVICE;
      const sc2 = await metadata.detectServiceContext(fakeAuth);
      assert.deepStrictEqual(sc2, {
        service: GAE_MODULE_NAME,
        version: GAE_VERSION,
      });

      delete process.env.GAE_VERSION;
      const sc3 = await metadata.detectServiceContext(fakeAuth);
      assert.deepStrictEqual(sc3, {
        service: GAE_MODULE_NAME,
        version: GAE_MODULE_VERSION,
      });
    });

    it('should return the correct descriptor for Cloud Functions', async () => {
      const FUNCTION_NAME = (process.env.FUNCTION_NAME = 'function-name');

      const fakeAuth = {
        async getEnv() {
          return GCPEnv.CLOUD_FUNCTIONS;
        },
      };

      const sc1 = await metadata.detectServiceContext(fakeAuth);
      assert.deepStrictEqual(sc1, {service: FUNCTION_NAME});
    });

    it('should return the correct descriptor for Cloud Run', async () => {
      process.env.K_CONFIGURATION = 'hello-world';
      const SERVICE_NAME = (process.env.K_SERVICE = 'hello-world');

      const fakeAuth = {
        async getEnv() {
          return GCPEnv.CLOUD_RUN;
        },
      };

      const sc1 = await metadata.detectServiceContext(fakeAuth);
      assert.deepStrictEqual(sc1, {service: SERVICE_NAME});

      delete process.env['K_CONFIGURATION'];
      delete process.env['K_SERVICE'];
    });

    it('should return the correct descriptor for GKE', async () => {
      const fakeAuth = {
        async getEnv() {
          return GCPEnv.KUBERNETES_ENGINE;
        },
      };
      process.env.HOSTNAME = 'node-gke-123';
      const serviceContext = await metadata.detectServiceContext(fakeAuth);
      assert.deepStrictEqual(serviceContext, {
        service: 'node-gke-123',
      });
      delete process.env.HOSTNAME;
    });

    it('should return null on GCE', async () => {
      const fakeAuth = {
        async getEnv() {
          return GCPEnv.COMPUTE_ENGINE;
        },
      };
      const serviceContext = await metadata.detectServiceContext(fakeAuth);
      assert.strictEqual(serviceContext, null);
    });

    it('should return null elsewhere', async () => {
      const fakeAuth = {
        async getEnv() {
          return GCPEnv.NONE;
        },
      };
      const serviceContext = await metadata.detectServiceContext(fakeAuth);
      assert.strictEqual(serviceContext, null);
    });
  });
});
