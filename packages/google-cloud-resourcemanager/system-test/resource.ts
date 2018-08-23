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

import * as assert from 'assert';
import * as async from 'async';
var exec = require('methmeth');
import {GoogleAuth} from 'google-auth-library';
import * as uuid from 'uuid';

import {Resource, Project} from '../src';

describe('Resource', function() {
  var PREFIX = 'gcloud-tests-';
  var resource = new Resource();
  var project = resource.project();

  describe('resource', function() {
    it('should get a list of projects', done => {
      resource.getProjects(function(err, projects) {
        assert.ifError(err);
        assert(projects.length > 0);
        done();
      });
    });

    it('should get a list of projects in stream mode', done => {
      var resultsMatched = 0;

      resource
        .getProjectsStream()
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
    it('should get metadata', done => {
      project.getMetadata(function(err, metadata) {
        assert.ifError(err);
        assert.notStrictEqual((metadata as any).projectId, undefined);
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
    var testProjects: Project[] = [];

    var resource = new Resource();

    var project = resource.project(generateName('project'));

    before(function(done) {
      const authClient = new GoogleAuth();

      async.series(
        [
          function(callback) {
            // See if an auth token exists.
            authClient.getAccessToken().then(() => {
              CAN_RUN_TESTS = true;
              callback();
            }).catch(e => {
              CAN_RUN_TESTS = e === null;
              callback();
            });
          },
          deleteTestProjects,
        ],
        function(err) {
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

            operation.on('error', done).on('complete', function() {
              done();
            });
          });
        }
      );
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

    it('should have created the project', done => {
      project.getMetadata(function(err, metadata) {
        assert.ifError(err);
        assert.strictEqual((metadata as any).projectId, (project as any).id);
        done();
      });
    });

    it('should run operation as a promise', done => {
      var project = resource.project(generateName('project'));
      (project as any)
        .create()
        .then(function(response) {
          var operation = response[1];
          return operation.promise();
        })
        .then(function() {
          testProjects.push(project);
          return (project as any).getMetadata();
        })
        .then(function(response) {
          var metadata = response[0];
          assert.strictEqual(metadata.projectId, (project as any).id);
          done();
        });
    });

    it('should set metadata', done => {
      var newProjectName = 'gcloud-tests-project-name';
      project.getMetadata(function(err, metadata) {
        assert.ifError(err);
        var originalProjectName = (metadata as any).name;
        assert.notStrictEqual(originalProjectName, newProjectName);
        (project as any).setMetadata(
          {
            name: newProjectName,
          },
          function(err) {
            assert.ifError(err);
            (project as any).setMetadata(
              {
                name: originalProjectName,
              },
              done
            );
          }
        );
      });
    });

    it('should restore the project', done => {
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
      async.series(
        [
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
          },
        ],
        callback
      );
    }

    function generateName(resourceType) {
      return PREFIX + resourceType + '-' + uuid.v1().substr(0, 8);
    }
  });
});
