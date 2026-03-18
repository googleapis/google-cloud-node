/**
 * Copyright 2018 Google LLC
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

import {ncp} from 'ncp';
import * as tmp from 'tmp';
import {promisify} from 'util';
import {execSync} from 'child_process';

import {describe, it, after} from 'mocha';

describe('installation', () => {
  const ncpp = promisify(ncp);
  const keep = !!process.env.GCPM_KEEP_TEMPDIRS;
  const stagingDir = tmp.dirSync({keep, unsafeCleanup: true});
  const stagingPath = stagingDir.name;
  const pkg = require('../../package.json'); // eslint-disable-line

  /**
   * Create a staging directory with temp fixtures used to test on a fresh
   * application.
   */
  it('should be able to use the d.ts', async () => {
    console.log(`${__filename} staging area: ${stagingPath}`);
    execSync('npm pack', {stdio: 'inherit'});
    const tarball = `${pkg.name}-${pkg.version}.tgz`;
    await ncpp(tarball, `${stagingPath}/${pkg.name}.tgz`);
    await ncpp('system-test/fixtures/kitchen', `${stagingPath}/`);
    execSync('npm install', {cwd: `${stagingPath}/`, stdio: 'inherit'});
  });

  /**
   * CLEAN UP - remove the staging directory when done.
   */
  after('cleanup staging', () => {
    if (!keep) {
      stagingDir.removeCallback();
    }
  });
});
