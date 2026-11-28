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

const fs = require('node:fs');
const path = require('node:path');

/**
 * Verifies that @google-cloud/bigtable records its own package.json version in
 * client-side metrics even when `process.cwd()` contains a different
 * `package.json` version.
 *
 * @param {object} deps Dependencies loaded via the caller's module system.
 * @param {Function} deps.Bigtable Bigtable client constructor.
 * @param {Function} deps.ClientSideMetricsConfigManager Metrics config manager
 *     constructor.
 */
async function verifyMetricsVersion({
  Bigtable,
  ClientSideMetricsConfigManager,
}) {
  const packagePath = path.join(__dirname, '../../../package.json');
  const expectedVersion = JSON.parse(
    fs.readFileSync(packagePath, 'utf8'),
  ).version;

  // Verify the working directory contains a distinct fake package.json so this
  // test genuinely guards against reading package.json from process.cwd().
  const cwdPackagePath = path.join(process.cwd(), 'package.json');
  const cwdVersion = JSON.parse(
    fs.readFileSync(cwdPackagePath, 'utf8'),
  ).version;
  if (cwdVersion === expectedVersion) {
    throw new Error(
      `Expected cwd package.json version (${cwdVersion}) to differ from @google-cloud/bigtable version (${expectedVersion})`,
    );
  }

  // Disable the default GCPMetricsHandler so constructing Bigtable does not
  // spawn GCE metadata HTTP probes or a 60s PeriodicExportingMetricReader
  // timer before we attach the recording handler.
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

  // Close the client before issuing getRows() so the operation completes
  // hermetically without making real DNS, auth, or network calls.
  await fakeBigtable.close();

  const instance = fakeBigtable.instance('fake-instance-id');
  const table = instance.table('fake-table-id');
  table.maxRetries = 0;
  try {
    await table.getRows();
  } catch {
    // Suppress expected error from closed client; we only inspect recorded
    // metrics.
  }

  if (requestsHandled.length === 0) {
    throw new Error('Expected at least one metrics event to be recorded');
  }
  const expectedClientName = `nodejs-bigtable/${expectedVersion}`;
  for (const request of requestsHandled) {
    if (request.client_name !== expectedClientName) {
      throw new Error(
        `The wrong version is being recorded: expected ${expectedClientName}, got ${request.client_name}`,
      );
    }
  }
}

module.exports = {verifyMetricsVersion};
