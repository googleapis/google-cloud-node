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
import {describe, it} from 'mocha';
import * as assert from 'assert';
import {
  compileVars,
  getApiInfo,
  getApiPath,
  getApiPathWithDashes,
  getDistributionName,
  getDriftMetadata,
  getVersion,
} from '../src/get-bootstrap-template-vars';
import {
  API_ID,
  DESTINATION_FOLDER,
  MONO_REPO_NAME,
} from './bootstrap-library.test';
import {Storage} from '@google-cloud/storage';
// eslint-disable-next-line node/no-unpublished-import
import * as sinon from 'sinon';
// eslint-disable-next-line node/no-unpublished-import
import nock from 'nock';
// eslint-disable-next-line node/no-unpublished-import
import {Octokit} from 'octokit';

const octokit = new Octokit({
  auth: 'mypersonalaccesstoken123',
});

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

    it('should compile the correct vars', async () => {
      assert.deepStrictEqual(
        await compileVars(
          {
            'api-id': API_ID,
            'destination-folder': DESTINATION_FOLDER,
            'mono-repo-name': MONO_REPO_NAME,
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
          monoRepoName: 'google-cloud-node',
          apiId: 'google.cloud.kms.v1',
          apiPath: 'google/cloud/kms',
          apiPathDashes: 'google-cloud-kms',
        }
      );
    });
  });
  describe('get drift metadata', () => {
    it('should make a call to the Storage bucket', async () => {
      const storage = {
        bucket: sinon.stub().returns({
          file: sinon.stub().returns({
            download: sinon
              .stub()
              .returns(
                `{"apis": [{"api_shortname": "${API_ID}", "display_name": "thing1", "docs_root_url": "thing2", "launch_stage": "thing3"}]}`
              ),
          }),
        }),
      } as unknown as Storage;

      assert.deepStrictEqual(
        await getDriftMetadata(
          {
            'api-id': API_ID,
            'destination-folder': DESTINATION_FOLDER,
            'mono-repo-name': MONO_REPO_NAME,
          },
          storage
        ),
        {
          apiShortName: 'kms',
          displayName: 'thing1',
          docsRootUrl: 'thing2',
          launchStage: 'thing3',
        }
      );
    });

    it('should throw an error if apis file is empty', async () => {
      const storage = {
        bucket: sinon.stub().returns({
          file: sinon.stub().returns({
            download: sinon
              .stub()
              .returns('{"apis": [{"api_shortname": "not-the-api-name"}]}'),
          }),
        }),
      } as unknown as Storage;

      assert.rejects(
        async () =>
          await getDriftMetadata(
            {
              'api-id': API_ID,
              'destination-folder': DESTINATION_FOLDER,
              'mono-repo-name': MONO_REPO_NAME,
            },
            storage
          ),
        /apis.json downloaded from Cloud Storage was empty/
      );
    });

    it('getAPIInfo should return empty if there was no match', async () => {
      assert.deepStrictEqual(
        getApiInfo(
          [
            {
              api_shortname: 'thing4',
              display_name: 'thing1',
              docs_root_url: 'thing2',
              launch_stage: 'thing3',
            },
          ],
          'google.cloud.kms.v1'
        ),
        {apiShortName: 'kms', displayName: '', docsRootUrl: '', launchStage: ''}
      );
    });
  });

  describe('get package name', () => {
    it('should get the distribution name', async () => {
      const fileRequest = nock('https://api.github.com')
        .get(
          '/repos/googleapis/googleapis/contents/google%2Fcloud%2Fkms%2Fv1%2FBUILD.bazel'
        )
        .reply(200, {
          name: 'BUILD.bazel',
          content: 'content',
        });

      await getDistributionName(
        octokit,
        'google.cloud.kms.v1',
        sinon.stub().returns(Buffer)
      );

      fileRequest.done();
    });
  });
});
