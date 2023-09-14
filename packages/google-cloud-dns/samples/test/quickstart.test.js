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

const {execSync} = require('child_process');
const {assert} = require('chai');
const {describe, it, before, after} = require('mocha');
const {DNS} = require('@google-cloud/dns');
const {v4} = require('uuid');

const exec = cmd => execSync(cmd, {encoding: 'utf8'});

describe(__filename, () => {
  const zoneName = `test-${v4().substr(0, 13)}`;
  const dns = new DNS();

  before(async () => {
    const projectId = await dns.getProjectId();
    await dns.createZone(zoneName, {
      dnsName: `${projectId}.appspot.com.`,
      dnssecConfig: {
        state: 'on',
      },
    });
  });

  after(async () => {
    await dns.zone(zoneName).delete();
  });

  it('should run the quickstart', () => {
    const output = exec('node quickstart');
    assert.include(output, 'Zones:');
  });
});
