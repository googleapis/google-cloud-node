// Copyright 2022 Google LLC
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

import * as assert from 'assert';
import {describe, it, beforeEach} from 'mocha';
import * as fs from 'fs';
import {promises as fsp} from 'fs';
import * as path from 'path';
import * as minify from '../src/minify';

const testDir = path.join(process.cwd(), '.minify-test');
const fixturesDir = path.join(__dirname, '..', 'test', 'fixtures');

describe('minify tool', () => {
  beforeEach(async () => {
    if (fs.existsSync(testDir)) {
      await fsp.rm(testDir, {recursive: true, force: true});
    }
    await fsp.mkdir(testDir);
  });

  it('minifies the proto JSON file', async () => {
    const echoProtoJsonFixture = path.join(fixturesDir, 'echo.json');
    const echoProtoJson = path.join(testDir, 'echo.json');
    await fsp.copyFile(echoProtoJsonFixture, echoProtoJson);
    const statBefore = await fsp.stat(echoProtoJson);
    const objectBefore = require(echoProtoJson);
    await minify.main(testDir);
    const statAfter = await fsp.stat(echoProtoJson);
    delete require.cache[require(echoProtoJson)];
    const objectAfter = require(echoProtoJson);
    const contentAfter = (await fsp.readFile(echoProtoJson)).toString();
    const parsedObjectAfter = JSON.parse(contentAfter);
    assert(statBefore.size > statAfter.size);
    assert.deepEqual(objectBefore, objectAfter);
    assert.deepEqual(objectBefore, parsedObjectAfter);
  });

  it('minifies the proto js file', async () => {
    const echoProtoJsFixture = path.join(fixturesDir, 'echo.js');
    const echoProtoJs = path.join(testDir, 'echo.js');
    await fsp.copyFile(echoProtoJsFixture, echoProtoJs);
    const statBefore = await fsp.stat(echoProtoJs);
    const resultBefore = require(echoProtoJs);
    await minify.main(testDir);
    const statAfter = await fsp.stat(echoProtoJs);
    delete require.cache[require(echoProtoJs)];
    const resultAfter = require(echoProtoJs);
    assert(statBefore.size > statAfter.size);
    assert.deepEqual(resultBefore, resultAfter);
  });
});
