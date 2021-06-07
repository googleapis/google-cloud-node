// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {assert} from 'chai';
import {describe, it, afterEach} from 'mocha';
import * as cp from 'child_process';
import * as fs from 'fs';
import * as rimraf from 'rimraf';

const execSync = (cmd: string) => cp.execSync(cmd, {encoding: 'utf-8'});
const fixtures = './system-test/fixtures';
const buildDir = `${fixtures}/build`;

describe('typescript', () => {
  it('simplifier.js "commentify" mode works', () => {
    if (!fs.existsSync(buildDir)) {
      rimraf.sync(buildDir);
    }

    execSync(
      `node ./utils/simplifier.js commentify ${fixtures}/getSchema-fixture.tstest`
    );
    const expected = fs
      .readFileSync(`${fixtures}/getSchema-expected.tstest`)
      .toString();
    const actual = fs
      .readFileSync(`${buildDir}/getSchema-fixture.tstest`)
      .toString();
    assert.strictEqual(actual, expected);

    rimraf.sync(`${fixtures}/build`);
  });

  it('simplifier.js "post" mode works', () => {
    if (!fs.existsSync(buildDir)) {
      rimraf.sync(buildDir);
    }
    fs.mkdirSync(buildDir);
    fs.copyFileSync(
      `${fixtures}/getSchema-fixture.jstest`,
      `${buildDir}/getSchema-fixture.jstest`
    );

    execSync(
      `node ./utils/simplifier.js post ${buildDir}/getSchema-fixture.jstest`
    );
    const expected = fs
      .readFileSync(`${fixtures}/getSchema-expected.jstest`)
      .toString();
    const actual = fs
      .readFileSync(`${buildDir}/getSchema-fixture.jstest`)
      .toString();
    assert.strictEqual(actual, expected);

    rimraf.sync(`${fixtures}/build`);
  });
});
