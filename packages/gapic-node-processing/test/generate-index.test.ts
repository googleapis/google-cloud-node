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
import {
  extractClients,
  extractVersions,
  generateIndexTs,
  getHighestVersionWithPrecedence,
} from '../src/generate-index';
import {
  LIB_POST_COMBINATION,
  LIB_PRE_COMBINATION,
} from './combine-libraries.test';
import {combineLibraries} from '../src/combine-libraries';
const TEST_FIXTURES_PATH = path.resolve('test/fixtures/combined-library');
describe('generate index.ts', () => {
  beforeEach(async () => {
    await combineLibraries(
      path.resolve(TEST_FIXTURES_PATH, LIB_PRE_COMBINATION),
      path.resolve(TEST_FIXTURES_PATH, LIB_POST_COMBINATION),
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
  it('should extract versions', async () => {
    const versions = await extractVersions(
      path.join(TEST_FIXTURES_PATH, LIB_POST_COMBINATION),
    );
    assert.ok(versions.includes('v1'));
    assert.ok(versions.includes('v1p1beta1'));
    assert.ok(versions.includes('v2'));
  });

  it('should throw an error if not in an expected format', async () => {
    // In case the library hasn't been formed yet
    await assert.rejects(
      () => extractVersions(path.join(TEST_FIXTURES_PATH, LIB_PRE_COMBINATION)),
      /Unexpected library format/,
    );
  });

  it('should extract all clients and tie them to each version', async () => {
    const versionsAndClients = await extractClients(
      path.join(TEST_FIXTURES_PATH, LIB_POST_COMBINATION),
    );
    const expectedVersionsAndClients = [
      {version: 'v1', clients: ['AdaptationClient', 'SpeechClient']},
      {
        version: 'v1p1beta1',
        clients: ['AdaptationClient', 'SpeechClient'],
      },
      {version: 'v2', clients: ['SpeechClient']},
    ];
    assert.deepStrictEqual(versionsAndClients, expectedVersionsAndClients);
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
      'v1',
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
      await fs.rm(
        path.join(TEST_FIXTURES_PATH, LIB_POST_COMBINATION, 'src', 'index.ts'),
      );
    } catch (err) {
      console.log(`Could not delete ${LIB_POST_COMBINATION}/src/index.ts file`);
    }
    await generateIndexTs(
      path.resolve(TEST_FIXTURES_PATH, LIB_POST_COMBINATION),
      'v1',
      true,
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
    assert.match(contents, /index.js/);
    // Confirm default version is exported
    assert.match(contents, /..\/..\/protos\/protos.js/);
  });

  it('should guess the default version if not provided', async () => {
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
    // Note that v2 doesn't have Adaptation client, so it shouldn't be exported
    // if v2 is assumed to be the default
    assert.match(contents, /export default {v1, v1p1beta1, v2, SpeechClient};/);

    // Confirm default version is exported
    assert.match(contents, /const SpeechClient = v2.SpeechClient;/);

    // Confirm another version is NOT exported
    assert.doesNotMatch(
      contents,
      /const AdaptationClient = v1.AdaptationClient;/,
    );
  });

  it('should get highest version with precedence', async () => {
    const highestVersion1 = getHighestVersionWithPrecedence([
      'v1',
      'v1beta1',
      'v2',
      'v2beta1',
    ]);
    const highestVersion2 = getHighestVersionWithPrecedence([
      'v1',
      'v1beta1',
      'v2beta1',
    ]);
    const highestVersion3 = getHighestVersionWithPrecedence(['v1alpha']);
    const highestVersion4 = getHighestVersionWithPrecedence([
      'v1alpha',
      'v1beta1',
      'v2beta1',
    ]);
    const highestVersion5 = getHighestVersionWithPrecedence([
      'v1alpha',
      'v2alpha',
    ]);

    assert.deepStrictEqual(highestVersion1, 'v2');
    assert.deepStrictEqual(highestVersion2, 'v1');
    assert.deepStrictEqual(highestVersion3, 'v1alpha');
    assert.deepStrictEqual(highestVersion4, 'v2beta1');
    assert.deepStrictEqual(highestVersion5, 'v2alpha');
  });
});
