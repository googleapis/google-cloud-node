/**
 * Copyright 2019, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const path = require('path');
const assert = require('assert');
const cp = require('child_process');

const {DocumentProcessorServiceClient} =
  require('@google-cloud/documentai').v1beta3;
const client = new DocumentProcessorServiceClient({
  apiEndpoint: 'us-documentai.googleapis.com',
});

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

const cwd = path.join(__dirname, '..');
const LOCATION = 'us';
const PROCESSOR_ID = '8f1123c1b125e0b7';

const fileName = 'invoice.pdf';
const filePath = path.resolve(path.join(__dirname, `../resources/${fileName}`));

describe('Quickstart', () => {
  let projectId;
  before(async () => {
    projectId = await client.getProjectId();
  });

  it('should run quickstart', async () => {
    const stdout = execSync(
      `node ./quickstart.js ${projectId} ${LOCATION} ${PROCESSOR_ID} ${filePath}`,
      {
        cwd,
      }
    );
    assert.notStrictEqual(stdout.indexOf('Paragraph'), -1);
  });
});
