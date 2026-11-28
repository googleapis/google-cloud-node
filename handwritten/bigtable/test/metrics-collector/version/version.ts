// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// eslint-disable-next-line n/no-extraneous-import, import/no-extraneous-dependencies
import {describe, it} from 'mocha';
import * as assert from 'node:assert';
import {spawnSync} from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';

function resolveVersionFixtureDir(): string {
  let candidateDir = __dirname;
  let prevDir = '';
  while (candidateDir !== prevDir) {
    const pkgJsonPath = path.join(candidateDir, 'package.json');
    if (fs.existsSync(pkgJsonPath)) {
      try {
        const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8')) as {
          name?: unknown;
        };
        if (pkg?.name === '@google-cloud/bigtable') {
          return path.join(
            candidateDir,
            'test',
            'metrics-collector',
            'version',
          );
        }
      } catch {
        // Ignore unreadable or malformed package.json files while walking up.
      }
    }
    prevDir = candidateDir;
    candidateDir = path.dirname(candidateDir);
  }
  throw new Error(
    `Could not resolve @google-cloud/bigtable package root from ${__dirname}`,
  );
}

function runVersionScript(scriptName: string): void {
  const versionDir = resolveVersionFixtureDir();
  const scriptPath = path.join(versionDir, scriptName);
  const result = spawnSync(process.execPath, [scriptPath], {
    cwd: versionDir,
    encoding: 'utf8',
  });
  assert.ifError(result.error);
  assert.strictEqual(
    result.status,
    0,
    `${scriptName} failed (status=${result.status}, signal=${result.signal})\nstdout:\n${result.stdout}\nstderr:\n${result.stderr}`,
  );
}

describe('Bigtable/CSMVersion', () => {
  it('Fetches the right client side metrics version', function () {
    this.timeout(30000);
    runVersionScript('get-version-script.js');
  });

  it('Fetches the right client side metrics version when imported via ESM', function () {
    this.timeout(30000);
    runVersionScript('get-version-script.mjs');
  });
});
