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
var EventEmitter = require('events').EventEmitter;
var Metadata = require('../src/metadata.js');

describe('metadata', function() {
  describe('online mode', function() {
    var emitter, metadata, oldProcessProjectId;
    before(function() {
      oldProcessProjectId = process.env.GCLOUD_PROJECT;
      process.env.GCLOUD_PROJECT = '';
    });
    after(function() {
      process.env.GCLOUD_PROJECT = oldProcessProjectId;
    });
    beforeEach(function() {
      emitter = new EventEmitter();
      metadata = new Metadata(emitter);
    });
    afterEach(function() {
      // Cleanup if necessary
      emitter.emit('end');
    });
    it('Should throw if requesting project id without a callback', function() {
      assert.throws(function() {
        metadata.getProjectId();
      });
    });
    it('Should throw if requesting resource without a callback', function() {
      assert.throws(function() {
        metadata.getDefaultResource();
      });
    });
    it('Should give the project id the request returns', function(done) {
      var projectId = 'stub-project-id';
      emitter.emit('data', projectId);
      emitter.emit('end');
      metadata.getProjectId(function(err, id) {
        assert.strictEqual(id, projectId);
        assert.strictEqual(err, null);
        done();
      });
    });
    it('Should queue multiple callers on project id requests before end ' +
      'is called', function(done) {
      var projectId = 'stub-project-id';
      var completer = (function() {
        var a = 0;
        return function() {
          a += 1;
          if (a === 2) {
            done();
          }
        };
      }());
      metadata.getProjectId(function(err, id) {
        assert.strictEqual(id, projectId);
        assert.strictEqual(err, null);
        completer();
      });
      metadata.getProjectId(function(err, id) {
        assert.strictEqual(id, projectId);
        assert.strictEqual(err, null);
        completer();
      });
      emitter.emit('data', projectId);
      emitter.emit('end');
    });
    it('Should give the process project id even if online', function(done) {
      var newProcessProjectId = 'test-process-id';
      metadata.libProjectId_ = newProcessProjectId;
      var metadataProjectId = 'metadata-project-id';
      emitter.emit('data', metadataProjectId);
      emitter.emit('end');
      metadata.getProjectId(function(err, id) {
        assert.strictEqual(id, newProcessProjectId);
        assert.strictEqual(err, null);
        done();
      });
    });
    it('Should return an error if an error is emitted and is cached',
      function(done) {
      var error = new Error('err');
      emitter.emit('error', error);
      metadata.getProjectId(function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });
    it('Should return an error if an for resource if queued', function(done) {
      var error = new Error('err');
      metadata.getDefaultResource(function(err) {
        assert.strictEqual(err, error);
        done();
      });
      emitter.emit('error', error);
    });
    it('Should return an error if the stream is prematurely ended',
      function(done) {
      metadata.getDefaultResource(function(err) {
        assert(err instanceof Error);
        done();
      });
      emitter.emit('end');
    });
    it('Should return an error if an error is emitted and but the caller ' +
      'is queued', function(done) {
      var error = new Error('err');
      metadata.getProjectId(function(err) {
        assert.strictEqual(err, error);
        done();
      });
      emitter.emit('error', error);
    });
    it('Should return an error if the response status code is not a 200',
      function(done) {
      var statusCode = 500;
      var response = {statusCode: statusCode};
      metadata.getProjectId(function(err) {
        assert(err.message, statusCode.toString());
        done();
      });
      emitter.emit('response', response);
    });
    it('Should think its a Cloud Function', function(done) {
      var oldEnv = {
        FUNCTION_NAME: process.env.FUNCTION_NAME,
        SUPERVISOR_REGION: process.env.SUPERVISOR_REGION,
      };
      var fnName = 'test-name';
      var testRegion = 'test-region';
      var id = 'test';
      process.env.FUNCTION_NAME = fnName;
      process.env.SUPERVISOR_REGION = testRegion;
      metadata.getDefaultResource(function(err, rsc) {
        assert.strictEqual(err, null);
        assert.deepEqual(rsc, {
          type: 'cloud_function',
          labels: {
            project_id: id,
            function_name: fnName,
            region: testRegion
          }
        });
        process.env.FUNCTION_NAME = oldEnv.FUNCTION_NAME;
        process.env.SUPERVISOR_REGION = oldEnv.SUPERVISOR_REGION;
        done();
      });
      emitter.emit('data', id);
      emitter.emit('end');
    });
    it('Should think its on App Engine - new version (2016)', function(done) {
      var oldEnv = {
        FUNCTION_NAME: process.env.FUNCTION_NAME,
        SUPERVISOR_REGION: process.env.SUPERVISOR_REGION,
        GAE_SERVICE: process.env.GAE_SERVICE,
        GAE_VERSION: process.env.GAE_VERSION,
        GAE_MODULE_NAME: process.env.GAE_MODULE_NAME
      };
      var service = 'test-service';
      var version = 'test-version';
      var module = 'test-module';
      var id = 'test';
      process.env.FUNCTION_NAME = '';
      process.env.SUPERVISOR_REGION = '';
      process.env.GAE_SERVICE = service;
      process.env.GAE_VERSION = version;
      process.env.GAE_MODULE_NAME = module;
      metadata.getDefaultResource(function(err, rsc) {
        assert.strictEqual(err, null);
        assert.deepEqual(rsc, {
          type: 'gae_app',
          labels: {
            project_id: id,
            module_id: service,
            version_id: version
          }
        });
        process.env.FUNCTION_NAME = oldEnv.FUNCTION_NAME;
        process.env.SUPERVISOR_REGION = oldEnv.SUPERVISOR_REGION;
        process.env.GAE_SERVICE = oldEnv.GAE_SERVICE;
        process.env.GAE_VERSION = oldEnv.GAE_VERSION;
        process.env.GAE_MODULE_NAME = oldEnv.GAE_MODULE_NAME;
        done();
      });
      emitter.emit('data', id);
      emitter.emit('end');
    });
    it('Should think its on App Engine - old version (2016)', function(done) {
      var oldEnv = {
        FUNCTION_NAME: process.env.FUNCTION_NAME,
        SUPERVISOR_REGION: process.env.SUPERVISOR_REGION,
        GAE_SERVICE: process.env.GAE_SERVICE,
        GAE_VERSION: process.env.GAE_VERSION,
        GAE_MODULE_NAME: process.env.GAE_MODULE_NAME
      };
      var service = '';
      var version = 'test-version';
      var module = 'test-module';
      var id = 'test';
      process.env.FUNCTION_NAME = '';
      process.env.SUPERVISOR_REGION = '';
      process.env.GAE_SERVICE = service;
      process.env.GAE_VERSION = version;
      process.env.GAE_MODULE_NAME = module;
      metadata.getDefaultResource(function(err, rsc) {
        assert.strictEqual(err, null);
        assert.deepEqual(rsc, {
          type: 'gae_app',
          labels: {
            project_id: id,
            module_id: module,
            version_id: version
          }
        });
        process.env.FUNCTION_NAME = oldEnv.FUNCTION_NAME;
        process.env.SUPERVISOR_REGION = oldEnv.SUPERVISOR_REGION;
        process.env.GAE_SERVICE = oldEnv.GAE_SERVICE;
        process.env.GAE_VERSION = oldEnv.GAE_VERSION;
        process.env.GAE_MODULE_NAME = oldEnv.GAE_MODULE_NAME;
        done();
      });
      emitter.emit('data', id);
      emitter.emit('end');
    });
    it('Should think its on Compute Engine', function(done) {
      var oldEnv = {
        FUNCTION_NAME: process.env.FUNCTION_NAME,
        SUPERVISOR_REGION: process.env.SUPERVISOR_REGION,
        GAE_SERVICE: process.env.GAE_SERVICE,
        GAE_VERSION: process.env.GAE_VERSION,
        GAE_MODULE_NAME: process.env.GAE_MODULE_NAME
      };
      var id = 'test';
      process.env.FUNCTION_NAME = '';
      process.env.SUPERVISOR_REGION = '';
      process.env.GAE_SERVICE = '';
      process.env.GAE_VERSION = '';
      process.env.GAE_MODULE_NAME = '';
      metadata.getDefaultResource(function(err, rsc) {
        assert.strictEqual(err, null);
        assert.deepEqual(rsc, {
          type: 'gce_instance',
          labels: {
            project_id: id
          }
        });
        process.env.FUNCTION_NAME = oldEnv.FUNCTION_NAME;
        process.env.SUPERVISOR_REGION = oldEnv.SUPERVISOR_REGION;
        process.env.GAE_SERVICE = oldEnv.GAE_SERVICE;
        process.env.GAE_VERSION = oldEnv.GAE_VERSION;
        process.env.GAE_MODULE_NAME = oldEnv.GAE_MODULE_NAME;
        done();
      });
      emitter.emit('data', id);
      emitter.emit('response', {statusCode: 200});
      emitter.emit('end');
    });
    it('Should return a global descriptor', function(done) {
      var oldEnv = {
        FUNCTION_NAME: process.env.FUNCTION_NAME,
        SUPERVISOR_REGION: process.env.SUPERVISOR_REGION,
        GAE_SERVICE: process.env.GAE_SERVICE,
        GAE_VERSION: process.env.GAE_VERSION,
        GAE_MODULE_NAME: process.env.GAE_MODULE_NAME
      };
      var id = 'test';
      var error = new Error('test');
      process.env.GCLOUD_PROJECT = id;
      process.env.FUNCTION_NAME = '';
      process.env.SUPERVISOR_REGION = '';
      process.env.GAE_SERVICE = '';
      process.env.GAE_VERSION = '';
      process.env.GAE_MODULE_NAME = '';
      metadata.getDefaultResource(function(err, rsc) {
        assert.strictEqual(err, error);
        assert.deepEqual(rsc, null);
        process.env.FUNCTION_NAME = oldEnv.FUNCTION_NAME;
        process.env.SUPERVISOR_REGION = oldEnv.SUPERVISOR_REGION;
        process.env.GAE_SERVICE = oldEnv.GAE_SERVICE;
        process.env.GAE_VERSION = oldEnv.GAE_VERSION;
        process.env.GAE_MODULE_NAME = oldEnv.GAE_MODULE_NAME;
        process.env.GCLOUD_PROJECT = '';
        done();
      });
      emitter.emit('error', error);
    });
    it('Should queue multiple resource requests', function(done) {
      var oldEnv = {
        GCLOUD_PROJECT: process.env.GCLOUD_PROJECT,
        FUNCTION_NAME: process.env.FUNCTION_NAME,
        SUPERVISOR_REGION: process.env.SUPERVISOR_REGION,
      };
      var completer = (function() {
        var a = 0;
        return function() {
          a += 1;
          if (a === 2) {
            process.env.FUNCTION_NAME = oldEnv.FUNCTION_NAME;
            process.env.SUPERVISOR_REGION = oldEnv.SUPERVISOR_REGION;
            done();
          }
        };
      }());
      var fnName = 'test-name';
      var testRegion = 'test-region';
      var id = 'test';
      var resource = {
        type: 'cloud_function',
        labels: {
          project_id: id,
          function_name: fnName,
          region: testRegion
        }
      };
      process.env.GCLOUD_PROJECT = '';
      process.env.FUNCTION_NAME = fnName;
      process.env.SUPERVISOR_REGION = testRegion;
      metadata.getDefaultResource(function(err, rsc) {
        assert.strictEqual(err, null);
        assert.deepEqual(rsc, resource);
        completer();
      });
      metadata.getDefaultResource(function(err, rsc) {
        assert.strictEqual(err, null);
        assert.deepEqual(rsc, resource);
        completer();
      });
      setImmediate(function() {
        emitter.emit('data', id);
        emitter.emit('end');
      });
    });
  });
  describe('offline mode', function() {
    var oldProcessProjectId, metadata, emitter;
    beforeEach(function() {
      emitter = new EventEmitter();
      metadata = new Metadata(emitter);
    });
    before(function() {
      oldProcessProjectId = process.env.GCLOUD_PROJECT;
      process.env.GCLOUD_PROJECT = '';
    });
    after(function() {
      process.env.GCLOUD_PROJECT = oldProcessProjectId;
    });
    it('Should return an error given a completely undefined environment for id',
      function(done) {
      emitter.emit('end');
      metadata.getProjectId(function(err, projectId) {
        assert(err instanceof Error);
        assert.strictEqual(projectId, null);
        done();
      });
    });
    it('Should return an error given a completely undefined environment for ' +
      'resource', function(done) {
      emitter.emit('end');
      metadata.getDefaultResource(function(err, rsc) {
        assert(err instanceof Error);
        assert.strictEqual(rsc, null);
        done();
      });
    });
    it('Should still be able to produce a process project id if it is set',
      function(done) {
      var id = 'test';
      emitter.emit('end');
      metadata.libProjectId_ = id;
      metadata.getProjectId(function(err, projectId) {
        assert.strictEqual(err, null);
        assert.strictEqual(projectId, id);
        done();
      });
    });
    it('Should still be able to produce a global descriptor if a process ' +
      'project id is set', function(done) {
      var id = 'test';
      emitter.emit('end');
      metadata.libProjectId_ = id;
      metadata.getDefaultResource(function(err, rsc) {
        assert.strictEqual(err, null);
        assert.deepEqual(rsc, {
          type: 'global',
          labels: {
            project_id: id
          }
        });
        done();
      });
    });
  });
});
