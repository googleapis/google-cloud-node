// Copyright 2017 Google LLC
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

const {assert} = require('chai');
const {execSync} = require('child_process');

const exec = cmd => execSync(cmd, {encoding: 'utf-8'});

describe('resource samples', () => {
  it('should run the quickstart', () => {
    const stdout = exec('node listProjects');
    assert.include(stdout, 'Projects:');
    assert.include(stdout, process.env.GCLOUD_PROJECT);
  });

  it('should list projects', () => {
    const stdout = exec('node quickstart');
    assert.match(stdout, /Projects:/);
  });
});
