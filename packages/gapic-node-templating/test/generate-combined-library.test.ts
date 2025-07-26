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
import {generateCombinedLibraries} from '../src/commands/generate-combined-library';
// eslint-disable-next-line node/no-unpublished-import
import {describe, it} from 'mocha';
// eslint-disable-next-line node/no-unpublished-import
import * as sinon from 'sinon';
import * as vars from '../src/get-bootstrap-template-vars';
import * as templates from '../src/templating';
import path from 'path';

export const API_ID = 'google.cloud.kms.v1';
export const DESTINATION_FOLDER = './temp';
export const MONO_REPO_NAME = 'google-cloud-node';
export const GITHUB_TOKEN = 'ghs_1234';
export const FOLDER_NAME = 'google-cloud-kms';

describe('tests running build trigger', () => {
//   let compileVarsStub: sinon.SinonStub;
//   let compileTemplatesStub: sinon.SinonStub;
//   let getDistributionNameStub: sinon.SinonStub;
//   beforeEach(() => {
//     compileVarsStub = sinon.stub(vars, 'compileVars');
//     compileTemplatesStub = sinon.stub(templates, 'compileTemplates');
//     getDistributionNameStub = sinon.stub(vars, 'getDistributionName');
//   });

//   afterEach(() => {
//     compileVarsStub.restore();
//     compileTemplatesStub.restore();
//     getDistributionNameStub.restore();
//   });
const TEST_FIXTURES_PATH = path.resolve('test/fixtures/combined-library');

  it('it should generate a full library', async () => {
    await generateCombinedLibraries.handler({
      'library-path': path.join(TEST_FIXTURES_PATH, 'google-cloud-speech-nodejs'),
      libraryPath: path.join(TEST_FIXTURES_PATH, 'google-cloud-speech-nodejs'),
      _: [],
      $0: 'foo',
    });

    // assert.ok(getDistributionNameStub.calledOnce);
    // assert.ok(compileVarsStub.calledOnce);
    // assert.ok(compileTemplatesStub.calledOnce);
  });
});
