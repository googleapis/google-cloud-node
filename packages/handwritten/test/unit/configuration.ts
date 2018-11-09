/**
 * Copyright 2016 Google Inc. All Rights Reserved.
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
import * as is from 'is';
import merge = require('lodash.merge');
import {FakeConfiguration as Configuration} from '../fixtures/configuration';
import {ConfigurationOptions} from '../../src/configuration';
import {Fuzzer} from '../../utils/fuzzer';
import {deepStrictEqual} from '../util';
const level = process.env.GCLOUD_ERRORS_LOGLEVEL;
import {createLogger} from '../../src/logger';
const logger = createLogger({
  logLevel: is.number(level) ? level : 4,
});
import * as nock from 'nock';

const METADATA_URL =
    'http://metadata.google.internal/computeMetadata/v1/project';

const configEnv = {
  NODE_ENV: process.env.NODE_ENV,
  GCLOUD_PROJECT: process.env.GCLOUD_PROJECT,
  GAE_MODULE_NAME: process.env.GAE_MODULE_NAME,
  GAE_MODULE_VERSION: process.env.GAE_MODULE_VERSION,
};
function sterilizeConfigEnv() {
  delete process.env.NODE_ENV;
  delete process.env.GCLOUD_PROJECT;
  delete process.env.GAE_MODULE_NAME;
  delete process.env.GAE_MODULE_VERSION;
}
function restoreConfigEnv() {
  process.env.NODE_ENV = configEnv.NODE_ENV;
  process.env.GCLOUD_PROJECT = configEnv.GCLOUD_PROJECT;
  process.env.GAE_MODULE_NAME = configEnv.GAE_MODULE_NAME;
  process.env.GAE_MODULE_VERSION = configEnv.GAE_MODULE_VERSION;
}
function createDeadMetadataService() {
  return nock(METADATA_URL).get('/project-id').times(1).reply(500);
}

describe('Configuration class', () => {
  before(() => {
    sterilizeConfigEnv();
  });
  after(() => {
    restoreConfigEnv();
  });
  describe('Initialization', () => {
    const f = new Fuzzer();
    describe('fuzzing the constructor', () => {
      it('Should return default values', () => {
        let c;
        f.fuzzFunctionForTypes((givenConfigFuzz: ConfigurationOptions) => {
          c = new Configuration(givenConfigFuzz, logger);
          deepStrictEqual(c._givenConfiguration, {});
        }, ['object']);
      });
    });
    describe('valid config and default values', () => {
      let c: Configuration;
      const validConfig = {ignoreEnvironmentCheck: true};
      before(() => {
        process.env.NODE_ENV = 'development';
      });
      after(() => {
        sterilizeConfigEnv();
      });
      it('Should not throw with a valid configuration', () => {
        assert.doesNotThrow(() => {
          c = new Configuration(validConfig, logger);
        });
      });
      it('Should have a property reflecting the config argument', () => {
        deepStrictEqual(c._givenConfiguration, validConfig);
      });
      it('Should not have a project id', () => {
        assert.strictEqual(c._projectId, null);
      });
      it('Should not have a key', () => {
        assert.strictEqual(c.getKey(), null);
      });
      it('Should have a default service context', () => {
        deepStrictEqual(c.getServiceContext(), {
          service: 'node',
          version: undefined,
        });
      });
      it('Should specify to not report unhandledRejections', () => {
        assert.strictEqual(c.getReportUnhandledRejections(), false);
      });
    });
    describe('with ignoreEnvironmentCheck', () => {
      const conf =
          merge({}, {projectId: 'some-id'}, {ignoreEnvironmentCheck: true});
      const c = new Configuration(conf, logger);
      it('Should reportErrorsToAPI', () => {
        assert.strictEqual(c.getShouldReportErrorsToAPI(), true);
      });
    });
    describe('without ignoreEnvironmentCheck', () => {
      describe('report behaviour with production env', () => {
        let c: Configuration;
        before(() => {
          sterilizeConfigEnv();
          process.env.NODE_ENV = 'production';
          c = new Configuration(undefined, logger);
        });
        after(() => {
          sterilizeConfigEnv();
        });
        it('Should reportErrorsToAPI', () => {
          assert.strictEqual(c.getShouldReportErrorsToAPI(), true);
        });
      });
      describe('exception behaviour', () => {
        it('Should throw if invalid type for key', () => {
          assert.throws(() => {
            // we are intentionally providing an invalid configuration
            // thus an explicit cast is needed
            // tslint:disable-next-line:no-unused-expression
            new Configuration(
                {key: null} as {} as ConfigurationOptions, logger);
          });
        });
        it('Should throw if invalid for ignoreEnvironmentCheck', () => {
          assert.throws(() => {
            // we are intentionally providing an invalid configuration
            // thus an explicit cast is needed
            // tslint:disable-next-line:no-unused-expression
            new Configuration(
                {ignoreEnvironmentCheck: null} as {} as ConfigurationOptions,
                logger);
          });
        });
        it('Should throw if invalid for serviceContext.service', () => {
          assert.throws(() => {
            // we are intentionally providing an invalid configuration
            // thus an explicit cast is needed
            // tslint:disable-next-line:no-unused-expression
            new Configuration(
                {serviceContext: {service: false}} as {} as
                    ConfigurationOptions,
                logger);
          });
        });
        it('Should throw if invalid for serviceContext.version', () => {
          assert.throws(() => {
            // we are intentionally providing an invalid configuration
            // thus an explicit cast is needed
            // tslint:disable-next-line:no-unused-expression
            new Configuration(
                {serviceContext: {version: true}} as {} as ConfigurationOptions,
                logger);
          });
        });
        it('Should throw if invalid for reportUnhandledRejections', () => {
          assert.throws(() => {
            // we are intentionally providing an invalid configuration
            // thus an explicit cast is needed
            // tslint:disable-next-line:no-unused-expression
            new Configuration(
                {reportUnhandledRejections: 'INVALID'} as {} as
                    ConfigurationOptions,
                logger);
          });
        });
        it('Should not throw given an empty object for serviceContext', () => {
          assert.doesNotThrow(() => {
            // tslint:disable-next-line:no-unused-expression
            new Configuration({serviceContext: {}}, logger);
          });
        });
      });
    });
  });
  describe('Configuration resource aquisition', () => {
    before(() => {
      sterilizeConfigEnv();
    });
    describe('project id from configuration instance', () => {
      const pi = 'test';
      let c: Configuration;
      before(() => {
        c = new Configuration({projectId: pi}, logger);
      });
      after(() => {
        nock.cleanAll();
      });
      it('Should return the project id', () => {
        assert.strictEqual(c.getProjectId(), pi);
      });
    });
    describe('project number from configuration instance', () => {
      const pn = 1234;
      let c: Configuration;
      before(() => {
        sterilizeConfigEnv();
        c = new Configuration(
            {projectId: pn} as {} as ConfigurationOptions, logger);
      });
      after(() => {
        nock.cleanAll();
        sterilizeConfigEnv();
      });
      it('Should return the project number', () => {
        assert.strictEqual(c.getProjectId(), pn.toString());
      });
    });
  });
  describe('Exception behaviour', () => {
    describe('While lacking a project id', () => {
      let c: Configuration;
      before(() => {
        sterilizeConfigEnv();
        createDeadMetadataService();
        c = new Configuration(undefined, logger);
      });
      after(() => {
        nock.cleanAll();
        sterilizeConfigEnv();
      });
      it('Should return null', () => {
        assert.strictEqual(c.getProjectId(), null);
      });
    });
    describe('Invalid type for projectId in runtime config', () => {
      let c: Configuration;
      before(() => {
        sterilizeConfigEnv();
        createDeadMetadataService();
        // we are intentionally providing an invalid configuration
        // thus an explicit cast is needed
        c = new Configuration(
            {projectId: null} as {} as ConfigurationOptions, logger);
      });
      after(() => {
        nock.cleanAll();
        sterilizeConfigEnv();
      });
      it('Should return null', () => {
        assert.strictEqual(c.getProjectId(), null);
      });
    });
  });
  describe('Resource aquisition', () => {
    after(() => {
      /*
       * !! IMPORTANT !!
       * THE restoreConfigEnv FUNCTION SHOULD BE CALLED LAST AS THIS TEST FILE
       * EXITS AND SHOULD THEREFORE BE THE LAST THING TO EXECUTE FROM THIS FILE.
       * !! IMPORTANT !!
       */
      restoreConfigEnv();
    });
    describe('via env', () => {
      before(() => {
        sterilizeConfigEnv();
      });
      afterEach(() => {
        sterilizeConfigEnv();
      });
      describe('no longer tests env itself', () => {
        let c: Configuration;
        const projectId = 'test-xyz';
        before(() => {
          process.env.GCLOUD_PROJECT = projectId;
          c = new Configuration(undefined, logger);
        });
        it('Should assign', () => {
          assert.strictEqual(c.getProjectId(), null);
        });
      });
      describe('serviceContext', () => {
        let c: Configuration;
        const projectId = 'test-abc';
        const serviceContext = {
          service: 'test',
          version: '1.x',
        };
        before(() => {
          process.env.GCLOUD_PROJECT = projectId;
          process.env.GAE_MODULE_NAME = serviceContext.service;
          process.env.GAE_MODULE_VERSION = serviceContext.version;
          c = new Configuration(undefined, logger);
        });
        it('Should assign', () => {
          deepStrictEqual(c.getServiceContext(), serviceContext);
        });
      });
    });
    describe('via runtime configuration', () => {
      before(() => {
        sterilizeConfigEnv();
      });
      describe('serviceContext', () => {
        let c: Configuration;
        const projectId = 'xyz123';
        const serviceContext = {
          service: 'evaluation',
          version: '2.x',
        };
        before(() => {
          c = new Configuration({
            projectId,
            serviceContext,
          });
        });
        it('Should assign', () => {
          deepStrictEqual(c.getServiceContext(), serviceContext);
        });
      });
      describe('api key', () => {
        let c: Configuration;
        const projectId = '987abc';
        const key = '1337-api-key';
        before(() => {
          c = new Configuration(
              {
                key,
                projectId,
              },
              logger);
        });
        it('Should assign', () => {
          assert.strictEqual(c.getKey(), key);
        });
      });
      describe('reportUnhandledRejections', () => {
        let c: Configuration;
        const reportRejections = false;
        before(() => {
          c = new Configuration({
            reportUnhandledRejections: reportRejections,
          });
        });
        it('Should assign', () => {
          assert.strictEqual(
              c.getReportUnhandledRejections(), reportRejections);
        });
      });
    });
  });
});
