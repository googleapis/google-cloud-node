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
import {describe, it} from 'mocha';
import snapshot from 'snap-shot-it';
import * as samples from '../src/samples.js';
import * as main from '../src/app.js';
import {readFile, rm, stat} from 'node:fs/promises';
import * as url from 'node:url';
import * as path from 'node:path';
import * as sinon from 'sinon';

// ESM removes __dirname.
const dirName = url.fileURLToPath(new URL('.', import.meta.url));

// We're in 'build' here, need to back out.
const fixturePath = path.join(dirName, '..', '..', 'test', 'fixtures');

async function loadFixture(name: string): Promise<string> {
  const fn = path.join(fixturePath, name);
  return (await readFile(fn)).toString();
}

describe('sample transformation', () => {
  it('does not change JS', async () => {
    const fixture = await loadFixture('createTopic.js');

    const sIn = samples.fromArray([
      {
        filename: 'test.js',
        contents: fixture,
      },
    ]);
    const sOut = await samples.toArray(samples.transformSamples(sIn));
    snapshot(sOut);
  });

  it('correctly transforms TS', async () => {
    const fixture = await loadFixture('listSchemas.ts');

    const sIn = samples.fromArray([
      {
        filename: 'listSchemas.ts',
        contents: fixture,
      },
    ]);

    const sOut = await samples.toArray(samples.transformSamples(sIn));

    snapshot(sOut[0].contents);
  });
});

describe('command line option', () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  it('"no-art" removes emojis and colours', async () => {
    const cmdline = ['node', 'index.ts', '--no-art', '-t', 'foo.ts'];
    sandbox.stub(console, 'error').callsFake((...params) => {
      if (typeof params[0] === 'string') {
        assert.strictEqual(params[0].includes('[error]'), true);
      }
    });

    const retcode = await main.main(cmdline);
    assert.strictEqual(retcode, 1);
  });

  it('"targets" works with a single sample file', async () => {
    try {
      const cmdline = [
        'node',
        'index.ts',
        '--targets',
        path.join(fixturePath, 'listSchemas.ts'),
      ];
      const retcode = await main.main(cmdline);
      assert.strictEqual(retcode, 0);
      const contents = await loadFixture('listSchemas.js');
      snapshot(contents);
    } finally {
      rm(path.join(fixturePath, 'listSchemas.js')).catch(() => {});
    }
  });

  it('"targets" works with multiple sample files', async () => {
    try {
      const cmdline = [
        'node',
        'index.ts',
        '--targets',
        path.join(fixturePath, 'deleteSchema.ts'),
        path.join(fixturePath, 'getSchema.ts'),
      ];
      const retcode = await main.main(cmdline);
      assert.strictEqual(retcode, 0);
      const contents = [
        await loadFixture('deleteSchema.js'),
        await loadFixture('getSchema.js'),
      ];
      snapshot(contents);
    } finally {
      rm(path.join(fixturePath, 'deleteSchema.js')).catch(() => {});
      rm(path.join(fixturePath, 'getSchema.js')).catch(() => {});
    }
  });

  it('"recursive" causes recursion and only matches samples', async () => {
    const targets = [
      path.join('folder', 'listenForAvroRecords.js'),
      path.join('folder', 'publishAvroRecords.js'),
    ];
    const antiTarget = path.join(fixturePath, 'folder', 'validateSchema.js');
    try {
      const cmdline = [
        'node',
        'index.ts',
        '--recursive',
        '--targets',
        path.join(fixturePath, 'folder'),
      ];
      const retcode = await main.main(cmdline);
      assert.strictEqual(retcode, 0);

      const contents = await Promise.all(targets.map(loadFixture));
      snapshot(contents);

      await assert.rejects(stat(antiTarget));
    } finally {
      targets.forEach(t => {
        rm(path.join(fixturePath, t)).catch(() => {});
      });
    }
  });
});

/*

More test ideas:

- TS samples should come out with 'use require' and a "generated" comment
  This is not in the generator yet.

- Separate tests for debuglog?

*/
