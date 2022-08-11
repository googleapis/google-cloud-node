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
import {compileTemplates} from '../src/templating';

import {join} from 'path';
import {execSync} from 'child_process';
import {mkdirSync, readdirSync, readFileSync} from 'fs';
// eslint-disable-next-line node/no-unpublished-import
import snapshot from 'snap-shot-it';
import * as assert from 'assert';

describe('tests for templates', () => {
  let templateDirRead: string;
  let templateDirWrite: string;
  beforeEach(() => {
    templateDirRead = join(
      __dirname,
      '../../',
      'templates/bootstrap-templates'
    );
    templateDirWrite = join(__dirname, 'temp');
    try {
      mkdirSync(templateDirWrite);
    } catch (err) {
      console.log('Directory already exists');
    }
  });

  afterEach(() => {
    execSync(`rm -rf ${templateDirWrite}`);
  });

  it('it should create the templates in the directory', async () => {
    await compileTemplates(templateDirRead, templateDirWrite, {
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
      serviceName: 'KeyManagementService',
    });

    snapshot(
      readFileSync(join(templateDirWrite, '.github', '.OwlBot.yaml'), 'utf8')
    );
    snapshot(
      readFileSync(join(templateDirWrite, '.repo-metadata.json'), 'utf8')
    );
    snapshot(
      readFileSync(join(templateDirWrite, 'samples', 'package.json'), 'utf8')
    );
    snapshot(
      readFileSync(
        join(templateDirWrite, 'samples', 'test', 'quickstart.js'),
        'utf8'
      )
    );
    snapshot(readFileSync(join(templateDirWrite, 'LICENSE'), 'utf8'));
    const packageJson = readFileSync(
      join(templateDirWrite, 'package.json'),
      'utf8'
    );

    assert.ok(packageJson.match(/@google-cloud\/kms/));
    assert.ok(packageJson.match(/googleapis\/google-cloud-node/));
    assert.ok(packageJson.match(/"main": "build\/src\/index.js"/));
    assert.ok(packageJson.match(/"Key Management Service client for Node.js"/));

    assert.deepStrictEqual(
      readdirSync(templateDirRead),
      readdirSync(templateDirWrite)
    );
  });
});
