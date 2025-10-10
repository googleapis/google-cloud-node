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
import {generateCombinedLibraries} from '../src/commands/generate-combined-library';
import {describe, it} from 'mocha';
import * as sinon from 'sinon';
import * as combineLibraries from '../src/combine-libraries';
import * as generateIndexTs from '../src/generate-index';
import path from 'path';
import {TEST_FIXTURES_PATH} from './combine-libraries.test';
import {LibraryConfig} from '../src/library';

describe('tests running build trigger', () => {
  let combineLibrariesStub: sinon.SinonStub;
  let generateIndexTsStub: sinon.SinonStub;
  beforeEach(() => {
    combineLibrariesStub = sinon.stub(combineLibraries, 'combineLibraries');
    generateIndexTsStub = sinon.stub(generateIndexTs, 'generateIndexTs');
  });

  afterEach(() => {
    combineLibrariesStub.restore();
    generateIndexTsStub.restore();
  });

  it('should generate a full library with only a single library argument', async () => {
    await generateCombinedLibraries.handler({
      'source-path': path.join(
        TEST_FIXTURES_PATH,
        'google-cloud-speech-nodejs',
      ),
      sourcePath: path.join(TEST_FIXTURES_PATH, 'google-cloud-speech-nodejs'),
      _: [],
      $0: 'foo',
    });
    const expectedLibrary = new LibraryConfig({
      sourcePath: path.resolve(
        TEST_FIXTURES_PATH,
        'google-cloud-speech-nodejs',
      ),
      destinationPath: path.resolve(
        TEST_FIXTURES_PATH,
        'google-cloud-speech-nodejs',
      ),
      defaultVersion: 'v2',
      isEsm: false,
    });
    await expectedLibrary.initialize();
    assert.ok(combineLibrariesStub.calledOnceWithExactly(expectedLibrary));
    assert.ok(
      generateIndexTsStub.calledOnceWithExactly(
        path.join(TEST_FIXTURES_PATH, 'google-cloud-speech-nodejs'),
        ['v1', 'v1p1beta1', 'v2'],
        {version: 'v2', clients: ['SpeechClient']},
        false,
        'src',
      ),
    );
  });

  it('should generate a full library at a different destination path if provided', async () => {
    await generateCombinedLibraries.handler({
      'source-path': path.join(
        TEST_FIXTURES_PATH,
        'google-cloud-speech-nodejs',
      ),
      sourcePath: path.join(TEST_FIXTURES_PATH, 'google-cloud-speech-nodejs'),
      'destination-path': 'different-path',
      destinationPath: 'different-path',
      _: [],
      $0: 'foo',
    });
    const expectedLibrary = new LibraryConfig({
      sourcePath: path.resolve(
        TEST_FIXTURES_PATH,
        'google-cloud-speech-nodejs',
      ),
      destinationPath: 'different-path',
      defaultVersion: 'v2',
      isEsm: false,
    });
    await expectedLibrary.initialize();
    assert.ok(combineLibrariesStub.calledOnceWithExactly(expectedLibrary));
    assert.ok(
      generateIndexTsStub.calledOnceWithExactly(
        'different-path',
        ['v1', 'v1p1beta1', 'v2'],
        {version: 'v2', clients: ['SpeechClient']},
        false,
        'src',
      ),
    );
  });

  it('it should generate a full library with a default version', async () => {
    await generateCombinedLibraries.handler({
      'source-path': path.join(
        TEST_FIXTURES_PATH,
        'google-cloud-speech-nodejs',
      ),
      sourcePath: path.join(TEST_FIXTURES_PATH, 'google-cloud-speech-nodejs'),
      'default-version': 'v1',
      defaultVersion: 'v1',
      _: [],
      $0: 'foo',
    });
    const expectedLibrary = new LibraryConfig({
      sourcePath: path.resolve(
        TEST_FIXTURES_PATH,
        'google-cloud-speech-nodejs',
      ),
      destinationPath: path.resolve(
        TEST_FIXTURES_PATH,
        'google-cloud-speech-nodejs',
      ),
      defaultVersion: 'v1',
      isEsm: false,
    });
    await expectedLibrary.initialize();
    assert.ok(combineLibrariesStub.calledOnceWithExactly(expectedLibrary));
    assert.ok(
      generateIndexTsStub.calledOnceWithExactly(
        path.join(TEST_FIXTURES_PATH, 'google-cloud-speech-nodejs'),
        ['v1', 'v1p1beta1', 'v2'],
        {version: 'v1', clients: ['AdaptationClient', 'SpeechClient']},
        false,
        'src',
      ),
    );
  });

  it('it should not bubble up an error if the library is in an expected format', async () => {
    // Stub the function to reject with the specific error message.
    combineLibrariesStub.rejects(new Error('Unexpected library format'));

    // We expect the handler to NOT reject, as the error is handled internally.
    await assert.doesNotReject(async () =>
      generateCombinedLibraries.handler({
        'source-path': path.join(
          TEST_FIXTURES_PATH,
          'google-cloud-speech-nodejs',
        ),
        sourcePath: path.join(TEST_FIXTURES_PATH, 'google-cloud-speech-nodejs'),
        _: [],
        $0: 'foo',
      }),
    );
    const expectedLibrary = new LibraryConfig({
      sourcePath: path.resolve(
        TEST_FIXTURES_PATH,
        'google-cloud-speech-nodejs',
      ),
      destinationPath: path.resolve(
        TEST_FIXTURES_PATH,
        'google-cloud-speech-nodejs',
      ),
      defaultVersion: 'v2',
      isEsm: false,
    });
    await expectedLibrary.initialize();
    // Assertions to prove the code continued executing after the handled error.
    assert.ok(combineLibrariesStub.calledOnceWithExactly(expectedLibrary));
    assert.ok(generateIndexTsStub.calledOnce);
  });

  // Add a new test for when a different error occurs.
  it('it should bubble up an error if a different error occurs', async () => {
    // Stub the function to reject with a DIFFERENT error message.
    combineLibrariesStub.rejects(new Error('A different kind of error'));

    // We expect the handler to REJECT, as the if condition in the catch block will pass.
    await assert.rejects(
      async () =>
        generateCombinedLibraries.handler({
          'source-path': path.join(
            TEST_FIXTURES_PATH,
            'google-cloud-speech-nodejs',
          ),
          sourcePath: path.join(
            TEST_FIXTURES_PATH,
            'google-cloud-speech-nodejs',
          ),
          _: [],
          $0: 'foo',
        }),
      /A different kind of error/, // Use a regex to match the error message.
    );
    const expectedLibrary = new LibraryConfig({
      sourcePath: path.resolve(
        TEST_FIXTURES_PATH,
        'google-cloud-speech-nodejs',
      ),
      destinationPath: path.resolve(
        TEST_FIXTURES_PATH,
        'google-cloud-speech-nodejs',
      ),
      defaultVersion: 'v2',
      isEsm: false,
    });
    await expectedLibrary.initialize();
    // Assertions to prove the code stopped executing.
    assert.ok(combineLibrariesStub.calledOnceWithExactly(expectedLibrary));
    assert.ok(generateIndexTsStub.notCalled);
  });

  it('it should generate a full library with isEsm', async () => {
    await generateCombinedLibraries.handler({
      'source-path': path.join(TEST_FIXTURES_PATH, 'google-cloud-tasks-nodejs'),
      sourcePath: path.join(TEST_FIXTURES_PATH, 'google-cloud-tasks-nodejs'),
      'is-esm': true,
      isEsm: true,
      _: [],
      $0: 'foo',
    });
    const expectedLibrary = new LibraryConfig({
      sourcePath: path.resolve(TEST_FIXTURES_PATH, 'google-cloud-tasks-nodejs'),
      destinationPath: path.resolve(
        TEST_FIXTURES_PATH,
        'google-cloud-tasks-nodejs',
      ),
      defaultVersion: 'v2',
      isEsm: true,
    });
    await expectedLibrary.initialize();
    assert.ok(combineLibrariesStub.calledOnceWithExactly(expectedLibrary));
    assert.ok(
      generateIndexTsStub.calledOnceWithExactly(
        path.join(TEST_FIXTURES_PATH, 'google-cloud-tasks-nodejs'),
        ['v2', 'v2beta2'],
        {version: 'v2', clients: ['CloudTasksClient']},
        true,
        'esm/src',
      ),
    );
  });
});
