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
var isNumber = is.number;
import merge = require('lodash.merge');
import {FakeConfiguration as Configuration} from '../fixtures/configuration';
import {Fuzzer} from '../../utils/fuzzer';
var level = process.env.GCLOUD_ERRORS_LOGLEVEL;
import {createLogger} from '../../src/logger';
var logger = createLogger({
  logLevel: isNumber(level) ? level : 4,
});
import * as nock from 'nock';

var METADATA_URL = 'http://metadata.google.internal/computeMetadata/v1/project';

var configEnv = {
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

describe('Configuration class', function() {
  before(function() {
    sterilizeConfigEnv();
  });
  after(function() {
    restoreConfigEnv();
  });
  describe('Initialization', function() {
    var f = new Fuzzer();
    var stubConfig = {test: true};
    describe('fuzzing the constructor', function() {
      it('Should return default values', function() {
        var c;
        f.fuzzFunctionForTypes(function(givenConfigFuzz) {
          c = new Configuration(givenConfigFuzz, logger);
          assert.deepEqual(c._givenConfiguration, {});
        }, ['object']);
      });
    });
    describe('valid config and default values', function() {
      var c;
      before(function() {
        process.env.NODE_ENV = 'development';
      });
      after(function() {
        sterilizeConfigEnv();
      });
      it('Should not throw with a valid configuration', function() {
        assert.doesNotThrow(function() {
          c = new Configuration(stubConfig, logger);
        });
      });
      it('Should have a property reflecting the config argument', function() {
        assert.deepEqual(c._givenConfiguration, stubConfig);
      });
      it('Should not have a project id', function() {
        assert.strictEqual(c._projectId, null);
      });
      it('Should not have a key', function() {
        assert.strictEqual(c.getKey(), null);
      });
      it('Should have a default service context', function() {
        assert.deepEqual(c.getServiceContext(), {
          service: 'node',
          version: undefined,
        });
      });
      it('Should specify to not report unhandledRejections', function() {
        assert.strictEqual(c.getReportUnhandledRejections(), false);
      });
    });
    describe('with ignoreEnvironmentCheck', function() {
      var conf = merge({}, stubConfig, {ignoreEnvironmentCheck: true});
      var c = new Configuration(conf, logger);
      it('Should reportErrorsToAPI', function() {
        assert.strictEqual(c.getShouldReportErrorsToAPI(), true);
      });
    });
    describe('without ignoreEnvironmentCheck', function() {
      describe('report behaviour with production env', function() {
        var c;
        before(function() {
          sterilizeConfigEnv();
          process.env.NODE_ENV = 'production';
          c = new Configuration(undefined, logger);
        });
        after(function() {
          sterilizeConfigEnv();
        });
        it('Should reportErrorsToAPI', function() {
          assert.strictEqual(c.getShouldReportErrorsToAPI(), true);
        });
      });
      describe('exception behaviour', function() {
        it('Should throw if invalid type for key', function() {
          assert.throws(function() {
            new Configuration({key: null}, logger);
          });
        });
        it('Should throw if invalid for ignoreEnvironmentCheck', function() {
          assert.throws(function() {
            new Configuration({ignoreEnvironmentCheck: null}, logger);
          });
        });
        it('Should throw if invalid for serviceContext.service', function() {
          assert.throws(function() {
            new Configuration({serviceContext: {service: false}}, logger);
          });
        });
        it('Should throw if invalid for serviceContext.version', function() {
          assert.throws(function() {
            new Configuration({serviceContext: {version: true}}, logger);
          });
        });
        it('Should throw if invalid for reportUnhandledRejections', function() {
          assert.throws(function() {
            new Configuration({reportUnhandledRejections: 'INVALID'}, logger);
          });
        });
        it('Should not throw given an empty object for serviceContext',
           function() {
             assert.doesNotThrow(function() {
               new Configuration({serviceContext: {}}, logger);
             });
           });
      });
    });
  });
  describe('Configuration resource aquisition', function() {
    before(function() {
      sterilizeConfigEnv();
    });
    describe('project id from configuration instance', function() {
      var pi = 'test';
      var c;
      before(function() {
        c = new Configuration({projectId: pi}, logger);
      });
      after(function() {
        nock.cleanAll();
      });
      it('Should return the project id', function() {
        assert.strictEqual(c.getProjectId(), pi);
      });
    });
    describe('project number from configuration instance', function() {
      var pn = 1234;
      var c;
      before(function() {
        sterilizeConfigEnv();
        c = new Configuration({projectId: pn}, logger);
      });
      after(function() {
        nock.cleanAll();
        sterilizeConfigEnv();
      });
      it('Should return the project number', function() {
        assert.strictEqual(c.getProjectId(), pn.toString());
      });
    });
  });
  describe('Exception behaviour', function() {
    describe('While lacking a project id', function() {
      var c;
      before(function() {
        sterilizeConfigEnv();
        createDeadMetadataService();
        c = new Configuration(undefined, logger);
      });
      after(function() {
        nock.cleanAll();
        sterilizeConfigEnv();
      });
      it('Should return null', function() {
        assert.strictEqual(c.getProjectId(), null);
      });
    });
    describe('Invalid type for projectId in runtime config', function() {
      var c;
      before(function() {
        sterilizeConfigEnv();
        createDeadMetadataService();
        c = new Configuration({projectId: null}, logger);
      });
      after(function() {
        nock.cleanAll();
        sterilizeConfigEnv();
      });
      it('Should return null', function() {
        assert.strictEqual(c.getProjectId(), null);
      });
    });
  });
  describe('Resource aquisition', function() {
    after(function() {
      /*
       * !! IMPORTANT !!
       * THE restoreConfigEnv FUNCTION SHOULD BE CALLED LAST AS THIS TEST FILE EXITS
       * AND SHOULD THEREFORE BE THE LAST THING TO EXECUTE FROM THIS FILE.
       * !! IMPORTANT !!
       */
      restoreConfigEnv();
    });
    describe('via env', function() {
      before(function() {
        sterilizeConfigEnv();
      });
      afterEach(function() {
        sterilizeConfigEnv();
      });
      describe('no longer tests env itself', function() {
        var c;
        var projectId = 'test-xyz';
        before(function() {
          process.env.GCLOUD_PROJECT = projectId;
          c = new Configuration(undefined, logger);
        });
        it('Should assign', function() {
          assert.strictEqual(c.getProjectId(), null);
        });
      });
      describe('serviceContext', function() {
        var c;
        var projectId = 'test-abc';
        var serviceContext = {
          service: 'test',
          version: '1.x',
        };
        before(function() {
          process.env.GCLOUD_PROJECT = projectId;
          process.env.GAE_MODULE_NAME = serviceContext.service;
          process.env.GAE_MODULE_VERSION = serviceContext.version;
          c = new Configuration(undefined, logger);
        });
        it('Should assign', function() {
          assert.deepEqual(c.getServiceContext(), serviceContext);
        });
      });
    });
    describe('via runtime configuration', function() {
      before(function() {
        sterilizeConfigEnv();
      });
      describe('serviceContext', function() {
        var c;
        var projectId = 'xyz123';
        var serviceContext = {
          service: 'evaluation',
          version: '2.x',
        };
        before(function() {
          c = new Configuration({
            projectId: projectId,
            serviceContext: serviceContext,
          });
        });
        it('Should assign', function() {
          assert.deepEqual(c.getServiceContext(), serviceContext);
        });
      });
      describe('api key', function() {
        var c;
        var projectId = '987abc';
        var key = '1337-api-key';
        before(function() {
          c = new Configuration(
              {
                key: key,
                projectId: projectId,
              },
              logger);
        });
        it('Should assign', function() {
          assert.strictEqual(c.getKey(), key);
        });
      });
      describe('reportUnhandledRejections', function() {
        var c;
        var reportRejections = false;
        before(function() {
          c = new Configuration({
            reportUnhandledRejections: reportRejections,
          });
        });
        it('Should assign', function() {
          assert.strictEqual(
              c.getReportUnhandledRejections(), reportRejections);
        });
      });
    });
  });
});
