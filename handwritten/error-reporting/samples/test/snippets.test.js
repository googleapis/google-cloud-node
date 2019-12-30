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
const {describe, it} = require('mocha');
const {execSync, spawn} = require('child_process');
const {request} = require('gaxios');

const exec = cmd => execSync(cmd, {encoding: 'utf8'});

/**
 * Start the express server, and wait for it to start serving content before
 * resolving the promise.
 */
async function startExpress() {
  return new Promise((resolve, reject) => {
    const p = spawn('node', ['express']);
    p.on('error', reject);
    p.stdout.on('data', data => {
      if (data.includes('Press Ctrl+C to quit.')) {
        resolve(p);
      }
    });
  });
}

describe(__filename, () => {
  it('should setup using implicit credentials', () => {
    // There's no output, the command should just succeed
    exec('node implicitSetup');
  });

  it('should report errors manually', () => {
    const output = exec('node manual');
    assert.include(output, 'Done reporting error event!');
    assert.include(output, 'Done reporting Error object!');
    assert.include(output, 'Done reporting error string!');
  });

  it('should report errors with the express test', async () => {
    let pid;
    try {
      pid = await startExpress();
      const res = await request({
        url: 'http://localhost:8080/error',
      });
      assert.include(res.data, 'Something broke!');
    } finally {
      if (pid) pid.kill();
    }
  });

  it('should report exceptions from the express test', async () => {
    let pid;
    try {
      pid = await startExpress();
      const res = await request({
        url: 'http://localhost:8080/exception',
        validateStatus: () => true,
      });
      assert.strictEqual(res.status, 500);
      assert.include(res.data, 'SyntaxError');
    } finally {
      if (pid) pid.kill();
    }
  });
});
