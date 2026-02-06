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

const {assert} = require('chai');
const {describe, it} = require('mocha');
const cp = require('child_process');

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

describe('Client', () => {
  it('should should set providedUserAgent', async () => {
    const output = execSync('node setUserAgent.js');
    assert.match(output, /User agent:/);
    assert.match(output, /my-user-agent/);
  });
  it('should should set client endpoint', async () => {
    let output = execSync('node setClientEndpoint.js us-east4');
    assert.match(output, /API Endpoint:/);
    assert.match(output, /https:\/\/us-east4-bigquery.googleapis.com/);

    output = execSync('node setClientEndpoint.js eu');
    assert.match(output, /API Endpoint:/);
    assert.match(output, /https:\/\/eu-bigquery.googleapis.com/);
  });
});
