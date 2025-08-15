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

import * as assert from 'assert';
import {bootstrapLibrary} from '../src/commands/bootstrap-library';
// eslint-disable-next-line n/no-unpublished-import
import {describe, it} from 'mocha';
// eslint-disable-next-line n/no-unpublished-import
import * as sinon from 'sinon';
import * as vars from '../src/get-bootstrap-template-vars';
import * as templates from '../src/templating';

export const API_ID = 'google.cloud.kms.v1';
export const DESTINATION_FOLDER = './temp';
export const MONO_REPO_NAME = 'google-cloud-node';
export const GITHUB_TOKEN = 'ghs_1234';
export const FOLDER_NAME = 'google-cloud-kms';

describe('tests running build trigger', () => {
  let compileVarsStub: sinon.SinonStub;
  let compileTemplatesStub: sinon.SinonStub;
  let getDistributionNameStub: sinon.SinonStub;
  beforeEach(() => {
    compileVarsStub = sinon.stub(vars, 'compileVars');
    compileTemplatesStub = sinon.stub(templates, 'compileTemplates');
    getDistributionNameStub = sinon.stub(vars, 'getDistributionName');
  });

  afterEach(() => {
    compileVarsStub.restore();
    compileTemplatesStub.restore();
    getDistributionNameStub.restore();
  });

  it('it should get correct variable names', async () => {
    await bootstrapLibrary.handler({
      'api-id': API_ID,
      apiId: API_ID,
      'destination-folder': DESTINATION_FOLDER,
      destinationFolder: DESTINATION_FOLDER,
      'mono-repo-name': MONO_REPO_NAME,
      monoRepoName: MONO_REPO_NAME,
      'folder-name': DESTINATION_FOLDER,
      folderName: DESTINATION_FOLDER,
      'service-config-path': './test/fixtures/serviceConfig.yaml',
      serviceConfigPath: './test/fixtures/serviceConfig.yaml',
      _: [],
      $0: 'foo',
    });

    assert.ok(getDistributionNameStub.calledOnce);
    assert.ok(compileVarsStub.calledOnce);
    assert.ok(compileTemplatesStub.calledOnce);
  });
});
