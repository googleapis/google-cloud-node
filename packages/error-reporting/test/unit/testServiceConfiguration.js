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

'use strict';
var assert = require('assert');
var is = require('is');
var isNull = is.null;
var isString = is.string;
var isNumber = is.number;
var forEach = require('lodash.foreach');
var assign = require('lodash.assign');
var omitBy = require('lodash.omitby');
var Configuration = require('../fixtures/configuration.js');
var level = process.env.GCLOUD_ERRORS_LOGLEVEL;
var logger = require('../../src/logger.js')({
  logLevel: isNumber(level) ? level : 4
});
var env = {
  GAE_SERVICE: process.env.GAE_SERVICE,
  GAE_VERSION: process.env.GAE_VERSION,
  GAE_MODULE_VERSION: process.env.GAE_MODULE_VERSION,
  FUNCTION_NAME: process.env.FUNCTION_NAME,
  GAE_MODULE_NAME: process.env.GAE_MODULE_NAME
};
function sterilizeEnv () {
  forEach(env, function (val, key) {
    delete process.env[key];
  });
}
function setEnv (serviceName, serviceVersion, moduleName, moduleVersion, functionName) {
  assign(process.env, omitBy({
    GAE_SERVICE: serviceName,
    GAE_VERSION: serviceVersion,
    GAE_MODULE_NAME: moduleName,
    GAE_MODULE_VERSION: moduleVersion,
    FUNCTION_NAME: functionName
  }, function (val) {return !isString(val)}));
}
function restoreEnv () {
  assign(process.env, env);
}

describe('Testing service configuration', function () {
  beforeEach(function () {sterilizeEnv();});
  after(function () {restoreEnv();});
  it(
    'A Configuration uses the function name as the service name on GCF ' + 
    'if the service name is not given in the given config',
    function () {
      setEnv('someModuleName', '1.0', 'InvalidName', 'InvalidVersion',
        'someFunction');
      var c = new Configuration({}, logger);
      assert.deepEqual(c.getServiceContext().service, 'someFunction');
      // FUNCTION_NAME is set and the user didn't specify a version, and so 
      // the version should not be defined
      assert.deepEqual(c.getServiceContext().version, undefined);
    }
  );
  it(
    'A Configuration uses the function name as the service name on GCF ' +
    'if the service name is not given in the given config ' +
    'even if the GAE_SERVICE was not set',
    function () {
      setEnv(null, '1.0', null, 'InvalidVersion', 'someFunction');
      var c = new Configuration({}, logger);
      assert.deepEqual(c.getServiceContext().service, 'someFunction');
      // The user didn't specify a version and FUNCTION_NAME is defined, and 
      // so the version should not be defined
      assert.deepEqual(c.getServiceContext().version, undefined);
    }
  );
  it(
    'A Configuration uses the GAE_SERVICE env value as the service name ' +
    'if the FUNCTION_NAME env variable is not set and the given config ' +
    'does not specify the service name',
    function () {
      setEnv('someModuleName', '1.0', 'InvalidName', 'InvalidVersion', null);
      var c = new Configuration({}, logger);
      assert.deepEqual(c.getServiceContext().service, 'someModuleName');
      // The user didn't specify a version, and FUNCTION_NAME is not defined, 
      // and so use the GAE_MODULE_VERSION
      assert.deepEqual(c.getServiceContext().version, '1.0');
    }
  );
  it(
    'A Configuration uses the service name in the given config if it ' +
    'was specified and both the GAE_SERVICE and FUNCTION_NAME ' +
    'env vars are set',
    function () {
      setEnv('someModuleName', '1.0', 'InvalidName', 'InvalidVersion',
        'someFunction');
      var c = new Configuration({
        serviceContext: {
          service: 'customService'
        }
      }, logger);
      assert.deepEqual(c.getServiceContext().service, 'customService');
      // The user didn't specify a version, but FUNCTION_NAME is defined, and 
      // so the version should not be defined
      assert.deepEqual(c.getServiceContext().version, undefined);
    }
  );
  it(
    'A Configuration uses the service name and version in the given config if ' +
    'they were both specified and both the GAE_SERVICE and FUNCTION_NAME ' +
    'env vars are set',
    function () {
      setEnv('someModuleName', '1.0', 'InvalidName', 'InvalidVersion',
        'someFunction');
      var c = new Configuration({
        serviceContext: {
          service: 'customService',
          version: '2.0'
        }
      }, logger);
      assert.deepEqual(c.getServiceContext().service, 'customService');
      // The user specified version should be used
      assert.deepEqual(c.getServiceContext().version, '2.0');
    }
  );
  it(
    'A Configuration uses the service name in the given config if it ' +
    'was specified and only the GAE_SERVICE env var is set',
    function () {
      setEnv('someModuleName', '1.0', 'InvalidName', 'InvalidVersion', null);
      var c = new Configuration({
        serviceContext: {
          service: 'customService'
        }
      }, logger);
      assert.deepEqual(c.getServiceContext().service, 'customService');
      // The user didn't specify a version and FUNCTION_NAME is not defined 
      // and so the GAE_MODULE_VERSION should be used
      assert.deepEqual(c.getServiceContext().version, '1.0');
    }
  );
  it(
    'A Configuration uses the service name and version in the given config if ' +
    'they were both specified and only the GAE_SERVICE env var is set',
    function () {
      setEnv('someModuleName', '1.0', 'InvalidName', 'InvalidVersion', null);
      var c = new Configuration({
        serviceContext: {
          service: 'customService',
          version: '2.0'
        }
      }, logger);
      assert.deepEqual(c.getServiceContext().service, 'customService');
      // The user specified version should be used
      assert.deepEqual(c.getServiceContext().version, '2.0');
    }
  );
  it(
    'A Configuration uses the service name in the given config if it ' +
    'was specified and only the FUNCTION_NAME env var is set',
    function () {
      setEnv(null, '1.0', null, 'InvalidVersion', 'someFunction');
      var c = new Configuration({
        serviceContext: {
          service: 'customService'
        }
      }, logger);
      assert.deepEqual(c.getServiceContext().service, 'customService');
      // The user didn't specify a version and thus because FUNCTION_NAME is 
      // defined the version should not be defined
      assert.deepEqual(c.getServiceContext().version, undefined);
    }
  );
  it(
    'A Configuration uses the service name and version in the given config if ' +
    'they were both specified and only the FUNCTION_NAME env var is set',
    function () {
      setEnv(null, '1.0', null, 'InvalidVersion', 'someFunction');
      var c = new Configuration({
        serviceContext: {
          service: 'customService',
          version: '2.0'
        }
      }, logger);
      assert.strictEqual(c.getServiceContext().service, 'customService');
      // The user specified version should be used
      assert.strictEqual(c.getServiceContext().version, '2.0');
    }
  );
  it(
    'A Configuration uses the service name "node" and no version if ' +
    'GAE_SERVICE is not set, FUNCTION_NAME is not set, and the user has '+
    'not specified a service name or version',
    function () {
      var c = new Configuration({}, logger);
      assert.strictEqual(c.getServiceContext().service, 'node');
      assert.strictEqual(c.getServiceContext().version, undefined);
    }
  );
  it(
    'A Configuration uses the service name "node" and no version if ' +
    'GAE_SERVICE is not set, FUNCTION_NAME is not set, and the user has '+
    'not specified a service name or version even if GAE_VERSION has ' +
    'been set',
    function () {
      setEnv(null, 'InvalidVersion', null, 'InvalidVersion', null);
      var c = new Configuration({}, logger);
      assert.strictEqual(c.getServiceContext().service, 'node');
      assert.strictEqual(c.getServiceContext().version, undefined);
    }
  );
  it(
    'A Configuration uses the service name "node" and the user specified ' +
    'version if GAE_SERVICE is not set, FUNCTION_NAME is not set, and the ' +
    'user has not specified a service name but has specified a version',
    function () {
      var c = new Configuration({
        serviceContext: {
          version: '2.0'
        }
      }, logger);
      assert.deepEqual(c.getServiceContext().service, 'node');
      assert.deepEqual(c.getServiceContext().version, '2.0');
    }
  );

  // it(
  //   'A Configuration uses the service name "node" and the user specified ' +
  //   'version if GAE_SERVICE is not set, FUNCTION_NAME is not set, and the ' +
  //   'user has not specified a service name but has specified a version even ' +
  //   'if GAE_VERSION has been set',
  //   makeTest(null, 'InvalidVersion',
  //           null, 'InvalidVersion',
  //           null,
  //     function(done) {
  //       var c = new Configuration({
  //         serviceContext: {
  //           version: '2.0'
  //         }
  //       }, logger);
  //       assert.deepEqual(c.getServiceContext().service, 'node');
  //       assert.deepEqual(c.getServiceContext().version, '2.0');

  //       done();
  //   })
  // );

  // // The following tests always have GAE_SERVICE and GAE_VERSION not set
  // it(
  //   'With GAE_SERVICE and GAE_VERSION not set: ' +
  //   'A Configuration uses the function name as the service name on GCF ' + 
  //   'if the service name is not given in the given config',
  //   makeTest(null, null, 'someModuleName', '1.0', 'someFunction',
  //     function(done) {
  //       var c = new Configuration({}, logger);
  //       assert.deepEqual(c.getServiceContext().service, 'someFunction');
  //       // FUNCTION_NAME is set and the user didn't specify a version, and so 
  //       // the version should not be defined
  //       assert.deepEqual(c.getServiceContext().version, undefined);

  //       done();
  //   })
  // );

  // it(
  //   'With GAE_SERVICE and GAE_VERSION not set: ' +
  //   'A Configuration uses the function name as the service name on GCF ' +
  //   'if the service name is not given in the given config ' +
  //   'even if the GAE_MODULE_NAME was not set',
  //   makeTest(null, null, null, '1.0', 'someFunction',
  //     function(done) {
  //       var c = new Configuration({}, logger);
  //       assert.deepEqual(c.getServiceContext().service, 'someFunction');
  //       // The user didn't specify a version and FUNCTION_NAME is defined, and 
  //       // so the version should not be defined
  //       assert.deepEqual(c.getServiceContext().version, undefined);

  //       done();
  //   })
  // );

  // it(
  //   'With GAE_SERVICE and GAE_VERSION not set: ' +
  //   'A Configuration uses the GAE_MODULE_NAME env value as the service name ' +
  //   'if the FUNCTION_NAME env variable is not set and the given config ' +
  //   'does not specify the service name',
  //   makeTest(null, null, 'someModuleName', '1.0', null,
  //     function(done) {
  //       var c = new Configuration({}, logger);
  //       assert.deepEqual(c.getServiceContext().service, 'someModuleName');
  //       // The user didn't specify a version, and FUNCTION_NAME is not defined, 
  //       // and so use the GAE_MODULE_VERSION
  //       assert.deepEqual(c.getServiceContext().version, '1.0');

  //       done();
  //   })
  // );

  // it(
  //   'With GAE_SERVICE and GAE_VERSION not set: ' +
  //   'A Configuration uses the service name in the given config if it ' +
  //   'was specified and both the GAE_MODULE_NAME and FUNCTION_NAME ' +
  //   'env vars are set',
  //   makeTest(null, null, 'someModuleName', '1.0', 'someFunction',
  //     function(done) {
  //       var c = new Configuration({
  //         serviceContext: {
  //           service: 'customService'
  //         }
  //       }, logger);
  //       assert.deepEqual(c.getServiceContext().service, 'customService');
  //       // The user didn't specify a version, but FUNCTION_NAME is defined, and 
  //       // so the version should not be defined
  //       assert.deepEqual(c.getServiceContext().version, undefined);

  //       done();
  //   })
  // );

  // it(
  //   'With GAE_SERVICE and GAE_VERSION not set: ' +
  //   'A Configuration uses the service name and version in the given config if ' +
  //   'they were both specified and both the GAE_MODULE_NAME and FUNCTION_NAME ' +
  //   'env vars are set',
  //   makeTest(null, null, 'someModuleName', '1.0', 'someFunction',
  //     function(done) {
  //       var c = new Configuration({
  //         serviceContext: {
  //           service: 'customService',
  //           version: '2.0'
  //         }
  //       }, logger);
  //       assert.deepEqual(c.getServiceContext().service, 'customService');
  //       // The user specified version should be used
  //       assert.deepEqual(c.getServiceContext().version, '2.0');

  //       done();
  //   })
  // );

  // it(
  //   'With GAE_SERVICE and GAE_VERSION not set: ' +
  //   'A Configuration uses the service name in the given config if it ' +
  //   'was specified and only the GAE_MODULE_NAME env var is set',
  //   makeTest(null, null, 'someModuleName', '1.0', null,
  //     function(done) {
  //       var c = new Configuration({
  //         serviceContext: {
  //           service: 'customService'
  //         }
  //       }, logger);
  //       assert.deepEqual(c.getServiceContext().service, 'customService');
  //       // The user didn't specify a version and FUNCTION_NAME is not defined 
  //       // and so the GAE_MODULE_VERSION should be used
  //       assert.deepEqual(c.getServiceContext().version, '1.0');

  //       done();
  //   })
  // );

  // it(
  //   'With GAE_SERVICE and GAE_VERSION not set: ' +
  //   'A Configuration uses the service name and version in the given config if ' +
  //   'they were both specified and only the GAE_MODULE_NAME env var is set',
  //   makeTest(null, null, 'someModuleName', '1.0', null,
  //     function(done) {
  //       var c = new Configuration({
  //         serviceContext: {
  //           service: 'customService',
  //           version: '2.0'
  //         }
  //       }, logger);
  //       assert.deepEqual(c.getServiceContext().service, 'customService');
  //       // The user specified version should be used
  //       assert.deepEqual(c.getServiceContext().version, '2.0');

  //       done();
  //   })
  // );

  // it(
  //   'With GAE_SERVICE and GAE_VERSION not set: ' +
  //   'A Configuration uses the service name in the given config if it ' +
  //   'was specified and only the FUNCTION_NAME env var is set',
  //   makeTest(null, null, null, '1.0', 'someFunction',
  //     function(done) {
  //       var c = new Configuration({
  //         serviceContext: {
  //           service: 'customService'
  //         }
  //       }, logger);
  //       assert.deepEqual(c.getServiceContext().service, 'customService');
  //       // The user didn't specify a version and thus because FUNCTION_NAME is 
  //       // defined the version should not be defined
  //       assert.deepEqual(c.getServiceContext().version, undefined);

  //       done();
  //   })
  // );

  // it(
  //   'With GAE_SERVICE and GAE_VERSION not set: ' +
  //   'A Configuration uses the service name and version in the given config if ' +
  //   'they were both specified and only the FUNCTION_NAME env var is set',
  //   makeTest(null, null, null, '1.0', 'someFunction',
  //     function(done) {
  //       var c = new Configuration({
  //         serviceContext: {
  //           service: 'customService',
  //           version: '2.0'
  //         }
  //       }, logger);
  //       assert.deepEqual(c.getServiceContext().service, 'customService');
  //       // The user specified version should be used
  //       assert.deepEqual(c.getServiceContext().version, '2.0');

  //       done();
  //   })
  // );

  // it(
  //   'With GAE_SERVICE and GAE_VERSION not set: ' +
  //   'A Configuration uses the service name "node" and no version if ' +
  //   'GAE_MODULE_NAME is not set, FUNCTION_NAME is not set, and the user has '+
  //   'not specified a service name or version',
  //   makeTest(null, null, null, null, null,
  //     function(done) {
  //       var c = new Configuration({}, logger);
  //       assert.deepEqual(c.getServiceContext().service, 'node');
  //       assert.deepEqual(c.getServiceContext().version, undefined);

  //       done();
  //   })
  // );

  // it(
  //   'With GAE_SERVICE and GAE_VERSION not set: ' +
  //   'A Configuration uses the service name "node" and no version if ' +
  //   'GAE_MODULE_NAME is not set, FUNCTION_NAME is not set, and the user has '+
  //   'not specified a service name or version even if GAE_MODULE_VERSION has ' +
  //   'been set',
  //   makeTest(null, null, null, '1.0', null,
  //     function(done) {
  //       var c = new Configuration({}, logger);
  //       assert.deepEqual(c.getServiceContext().service, 'node');
  //       assert.deepEqual(c.getServiceContext().version, undefined);

  //       done();
  //   })
  // );

  // it(
  //   'With GAE_SERVICE and GAE_VERSION not set: ' +
  //   'A Configuration uses the service name "node" and the user specified ' +
  //   'version if GAE_MODULE_NAME is not set, FUNCTION_NAME is not set, and the ' +
  //   'user has not specified a service name but has specified a version',
  //   makeTest(null, null, null, null, null,
  //     function(done) {
  //       var c = new Configuration({
  //         serviceContext: {
  //           version: '2.0'
  //         }
  //       }, logger);
  //       assert.deepEqual(c.getServiceContext().service, 'node');
  //       assert.deepEqual(c.getServiceContext().version, '2.0');

  //       done();
  //   })
  // );

  // it(
  //   'With GAE_SERVICE and GAE_VERSION not set: ' +
  //   'A Configuration uses the service name "node" and the user specified ' +
  //   'version if GAE_MODULE_NAME is not set, FUNCTION_NAME is not set, and the ' +
  //   'user has not specified a service name but has specified a version even ' +
  //   'if GAE_MODULE_VERSION has been set',
  //   makeTest(null, null, null, '1.0', null,
  //     function(done) {
  //       var c = new Configuration({
  //         serviceContext: {
  //           version: '2.0'
  //         }
  //       }, logger);
  //       assert.deepEqual(c.getServiceContext().service, 'node');
  //       assert.deepEqual(c.getServiceContext().version, '2.0');

  //       done();
  //   })
  // );
});
