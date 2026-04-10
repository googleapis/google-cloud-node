// Copyright 2019 Google LLC
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
import {describe, it, afterEach} from 'mocha';
import * as fs from 'fs';
import * as mv from 'mv';
import {ncp} from 'ncp';
import * as os from 'os';
import * as path from 'path';
import {promisify} from 'util';
import {spawn} from 'child_process';

import {pkg} from '../src/shared.cjs';

const mvp = promisify(mv) as {} as (...args: string[]) => Promise<void>;
const ncpp = promisify(ncp);
const keep = !!process.env.GALN_KEEP_TEMPDIRS;

let stagingDir: string;

/**
 * 2 minutes
 */
const BUILD_TEST_TIMEOUT_MS = 2 * 60_000;

/**
 * Spawns and runs a command asynchronously.
 *
 * @param params params to pass to {@link spawn}
 */
async function run(...params: Parameters<typeof spawn>) {
  const command = spawn(...params);

  function stdout(str: string) {
    const prefix = '\n>>> STDOUT: ';
    console.log(prefix + str.replace(/\n/g, prefix));
  }

  function stderr(str: string) {
    const prefix = '\n>>> STDERR: ';
    console.error(prefix + str.replace(/\n/g, prefix));
  }

  await new Promise<void>((resolve, reject) => {
    // Unlike `exec`/`execFile`, this keeps the order of STDOUT/STDERR in case they were interweaved;
    // making it easier to debug and follow along.
    command.stdout?.setEncoding('utf8');
    command.stderr?.setEncoding('utf8');

    command.stdout?.on('data', stdout);
    command.stderr?.on('data', stderr);

    command.on('close', (code, signal) => {
      return code === 0 ? resolve() : reject({code, signal});
    });
    command.on('error', reject);
  });
}

async function packAndInstall() {
  stagingDir = await fs.promises.mkdtemp(
    path.join(os.tmpdir(), 'google-auth-library-nodejs-pack-'),
  );

  await run('npm', ['pack'], {});
  const tarball = `${pkg.name}-${pkg.version}.tgz`;
  // stagingPath can be on another filesystem so fs.rename() will fail
  // with EXDEV, hence we use `mv` module here.
  await mvp(tarball, `${stagingDir}/google-auth-library.tgz`);
  await ncpp('system-test/fixtures/kitchen', `${stagingDir}/`);
  await run('npm', ['install'], {cwd: `${stagingDir}/`});
}

describe('pack and install', () => {
  /**
   * Create a staging directory with temp fixtures used to test on a fresh
   * application.
   */
  it('should be able to use the d.ts', async function () {
    // npm, once in a blue moon, fails during pack process. If this happens,
    // we should be safe to retry.
    this.retries(3);
    this.timeout(BUILD_TEST_TIMEOUT_MS);

    await packAndInstall();
  });

  it.skip('should be able to webpack the library', async function () {
    this.retries(3);
    this.timeout(BUILD_TEST_TIMEOUT_MS);

    await packAndInstall();
    // we expect npm install is executed in the before hook
    await run('npx', ['webpack'], {cwd: `${stagingDir}/`});
    const bundle = path.join(stagingDir, 'dist', 'bundle.min.js');
    // ensure it is a non-empty bundle
    assert(fs.statSync(bundle).size, 'Size should not be empty');
  });

  /**
   * CLEAN UP - remove the staging directory when done.
   */
  afterEach('cleanup staging', async () => {
    if (!keep) {
      await fs.promises.rm(stagingDir, {
        force: true,
        recursive: true,
      });
    }
  });
});
