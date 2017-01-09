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
var async = require('async');
var exec = require('methmeth');
var googleAuth = require('google-auto-auth');
var uuid = require('uuid');

var env = require('../../../system-test/env.js');
var Resource = require('../');

describe('Resource', function() {
  var PREFIX = 'gcloud-tests-';
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

        assert.notStrictEqual(metadata.projectId, undefined);

        if (env.projectId) {
          assert.strictEqual(metadata.projectId, env.projectId);
        }

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
    var testProjects = [];

    var resource = new Resource({
      projectId: env.projectId
    });

    var project = resource.project(generateName('project'));

    before(function(done) {
      var authClient = googleAuth();

      async.series([
        function(callback) {
          // See if an auth token exists.
          authClient.getToken(function(err) {
            CAN_RUN_TESTS = err === null;
            callback();
          });
        },

        deleteTestProjects
      ], function(err) {
        if (err || !CAN_RUN_TESTS) {
          done(err);
          return;
        }

        project.create(function(err, project, operation) {
          if (err) {
            done(err);
            return;
          }

          testProjects.push(project);

          operation
            .on('error', done)
            .on('complete', function() {
              done();
            });
        });
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

      deleteTestProjects(done);
    });

    it('should have created the project', function(done) {
      project.getMetadata(function(err, metadata) {
        assert.ifError(err);
        assert.strictEqual(metadata.projectId, project.id);
        done();
      });
    });

    it('should run operation as a promise', function(done) {
      var project = resource.project(generateName('project'));

      project.create()
        .then(function(response) {
          var operation = response[1];
          return operation.promise();
        })
        .then(function() {
          testProjects.push(project);
          return project.getMetadata();
        })
        .then(function(response) {
          var metadata = response[0];
          assert.strictEqual(metadata.projectId, project.id);
          done();
        });
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

    function deleteTestProjects(callback) {
      if (!CAN_RUN_TESTS) {
        callback();
        return;
      }

      async.series([
        function(callback) {
          async.eachSeries(testProjects, exec('delete'), callback);
        },

        function(callback) {
          resource.getProjects(function(err, projects) {
            if (err) {
              callback(err);
              return;
            }

            var projectsToDelete = projects.filter(function(project) {
              var isTestProject = project.id.indexOf(PREFIX) === 0;
              var deleted =
                project.metadata.lifecycleState === 'DELETE_REQUESTED';

              return isTestProject && !deleted;
            });

            async.each(projectsToDelete, exec('delete'), callback);
          });
        }
      ], callback);
    }

    function generateName(resourceType) {
      return PREFIX + resourceType + '-' + uuid.v1().substr(0, 8);
    }
  });
});
