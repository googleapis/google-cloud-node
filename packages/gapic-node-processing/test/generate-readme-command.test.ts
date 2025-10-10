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
import {generateReadme} from '../src/commands/generate-readme';
import {describe, it} from 'mocha';
import * as sinon from 'sinon';
import * as generateReadMe from '../src/generate-readme';
import path from 'path';

describe('tests running generate-readme command', () => {
  let initialGenerateReadMeStub: sinon.SinonStub;
  let readAndWriteToReadmeStub: sinon.SinonStub;

  beforeEach(() => {
    initialGenerateReadMeStub = sinon.stub(
      generateReadMe,
      'initialGenerateReadMe',
    );
    readAndWriteToReadmeStub = sinon.stub(
      generateReadMe,
      'readAndWriteToReadme',
    );
  });

  afterEach(() => {
    initialGenerateReadMeStub.restore();
    readAndWriteToReadmeStub.restore();
  });

  it('it should run initial generation if initial-generation flag is true', async () => {
    await generateReadme.handler({
      'source-path': 'path',
      sourcePath: 'path',
      'initial-generation': true,
      initialGeneration: true,
      'replacement-string-samples': '//samples',
      replacementStringSamples: '//samples',
      'replacement-string-release-level': '//releaseLevel',
      replacementStringReleaseLevel: '//releaseLevel',
      'release-level': 'stable',
      releaseLevel: 'stable',
      'destination-path': 'destination-path',
      destinationPath: 'destination-path',
      _: [],
      $0: 'foo',
    });

    assert.ok(
      initialGenerateReadMeStub.calledOnceWithExactly({
        currentLibrary: 'path',
        stringToReplaceForSampleTable: '//samples',
        stringToReplaceForReleaseLevel: '//releaseLevel',
        releaseLevel: 'stable',
        writeLibrary: 'destination-path',
      }),
    );
    assert.ok(readAndWriteToReadmeStub.notCalled);
  });

  it('it should run post-initial generation if initial-generation flag is not provided', async () => {
    await generateReadme.handler({
      'source-path': 'path',
      sourcePath: 'path',
      'string-to-replace': 'old',
      stringToReplace: 'old',
      'replacement-string': 'new',
      replacementString: 'new',
      _: [],
      $0: 'foo',
    });

    assert.ok(
      readAndWriteToReadmeStub.calledOnceWithExactly(
        'path',
        'old',
        'new',
        'path',
      ),
    );
    assert.ok(initialGenerateReadMeStub.notCalled);
  });

  it('it should use default values for replacement strings if they are not provided during initial generation', async () => {
    const consoleStub = sinon.stub(console, 'log');

    await generateReadme.handler({
      'source-path': 'path',
      sourcePath: 'path',
      'initial-generation': true,
      initialGeneration: true,
      _: [],
      $0: 'foo',
    });

    // Assert that the console log message is displayed for the missing replacement strings
    assert.ok(
      consoleStub.calledWith(
        'Initial readme generation was selected, but no string to replace the samples table was given. ' +
          'Will use \'[//]: # "samples"\'',
      ),
    );
    assert.ok(
      consoleStub.calledWith(
        'Initial readme generation was selected, but no string to replace the release level was given. ' +
          'Will use \'[//]: # "releaseLevel"\'',
      ),
    );

    // Assert that initialGenerateReadMeStub was called once with the default values
    assert.ok(
      initialGenerateReadMeStub.calledOnceWithExactly({
        currentLibrary: 'path',
        stringToReplaceForSampleTable: '[//]: # "samples"',
        stringToReplaceForReleaseLevel: '[//]: # "releaseLevel"',
        releaseLevel: undefined,
        writeLibrary: 'path',
      }),
    );
    assert.ok(readAndWriteToReadmeStub.notCalled);

    consoleStub.restore();
  });

  it('it should bubble up an error if post-initial generation is selected without replacement strings', async () => {
    await assert.rejects(
      async () =>
        generateReadme.handler({
          'source-path': 'path',
          sourcePath: 'path',
          _: [],
          $0: 'foo',
        }),
      {
        message:
          'Post-initial generate readme was selected, but no string to replace/replacement was given',
      },
    );
    assert.ok(initialGenerateReadMeStub.notCalled);
    assert.ok(readAndWriteToReadmeStub.notCalled);
  });

  it('it should set writeDestination to sourcePath if destinationPath is not provided', async () => {
    await generateReadme.handler({
      'source-path': 'path',
      sourcePath: 'path',
      'string-to-replace': 'old',
      stringToReplace: 'old',
      'replacement-string': 'new',
      replacementString: 'new',
      _: [],
      $0: 'foo',
    });

    assert.ok(
      readAndWriteToReadmeStub.calledOnceWithExactly(
        'path',
        'old',
        'new',
        'path', // Asserting that the writeDestination is the same as the sourcePath
      ),
    );
  });

  it('it should continue generation and log a message if no release level is given during initial generation', async () => {
    const consoleStub = sinon.stub(console, 'log');

    await generateReadme.handler({
      'source-path': 'path',
      sourcePath: 'path',
      'initial-generation': true,
      initialGeneration: true,
      'replacement-string-samples': 'samples',
      replacementStringSamples: 'samples',
      'replacement-string-release-level': 'beta',
      replacementStringReleaseLevel: 'beta',
      _: [],
      $0: 'foo',
    });

    assert.ok(
      consoleStub.calledWith(
        'No release level was selected for initial generation; will generate with preview',
      ),
    );

    // Make sure the main function was still called after the log
    assert.ok(initialGenerateReadMeStub.calledOnce);

    consoleStub.restore(); // Clean up the stub
  });
});
