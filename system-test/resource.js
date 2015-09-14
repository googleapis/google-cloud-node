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

var env = require('./env.js');
var Resource = require('../lib/resource/index.js');

describe('Resource', function() {
  // -------------
  // >> Attention!
  // -------------
  // As of 9/14/15, creating projects is not supported. Once we have support,
  // the following description outlines how we should run our tests.
  // -------------
  //
  // Before the tests run, we create a project. That acts as the test for being
  // able to create a project. Similarly, the after hook deletes it, testing if
  // a project can be deleted.
  //
  // ----------
  // >> Notice!
  // ----------
  // All tests should only manipulate a short-lived project. NOT the project the
  // user has been running our test suite with. That would just be rude.
  // ----------

  // var PROJECT_ID = 'gcloud-tests-' + Date.now();
  var PROJECT_NAME = 'gcloud-tests-project-name';

  var resource = new Resource(env);
  var project;

  before(function(done) {
    // Uncomment after we support creating a project.
    // resource.createProject(PROJECT_ID, function(err, project_) {
    //   if (err) {
    //     done(err);
    //     return;
    //   }
    //
    //   project = project_;
    // });

    // ** SEE "Notice!" SECTION ABOVE **
    // Remove once we support creating a project.
    project = resource.project();
    done();
  });

  // Uncomment after we support creating a project.
  // after(function(done) {
  //   project.delete(done);
  // });

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

      resource.getProjects()
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

    it.skip('should set metadata', function(done) {
      project.getMetadata(function(err, metadata) {
        assert.ifError(err);

        var originalProjectName = metadata.name;

        project.setMetadata({
          name: PROJECT_NAME
        }, function(err) {
          assert.ifError(err);

          project.setMetadata({
            name: originalProjectName
          }, done);
        });
      });
    });

    it.skip('should delete and restore a project', function(done) {
      project.delete(function(err) {
        assert.ifError(err);
        project.restore(done);
      });
    });
  });
});
