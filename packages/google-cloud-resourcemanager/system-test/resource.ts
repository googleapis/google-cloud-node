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
const exec = require('methmeth');
import {GoogleAuth} from 'google-auth-library';
import * as uuid from 'uuid';

import {Resource, Project} from '../src';
import {Operation} from '@google-cloud/common';

describe('Resource', () => {
  const PREFIX = 'gcloud-tests-';
  const resource = new Resource();
  const project = resource.project();

  describe('resource', () => {
    it('should get a list of projects', done => {
      resource.getProjects((err, projects) => {
        assert.ifError(err);
        assert(projects!.length > 0);
        done();
      });
    });

    it('should get a list of projects in stream mode', done => {
      let resultsMatched = 0;

      resource.getProjectsStream()
          .on('error', done)
          .on('data',
              () => {
                resultsMatched++;
              })
          .on('end', () => {
            assert(resultsMatched > 0);
            done();
          });
    });
  });

  describe('project', () => {
    it('should get metadata', done => {
      project.getMetadata((err, metadata) => {
        assert.ifError(err);
        assert.notStrictEqual(metadata.projectId, undefined);
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
  describe('lifecycle', () => {
    let CAN_RUN_TESTS = true;
    const testProjects: Project[] = [];

    const resource = new Resource();

    const project = resource.project(generateName('project'));

    before(done => {
      const authClient = new GoogleAuth();

      async.series(
          [
            (callback) => {
              // See if an auth token exists.
              authClient.getAccessToken()
                  .then(() => {
                    CAN_RUN_TESTS = true;
                    callback();
                  })
                  .catch(e => {
                    CAN_RUN_TESTS = e === null;
                    callback();
                  });
            },
            deleteTestProjects,
          ],
          (err) => {
            if (err || !CAN_RUN_TESTS) {
              done(err);
              return;
            }

            project.create(
                (err: Error, project: Project, operation: Operation) => {
                  if (err) {
                    done(err);
                    return;
                  }
                  testProjects.push(project);
                  operation.on('error', done).on('complete', () => {
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

    it('should have created the project', done => {
      project.getMetadata((err, metadata) => {
        assert.ifError(err);
        assert.strictEqual(metadata.projectId, project.id);
        done();
      });
    });

    it('should run operation as a promise', done => {
      const project = resource.project(generateName('project'));
      project.create()
          .then(response => {
            const operation = response[1] as {} as Operation;
            return operation.promise();
          })
          .then(() => {
            testProjects.push(project);
            return project.getMetadata();
          })
          .then(response => {
            const metadata = response[0];
            assert.strictEqual(metadata.projectId, project.id);
            done();
          });
    });

    it('should set metadata', done => {
      const newProjectName = 'gcloud-tests-project-name';
      project.getMetadata((err, metadata) => {
        assert.ifError(err);
        const originalProjectName = metadata.name;
        assert.notStrictEqual(originalProjectName, newProjectName);
        project.setMetadata({name: newProjectName}, err => {
          assert.ifError(err);
          project.setMetadata({name: originalProjectName}, done);
        });
      });
    });

    it('should restore the project', done => {
      project.delete(err => {
        assert.ifError(err);
        project.restore(done);
      });
    });

    function deleteTestProjects(callback: (err?: Error) => void) {
      if (!CAN_RUN_TESTS) {
        callback();
        return;
      }
      async.series(
          [
            callback => {
              async.eachSeries(testProjects, exec('delete'), callback);
            },
            callback => {
              resource.getProjects((err, projects) => {
                if (err) {
                  callback(err);
                  return;
                }
                const projectsToDelete = projects!.filter(project => {
                  const isTestProject = project.id!.indexOf(PREFIX) === 0;
                  const deleted =
                      project.metadata.lifecycleState === 'DELETE_REQUESTED';
                  return isTestProject && !deleted;
                });
                async.each(projectsToDelete, exec('delete'), callback);
              });
            },
          ],
          callback);
    }

    function generateName(resourceType: string) {
      return PREFIX + resourceType + '-' + uuid.v1().substr(0, 8);
    }
  });
});
