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

// eslint-disable-next-line n/no-unpublished-import
import {describe, it} from 'mocha';
import * as assert from 'assert';
import {
  compileVars,
  getApiPath,
  getApiPathWithDashes,
  getDistributionName,
  getServiceName,
  getVersion,
} from '../src/get-bootstrap-template-vars';
import {ServiceConfig} from '../src/commands/bootstrap-library';
import {
  API_ID,
  DESTINATION_FOLDER,
  MONO_REPO_NAME,
} from './bootstrap-library-command.test';
// eslint-disable-next-line n/no-unpublished-import
import * as sinon from 'sinon';
// eslint-disable-next-line n/no-unpublished-import
import {Octokit} from '@octokit/rest';
import * as fs from 'fs';
import yaml from 'js-yaml';

const octokit = new Octokit({
  auth: 'mypersonalaccesstoken123',
});

describe('get bootstrap template vars', () => {
  describe('tests for metadata information', () => {
    it('should return the API path without the version, with slashes', async () => {
      assert.deepStrictEqual(
        getApiPath('cloud.google.kms.v1'),
        'cloud/google/kms',
      );
    });

    it('should return the API path without the version, with dashes', async () => {
      assert.deepStrictEqual(
        getApiPathWithDashes('cloud.google.kms.v1'),
        'cloud-google-kms',
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
            'folder-name': DESTINATION_FOLDER,
            'service-config-path': `${DESTINATION_FOLDER}/interContainerVars.json`,
          },
          {
            title: 'Key Management Service',
            name: 'kms.googleapis.com',
            apis: [{name: 'KeyManagementService'}],
            publishing: {
              api_short_name: 'kms',
              github_label: 'kms_prefix',
              documentation_uri: 'https://cloud.google.com/kms',
              launch_stage: 'beta',
            },
          },
          '@google-cloud/kms',
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
          version: 'v1',
          serviceName: 'KeyManagementService',
          hostName: 'kms.googleapis.com',
          folderName: DESTINATION_FOLDER,
        },
      );
    });
  });

  describe('get package name', () => {
    it('should get the distribution name', async () => {
      const getContentStub = sinon
        .stub(octokit.repos, 'getContent')
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .resolves({data: {name: 'BUILD.bazel', content: 'content'}} as any);

      await getDistributionName(
        octokit,
        'google.cloud.kms.v1',
        sinon.stub().returns(Buffer),
      );

      assert.ok(getContentStub.calledOnce);
    });
  });

  describe('get service name', () => {
    it('should get the service name', async () => {
      const serviceConfig = yaml.load(
        fs.readFileSync('./test/fixtures/serviceConfig.yaml', 'utf8'),
      ) as ServiceConfig;
      const serviceName = getServiceName(serviceConfig);

      assert.deepStrictEqual(serviceName, 'KeyManagementService');
    });
  });
});
