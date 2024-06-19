// Copyright 2023 Google LLC
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

/* eslint-disable */

'use strict';

const {assert} = require('chai');
const {describe, it} = require('mocha');
const sinon = require('sinon');
// TODO: delete unused imports

const cp = require('child_process');
const sort = require('./helpers/sorting');

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

describe('Creating a union query', () => {
  const stubConsole = function () {
    sinon.stub(console, 'error');
    sinon.stub(console, 'log');
  };

  const restoreConsole = function () {
    console.log.restore();
    console.error.restore();
  };

  beforeEach(stubConsole);
  afterEach(restoreConsole);

  require('./helpers/populate-data');

  it('should get a combination of items from the Datastore', async () => {
    assert.strictEqual(sort(execSync(`node ./queryFilterOr.js`)), '\nEntity found: Buy milk\nEntity found: Feed cats');
  });
});
