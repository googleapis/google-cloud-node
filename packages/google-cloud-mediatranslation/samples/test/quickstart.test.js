// Copyright 2017 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      https://www.apache.org/licenses/LICENSE-2.0
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
const execSync = require('child_process').execSync;
const cmd = 'node quickstart.js';

const filePath = path.join(__dirname, '..', 'resources/audio.raw');
const exec = cmd => execSync(cmd, {encoding: 'utf-8'});

describe('Quickstart', () => {
  it('should translate from a streamed file', async () => {
    const stdout = exec(`${cmd} ${filePath} linear16 en-US es-ES`);
    assert.include(stdout, 'Partial translation');
  });
});
