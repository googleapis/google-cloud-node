// Copyright 2019 Google LLC
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

const path = require('path');
const {assert} = require('chai');
const {describe, it} = require('mocha');
const cp = require('child_process');

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

const cwd = path.join(__dirname, '..');

const PROJECT_ID = '1046198160504';
const URI = 'http://testsafebrowsing.appspot.com/s/phishing.html';

describe('Quickstart', () => {
  it('should run quickstart', async () => {
    const stdout = execSync(`node ./quickstart.js ${URI} ${PROJECT_ID}`, {cwd});
    assert.include(stdout, 'reported');
  });
});
