/**
 * Copyright 2018 Google LLC. All Rights Reserved.
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
import * as path from 'path';

import {globP, mkdirP, ncpP, rimrafP, spawnP, tmpDirP, writeFileP} from './utils';

const INDEX_TS = 'index.ts';
const INDEX_JS = 'index.js';

const TS_CODE_ARRAY: CodeSample[] = [
  {
    code: `import * as loggingBunyan from '@google-cloud/logging-bunyan';
new loggingBunyan.LoggingBunyan();`,
    description: 'imports the module using * syntax'
  },
  {
    code: `import {LoggingBunyan} from '@google-cloud/logging-bunyan';
new LoggingBunyan();`,
    description: 'imports the module with {} syntax'
  },
  {
    code: `import {LoggingBunyan} from '@google-cloud/logging-bunyan';
new LoggingBunyan({
  serviceContext: {
    service: 'some service'
  }
});`,
    description: 'imports the module and starts with a partial `serviceContext`'
  },
  {
    code: `import {LoggingBunyan} from '@google-cloud/logging-bunyan';
new LoggingBunyan({
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
        `const LoggingBunyan = require('@google-cloud/logging-bunyan').LoggingBunyan;
new LoggingBunyan();`,
    description: 'requires the module using Node 4+ syntax'
  },
  {
    code:
        `const LoggingBunyan = require('@google-cloud/logging-bunyan').LoggingBunyan;
new LoggingBunyan({
  serviceContext: {
    service: 'some service'
  }
});`,
    description:
        'requires the module and starts with a partial `serviceContext`'
  },
  {
    code:
        `const LoggingBunyan = require('@google-cloud/logging-bunyan').LoggingBunyan;
new LoggingBunyan({
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

const DEBUG = false;
function log(txt: string): void {
  if (DEBUG) {
    console.log(txt);
  }
}

const stdio = DEBUG ? 'inherit' : 'ignore';

interface CodeSample {
  code: string;
  description: string;
}

describe('Installation', () => {
  let installDir: string|undefined;
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
    // This script assumes that you don't already have a TGZ file
    // in your current working directory.
    installDir = await tmpDirP();
    log(`Using installation directory: ${installDir}`);
    await spawnP('npm', ['install'], {stdio}, log);
    await spawnP('npm', ['run', 'compile'], {stdio}, log);
    await spawnP('npm', ['pack'], {stdio}, log);
    const tgz = await globP(`${process.cwd()}/*.tgz`);
    if (tgz.length !== 1) {
      throw new Error(
          `Expected 1 tgz file in current directory, but found ${tgz.length}`);
    }
    await spawnP('npm', ['init', '-y'], {cwd: installDir, stdio}, log);
    await spawnP(
        'npm', ['install', 'typescript', '@types/node', tgz[0]],
        {cwd: installDir, stdio}, log);
  });

  afterEach(async function() {
    this.timeout(TIMEOUT_MS);
    if (installDir) {
      await rimrafP(installDir);
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
           await spawnP(
               'npm', ['install', '--save', 'winston'],
               {cwd: installDir, stdio}, log);
           await spawnP(
               'npm', ['install', '--save-dev', '@types/winston'],
               {cwd: installDir, stdio}, log);
           await writeFileP(path.join(srcDir, INDEX_TS), sample.code, 'utf-8');
           await spawnP(
               'npm', ['install', '--save-dev', 'gts', 'typescript@2.x'],
               {cwd: installDir, stdio}, log);
           await spawnP(
               'gts', ['init', '--yes'], {cwd: installDir, stdio}, log);
           await spawnP(
               'npm', ['run', 'compile'], {cwd: installDir, stdio}, log);
           const buildDir = path.join(installDir!, 'build');
           await spawnP(
               'node', [path.join(buildDir, 'src', INDEX_JS)],
               {cwd: installDir, stdio}, log);
         });
    });
  });

  describe('When used with Javascript code', () => {
    JS_CODE_ARRAY.forEach((sample) => {
      it(`should install and work with code that ${sample.description}`,
         async function() {
           this.timeout(TIMEOUT_MS);
           assert(installDir);
           await spawnP(
               'npm', ['install', '--save', 'winston'],
               {cwd: installDir, stdio}, log);
           await spawnP(
               'npm', ['install', '--save-dev', '@types/winston'],
               {cwd: installDir, stdio}, log);
           await writeFileP(
               path.join(installDir!, INDEX_JS), sample.code, 'utf-8');
           await spawnP('node', [INDEX_JS], {cwd: installDir, stdio}, log);
         });
    });
  });
});
