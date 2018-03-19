/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as assert from 'assert';
import {SpawnOptions} from 'child_process';
import * as path from 'path';

import {globP, mkdirP, ncpP, rimrafP, spawnP, tmpDirP, writeFileP} from './utils';

const INDEX_TS = 'index.ts';
const INDEX_JS = 'index.js';

const TS_CODE_ARRAY: CodeSample[] = [
  {
    code: `import * as errorReporting from '@google-cloud/error-reporting';
new errorReporting.ErrorReporting();`,
    description: 'imports the module using * syntax'
  },
  {
    code: `import {ErrorReporting} from '@google-cloud/error-reporting';
new ErrorReporting();`,
    description: 'imports the module with {} syntax'
  },
  {
    code: `import {ErrorReporting} from '@google-cloud/error-reporting';
new ErrorReporting({
  serviceContext: {
    service: 'some service'
  }
});`,
    description: 'imports the module and starts with a partial `serviceContext`'
  },
  {
    code: `import {ErrorReporting} from '@google-cloud/error-reporting';
new ErrorReporting({
  projectId: 'some-project',
  serviceContext: {
    service: 'Some service',
    version: 'Some version'
  }
});`,
    description:
        'imports the module and starts with a complete `serviceContext`'
  }
];

const JS_CODE_ARRAY: CodeSample[] = [
  {
    code:
        `const ErrorReporting = require('@google-cloud/error-reporting').ErrorReporting;
new ErrorReporting();`,
    description: 'requires the module using Node 4+ syntax'
  },
  {
    code:
        `const ErrorReporting = require('@google-cloud/error-reporting').ErrorReporting;
new ErrorReporting({
  serviceContext: {
    service: 'some service'
  }
});`,
    description:
        'requires the module and starts with a partial `serviceContext`'
  },
  {
    code:
        `const ErrorReporting = require('@google-cloud/error-reporting').ErrorReporting;
new ErrorReporting({
  projectId: 'some-project',
  serviceContext: {
    service: 'Some service',
    version: 'Some version'
  }
});`,
    description:
        'requires the module and starts with a complete `serviceContext`'
  }
];

const TIMEOUT_MS = 2 * 60 * 1000;

interface CodeSample {
  code: string;
  description: string;
}

describe('Installation', () => {
  let text = '';
  let installDir: string|undefined;

  function log(txt: string): void {
    text += txt;
  }

  async function run(
      cmd: string, args: string[], options?: SpawnOptions): Promise<void> {
    await spawnP(cmd, args, options, log);
  }

  before(async () => {
    const tgz = await globP(`${process.cwd()}/*.tgz`);
    assert.deepStrictEqual(
        tgz.length, 0,
        `Expected zero tgz files in the current working directory before ` +
            `running the test but found files: ${tgz.map(file => {
              const parts = file.split(path.sep);
              return parts[parts.length - 1];
            })}`);
  });

  beforeEach(async function() {
    this.timeout(TIMEOUT_MS);
    text = '';
    // This script assumes that you don't already have a TGZ file
    // in your current working directory.
    installDir = await tmpDirP();
    log(`Using installation directory: ${installDir}`);
    await run('npm', ['install']);
    await run('npm', ['run', 'compile']);
    await run('npm', ['pack']);
    const tgz = await globP(`${process.cwd()}/*.tgz`);
    if (tgz.length !== 1) {
      throw new Error(
          `Expected 1 tgz file in current directory, but found ${tgz.length}`);
    }
    await run('npm', ['init', '-y'], {cwd: installDir});
    await run(
        'npm', ['install', 'typescript', '@types/node', tgz[0]],
        {cwd: installDir});
  });

  afterEach(async function() {
    this.timeout(TIMEOUT_MS);
    if (installDir) {
      await rimrafP(installDir);
    }
    if (this.currentTest.state === 'failed') {
      console.log(text);
    }
  });

  describe('When used with Typescript code', () => {
    TS_CODE_ARRAY.forEach((sample) => {
      it(`should install and work with code that ${sample.description}`,
         async function() {
           this.timeout(TIMEOUT_MS);
           assert(installDir);
           const srcDir = path.join(installDir!, 'src');
           await mkdirP(srcDir);
           await run(
               'npm', ['install', '--save', 'winston'], {cwd: installDir});
           await run(
               'npm', ['install', '--save-dev', '@types/winston'],
               {cwd: installDir});
           await writeFileP(path.join(srcDir, INDEX_TS), sample.code, 'utf-8');
           await run(
               'npm', ['install', '--save-dev', 'gts', 'typescript@2.x'],
               {cwd: installDir});
           await run('gts', ['init', '--yes'], {cwd: installDir});
           await run('npm', ['run', 'compile'], {cwd: installDir});
           const buildDir = path.join(installDir!, 'build');
           await run(
               'node', [path.join(buildDir, 'src', INDEX_JS)],
               {cwd: installDir});
         });
    });
  });

  describe('When used with Javascript code', () => {
    JS_CODE_ARRAY.forEach((sample) => {
      it(`should install and work with code that ${sample.description}`,
         async function() {
           this.timeout(TIMEOUT_MS);
           assert(installDir);
           await run(
               'npm', ['install', '--save', 'winston'], {cwd: installDir});
           await run(
               'npm', ['install', '--save-dev', '@types/winston'],
               {cwd: installDir});
           await writeFileP(
               path.join(installDir!, INDEX_JS), sample.code, 'utf-8');
           await run('node', [INDEX_JS], {cwd: installDir});
         });
    });
  });
});
