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
import {describe, beforeEach, after, it} from 'mocha';
import * as is from 'is';
import omitBy = require('lodash.omitby');
import {FakeConfiguration as Configuration} from '../fixtures/configuration';
import {deepStrictEqual} from '../util';
const level = process.env.GCLOUD_ERRORS_LOGLEVEL;
import {createLogger} from '../../src/logger';

const logger = createLogger({
  logLevel: is.number(level) ? level : 4,
});
const serviceConfigEnv = {
  GAE_SERVICE: process.env.GAE_SERVICE,
  GAE_VERSION: process.env.GAE_VERSION,
  GAE_MODULE_VERSION: process.env.GAE_MODULE_VERSION,
  FUNCTION_NAME: process.env.FUNCTION_NAME,
  GAE_MODULE_NAME: process.env.GAE_MODULE_NAME,
};
function sterilizeServiceConfigEnv() {
  Object.keys(serviceConfigEnv).forEach(key => {
    delete process.env[key];
  });
}
function setEnv(envData: {
  gaeServiceName: string | null;
  gaeServiceVersion: string;
  gaeModuleName: string | null;
  gaeModuleVersion: string;
  functionName: string | null;
  kService: string | null;
  kRevision: string | null;
}) {
  Object.assign(
    process.env,
    omitBy(
      {
        GAE_SERVICE: envData.gaeServiceName,
        GAE_VERSION: envData.gaeServiceVersion,
        GAE_MODULE_NAME: envData.gaeModuleName,
        GAE_MODULE_VERSION: envData.gaeModuleVersion,
        FUNCTION_NAME: envData.functionName,
        K_SERVICE: envData.kService,
        K_REVISION: envData.kRevision,
      },
      val => {
        return !is.string(val);
      }
    )
  );
}
function restoreServiceConfigEnv() {
  Object.assign(process.env, serviceConfigEnv);
}

describe('Testing service configuration', () => {
  beforeEach(() => {
    sterilizeServiceConfigEnv();
  });
  after(() => {
    restoreServiceConfigEnv();
  });
  it(
    'A Configuration uses the function name as the service name on GCF ' +
      'if the service name is not given in the given config',
    () => {
      setEnv({
        gaeServiceName: 'someModuleName',
        gaeServiceVersion: '1.0',
        gaeModuleName: 'InvalidName',
        gaeModuleVersion: 'InvalidVersion',
        functionName: 'someFunction',
        kService: null,
        kRevision: null,
      });
      const c = new Configuration({}, logger);
      deepStrictEqual(c.getServiceContext().service, 'someFunction');
      // FUNCTION_NAME is set and the user didn't specify a version, and so
      // the version should not be defined
      deepStrictEqual(c.getServiceContext().version, undefined);
    }
  );
  it(
    'A Configuration uses the function name as the service name on GCF ' +
      'if the service name is not given in the given config ' +
      'even if the GAE_SERVICE was not set',
    () => {
      setEnv({
        gaeServiceName: null,
        gaeServiceVersion: '1.0',
        gaeModuleName: null,
        gaeModuleVersion: 'InvalidVersion',
        functionName: 'someFunction',
        kService: null,
        kRevision: null,
      });
      const c = new Configuration({}, logger);
      deepStrictEqual(c.getServiceContext().service, 'someFunction');
      // The user didn't specify a version and FUNCTION_NAME is defined, and
      // so the version should not be defined
      deepStrictEqual(c.getServiceContext().version, undefined);
    }
  );
  it(
    'A Configuration uses the GAE_SERVICE env value as the service name ' +
      'if the FUNCTION_NAME env variable is not set and the given config ' +
      'does not specify the service name',
    () => {
      setEnv({
        gaeServiceName: 'someModuleName',
        gaeServiceVersion: '1.0',
        gaeModuleName: 'InvalidName',
        gaeModuleVersion: 'InvalidVersion',
        functionName: null,
        kService: null,
        kRevision: null,
      });
      const c = new Configuration({}, logger);
      deepStrictEqual(c.getServiceContext().service, 'someModuleName');
      // The user didn't specify a version, and FUNCTION_NAME is not defined,
      // and so use the GAE_MODULE_VERSION
      deepStrictEqual(c.getServiceContext().version, '1.0');
    }
  );
  it(
    'A Configuration uses the service name in the given config if it ' +
      'was specified and both the GAE_SERVICE and FUNCTION_NAME ' +
      'env vars are set',
    () => {
      setEnv({
        gaeServiceName: 'someModuleName',
        gaeServiceVersion: '1.0',
        gaeModuleName: 'InvalidName',
        gaeModuleVersion: 'InvalidVersion',
        functionName: 'someFunction',
        kService: null,
        kRevision: null,
      });
      const c = new Configuration(
        {
          serviceContext: {
            service: 'customService',
          },
        },
        logger
      );
      deepStrictEqual(c.getServiceContext().service, 'customService');
      // The user didn't specify a version, but FUNCTION_NAME is defined, and
      // so the version should not be defined
      deepStrictEqual(c.getServiceContext().version, undefined);
    }
  );
  it(
    'A Configuration uses the service name and version in the given config' +
      'they were both specified and both the GAE_SERVICE and FUNCTION_NAME ' +
      'env vars are set',
    () => {
      setEnv({
        gaeServiceName: 'someModuleName',
        gaeServiceVersion: '1.0',
        gaeModuleName: 'InvalidName',
        gaeModuleVersion: 'InvalidVersion',
        functionName: 'someFunction',
        kService: null,
        kRevision: null,
      });
      const c = new Configuration(
        {
          serviceContext: {
            service: 'customService',
            version: '2.0',
          },
        },
        logger
      );
      deepStrictEqual(c.getServiceContext().service, 'customService');
      // The user specified version should be used
      deepStrictEqual(c.getServiceContext().version, '2.0');
    }
  );
  it(
    'A Configuration uses the service name in the given config if it ' +
      'was specified and only the GAE_SERVICE env const is set',
    () => {
      setEnv({
        gaeServiceName: 'someModuleName',
        gaeServiceVersion: '1.0',
        gaeModuleName: 'InvalidName',
        gaeModuleVersion: 'InvalidVersion',
        functionName: null,
        kService: null,
        kRevision: null,
      });
      const c = new Configuration(
        {
          serviceContext: {
            service: 'customService',
          },
        },
        logger
      );
      deepStrictEqual(c.getServiceContext().service, 'customService');
      // The user didn't specify a version and FUNCTION_NAME is not defined
      // and so the GAE_MODULE_VERSION should be used
      deepStrictEqual(c.getServiceContext().version, '1.0');
    }
  );
  it(
    'A Configuration uses the service name and version in the given config ' +
      'they were both specified and only the GAE_SERVICE env const is set',
    () => {
      setEnv({
        gaeServiceName: 'someModuleName',
        gaeServiceVersion: '1.0',
        gaeModuleName: 'InvalidName',
        gaeModuleVersion: 'InvalidVersion',
        functionName: null,
        kService: null,
        kRevision: null,
      });
      const c = new Configuration(
        {
          serviceContext: {
            service: 'customService',
            version: '2.0',
          },
        },
        logger
      );
      deepStrictEqual(c.getServiceContext().service, 'customService');
      // The user specified version should be used
      deepStrictEqual(c.getServiceContext().version, '2.0');
    }
  );
  it(
    'A Configuration uses the service name in the given config if it ' +
      'was specified and only the FUNCTION_NAME env const is set',
    () => {
      setEnv({
        gaeServiceName: null,
        gaeServiceVersion: '1.0',
        gaeModuleName: null,
        gaeModuleVersion: 'InvalidVersion',
        functionName: 'someFunction',
        kService: null,
        kRevision: null,
      });
      const c = new Configuration(
        {
          serviceContext: {
            service: 'customService',
          },
        },
        logger
      );
      deepStrictEqual(c.getServiceContext().service, 'customService');
      // The user didn't specify a version and thus because FUNCTION_NAME is
      // defined the version should not be defined
      deepStrictEqual(c.getServiceContext().version, undefined);
    }
  );
  it(
    'A Configuration uses the service name and version in the given config ' +
      'if they were both specified and only the FUNCTION_NAME env const is set',
    () => {
      setEnv({
        gaeServiceName: null,
        gaeServiceVersion: '1.0',
        gaeModuleName: null,
        gaeModuleVersion: 'InvalidVersion',
        functionName: 'someFunction',
        kService: null,
        kRevision: null,
      });
      const c = new Configuration(
        {
          serviceContext: {
            service: 'customService',
            version: '2.0',
          },
        },
        logger
      );
      assert.strictEqual(c.getServiceContext().service, 'customService');
      // The user specified version should be used
      assert.strictEqual(c.getServiceContext().version, '2.0');
    }
  );
  it(
    'A Configuration uses the service name "node" and no version if ' +
      'GAE_SERVICE is not set, FUNCTION_NAME is not set, and the user has ' +
      'not specified a service name or version',
    () => {
      const c = new Configuration({}, logger);
      assert.strictEqual(c.getServiceContext().service, 'node');
      assert.strictEqual(c.getServiceContext().version, undefined);
    }
  );
  it(
    'A Configuration uses the service name "node" and no version if ' +
      'GAE_SERVICE is not set, FUNCTION_NAME is not set, and the user has ' +
      'not specified a service name or version even if GAE_VERSION has ' +
      'been set',
    () => {
      setEnv({
        gaeServiceName: null,
        gaeServiceVersion: 'InvalidVersion',
        gaeModuleName: null,
        gaeModuleVersion: 'InvalidVersion',
        functionName: null,
        kService: null,
        kRevision: null,
      });
      const c = new Configuration({}, logger);
      assert.strictEqual(c.getServiceContext().service, 'node');
      assert.strictEqual(c.getServiceContext().version, undefined);
    }
  );
  it(
    'A Configuration uses the service name "node" and the user specified ' +
      'version if GAE_SERVICE is not set, FUNCTION_NAME is not set, and the ' +
      'user has not specified a service name but has specified a version',
    () => {
      const c = new Configuration(
        {
          serviceContext: {
            version: '2.0',
          },
        },
        logger
      );
      deepStrictEqual(c.getServiceContext().service, 'node');
      deepStrictEqual(c.getServiceContext().version, '2.0');
    }
  );
  it('A Configuration uses the K_SERVICE and K_REVISION env variables if set', () => {
    setEnv({
      gaeServiceName: null,
      gaeServiceVersion: 'x',
      gaeModuleName: null,
      gaeModuleVersion: 'y',
      functionName: null,
      kService: 'custom-service',
      kRevision: 'custom-revision',
    });
    const c = new Configuration({}, logger);
    assert.strictEqual(c.getServiceContext().service, 'custom-service');
    assert.strictEqual(c.getServiceContext().version, 'custom-revision');
  });
  it('A Configuration gives priority to K_SERVICE and K_REVISION env variables', () => {
    setEnv({
      gaeServiceName: 'gae-service-name',
      gaeServiceVersion: 'gae-service-version',
      gaeModuleName: 'gae-module-name',
      gaeModuleVersion: 'gae-module-version',
      functionName: 'function-name',
      kService: 'k-service',
      kRevision: 'k-revision',
    });
    const c = new Configuration({}, logger);
    assert.strictEqual(c.getServiceContext().service, 'k-service');
    assert.strictEqual(c.getServiceContext().version, 'k-revision');
  });
});
