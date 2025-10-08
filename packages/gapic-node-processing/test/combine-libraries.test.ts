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

import {
  generateFinalDirectoryPath,
  combineLibraries,
  writeFilesToGivenLocation,
} from '../src/combine-libraries';
import {describe, it} from 'mocha';
import * as path from 'path';
import * as fs from 'fs/promises';
import * as assert from 'assert';
// import { generateReadMe } from '../src/generate-readme';
export const TEST_FIXTURES_PATH = path.resolve(
  'test/fixtures/combined-library',
);

export const LIB_PRE_COMBINATION_ESM = 'google-cloud-tasks-nodejs';
export const LIB_PRE_COMBINATION = 'google-cloud-speech-nodejs';
export const LIB_POST_COMBINATION_ESM = 'google-cloud-tasks';
export const LIB_POST_COMBINATION = 'google-cloud-speech';

describe('combine libraries', () => {
  it('should throw an error if the library is not in a "pre" combo state', async () => {
    await combineLibraries(
      path.resolve(TEST_FIXTURES_PATH, LIB_PRE_COMBINATION),
      path.resolve(TEST_FIXTURES_PATH, LIB_POST_COMBINATION),
    );
    await assert.rejects(
      () =>
        generateFinalDirectoryPath(
          path.join(TEST_FIXTURES_PATH, LIB_POST_COMBINATION),
        ),
      /Unexpected library format/,
    );
    try {
      await fs.rm(path.join(TEST_FIXTURES_PATH, LIB_POST_COMBINATION), {
        recursive: true,
      });
    } catch (err) {
      console.log(`Could not delete ${LIB_POST_COMBINATION} directory`);
    }
  });

  it('should generate unique final directory paths', async () => {
    const libraryPaths = await generateFinalDirectoryPath(
      path.join(TEST_FIXTURES_PATH, LIB_PRE_COMBINATION),
    );
    // This should be the amount of unique file paths in the tree directory
    assert.deepStrictEqual(libraryPaths.length, 103);

    // Confirm there are only unique items in the array
    assert.deepStrictEqual(
      new Set(libraryPaths.map(x => x.filePath)).size,
      libraryPaths.length,
    );
  });

  it('should create a combined library', async () => {
    // Even though the library combination should delete the current library,
    // this allows us to ensure that our output is expected.
    try {
      await fs.rm(path.join(TEST_FIXTURES_PATH, LIB_POST_COMBINATION), {
        recursive: true,
      });
    } catch (err) {
      console.log(`Could not delete ${LIB_POST_COMBINATION} directory`);
    }
    await combineLibraries(
      path.resolve(TEST_FIXTURES_PATH, LIB_PRE_COMBINATION),
      path.resolve(TEST_FIXTURES_PATH, LIB_POST_COMBINATION),
    );

    assert.ok(
      await fs.stat(path.resolve(TEST_FIXTURES_PATH, LIB_POST_COMBINATION)),
    );
    // We won't assert very specific library structure, but we will assert
    // the top-level folders
    assert.ok(
      await fs.stat(
        path.resolve(TEST_FIXTURES_PATH, LIB_POST_COMBINATION, 'protos'),
      ),
    );
    assert.ok(
      await fs.stat(
        path.resolve(TEST_FIXTURES_PATH, LIB_POST_COMBINATION, 'samples'),
      ),
    );
    assert.ok(
      await fs.stat(
        path.resolve(TEST_FIXTURES_PATH, LIB_POST_COMBINATION, 'src'),
      ),
    );
    assert.ok(
      await fs.stat(
        path.resolve(TEST_FIXTURES_PATH, LIB_POST_COMBINATION, 'system-test'),
      ),
    );
    assert.ok(
      await fs.stat(
        path.resolve(TEST_FIXTURES_PATH, LIB_POST_COMBINATION, 'test'),
      ),
    );
    try {
      await fs.rm(path.join(TEST_FIXTURES_PATH, LIB_POST_COMBINATION), {
        recursive: true,
      });
    } catch (err) {
      console.log(`Could not delete ${LIB_POST_COMBINATION} directory`);
    }
  });

  it('should create a combined ESM library', async () => {
    // Even though the library combination should delete the current library,
    // this allows us to ensure that our output is expected.
    try {
      await fs.rm(path.join(TEST_FIXTURES_PATH, LIB_POST_COMBINATION_ESM), {
        recursive: true,
      });
    } catch (err) {
      console.log(`Could not delete ${LIB_POST_COMBINATION_ESM} directory`);
    }
    await combineLibraries(
      path.resolve(TEST_FIXTURES_PATH, LIB_PRE_COMBINATION_ESM),
      path.resolve(TEST_FIXTURES_PATH, LIB_POST_COMBINATION_ESM),
    );

    assert.ok(
      await fs.stat(path.resolve(TEST_FIXTURES_PATH, LIB_POST_COMBINATION_ESM)),
    );
    // We won't assert very specific library structure, but we will assert
    // the top-level folders
    assert.ok(
      await fs.stat(
        path.resolve(TEST_FIXTURES_PATH, LIB_POST_COMBINATION_ESM, 'protos'),
      ),
    );
    assert.ok(
      await fs.stat(
        path.resolve(TEST_FIXTURES_PATH, LIB_POST_COMBINATION_ESM, 'samples'),
      ),
    );
    assert.ok(
      await fs.stat(
        path.resolve(
          TEST_FIXTURES_PATH,
          LIB_POST_COMBINATION_ESM,
          'esm',
          'src',
        ),
      ),
    );
    assert.ok(
      await fs.stat(
        path.resolve(
          TEST_FIXTURES_PATH,
          LIB_POST_COMBINATION_ESM,
          'esm',
          'system-test',
        ),
      ),
    );
    assert.ok(
      await fs.stat(
        path.resolve(
          TEST_FIXTURES_PATH,
          LIB_POST_COMBINATION_ESM,
          'esm',
          'test',
        ),
      ),
    );
    try {
      await fs.rm(path.join(TEST_FIXTURES_PATH, LIB_POST_COMBINATION_ESM), {
        recursive: true,
      });
    } catch (err) {
      console.log(`Could not delete ${LIB_POST_COMBINATION_ESM} directory`);
    }
  });

  it('should create a directory and write files', async () => {
    const filePathAndContent = [
      {filePath: 'testing.txt', content: 'hello!'},
      {filePath: 'src/v1/index.txt', content: 'goodbye!'},
      {filePath: 'src/index.txt', content: 'another content!'},
    ];
    await writeFilesToGivenLocation(
      path.resolve(TEST_FIXTURES_PATH, 'testDir'),
      filePathAndContent,
    );
    assert.ok(await fs.stat(path.resolve(TEST_FIXTURES_PATH, 'testDir')));

    assert.deepEqual(
      await fs.readFile(
        path.resolve(TEST_FIXTURES_PATH, 'testDir', 'testing.txt'),
        'utf8',
      ),
      'hello!',
    );
    assert.deepEqual(
      await fs.readFile(
        path.resolve(TEST_FIXTURES_PATH, 'testDir', 'src/v1/index.txt'),
        'utf8',
      ),
      'goodbye!',
    );
    assert.deepEqual(
      await fs.readFile(
        path.resolve(TEST_FIXTURES_PATH, 'testDir', 'src/index.txt'),
        'utf8',
      ),
      'another content!',
    );

    // Delete the testing library
    try {
      await fs.rm(path.join(TEST_FIXTURES_PATH, 'testDir'), {recursive: true});
    } catch (err) {
      console.log(
        `Could not delete ${path.join(TEST_FIXTURES_PATH, 'testDir')} directory`,
      );
    }
  });
});
