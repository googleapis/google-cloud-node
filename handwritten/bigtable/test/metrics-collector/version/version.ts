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
import {pathToFileURL} from 'node:url';

function resolveVersionFixtureDir(): {pkgRoot: string; versionDir: string} {
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
          return {
            pkgRoot: candidateDir,
            versionDir: path.join(
              candidateDir,
              'test',
              'metrics-collector',
              'version',
            ),
          };
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

describe('Bigtable/CSMVersion', () => {
  it('Fetches the right client side metrics version', function () {
    this.timeout(30000);
    const {versionDir} = resolveVersionFixtureDir();
    const scriptPath = path.join(versionDir, 'get-version-script.js');
    const result = spawnSync(process.execPath, [scriptPath], {
      cwd: versionDir,
      encoding: 'utf8',
    });
    assert.ifError(result.error);
    assert.strictEqual(
      result.status,
      0,
      `get-version-script failed (status=${result.status}, signal=${result.signal})\nstdout:\n${result.stdout}\nstderr:\n${result.stderr}`,
    );
  });

  it('Fetches the right client side metrics version when imported via ESM', function () {
    this.timeout(30000);
    const {pkgRoot, versionDir} = resolveVersionFixtureDir();
    const bigtableUrl = pathToFileURL(
      path.join(pkgRoot, 'build', 'src', 'index.js'),
    ).href;
    const configManagerUrl = pathToFileURL(
      path.join(
        pkgRoot,
        'build',
        'src',
        'client-side-metrics',
        'metrics-config-manager.js',
      ),
    ).href;
    const packageJsonPath = path.join(pkgRoot, 'package.json');
    const esmScript = `
import fs from 'node:fs';
import path from 'node:path';
import BigtablePkg from ${JSON.stringify(bigtableUrl)};
import ConfigManagerPkg from ${JSON.stringify(configManagerUrl)};

const {Bigtable} = BigtablePkg;
const {ClientSideMetricsConfigManager} = ConfigManagerPkg;
const expectedVersion = JSON.parse(
  fs.readFileSync(${JSON.stringify(packageJsonPath)}, 'utf8'),
).version;
const cwdVersion = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8'),
).version;
if (cwdVersion === expectedVersion) {
  throw new Error(
    \`Expected cwd package.json version (\${cwdVersion}) to differ from @google-cloud/bigtable version (\${expectedVersion})\`,
  );
}

const fakeBigtable = new Bigtable({
  projectId: 'projectId',
  metricsEnabled: false,
});
const requestsHandled = [];
fakeBigtable._metricsConfigManager = new ClientSideMetricsConfigManager([
  {
    onOperationComplete(data) {
      requestsHandled.push(data);
    },
    onAttemptComplete(data) {
      requestsHandled.push(data);
    },
  },
]);

await fakeBigtable.close();
const table = fakeBigtable.instance('fake-instance-id').table('fake-table-id');
table.maxRetries = 0;
try {
  await table.getRows();
} catch (e) {
  // Suppress expected error from closed client; we only inspect recorded metrics.
}

if (requestsHandled.length === 0) {
  throw new Error('Expected at least one metrics event to be recorded');
}
const expectedClientName = \`nodejs-bigtable/\${expectedVersion}\`;
for (const request of requestsHandled) {
  if (request.client_name !== expectedClientName) {
    throw new Error(
      \`The wrong version is being recorded: expected \${expectedClientName}, got \${request.client_name}\`,
    );
  }
}
`;
    const result = spawnSync(
      process.execPath,
      ['--input-type=module', '-e', esmScript],
      {
        cwd: versionDir,
        encoding: 'utf8',
      },
    );
    assert.ifError(result.error);
    assert.strictEqual(
      result.status,
      0,
      `ESM version check failed (status=${result.status}, signal=${result.signal})\nstdout:\n${result.stdout}\nstderr:\n${result.stderr}`,
    );
  });
});
