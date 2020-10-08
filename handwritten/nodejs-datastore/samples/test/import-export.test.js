// Copyright 2020 Google LLC
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

'use strict';

const {Datastore} = require('@google-cloud/datastore');
const {assert} = require('chai');
const cp = require('child_process');
const {before, describe, it} = require('mocha');

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

describe('import/export entities', async () => {
  const datastore = new Datastore();

  const BUCKET_ID = 'nodejs-datastore-system-tests';
  let EXPORTED_FILE;

  before(async () => {
    const [exportOperation] = await datastore.export({
      bucket: BUCKET_ID,
    });
    await exportOperation.promise();
    EXPORTED_FILE = exportOperation.result.outputUrl;
  });

  it('should export entities', async () => {
    const stdout = execSync(`node ./export.js ${BUCKET_ID}`);
    assert.include(stdout, 'Export file created:');
  });

  it('should import entities', () => {
    execSync(`node ./import.js ${EXPORTED_FILE}`);
  });
});
