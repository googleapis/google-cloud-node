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
const {describe, it} = require('mocha');

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

describe('indexes', async () => {
  const datastore = new Datastore();

  // @TODO: Until the protos support creating indexes, these tests depend on
  // the remote state of declared indexes. Could be flaky!

  it('should list indexes', async () => {
    const [indexes] = await datastore.getIndexes();
    const stdout = execSync('node ./indexes.list.js');
    assert.include(stdout, `${indexes.length} indexes returned.`);
  });

  it('should get a specific index', async () => {
    const [indexes] = await datastore.getIndexes();
    const stdout = execSync(`node ./indexes.get.js ${indexes[0].id}`);
    assert.include(stdout, 'Properties:');
  });
});
