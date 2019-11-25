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

const fs = require('fs');
const {assert} = require('chai');
const cp = require('child_process');

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

const outputFile = 'output.mp3';

describe('quickstart', () => {
  after(() => {
    try {
      fs.unlinkSync(outputFile);
    } catch (err) {
      // Ignore error
    }
  });

  it('should synthesize speech to local mp3 file', async () => {
    assert.strictEqual(fs.existsSync(outputFile), false);
    const stdout = execSync('node quickstart');
    assert.match(stdout, /Audio content written to file: output.mp3/);
    assert.ok(fs.existsSync(outputFile));
  });
});
