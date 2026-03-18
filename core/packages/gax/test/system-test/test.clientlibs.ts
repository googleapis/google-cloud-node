/**
 * Copyright 2020 Google LLC
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

import execa from 'execa';
import * as fs from 'fs';
import * as fsp from 'fs/promises';
import * as path from 'path';
import * as util from 'util';
import {describe, it, before} from 'mocha';

const mkdir = util.promisify(fs.mkdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const baseRepoUrl = 'https://github.com/googleapis/';
const monoRepoBaseRepoUrl = 'https://github.com/googleapis/google-cloud-node';
const clonedRepos: Array<string> = []; // keeps track of already cloned repos
const monoRepoDirectory = 'google-cloud-node';
const testDir = path.join(process.cwd(), '.system-test-run');
const gaxDir = path.resolve(__dirname, '..', '..', '..');

// We will pack google-gax using `npm pack`, defining some constants to make it
// easier to consume that tarball
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('../../../package.json');
const gaxTarball = path.join(gaxDir, `${pkg.name}-${pkg.version}.tgz`);
const toolsPkg = require('../../../../tools/package.json');
const toolsBasename = `${toolsPkg.name}-${toolsPkg.version}.tgz`;
const toolsTarball = path.join(gaxDir, toolsBasename);

async function latestRelease(
  cwd: string,
  inMonorepo: boolean,
): Promise<string> {
  // tags in the monorepo follow the format <libraryname>-major.minor.patch e.g. batch-0.0.1
  // or the format <libraryname>-vmajor.minor.patch e.g. batch-v0.0.1
  // tags in individual repos follow the format vmajor.minor.patch e.g. v0.0.1
  const {stdout} = inMonorepo
    ? await execa('git', ['tag', '--list', `${cwd}-*`], {
        cwd: monoRepoDirectory,
      })
    : await execa('git', ['tag', '--list'], {cwd});
  // regex escape characters in template literal need to be escaped twice
  const filterPattern = inMonorepo
    ? new RegExp(`^${cwd}-v{0,1}(\\d+)\\.(\\d)+\\.(\\d+)$`)
    : new RegExp('^v(\\d+)\\.(\\d+)\\.(\\d+)$');
  const tags = stdout
    .split('\n')
    .filter(str => str.match(filterPattern))
    .sort((tag1: string, tag2: string): number => {
      const match1 = tag1.match(filterPattern);
      const match2 = tag2.match(filterPattern);
      if (!match1 || !match2) {
        throw new Error(`Cannot compare git tags ${tag1} and ${tag2}`);
      }
      // compare major version, then minor versions, then patch versions.
      // return positive number, zero, or negative number
      for (let idx = 1; idx <= 3; ++idx) {
        if (match1[idx] !== match2[idx]) {
          return Number(match1[idx]) - Number(match2[idx]);
        }
      }
      return 0;
    });
  // the last tag in the list is the latest release
  return tags[tags.length - 1];
}

// if a package in the monorepo has a hyphen in the name, its corresponding
// directory in packages/ does not
function monoRepoPackageSubdirectory(packageName: string): string {
  return `${monoRepoDirectory}/packages/google-cloud-${packageName.replace(
    '-',
    '',
  )}`;
}
async function preparePackage(
  packageName: string,
  inMonorepo: boolean,
): Promise<void> {
  // clone googleapis/google-cloud node if monorepo, googleapis/nodejs-<package> if not
  const repoUrl = inMonorepo
    ? `${monoRepoBaseRepoUrl}.git`
    : `${baseRepoUrl}${packageName}.git`;
  // only clone a repo if we haven't done so already
  if (!clonedRepos.includes(repoUrl)) {
    try {
      await execa(
        'git',
        ['clone', repoUrl, inMonorepo ? monoRepoDirectory : packageName],
        {stdio: 'inherit'},
      );
      clonedRepos.push(repoUrl);
    } catch (error: unknown) {
      throw new Error(`Problem cloning monorepo: ${error}`);
    }
  }

  const tag = await latestRelease(packageName, inMonorepo);
  await execa('git', ['checkout', tag], {
    cwd: inMonorepo ? monoRepoDirectory : packageName,
    stdio: 'inherit',
  });

  const packagePath = monoRepoPackageSubdirectory(packageName); // used if in monoRepo
  const packageJson = path.join(
    inMonorepo ? packagePath : packageName,
    'package.json',
  );
  const packageJsonStr = (await readFile(packageJson)).toString();
  const packageJsonObj = JSON.parse(packageJsonStr);
  packageJsonObj['dependencies']['google-gax'] = `file:${gaxTarball}`;
  packageJsonObj['devDependencies']['gapic-tools'] = `file:${toolsTarball}`;
  await writeFile(packageJson, JSON.stringify(packageJsonObj, null, '  '));
  await execa('npm', ['install'], {
    cwd: inMonorepo ? packagePath : packageName,
    stdio: 'inherit',
  });
}

enum TestResult {
  PASS = 'PASS',
  FAIL = 'FAIL',
  SKIP = 'SKIP',
}

async function runScript(
  packageName: string,
  inMonorepo: boolean,
  script: string,
): Promise<TestResult> {
  try {
    await execa('npm', ['run', script], {
      cwd: inMonorepo ? monoRepoPackageSubdirectory(packageName) : packageName,
      stdio: 'inherit',
    });
    return TestResult.PASS;
  } catch (err) {
    const error = err as {stdout?: string; stderr?: string};
    const output = (error.stdout ?? '') + (error.stderr ?? '');
    if (output.match(/RESOURCE_EXHAUSTED/)) {
      return TestResult.SKIP;
    }
    return TestResult.FAIL;
  }
}

async function runSystemTest(
  packageName: string,
  inMonorepo: boolean,
): Promise<TestResult> {
  return await runScript(packageName, inMonorepo, 'system-test');
}

describe('Run system tests for some libraries', () => {
  before(async () => {
    console.log('Packing google-gax...');
    await execa('npm', ['pack'], {cwd: gaxDir, stdio: 'inherit'});
    if (!fs.existsSync(gaxTarball)) {
      throw new Error(`npm pack tarball ${gaxTarball} does not exist`);
    }
    console.log('Packing gapic-tools...');
    await execa('npm', ['install'], {
      cwd: path.join(gaxDir, '..', 'tools'),
      stdio: 'inherit',
    });
    await execa('npm', ['pack'], {
      cwd: path.join(gaxDir, '..', 'tools'),
      stdio: 'inherit',
    });
    await fs.promises.rename(
      path.join(gaxDir, '..', 'tools', toolsBasename),
      toolsTarball,
    );
    if (!fs.existsSync(toolsTarball)) {
      throw new Error(`npm pack tarball ${toolsTarball} does not exist`);
    }

    await fsp.rm(testDir, {recursive: true, force: true});
    await mkdir(testDir);
    process.chdir(testDir);
    console.log(`Running tests in ${testDir}.`);
  });

  // Speech has unary, LRO, and streaming
  // Speech is in the google-cloud-node monorepo
  describe('speech', () => {
    before(async () => {
      await preparePackage('speech', true);
    });
    it('should pass system tests', async function () {
      const result = await runSystemTest('speech', true);
      if (result === TestResult.SKIP) {
        this.skip();
      } else if (result === TestResult.FAIL) {
        throw new Error('Test failed');
      }
    });
  });
});
