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

import {describe, it} from 'mocha';
import * as assert from 'assert';
import {
  compileVars,
  getApiInfo,
  getApiPath,
  getApiPathWithDashes,
  getDriftMetadata,
  getMonoRepoName,
  getVersion,
} from '../src/get-bootstrap-template-vars';
import {
  API_ID,
  DESTINATION_FOLDER,
  GITHUB_TOKEN,
  MONO_REPO_NAME,
} from './bootstrap-library.test';
import {Storage} from '@google-cloud/storage';
import * as sinon from 'sinon';
import nock from 'nock';

const {Octokit} = require('@octokit/rest');

nock.disableNetConnect();

describe('get bootstrap template vars', () => {
  describe('tests for metadata information', () => {
    it('should return the API path without the version, with slashes', async () => {
      assert.deepStrictEqual(
        getApiPath('cloud.google.kms.v1'),
        'cloud/google/kms'
      );
    });

    it('should return the API path without the version, with dashes', async () => {
      assert.deepStrictEqual(
        getApiPathWithDashes('cloud.google.kms.v1'),
        'cloud-google-kms'
      );
    });

    it('should get just the version', async () => {
      assert.deepStrictEqual(getVersion('cloud.google.kms.v1'), 'v1');
    });

    it('should get just the monorepo name', async () => {
      assert.deepStrictEqual(
        getMonoRepoName('googleapis/google-cloud-node'),
        'googleapis/google-cloud-node'
      );

      assert.deepStrictEqual(
        getMonoRepoName('git@github:googleapis/google-cloud-node.git'),
        'googleapis/google-cloud-node'
      );
    });

    it('should compile the correct vars', async () => {
      assert.deepStrictEqual(
        compileVars(
          {
            'api-id': API_ID,
            'destination-folder': DESTINATION_FOLDER,
            'mono-repo-name': MONO_REPO_NAME,
            'github-token': GITHUB_TOKEN,
          },
          {
            apiShortName: 'kms',
            displayName: 'Key Management Service',
            docsRootUrl: 'https://cloud.google.com/kms',
            launchStage: 'beta',
          },
          '@google-cloud/kms'
        ),
        {
          name: 'kms',
          namePretty: 'Key Management Service',
          productDocumentation: 'https://cloud.google.com/kms',
          language: 'nodejs',
          distributionName: '@google-cloud/kms',
          monoRepoName: 'googleapis/google-cloud-node',
          apiId: 'google.cloud.kms.v1',
          apiPath: 'google/cloud/kms',
          apiPathDashes: 'google-cloud-kms',
          version: 'v1',
        }
      );
    });
  });
  describe('get drift metadata', () => {
    it('should make a call to the Storage bucket', async () => {
      const storage = sinon.createStubInstance(Storage);

      await getDriftMetadata(
        {
          'api-id': API_ID,
          'destination-folder': DESTINATION_FOLDER,
          'mono-repo-name': MONO_REPO_NAME,
          'github-token': GITHUB_TOKEN,
        },
        storage
      );

      assert.ok(storage.bucket.calledOnce);
    });

    it('should parse api info from DRIFT', async () => {
      const apiInfo = await getApiInfo(
        [
          {
            api_shortname: 'kms',
            display_name: 'Key Management Services',
            docs_root_url: 'cloud.kms.google.v1',
            launch_stage: 'GA',
          },
        ],
        'google.cloud.kms.v1'
      );
      assert.deepStrictEqual(apiInfo, {
        apiShortName: 'kms',
        displayName: 'Key Management Services',
        docsRootUrl: 'cloud.kms.google.v1',
        launchStage: 'GA',
      });
    });
  });

  describe('get package name', () => {
    it('should make a call to the Storage bucket', async () => {
      const storage = sinon.createStubInstance(Storage);

      await getDriftMetadata(
        {
          'api-id': API_ID,
          'destination-folder': DESTINATION_FOLDER,
          'mono-repo-name': MONO_REPO_NAME,
          'github-token': GITHUB_TOKEN,
        },
        storage
      );

      assert.ok(storage.bucket.calledOnce);
    });

    it('should parse api info from DRIFT', async () => {
      const apiInfo = await getApiInfo(
        [
          {
            api_shortname: 'kms',
            display_name: 'Key Management Services',
            docs_root_url: 'cloud.kms.google.v1',
            launch_stage: 'GA',
          },
        ],
        'google.cloud.kms.v1'
      );
      assert.deepStrictEqual(apiInfo, {
        apiShortName: 'kms',
        displayName: 'Key Management Services',
        docsRootUrl: 'cloud.kms.google.v1',
        launchStage: 'GA',
      });
    });
  });
});
