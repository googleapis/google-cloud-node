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

// eslint-disable-next-line n/no-unpublished-import
import {describe, it} from 'mocha';
import * as assert from 'assert';
import * as path from 'path';
import * as fs from 'fs/promises';
import {generateIndexTs} from '../src/generate-index';
import {
  LIB_POST_COMBINATION,
  LIB_POST_COMBINATION_ESM,
  LIB_PRE_COMBINATION,
  LIB_PRE_COMBINATION_ESM,
} from './combine-libraries.test';
import {combineLibraries} from '../src/combine-libraries';
import {LibraryConfig} from '../src/library';
const TEST_FIXTURES_PATH = path.resolve('test/fixtures/combined-library');
describe('generate index.ts', () => {
  beforeEach(async () => {
    await combineLibraries(
      new LibraryConfig({
        sourcePath: path.resolve(TEST_FIXTURES_PATH, LIB_PRE_COMBINATION_ESM),
        destinationPath: path.resolve(
          TEST_FIXTURES_PATH,
          LIB_POST_COMBINATION_ESM,
        ),
        defaultVersion: 'v2',
        isEsm: false,
      }),
    );
  });

  afterEach(async () => {
    // Even though the library combination should delete the current library,
    // this allows us to ensure that our output is expected.
    try {
      await fs.rm(path.join(TEST_FIXTURES_PATH, LIB_POST_COMBINATION));
    } catch (err) {
      console.log(`Could not delete ${LIB_POST_COMBINATION}`);
    }
  });

  it('should generate index file with a default version provided', async () => {
    // Even though the library combination should delete the current library,
    // this allows us to ensure that our output is expected.
    try {
      await fs.rm(
        path.join(TEST_FIXTURES_PATH, LIB_POST_COMBINATION, 'src', 'index.ts'),
      );
    } catch (err) {
      console.log(`Could not delete ${LIB_POST_COMBINATION}/src/index.ts file`);
    }
    await generateIndexTs(
      path.resolve(TEST_FIXTURES_PATH, LIB_POST_COMBINATION),
      ['v1', 'v1p1beta1', 'v2'],
      {version: 'v1', clients: ['AdaptationClient', 'SpeechClient']},
      false,
      'src',
    );

    // Confirm index.ts was generated
    assert.ok(
      await fs.stat(
        path.join(TEST_FIXTURES_PATH, LIB_POST_COMBINATION, 'src', 'index.ts'),
      ),
    );
    const contents = await fs.readFile(
      path.join(TEST_FIXTURES_PATH, LIB_POST_COMBINATION, 'src', 'index.ts'),
      'utf8',
    );
    // Confirm all versions were generated
    assert.match(
      contents,
      /export default {v1, v1p1beta1, v2, AdaptationClient, SpeechClient};/,
    );
    // Confirm default version is exported
    assert.match(contents, /const AdaptationClient = v1.AdaptationClient;/);

    // Confirm another version is NOT exported
    assert.doesNotMatch(
      contents,
      /const AdaptationClient = v2.AdaptationClient;/,
    );
  });

  it('should generate an index file as ESM if true', async () => {
    // Even though the library combination should delete the current library,
    // this allows us to ensure that our output is expected.
    try {
      await fs.rm(path.join(TEST_FIXTURES_PATH, LIB_POST_COMBINATION_ESM));
    } catch (err) {
      console.log(`Could not delete ${LIB_POST_COMBINATION_ESM} directory`);
    }
    await combineLibraries(
      new LibraryConfig({
        sourcePath: path.resolve(TEST_FIXTURES_PATH, LIB_PRE_COMBINATION_ESM),
        destinationPath: path.resolve(
          TEST_FIXTURES_PATH,
          LIB_POST_COMBINATION_ESM,
        ),
        defaultVersion: 'v2',
        isEsm: false,
      }),
    );
    await generateIndexTs(
      path.resolve(TEST_FIXTURES_PATH, LIB_POST_COMBINATION_ESM),
      ['v2', 'v2beta2'],
      {version: 'v2', clients: ['CloudTasksClient']},
      true,
      'esm/src',
    );

    // Confirm index.ts was generated
    assert.ok(
      await fs.stat(
        path.join(
          TEST_FIXTURES_PATH,
          LIB_POST_COMBINATION_ESM,
          'esm',
          'src',
          'index.ts',
        ),
      ),
    );
    const contents = await fs.readFile(
      path.join(
        TEST_FIXTURES_PATH,
        LIB_POST_COMBINATION_ESM,
        'esm',
        'src',
        'index.ts',
      ),
      'utf8',
    );
    // Confirm all versions were generated
    assert.match(contents, /index.js/);
    // Confirm default version is exported
    assert.match(contents, /..\/..\/protos\/protos.js/);
  });
});
