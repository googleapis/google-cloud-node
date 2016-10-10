/*!
 * Copyright 2015 Google Inc. All Rights Reserved.
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
var googleAuth = require('google-auto-auth');

var env = require('../../../system-test/env.js');
var Resource = require('../');

describe('Resource', function() {
  var resource = new Resource(env);
  var project = resource.project();

  describe('resource', function() {
    it('should get a list of projects', function(done) {
      resource.getProjects(function(err, projects) {
        assert.ifError(err);
        assert(projects.length > 0);
        done();
      });
    });

    it('should get a list of projects in stream mode', function(done) {
      var resultsMatched = 0;

      resource.getProjectsStream()
        .on('error', done)
        .on('data', function() {
          resultsMatched++;
        })
        .on('end', function() {
          assert(resultsMatched > 0);
          done();
        });
    });
  });

  describe('project', function() {
    it('should get metadata', function(done) {
      project.getMetadata(function(err, metadata) {
        assert.ifError(err);
        assert.strictEqual(metadata.projectId, project.id);
        done();
      });
    });
  });

  // Auth through the gcloud SDK is required to:
  //
  //   - Create a project
  //   - Set metadata
  //   - Restore a project
  //   - Delete a project
  describe('lifecycle', function() {
    var CAN_RUN_TESTS = true;

    var resource = new Resource({
      projectId: env.projectId
    });

    var PROJECT_ID = 'gcloud-tests-' + Date.now();
    var project = resource.project(PROJECT_ID);

    before(function(done) {
      var authClient = googleAuth();

      // See if an auth token exists.
      authClient.getToken(function(err) {
        if (err) {
          CAN_RUN_TESTS = false;
          done();
          return;
        }

        project.create(done);
      });
    });

    beforeEach(function() {
      if (!CAN_RUN_TESTS) {
        this.skip();
      }
    });

    after(function(done) {
      if (!CAN_RUN_TESTS) {
        this.skip();
        return;
      }

      project.delete(done);
    });

    it('should have created the project', function() {
      assert.strictEqual(project.metadata.projectId, PROJECT_ID);
    });

    it('should set metadata', function(done) {
      var newProjectName = 'gcloud-tests-project-name';

      project.getMetadata(function(err, metadata) {
        assert.ifError(err);

        var originalProjectName = metadata.name;
        assert.notStrictEqual(originalProjectName, newProjectName);

        project.setMetadata({
          name: newProjectName
        }, function(err) {
          assert.ifError(err);

          project.setMetadata({
            name: originalProjectName
          }, done);
        });
      });
    });

    it('should restore the project', function(done) {
      project.delete(function(err) {
        assert.ifError(err);
        project.restore(done);
      });
    });
  });
});
