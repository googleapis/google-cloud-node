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

import * as assert from 'assert';
import {describe, it, before, after} from 'mocha';
import * as uuid from 'uuid';
import {Project, Resource} from '../src';

if (
  !process.env.GCLOUD_PROJECT ||
  !process.env.GOOGLE_APPLICATION_CREDENTIALS
) {
  throw new Error(
    'the GCLOUD_PROJECT and GOOGLE_APPLICATION_CREDENTIAL environment variables must be set to run the system tests 👻'
  );
}

describe('Resource', () => {
  const PREFIX = 'gcloud-tests-';
  const resource = new Resource();
  const project = resource.project();

  describe('resource', () => {
    it('should get a list of projects', async () => {
      const [projects] = await resource.getProjects();
      assert(projects!.length > 0);
    });

    it('should get a list of projects in stream mode', done => {
      let resultsMatched = 0;
      resource
        .getProjectsStream()
        .on('error', done)
        .on('data', () => resultsMatched++)
        .on('end', () => {
          assert(resultsMatched > 0);
          done();
        });
    });
  });

  describe('project', () => {
    it('should get metadata', async () => {
      const [metadata] = await project.getMetadata();
      assert.notStrictEqual(metadata.projectId, undefined);
    });

    it('should get Iam policy', done => {
      project.getIamPolicy((err, policy) => {
        assert.ifError(err);
        assert.notStrictEqual(policy!.etag, undefined);
        assert.strictEqual(typeof policy!.version, 'number');
        done();
      });
    });
  });

  // Auth through the gcloud SDK is required to:
  //   - Create a project
  //   - Set metadata
  //   - Restore a project
  //   - Delete a project
  // tslint:disable-next-line ban
  describe.skip('lifecycle', () => {
    const testProjects: Project[] = [];
    const resource = new Resource();
    const project = resource.project(generateName('project'));

    before(async () => {
      await deleteTestProjects();
      const [p, operation] = await project.create();
      testProjects.push(p);
      return new Promise((resolve, reject) => {
        operation.on('error', reject).on('complete', resolve);
      });
    });

    after(async () => deleteTestProjects());

    it('should have created the project', async () => {
      const [metadata] = await project.getMetadata();
      assert.strictEqual(metadata.projectId, project.id);
    });

    it('should run operation as a promise', async () => {
      const project = resource.project(generateName('project'));
      const [, operation] = await project.create();
      await operation.promise();
      testProjects.push(project);
      const [metadata] = await project.getMetadata();
      assert.strictEqual(metadata.projectId, project.id);
    });

    it('should set metadata', async () => {
      const newProjectName = 'gcloud-tests-project-name';
      const [metadata] = await project.getMetadata();
      const originalProjectName = metadata.name;
      assert.notStrictEqual(originalProjectName, newProjectName);
      await project.setMetadata({name: newProjectName});
      await project.setMetadata({name: originalProjectName});
    });

    it('should restore the project', async () => {
      await project.delete();
      await project.restore();
    });

    async function deleteTestProjects() {
      await Promise.all(testProjects.map(x => x.delete()));
      const [projects] = await resource.getProjects();
      const projectsToDelete = projects.filter(project => {
        const isTestProject = project.id!.indexOf(PREFIX) === 0;
        const deleted = project.metadata.lifecycleState === 'DELETE_REQUESTED';
        return isTestProject && !deleted;
      });
      await Promise.all(projectsToDelete.map(x => x.delete()));
    }

    function generateName(resourceType: string) {
      return PREFIX + resourceType + '-' + uuid.v1().substr(0, 8);
    }
  });
});
