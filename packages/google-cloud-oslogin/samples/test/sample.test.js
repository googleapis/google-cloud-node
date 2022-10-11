// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const {assert} = require('chai');
const {describe, it} = require('mocha');
const {execSync} = require('child_process');

const exec = cmd => execSync(cmd, {encoding: 'utf8'});

describe('sample tests', () => {
  it('should run the quickstart', () => {
    const output = exec(
      'node quickstart users/kokoro-system-test@long-door-651.iam.gserviceaccount.com'
    );
    assert(output !== null);
  });
});
