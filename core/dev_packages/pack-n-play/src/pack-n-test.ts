/**
 * Copyright 2023 Google LLC
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

import * as execa from 'execa';
import * as Arborist from '@npmcli/arborist';
import * as packlist from 'npm-packlist';
import * as path from 'path';
import * as tar from 'tar';
import {writeFile} from 'fs/promises';
import * as tmp from 'tmp';
import {rimraf} from 'rimraf';

// The way the user defines what type of input they're using for their code
// block is via a property name that reflects either the file extension or
// the type of module system used.
// Some of these are straightforward, such as `ts` to target TypeScript.
// Others such as `esm` and `mjs` are synonyms, meaning that the code block is
// written assuming usage of ECMAScript Modules
// (ref: https://nodejs.org/dist/latest-v18.x/docs/api/esm.html).
// Using a `cjs` codeblock means that the code block targets a CommonJS env
// (ref: https://nodejs.org/dist/latest-v18.x/docs/api/modules.html) and using
// `js` means that the default module system of the Node.js runtime is going
// to be used (which is currently, as of v20.x also CommonJS).
export interface CodeSample {
  js?: string;
  cjs?: string;
  esm?: string;
  mjs?: string;
  ts?: string;
  description: string;
  dependencies?: string[];
  devDependencies?: string[];
}

interface TestOptions {
  sample: CodeSample;
  packageDir?: string;
  /**
   * Path to a `tsconfig.json` file
   */
  tsconfigPath?: string;
}

interface Sample {
  code: string;
  filename: string;
}

function getSample(sample: CodeSample): Sample {
  if (!sample.js && !sample.cjs && !sample.esm && !sample.mjs && !sample.ts) {
    throw new Error('code block not defined');
  }

  return sample.ts
    ? {code: String(sample.ts), filename: 'index.ts'}
    : sample.esm
      ? {code: String(sample.esm), filename: 'index.mjs'}
      : sample.mjs
        ? {code: String(sample.mjs), filename: 'index.mjs'}
        : sample.cjs
          ? {code: String(sample.cjs), filename: 'index.cjs'}
          : {code: String(sample.js), filename: 'index.js'};
}

function getExecFilename(sample: CodeSample): string {
  const {filename} = getSample(sample);
  return filename === 'index.ts' ? 'index.js' : filename;
}

export async function pack(
  packageDir: string,
  targetDir: string,
): Promise<string> {
  const packageTarball = path.join(targetDir, 'module-under-test.tgz');
  const arb = new Arborist({path: packageDir});
  const tree = await arb.loadActual();
  const files = await packlist(tree);
  await tar.create(
    {
      prefix: 'package/',
      cwd: packageDir,
      file: packageTarball,
      gzip: true,
    },
    files,
  );
  return packageTarball;
}

/**
 * `gts`'s `tsconfig.json`.
 */
const GTS_CONFIG_PATH = './node_modules/gts/tsconfig-google.json';

export async function packNTest(options: TestOptions) {
  const moduleUnderTest = options.packageDir || process.cwd();
  const installDir = tmp.dirSync().name;

  try {
    const tarball = await pack(moduleUnderTest, installDir);
    await prepareTarget(tarball);
    const filename = getExecFilename(options.sample);
    await execa('node', [filename], {cwd: installDir});
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    await rimraf(installDir);
  }
  return;

  async function prepareTarget(tarball: string) {
    // Generate a package.json.
    await execa('npm', ['init', '-y'], {cwd: installDir});
    const sample = options.sample;
    const tsconfigPath = options.tsconfigPath || GTS_CONFIG_PATH;

    const dependencies = sample.dependencies || [];
    const devDependencies = sample.devDependencies || [];

    if (sample.ts) {
      devDependencies.push('typescript');
      devDependencies.push('@types/node');

      if (tsconfigPath === GTS_CONFIG_PATH) {
        devDependencies.push('gts');
      }
    }

    // Add dependencies, including tarball, to package.json.
    // TODO: modify package.json rather than spawning npm.
    await execa(
      'npm',
      ['install', '--prefer-offline', '--save', tarball].concat(dependencies),
      {cwd: installDir},
    );

    await execa(
      'npm',
      ['install', '--prefer-offline', '--save-dev'].concat(devDependencies),
      {cwd: installDir},
    );

    // Populate test code.
    const {code, filename} = getSample(sample);
    await writeFile(path.join(installDir, filename), code, 'utf-8');

    if (sample.ts) {
      const testConfig = {
        extends: tsconfigPath,
        files: ['index.ts'],
        compilerOptions: {
          rootDir: '.',
          resolveJsonModule: true,
          lib: ['es2023', 'dom'],
        },
      };

      // this is the config `tsc` will use for compilation locally.
      await writeFile(
        path.join(installDir, 'tsconfig.json'),
        JSON.stringify(testConfig),
      );

      await execa('npx', ['tsc'], {cwd: installDir});
    }
  }
}
