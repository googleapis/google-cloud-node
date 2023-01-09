// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// eslint-disable-next-line node/no-unpublished-import
const path = require('path');
const createGhIssue = require('../../node-bootstrap-container/create-gh-issue');
const createFolderNamePath = path.resolve(__dirname, '../../node-bootstrap-container/create-folder-name');
const snapshot = require('snap-shot-it');
const {describe, it} = require('mocha');
const assert = require('assert');
const cp = require('child_process');
const { Octokit } = require('@octokit/rest');
const fs = require('fs');
const sinon = require('sinon');


describe('helper functions', () => {
    beforeEach(() => {
      fs.writeFileSync(path.resolve(__dirname, 'interContainerVars.json'), JSON.stringify({branchName: 'branchName'}, null, 4))
    })

    afterEach(() => {
      cp.execSync(`rm -rf ${path.resolve(__dirname, 'interContainerVars.json')}`)
    })

    it('should return the API path without the version, with dashes', async () => {
      assert.deepStrictEqual(cp.execSync(
        `node ${createFolderNamePath} google.cloud.kms.v1`).toString('utf-8'),
        'google-cloud-kms\n'
      );
    });

    it('should add the .OwlBot.yaml name to the interContainerVars.json', async () => { 
       cp.execSync(
        `node ./add-to-well-known-path.js ${__dirname}/interContainerVars.json google-cloud-kms`);

        assert.deepStrictEqual(JSON.parse(fs.readFileSync(path.resolve(__dirname, 'interContainerVars.json')).toString('utf8')), {branchName: 'branchName', owlbotYamlPath: 'packages/google-cloud-kms/.OwlBot.yaml'})
    });


  
      it('should open an issue on a given repo', async () => {
       process.env.MONO_REPO_NAME = 'google-cloud-node';
       process.env.API_ID = 'google.cloud.kms.v1';
       process.env.PROJECT_ID = 'owlbot-bootstrap-prod';
       process.env.BUILD_ID = '1234';
       process.env.GITHUB_TOKEN = '22334';
       const octokit = new Octokit({auth: process.env.GITHUB_TOKEN});
       const issueStub = sinon.stub(octokit.rest.issues, 'create');
    
       await createGhIssue.createGHIssue(octokit);
       assert.ok(issueStub.calledOnce);

       delete process.env.MONO_REPO_NAME;
       delete process.env.API_ID;
       delete process.env.PROJECT_ID;
       delete process.env.BUILD_ID;
       delete process.env.GITHUB_TOKEN;
      });
});
