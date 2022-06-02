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
  getApiPath,
  getApiPathWithDashes,
  getMonoRepoName,
  getVersion,
} from '../src/get-bootstrap-template-vars';
import {
  API_ID,
  DESTINATION_FOLDER,
  DISTRIBUTION_NAME,
  MONO_REPO_NAME,
} from './bootstrap-library.test';

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
          'distribution-name': DISTRIBUTION_NAME,
        },
        {
          apiShortName: 'kms',
          displayName: 'Key Management Service',
          version: 'v1',
          docsRootUrl: 'https://cloud.google.com/kms',
          launchStage: 'beta',
        }
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
