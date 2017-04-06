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
var extend = require('extend');

var Metadata = require('../src/metadata.js');

describe('metadata', function() {
  var MetadataCached;
  var metadata;

  var PROJECT_ID = 'project-id';
  var LOGGING;

  var ENV_CACHED = extend({}, process.env);

  before(function() {
    MetadataCached = extend({}, Metadata);
  });

  beforeEach(function() {
    LOGGING = {
      auth: {}
    };
    extend(Metadata, MetadataCached);
    metadata = new Metadata(LOGGING);
  });

  afterEach(function() {
    extend(process.env, ENV_CACHED);
  });

  describe('instantiation', function() {
    it('should localize Logging instance', function() {
      assert.strictEqual(metadata.logging, LOGGING);
    });
  });

  describe('getCloudFunctionDescriptor', function() {
    var FUNCTION_NAME = 'function-name';
    var SUPERVISOR_REGION = 'supervisor-region';

    beforeEach(function() {
      process.env.FUNCTION_NAME = FUNCTION_NAME;
      process.env.SUPERVISOR_REGION = SUPERVISOR_REGION;
    });

    it('should return the correct descriptor', function() {
      assert.deepEqual(Metadata.getCloudFunctionDescriptor(PROJECT_ID), {
        type: 'cloud_function',
        labels: {
          project_id: PROJECT_ID,
          function_name: FUNCTION_NAME,
          region: SUPERVISOR_REGION
        }
      });
    });
  });

  describe('getCloudFunctionDescriptor', function() {
    var GAE_MODULE_NAME = 'gae-module-name';
    var GAE_SERVICE = 'gae-service';
    var GAE_VERSION = 'gae-version';

    beforeEach(function() {
      process.env.GAE_MODULE_NAME = GAE_MODULE_NAME;
      process.env.GAE_SERVICE = GAE_SERVICE;
      process.env.GAE_VERSION = GAE_VERSION;
    });

    it('should return the correct descriptor', function() {
      assert.deepEqual(Metadata.getGAEDescriptor(PROJECT_ID), {
        type: 'gae_app',
        labels: {
          project_id: PROJECT_ID,
          module_id: GAE_SERVICE,
          version_id: GAE_VERSION
        }
      });
    });

    it('should use GAE_MODULE_NAME for module_id', function() {
      delete process.env.GAE_SERVICE;

      var moduleId = Metadata.getGAEDescriptor(PROJECT_ID).labels.module_id;
      assert.strictEqual(moduleId, GAE_MODULE_NAME);
    });
  });

  describe('getGKEDescriptor', function() {
    it('should return the correct descriptor', function() {
      assert.deepEqual(Metadata.getGKEDescriptor(PROJECT_ID), {
        type: 'container',
        labels: {
          project_id: PROJECT_ID
        }
      });
    });
  });

  describe('getGCEDescriptor', function() {
    it('should return the correct descriptor', function() {
      assert.deepEqual(Metadata.getGCEDescriptor(PROJECT_ID), {
        type: 'gce_instance',
        labels: {
          project_id: PROJECT_ID
        }
      });
    });
  });

  describe('getGlobalDescriptor', function() {
    it('should return the correct descriptor', function() {
      assert.deepEqual(Metadata.getGlobalDescriptor(PROJECT_ID), {
        type: 'global',
        labels: {
          project_id: PROJECT_ID
        }
      });
    });
  });

  describe('assignDefaultResource', function() {
    var ENTRY_JSON = {};

    it('should return entry if it already has a resource', function(done) {
      var entryJson = { resource: {} };

      metadata.assignDefaultResource(entryJson, function(err, entryJson_) {
        assert.ifError(err);
        assert.strictEqual(entryJson_, entryJson);
        done();
      });
    });

    it('should get the default resource', function(done) {
      metadata.getDefaultResource = function() {
        done();
      };

      metadata.assignDefaultResource(ENTRY_JSON, assert.ifError);
    });

    it('should return error from getDefaultResource', function(done) {
      var error = new Error('Error.');

      metadata.getDefaultResource = function(callback) {
        callback(error);
      };

      metadata.assignDefaultResource(ENTRY_JSON, function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should assign default resource to entry', function(done) {
      var defaultResource = {};

      metadata.getDefaultResource = function(callback) {
        callback(null, defaultResource);
      };

      metadata.assignDefaultResource(ENTRY_JSON, function(err, entryJson) {
        assert.ifError(err);
        assert.strictEqual(entryJson.resource, defaultResource);
        done();
      });
    });
  });

  describe('getDefaultResource', function() {
    var RETURNED_PROJECT_ID = 'project-id';

    beforeEach(function() {
      metadata.logging.auth.getProjectId = function(callback) {
        callback(null, RETURNED_PROJECT_ID);
      };
    });

    it('should get the project ID', function(done) {
      metadata.logging.auth.getProjectId = function() {
        done();
      };

      metadata.getDefaultResource(assert.ifError);
    });

    it('should return error from getProjectId', function(done) {
      var error = new Error('Error.');

      metadata.logging.auth.getProjectId = function(callback) {
        callback(error);
      };

      metadata.getDefaultResource(function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should get the environment from auth client', function(done) {
      metadata.logging.auth.getEnvironment = function() {
        done();
      };

      metadata.getDefaultResource(assert.ifError);
    });

    describe('environments', function() {
      describe('app engine', function() {
        it('should return correct descriptor', function(done) {
          var DESCRIPTOR = {};

          Metadata.getGAEDescriptor = function(projectId) {
            assert.strictEqual(projectId, RETURNED_PROJECT_ID);
            return DESCRIPTOR;
          };

          metadata.logging.auth.getEnvironment = function(callback) {
            callback(null, {
              IS_APP_ENGINE: true
            });
          };

          metadata.getDefaultResource(function(err, defaultResource) {
            assert.ifError(err);
            assert.strictEqual(defaultResource, DESCRIPTOR);
            done();
          });
        });
      });

      describe('cloud function', function() {
        it('should return correct descriptor', function(done) {
          var DESCRIPTOR = {};

          Metadata.getCloudFunctionDescriptor = function(projectId) {
            assert.strictEqual(projectId, RETURNED_PROJECT_ID);
            return DESCRIPTOR;
          };

          metadata.logging.auth.getEnvironment = function(callback) {
            callback(null, {
              IS_CLOUD_FUNCTION: true
            });
          };

          metadata.getDefaultResource(function(err, defaultResource) {
            assert.ifError(err);
            assert.strictEqual(defaultResource, DESCRIPTOR);
            done();
          });
        });
      });

      describe('compute engine', function() {
        it('should return correct descriptor', function(done) {
          var DESCRIPTOR = {};

          Metadata.getGCEDescriptor = function(projectId) {
            assert.strictEqual(projectId, RETURNED_PROJECT_ID);
            return DESCRIPTOR;
          };

          metadata.logging.auth.getEnvironment = function(callback) {
            callback(null, {
              IS_COMPUTE_ENGINE: true
            });
          };

          metadata.getDefaultResource(function(err, defaultResource) {
            assert.ifError(err);
            assert.strictEqual(defaultResource, DESCRIPTOR);
            done();
          });
        });
      });

      describe('container engine', function() {
        it('should return correct descriptor', function(done) {
          var DESCRIPTOR = {};

          Metadata.getGKEDescriptor = function(projectId) {
            assert.strictEqual(projectId, RETURNED_PROJECT_ID);
            return DESCRIPTOR;
          };

          metadata.logging.auth.getEnvironment = function(callback) {
            callback(null, {
              IS_CONTAINER_ENGINE: true
            });
          };

          metadata.getDefaultResource(function(err, defaultResource) {
            assert.ifError(err);
            assert.strictEqual(defaultResource, DESCRIPTOR);
            done();
          });
        });
      });

      describe('global', function() {
        it('should return correct descriptor', function(done) {
          var DESCRIPTOR = {};

          Metadata.getGlobalDescriptor = function(projectId) {
            assert.strictEqual(projectId, RETURNED_PROJECT_ID);
            return DESCRIPTOR;
          };

          metadata.logging.auth.getEnvironment = function(callback) {
            callback(null, {
              IS_APP_ENGINE: false,
              IS_CLOUD_FUNCTION: false,
              IS_COMPUTE_ENGINE: false,
              IS_CONTAINER_ENGINE: false
            });
          };

          metadata.getDefaultResource(function(err, defaultResource) {
            assert.ifError(err);
            assert.strictEqual(defaultResource, DESCRIPTOR);
            done();
          });
        });
      });
    });
  });
});
